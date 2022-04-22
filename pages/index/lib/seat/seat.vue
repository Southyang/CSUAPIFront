<template>
	<view class="seatlogo">
		<view class="logocontent" @click="tolib1(1)">
			<image class="logo" src="../../../../static/image/lib/1.png"><br>
				新校区
		</view>
		<view class="logocontent" @click="tolib2(2)">
			<image class="logo" src="../../../../static/image/lib/2.png"><br>
				校本部
		</view>
		<view class="logocontent" @click="tolib3(3)">
			<image class="logo" src="../../../../static/image/lib/3.png"><br>
				铁道校区
		</view>
		<view class="logocontent" @click="tolib4(4)">
			<image class="logo" src="../../../../static/image/lib/4.png"><br>
				湘雅新校区
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			tolib1(place){
				console.log("新校区图书馆",place)
				uni.navigateTo({
					url: `floorseat/floorseat?place=${place}`
				});
			},
			tolib2(place){
				console.log("校本部")
			},
			tolib3(place){
				console.log("铁道")
			},
			tolib4(place){
				console.log("湘雅新校区")
			}
		}
	}
</script>

<style>
	.seatlogo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.logocontent{
		margin: 10px;
		width: 240px;
		height: 180px;
		background-color: #FFFFFF;
		border-radius: 5px;
		text-align: center;
	}

	.logo {
		margin: 0.9vh;
		width: 230px;
		height: 140px;
	}
</style>
