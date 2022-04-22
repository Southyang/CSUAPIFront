<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			text: 'text',
			imService : null,
			userID: '',
			userName: '',
			BaseUrl: 'https://code.southyang.cn/v1/csuapi',
			// BaseUrl: 'http://localhost:27905/csuapi',
			sex:'u',
			pre:'',
			tosex:'e',
			islogin:false,
			token:0
		},
		methods:{
			isloading(){
				uni.showLoading({
					title: 'loading'
				});
			},
			noloading(){
				uni.hideLoading();
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #f1f1f1;
	}
</style>
