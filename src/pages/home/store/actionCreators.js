import axios from '../../../utils';
import * as constants from './constants.js';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	bandList: result.bandList
});

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
			dispatch(changeHomeData(result));
        }).catch(()=>{
        });
        
	}
};

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeMoreList.json?page=' + page).then((res) => {
            const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		})
	}
};

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})