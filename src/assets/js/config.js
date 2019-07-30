// 判断程序是跑在'微信'还是'支付宝'
const openTypeValue = function () {
	if (/MicroMessenger/.test(window.navigator.userAgent)) {
		return 'wx';;
	} else if (/AlipayClient/.test(window.navigator.userAgent)) {
		return 'alipay';
	} else {
		const value = process.env.NODE_ENV === 'production' ? 'h5' : 'wx';
		// const value = 'h5';
		// const value = 'wx';
		// const value = 'alipay';
		return value;
	}
}

// 判断程序是在android还是ios
const appTypeValue = function() {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
	if (isAndroid) {
		return 'android';
	}
	if (isIOS) {
		return 'ios'
	}
	// return 'android';
}
export const appType = appTypeValue();		// 项目如果跑在h5 那是安卓还是ios?

export const openType = openTypeValue();		// 项目跑在的平台

export const apiURL = '/api';			// 接口代理规则

// 接口需要的公用参数
export const apiRequire = {
	productCode: 'mbgl',
	openType: openType
};
