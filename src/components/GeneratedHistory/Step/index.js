import { Button, Row, Col, Popover, Form, Image } from "antd"
import { SaveOutlined } from '@ant-design/icons'
import { useState } from "react";


import './index.scss';

const Step = (props) => {
  
  const [tempResults, setTempResults] = useState([]);
  const selectedIdx = props.selectedIdx
  const setSelectedIdx = props.setSelectedIdx
  const isRollback = props.isRollback
  const setIsRollback = props.setIsRollback

  // console.log('step', props)
  const rollback = (history, idx) => {
    setSelectedIdx(idx)
    setTempResults({ ...props.currentResults });
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
      <div className="step-container">
        <div>
          {isRollback &&
            <>
              <div className="rollback-button-container">
                <Button
                  className="rollback-cancel-button"
                  onClick={cancelRollback}>
                  Cancel
                </Button>
                <Button
                  className="rollback-button"
                  onClick={confirmRollback}>
                  Confirm
                </Button>
              </div>
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
                    className='image'
                    src={image}
                  />
                </>
              ))}
              <div>
                {(history?.others[0].answer.length !== 0) && <span>answers: </span>}
                {history?.others.map(other => (
                  <span className='question'>{other.answer} </span>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>

      {props.currentHistories.length !== 0 &&
        <>
          <div
            className="savedirection-button-container"
          >
            <Button
              className="savedirection-button"
              onClick={() => props.setSavedHistory([...props.savedHistories, props.currentHistories])}
            >
              <p className="desc">Save direction</p>
              <SaveOutlined style={{ fontSize: '12px' }} />
            </Button>
          </div>
          {/* <Button
            className="savedirection-button"
            style={{ border: '0', }}
            onClick={() => props.setSavedHistory(props.currentHistories)}>save direction
          </Button> */}
        </>
      }

    </>
  )
}

export default Step
