import { Button, Row, Popover } from "antd"
import { RedoOutlined } from '@ant-design/icons'
import './index.scss'

const Question = (props) => {
  return (
    <>
      <div className="question-request-container">
        <div className="question-request-button" type="primary" onClick={props.getSuggestion}>
          <p className="desc">Get More Ideas</p>
          <RedoOutlined style={{fontSize: '12px'}}/>
        </div>
      </div>

      {props.suggestions && props.suggestions.map(suggestion => (
          <Button
            onClick={() => props.selectQna(suggestion)}
            style={{width:'530px',marginBottom:'16px', border:0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', fontWeight:'400'}}
          >
            {suggestion.question}
          </Button>
      ))}
    </>
  )
}

export default Question
