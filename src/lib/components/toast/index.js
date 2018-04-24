import Vue from 'vue';
import ToastComponent from './toast.vue';
//合并对象函数，这个方法是会改变，第一个参数的值的
function merge (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty (prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }
  return target;
}
let instance;
//extend 是构造一个组件的语法器.传入参数，返回一个组件
let ToastConstructor = Vue.extend (ToastComponent);
let getInstance = () => {
  return new ToastConstructor ({
    el: document.createElement ('div'),
  });
};

let initInstance = () => {
  instance = getInstance();
  document.body.appendChild (instance.$el);
};
ToastConstructor.prototype.closeToast = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild (el);

  pageScroll.unlock ();

  typeof this.callback === 'function' && this.callback ();
};

let Toast = (options = {}) => {
  //初始化
  initInstance ();
  // 将单个 confirm instance 的配置合并到默认值（instance.$data，就是main.vue里面的data）中
  merge (instance.$data, options);
  instance.show = true;
  let timer = setTimeout(() => {
    clearTimeout (timer);
    instance.close();
  },3000)

  //返回Promise
  // return new Promise ((resolve, reject) => {
  //   console.log(instance);
  //   instance.show = true;
  //   instance.close = () => {
  //     //先执行instance.close（main.vue里面的close函数）
  //     close ();
  //     //再执行自定义函数
  //     resolve ('ok');
  //   };
  // });
};
export default Toast;
