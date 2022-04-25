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
			let userInfo = uni.getStorageSync('userInfo');
			app.isloading()
			uni.request({
				url: `${getApp().globalData.BaseUrl}/jwc/${userInfo.userName}/${userInfo.password}/notice/article/${option.link}`, // 
				method: 'GET',
				success: (res) => {
					if(res.data.StatusCode === 1){
						that.content = res.data.Content.replace("style=\"width:690px;\"","")
						that.content =	that.content.replace(/(发布类别：)[\u4E00-\u9FA5]{2,6}/,function(e){
							return "<p>"+e+"</p>"
						})
						that.content =	that.content.replace(/(发布时间：)([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))([ ])([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/,function(e){
							return "<p>"+e+"</p>"
						})
						
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
