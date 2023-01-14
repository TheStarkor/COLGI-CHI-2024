import { Button, Row, Col, Popover, Form, Image } from "antd"
import { useState } from "react";

const Snapshot = (props) => {
  console.log('sanpshot', props.savedHistories)
  const [isRevert, setIsRevert] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(100);
  const [tempResults, setTempResults] = useState([]);
  const [tempHistories, setTempHistories] = useState([]);

  const revert = () => {
    // TODO: result temp 저장 후 업데이트
    // TODO: history temp 저장 후 업데이트
    // TODO: selectedIdx 업데이트
  }

  const cancelRevert = () => {
    // TODO: temp로 바꾸기 둘 다 + idx = 100 바꾸기
  }

  const confirmRevert = () => {
    // TODO: 경고창 띄워주기
    // TODO: temp 다 비우기 / idx 초기화
  }

  return (
    <>
      {props.savedHistories?.length !== 0 && props.savedHistories.map(savedHistory => (
        <>
          <div className="saved-box">
            <div>{savedHistory[0]?.question}</div>
            <div>{savedHistory[0]?.answer}</div>
            <Image style={{ width: '50px', height: '50px' }}
              src={savedHistory[0]?.images[0]} />
            {/* <Button onClick={() => historyRevert(savedHistory)}>Revert</Button> */}
          </div>
        </>
      ))}
    </>
  )
}

export default Snapshot
