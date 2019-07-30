<template>
	<div id="app">
		<transition
				name="fade"
				mode="out-in"
				@after-leave="afterLeave">

			<keep-alive include="home">

				<router-view class="routers"/>

			</keep-alive>

		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',

		methods: {
			afterLeave() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}
		}
	}
</script>

<style lang="less">
	@import "assets/less/constant";
	@import "assets/less/mixins";

	#app {
		width: 100%;
		color: @dg-color;
	}

	.routers {
		position: relative;
		z-index: 1;
		background-color: #fff;
		min-height: 100vh;
	}

	select {
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		border: none;
		outline: none;
		background: url("assets/img/arrow_bot.png") no-repeat scroll right center transparent;
		background-size: 10px 4px;
		background-position: 90px;
	}

	.fade-enter-active, .fade-leave-active {
		transition: all .2s ease;
	}

	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
