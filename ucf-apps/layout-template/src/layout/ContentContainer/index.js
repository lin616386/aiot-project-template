import React, { Component } from 'react';
import morror, { connect, actions, withRouter, Route, Switch } from 'mirrorx';
// import { Route, Switch, withRouter } from 'mirrorx';
import { Layout } from 'antd';
import { events as Event } from 'aiot-design';
import Page from '../../pages/page';
import Routes from '../../routes';
import ChildRouteContainer from '../ChildRouteContainer';
import './index.less';

const { Content } = Layout;

class ContentContainer extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<Content
				className="service-portal-content-wrapper"
				style={{ width: 'calc(100vw - 200px)', background: '#fff' }}
			>
				<ChildRouteContainer />
			</Content>
		);
	}
}

export default connect((state) => state.portalTemplate, null, null, {
	withRef: true,
})(ContentContainer);
