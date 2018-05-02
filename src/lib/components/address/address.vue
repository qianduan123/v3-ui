<template>	
	<div>
		<div class="v3-address" :class="{'v3-address-active': show}">
			<div class="v3-address-title">{{title}}</div>
			<div class="v3-address-nav">
				<span 
					v-for="(v, index) in navList" 
					@click.stop="navSelect(index)"
					:class="{'active':index == navSub}"
					:key="index">
					{{ v.name }}
				</span>
				<span v-show="columnNum - 1 != navSub">{{chooseTitle}}</span>
			</div>
			<ul class="v3-address-select" :class = removeClass>
				<li v-for="(value, index) in columnNum" :key="index" class="v3-address-list">
					<template v-if="columns['columnItems' + value].length > 0">
						<div class="v3-address-list-box">
                            <a 
								href="javascript:;"
								v-for="item in columns['columnItems' + value]" 
								:class = "currentClass(item.v, item.name, index)"
								@click.stop="itemEvent(index, item.n, item.v, item.c)"
								:key="item.v">
								<span>{{item.n}}</span>
							</a>
                        </div>
					</template>
					<template v-else>
                        <div class="v3-address-list-box"></div>
                    </template>
				</li>
			</ul>
		</div>
		 <!--蒙层-->
    	<div class="v3-address-mask" v-if="show"  @click.stop = closeAddress></div>
	</div>
</template>
<script>
import items from "../district";
export default {
  	name: "v3-address",
  	data () {
		return {
			show: '',
			columnNum: 1,
			navIndex: 1,
			columns: {
				columnItems1: [],
				columnItems2: [],
				columnItems3: []
			},
			removeClass: '',
			navList:[],
			active: {},
			navSub: 0
		}
	},
	props: {
		title: {
			type: String,
			default: '所在地区'
		},
		chooseTitle: {
			type: String,
			default: '请选择'
		}
	},
	mounted() {
    	this.init();
    },
	methods: {
		init () {
			this.getColumsNum(items[0]);
			this.columns.columnItems1 = items;	
		},
		showAddress () {
			this.show = true;
		},
		closeAddress () {
			this.show = false;
		},
		getColumsNum(arr) {	
			if (arr.c && Array.isArray(arr.c)) {
				this.columnNum++;
				this.getColumsNum(arr.c[0]);
			}
		},
		itemEvent(index, name, value, children) {
			this.active['itemValue' + index] = value;
			this.active['itemName' + index] = name;
			this.columns['columnItems' + (index + 2)] = children;
			if (index >= 1 && children && children.length > 0 && this.columnNum > 2) {
				this.forwardView(true);
			}
			let obj = {};
			obj.name = name;
			obj.value = value;
			if (index < this.navList.length) {
				// 只保留数组下标为从0到index的项
				this.navList.splice(index);
				this.navList.push(obj);
			}else{
				// 正常流程
				this.navList.push(obj);				
			}
			// 全部选择后弹窗推出 选择数据输出到父组件
			if ((index + 1) == this.columnNum) {
				this.show = false;
				this.$emit('getData', this.navList);
			}
		},
		navSelect(index){
			if (index <= 1) {
				this.backoffView(true);
			}else{
				this.forwardView(true);
			}
			this.navSub = index;
		},
		backoffView(animate) {
			this.removeClass = (animate ? 'v3-move-animate' : '') + ' v3-address-prev';
		},
		forwardView(animate) {
			this.removeClass = (animate ? 'v3-move-animate' : '') + ' v3-address-next';
		},
		currentClass(v, n, index) {
            return (v && v == this.active['itemValue' + index]) || (n && n === this.active['itemName' + index]) ? 'v3-address-selected' : '';
		}
	},
	watch: {
		navList(v){
			this.navSub = this.navList.length - 1;
		}
	}
}
</script>
<style lang="scss" scoped>
	@import '../styles/common/mixins';
	@import '../styles/common/animated';
	.v3-address {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 75%;
		background-color: #fff;
		transform: translate(0, 100%);
		transition: transform .5s;
		z-index: 10;
		.v3-address-title {
			width: 100%;
			font-size: .3rem;
			text-align: center;
			height: 45px;
			line-height: 45px;
			position: relative;
			&:before {
				@include setBottomLine(#bdbdbd);
				margin-left: 0;
			}
		}
		.v3-address-nav {
			display: flex;
			position: relative;
			&:before {
				@include setBottomLine(#bdbdbd);
				margin-left: 0;
			}
			span {
				font-size: 13px;
				color: #222;
				display: block;
				height: 40px;
				line-height: 46px;
				padding: 0 8px;
				position: relative;
				margin-right: 15px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				max-width: 40%;
				cursor: pointer;
				&.active:before {
					@include setBottomLine(#f23030);
					margin-left: 0;
					transform: scaleY(1.5);
				}
			}
		}
	}
	.v3-address-mask {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		background: rgba(0,0,0,.6);
		z-index: 9;
	}
	.v3-address-active {
		transform: translate(0, 0);
		transition: transform .5s;
	}
	.v3-address-select {
		height: 100%;
		width: 100%;
		display: flex;
		&.v3-address-next {
			transform: translate(-50%, 0);
		}
		&.v3-address-prev {
			transform: translate(0, 0);
		}
		.v3-address-list {
			display: block;
			height: inherit;
			width: 50%;
			margin: 0;
			flex: 0 0 50%;
			overflow-y: auto;
			-webkit-overflow-scrolling: touch;
			background-color: #fff;
			&:nth-child(2n) {
				background-color: #f5f5f5;
			}
		}
		.v3-address-list-box {
			width: 100%;
			height: inherit;
			padding: 0 20px;
			a {
				color: #333;
				font-size: 13px;
				height: 40px;
				line-height: 40px;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				position: relative;
				z-index: 1;
				&:before {
					@include setBottomLine();
					margin-left: 0;
				}
				span {
					overflow: hidden;
					word-break: break-all;
					text-overflow: ellipsis;
					line-height: 16px;
					max-height: 32.2px;
					font-size: 13px;
					font-weight: normal;
					text-align: left;
					width: 100%;
					position: relative;
				}
				&.v3-address-selected {
					color: #ff4747;
					span {
						&:before {
							content: '\E69E';
							position: absolute;
							right: 5px;
							top: 0;
							bottom: 0;
							margin: auto;
							font-family: 'v3-iconfont';
						}
					}
				}
			}
		}
	}
</style>	