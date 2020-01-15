import Vue from "vue"
import App from "./App"
import router from "./router"

function createApp(){
   
    var vm = new Vue({
        router,
        render:h=>h(App)
    })

    return {vm,router}
}

export default createApp