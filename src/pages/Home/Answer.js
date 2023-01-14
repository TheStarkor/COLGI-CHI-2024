import { useState } from "react";

import { Button, Form, Input, Row } from "antd"
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import './index.scss'


const Answer = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const showExample = () => {
    setIsOpen(!isOpen)
    // console.log(isOpen)
  }
  //TODO : 클릭시 정답칸에 자동입력
  // const fillAnswer = (value) =>{
  //   props.form.setFieldValue({
  //     answer1 : value
  //   })
  // }

  return (
    <>
      <div className="answer-container">
        <Form
          form={props.form}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={props.onFinish}
          autoComplete="off"
        >
          <Form.Item
            label=""
            name="question"
            rules={[{ required: true, message: 'Please input your Question!' }]}
          >
            <Input style={{ width: '100%', border: '0 solid #D9D9D9', fontWeight: '500', fontSize: '18px', lineHeight: '21px' }} />
          </Form.Item>

          <div className="answer-example">
              <div className="answer-desc" onClick={() => showExample()}>
                Show example answers
                {isOpen? <UpOutlined style={{fontSize:'12px', marginLeft:'5px'}}/> :<DownOutlined style={{fontSize:'12px', marginLeft:'5px'}}/>}
              </div>
              
            
            {isOpen ? <Row className="answer-example-list-container">{props.sAnswers && props.sAnswers.map(answer => (
              <>
                <Button className="answer-example-list">{answer}</Button>
              </>))}</Row>
              : <></>
            }
          </div>
          
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

          {/* <Form.Item
          label="Answer 5"
          name="answer5"
          rules={[{ message: 'Please input your Answer!' }]}
        >
          <Input style={{width:'100%', border: '1px solid #D9D9D9', borderRadius: '5px', fontWeight:'400'}}/>
        </Form.Item> */}

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

export default Answer;
