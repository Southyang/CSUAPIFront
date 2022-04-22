<template>
	<view class="contact">
		<view class="contact_title">期待您的反馈</view>
		<uni-section title="常见问题" sub-title="Frequently questions" type="line"></uni-section>
		<view class="contact_question">
			暂无
		</view>
		<uni-section title="我要反馈" sub-title="Give feedback" type="line"></uni-section>
		<button type="primary" @click="giveFeedback">去反馈</button>
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
				console.log("跳转到公众号后台")
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
</style>
