<template>
	<view>
		欢迎查看具体区域
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(option) {
			let that = this
			console.log(option.place)
			// app.isloading()
			// uni.request({
			// 	url: `${getApp().globalData.BaseUrl}/notice/article/${option.link}`, // 
			// 	method: 'GET',
			// 	success: (res) => {
			// 		if(res.data.StateCode === 1){
			// 			that.content = res.data.Content.replace("style=\"width:690px;\"","")
			// 		}
			// 		app.noloading()
			// 	},
			// 	fail: (err) => {
			// 		console.log(err)
			// 	}
			// })
		}
	}
</script>

<style>

</style>
