import Vue from 'vue';

// 这里就是我们刚刚创建的那个静态组件
import toast from './toast.vue';

// 返回一个 扩展实例构造器
const ToastConstructor = Vue.extend(toast);

// 此变量保证全局只有一个toast dom被创建
let isHaveShow = false;
let isLoading = false;

// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
function showToast(toast, show) {
	// 如页面存在一个toast
	if (isHaveShow) {
		// 如果之前存在的是loading类型,
		// 如果不是loading类型，则不新生成（防止重复点击）
		if (isLoading) {
			// 并且新的也是loading类型（防止重复点击）, 则不新生成
			// 否则就是其他类型的toast，那就把之前的loading状态删除，重新生成一个toast
			if (show === 'loading') {
				return;
			} else {
				removeToast();
			}
		} else {
			return;
		}
	}

	if (show === 'loading') {
		isLoading = true;
	} else {
		isLoading = false;
	}

	// 实例化一个 toast.vue
	const toastDom = new ToastConstructor({
		el: document.createElement('section'),

		data() {
			return {
				toast: {},
			}
		}
	})
	// 把 实例化的 toast.vue 添加到 body 里
	document.body.appendChild(toastDom.$el);

	toast.toggle = toast.toggle === undefined ? !toast.toggle : toast.toggle;
	toast.duration = toast.duration === undefined ? 1500 : toast.duration;
	toast.mask = toast.mask === undefined ? true : toast.mask;

	toastDom.toast = toast;

	isHaveShow = true;

	if (toastDom.toast.toggle) {
		if (toastDom.toast.duration === 'wait') {
			return;
		}

		toastDom.toast.doNow && toastDom.toast.doNow();

		setTimeout(() => {
			toastDom.toast.callback && toastDom.toast.callback();
			toastDom.toast.toggle = false;
			isHaveShow = false;
			removeToast();
		}, toastDom.toast.duration)
	}
}

function removeToast() {
	if (document.getElementById("toast-box")) {
		isHaveShow = false;
		document.getElementById("toast").style.opacity = 0;

		setTimeout(() => {
			if (document.getElementById("toast-box")) {
				document.body.removeChild(document.getElementById("toast-box"));
			}
		}, 200)
	}
}

// 注册为全局组件的函数
function registryToast() {
	// 将组件注册到 vue 的 原型链里去,
	// 这样就可以在所有 vue 的实例里面使用 this.toast的方法
	Vue.prototype.toast = {
		show(toast = {}) {
			showToast(toast);
		},

		hide: removeToast,

		loading(toast = {}) {
			showToast({
				...toast,
				msg: toast.msg || '加载中',
				duration: toast.duration || 'wait'
			}, 'loading')
		},

		err(toast = {}) {
			showToast({
				...toast,
				msg: toast.msg || '网络错误，请重试',
				type: toast.type || 'err'
			})

			console.error('come from: toast. msg: ', toast.msg);
		}
	};
}

export default registryToast;
