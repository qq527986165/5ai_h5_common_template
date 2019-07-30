import popup from './popup/index';
import toast from './toast/index';
// 引入图片懒加载VueLazyload
import VueLazyload from 'vue-lazyload';

const customComponents = [
	{ component: popup, options: {} },
	{ component: toast, options: {} },
	{
		component: VueLazyload,
		options: {
			error: require('assets/img/img-err.png'),
			loading: require('assets/img/default_img_rectangle_small.png')
		}
	}
]

export default customComponents;
