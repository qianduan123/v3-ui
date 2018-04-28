<template>
	
	<div>
		<div class="v3-address" :class="{'v3-address-active': show}">
			<div>选择地址</div>

			<span @click.stop = closeAddress>关闭</span>	
			地址选择{{show}}
		</div>
		 <!--蒙层-->
    	<div class="v3-address-mask" v-if="show"  @click.stop = closeAddress></div>
	</div>
</template>
<script>
import addressList from "../address";
export default {
  	name: "v3-address",
  	data () {
		return {
			show: '',
		}
  	},
  	props:{
  	},
  	watch: {
    	value(val) {
			this.show = val;
			console.log(this.show);
    	}
	},
	mounted() {
    	this.init();
    },
	methods: {
		init () {
			this.getColumsNum(addressList[0]);
			// console.log(addressList[0]);
		},
		showAddress () {
			this.show = true;
		},
		closeAddress () {
			this.show = false;
		},
		getColumsNum(arr) {
			console.log(arr);
			if (Array.isArray(arr.c)) {
				this.columnNum++;
				this.getColumsNum(arr.c[0]);
			}
		},
	}  
}
</script>
<style lang="scss" scoped>
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
	
</style>	