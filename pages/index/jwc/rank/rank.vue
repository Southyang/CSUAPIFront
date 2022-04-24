<template>
	<view>
		<button type="primary" class="rank_button" @click="download">一键导出</button>
		<view v-for="(rank_item, index) in rank" :key="index" class="rank_item">
			<view class="rank_item_term">时间段：{{rank_item.Term}}</view>
			<view class="rank_item_info">
				<view class="rank_item_info_text">总学分：{{rank_item.TotalScore}}</view>
				<view class="rank_item_info_text">均分：{{rank_item.AverScore}}</view>
				<view class="rank_item_info_text">排名：{{rank_item.ClassRank}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	let app = getApp()
	export default {
		data() {
			return {
				rank:[]
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
			getJwcRank() {
				let userInfo = uni.getStorageSync('userInfo');
				if (userInfo.userName) {
					app.isloading()
					uni.request({
						url: `${getApp().globalData.BaseUrl}/jwc/${userInfo.userName}/${userInfo.password}/rank`,
						method: 'GET',
						success: (res) => {
							// console.log(res.data)
							if (res.data.StatusCode === 1) {
								this.rank = res.data.Rank
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
			this.getJwcRank()
		}
	}
</script>

<style>
	.rank_button{
		width: 90%;
		margin: 10px 5%;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
.rank_item{
	margin: 10px 10px;
	padding: 5px;
	background-color: #FFFFFF;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
}
.rank_item_term{
	margin-left: 3vw;
}
.rank_item_info{
	margin-top: 10px;
	display: flex;
	/* justify-content: center; */
}
.rank_item_info_text{
	margin:0 3vw
}
</style>
