import { Row, Col, Image, Popover, Button } from 'antd';
import { useState } from "react";
import './index.scss';

const ShowImage = (props) => {

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
      <Row>
        {props.prompts?.p1 &&
          <div className='showimage-box'>
            <div className='showimage-content'>
              <div className='showimage-name-tag'>{props.prompts?.p1_answer}</div>
              {/* <div>{props.prompts?.p1}</div> */}
              <div className='showimage-desc'>
                {/* {props.prompts?.p1} */}
                {/* asdflkjalskdjfiealkjdlkfjaslkdjfiealksjdlfkjaisdgkalhwelkfajsldjflielahgksdjfiaekflaksjdlfkjeialkdgjlaksdjfidfasdfasdffffffffasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdf */}
                {toggleEllipsis(props.prompts?.p1, limit).string}
                {toggleEllipsis(props.prompts?.p1, limit).isShowMore && <Button style={{ border: 0 }} onClick={onClickMore(props.prompts?.p1)}>...더보기</Button>}
              </div>
            </div>
            <div className='showimage-images'>
              {props.prompts?.p1_images.length !== 0 && props.prompts?.p1_images.map(image => (<div>
                <Image src={image} width={110} />
              </div>))}
              <div className='showimage-button-container'>
              {props.prompts?.p1 && <Button onClick={() => props.addHistory({ question: props.prompts?.q, answer: props.prompts?.p1_answer, images: props.prompts?.p1_images })} type='primary' style={{ margin: '78px 0 0 16px', backgroundColor: 'gray', border: 0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px'}}>Confirm</Button>}
            </div>
            </div>            
          </div>
        }
        {props.prompts?.p2 &&
          <div className='showimage-box'>
            <div className='showimage-content'>
              <div className='showimage-name-tag'>{props.prompts?.p2_answer}</div>
              {/* <div>{props.prompts?.p2}</div> */}
              <div className='showimage-desc'>
                {/* {props.prompts?.p2} */}
                {/* asdflkjalskdjfiealkjdlkfjaslkdjfiealksjdlfkjaisdgkalhwelkfajsldjflielahgksdjfiaekflaksjdlfkjeialkdgjlaksdjfidfasdfasdffffffffasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdf */}
                {toggleEllipsis(props.prompts?.p2, limit).string}
                {toggleEllipsis(props.prompts?.p2, limit).isShowMore && <Button style={{ border: 0 }} onClick={onClickMore(props.prompts?.p2)}>...더보기</Button>}
              </div>
            </div>
            <div className='showimage-images'>
              {props.prompts?.p2_images.length !== 0 && props.prompts?.p2_images.map(image => (<div>
                <Image src={image} width={110} />
              </div>))}
              <div className='showimage-button-container'>
              {props.prompts?.p2 && <Button onClick={() => props.addHistory({ question: props.prompts?.q, answer: props.prompts?.p2_answer, images: props.prompts?.p2_images })} type='primary' style={{ margin: '78px 0 0 16px', backgroundColor: 'gray', border: 0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px'}}>Confirm</Button>}
            </div>
            </div>            
          </div>
        }
        {props.prompts?.p3 &&
          <div className='showimage-box'>
            <div className='showimage-content'>
              <div className='showimage-name-tag'>{props.prompts?.p3_answer}</div>
              {/* <div>{props.prompts?.p3}</div> */}
              <div className='showimage-desc'>
                {/* {props.prompts?.p3} */}
                {/* asdflkjalskdjfiealkjdlkfjaslkdjfiealksjdlfkjaisdgkalhwelkfajsldjflielahgksdjfiaekflaksjdlfkjeialkdgjlaksdjfidfasdfasdffffffffasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdf */}
                {toggleEllipsis(props.prompts?.p3, limit).string}
                {toggleEllipsis(props.prompts?.p3, limit).isShowMore && <Button style={{ border: 0 }} onClick={onClickMore(props.prompts?.p3)}>...더보기</Button>}
              </div>
            </div>
            <div className='showimage-images'>
              {props.prompts?.p3_images.length !== 0 && props.prompts?.p3_images.map(image => (<div>
                <Image src={image} width={110} />
              </div>))}
              <div className='showimage-button-container'>
              {props.prompts?.p3 && <Button onClick={() => props.addHistory({ question: props.prompts?.q, answer: props.prompts?.p3_answer, images: props.prompts?.p3_images })} type='primary' style={{ margin: '78px 0 0 16px', backgroundColor: 'gray', border: 0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px'}}>Confirm</Button>}
            </div>
            </div>            
          </div>
        }
        {props.prompts?.p4 &&
          <div className='showimage-box'>
            <div className='showimage-content'>
              <div className='showimage-name-tag'>{props.prompts?.p4_answer}</div>
              {/* <div>{props.prompts?.p4}</div> */}
              <div className='showimage-desc'>
                {/* {props.prompts?.p4} */}
                {/* asdflkjalskdjfiealkjdlkfjaslkdjfiealksjdlfkjaisdgkalhwelkfajsldjflielahgksdjfiaekflaksjdlfkjeialkdgjlaksdjfidfasdfasdffffffffasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdf */}
                {toggleEllipsis(props.prompts?.p4, limit).string}
                {toggleEllipsis(props.prompts?.p4, limit).isShowMore && <Button style={{ border: 0 }} onClick={onClickMore(props.prompts?.p4)}>...더보기</Button>}
              </div>
            </div>
            <div className='showimage-images'>
              {props.prompts?.p4_images.length !== 0 && props.prompts?.p4_images.map(image => (<div>
                <Image src={image} width={110} />
              </div>))}
              <div className='showimage-button-container'>
              {props.prompts?.p4 && <Button onClick={() => props.addHistory({ question: props.prompts?.q, answer: props.prompts?.p4_answer, images: props.prompts?.p1_images })} type='primary' style={{ margin: '78px 0 0 16px', backgroundColor: 'gray', border: 0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px'}}>Confirm</Button>}
            </div>
            </div>            
          </div>
        }

        {/* {props.prompts?.p5 &&
        <Row style={{ width: '100%', padding: '15px 28px', marginBottom: '14px', border: '1px solid #D9D9D9', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Popover placement='bottom' title={props.prompts?.p5_answer} trigger="hover" content={props.prompts?.p5}>
            <Button style={{ fontWeight: '500', marginBottom: '10px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EDEDED', border: 0 }}>{props.prompts?.p5_answer}</Button>
          </Popover>

          {props.prompts?.p5_images.length !== 0 && props.prompts?.p5_images.map(image => (<Row>
            <Image src={image} width={140} />
          </Row>))}

          <div className='showimage-button-container'>
            {props.prompts?.p5 && <Button onClick={() => props.addHistory({ question: props.prompts?.q, answer: props.prompts?.p5_answer })} type='primary' style={{ marginTop: '10px', backgroundColor: 'gray', border: 0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>Confirm</Button>}
          </div>
        </Row>} */}
      </Row>
    </>
  )
}

export default ShowImage
