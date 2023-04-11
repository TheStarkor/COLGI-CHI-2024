import { useEffect, useState } from "react"

import { Form } from "antd"
import Question from "./Question";
import Answer from "./Answer";

import './index.scss';

import { qna as dummyQna, images as dummyImages } from './dummyData';

const Qna = (props) => {
  const [suggestions, setSuggestion] = useState([]);
  const [selectedQna, setSelectedQna] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    getSuggestion()
  }, []);

  const getSuggestion = async () => {
    setSuggestion(dummyQna)
  }

  const selectQna = (suggestion) => {
    console.log('25', suggestion)
    setSelectedQna(suggestion)
  }

  const customQuestion = (question) => {
    // TODO: generate answers with GPT

    setSelectedQna({
      question: question,
      answer_1: "Red",
      answer_2: "Blue",
      answer_3: "TEST",
      answer_4: "Ok"
    })
  }

  const generateResult = async (values) => {
    // TODO: 승호야 힘내..
    let new_prompts = {
      q: selectedQna.question,
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

    const items = [values.answer1, values.answer2, values.answer3, values.answer4, values.answer5]
    items.map(async (value, idx) => {
      if (!value) return;
      /* --------------- 실제 환경 ------------------ */
      // const prompt = solutionPrompt(histories, values, value, props.prompt)

      // const resp = await axios.post(`/gpt/complete`, {
      //   prompt: prompt,
      //   cnt: 1,
      // });

      // new_prompts[`p${Number(idx) + 1}_answer`] = value
      // new_prompts[`p${Number(idx) + 1}`] = resp.data.result[0]
      // setPrompt({...new_prompts})

      // const img_resp = await axios.get(generateUrl(resp.data.result[0]))
      // // const img_resp = await axios.get('?cnt=6')
      // new_prompts[`p${Number(idx) + 1}_images`] = img_resp.data.result
      // setPrompt({...new_prompts})


      /* --------------- 더미 ------------------ */
      new_prompts[`p${Number(idx) + 1}_answer`] = value
      new_prompts[`p${Number(idx) + 1}`] = 'promptprompt'
      new_prompts[`p${Number(idx) + 1}_images`] = dummyImages
      props.setCurrentResults({ ...new_prompts })
    })
  }

  return (
    <>
      <div className="question-container">
        <Question
          suggestions={suggestions}
          getSuggestion={getSuggestion}
          selectQna={selectQna}
          customQuestion={customQuestion}
        />
        <Answer
          form={form}
          selectedQna={selectedQna}
          generateResult={generateResult}
        />
      </div>
    </>
  )
}

export default Qna
