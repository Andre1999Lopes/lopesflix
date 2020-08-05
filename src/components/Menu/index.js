import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom'
import './menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
	return (
		<nav className="Menu">
			<Link to="/">
				<img className="Logo" src={Logo} alt="AluraFlix logo" />
			</Link>

			<Button as={Link} className="ButtonLink" to="/cadastro/video">
				Novo vídeo
			</Button>
		</nav>
	);
}

export default Menu;