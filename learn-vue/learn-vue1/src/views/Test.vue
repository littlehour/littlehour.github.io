<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="map" @click="aa" style="height: 600px">ss</div>
  </div>
</template>
<script>
// import '../components/map';
// import L7 from '@antv/l7';
// 初始化 场景
export default{
    mounted() {
        console.log('test', L7, this.axios)
        var vm = this
        var scene = new L7.Scene({
            id: 'map',
            mapStyle: 'dark', // 样式URL
            center: [121.507674, 31.223043],
            pitch: 65.59312320916906,
            zoom: 15.4,
            minZoom: 15,
            maxZoom: 18
        });
        // 初始化地图，添加线图层
        console.log(scene)
        scene.on('loaded', function() {
            vm.axios.get('https://gw.alipayobjects.com/os/rmsportal/kNDVHmyUWAKhWmWXmjxM.json').then(function(data) {
                console.log(data)
                scene.LineLayer({
                    zIndex: 2
                }).source(data.data).color('#F08D41').animate({
                    enable: true
                }).render();
            }).catch(function(err){console.log(err)});
        });
    },
    methods: {
        aa: function(){
            console.log('aa', L7)
        }
    },   
};

</script>