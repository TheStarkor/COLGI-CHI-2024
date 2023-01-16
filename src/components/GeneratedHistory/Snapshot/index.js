import { Button, Row, Col, Popover, Form, Image } from "antd"
import { useState } from "react";

import './index.scss'

const Snapshot = (props) => {
  console.log('sanpshot', props.savedHistories)
  const [openIdx, setopenIdx] = useState(100);
  const [isRevert, setIsRevert] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(100);
  const [tempResults, setTempResults] = useState([]);
  const [tempHistories, setTempHistories] = useState([]);

  const revert = () => {
    // TODO: 지승아 힘내...
  }

  const cancelRevert = () => {
    // TODO: 지승아 힘내...
  }

  const confirmRevert = () => {
    // TODO: 지승아 힘내...
  }

  const openIndex = (idx) => {
    setopenIdx(idx)
    console.log('openidx?', openIdx)
  }

  console.log('snapshot', props.savedHistories)

  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8' }}>
        <div className="snapshot-container">
          <div className="snapshot-images">
            {props.savedHistories?.length !== 0 && props.savedHistories.map((savedHistory, idx) => (
              <>
                <Image
                  className={`snapshot-image ${(openIdx === idx) ? 'selected' : 'unselected'}`}
                  src={savedHistory[savedHistory.length - 1]?.images[0]}
                  onClick={() => openIndex(idx)}
                  preview={false}
                />
                {/* <Button onClick={() => historyRevert(savedHistory)}>Revert</Button> */}
              </>
            ))}
          </div>
          <div>
            {props.savedHistories?.length > openIdx
              && props.savedHistories?.[openIdx]
              && props.savedHistories?.[openIdx].map(step => (
                <>
                <div className="snapshot-qna">
                  <span className="snapshot-question">Q. {step.question}</span>
                  <span className="snapshot-answer">  {step.answer}</span>
                </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Snapshot
