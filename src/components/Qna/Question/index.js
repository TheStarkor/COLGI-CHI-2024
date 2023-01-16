import { Button, Row, Input } from "antd"
import { RedoOutlined, RightOutlined } from '@ant-design/icons'
import './index.scss'

const Question = (props) => {
  return (
    <>
      <h2>Get questions and give answer</h2>
      <p>You can get random questions based on your history</p>
      <div className="question-request-container">
        <div className="question-request-button" type="primary" onClick={props.getSuggestion}>
          <p className="desc">Get More Ideas</p>
          <RedoOutlined style={{ fontSize: '12px' }} />
        </div>
      </div>
      
      <Row>
        {props.suggestions && props.suggestions.map(suggestion => (
          <Button
            onClick={() => props.selectQna(suggestion)}
            className="question-examples"
            style={{ border: 0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
          >
            {suggestion.question}
          </Button>
        ))}
        <div className="question-input">
          <Input 
            className="question-examples input"
            placeholder="Write your own question"
          />
          <Button
            className="question-input-button"  
          ><RightOutlined/>
          </Button>
        </div>        
      </Row>
    </>
  )
}

export default Question
