import { useState } from "react"
import axios from "axios";
import Question from "./Question";
import Answer from "./Answer";

import './index.scss';

import { qna as dummyQna, images as dummyImages } from './dummyData';

const qnaPrompt = (question) => {
	return `I am an expert in generating image descriptions. I ask questions to gather information. Then I use this information to generate an image description.

Question: ${question}

give me five sample answers  with my question
output format is JSON and sample is {"question": question, "answer_1": answer_1,  "answer_2": answer_2, ...}

output:`
}

const solutionPrompt = (histories, question, value, initialPrompt = null) => {
  let history = '';
  if (histories !== []) {
	histories.map(item => {history = history + `question: ${item.question}\nanswer: ${item.answer}\n`})
  }
  console.log(history)

  return `I am an expert in generating image descriptions. I gathered questions and answers to generate detailed information. Then I use this information to generate an image description.

${initialPrompt && `My initial description is "${initialPrompt}"\n`}
${(histories !== []) ? history : ''}question: ${question}
answer: ${value}

give me an image description (single sentence):`
}

const Qna = (props) => {
	const [isLoading, setLoading] = useState(false);

  const selectQna = (suggestion) => {
    props.setSelectedQna(suggestion)
  }

  const customQuestion = async (question) => {
    const query = qnaPrompt(question)
    const resp = await axios.get(`https://colgi-api.run.goorm.site/complete?prompt=${query}&cnt=1`)
    const qna = JSON.parse(resp.data.result[0].text)

    props.setSelectedQna(qna)
  }

  const generateResult = async (values) => {
    // TODO: 승호야 힘내..
    let new_prompts = {
      q: props.selectedQna.question,
      p1: '',
      p1_answer: '',
      p1_images: [],
      p2: '',
      p2_answer: '',
      p2_images: [],
      p3: '',
      p3_answer: '',
      p3_images: [],
      p4: '',
      p4_answer: '',
      p4_images: [],
      p5: '',
      p4_answer: '',
      p5_images: [],
    }
	  setLoading(true);
    const items = [values.answer1, values.answer2, values.answer3, values.answer4, values.answer5]
    await Promise.all(items.map(async (value, idx) => {
      if (!value) return;
      /* --------------- 실제 환경 ------------------ */
      const prompt = solutionPrompt(props.currentHistories, props.selectedQna.question, value, props.prompt)
      const resp = await axios.get(`https://colgi-api.run.goorm.site/complete?prompt=${prompt}`)
	    const image_description = resp.data.result[0].text
	
      new_prompts[`p${Number(idx) + 1}_answer`] = value
      new_prompts[`p${Number(idx) + 1}`] = image_description

      const img_resp = await axios.get(`/generate?prompt=${image_description}&cnt=6`)
      new_prompts[`p${Number(idx) + 1}_images`] = img_resp.data.result


      /* --------------- 더미 ------------------ */
      // new_prompts[`p${Number(idx) + 1}_answer`] = value
      // new_prompts[`p${Number(idx) + 1}`] = 'promptpromptpromptpromptpromptpromptpromptpromptpromptpromptpromptprompt'
      // new_prompts[`p${Number(idx) + 1}_images`] = dummyImages
      props.setCurrentResults({ ...new_prompts })
    }))
    setLoading(false);
  }

  return (
    <>
      <div className="question-container">
        <Question
          suggestions={props.suggestions}
          getSuggestion={props.getSuggestion}
          selectQna={selectQna}
          customQuestion={customQuestion}
        />
        <Answer
          form={props.form}
		      isLoading={isLoading}
          selectedQna={props.selectedQna}
          generateResult={generateResult}
        />
      </div>
    </>
  )
}

export default Qna
