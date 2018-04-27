<template>
    <transition name="v3">
        <div v-if="show" class="v3-toast">
            <div class="v3-box" :style = "{backgroundColor: bgColor}">
                <div class="v3-box-inner">
                    <div class="v3-title" v-if="imgType">
                        <i v-if="imgType == 'icon'" :style = "{color: iconColor}" class="v3-iconfont" v-html="imgUrl"></i>
                        <img class="title-img" v-if="imgType == 'img'" :src="imgUrl" alt="">
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
                    console.log(value);
                    if(!value) return false;
                    return isColor(value);
                },
                default:'#ccc'
            }
        },
        data () {
            return {
                show: false,
                imgType: '',
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
            min-width: 50%;
            max-width: 80%;
            top: 38.2%;
            transform: translateY(-50%);
            position: absolute;
            left: 0;
            right: 0;
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
                font-size: 60px;
            }
        }
        .v3-content {
            color: #fff;
            font-size: 14px;
            text-align: center;
            padding: 10px 0;
        }
    }
    .v3-enter {
        opacity: 0;
        .v3-box {
            transform:scale(0);
        }
    }

    .v3-enter-active {
        transition: opacity .4s;
        .v3-box {
            transition: transform .4s;
        }
    }
    .v3-leave-active{
        transition: opacity .2s;
        .v3-box {
            transition: transform .2s;
        }
    }
    .v3-leave-active {
        opacity: 0;
    }
</style>