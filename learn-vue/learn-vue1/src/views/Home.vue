<template>
  <div>
    <!-- <style>
      :root {
        --lang: {{ lang }};
      }
    </style> -->
    <div class="home" :class="langClass" :style="{'--lang':lang}">
      <p class="p-primary">aa &amp;
        <a href="#">ddd</a>
      </p>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <vue-xlsx-table @on-select-file="handleSelectedFile"></vue-xlsx-table>
    <svg id="barcode"></svg>
    <!-- <canvas id="canvas" width='300' height="300"></canvas> -->
    <!-- <img id="img" ref="img" :src="imgUrl" @load="loadImg" @error="loadErr" /> -->
    <svg id="svg" width='300' height="300">
      <image id="svgImg" :href="imgSrc" preserveAspectRatio="none" />
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import JsBarcode from 'jsbarcode'
window.stylang = 'en'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    console.log(this.lang, this.langClass, document)
    // var sty = window.localStorage.getItem('lang')
    // this.langClass = []
    // this.langClass.push(this.lang)
    // window.stylang = this.lang
    this.lang = 'zh'
    require('../../public/less/' + this.lang + '/home/index.less')
    // require('../../public/less/en/home/index.less')
    // var inner = `<style lang="less" ref="homeStyle" scoped>
    //                 @import '../../public/home.less';
    //               </style>`
    // document.appendChild()
  },
  data(){
    return {
      // langClass: []
      imgSrc: '../../public/img/icons/store7.png',
      imgUrl: ''
    }
  },
  mounted() {
    var vm = this
    var a=JsBarcode("#barcode", "6922266440090");
    // console.log(a._renderProperties[0].element.outerHTML)
    // var cvs = document.createElement('canvas')
    // var cvs = document.getElementById('canvas')
    // cvs.width= 300
    // cvs.height= 300
    // var ctx = cvs.getContext('2d')
    // var img = document.getElementById('img')
    // console.log('imgg', img)
    var img = new Image()
    img.onload = function() {
      console.log('load')
      var cvs = document.createElement('canvas')
      cvs.width= this.naturalWidth
      cvs.height= this.naturalHeight
      var ctx = cvs.getContext('2d')
      ctx.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight)
      var imgDatas = ctx.getImageData(0, 0, this.naturalWidth, this.naturalHeight)
      console.log('source', imgDatas)
      var resultImgDatas = ctx.createImageData(imgDatas)
      console.log('target', resultImgDatas)
      for(var i=0;i<300;i++){
        for(var j=0;j<300;j++){
            var pos=i*300+j;
            //  var avr = parseInt((imgDatas.data[pos*4] + imgDatas.data[pos*4+1] + imgDatas.data[pos*4+2])/3)
            var avr = parseInt(imgDatas.data[pos*4] * 299/1000 + imgDatas.data[pos*4+1]  * 587/1000 + imgDatas.data[pos*4+2] * 114/1000)
              if(pos == 0) console.log('avr', avr)
            //  if((resultImgDatas.data[pos*4] !== 255 && resultImgDatas.data[pos*4+1] !== 255 && resultImgDatas.data[pos*4 + 2] !== 255 && resultImgDatas.data[pos*4+3] !== 1) || (resultImgDatas.data[pos*4+3] !== 0)) {
              if(avr >= 127) avr = 255
              else avr = 0
                resultImgDatas.data[pos*4]= avr === 255 ? 241 : avr;
                resultImgDatas.data[pos*4+1]= avr === 255 ? 184 : avr;
                resultImgDatas.data[pos*4+2]= avr === 255 ? 4 : avr;
                resultImgDatas.data[pos*4+3]=255;
            //  }
        }
      }
      // img.onerror = function(err) {
      //   console.log('error', err)
      // }
      console.log('result', resultImgDatas)
      ctx.putImageData(resultImgDatas,0,0);
      vm.imgSrc = cvs.toDataURL("image/png");//这其实是将canvas转成了图
    }
    img.onerror = function(err) {
      console.log('error', err)
    }
    img.src = '/img/icons/store7.png'
    // this.imgUrl = '/img/icons/store7.png'
  },
  methods: {
    handleSelectedFile (convertedData) {
      console.log(convertedData)
    },
    // loadImg: function() {
    //   console.log('load')
    //   var cvs = document.createElement('canvas')
    //   cvs.width= 300
    //   cvs.height= 300
    //   var ctx = cvs.getContext('2d')
    //   ctx.drawImage(this.$refs.img, 0, 0, 300, 200)
    //   var imgDatas = ctx.getImageData(0, 0, 300, 300)
    //   console.log('source', imgDatas)
    //   var resultImgDatas = ctx.createImageData(imgDatas)
    //   console.log('target', resultImgDatas)
    //   for(var i=0;i<300;i++){
    //     for(var j=0;j<300;j++){
    //         var pos=i*300+j;
    //         //  var avr = parseInt((imgDatas.data[pos*4] + imgDatas.data[pos*4+1] + imgDatas.data[pos*4+2])/3)
    //         var avr = parseInt(imgDatas.data[pos*4] * 299/1000 + imgDatas.data[pos*4+1]  * 587/1000 + imgDatas.data[pos*4+2] * 114/1000)
    //           if(pos == 0) console.log('avr', avr)
    //         //  if((resultImgDatas.data[pos*4] !== 255 && resultImgDatas.data[pos*4+1] !== 255 && resultImgDatas.data[pos*4 + 2] !== 255 && resultImgDatas.data[pos*4+3] !== 1) || (resultImgDatas.data[pos*4+3] !== 0)) {
    //           if(avr >= 127) avr = 255
    //           else avr = 0
    //             resultImgDatas.data[pos*4]= avr === 255 ? 241 : avr;
    //             resultImgDatas.data[pos*4+1]= avr === 255 ? 184 : avr;
    //             resultImgDatas.data[pos*4+2]= avr === 255 ? 4 : avr;
    //             resultImgDatas.data[pos*4+3]=255;
    //         //  }
    //     }
    //   }
    //   // img.onerror = function(err) {
    //   //   console.log('error', err)
    //   // }
    //   console.log('result', resultImgDatas)
    //   ctx.putImageData(resultImgDatas,0,0);
    //   this.imgSrc = cvs.toDataURL("image/png");//这其实是将canvas转成了图
    // },
    // loadErr: function() {
    //   console.log('load error')
    // }
  },
}
</script>
<!--<style lang="less" ref="homeStyle" scoped>
  @import '../../public/home.less';
</style>-->
<style lang="less" scoped>
// @stylang : `window.stylang`;
@import "../../public/less/en/home/index.less"; /*css下的导入会下载该文件*/
.home{
  background: #808080;
}
</style>
