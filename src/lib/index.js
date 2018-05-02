
import Button from './components/button'
import Cell from './components/cell'
import Switch from './components/switch'
import Alert from './components/alert'
import Toast from './components/toast'
import Address from './components/address'

const comment = {
    install: function (Vue) {
        Vue.component (Button.name, Button);
        Vue.component (Cell.name, Cell);
        Vue.component (Switch.name, Switch);
        Vue.component (Address.name, Address);
        Vue.component (Alert.name, Alert);      
        Vue.component (Toast.name, Toast);
        
        Vue.$alert = Vue.prototype.$alert = Alert;
        Vue.$toast = Vue.prototype.$toast = Toast;
    }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use (comment);
}

export default comment;