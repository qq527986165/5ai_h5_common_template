import Vue from 'vue';

// 引入popup组件
import popup from './popup.vue';

// 创建一个vue实例
const popupConstructor = Vue.extend(popup);

// 构建popup实例
function popupInit(popup) {
	// 实例化一个 popup.vue
	const popupDom = new popupConstructor({
		el: document.createElement('div'),

		data() {
			return {
				popup: {},
			}
		},

		methods: {
			closePopup() {
				popup.cancel && popup.cancel();
				removePopup();
			},

			yesBtn() {
				popup.confirm();
			}
		}
	})

	// 把 实例化的 popup.vue 添加到 body 里
	document.body.appendChild(popupDom.$el);

	popup.toggle = popup.toggle === undefined ? !popup.toggle : popup.toggle;
	popup.isShowYesBtn = popup.isShowYesBtn === undefined ? true : popup.isShowYesBtn;
	popup.isShowNoBtn = popup.isShowNoBtn === undefined ? true : popup.isShowNoBtn;

	popup.yes = popup.yes || '确定';
	popup.no = popup.no || '取消';

	popupDom.popup = popup;
}

function removePopup() {
	if (document.getElementById("popup")) {
		document.getElementById("popup").style.opacity = 0;
		setTimeout(() => {
			document.body.removeChild(document.getElementById("popup"));
		}, 200)
	}
}

// 注册为全局组件的函数
function registryPopup() {
	// 将组件注册到 vue 的 原型链里去,
	// 这样就可以在所有 vue 的实例里面使用 this.popup 的方法
	Vue.prototype.popup = {
		show: popupInit,
		
		hide: removePopup
	};
}

export default registryPopup;
