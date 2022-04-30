<template>
	<view>
		<button type="primary" class="grade_button" @click="download">一键导出</button>
		<view v-for="(grade_item, index) in grade" :key="index" class="grade_item" @click="getDetailGrade(index)">
			<view class="grade_item_classname">{{grade_item.ClassName}}</view>
			<view class="grade_item_finalgrade">{{grade_item.Grade}}</view>
			<view class="grade_item_goto">></view>
		</view>
		<view class="grade_tip">如果成绩没有加载出来，有可能是需要评教哦</view>
	</view>
</template>

<script>
	import * as XLSX from '../../../../utils/xlsx.core.min.js'
	let app = getApp()
	export default {
		data() {
			return {
				grade: [],
				exportGrade: []
			}
		},
		methods: {
			download() {
				let gradeString = JSON.stringify(this.grade)
				let subStr = new RegExp('ClassNo', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr1 = new RegExp('FirstTerm', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr2 = new RegExp('GottenTerm', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr3 = new RegExp('ClassName', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr4 = new RegExp('MiddleGrade', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr5 = new RegExp('FinalGrade', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr6 = new RegExp('Grade', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr7 = new RegExp('ClassScore', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr8 = new RegExp('ClassType', 'ig'); //创建正则表达式对象,不区分大小写,全局查找
				let subStr9 = new RegExp('ClassProp', 'ig'); //创建正则表达式对象,不区分大小写,全局查找

				gradeString = gradeString.replace(subStr, "序号").replace(subStr1, "初修学期").replace(subStr2, "获得学期")
					.replace(subStr3, "课程").replace(subStr4, "平时成绩").replace(subStr5, "期末成绩")
					.replace(subStr6, "总成绩").replace(subStr7, "学分").replace(subStr8, "课程属性").replace(subStr9,
						"课程性质") // 替换为中文
				this.exportGrade = JSON.parse(gradeString) // 对象化
				// console.log(this.exportGrade)

				/* 创建worksheet */
				var ws = XLSX.utils.json_to_sheet(this.exportGrade.reverse())

				/* 新建空workbook，然后加入worksheet */
				var wb = XLSX.utils.book_new()
				XLSX.utils.book_append_sheet(wb, ws, "AllGrade")

				/* 生成xlsx文件 */
				XLSX.writeFile(wb, "grade.xlsx")
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
								this.grade = res.data.Grade.reverse()
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
			},
			getDetailGrade(index){
				// console.log(index)
				// console.log(this.grade[index])
				uni.navigateTo({
					url: `detailGrade/detailGrade?detailGrade=` + JSON.stringify(this.grade[index])
				});
			}
		},
		onLoad() {
			this.getJwcGrade()
		}
	}
</script>

<style>
	.grade_button {
		width: 90%;
		margin: 10px 5%;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.grade_item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 10px 10px;
		padding: 5px;
		background-color: #FFFFFF;
		border-radius: 10px;
	}

	.grade_item_classname {
		/* margin-left: 5px; */
	}

	.grade_item_finalgrade {
		margin-right: 25px;
	}

	.grade_item_goto {
		position: absolute;
		right: 12px;
	}
	
	.grade_tip{
		text-align: center;
	}
	
	.grade_tip::before{
		content:"Tip:";
		color:#007AFF;
	}
</style>
