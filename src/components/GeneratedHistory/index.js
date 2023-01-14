import { useState } from "react"
import Snapshot from "./Snapshot"
import Step from "./Step"

const GeneratedHistory = (props) => {
  const [savedHistories, setSavedHistory] = useState([]);

  return (
    <>
      <Step
        initialPrompt={props.initialPrompt}
        currentHistories={props.currentHistories}
        currentResults={props.currentResults}
        setCurrentResults={props.setCurrentResults}
        setCurrentHistories={props.setCurrentHistories}
        setSavedHistory={setSavedHistory}
      />
      <Snapshot
        currentHistories={props.currentHistories}
        currentResults={props.currentResults}
        setCurrentResults={props.setCurrentResults}
        setCurrentHistories={props.setCurrentHistories}
        savedHistories={savedHistories}
      />
    </>
  )
}

export default GeneratedHistory
