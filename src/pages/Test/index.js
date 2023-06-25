import { useState } from 'react';
import axios from 'axios';

import { Input, Button, Row, Image } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const { TextArea } = Input;

const TestPage = () => {
	const [text, setText] = useState(null);
	const [results, setResults] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [errorMessage, setError] = useState(null);
	const [value, setValue] = useState('');
	const [images, setImages] = useState(null);

	
	const onChange = (e) => {
		setText(e.target.value);
	}
	
	const generateResult = async () => {
		setLoading(true);
		try {
			const resp = await axios.get(`https://colgi-api.run.goorm.site/complete?prompt=${encodeURIComponent(text)}&cnt=1`)
			const out = JSON.parse(resp.data.result[0].text);
			console.log(out)
			setResults(out)
			setLoading(false);
		} catch (e) {
			setError("Oops.. There is an error. Please generate again.")
			setLoading(false);
		}
	}
	
	const generateImage = async () => {
		try {
			const img_resp = await axios.get(`/generate?prompt=${text}&cnt=4`)
			setImages(img_resp.data.result)
		} catch (e) {
			setError("Oops.. There is an error. Please generate again.")
		}
	}

	return (
		<>
			{!results && <><TextArea 
				showCount 
				onChange={onChange}
				rows={28} 
				placeholder="내용을 입력해주세요"
			/>
			<Button
				loading={isLoading}
				onClick={generateResult}
			>
				생성
			</Button>
			<Button
				onClick={generateImage}	
			>
				이미지 생성
			</Button>
		
			</>}
			{images && images.map(image => (
				<Image src={image} width={200} />
			))}
			{results && results.map(result => (
				<>
					<h1>{result.title}</h1>
					<ReactQuill theme="snow" value={result.notes} onChange={setValue} modules={{toolbar: true}} />;
				</>
			))}
			{errorMessage && errorMessage}

		</>
	)
}

export default TestPage