import { Input, Row } from 'antd';

import { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons'
import Helper from './Helper';
import Header from '../../components/Header/Header';

const { Search } = Input;

const InitialPage = () => {
  const [prompt, setPrompt] = useState(null);
  const [isStart, setStart] = useState(null);

  const generate = (prompt) => {
    setPrompt(prompt);
    setStart(true);
  }

  const changeStartState = () => {
    if (isStart) setPrompt(null);
    setStart(!isStart);
  }

  const navigation = () => (
    <>
      <div style={{padding:'80px 0 0 20px', width:'400px', backgroundColor:'#F8F8F8'}}>
        <ArrowLeftOutlined onClick={changeStartState} style={{ fontSize: '20px'}} />
      </div>
    </>
  )

  const initialComponent = () => (
    <>
      <div className='initial-container'>
        <Row>
          <Search placeholder="generate what you want" allowClear onSearch={generate} size="large" />
        </Row>

        <Row>
          <p className='button-desc'>If you don't have anything in mind</p>
          <div className='button' onClick={changeStartState} type="primary">Start without initial prompt</div>
        </Row>
      </div>
    </>
  )

  return (
    <>
      <Header/>
      <div>
        {isStart ? navigation() : initialComponent()}
      </div>

      {(isStart) && <Helper prompt={prompt} />}
    </>
  )
}

export default InitialPage
