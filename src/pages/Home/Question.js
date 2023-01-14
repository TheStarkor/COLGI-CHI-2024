import { Button, Row, Popover } from "antd"
import { RedoOutlined } from '@ant-design/icons'
import './index.scss'

const Question = (props) => {
  return (
    <>
      {/* <h3>Click and Check sample answers</h3> */}
      <div className="question-request-container">
        <div className="question-request-button" type="primary" onClick={props.getQuestion}>
          <p className="desc">Get More Ideas</p>
          <RedoOutlined style={{fontSize: '12px'}}/>
        </div>
      </div>

      {props.suggestions && props.suggestions.map(suggestion => (
          <div placement="rightTop" title={suggestion.question} content={
            <>
              <div>{suggestion.answer_1}</div>
              <div>{suggestion.answer_2}</div>
              <div>{suggestion.answer_3}</div>
              <div>{suggestion.answer_4}</div>
              <div>{suggestion.answer_5}</div>
            </>
          }>
            <Button onClick={() => props.onFill(suggestion)} style={{width:'530px',marginBottom:'16px', border:0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', fontWeight:'400'}}>{suggestion.question}</Button>
          </div>
      ))}
    </>
  )
}

export default Question
