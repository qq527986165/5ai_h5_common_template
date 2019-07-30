<template>
	<section
			class="toast-box"
			id="toast-box">

		<!--toastÕÚÕÖ-->
		<div class="bg"
			 @touchmove.prevent
			 v-if="toast.mask"></div>

		<transition name="toast-fade" mode="out-in">
			<div
					class="toast"
					id="toast"
					:class="{err: toast.type === 'err', success: toast.type === 'success'}"
					v-if="toast.toggle"
					v-html="toast.msg">
			</div>
		</transition>
	</section>
</template>

<style lang="less" type="text/less" scoped>
	.bg {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
	}

	.toast {
		min-width: 80px;
		position: fixed;
		text-align: center;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, .8);
		color: white;
		border-radius: 4px;
		padding: 10px;
		z-index: 99999;
		transition: all .2s ease;
		font-size: 14px;
	}

	.err {
		background-color: rgba(255, 91, 59, 0.8) !important;
		color: white !important;
	}

	.success {
		background-color: #00B612 !important;
		color: white !important;
	}

	.toast-fade-enter-active, .toast-fade-leave-active {
		transition: all .2s ease;
	}

	.toast-fade-enter, .toast-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
