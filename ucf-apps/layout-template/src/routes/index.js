/**
 * 前端路由说明：
 * 基于浏览器 History 的前端 Hash 路由
 */

import React from 'react';
import mirror,{ Route, Switch, withRouter } from 'mirrorx';
import NotLiveRoute from 'react-live-route';
// import portalHome from './home';
import ConnectedHome from './home/container';
// import ConnectedDetail from './detail/container';

const LiveRoute = withRouter(NotLiveRoute);
export default () => (
	<div className="route-content">
		<Switch>
			<Route path="/" component={ConnectedHome} />
		</Switch>
		{/* <LiveRoute
			path="/"
			name="deviceList"
			livePath="/detail"
			exact
			component={ConnectedHome}
			onHide={(location, match, history, livePath, alwaysLive) => {
				console.log(location, 'location');
			}}
			onReappear={(location, match, history, livePath, alwaysLive) => {
				console.log('reappear hook tiggered', location);
			}}
		/> */}
	</div>
);
