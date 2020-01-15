import createApp from "./main"
const {vm,router} = createApp()


export default (context)=>{
    return new Promise((resolve, reject) => {
        router.push(context.url)

        router.onReady(()=>{
           resolve(vm)
        },reject) 
    })
    
}