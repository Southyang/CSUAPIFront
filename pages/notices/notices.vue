<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view class="line"></view>
		<view class="content">
			<view v-if="current === 0" class="content_text">
				<view class="notice_content" v-for="(text1_item, index) in content_text1" :key="index"
					@click="getNotice(text1_item.Link)">
					<p class="notice_title">{{text1_item.Title}}</p>
					<view>
						<text class="notice_info">{{text1_item.Time}}</text>
						<text class="notice_info">浏览量:{{text1_item.ViewCount}}</text>
						<text class="notice_info">{{text1_item.Dept}}</text>
					</view>
					<view class="line"></view>
				</view>
			</view>
			<view v-if="current === 1" class="content_text">
				<view class="notice_content" v-for="(text2_item, index) in content_text2" :key="index"
					@click="getJwcNotice(text2_item.Link)">
					<p class="notice_title">{{text2_item.Title}}</p>
					<view>
						<text class="notice_info">{{text2_item.Time}}</text>
						<text class="notice_info">{{text2_item.Dept}}</text>
					</view>
					<view class="line"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let app = getApp()
	export default {
		components: {},
		data() {
			return {
				items: ['校内通知', '教务通知'],
				current: 0,
				pageId: 0,
				jwcPageId: 1,
				nofresh: true,
				activeColor: '#007aff',
				styleType: 'button',
				content_text1: [],
				content_text2: [],
				isNoinfo: false
			}
		},
		methods: {
			onClickItem(e) {
				this.current = e.currentIndex
				if(this.isNoinfo){
					this.getJwcNoticesList()
				}
				if (this.current == 1 && this.isNoinfo) {
					uni.showModal({
						title: "小提示",
						content: "微信缓存中没有您的信息呢\n去填写",
						confirmText: "好耶！",
						cancelText: "不去！",
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: `../me/profile/profile`
								});
							}
						}
					})
				}
			},
			getNotice(link) {
				uni.navigateTo({
					url: `getnotice/getnotice?link=${link}`
				});
			},
			getJwcNotice(link) {
				uni.navigateTo({
					url: `getjwcnotice/getjwcnotice?link=${link}`
				});
			},
			getNoticesList() {
				app.isloading()
				uni.request({
					url: `${getApp().globalData.BaseUrl}/notice/list/${this.pageId}`, // 0是第0页
					method: 'GET',
					success: (res) => {
						if (res.data.StatusCode === 1) {
							this.content_text1 = [...this.content_text1, ...res.data.NoticeList.Notices]
							this.pageId = this.pageId + 1;
							app.noloading()
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			getJwcNoticesList() {
				this.isNoinfo = false
				let userInfo = uni.getStorageSync('userInfo');
				if (userInfo.userName) {
					app.isloading()
					uni.request({
						url: `${getApp().globalData.BaseUrl}/jwc/${userInfo.userName}/${userInfo.password}/notice/list/${this.jwcPageId}`, // 1是第0页
						method: 'GET',
						success: (res) => {
							// console.log(res.data)
							if (res.data.StatusCode === 1) {
								this.content_text2 = [...this.content_text2, ...res.data.JwcNoticeList.Notices]
								this.jwcPageId = this.jwcPageId + 1;
								app.noloading()
							}
						},
						fail: (err) => {
							console.log(err)
						}
					})
				} else {
					this.isNoinfo = true
				}
			}
		},
		onReachBottom() {
			let that = this
			if (this.nofresh) {
				this.nofresh = false
				if (this.current === 0) {
					this.getNoticesList()
				} else {
					uni.showToast({
						title: '已经翻到底啦',
						duration: 3000
					});
				}
				setTimeout(() => {
					that.nofresh = true
				}, 3000)
			}
		},
		onShow() {
			this.getNoticesList()
			this.getJwcNoticesList()
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f1f1f1;
	}

	.uni-common-mt {
		margin-top: 0px;
	}

	.uni-padding-wrap {
		// width: 750rpx;
		// padding: 0px 30px;
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

	.notice_content {
		height: auto;
	}

	.notice_title {
		padding: 0 5px 5px 5px;
		font-size: 18px;
	}

	.notice_info {
		margin-right: 20px;
		padding: 5px;
	}

	.line {
		background: #E0E3DA;
		width: 100%;
		height: 5rpx;
		margin: 8px 0;
	}
</style>
