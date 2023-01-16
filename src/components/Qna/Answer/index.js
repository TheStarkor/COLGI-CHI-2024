import { useState } from "react";

import { Button, Form, Input, Row } from "antd"
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import './index.scss'

const Answer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const showExample = () => {
    setIsOpen(!isOpen)
  }

  return (
      <>
      <div className="answer-container">
        {props.selectedQna?.question && <h3 className="question">Q. {props.selectedQna.question}</h3>}
        {props.selectedQna?.question &&
          <div className="answer-example">
            <div className="answer-desc" onClick={() => showExample()}>
              Show example answers
              {isOpen ?
                <UpOutlined style={{ fontSize: '12px', marginLeft: '5px' }} /> :
                <DownOutlined style={{ fontSize: '12px', marginLeft: '5px' }} />
              }
            </div>

            {isOpen ? <Row className="answer-example-list-container">{[1, 2, 3, 4].map(item => (
              <>
                <Button className="answer-example-list">{props.selectedQna[`answer_${item}`]}</Button>
              </>))}</Row>
              : <></>
            }
          </div>
        }

        {/* TODO: form map으로 변경 */}
        <Form
          form={props.form}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={props.generateResult}
          autoComplete="off"
        >
          <Form.Item
            label="Answer 1"
            name="answer1"
            rules={[{ required: true, message: 'Please input your Answer!' }]}
            style={{ marginBottom: '20px' }}
          >
            <Input style={{ width: '100%', border: '1px solid #D9D9D9', borderRadius: '5px', fontWeight: '400' }} />
          </Form.Item>

          <Form.Item
            label="Answer 2"
            name="answer2"
            rules={[{ message: 'Please input your Answer!' }]}
            style={{ marginBottom: '20px' }}
          >
            <Input style={{ width: '100%', border: '1px solid #D9D9D9', borderRadius: '5px', fontWeight: '400' }} />
          </Form.Item>

          <Form.Item
            label="Answer 3"
            name="answer3"
            rules={[{ message: 'Please input your Answer!' }]}
            style={{ marginBottom: '20px' }}
          >
            <Input style={{ width: '100%', border: '1px solid #D9D9D9', borderRadius: '5px', fontWeight: '400' }} />
          </Form.Item>

          <Form.Item
            label="Answer 4"
            name="answer4"
            rules={[{ message: 'Please input your Answer!' }]}
          >
            <Input style={{ width: '100%', border: '1px solid #D9D9D9', borderRadius: '5px', fontWeight: '400' }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 1, span: 23 }}>
            <Button style={{ width: '100%', backgroundColor: '#4A4A4A', border: 0, borderRadius: '5px' }} type="primary" htmlType="submit">
              Show Images
            </Button>
          </Form.Item>
        </Form>
        </div>
    </>
  )
}

export default Answer
