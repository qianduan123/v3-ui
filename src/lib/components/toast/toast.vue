<template>
    <transition name="v3">
        <div v-if="show" class="v3-toast">
            <div class="v3-box" :style = "{backgroundColor: bgColor}">
                <div class="v3-box-inner">
                    <div class="v3-title" v-if="imgUrl">
                        <i   v-if = "imgType(imgUrl) == 'icon'" :style = "{color: iconColor}" class="v3-iconfont" v-html="imgUrl"></i>
                        <img v-if = "imgType(imgUrl) == 'http'" class="title-img" :src="imgUrl" alt="">
                    </div>
                    <div class="v3-content" :style = "{color: contentColor}" v-html="content"></div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import {isColor} from '../v3';
    export default {
        name:'v3-toast',
        props:{
            bgColor:{
                validator(value) {
                    if(!value) return false;
                    return isColor(value);
                },
                default:'#000'
            },
            iconColor:{
                validator(value) {
                    if(!value) return false;
                    return isColor(value);
                },
                default:'#ccc'
            },
            contentColor:{
                validator(value) {
                    if(!value) return false;
                    return isColor(value);
                },
                default:'#ccc'
            }
        },
        data () {
            return {
                show: false,
                imgUrl: '',
                content: '',
                time:''
            }
        },
        computed:{

        },
        methods: {
            success () {
                this.show = false;
            },
            imgType (v) {
                let a = 1;
                if(v.includes('http')){
                    return 'http'
                }else if(v.includes('&#x')){
                    return 'icon'
                }
                
            }
        }
    }
</script>
<style lang="scss">
    @import '../styles/common/font';

    .v3-toast {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background: rgba(0,0,0,0);
        .v3-box {
            max-width: 300px;
            top: 38.2%;
            transform: translate(-50%,-50%);
            position: absolute;
            left: 50%;
            margin: auto;
            background: rgba(0,0,0,.6);
            border-radius: 3px;
            display: flex;
            justify-content: center;
        }
        .v3-title {
            text-align: center;
            padding: 20px 30px 0;
            .title-img {
                max-width: 100px;
            }
            .v3-iconfont {
                font-size: 40px;
            }
        }
        .v3-content {
            color: #fff;
            font-size: 14px;
            text-align: center;
            padding: 10px;
        }
    }
    .v3-enter {
        opacity: 0;
        transform:scale(0);
    }

    .v3-enter-active {
        transition: opacity .3s;
        transition: transform .3s;
    }
</style>