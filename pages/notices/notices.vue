<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view class="line"></view>
		<view class="content">
			<view v-if="current === 0" class="content_text">
				<view class="notice_content" v-for="(text1_item, index) in content_text1" :key="index" @click="getNotice(text1_item.Link)">
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
				在开发了
				<view class="notice_content" v-for="(text2_item, index) in content_text2" :key="index">
					<!-- <p class="notice_title">{{text2_item.Title}}</p>
					<view>
						<text class="notice_info">{{text2_item.Time}}</text>
						<text class="notice_info">{{text2_item.Dept}}</text>
					</view>
					<view class="line"></view> -->
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
				pageId:0,
				nofresh:true,
				activeColor: '#007aff',
				styleType: 'button',
				content_text1: [],
				content_text2: [{
						"Title": "测试教务标题",
						"Dept": "发布部门",
						"Time": "2022-04-21",
						"Link": "123456789"
					},
					{
						"Title": "测试教务标题1",
						"Dept": "发布部门1",
						"Time": "2022-04-21",
						"Link": "123456789"
					},
					{
						"Title": "测试教务标题2",
						"Dept": "发布部门2",
						"Time": "2022-04-21",
						"Link": "123456789"
					}
				],
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			getNotice(link){
				uni.navigateTo({
					url: `getnotice/getnotice?link=${link}`
				});
			},
			getNoticesList(){
				app.isloading()
				uni.request({
					url: `${getApp().globalData.BaseUrl}/notice/list/${this.pageId}`, // 0是第0页
					method: 'GET',
					success: (res) => {
						if(res.data.StateCode === 1){
							this.content_text1 = [...this.content_text1,...res.data.NoticeList.Notices]
							this.pageId = this.pageId + 1;
							app.noloading()
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		onReachBottom(){
			let that = this
			if(that.nofresh){
				that.nofresh = false
				this.getNoticesList()
				setTimeout(()=>{
					that.nofresh = true
				},3000)
			}
		},
		onLoad() {
			this.getNoticesList()
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
		padding: 0px 30px;
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
