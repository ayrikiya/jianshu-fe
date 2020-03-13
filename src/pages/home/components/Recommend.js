import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style.js';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
	render() {
		const { bandList } = this.props;
		return (
			<RecommendWrapper>
				{
					bandList.map((item) => {
						return (
							<RecommendItem 
								imgUrl = {item.get('imgUrl')}
								key = {item.get('id')}
							/>
						)
					})
				}
			</RecommendWrapper>
		)
	}
}

const mapState = (state) => ({
	bandList: state.getIn(['home', 'bandList'])
})

export default connect(mapState, null)(Recommend);