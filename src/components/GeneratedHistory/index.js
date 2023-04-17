import { useState } from "react"

import './index.scss'

import Snapshot from "./Snapshot"
import Step from "./Step"

const GeneratedHistory = (props) => {
  const [savedHistories, setSavedHistory] = useState([]);
  const [isRollback, setIsRollback] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(100);

  return (
    <>
      <div className="history-container">
        <div>
          <h2>Check Your History</h2>
          <Step
            initialPrompt={props.initialPrompt}
            currentHistories={props.currentHistories}
            currentResults={props.currentResults}
            setCurrentResults={props.setCurrentResults}
            setCurrentHistories={props.setCurrentHistories}
            savedHistories={savedHistories}
            setSavedHistory={setSavedHistory}
            isRollback={isRollback}
			      getSuggestion={props.getSuggestion}
            setIsRollback={setIsRollback}
            selectedIdx={selectedIdx}
            setSelectedIdx={setSelectedIdx}
          />
        </div>
        <Snapshot
          currentHistories={props.currentHistories}
          currentResults={props.currentResults}
          setCurrentResults={props.setCurrentResults}
          setCurrentHistories={props.setCurrentHistories}
          savedHistories={savedHistories}
          setIsRollback={setIsRollback}
          setSelectedIdx={setSelectedIdx}
        />
      </div>
    </>
  )
}

export default GeneratedHistory
