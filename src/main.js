// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/index.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
    Vue.mixin({
        data () {
            return {
                GRIDSOME_API_URL: 'http://47.96.24.44:1337'
                // GRIDSOME_API_URL: 'http://localhost:1337'
            }
        }
    })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
