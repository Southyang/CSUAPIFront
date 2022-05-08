<template>
	<view class="contact">
		<view class="contact_title">期待您的反馈</view>
		<uni-section title="常见问题" sub-title="Frequently questions" type="line"></uni-section>
		<view class="contact_question">
			暂无
		</view>
		<uni-section title="我要反馈" sub-title="Give feedback" type="line"></uni-section>
		<view class="feedback">
			<a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkzNTI3OTkxOA==&scene=110==#wechat_redirect">去反馈</a>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			giveFeedback() {
				// uni.showToast({
				// 	title: '在开发了！',
				// 	image: '../../../static/image/notice/weep.png',
				// 	duration: 3000
				// });
			}
		}
	}
</script>

<style>
	.contact_title {
		margin: 10px;
		font-size: 25px;
		text-align: center;
		font-family: "楷体", "楷体_GB2312";
	}

	.contact_question {
		margin: 10px;
	}
	
	.feedback{
		background-color: #26a1ff;
		width: 100vw;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.feedback a{
		width: inherit;
		height: inherit;
		color: #FFFFFF;
		text-decoration: none;
		font-size: 25px;
		text-align: center;
		line-height: 40px;
	}
</style>
