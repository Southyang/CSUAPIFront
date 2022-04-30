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
				<view class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key" :url="item.url"
					@click="goDetailPage(item.id, item2.url)">
					<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
					<text class="uni-navigate-icon uni-icon">></text>
				</view>
			</view>
		</view>
		<!-- <button @click="getics">ics</button> -->
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
						url: 'jwc/grade/grade'
					}, {
						name: '查排名',
						url: 'jwc/rank/rank'
					}, {
						name: '查课表',
						url: 'jwc/course/course'
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
						url: 'lib/bookstatus/bookstatus'
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
			getics() {
				let startTime = "20221013T110500";
				let endTime = "20221013T130500";
				let location = "测试地点";
				let description = "测试描述信息，由southyang.cn@CSU导入"
				let alarm = "20221013T024500"
				let summary = "测试标题@" + location
				let uid = "ics-i@southyang.cn"

				let icsMSGHeader = "BEGIN:VCALENDAR\nVERSION:1.0\nTZ:+08:00\n"

				let icsMsgFooter = "END:VCALENDAR"

				let icsMsg = "BEGIN:VEVENT\nCOMPLETED:" + endTime + "\nDTSTART:" + startTime + "\nCLASS:PUBLIC\nDTEND:" + endTime +
					"\nDESCRIPTION:" + description + "\nLOCATION:" + location + "\nSUMMARY:" + summary + "\nAALARM:" + alarm +
					";;;\nEVENTTYPEEXT:NORMALEVENTTYPE\nEVENTALERTTYPE:NORMALALERT\nEVENTCALENDARTYPE:SOLAR\nEND:VEVENT\n";

				let finalIcsMsg = icsMSGHeader + icsMsg + icsMsgFooter

				// console.log(finalIcsMsg)

				let element = document.createElement('a')
				element.setAttribute('href', 'data:text/calendar;charset=utf8,' + encodeURIComponent(finalIcsMsg))
				element.setAttribute('download', "course.ics")
				element.style.display = 'none'
				document.body.appendChild(element)
				element.click()
				document.body.removeChild(element)
			}
		},
		onLoad() {

		}
	}
</script>

<style>
	@import '../../common/uni-nvue.css';
</style>
