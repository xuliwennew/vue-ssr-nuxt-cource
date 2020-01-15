import Vue from "vue"
import VueRouter from "vue-router"
import one from "./pages/one"
import two from "./pages/two"
Vue.use(VueRouter)

function createRouter(){
    let router = new VueRouter({
        mode:"history",
        routes:[
            {path:"/",component:one},
            {path:"/two",component:two}
        ]
    })

    return router
}

export default createRouter()