<template>
	<view>
		<rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
	let app = getApp()
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
			app.isloading()
			uni.request({
				url: `${getApp().globalData.BaseUrl}/notice/article/${option.link}`, // 
				method: 'GET',
				success: (res) => {
					if(res.data.StatusCode === 1){
						that.content = res.data.Content.replace("style=\"width:690px;\"","")
					}
					app.noloading()
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
