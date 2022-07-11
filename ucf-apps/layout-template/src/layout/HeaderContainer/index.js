import React, { Component } from 'react';
import { connect, Link, withRouter, actions } from 'mirrorx';
import { Header, HeaderSetting, HeaderNav } from 'aiot-design';
import { AppstoreOutlined, DeploymentUnitOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

import './index.less';

class HeaderContainer extends React.Component {
	toServices = () => {
		window.open('', '_self');
	};

	render() {
		const { name = '', icon = '' } = this.props;
		return (
			<Header>
				<div className="service-portal-header-left">
					{/*<AppstoreOutlined*/}
					{/*	style={{ cursor: 'pointer' }}*/}
					{/*	onClick={this.toServices}*/}
					{/*/>*/}

					<HeaderNav />
					<Divider type="vertical" />
					<div className="name">
						{icon || <DeploymentUnitOutlined />}
						{name || '页面标题'}
					</div>
				</div>
				<HeaderSetting accountUrl="/cloud-portal-web/user-center/#/app/account" />
			</Header>
		);
	}
}

export default connect((state) => state.portalTemplate)(withRouter(HeaderContainer));
