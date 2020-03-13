import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, 
		 SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList,
		 Addition, Button } from './style';
import { connect } from 'react-redux';
import  { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom';

class Header extends Component {

	getListArea() {
		const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];


		if (newList.length) {
			for (var i = (page-1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key = {newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}


		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter = {handleMouseEnter}
					onMouseLeave = {handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick = {() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref = {(icon) => {this.spinIcon = icon }} className="iconfont spin">&#xe600;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
				return null;
	 		}
	}

	render() {
		const { focused, list, login, handleInputFocus, handleInputBlur, loginOut } = this.props;
		return(
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				
				<Nav>
					<NavItem className = 'left active'>
						<i className="iconfont">&#xe714;</i>
						<span>首页</span>
					</NavItem>
					<NavItem className = 'left'>
						<i className="iconfont">&#xe617;</i>
						下载App
					</NavItem>
					
					<SearchWrapper>
						<CSSTransition
							in = {focused}
							timeout = {600}
							classNames = "slide"
						>
								<NavSearch
								className = {focused ? 'focused' : ''}
								onFocus = {() => handleInputFocus(list)}	
								onBlur = {handleInputBlur}				
								>
								</NavSearch>
						</CSSTransition>
						<i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>

				<Addition>
					<Link to = '/write'>
						<Button className = 'writting'>
						 	<i className="iconfont">&#xe616;</i>
						 	写文章
					 	</Button>
					</Link>
				 	<Button className = 'reg'>注册</Button>
				 	{
				 		login ? 
				 		<NavItem onClick = {loginOut} className = 'right'>退出</NavItem> : 
				 		<Link to = '/login'><NavItem className = 'right'>登录</NavItem></Link>
				 	}
				 	
					<NavItem className = 'right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
				</Addition>
			</HeaderWrapper>
	  )
	}
}




const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		totalPage: state.getIn(['header', 'totalPage']),
		login: state.getIn(['login', 'login'])
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

		handleInputFocus(list) {
			if (list.size === 0) {
				dispatch(actionCreators.getList());
			};
			dispatch(actionCreators.searchFocus());
		},

		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},

		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},

		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},

		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			console.log(originAngle);
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			// console.log(spin);
			if (page < totalPage){
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},

		loginOut() {
			dispatch(loginActionCreators.logOut());
		}

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);