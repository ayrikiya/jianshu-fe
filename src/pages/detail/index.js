import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { actionCreators } from './store';

import { DetailWrapper, Header, Content } from './style.js';

class Detail extends PureComponent {
	render() {
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content dangerouslySetInnerHTML = {{ __html : this.props.content }}>
				</Content>
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id));
	}
});

export default connect(mapState, mapDispatch)(withRouter(Detail));