<template>
  <div id="app">
    <div id="a0">
        <v3-button
            class="aaa"
            id="run-aaaa"
            :style-object = proporty
            @click = alert>
            Alert组件
        </v3-button>
        <hr/>
        <v3-button
            class="aaa"
            id="run-aaaa"
            :style-object = proporty
            @click = toast>
            Toast组件
        </v3-button>
        <hr/>
        <v3-button
            class="aaa"
            id="run-aaaa"
            @click = getAddress>
            地址选择器
        </v3-button>
        <hr/>
        <v3-cell-item v-for="(v, key) in addressList" :key="key">
            <span slot="left">{{v.name}}</span>
            <span slot="right">{{v.value}}</span>
        </v3-cell-item>
    </div>
  <br>
    
    <div>已选中：{{checkList}}</div>
    <!-- 多选 -->
    <div id="a1" style="padding:10px 0;">
        <v3-cell-item type="checkbox">
            <img  slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">			  
            <span slot="left">多选一</span>
            <input slot="right" type="checkbox" value="A" v-model="checkList"/>            
        </v3-cell-item>
        <v3-cell-item type="checkbox">
            <span slot="left">多选二</span>
            <input slot="right" type="checkbox" value="B" v-model="checkList"/>            
        </v3-cell-item>
        <v3-cell-item type="checkbox">
            <span slot="left">多选二</span>
            <input slot="right" type="checkbox" value="C" v-model="checkList"/>            
        </v3-cell-item>
        <v3-cell-item type="checkbox">
            <span slot="left">多选二</span>
            <input slot="right" type="checkbox" value="D" v-model="checkList"/>            
        </v3-cell-item>
    </div>
    <div id="a1" style="padding:10px 0;">
        <v3-cell-item type="checkbox">
            <img  slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">			  
            <span slot="left">多选一</span>
            <input slot="right" type="checkbox" value="A" v-model="checkList"/>            
        </v3-cell-item>
        <v3-cell-item type="checkbox">
            <span slot="left">多选二</span>
            <input slot="right" type="checkbox" value="B" v-model="checkList"/>            
        </v3-cell-item>
        <v3-cell-item type="checkbox">
            <span slot="left">多选二</span>
            <input slot="right" type="checkbox" value="C" v-model="checkList"/>            
        </v3-cell-item>
        <v3-cell-item type="checkbox">
            <span slot="left">多选二</span>
            <input slot="right" type="checkbox" value="D" v-model="checkList"/>            
        </v3-cell-item>
    </div>
    <!-- 单选 -->
    <div id="a2" style="padding:10px 0">
        <v3-cell-item type="radio" href = "xxxx">
            <img  slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="left">选项一</span>
            <input slot="right" type="radio" value="Han MeiMei" v-model="picked"/>
        </v3-cell-item>
        <v3-cell-item type="radio">
            <span slot="left">选项二</span>
            <input slot="right" type="radio" value="MeiM" v-model="picked"/>            
        </v3-cell-item>
    </div>
    <!-- 开关 -->
    <div id="a3" style="padding:10px 0">
        <v3-cell-item href = "xxxx">
            <img  slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="left">{{chengeCon1}}</span>
            <v3-switch slot="right" color="#ff4747"  @change = "change1" v-model = chengeCon1>
                <span class="v3-iconfont" slot="open">&#xe640;</span>
                <span class="v3-iconfont" slot="close">&#xe632;</span>
            </v3-switch>
        </v3-cell-item>
        <v3-cell-item href = "xxxx">
            <img  slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="left">禁止点击 开关状态：{{chengeCon2}}</span>
            <v3-switch slot="right" color="#00b0ff" disabled  @change = "change2" v-model = chengeCon2>
                <span class="v3-iconfont" slot="open">开</span>
                <span class="v3-iconfont" slot="close">关</span>
            </v3-switch>
        </v3-cell-item>
    </div>
    <v3-address ref="addressList" @getData = getAddressData></v3-address>
  </div>
</template>

<!--
  1. isLoading是否显示loading图片
  2. style-object 传入样式对象，如proporty
    proporty: {
      color: '#fff',
      background: '#ff4747',
      borderRadius: '10px'
    }
  3. @click  button的点击触发事件
  4. disabled 是否需要禁止点击 设置该属性后 点击事件失效
-->

<script>
import Driver from 'driver.js'
export default {
  name: 'app',
  data () {
    return {
      //少量的样式修改支出直接定制
      proporty: {
        // color: '#fff',
        // background: '#ff4747',
        // borderRadius: '10px'
      },
      link: '123123',
      picked: 'MeiM',
      checkList:[],
      switch1: false,
      chengeCon1: false,
      chengeCon2: true,
      show1: false,
      addressList: []
    }
  },
  methods: {
    alert(){
        console.log('按钮点击');
        this.$alert({
            content:
                `综合收益率，反应各计划投资的综合收益情况，影响因素可能有：<br>
                1、复投是否成功<br>
                2、复投匹配债权差异<br>
                3、主动退出变现等`,
            submitText: '我知道了'
        })
        .then(()=>{
            this.name='守候'
            this.$alert({
                content: this.name
            })
        });
    },
    toast(){
        console.log('按钮点击');
        // this.$toast({
        //     imgUrl: '&#xe61a;',
        //     iconColor: 'orange',
        //     content: '付款失败',
        //     contentColor: '#fff',
        //     time: '500000',
        //     bgColor:'rgba(0,0,0,.6)'
        // });
        this.$toast({
            imgUrl: '&#xe61a;',
            content:'充值失败，请稍后重试',
            time: '3000'
        });
    },
    abc(val){
        console.log(val);
    },
    change1(val){
        this.chengeCon1 = val;
        console.log(val);
    },
    change2(val){
        this.chengeCon2 = val;
        console.log(val);
    },
    // 关键点提示插件
    drive(){
        const driver = new Driver({
            animate: true,  // Animate while changing highlighted element
            opacity: 0.75,  // Background opacity (0 means only popovers and without overlay)
            padding: 10,    // Distance of element from around the edges
            allowClose: true, // Whether clicking on overlay should close or not
            doneBtnText: '完成', // Text on the final button
            closeBtnText: '关闭', // Text on the close button for this step
            nextBtnText: '下一步', // Next button text for this step
            prevBtnText: '上一步', // Previous button text for this step
            showButtons: true
        });
        // Define the steps for introduction
        driver.defineSteps([
        {
            element: '#a0',
            popover: {
            title: '按钮组件',
            description: '支持大多数样式自定义',
            position: 'bottom'
            }
        },
        {
            element: '#a1',
            popover: {
            title: '列表',
            description: '多选',
            position: 'bottom'
            }
        },
        {
            element: '#a2',
            popover: {
            title: '列表',
            description: '单选',
            position: 'top'
            }
        },
        {
            element: '#a3',
            popover: {
            title: '开关',
            description: '支持背景色更换/是否禁止点击',
            position: 'top'
            }
        },
        ]);
        driver.start();
        localStorage.setItem('drive','true');
    },
    getAddress () {
        this.$refs['addressList'].showAddress();
    },
    getAddressData (v) {
        this.$toast({
            content:'选择地址成功',
            time: '3000'
        });
        this.addressList = v;
    }
  },
  mounted(){
    if(localStorage.getItem('drive')) return;
    this.drive();
  }
}
</script>

<style lang="scss">
@import './lib/components/styles/common/reset.scss';
@import './lib/components/styles/driver.scss';
* {
    margin: 0;
    padding: 0;
}
html,body {
    background: #f5f5f5;
    margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 15px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
