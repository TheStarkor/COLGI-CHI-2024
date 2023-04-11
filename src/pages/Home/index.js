import { useState, useEffect } from "react";

import './index.scss'

import Header from "../../components/Header/Header";
import Qna from "../../components/Qna";
import GeneratedResult from "../../components/GeneratedResult";
import GeneratedHistory from "../../components/GeneratedHistory";
import { useParams } from "react-router-dom";
import { Form } from "antd"

import { qna as dummyQna, images as dummyImages } from './dummyData';

const Home = () => {
  const [form] = Form.useForm();
  const [suggestions, setSuggestion] = useState([]);
  const [selectedQna, setSelectedQna] = useState({});
  const [currentHistories, setCurrentHistories] = useState([]);
  const [currentResults, setCurrentResults] = useState([]);
  const { prompt } = useParams();
  
  useEffect(() => {
    getSuggestion()
  }, []);

  const getSuggestion = async () => {
    // TODO: suggestion API 연결
    setSuggestion(dummyQna)
    form.resetFields()
  }

  const addHistory = (selectedResult) => {
    const new_history = [
      ...currentHistories,
      {
        question: selectedResult.question,
        answer: selectedResult.answer,
        prompt: selectedResult.prompt,
        images: selectedResult.images,
        others: [
          {
            answer: currentResults.p1_answer,
            images: currentResults.p1_images,
            prompt: currentResults.p1
          },
          {
            answer: currentResults.p2_answer,
            images: currentResults.p2_images,
            prompt: currentResults.p2
          },
          {
            answer: currentResults.p3_answer,
            images: currentResults.p3_images,
            prompt: currentResults.p3
          },
          {
            answer: currentResults.p4_answer,
            images: currentResults.p4_images,
            prompt: currentResults.p4
          }
        ]
      }
    ]

    setCurrentHistories(new_history);
    setCurrentResults([]);
    getSuggestion();
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
          form={form}
          initialPrompt={prompt}
          suggestions={suggestions}
          selectedQna={selectedQna}
          currentHistories={currentHistories}
          setCurrentResults={setCurrentResults}
          setSuggestion={setSuggestion}
          setSelectedQna={setSelectedQna}
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
