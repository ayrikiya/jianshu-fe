import { fromJS } from 'immutable';
import * as constants from './constants.js';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	bandList: [],
	articleListPage: 1,
	showScroll: false

});

const changeHomeData = (state, action) => {
	return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				bandList: fromJS(action.bandList)
			});
	// return state.set('articleList', state.get('articleList').concat(action.list))
};

const addArticleList = (state, action) => {
	return state.merge({
				'articleList': state.get('articleList').concat(action.list),
				'articleListPage': action.nextPage
			});
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
			
		default:
			return state;
	}
}