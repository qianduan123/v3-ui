<template>
    <transition name="v3">
        <div v-if="show" class="v3-toast">
            <div class="v3-box">
                <div class="v3-box-inner">
                    <div class="v3-title" v-if="icon">
                        <img :src=imgUrl alt="">
                    </div>
                    <div class="v3-content" v-html="content"></div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name:'v3-toast',
        data () {
            return {
                show: false,
                icon: '',
                imgUrl: '',
                content: ''
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
    .v3-toast {
        .v3-box {
            max-width: 400px;
            top: 200px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 3px;
            padding: 6px 15px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 5px;
        }
        .v3-content {
            color: #fff;
            font-size: 17px;
            text-align: center;
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