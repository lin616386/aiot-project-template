import React, { Component } from 'react';
import { connect, Link, withRouter, actions } from 'mirrorx';
import { Layout, Menu } from 'antd';
import { cloneDeep } from 'lodash';
import * as AntIcons from '@ant-design/icons';
import icon from "../../assets/images/see.svg"
import "./index.less"
// import './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openKeys: [],
		};
	}

	// componentWillReceiveProps(nextProps, nextContext) {
	// 	const { currentModule, currentParentModule } = nextProps;
	// 	const preId = this.props.currentModule.id;
	// 	if (currentModule.id !== preId) {
	// 		// const { openKeys } = this.state;

	// 		const newOpenKeys = [currentParentModule.id];
	// 		// const index = openKeys.indexOf(preId);
	// 		// newOpenKeys.splice(index, 1, currentParentModule.id);
	// 		this.setState({
	// 			openKeys: newOpenKeys,
	// 		});
	// 	}
	// }

	// toModule = (current, parent) => {
	// 	actions.portal.updateState({
	// 		currentModule: current,
	// 		currentParentModule: parent || {},
	// 	});
	// 	window.location.hash = `${current.router}${current.hash || ''}`;
	// };

	onOpenChange = (keys) => {
		this.setState({
			openKeys: keys,
		});
	};
	toModule = (item) => {
		console.log(this.props.history,'history')
		this.props.history.push('/app');
	}
	render() {
        const { width, menus=[] } = this.props
		return (
			<Sider
				trigger={null}
				theme="light"
                width={width || 150}
				style={{ borderRight: '1px solid #ddd',width:'100px' }}
			>
				<Menu
                    width={200}
					mode="inline"
					// defaultSelectedKeys={['1']}
					// defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
					// selectedKeys={selectedKeys}
					// openKeys={openKeys}
					onOpenChange={this.onOpenChange}

				>
					{menus.map((item,index)=>{
						return <Menu.Item
							key={item.id}
							style={{display:item.isMenu ? 'block' :'none'}}
							onClick={()=>{this.toModule(item)}}
						>
							<img src={icon} />&nbsp;&nbsp;
							<span>{item.menu}</span>
						</Menu.Item>
					})}
				</Menu>
			</Sider>
		);
	}
}

export default connect((state) => state.portalTemplate, null, null, { withRef: true })(withRouter(SiderContainer));
