
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner)

Nova.booting((Vue, router, store) => {
    Vue.component('index-select-inline', require('./components/IndexField'))
    Vue.component('detail-select-inline', require('./components/DetailField'))
    Vue.component('form-select-inline', require('./components/FormField'))

    Vue.component('font-awesome-icon', FontAwesomeIcon)
})
