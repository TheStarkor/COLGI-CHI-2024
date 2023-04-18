import { Button, Row, Input, Skeleton } from "antd"
import { RedoOutlined, RightOutlined } from '@ant-design/icons'
import './index.scss'
import { useState } from "react"

const Question = (props) => {
	const [question, setQuestion] = useState(null);

	const onChangeInput = (e) => {
		setQuestion(e.target.value)
	}

	const updateQuestion = (question) => {
		props.customQuestion(question)
	}

	return (
		<>
			<h2>Get questions and give answer</h2>
			<p>You can get random questions based on your history</p>
			{props.suggestions.length === 0 ? <>Loading...<br /><Skeleton active /></> :
				<>
					<div className="question-request-container">
						<div className="question-request-button" type="primary" onClick={() => props.getSuggestion()}>
							<p className="desc">Get More Ideas</p>
							<RedoOutlined style={{ fontSize: '12px' }} />
						</div>
					</div>

					<Row>
						{props.suggestions.map(suggestion => (
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
								onChange={onChangeInput}
								onPressEnter={() => updateQuestion(question)}
							/>
							<Button
								onClick={() => updateQuestion(question)}
								className="question-input-button"
							><RightOutlined />
							</Button>
						</div>
					</Row>
				</>
			}
		</>
	)
}

export default Question
