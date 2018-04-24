<template>
  <button
    @click="onTouch"
    class="v3-btn"
    :class="classObject"
    :style="styleObject">
    <slot />
  </button>
</template>
<script>
export default {
  name: "v3-button",
  data () {
    return {

    };
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    styleObject:{
      type: Object
    },
    disabled: Boolean,
    isLoading: Boolean
  },
  methods: {
    onTouch (event) {
      if (this.disabled || this.isLoading) return false;
      this.$emit('click')
    }
  },
  computed: {
    classObject () {
      let className = {};
      let state = this.type ? `v3-btn-${this.type}` : 'v3-btn-default';//按钮类型
      let isDisabled = this.disabled ? 'v3-btn-disabled' : 'v3-btn';
      className[state] = this.disabled || this.isLoading? false:true;
      className[isDisabled] = this.disabled;
      className['v3-btn-loading'] = this.isLoading;
      return className
    }
  }
}

</script>
<style lang="scss" scoped>
  button {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    border-radius: 4px;
    cursor: pointer;
  }
  .v3-btn-default {
    background: #00b0ff;
    color: #fff;
  }
  .v3-btn-default:hover {
    background: #108bdd;
  }
  .v3-btn-disabled {
    background: #ccc;
    color: #fff;
    cursor: not-allowed;
  }
  .v3-btn-loading {
    color: #fff;
    cursor: not-allowed;
    background:#ccc url(https://static.yonglibao.com/lib/layer/default/loading-2.gif?v=50c5e3e79b) no-repeat left 4px center;
    background-size: 15px;
  }

</style>