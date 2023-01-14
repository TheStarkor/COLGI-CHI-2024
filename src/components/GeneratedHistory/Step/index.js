import { Button, Row, Col, Popover, Form, Image } from "antd"
import { useState } from "react";

const Step = (props) => {
  const [isRollback, setIsRollback] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(100);
  const [tempResults, setTempResults] = useState([]);

  // console.log('step', props)
  const rollback = (history, idx) => {
    setSelectedIdx(idx)
    setTempResults({...props.currentResults});
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
    props.setCurrentResults(new_prompts);
  }
  const cancelRollback = () => {
    setIsRollback(false)
    setSelectedIdx(100)
    props.setCurrentResults(tempResults)
  }
  const confirmRollback = () => {
    props.setCurrentHistories([...props.currentHistories.slice(0, selectedIdx + 1)])
    cancelRollback()
  }

  return (
    <>
      <div>
        <h2>Check Your History</h2>
        {isRollback &&
          <>
            <Button onClick={cancelRollback}>Cancel</Button>
            <Button onClick={confirmRollback}>Confirm</Button>
          </>
        }
      </div>

      {props.currentHistories && props.currentHistories.map((history, idx) => (
        <>
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

      <Button onClick={() => props.setSavedHistory(props.currentHistories)}>save direction</Button>
    </>
  )
}

export default Step
