<template>
    <transition name="v3">
        <div v-if="show" class="v3-alert">
            <div class="v3-box">
                <div class="v3-box-inner">
                    <div class="v3-title" v-if="title">{{title}}</div>
                    <div class="v3-content" v-html="content"></div>
                </div>
                <div class="v3-box-buttons">
                    <span class="v3-btn-success" @click.stop="close">{{submitText}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name:'v3-alert',
        data () {
            return {
                show: false,
                title: '',
                content: '',
                submitText: '确定',
                cancelText: '取消'
            }
        },
        computed: {},
        mounted () {
        },
        methods: {
            close () {
                this.show = false;
            }
        }
    }
</script>
<style lang="scss">
    .v3-alert {
        background: rgba(00, 00, 00, .4);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        .v3-box {
            width: 80%;
            max-width: 400px;
            top: 38.2%;
            transform: translateY(-50%);
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            background: #fff;
            box-sizing: border-box;
            padding: 25px;
            border-radius: 3px;
        }
        .v3-title {
            padding-left: 0;
            margin-bottom: 0;
            font-size: 16px;
            font-weight: 700;
            height: 18px;
            color: #333;
        }
        .v3-content {
            padding: 14px 0;
            line-height: 24px;
            color: #48576a;
            font-size: 14px;
        }
        .v3-box-buttons {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .v3-btn-success {
            width: 240px;
            line-height: 40px;
            text-align: center;
            background: rgb(17,114,215);
            color: #fff;
            border-radius: 3px;
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
    .v3-leave {
        opacity: 0;
    }
</style>