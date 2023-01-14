import { Button, Row, Col, Popover, Form, Image } from "antd"
import { useState } from "react";

const Snapshot = (props) => {
  console.log('sanpshot', props.savedHistories)
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
