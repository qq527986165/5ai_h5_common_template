import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 首页
const home = (resolve) => {
	import('./views/home/home')
		.then((module) => {
			resolve(module);
		});
};

const router = new Router({
	routes: [
		// 重定向
		{
			path: '/',
			redirect: '/home',
		},

		{
			path: '/home',
			name: '首页',
			component: home,
			meta: {
				title: '慢病管理',
				canNotUserInfoGo: true
			}
		},
	]
});

router.beforeEach((to, from, next) => {
	function goNext(route) {
		if (to.meta.title) {
			document.title = to.meta.title;
		}

		next(route);
	}

	goNext();
});

router.afterEach(() => {
	router.app.toast.hide();
});

export default router;
