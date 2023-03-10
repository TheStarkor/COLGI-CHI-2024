import { useEffect, useState } from "react";
import axios from "axios"

import { Button, Row, Col, Popover, Form, Image } from "antd"
import { CaretRightOutlined } from '@ant-design/icons'

import { questionPrompt, solutionPrompt } from "./promptHelper";
import { qna as dummyQna, images as dummyImages } from './dummyData';

import Answer from "./Answer";
import Question from "./Question";
import ShowImage from "./ShowImage";
import Header from "../../components/Header/Header";

const generateUrl = (prompt) => {
  return `/generate?prompt=${prompt}&model=SD1-prod&cnt=6&name=test`
}

const Home = (props) => {
  const [histories, setHistory] = useState([]);
  const [suggestions, setSuggestion] = useState(null);
  const [prompts, setPrompt] = useState([])
  const [savedHistories, setSavedHistory] = useState([]);
  const [sAnswers, setSAnswers] = useState([])
  const [selectedIdx, setSelectedIdx] = useState(100);
  const [isRollback, setIsRollback] = useState(false);
  const [form] = Form.useForm();


  useEffect(() => {
    initPrompts();
    getQuestion();
  }, []);

  const getQuestion = async (histories = null) => {
    /* --------------- 실제 환경 ------------------ */
    // const prompt = questionPrompt(histories, props.prompt);
    // const resp = await axios.post(`/gpt/complete`, {
    //   prompt: prompt,
    //   cnt: 4,
    //   type: 'qna'
    // });

    // setSuggestion(resp.data.result)

    /* --------------- 더미 ------------------ */
    setSuggestion(dummyQna)
  }

  const initPrompts = () => {
    setPrompt({
      q: '',
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
    })
  }

  const onFinish = async (values) => {
    initPrompts();

    let new_prompts = {
      q: values.question,
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
      setPrompt({ ...new_prompts })
    })
  }

  const addHistory = ({ question, answer, images }) => {
    // prompts.map(prompt => {
    //   console.log(prompt)
    // })
    // console.log(prompts)
    const new_history = [
      ...histories,
      {
        question: prompts.q,
        answer: prompts.p1_answer,
        prompt: prompts.p1,
        images: prompts.p1_images,
        others: [
          {
            answer: prompts.p2_answer,
            images: prompts.p1_images,
            prompt: prompts.p2
          },
          {
            answer: prompts.p3_answer,
            images: prompts.p1_images,
            prompt: prompts.p3
          }
        ]
      }
    ]

    console.log(new_history)

    setHistory(new_history)
    getQuestion(new_history);
  };

  const onFill = (values) => {
    form.setFieldsValue({
      question: values.question,
      // s_answer_1 : values.answer_1,
      // s_answer_2 : values.answer_2,
      // s_answer_3 : values.answer_3,
      // s_answer_4 : values.answer_4,
    })
    setSAnswers([values.answer_1, values.answer_2, values.answer_3, values.answer_4])
  }

  const saveDirection = (histories) => {
    const temp_history = [...savedHistories, histories]
    console.log('temp', temp_history)
    setSavedHistory(temp_history)
    console.log('savedHistories', savedHistories)
  }

  // console.log('d', savedHistories[0])

  const rollback = (history, idx) => {
    setSelectedIdx(idx)
    setIsRollback(true)
    let new_prompts = {
      q: history.question,
      p1: history.prompt,
      p1_answer: history.answer,
      p1_images: history.images,
      p2: history.others[0].prompt,
      p2_answer: history.others[0].answer,
      p2_images: history.others[0].images,
      p3: history.others[1].prompt,
      p3_answer: history.others[1].answer,
      p3_images: history.others[1].images,
      p4: '',
      p4_answer: '',
      p4_images: [],
    }
    console.log(new_prompts)
    setPrompt(new_prompts)
  }

  const cancelRollback = () => {
    setIsRollback(false)
    setSelectedIdx(100)
  }
  const confirmRollback = () => {
    //console.log('sliced', histories.slice(0, selectedIdx + 1))
    setHistory([...histories.slice(0, selectedIdx + 1)])
    cancelRollback()
  }

  const historyRevert = (history) => {
    console.log('saved', history)
    //TODO 경고창 띄워주기, 저장개수가 무한으로 늘어남...
    setHistory([...history])
    cancelRollback()
  }

  // console.log('history', selectedIdx)
  return (
    <>
      <Header/>
      <div className="helper-container">

        <div className="history-container">

          <h2>Check Your History</h2>
          {isRollback &&
            <>
              <Button onClick={cancelRollback}>Cancel</Button>
              <Button onClick={confirmRollback}>Confirm</Button>
            </>
          }
          <p>You can generate images based on your Q&A and histories</p>
          {/* {(histories?.length !== 0) && <Button onClick={() => undo(histories)}>Undo</Button>} */}

          {"Initial" &&
            <Popover placement="top" title="Initial Prompt" content={"Initial"} trigger="hover">
              <Button className="history-initial" type="primary">{"Initial"}</Button>
            </Popover>
          }

          {histories && histories.map((history, idx) => (
            <>
              {/* <Popover placement="bottom" title={history.question} content={history.answer} trigger="hover">
                    <Button onClick={() => rollback(history)} style={{ marginRight: '5px', borderRadius: '30px' }}>{history.answer}</Button>
                  </Popover>
                   */}
              <div className={`history-box ${(selectedIdx < idx) ? 'disabled' : ''}`} onClick={() => rollback(history, idx)}>
                <div className='question'>Q. {history.question}</div>
                <div className='answer'>A. {history.answer}</div>
                {history?.images.map(image => (
                  <>
                    <Image
                      className ='image'
                      src={image}
                    />
                  </>
                ))}
                <div>
                  {(history?.others[0].answer.length !== 0) && <span>others: </span>}
                  {history?.others.map(other => (
                    <span className='question'>{other.answer} </span>
                  ))}
                </div>


              </div>
            </>
          ))}
          <Button onClick={() => saveDirection(histories)}>save direction</Button>

          {savedHistories?.length !== 0 && savedHistories.map(savedHistory => (
            <>
              <div className="saved-box">
                <div>{savedHistory[0]?.question}</div>
                <div>{savedHistory[0]?.answer}</div>
                <Image style={{ width: '50px', height: '50px' }}
                  src={savedHistory[0]?.images[0]} />
                <Button onClick={() => historyRevert(savedHistory)}>Revert</Button>
              </div>
            </>
          ))}

        </div>

        {/* <h3>Test Your Ideas</h3> */}
        <div className="question-container">
          <h2>Get questions and give answer</h2>
          <p>You can get random questions based on your history</p>
          <Question onFill={onFill} suggestions={suggestions} getQuestion={() => getQuestion(histories)} />
          <Answer form={form} onFinish={onFinish} sAnswers={sAnswers} onFill={onFill} />
        </div>

        <div className="photo-container">
          <h2>Generated Images</h2>
          <p>You can get random questions based on your history</p>
          {prompts?.p1 !== '' && <ShowImage prompts={prompts} addHistory={addHistory} />}
        </div>
      </div>
    </>
  )
}

export default Home
