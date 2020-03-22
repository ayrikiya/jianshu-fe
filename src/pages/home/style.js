import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
		border-radius: 4px;
	}
	
`;

export const HomeRight = styled.div`
	float: right;
	width: 280px;
	
`;



export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 0 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;



export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		float: right;
		width: 125px;
		height: 100px;
	}
`;

export const ListInfo = styled.div`
	float: left;
	width: 470px;
	.title {
		font-size: 18px;
		font-weight: bold;
		color: #333;
		line-height: 30px;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;

	}
`;


export const RecommendWrapper = styled.div`
	margin: 26px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	margin-bottom: 6px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;



export const DownApp = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const WriterWrapper = styled.div`

`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	margin: 30px 0;
	line-height: 40px;
	text-align: center;
	background: #a5a5a5;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 80px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 15px;
`;