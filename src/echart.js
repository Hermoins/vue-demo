import Echarts from 'echarts'
export default {
 install(Vue){
  Vue.prototype.$echarts = Echarts
 }
}