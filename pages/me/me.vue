<template>
	<view>
		<view class="me-head">
			<view class="me-head-pic">
				<image :src="avatarUrl"></image>
			</view>
			<view class="me-head-id">
				{{userName}}
			</view>
			<view class="me-head-wave-1"></view>
			<view class="me-head-wave-2"></view>
		</view>
		<view class="me-menu">
			<view class="me-menu-item" @click="toProfile()">编辑个人资料</view>
			<view class="me-menu-item" @click="toAbout()">关于我们</view>
			<view class="me-menu-item" @click="toContact()">问题反馈</view>
			<view class="me-menu-item red" @click="cleanCache()">清除缓存</view>
			<view class="me-menu-line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userID: '123',
				userName: '中南青年',
				avatarUrl: '../../static/image/avatar.jpg',
				codeurl: '#',
				code: '',
				username: '',
				headImage: '',
			}
		},
		onReady() {
			console.log("onReady")
		},
		onload() {
			console.log("onload")
		},
		onShow() {
			console.log("onShow")
		},
		methods: {
			toProfile(){
				// console.log("toProfile")
				uni.navigateTo({
					url: `profile/profile`
				});
			},
			toAbout(){
				// console.log("toAbout")
				uni.navigateTo({
					url: `about/about`
				});
			},
			toContact(){
				// console.log("toContact")
				uni.navigateTo({
					url: `contact/contact`
				});
			},
			cleanCache(){
				uni.showModal({
					title:"不好！",
					content: "您似乎是要清除缓存\n这合理吗？",
					confirmText: "合理！",
					cancelText:"不对！",
					success: function(res) {
						if (res.confirm) {
							uni.clearStorage();
							uni.showToast({
								title: "EXEC_CLEAN"
							})
						}
					}
				})
			}
		},
	}
</script>

<style>
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-cell-hover {
		background-color: #eee;
	}

	.uni-list-cell-pd {
		padding: 22rpx 30rpx;
	}

	.uni-list-cell-left {
		white-space: nowrap;
		font-size: 34rpx;
		font-weight: 600;
		padding: 10px 30rpx;
	}

	.uni-list-cell-left-2 {
		display: inline-flex;
		white-space: nowrap;
		font-size: 34rpx;
		font-weight: 600;
		padding: 10px 30rpx;
	}

	.uni-list-cell-db,
	.uni-list-cell-right {
		margin-left: 45px;
		flex: 1;
	}

	.uni-list-cell::after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30rpx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.me-head {
		width: 100vw;
		height: 200px;
		text-align: center;
		background-image: url('../../static/image/Small.png');
		background-size: 100% 100%;
		background-color: #000000;
	}

	.me-head-pic {
		margin-top: 5vh;
		display: inline-flex;
		width: 80px;
		height: 80px;
		/* border: 2px solid #000000; */
		border-radius: 40px;

	}

	.me-head-pic image {
		width: 80px;
		height: 80px;
		/* 		width: 100%;
		height: 100%; */
		/* border: 2px solid #000000; */
		/* background-color: #ffffff; */
		border-radius: 50px;
	}

	.me-head-id {
		font-size: 20px;
		padding-top: 5px;
		font-weight: 400;
		color: #ffffff;
	}

	.me-head-wave-1 {
		height: 40px;
		background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png) repeat-x;
		_filter: alpha(opacity=80);
		position: absolute;
		top: 160px;
		width: 1000%;
		left: 0px;
		z-index: 5;
		opacity: 1;
		transiton-property: opacity, bottom;
		transition-duration: .4s, .4s;
		animation: wave 250s alternate infinite;
	}

	@keyframes wave {
		from {
			left: 0px;
		}

		to {
			left: -2500px;
		}
	}

	.me-head-wave-2 {
		height: 35px;
		background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png) repeat-x;
		_filter: alpha(opacity=80);
		position: absolute;
		top: 165px;
		width: 1000%;
		left: -50px;
		z-index: 5;
		opacity: 1;
		transiton-property: opacity, bottom;
		transition-duration: .4s, .4s;
		animation: wave2 250s alternate infinite;
	}

	@keyframes wave2 {
		from {
			left: -50px;
		}

		to {
			left: -3500px;
		}
	}

	.me-menu {
		margin-top: 20px;
	}

	.me-menu-item {
		padding: 15px;
		padding-left: 10px;
		font-size: 17px;
		line-height: 17px;
	}

	.me-menu-item::before {
		content: '';
		height: 1px;
		width: 100vw;
		position: absolute;
		left: 0px;
		margin-top: -17px;
		background-color: #00000011;
	}

	.me-menu-line {
		content: '';
		height: 1px;
		width: 100vw;
		background-color: #00000011;
	}

	.red {
		color: red;
	}

	.login {
		width: 100vw;
		height: 50px;
		/* position: absolute; */
		/* bo.loginttom: 0rpx; */
		text-align: center;
		padding-top: 10px;
		font-size: 60rpx;
		background-color: orange;
		color: white;

	}
</style>
