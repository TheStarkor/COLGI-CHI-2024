import { Image, Button } from 'antd';
import { useState } from "react";

import './index.scss'

const GeneratedImage = (props) => {
  const [limit, setLimit] = useState(50);
  const toggleEllipsis = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit
    }
  };

  const onClickMore = (str) => () => {
    setLimit(str.length);
  };

  return (
    <>
      <div className='showimage-box'>
        <div className='showimage-content'>
          <div className='showimage-name-tag'><span>A. </span>{props.answer}</div>
          <div className='showimage-desc'>
            {toggleEllipsis(props.prompt, limit).string}
            {toggleEllipsis(props.prompt, limit).isShowMore && <Button style={{ border: 0 }} onClick={onClickMore(props.prompt)}>...더보기</Button>}
          </div>
        </div>
        <div className='showimage-images'>
          {props.images.length !== 0 && props.images.map(image => (<div>
            <Image src={image} width={110} />
          </div>))}
          <div className='showimage-button-container'>
          {props.prompt &&
            <Button
              onClick={() => props.addHistory({ question: props.question, answer: props.answer, images: props.images, prompt: props.prompt })}
              type='primary' style={{ margin: '78px 0 0 16px', backgroundColor: 'gray', border: 0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px'}}
            >
              Confirm
            </Button>
          }
        </div>
        </div>
      </div>
    </>
  )
}

export default GeneratedImage
