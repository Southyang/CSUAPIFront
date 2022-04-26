<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					周数
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="weekarray" range-key="name">
						<view class="uni-input">{{weekarray[index].name}}</view>
					</picker>
				</view>
				<button class="course_button" @click="addInDate">导入日历</button>
			</view>
		</view>
		<view class="week_info">
			<view v-for="(week_item, index) in weeks" :key="index" class="week_info_text">
				<view>{{week_item}}</view>
			</view>
		</view>

		<view class="course">
			<view v-for="(course_item1, index) in course1" :key="index" class="course_item"
				:style="{'background-color':course_item1[0].ClassName != ''?'#d9f7ff':''}">
				<view class="course_item_name">{{course_item1[0].ClassName}}&nbsp</view>
				<view>
					<view>{{course_item1[0].Place}}&nbsp</view>
					<view>{{course_item1[0].Teacher}}&nbsp</view>
				</view>
			</view>
		</view>
		<view class="course">
			<view v-for="(course_item2, index) in course2" :key="index" class="course_item"
				:style="{'background-color':course_item2[0].ClassName != ''?'#b9ffbf':''}">
				<view class="course_item_name">{{course_item2[0].ClassName}}&nbsp</view>
				<view>
					<view>{{course_item2[0].Place}}&nbsp</view>
					<view>{{course_item2[0].Teacher}}&nbsp</view>
				</view>
			</view>
		</view>
		<view class="course">
			<view v-for="(course_item3, index) in course3" :key="index" class="course_item"
				:style="{'background-color':course_item3[0].ClassName != ''?'#c4c8ff':''}">
				<view class="course_item_name">{{course_item3[0].ClassName}}&nbsp</view>
				<view>
					<view>{{course_item3[0].Place}}&nbsp</view>
					<view>{{course_item3[0].Teacher}}&nbsp</view>
				</view>
			</view>
		</view>
		<view class="course">
			<view v-for="(course_item4, index) in course4" :key="index" class="course_item"
				:style="{'background-color':course_item4[0].ClassName != ''?'#fffdb9':''}">
				<view class="course_item_name">{{course_item4[0].ClassName}}&nbsp</view>
				<view>
					<view>{{course_item4[0].Place}}&nbsp</view>
					<view>{{course_item4[0].Teacher}}&nbsp</view>
				</view>
			</view>
		</view>
		<view class="course">
			<view v-for="(course_item5, index) in course5" :key="index" class="course_item"
				:style="{'background-color':course_item5[0].ClassName != ''?'#ff6b60':''}">
				<view class="course_item_name">{{course_item5[0].ClassName}}&nbsp</view>
				<view>
					<view>{{course_item5[0].Place}}&nbsp</view>
					<view>{{course_item5[0].Teacher}}&nbsp</view>
				</view>
			</view>
		</view>
		<view class="course">
			<view v-for="(course_item6, index) in course6" :key="index" class="course_item"
				:style="{'background-color':course_item6[0].ClassName != ''?'#e355ff':''}">
				<view class="course_item_name">{{course_item6[0].ClassName}}&nbsp</view>
				<view>
					<view>{{course_item6[0].Place}}&nbsp</view>
					<view>{{course_item6[0].Teacher}}&nbsp</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let app = getApp()
	export default {
		data() {
			return {
				startweek: "2022-02-20 00:00:00",
				index: 0,
				weeks: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", ],
				weekarray: [{
						name: '全部周次'
					}, {
						name: '第一周'
					},
					{
						name: '第二周'
					},
					{
						name: '第三周'
					},
					{
						name: '第四周'
					},
					{
						name: '第五周'
					},
					{
						name: '第六周'
					},
					{
						name: '第七周'
					},
					{
						name: '第八周'
					},
					{
						name: '第九周'
					},
					{
						name: '第十周'
					},
					{
						name: '第十一周'
					},
					{
						name: '第十二周'
					},
					{
						name: '第十三周'
					},
					{
						name: '第十四周'
					},
					{
						name: '第十五周'
					},
					{
						name: '第十六周'
					},
					{
						name: '第十七周'
					},
					{
						name: '第十八周'
					},
					{
						name: '第十九周'
					},
					{
						name: '第二十周'
					},
				],
				course1: [],
				course2: [],
				course3: [],
				course4: [],
				course5: [],
				course6: [],
			}
		},
		computed: {
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}

		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.detail.value
				this.getJwcCourse()
			},
			initWeek() {
				let startDate = new Date(this.startweek)
				let nowDate = new Date()
				// console.log(nowDate)
				// console.log(startDate)
				let weeks
				// console.log(((nowDate - startDate) / 1000 / 60 / 60 / 24))
				weeks = parseInt((nowDate - startDate) / 1000 / 60 / 60 / 24 / 7) + 1
				this.index = weeks
			},
			addInDate() {
				uni.showToast({
					title: '在开发了！',
					image: '../../../../static/image/notice/weep.png',
					duration: 3000
				});
			},
			initCourse(allCourse) {
				this.course1 = allCourse.slice(0, 7)
				this.course2 = allCourse.slice(7, 14)
				this.course3 = allCourse.slice(14, 21)
				this.course4 = allCourse.slice(21, 28)
				this.course5 = allCourse.slice(28, 35)
				this.course6 = allCourse.slice(35, 42)
			},
			getJwcCourse() {
				let userInfo = uni.getStorageSync('userInfo');
				if (userInfo.userName) {
					app.isloading()
					uni.request({
						url: `${getApp().globalData.BaseUrl}/jwc/${userInfo.userName}/${userInfo.password}/class/2021-2022-2/${this.index}`,
						method: 'GET',
						success: (res) => {
							// console.log(res.data)
							if (res.data.StatusCode === 1) {
								this.initCourse(res.data.Class)
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
			this.initWeek()
			this.getJwcCourse()
		}
	}
</script>

<style>
	@import url("../../../../common/uni.css");

	.course_button {
		background-color: #09BB07;
		color: #FFFFFF;
	}

	.week_info {
		display: flex;
		flex-direction: row;
		background-color: skyblue;
	}

	.week_info_text {
		width: 14%;
		text-align: center;
	}

	.course {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.course_item {
		margin: 2px;
		/* background-color: #d9f7ff; */
		width: 14vw;
		height: 20vh;
		font-size: 10px;

		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: space-between;
	}

	.active {
		background-color: #d9f7ff;
	}
</style>
