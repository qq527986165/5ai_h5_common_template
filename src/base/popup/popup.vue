<template>
	<transition name="fade" mode="out-in">
		<div
				class="popup"
				id="popup"
				:style="{'z-index': popup.isTop ? 999999 : 99999}"
				v-if="popup.toggle"
				@touchmove.prevent>

			<section class="box">

				<div
						class="con"
						:style="popup.msgStyleObj"
						v-html="popup.msg"></div>

				<div class="btn-box">
					<div
							:class="{'one-btn': !popup.isShowNoBtn}"
							class="yes-btn"
							v-if="popup.isShowYesBtn"
							@click="yesBtn();">

						{{popup.yes}}
					</div>

					<div
							:class="{'one-btn': !popup.isShowYesBtn}"
							class="no-btn"
							v-if="popup.isShowNoBtn"
							@click="closePopup();">

						{{popup.no}}
					</div>
				</div>
			</section>
		</div>
	</transition>
</template>

<script>
	export default {
		name: "popup"
	}
</script>

<style lang="less" type="text/less" scoped>
	@import "../../assets/less/constant";
	@import "../../assets/less/mixins";

	.popup {
		width: 1000px;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;
		background-color: rgba(0, 0, 0, .5);
		transition: opacity .2s ease;

		.box {
			.width(256);
			.padding(12, 12, 12, 12);
			background-color: #fff;
			border-radius: 6px;
			position: absolute;
			top: 50%;
			.pos(lef, 47.5);
			transform: translateY(-50%);

			.con {
				text-align: center;
				word-wrap: break-word;
				word-break: break-all;
				overflow: hidden;
				.margin(0, 0, 16, 0);
				font-size: 16px;
			}

			.btn-box {
				width: 100%;
				overflow: hidden;

				.yes-btn {
					width: 80px;
					height: 40px;
					border-radius: 4px;
					background-color: @main-blue;
					color: white;
					font-size: 14px;
					text-align: center;
					line-height: 40px;
					float: left;
					cursor: pointer;
					margin-left: 30px;
				}

				.no-btn {
					width: 78px;
					height: 38px;
					border-radius: 4px;
					background-color: #fff;
					font-size: 14px;
					text-align: center;
					line-height: 38px;
					border: 1px solid @border-color;
					float: right;
					cursor: pointer;
					margin-right: 30px;
				}

				.one-btn {
					width: 100% !important;
					margin: 0;
				}
			}
		}
	}

	.fade-enter-active, .fade-leave-active {
		transition: all .4s ease;
	}

	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
