require('dotenv').config();
const AWS = require('aws-sdk');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY
});
const openai = new OpenAIApi(configuration);

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'ap-northeast-2'
})

const uploadImage = async (image, key) => {
  let param = {
    'Bucket': 'colgi-image',
    'Key': key,
    'ACL': 'public-read',
    'Body': image,
    'ContentType': 'image/jpeg'
  }

  return (await s3.upload(param).promise()).Location
}

const generate_text = async (prompt, count) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.4,
    max_tokens: 2000,
	n: count
  });

  return response.data.choices
}

const generate_image = async (prompt, cnt) => {
  console.log(prompt)
  const dir = prompt.replace(/ /g,"_");

  const name = `${prompt}`

  const _startTime = new Date().getTime();
  console.log(`${name} 시작시간: ${_startTime}`)
  const out = await openai.createImage({
    prompt: prompt,
    n: cnt,
    size: "512x512",
  });

  const _endTime = new Date().getTime();
  console.log(`${name} 동작시간: ${_endTime - _startTime} ms`);
  console.log(out.data.data)
	
  const results = out.data.data.map(item => item.url)
	
  return results
}

const getListObjectsInBucket = async (bucketName, prefix) => {
  let bucketParams = {
    Bucket: bucketName,
    Prefix: prefix ? `${prefix}/` : ''
  }

  const out = await s3.listObjects(bucketParams).promise();

  return out;
}

module.exports = { uploadImage, generate_image, generate_text, getListObjectsInBucket }
