import Vue from 'vue';
import ToastComponent from './toast.vue';
import * as v3Common from '../v3-units'


//extend 是构造一个组件的语法器.传入参数，返回一个组件
let ToastConstructor = Vue.extend (ToastComponent);

const instance = new ToastConstructor ({
  el: document.createElement ('div'),
});

let initInstance = () => {
  document.body.appendChild (instance.$el);
  v3Common.pageScroll.lock();
};

/**
 * @description 
 * @author zhaojingqi
 * @param  {String} options.imgUrl 1、v3UI提供的icon图标 2、图片:http或https开头的绝对地址
 * @param  {String} options.bgColor toast背景图颜色 默认默认#999
 * @param  {String} options.iconColor icon图标的颜色 默认#ccc
 * @param  {String} options.content toast文字内容 必传
 * @param  {String} options.contentColor  toast文字内容颜色 默认#ccc
 * @param  {String Number} options.time  toast显示时间 默认3秒
 */
let Toast = (options = {}) => {
  instance.imgUrl = options.imgUrl;  
  instance.bgColor = options.bgColor;  
  instance.iconColor = options.iconColor;
  instance.content = options.content;
  instance.contentColor = options.contentColor;
  instance.time = ~~options.time || 3000;
 
  initInstance();
  instance.show = true;
  let timer = setTimeout(() => {
    clearTimeout (timer);
    v3Common.pageScroll.unlock ();
    instance.show = false;
  },instance.time)
};
export default Toast;
