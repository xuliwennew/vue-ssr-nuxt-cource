<template>
    <div>
        <h1 @click="show">tw0------</h1>
         
    </div>
</template>
<script>
 
export default {
    methods:{
        show(){
            alert("hello")
        }
    },
    created(){
        
    },
    data(){
        return {
            nodes:[]
        }
    }
}
</script>
