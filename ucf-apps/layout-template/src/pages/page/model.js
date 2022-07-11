/**
 * 数据模型类
 */

import { actions } from 'mirrorx';
import { message, request } from 'aiot-design';
import api from 'utils/api';
import { omit } from 'lodash';
import axios from 'axios';

export default {
	// 确定 Store 中的数据模型作用域
	name: 'portalHome',
	// 设置当前 Model 所需的初始化 state
	initialState: {

	},
	reducers: {
		/**
		 * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
		 * @param {*} state
		 * @param {*} data
		 */
		updateState(state, data) {
			// 更新state
			return {
				...state,
				...data,
			};
		},
		updateStateByKey(state, options) {
			// options:{ key:'a.b.c',data:123}
			function getWholeData(obj, key, data) {
				const keyArray = key.split('.');
				if (keyArray.length === 1) {
					return { [key]: data };
				}

				return {
					[keyArray[0]]: {
						...obj[keyArray[0]],
						...getWholeData(
							obj[keyArray[0]],
							keyArray.slice(1).join('.'),
							data
						),
					},
				};
			}

			let wholeData = {};
			for (const key in options) {
				wholeData = {
					...wholeData,
					...getWholeData(state, key, options[key]),
				};
			}

			return {
				...state,
				...wholeData,
			};
		},
	},
	effects: {
		/**
		 * 按钮测试数据
		 * @param {*} param
		 * @param {*} getState
		 */
		async loadData(params, getState) {
			try {
				const result = await request(api.getEkbList);

				return result;
			} catch (e) {}
		},
	},
};
