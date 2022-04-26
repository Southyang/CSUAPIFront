<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view class="line"></view>
		<view class="content">
			<view v-if="current === 0" class="content_text">
				<view v-for="(seat_item, index) in floor" :key="index" class="seat_item" @click="getSeatArea(index, seat_item.name)">
					<view class="seat_item_name">{{seat_item.name}}</view>
					<view>
						<view>总数：{{seat_item.TotalCount}}</view>
						<view style="color: #007AFF">空闲：{{seat_item.UnavailableSpace}}</view>
					</view>
				</view>
			</view>
			<view v-if="current === 1" class="content_text">
				<view v-for="(seat_item, index) in floor" :key="index" class="seat_item" @click="getSeatArea(seat_item.id, seat_item.name)">
					<view class="seat_item_name">{{seat_item.name}}</view>
					<view>
						<view>总数：{{seat_item.TotalCount}}</view>
						<view style="color: #007AFF">空闲：{{seat_item.UnavailableSpace}}</view>
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
				items: ['今天', '明天'],
				current: 0,
				activeColor: '#007aff',
				styleType: 'button',
				floor:[],
				place:'',
				showDate:'',
				campusName:''
			}
		},
		methods: {
			initData(){
				for(let i = 0; i < this.floor.length; i ++){
					this.floor[i].UnavailableSpace = this.floor[i].TotalCount - this.floor[i].UnavailableSpace
				}
			},
			getFormatDate(datevalue) {
				let date = new Date()
				let formatDate
				if (datevalue === 0) {
					formatDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
				} else {
					formatDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)
				}
				this.showDate = formatDate
				return formatDate
			},
			getSeatNum(date){
				let that = this
				app.isloading()
				uni.request({
					url: `${getApp().globalData.BaseUrl}/lib/seat/${that.place}/${date}`,
					method: 'GET',
					success: (res) => {
						if (res.data.StatusCode === 1) {
							that.floor = res.data.Seat.childArea
							that.initData()
							// console.log(that.floor)
						}
						app.noloading()
					},
					fail: (err) => {
						// console.log(err)
						uni.showToast({
							title: '服务器好像挂了诶\n要不再试一次？',
							image: '../../../../../static/image/notice/weep.png',
							duration: 3000
						});
						app.noloading()
					}
				})
			},
			onClickItem(e) {
				this.current = e.currentIndex
				// console.log(this.current)
				this.floor = []
				let date = this.getFormatDate(this.current)
				this.getSeatNum(date)
			},
			checkcampus(index){
				if(this.place === "3"){
					return index + 1
				}
				else{
					return index + 2
				}
			},
			getSeatArea(area, name){
				name = this.campusName + "-" + name
				area = this.checkcampus(area)
				let newplace = this.place + area
				// console.log(area)
				let that = this
				uni.navigateTo({
					url: `areaseat/areaseat?place=${newplace}&date=${that.showDate}&name=${name}`
				});
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.name
			})
			this.campusName = option.name
			this.place = option.place
			let date = this.getFormatDate(0)
			this.getSeatNum(date)
		}
	}
</script>

<style>
	.uni-common-mt {
		margin-top: 0px;
	}

	.uni-padding-wrap {
		// width: 750rpx;
		/* padding: 0px 30px; */
	}

	.content {
		margin-top: 15px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		height: auto;
	}

	.content_text {
		width: 100%;
		height: auto;
		background-color: blue($color: #000000);
	}
	
	.seat_item {
		margin: 10px 10px;
		padding: 5px;
		background-color: #FFFFFF;
		border-radius: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.seat_item_name {
		font-size: 23px;
		margin-left: 15%;
		margin-right: 30%;
	}
</style>
