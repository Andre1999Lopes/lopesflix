import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import CadastroVideo from './pages/cadastro/video'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App}></Route>
			<Route exact path='/cadastro/video' component={CadastroVideo}></Route>
			<Route exact path='/cadastro/categoria' component={CadastroCategoria}></Route>
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
