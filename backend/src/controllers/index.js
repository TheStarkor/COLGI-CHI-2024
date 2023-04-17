const { generate_image, generate_text } = require('../services')
const { GeneratedImage, Prompt, MetaData } = require('../models');


module.exports = {
  testAPI: async (req, res, next) => {
    try {
      const cnt = req.query.cnt || 1
      if (cnt > 6) {
        res.send({
          "err": "6개를 초과하여 이미지를 생성할 수 없습니다."
        })

        return;
      }
      let prompt = req.query.prompt || 'cat';
      prompt.replace(/ /g,"_");

      const result = [
        "https://colgi-image.s3.ap-northeast-2.amazonaws.com/cow/out-613582483-1669654502894.jpg",
        "https://colgi-image.s3.ap-northeast-2.amazonaws.com/cow/out-459866182-1669654502898.jpg",
        "https://colgi-image.s3.ap-northeast-2.amazonaws.com/cow/out-62685128-1669654502901.jpg",
        "https://colgi-image.s3.ap-northeast-2.amazonaws.com/cow/out-168903148-1669654502905.jpg",
        "https://colgi-image.s3.ap-northeast-2.amazonaws.com/cow/out-644342377-1669654502908.jpg",
        "https://colgi-image.s3.ap-northeast-2.amazonaws.com/cow/out-796107681-1669654502911.jpg"
      ]

      res.json({
        result: result.slice(0, cnt)
      })
    } catch (error) {
      next(error);
    }
  },
  generateController: async (req, res, next) => {
    try {
      const prompt = req.query.prompt
      const cnt = req.query.cnt || 1
      const stage = req.query.stage || "test"
	  console.log(cnt)

      if (!prompt) {
        res.send({
          "err": "프롬프트를 입력해주세요"
        })

        return;
      }

      const result = await generate_image(prompt, Number(cnt));

      res.json({
        result: result
      })
    } catch (error) {
      next(error);
    }
  },
  completeController: async (req, res, next) => {
    try {
      const prompt = req.query.prompt
	  const cnt = req.query.cnt || 4
		if (!prompt) {
		  res.send({
			"err": "프롬프트를 입력해주세요"
		  })

		  return;
		}
		console.log(prompt)

		const result = await generate_text(prompt, Number(cnt));

		console.log(result);

		res.json({
		  result: result
		})
    } catch (error) {
      next(error);
	}
  }
}
