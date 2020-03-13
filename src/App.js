import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/index.js';

import { Globalstyle } from './global_style';
import { Globaliconfont } from './statics/iconfont/iconfont.js';
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';


class App extends Component {
	render() {
		return (
			<Fragment>
				<Globalstyle />
				<Globaliconfont />
				<Provider store = {store}>
					<BrowserRouter>
						<div>
							<Header />
							<Route path='/' exact component = {Home}></Route>
							<Route path='/login' exact component = {Login}></Route>
					 		<Route path='/detail/:id' exact component = {Detail}></Route>
					 		<Route path='/write' exact component = {Write}></Route>
						</div>
					</BrowserRouter>	
				</Provider>
			</Fragment>
		)
	}
}


export default App;