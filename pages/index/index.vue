<template>
	<view>
		<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
			<view class="uni-panel-h" :class="item.open ? 'uni-panel-h-on' : ''"
				@click="triggerCollapse(index, item.id)">
				<text class="uni-panel-text">{{item.name}}</text>
				<text class="uni-panel-icon uni-icon"
					:class="item.open ? 'uni-panel-icon-on' : ''">{{item.pages ? '∨' : '&#xe470;'}}</text>
			</view>
			<view class="uni-panel-c" v-if="item.open">
				<view
					class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key" :url="item.url"
					@click="goDetailPage(item.id, item2.url)">
					<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
					<text class="uni-navigate-icon uni-icon">></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: 'jwc',
					name: '教务查询',
					open: false,
					pages: [{
						name: '查成绩',
						url: ''
					}, {
						name: '查排名',
						url: ''
					}, {
						name: '查课表',
						url: ''
					}]
				}, {
					id: 'lib',
					name: '图书馆查询',
					open: false,
					pages: [{
						name: '座位查询',
						url: 'lib/seat/seat'
					}, {
						name: '预约记录',
						url: ''
					}]
				}, {
					id: 'other',
					name: '实用小功能',
					open: false,
					pages: [{
						name: '班车查询',
						url: 'other/bus/bus'
					}]
				}],
			}
		},
		methods: {
			triggerCollapse(e, id) {
				if (!this.list[e].pages) {
					this.goDetailPage('', this.list[e].url);
					return;
				}
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[i].open;
					} else {
						this.list[i].open = false;
					}
				}
			},
			goDetailPage(panel, url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style>
	@import '../../common/uni-nvue.css';
</style>
