<template>
	<view>
		<view class="ClassName">{{this.detailGrade.ClassName}}</view>
		<view class="line"></view>
		<view>
			<view class="detail_grade_item">
				<view class="detail_grade_item_first">初修学期</view>
				<view class="detail_grade_item_second">{{this.detailGrade.FirstTerm}}</view>
			</view>
			<view class="line"></view>
		</view>
		<view>
			<view class="detail_grade_item">
				<view class="detail_grade_item_first">获得学期</view>
				<view class="detail_grade_item_second">{{this.detailGrade.GottenTerm}}</view>
			</view>
			<view class="line"></view>
		</view>
		<view>
			<view class="detail_grade_item">
				<view class="detail_grade_item_first">平时成绩</view>
				<view class="detail_grade_item_second">{{this.detailGrade.MiddleGrade}}</view>
			</view>
			<view class="line"></view>
		</view>
		<view>
			<view class="detail_grade_item">
				<view class="detail_grade_item_first">期末成绩</view>
				<view class="detail_grade_item_second">{{this.detailGrade.FinalGrade}}</view>
			</view>
			<view class="line"></view>
		</view>
		<view>
			<view class="detail_grade_item">
				<view class="detail_grade_item_first">总评成绩</view>
				<view class="detail_grade_item_second">{{this.detailGrade.Grade}}</view>
			</view>
			<view class="line"></view>
		</view>
		<view>
			<view class="detail_grade_item">
				<view class="detail_grade_item_first">学分</view>
				<view class="detail_grade_item_second">{{this.detailGrade.ClassScore}}</view>
			</view>
			<view class="line"></view>
		</view>
		<view>
			<view class="detail_grade_item">
				<view class="detail_grade_item_first">课程属性</view>
				<view class="detail_grade_item_second">{{this.detailGrade.ClassType}}</view>
			</view>
			<view class="line"></view>
		</view>
		<view>
			<view class="detail_grade_item">
				<view class="detail_grade_item_first">课程性质</view>
				<view class="detail_grade_item_second">{{this.detailGrade.ClassProp}}</view>
			</view>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailGrade: []
			}
		},
		methods: {

		},
		onLoad(option) {
			this.detailGrade = JSON.parse(option.detailGrade)
			// console.log(this.detailGrade)
		}
	}
</script>

<style>
	.ClassName{
		font-size: 20px;
		margin: 15px 5px;
		color: #0055ff;
	}
	.detail_grade_item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.detail_grade_item_first{
		margin-left: 5px;
	}
	
	.detail_grade_item_second{
		margin-right: 5px;
	}

	.line {
		background: #E0E3DA;
		width: 100%;
		height: 5rpx;
		margin: 8px 0;
	}
</style>
