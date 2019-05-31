// alert("hello");
var getChildrenTextContent = function (children) {
    return children.map(function (node) {
      return node.children
        ? getChildrenTextContent(node.children)
        : node.text
    }).join('')
  }
  
  Vue.component('anchored-heading', {
    render: function (createElement) {
      // 创建 kebabCase 风格的ID
      var headingId = getChildrenTextContent(this.$slots.default)
        .toLowerCase()
        .replace(/\W+/g, '-')
        .replace(/(^\-|\-$)/g, '')
  
      return createElement(
        'h' + this.level,
        [
          createElement('a', {
            attrs: {
              name: headingId,
              href: '#' + headingId
            }
          }, this.$slots.default)
        ]
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })
var data={
    a:"aa",
    b:"bb",
    // rawHtml:'<script type="text/javascript">document.body.appendChild(document.createElement("div"))</script>'
    rawHtml:'<span style="color: red">This should be red. {{data.aa}}</span>',
    isDisabled1:true,
    isDisabled2:false,
    message:"message",
    firstName:"meng li",
    lastName:"xu",
    items:["item1","item2","item3"],
    items1:[{
        id:1,
        text:'item1'
    },{
        id:2,
        text:"item2"
    },{
        id:3,
        text:"item3"
    }],
    msg:"test template1",
    items2: [1,2,3,4,5,6,7,8,9],
    nextNum: 10
};
var vm=new Vue({
    el:"#app",
    data:data,
    methods:{
        changeA:function(){
            data.a+="a"
        },
        changeB:function(){
            vm.b+="b";
        },
        reversedMessage:function(){
            return this.message.split("").reverse().join("");
        },
        now:function(){
            return Date.now();
        },
        setFullName:function(){
            vm.fullName="lilly ti";
        },
        unshiftItem:function(){
            this.items.unshift("abs");
        },
        reverseItem:function(){
            this.items.reverse();
        },
        insertItem:function(){
            this.items.splice(2,0,"kk");
        },
        unshiftItem1:function(){
            this.items1.unshift({
                id:this.items1.length+1,
                text:"item"+(this.items1.length+1)
            });
        },
        reverseItem1:function(){
            this.items1.reverse();
        },
        insertItem1:function(){
            this.items1.splice(2,0,{
                id:this.items1.length+1,
                text:'item'+(this.items1.length+1)
            });
        },
        randomIndex: function () {
            return Math.floor(Math.random() * this.items2.length)
        },
        add: function () {
            this.items2.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items2.splice(this.randomIndex(), 1)
        },
        // shuffle: function () {
        //     this.items2 = _.shuffle(this.items2)
        // }
    },
    computed:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('');
        },
        now1:function(){
            return Date.now();
        },
        // fullName:function(){
        //     return this.lastName+' '+this.firstName;
        // }
        fullName:{
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
    beforeCreate() {
        console.log("vm beforeCreate");
    },
    created() {
        console.log("vm created");
    },
    beforeMount() {
        console.log("vm beforeMount");
    },
    mounted() {
        console.log("vm mounted");
    },
    beforeUpdate() {
        console.log("vm beforeUpdate");
    },
    updated() {
        console.log("vm updated");
    },
    beforeDestroy() {
        console.log("vm beforeDestroy");
    },
    destroyed() {
        console.log("vm destroyed");
    },
    activated() {
        console.log("vm activated");
    },
    deactivated() {
        console.log("vm deactivated");
    },
    errorCaptured: (err, vm, info) => {
        console.log("vm errorCaptured",err);
    },
});
vm.c="cc";

vm.$watch('a',function(newVal,oldVal){
    console.log(newVal,oldVal);
})

// var vm1=new Vue({
//     template:"<div>{{msg}}</div>",
//     data:{
//         msg:'test template'
//     }
// });
// vm1.$mount('#mountDemo');
