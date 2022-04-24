<template>
	<view>
		<button type="primary" class="grade_button" @click="download">一键导出</button>
		<view v-for="(grade_item, index) in grade" :key="index" class="grade_item">
			<view class="grade_item_classname">{{grade_item.ClassName}}</view>
			<view class="grade_item_finalgrade">{{grade_item.Grade}}</view>
			<view class="grade_item_goto">></view>
		</view>
	</view>
</template>

<script>
	let app = getApp()
	export default {
		data() {
			return {
				grade:[]
			}
		},
		methods: {
			download(){
				uni.showToast({
					title: '在开发了！',
					image: '../../../../static/image/notice/weep.png',
					duration: 3000
				});
			},
			getJwcGrade() {
				let userInfo = uni.getStorageSync('userInfo');
				if (userInfo.userName) {
					app.isloading()
					uni.request({
						url: `${getApp().globalData.BaseUrl}/jwc/${userInfo.userName}/${userInfo.password}/grade`,
						method: 'GET',
						success: (res) => {
							// console.log(res.data)
							if (res.data.StatusCode === 1) {
								this.grade = res.data.Grade
								app.noloading()
							}
						},
						fail: (err) => {
							console.log(err)
						}
					})
				} else {
					uni.showModal({
						title: "小提示",
						content: "微信缓存中没有您的信息呢\n去填写",
						confirmText: "好耶！",
						cancelText: "不去！",
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: `../../../me/profile/profile`
								});
							}
						}
					})
				}
			}
		},
		onLoad() {
			this.getJwcGrade()
		}
	}
</script>

<style>
.grade_button{
		width: 90%;
		margin: 10px 5%;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.grade_item{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 10px 10px;
		padding: 5px;
		background-color: #FFFFFF;
		border-radius: 10px;
	}
	
	.grade_item_classname{
		/* margin-left: 5px; */
	}
	
	.grade_item_finalgrade{
		margin-right: 25px;
	}
	
	.grade_item_goto{
		position: absolute;
		right: 12px;
	}
</style>
