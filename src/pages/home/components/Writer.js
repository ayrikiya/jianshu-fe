import React, { PureComponent } from 'react';
import {DownApp, WriterWrapper } from '../style.js'

class Writer extends PureComponent {
	render() {
		return (
			<div>
				<DownApp></DownApp>
				<WriterWrapper></WriterWrapper>
			</div>
			
		)
	}
}

export default Writer;