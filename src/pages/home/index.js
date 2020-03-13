import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js'

import { connect } from 'react-redux';
import { actionCreators } from './store';

import Topic from './components/Topic.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Writer from './components/Writer.js';

class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img 
						className = 'banner-img' 
						src="https://upload.jianshu.io/admin_banners/web_images/4877/2747180bb64b9e07c82df7fbeab44e280bed94d2.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
						alt=''
					/>
					<Topic></Topic>
					<List></List>
				</HomeLeft>
				<HomeRight>
					<Recommend></Recommend>
					<Writer></Writer>
				</HomeRight>
				{this.props.showScroll ? <BackTop onClick = {this.handleScrollTop}>顶部</BackTop> : null}
			</HomeWrapper>
		)
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

    bindEvents() {
    	window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 500) {
			dispatch(actionCreators.toggleTopShow(true));
		} else {
			dispatch(actionCreators.toggleTopShow(false));
		}
	}

})

export default connect(mapState, mapDispatch)(Home);