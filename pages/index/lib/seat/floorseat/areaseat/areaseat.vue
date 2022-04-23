<template>
	<view>
		<view class="date_text">{{showDate}}</view>
		<view v-for="(seat_item, index) in area" :key="index" class="seat_item" @click="getSeatArea(seat_item.id)">
			<view class="seat_item_name">{{seat_item.name}}</view>
			<view class="seat_item_info">
				<view>总数：{{seat_item.TotalCount}}</view>
				<view style="color: #007AFF">空闲：{{seat_item.UnavailableSpace}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	let app = getApp()
	export default {
		data() {
			return {
				area: [],
				showDate: ''
			}
		},
		methods: {
			initData() {
				for (let i = 0; i < this.area.length; i++) {
					this.area[i].UnavailableSpace = this.area[i].TotalCount - this.area[i].UnavailableSpace
				}
			},
			getSeatNum(place, date) {
				let that = this
				app.isloading()
				uni.request({
					url: `${getApp().globalData.BaseUrl}/lib/seat/${place}/${date}`,
					method: 'GET',
					success: (res) => {
						// console.log(place,date)
						if (res.data.StatusCode === 1) {
							that.area = res.data.Seat.childArea
							// console.log(res.data.Seat)
							that.initData()
						}
						app.noloading()
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.name
			})
			this.showDate = option.date
			this.getSeatNum(option.place, option.date)
		}
	}
</script>

<style>
	.date_text {
		text-align: center;
		padding-top: 10px;
	}

	.seat_item {
		margin: 10px 10px;
		padding: 5px;
		background-color: #FFFFFF;
		border-radius: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.seat_item_name {
		font-size: 23px;
		/* margin-left: 15%;
		margin-right: 30%; */
	}
</style>
