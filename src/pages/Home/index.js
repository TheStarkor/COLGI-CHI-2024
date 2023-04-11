import { useState } from "react";

import './index.scss'

import Header from "../../components/Header/Header";
import Qna from "../../components/Qna";
import GeneratedResult from "../../components/GeneratedResult";
import GeneratedHistory from "../../components/GeneratedHistory";
import { useParams } from "react-router-dom";

const Home = () => {
  const [currentHistories, setCurrentHistories] = useState([]);
  const [currentResults, setCurrentResults] = useState([]);
  const { prompt } = useParams();

  const addHistory = () => {
    // TODO: 승호야 힘내...
    const new_history = [
      ...currentHistories,
      {
        question: currentResults.q,
        answer: currentResults.p1_answer,
        prompt: currentResults.p1,
        images: currentResults.p1_images,
        others: [
          {
            answer: currentResults.p2_answer,
            images: currentResults.p1_images,
            prompt: currentResults.p2
          },
          {
            answer: currentResults.p3_answer,
            images: currentResults.p1_images,
            prompt: currentResults.p3
          }
        ]
      }
    ]

    setCurrentHistories(new_history);
  };

  return (
    <>
      <Header/>

      <div className="home-container">
        <GeneratedHistory
          initialPrompt={prompt}
          currentResults={currentResults}
          currentHistories={currentHistories}
          setCurrentHistories={setCurrentHistories}
          setCurrentResults={setCurrentResults}
        />
        <Qna
          initialPrompt={prompt}
          currentHistories={currentHistories}
          setCurrentResults={setCurrentResults}
        />
        <GeneratedResult
          currentResults={currentResults}
          addHistory={addHistory}
        />
      </div>
    </>
  )
}

export default Home
