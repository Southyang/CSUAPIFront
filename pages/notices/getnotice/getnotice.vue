<template>
	<view>
		<rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:""
			}
		},
		methods: {
			
		},
		onLoad(option) {
			let that = this
			uni.request({
				url: `${getApp().globalData.BaseUrl}/notice/article/${option.link}`, // 
				method: 'GET',
				success: (res) => {
					if(res.data.StateCode === 1){
						that.content = res.data.Content.replace("style=\"width:690px;\"","")
					}
				},
				fail: (err) => {
					console.log(err)
				}
			})
		}
	}
</script>

<style>
	page {
		background-color: #ffffff;
	}
</style>
