/**
 * 容器类组件
 */

// 引用mirrorx作为connect
import mirror, { connect } from 'mirrorx';

// 默认页面组件
import IndexView from './index';
//引用模型
import model from './model'

// 数据和组件UI关联、绑定
mirror.model(model);

export default connect(state => state.detail)(IndexView);