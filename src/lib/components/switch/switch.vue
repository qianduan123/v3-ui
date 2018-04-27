<template>
    <span class="v3-switch-wrap" @click="toggle" :class="isDisabled">
        <input class="v3-switch-input" :disabled="disabled"  type="checkbox" v-model = checked>
        <i class="v3-switch">
            <span class="v3-switch-inner">
                <slot name="open" v-if="checked"></slot>
                <slot name="close" v-if="!checked"></slot>
            </span>
        </i>
    </span>
</template>
<script>
import {isColor} from '../v3';
export default {
    name: "v3-switch",
    data () {
        return {
            checked: this.value
        };
    },
    props:{
        value:{
            type: Boolean,
            default: true
        },
        color:{
            validator(value) {
                if(!value) return false;
                return isColor(value);
            },
            default: '#4cd864'
        },
        disabled:{
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggle(){
            if(this.disabled) {
                return false;
            };
            this.checked = !this.checked;
            this.$emit('change',this.checked);
        }
    },
    computed:{
        switchColor(){
            return this.color ? 'switch-color' : ''
        },
        isDisabled(){
            return this.disabled ? 'v3-switch-disabled' : ''
        }
    }
}
</script>
<style lang="scss" scoped>
    .v3-switch-wrap {
        display: inline-block;
        user-select: none;
        input[type="checkbox"] {
            position: absolute;
            left: 999999px;
            & + i {
                width: 48px;
                height: 24px;
                line-height: 24px;
                border-radius: 24px;
                vertical-align: middle;
                background-color: #ccc;
                position: relative;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                transition: all .2s ease-in-out;
                display: inline-block;
                &:after {
                    content: "";
                    width: 20px;
                    height: 20px;
                    border-radius: 20px;
                    background: #fff;
                    position: absolute;
                    left: 2px;
                    top: 2px;
                    cursor: pointer;
                    box-shadow: 0 1px 3px rgba(0,0,0,.4);
                    transition: left .2s ease-in-out,all .2s ease-in-out;
                }
                &:active {
                    &:after {
                        transform-origin: 0;
                        width: 25px;
                    }
                }
                .v3-switch-inner {
                    position: absolute;
                    right: 8px;
                    left: auto;
                    transition: all .3s; 
                    color: #fff;
                    font-size: 12px;
                }
            }
            &:checked + i{
                background: #4cd864;                
                &:after {
                    left: 25px;
                }
                &:active {
                    &:after {
                        transform: translateX(-5px);
                        width: 25px;
                    }
                }
                .v3-switch-inner {
                    position: absolute;
                    left: 8px;
                    right: auto;
                    transition: all .3s;
                }
            }
        }
    }
    .v3-switch-disabled .v3-switch {
        background: #ccc!important;
    }
</style>