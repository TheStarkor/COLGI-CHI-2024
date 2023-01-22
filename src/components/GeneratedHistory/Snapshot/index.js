import { Button, Modal, Image } from "antd"
import { useState } from "react";

import './index.scss'

const Snapshot = (props) => {

  const [openIdx, setopenIdx] = useState(100);  
  const [tempResults, setTempResults] = useState([]);
  const [tempHistories, setTempHistories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const setSelectedIdx = props.setSelectedIdx
  const setIsRollback = props.setIsRollback

  const revert = () => {
    // TODO: 지승아 힘내...
    setIsModalOpen(true);
  }

  const cancelRevert = () => {
    setIsModalOpen(false);
  }

  const confirmRevert = () => {
    // TODO: 지승아 힘내...
    // console.log('sanpshot', props.savedHistories[openIdx])
    setIsModalOpen(false);
    props.setCurrentHistories(props.savedHistories[openIdx])
    setIsRollback(false)
    setSelectedIdx(100)
  }

  const openIndex = (idx) => {
    setopenIdx(idx)
    console.log('openidx?', openIdx)
  }

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
            {props.savedHistories?.length > openIdx
              &&
              <div className="revert-button-container">
                <Button onClick={revert}>revert</Button>
              </div>}

          </div>
          <Modal
            title="Warning"
            className="modal"
            // style={{borderRadius:'10px'}}
            open={isModalOpen}
            onOk={confirmRevert}
            onCancel={cancelRevert}
          >
            <p>확인을 누르면 이전단계는 저장되지 않습니다. </p>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Snapshot
