import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  container,
  aside,
  Header,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Switch,
  DatePicker,
  dialog,
  Pagination,
  // MessageBox
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from './router'
import store from './store'
import http from 'axios'
import './network/mock'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(container)
Vue.use(aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(dialog)
Vue.use(Pagination)
// Vue.use(MessageBox)

Vue.prototype.$http = http

// router.beforeEach((to, from, next) => {
//   store.commit('getToken')
//   const token = store.state.user.token
//   if(!token && to.name != 'login') {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
