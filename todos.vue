
<template>
<div id="app" >
    <div class="bgi" >
        <div>
            <input type="text" v-model="id" placeholder="what needs to be done?" @keyup.enter="add" class="input_css">
        </div>
    <div class="bgi" >  
        <table class="table_css">
        <tbody class="table_css"> 
             <tr v-for="item in search(keywords)" :key="item.id"><!--v-for是从data中直接@mouseleave="leave()" @mouseenter="enter(item.id)" v-show="item.seen"-->
             <td class="td_css">{{item.id}}
                 <label class="a_rigth" >   <!--绑定一个事件-->
                 <a href='' @click.prevent="del(item.id)" ><img src='@/cha_after.jpg'></a>
                 </label>
                 </td>
             
             </tr>
        </tbody>
        </table>
        </div> 
 
    </div>


</div>
</template>

<script>
export default {
 name: "First",
 data(){
return {
    id: '',
    name:'',
    keywords:'',
    list:   [ ],
    seen:false,       
       };
},
  methods:  {     
         add(){
            var car={id:this.id, name:this.name ,data:new Date()}
            this.list.push(car)
            this.id=this.name=''
     },
         del(id){ //id是索引，删除索引，然后通过js中的splice的方法可以删除数组中的项目
            this.list.some((item,i)=>{
                if(item.id==id){
                    this.list.splice(i,1);
                    return true;
                }
            })    
         },//方法一

         search(keywords){  //根据关键字查找
            //  var newList = this.list.filter(item=>{if..})
             var newList=[];
             this.list.forEach(item=>{
                 if(item.name.indexOf(keywords)!=-1){
                 newList.push(item)
                 }
             })
             return newList
        },

        leave(){
            this.seen=false;
        }


    },

// })
enter:{

},

}

</script>