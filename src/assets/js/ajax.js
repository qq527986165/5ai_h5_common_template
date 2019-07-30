import OGaxios from 'axios';
import Vue from 'vue';
import { apiRequire } from '../../assets/js/config';

const CancelToken = OGaxios.CancelToken;
let cancel;
let cancelAjaxText = '中断成功';

// post和get请求属性不一样，处理一下
const typeJudge = (pContent, method) => {
	const p = pContent;

	let data = {};
	const rand = Math.random();

	if (method && method === 'post') {
		data = {
			data: {
				rand: rand,
				...p,
				...apiRequire
			}
		}
	} else if (method && method === 'get') {
		data = {
			params: {
				rand: rand,
				...p,
				...apiRequire
			}
		}
	}

	return data;
};

export function ajax(url, pContent, method = 'post') {
	const data = typeJudge(pContent, method);

	return new Promise((resolve, reject) => {
		OGaxios({
			method: method || 'post',// 方法
			url: url,// 地址
			data: {
				rand: Math.random(),
				...data
			},
			cancelToken: new CancelToken(c => {  //强行中断请求要用到的
				cancel = c;
			})
		}).then((res) => {
			resolve(res.data);
		}).catch((err) => {
			reject(err);
		});
	});
}

Vue.prototype.cancelAjax = function(){ //切换页面强行中断请求 router.beforeEach中用到
	if(cancel){
		cancel(cancelAjaxText);
	}
}
