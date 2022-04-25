<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					出发点
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="placearray" range-key="name">
						<view class="uni-input">{{placearray[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					目的地
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange1" :value="index1" :range="placearray" range-key="name">
						<view class="uni-input">{{placearray[index1].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					时间段
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange2" :value="index2" :range="timearray" range-key="name">
						<view class="uni-input">{{timearray[index2].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<button type="primary" @click="checkBus">查询</button>
		<view>
			<view class="isempty" v-show="isempty">您本次搜索没有查询到班车信息<br>请更换站点、时间后再次搜索</view>
			<view class="businfo" v-show="hasbus" v-for="(item_bus, indexbus) in bus" :key="indexbus">
				<view class="info_content">
					<view>起始站：{{item_bus.Start}}</view>
					<view>终点站：{{item_bus.End}}</view>
					<view>起始站发车时间：{{item_bus.StartTime}}</view>
					<view>运营时间：{{item_bus.RunTime}}</view>
					<view>
						<text style="margin-right: 25px;">台数：{{item_bus.Num}}台</text>
						<text>座位数：{{item_bus.Seat}}座</text>
					</view>
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
				placearray: [{
						name: '校本部图书馆前坪'
					},
					{
						name: '南校区——教学楼前坪'
					},
					{
						name: '升华学生公寓大门'
					},
					{
						name: '新校区教学楼D座南坪'
					},
					{
						name: '新校区艺术楼'
					},
					{
						name: '湘雅医学院老校区'
					},
					{
						name: '湘雅医学院新校区'
					},
					{
						name: '湘雅医学院新校区大门'
					},
					{
						name: '铁道校区办公楼前坪'
					},
					{
						name: '铁道校区图书馆前坪'
					},
					{
						name: '科教新村'
					},
					{
						name: '东塘'
					},
				],
				timearray: [{
						name: '7:00-7:59'
					},
					{
						name: '8:00-8:59'
					},
					{
						name: '9:00-9:59'
					},
					{
						name: '10:00-10:59'
					},
					{
						name: '11:00-11:59'
					},
					{
						name: '13:00-13:59'
					},
					{
						name: '14:00-14:59'
					},
					{
						name: '15:00-15:59'
					},
					{
						name: '17:00-17:59'
					},
					{
						name: '18:00-18:59'
					},
					{
						name: '20:00-20:59'
					},
					{
						name: '7:00-20:59'
					},
				],
				index: 0,
				index1: 0,
				index2: 0,
				bus:[],
				isempty:false,
				hasbus:false
			}
		},
		methods: {
			bindPickerChange: function(e) {
				// console.log('出发点发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},
			bindPickerChange1: function(e) {
				// console.log('目的地发送选择改变，携带值为：' + e.detail.value)
				this.index1 = e.detail.value
			},
			bindPickerChange2: function(e) {
				// console.log('事件端发送选择改变，携带值为：' + this.timearray[e.detail.value].name)
				// console.log(this.timearray[e.detail.value].name)
				this.index2 = e.detail.value
			},
			initData(){
				this.isempty = this.hasbus = false
				if(this.bus.length === 1){
					if(!this.bus[0].Num.trim()){
						this.isempty = true
						return
					}
				}
				this.hasbus = true
			},
			checkBus(){
				let that = this
				// console.log(this.index, this.index1, this.timearray[this.index2].name)
				app.isloading()
				uni.request({
					url: `${getApp().globalData.BaseUrl}/bus/${this.index}/${this.index1}/${this.timearray[this.index2].name}`, // 
					method: 'GET',
					success: (res) => {
						if(res.data.StatusCode === 1){
							// console.log(res.data)
							that.bus = res.data.Bus
							that.initData()
							// console.log(that.bus)
						}
						app.noloading()
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
			}
		}
	}
</script>

<style>
	@import url("../../../../common/uni.css");
	.isempty{
		text-align: center;
		margin-top: 10px;
	}
	.businfo{
		margin: 10px 0;
		background-color: #FFFFFF;
		border-radius: 10px;
	}
	.info_content{
		margin: 0 10px;
		padding: 10px 0;
	}
	.line {
		background: #E0E3DA;
		width: 100%;
		height: 5rpx;
		margin: 8px 0;
	}
</style>
