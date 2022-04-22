<template>
	<view>
		<view>
			<view class="tip_info">教务系统</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					学号
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" v-model="userName" maxlength="10" placeholder="最大输入长度为10" />
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					密码
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" type="password" v-model="password" maxlength="18" placeholder="最大输入长度为18" />
				</view>
			</view>
		</view>
		<button type="primary" class="saveinfo" @click="save">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:'',
				password:''
			}
		},
		methods: {
			save(){
				uni.setStorageSync('userInfo', {
					userName: this.userName,
					password: this.password,
				});
				console.log("保存信息")
			},
		},
		onLoad() {
			let userInfo = uni.getStorageSync('userInfo');
			this.userName = userInfo.userName
			this.password = userInfo.password
		}
	}
</script>

<style>
	.tip_info{
		margin-top: 3px;
		font-size: 25px;
		text-align: center;
		font-family: "楷体", "楷体_GB2312";
	}
	.uni-input-wrapper {
		/* #ifndef APP-NVUE */
		display: inline-flex;
		/* #endif */
		padding: 8px 13px;
		flex-direction: row;
		flex-wrap: nowrap;
		background-color: #FFFFFF;
	}

	.uni-input {
		display: inline-flex;
		height: 28px;
		line-height: 28px;
		font-size: 15px;
		padding: 0px;
		flex: 1;
		background-color: #FFFFFF;
	}

	.uni-list-cell {
		margin-top: 3px;
		margin-bottom: 3px;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-cell-hover {
		background-color: #eee;
	}

	.uni-list-cell-pd {
		padding: 22rpx 30rpx;
	}

	.uni-list-cell-left {
		background-color: #FFFFFF;
		display: inline-flex;
		white-space: nowrap;
		font-size: 34rpx;
		font-weight: 600;
		padding: 10px 30rpx;
	}
	
	.saveinfo{
		margin-top: 3px;
	}
</style>
