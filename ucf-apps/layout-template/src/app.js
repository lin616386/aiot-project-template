import React from 'react';
import I18nProvider from 'components/I18nProvider';
import mirror, { render, Router, actions } from 'mirrorx';
import app from 'utils/app';
import Routes from './routes';
import './app.less';

mirror.defaults({
	historyMode: 'hash',
});

export async function bootstrap() {
	console.log('bootstrap device');
}

export async function mount(props = {}) {
	const { container, setGlobalState } = props;
	console.log('mount - props', props);
	app.init({
		projectCode: ['common', 'iot-cloud-web', 'thing', 'iot-authn'],
		breadcrumbInfo: {
			'/detail': 'iot-cloud-web.device.deviceDetail' /* 设备详情页 */,
			'/': '',
		},
		setGlobalState,
		needPermission: false,
	}).then((res) => {
		render(
			<div>
				<I18nProvider isAdmin>
					<Router basename={res.baseName}>
						<Routes />
					</Router>
				</I18nProvider>
			</div>,
			container
				? container.querySelector('#app')
				: document.getElementById('app')
		);
	});
}

export async function unmount(props) {
	const { container } = props;
	ReactDOM.unmountComponentAtNode(
		container
			? container.querySelector('#app')
			: document.getElementById('app')
	);
	app.destroy();
}

if (!window.__POWERED_BY_QIANKUN__) {
	mount();
}
