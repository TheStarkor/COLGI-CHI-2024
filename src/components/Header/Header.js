import { useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<div onClick={() => navigate('/')} className='header-container'>
				<p className='logo'>COLGI</p>
			</div>
		</>
	)
}

export default Header
