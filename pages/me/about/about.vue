<template>
	<view>
		<view class="logo-out">
			<image class="logo"src="../../../static/image/logo.jpg"></image>
		</view>
		<uni-section title="用户须知" sub-title="User instructions" type="line"></uni-section>
		<view class="border">
			<text class="info-content">{{text2}}</text>
		</view>
		<uni-section title="关于本系统" sub-title="About" type="line"></uni-section>
		<view class="border">
			<text class="info-content">{{text3}}</text>
		</view>
		<view class="copyright">Copyright © by southyang. All rights reserved.</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text2: '- 本系统中所有用户资料均不会用于其他用途，仅用于用户本人的教务信息查询。\n' +
					'- 在法律允许的范围内，您可以自由使用本系统。\n' +
					'- 禁止将本系统用于任何违法用途，我方不承担由于您的错误使用导致的一切后果，并且保留追究权利。\n' +
					'- 使用本系统则默认您遵守这些协定。',
				text3: '- 本系统遵守GPL v2.0协议，并受该协议保护。'
			}
		},
		methods: {

		}
	}
</script>

<style>
	page{
		background-color: #F8F8F8;
	}
	.logo-out{
		text-align: center;
	}
	.logo{
		margin: 3vh;
		display: inline-flex;
		width: 150px;
		height: 150px;
		border-radius: 75px;
	}
	
	.info-content {
		font-size: 14px;
		line-height: 20px;
		padding: 0px;
		color: #3b4144;
		text-align: justify;
	}

	.border {
		padding-left: 15px;
		padding-right: 15px;
	}

	.copyright {
		font-size: 12px;
		text-align: center;
		margin-top: 60px;
		margin-bottom: 40px;
		color: #808080;
	}
</style>
