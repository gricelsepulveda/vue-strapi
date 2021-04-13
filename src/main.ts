import { Vue } from 'vue-property-decorator'
import MainComponent from './main-component.vue'
Vue.config.productionTip = false

new Vue({
    render: h => h(MainComponent)
}).$mount('#app')