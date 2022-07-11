import morror, { connect, actions, withRouter, Route, Switch } from 'mirrorx';

import Page from '../../pages/page';
import Pages from "../../pages/pages"
export default () => {
	return (
		<div className="content">
			<Route path="/app" exact component={Page} />
			<Route path="/" exact component={Pages} />
		</div>
	);
};
