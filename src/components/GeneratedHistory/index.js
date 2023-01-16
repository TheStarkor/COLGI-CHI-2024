import { useState } from "react"

import './index.scss'

import Snapshot from "./Snapshot"
import Step from "./Step"

const GeneratedHistory = (props) => {
  const [savedHistories, setSavedHistory] = useState([]);

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
          />
        </div>
        <Snapshot
          currentHistories={props.currentHistories}
          currentResults={props.currentResults}
          setCurrentResults={props.setCurrentResults}
          setCurrentHistories={props.setCurrentHistories}
          savedHistories={savedHistories}
        />
      </div>
    </>
  )
}

export default GeneratedHistory
