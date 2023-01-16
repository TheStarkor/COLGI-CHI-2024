import { Row } from 'antd';
import GeneratedImage from './GeneratedImage';

import './index.scss';

const GeneratedResult = (props) => {

  console.log('current', props.currentResults)
  return (
    <>
    <div className='showimage-container'>
      <Row>
        {props.currentResults.q && [1, 2, 3, 4].map(item => (
            <GeneratedImage
              question={props.currentResults.q}
              prompt={props.currentResults[`p${item}`]}
              answer={props.currentResults[`p${item}_answer`]}
              images={props.currentResults[`p${item}_images`]}
              addHistory={props.addHistory}
            />
          ))
        }

      </Row>
    </div>
      
    </>
  )
}

export default GeneratedResult
