/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2021-03-15 10:30:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-18 14:31:47
 */
/**
 * App模块
 */

import React, { Component } from 'react';
import { url, message } from 'aiot-design';
import { actions, connect, withRouter } from 'mirrorx';
import { Layout, Modal, Input, Form } from 'antd';
import HeaderContainer from '../../layout/HeaderContainer';
import SiderContainer from '../../layout/SiderContainer';
import Content from '../../layout/ContentContainer';
import Page from '../../pages/page/index';
import './index.less';

class IndexView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props,'props')
		return (
			<div className="portal-content">
				<Layout style={{ position: 'fixed', top: 48, height: '100%' }}>
					<HeaderContainer />
					<Layout theme="light">
						<SiderContainer menus={this.props.menus}/>
						<Content />
					</Layout>
				</Layout>
			</div>
		);
	}
}

// IndexView.displayName = 'IndexView';
// export default IndexView;
export default connect((state) => {
	console.log(state,'state==>>')
	return state.portalTemplate})(withRouter(IndexView));
