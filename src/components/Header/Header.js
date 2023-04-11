import { useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='header-container'>
				<p onClick={() => navigate('/')}  className='logo'>COLGI</p>
			</div>
		</>
	)
}

export default Header
