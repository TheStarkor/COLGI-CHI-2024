const { getListObjectsInBucket } = require('../services');

const { Prompt, GeneratedImage, MetaData, User } = require('../models');

module.exports = {
  getPrompt: async (req, res, next) => {
    try {
      const p = Prompt.findAll();

      const prompts = (await p).map(item => (
        item.prompt
      ))
      const labeledCount = await GeneratedImage.count();

      const total = await getListObjectsInBucket('colgi-image', null)
      const totalCount = total.Contents.length

      let directories = total.Contents.map(item => {
        const parsed = item.Key.split('/')
        return parsed[0]
      })

      directories = new Set(directories);
      directories = [...directories];

      res.json({
        prompts: prompts,
        directories: directories,
        labeledCount: labeledCount,
        totalCount: totalCount
      })
    } catch (error) {
      next(error);
    }
  },
  getItems: async (req, res, next) => {
    try {
      const page = (req.query.page && parseInt(req.query.page)) || 1;
      const cnt = (req.query.cnt && parseInt(req.query.cnt)) || 30;
      let prefix = req.query.prefix
      if (!prefix) {
        res.send({
          "err": "정확한 prefix를 입력해주세요"
        })

        return;
      }

      prefix = prefix.replace(/ /g,"_");

      const objects = await getListObjectsInBucket('colgi-image', prefix);
      const totalCount = objects.Contents.length;
      const startIdx = cnt * (page - 1)
      const contents = objects.Contents.slice(startIdx, startIdx + cnt);

      res.json({
        totalCount: totalCount,
        items: contents
      })
    } catch (error) {
      next(error);
    }
  },
  getLabeledItems: async (req, res, next) => {
    try {
      const page = (req.query.page && parseInt(req.query.page)) || 1;
      const cnt = (req.query.cnt && parseInt(req.query.cnt)) || 30;
      const offset = 0 + (page - 1) * cnt;
      let prefix = req.query.prefix

      if (!prefix) {
        res.send({"err": "prefix를 입력해주세요"});

        return;
      }

      const p = await Prompt.findOne({ where: { prompt: prefix } });

      const images = await GeneratedImage.findAndCountAll({
        offset: offset,
        limit: cnt,
        include: [
          { model: MetaData }
        ],
        where: {
          PromptId: p.id
        }
      })

      res.json({
        totalCount: images.count,
        items: images.rows
      })
    } catch (error) {
      next(error);
    }
  }
}
