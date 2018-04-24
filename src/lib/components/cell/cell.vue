<template>
    <label class="v3-cell-item" v-if="type == 'label' || type == 'checkbox' || type == 'radio'">
        <span class="v3-cell-left" v-if="checkLeft">
            <span class="v3-cell-icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </span>
        <label class="v3-cell-right" :class="classes">
            <slot name="right"></slot>
            <i v-if="type == 'radio'" class="v3-cell-radio-icon"></i>
            <i v-if="type == 'checkbox'" class="v3-cell-checkbox-icon"></i>
        </label>
    </label>
    <router-link class="v3-cell-item" :to="href" v-else-if="type == 'link'">
        <div class="v3-cell-left" v-if="checkLeft">
            <span class="v3-cell-icon">
                <slot name="icon"></slot>
            </span>
            <slot name="left"></slot>
        </div>
        <div class="v3-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </router-link>
    <a class="v3-cell-item" :href="href" v-else-if="type == 'a'">
        <div class="v3-cell-left" v-if="checkLeft">
            <span class="v3-cell-icon">
                <slot name="icon"></slot>
            </span>
            <slot name="left"></slot>
        </div>
        <div class="v3-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </a>
    <div class="v3-cell-item" v-else>
        <div class="v3-cell-left" v-if="checkLeft">
            <span class="v3-cell-icon">
                <slot name="icon"></slot>
            </span>
            <slot name="left"></slot>
        </div>
        <div class="v3-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'v3-cell-item',
  props: {
      type: {
          validator (value) {
              return ['link', 'a', 'label', 'div', 'checkbox', 'radio'].indexOf(value) > -1;
          },
          default: 'div'
      },
      arrow: {
          type: Boolean,
          default: false
      },
      href: {
          type: [String, Object]
      },
      to: {
          type: [String, Object]
      }
  },
  computed: {
      checkLeft() {
          return !!this.$slots.left || !!this.$slots.icon;
      },
      classes() {
          return this.arrow ? 'v3-cell-arrow' : '';
      }
  }
}
</script>

<style lang="scss">
@import "../styles/common/variables";
@import "../styles/common/mixins";
@import '../styles/common/font';
    label {
        margin: 0;
    }
    .v3-cell-item{
        display: flex;
        position: relative;
        overflow: hidden;
        height: 50px;
        line-height: 50px;
        background: #fff;
        color: #000;
        padding: 0 15px;
        font-size: 14px;
        &:not(:last-child):after {
            @include setBottomLine(#ccc);
        }
        .v3-cell-left {
            display: flex;
        }
        .v3-cell-icon {
            display: flex;
            align-items: center;
            img {
                height: 20px;
            }
        }
        .v3-cell-right {
            flex: 1;
            width: 100%;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            input[type="datetime-local"],
            input[type="date"],
            input[type="time"] {
                line-height: 50px;
            }
            input[type="radio"]:not(.v3-switch),
            input[type="checkbox"]:not(.v3-switch) {
                position: absolute;
                left: -999999px;
                & + .v3-cell-radio-icon,
                & + .v3-cell-radio-icon::before,
                & + .v3-cell-checkbox-icon,
                & + .v3-cell-checkbox-icon::before {
                    display: flex;
                    align-content: center;
                }

                & + .v3-cell-radio-icon::before,
                & + .v3-cell-checkbox-icon::before {
                    content: '\e60f';
                    color: #ccc;
                    font-size: 20px;
                }
                &:checked {
                    & + .v3-cell-radio-icon::before,
                    & + .v3-cell-checkbox-icon::before {
                        content: '\e69e';
                        color: #4cd864;
                    }
                }
            }
            &:active {
                background: none; /* for firefox */
            }
            .v3-input-clear,
            .v3-input-password {
                height: 50px;
            }
        }
    }
</style>