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
	import * as XLSX from '../../../../utils/xlsx.core.min.js'
	let app = getApp()
	export default {
		data() {
			return {
				rank: [],
				exportRank: []
			}
		},
		methods: {
			download() {
				let rankString = JSON.stringify(this.rank)
				let subStr = new RegExp('Term', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr1 = new RegExp('TotalScore', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr2 = new RegExp('ClassRank', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr3 = new RegExp('AverScore', 'ig'); //创建正则表达式对象,不区分大小写,全局查找

				rankString = rankString.replace(subStr, "学期").replace(subStr1, "计算学分").replace(subStr2, "专业排名")
					.replace(subStr3, "平均分")
				this.exportRank = JSON.parse(rankString) // 对象化
				// console.log(this.exportRank)

				/* 创建worksheet */
				var ws = XLSX.utils.json_to_sheet(this.exportRank.reverse())

				/* 新建空workbook，然后加入worksheet */
				var wb = XLSX.utils.book_new()
				XLSX.utils.book_append_sheet(wb, ws, "AllRank")

				/* 生成xlsx文件 */
				XLSX.writeFile(wb, "rank.xlsx")
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
							// console.log(err)
							uni.showToast({
								title: '服务器好像挂了诶\n要不再试一次？',
								image: '../../../../static/image/notice/weep.png',
								duration: 3000
							});
							app.noloading()
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
	.rank_button {
		width: 90%;
		margin: 10px 5%;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.rank_item {
		margin: 10px 10px;
		padding: 5px;
		background-color: #FFFFFF;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
	}

	.rank_item_term {
		margin-left: 3vw;
	}

	.rank_item_info {
		margin-top: 10px;
		display: flex;
		/* justify-content: center; */
	}

	.rank_item_info_text {
		margin: 0 3vw
	}
</style>
