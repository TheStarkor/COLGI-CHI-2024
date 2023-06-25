import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
const { Dragger } = Upload;

import "./index.scss"

const Chat = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="half left">
            aaa
          </div>
          <div 
            class="half"
            style={{
              marginTop: '30px'
            }}
          >
            <h2>Upload Your PDF</h2> 
            <Dragger
              style={{
                marginTop: '30px',
                padding: '30px',
              }}
            >
              <p style={{marginTop: '100px'}} className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p style={{marginBottom: '150px'}} className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>

            <Button
              style={{
                marginTop: '10px',
                width: '100%'
              }}
              type="primary"
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat;