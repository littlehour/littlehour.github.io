<template>
    <div>
        <!-- <el-row>
            <el-col :xs="24" :sm="24" :md="5" :lg="5">
                <a id="logo" href="/#">
                    <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
                    <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg">
                </a>
            </el-col>
        </el-row> -->
        <div ref="div1" class="scrollAnim" :class="{scrollAnimAct: scrollT > div1H }">
            <svg width="400px" height="576px" viewBox="0 0 400 576" fill="none">
                <g class="g1">
                    <ellipse cx="100" cy="100" rx="6" ry="6" stroke="#2F54EB" stroke-width="1.6"></ellipse>
                </g>
                <g class="g2">
                    <g transform="translate(200 450)">
                        <g style="transform-origin:50% 50%;transform:rotate(-340deg)">
                            <rect stroke="#FADB14" stroke-width="1.6" width="9" height="9"></rect>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div ref="div2" class="scrollAnim" :class="{scrollAnimAct: scrollT > div2H }">
            <svg width="482px" height="500px" viewBox="0 0 482 500" style="transform: translate(0px, 54.9303px);">
                <defs>
                    <path d="M151,55 C129.666667,62.6666667 116,74.3333333 110,90 C104,105.666667 103,118.5 107,128.5 L225.5,96 C219.833333,79 209.666667,67 195,60 C180.333333,53 165.666667,51.3333333 151,55 L137,0 L306.5,6.5 L306.5,156 L227,187.5 L61.5,191 C4.5,175 -12.6666667,147.833333 10,109.5 C32.6666667,71.1666667 75,34.6666667 137,0 L151,55 Z" id="mask"></path>
                </defs>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0, 30)">
                    <g id="Group-7" transform="translate(56.000000, 124)">
                        <g style="transform: translate(0px, 23.0679px) rotate(14.4174deg);">
                            <image id="cc2" alt="globe" xlink:href="https://gw.alipayobjects.com/zos/rmsportal/DJWUmdpxcQakQHwhPjzf.png" width="124px" height="130px"></image>
                        </g>
                    </g>
                    <g id="Group-8" transform="translate(127.000000, 82)">
                        <g style="transform: rotate(-14.4174deg);">
                            <image id="cc1" alt="globe" xlink:href="https://gw.alipayobjects.com/zos/rmsportal/DEaRdiYbAyVNRelJpwXx.png" width="195px" height="163px"></image>
                        </g>
                    </g>
                    <g id="Group-13" transform="translate(0.000000, 41.000000)">
                        <g style="transform: translate(0px, 12.0094px);">
                            <ellipse fill-opacity="0.4" fill="#2F54EB" opacity="0.3" cx="390" cy="25.9920529" rx="6" ry="5.99205288"></ellipse>
                        </g>
                        <g style="transform: translate(0px, -11.3583px);">
                            <circle fill-opacity="0.4" fill="#2F54EB" opacity="0.3" cx="402" cy="3" r="3"></circle>
                        </g>
                        <g style="transform: translate(0px, 11.3583px);">
                            <ellipse stroke="#13C2C2" stroke-width="1.6" cx="419" cy="313.994702" rx="4" ry="3.99470192"></ellipse>
                        </g>
                        <g style="transform: translate(0px, -11.0164px);">
                            <rect fill="#FFE600" opacity="0.6" transform="translate(285.224453, 179.218136) rotate(-340.000000) translate(-285.224453, -179.218136) " x="277.244453" y="171.248705" width="15.96" height="15.9388607" rx="3.6"></rect>
                        </g>
                        <g style="transform: translate(0px, 10.6649px);">
                            <rect stroke="#F5222D" stroke-width="1.6" transform="translate(184.000000, 18.000000) rotate(8.000000) translate(-184.000000, -18.000000) " x="176.8" y="10.8" width="14.4" height="14.4" rx="3.6"></rect>
                        </g>
                        <g style="transform: translate(0px, -10.6649px);">
                            <path d="M11.6005591,127.582431 L14.1769733,132.010943 C15.1767883,133.729492 14.5941396,135.933161 12.8755911,136.932976 C12.325874,137.25279 11.7012453,137.421269 11.0652659,137.421269 L5.91243747,137.421269 C3.92421237,137.421269 2.31243747,135.809494 2.31243747,133.821269 C2.31243747,133.185289 2.48091636,132.560661 2.80073009,132.010943 L5.37714432,127.582431 C6.37695929,125.863883 8.58062832,125.281234 10.2991769,126.281049 C10.8384011,126.594758 11.2868499,127.043207 11.6005591,127.582431 Z" stroke="#13C2C2" stroke-width="1.6" transform="translate(8.489147, 131.606717) rotate(18.000000) translate(-8.489147, -131.606717) "></path>
                        </g>
                        <g style="transform: translate(0px, 9.93681px);">
                            <path d="M168.708021,336.081114 L171.995111,342.213024 C172.516977,343.186539 172.150843,344.398784 171.177328,344.920649 C170.88673,345.076428 170.562126,345.157945 170.232408,345.157945 L163.658227,345.157945 C162.553657,345.157945 161.658227,344.262514 161.658227,343.157945 C161.658227,342.828226 161.739744,342.503622 161.895523,342.213024 L165.182613,336.081114 C165.704478,335.1076 166.916723,334.741466 167.890238,335.263331 C168.237419,335.449442 168.52191,335.733933 168.708021,336.081114 Z" stroke="#2F54EB" stroke-width="1.6" transform="translate(166.945513, 340.091794) rotate(18.000000) translate(-166.945513, -340.091794) "></path>
                        </g>
                    </g>
                    <g style="transform: translate(0px, 23.0679px);">
                        <g id="Group-15" transform="translate(373.000000, 204.000000)" stroke-width="1.35">
                            <path d="M19.8372093,0.173184358 L1.82452431,52.3407821" id="Path-2-Copy-5" stroke="#000000"></path>
                            <ellipse id="Oval-9-Copy-14" stroke="#0D1A26" fill="#FFFFFF" cx="2.27484144" cy="50.9916201" rx="1.35095137" ry="1.34916201"></ellipse>
                        </g>
                        <g id="Group-9" transform="translate(322.000000, 107.000000)">
                            <g style="transform-origin: 50px 40px 0px; transform: rotate(-14.4174deg);">
                                <image id="cc3" alt="globe" xlink:href="https://gw.alipayobjects.com/zos/rmsportal/cCmuVrmQIJYlrhFjiPDZ.png" width="160px" height="66px"></image>
                            </g>
                        </g>
                        <g id="Group-12" transform="translate(271.000000, 2)">
                            <g style="transform-origin: 125px 200px 0px; transform: rotate(14.4174deg);">
                                <image id="cc0" alt="globe" xlink:href="https://gw.alipayobjects.com/zos/rmsportal/TOElddMOrCWlgZvWTJna.png" width="184px" height="293px"></image>
                            </g>
                        </g>
                    </g>
                    <g id="Group-14" transform="translate(150.000000, 230.000000)">
                        <g id="Group-22" transform="translate(62.000000, 7.000000)">
                            <image id="cc4" alt="globe" xlink:href="https://gw.alipayobjects.com/zos/rmsportal/FpKOqFadwoFFIZFExjaf.png" width="151px" height="234px"></image>
                        </g>
                        <mask id="mask-2">
                            <use xlink:href="#mask" fill="white" transform="translate(-42, -33)"></use>
                        </mask>
                        <g mask="url(#mask-2)">
                            <g class="g3" style="transform-origin: 122.7px 58px 0px;">
                                <g transform="translate(-16, -52)">
                                    <g transform="translate(16, 52)">
                                        <path d="M83.1700911,35.9320015 C63.5256194,37.9279025 44.419492,43.1766434 25.8517088,51.6782243 C14.3939956,57.7126276 7.77167019,64.8449292 7.77167019,72.4866248 C7.77167019,94.1920145 61.1993389,111.787709 127.105708,111.787709 C193.012078,111.787709 246.439746,94.1920145 246.439746,72.4866248 C246.439746,55.2822262 212.872939,40.6598106 166.13127,35.3351955" id="line-s" stroke="#0D1A26" stroke-width="1.35" stroke-linecap="round" transform="translate(127.105708, 73.561453) rotate(-16.000000) translate(-127.105708, -73.561453) "></path>
                                    </g>
                                    <g class="g4">
                                        <image alt="globe" id="id2" xlink:href="https://gw.alipayobjects.com/zos/rmsportal/IauKICnGjGnotJBEyCRK.png" x="16" y="62" width="26px" height="26px"></image>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>

        <div ref="div3" class="scrollAnim" :class="{scrollAnimAct: scrollT > div3H }">
            <svg class="s2" width="482px" height="500px" viewBox="0 0 482 500">
                <line x1="200" y1="300" x2="400" y2="300" stroke="black" stroke-dasharray="5,10,15" stroke-dashoffset="100" />
                <g class="g5">
                    <!-- <rect x="0" y="0" width="40" height="40" stroke="black"></rect> -->
                    <g class="g6">
                        <circle class="c1" cx="0" cy="0" r="20" fill="none"></circle>
                    </g>
                </g>
            </svg>
        </div>

        <div ref="div4" class="scrollAnim" :class="{scrollAnimAct: scrollT > div4H }">
            <h1 class="h1">div3div3div3div3div3div3div3div3div3</h1>
            <svg class="s2" width="482px" height="500px" viewBox="0 0 482 500">
                <path class="p1" d="M150,300 L150,200 L200,280 L250,200 L250,300" stroke-dasharray="5,1000" stroke="#000" fill="none" stroke-width="25" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>

        <div class="wrap-3d">
            <div class="wrap1-3d">
                <div class="cnt-3d cnt-3d1">
                    <div></div>
                </div>
                <div class="cnt-3d cnt-3d2">
                    <div></div>
                </div>
                <div class="cnt-3d cnt-3d3">
                    <div></div>
                </div>                
            </div>
        </div>

        <div class="list-wrap">
            <div class="item-list">
                <div class="item" style="transform: translate3d(-1120px,0,0);"></div>
                <div class="item" style="transform: translate3d(-1040px,0,0);"></div>
                <div class="item" style="transform: translate3d(-960px,0,0);"></div>
                <div class="item" style="transform: translate3d(-880px,0,0);"></div>
                <div class="item" style="transform: translate3d(-800px,0,0);"></div>
                <div class="item" style="transform: translate3d(-720px,0,0);"></div>
                <div class="item" style="transform: translate3d(-640px,0,0);"></div>
                <div class="item" style="transform: translate3d(-560px,0,0);"></div>
                <div class="item" style="transform: translate3d(-480px,0,0);"></div>
                <div class="item" style="transform: translate3d(-400px,0,0);"></div>
                <div class="item" style="transform: translate3d(-320px,0,0);"></div>
                <div class="item" style="transform: translate3d(-240px,0,0);"></div>
                <div class="item" style="transform: translate3d(-160px,0,0);"></div>
                <div class="item" style="transform: translate3d(-80px,0,-280px);"><div style="width:100%;height:100%;background:orange"></div></div>
                <div class="item" style="transform: translate3d(0px,0,0);"></div>
                <div class="item" style="transform: translate3d(80px,0,-280px);"><div style="width:100%;height:100%;background:orange"></div></div>
                <div class="item" style="transform: translate3d(160px,0,0);"></div>
                <div class="item" style="transform: translate3d(240px,0,0);"></div>
                <div class="item" style="transform: translate3d(320px,0,0);"></div>
                <div class="item" style="transform: translate3d(400px,0,0);"></div>
                <div class="item" style="transform: translate3d(480px,0,0);"></div>
                <div class="item" style="transform: translate3d(560px,0,0);"></div>
                <div class="item" style="transform: translate3d(640px,0,0);"></div>
                <div class="item" style="transform: translate3d(720px,0,0);"></div>
                <div class="item" style="transform: translate3d(800px,0,0);"></div>
                <div class="item" style="transform: translate3d(880px,0,0);"></div>
                <div class="item" style="transform: translate3d(960px,0,0);"></div>
                <div class="item" style="transform: translate3d(1040px,0,0);"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        var vm = this
        window.onscroll = function() {
            vm.ss()
        }
        vm.ss()
        // document.body.addEventListener('touchmove', function(e){
        //     // alert(e)
        //     // if(e.touches[0].pageY)
        //     console.log(e)
        //     vm.ss()
        // })
    },
    data() {
        return {
            div1H: 0,
            div2H: 0,
            div3H: 0,
            div4H: 0,
            scrollT: 0
        }
    },
    methods: {
        ss: function() {
            // alert(document.body.scrollTop)
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop //scrollTop兼容多浏览器
            this.scrollT = scrollTop + window.innerHeight / 2
            this.div1H = this.$refs.div1.offsetTop
            this.div2H = this.$refs.div2.offsetTop
            this.div3H = this.$refs.div3.offsetTop
            this.div4H = this.$refs.div4.offsetTop
        }
    },
}
</script>
<style scoped>
.g1,.h1{
    -webkit-animation: animate1 2s linear alternate infinite;
    animation: animate1 2s linear alternate infinite;
}
.g2{
    -webkit-animation: animate2 2s linear alternate infinite;
    animation: animate2 2s linear alternate infinite;
}
.g3{
    animation: animate3 4s linear infinite alternate;
}
.g4{
    animation: animate4 4s linear infinite;
}
.g5{
    transform: translate(241px,250px);
    /* animation: loading-rotate 2s linear infinite; */
}
.g6{
    animation: loading-rotate 2s linear infinite;
}
.c1{
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke: #409eff;
    animation:loading-dash 1.5s ease-in-out infinite;
    /* animation: loading-rotate 2s linear infinite; */
}
.scrollAnimAct .p1{
    animation: animate5 4s linear forwards;
}
.scrollAnim{
    opacity: 0;
    transform: translate(0, 50px);
    transition: transform 0.5s linear, opacity 0.5s linear;
}
.scrollAnimAct{
    opacity: 1;
    transform: translate(0, 0);
}

.wrap-3d{
    width: 80%;
    margin: 0 auto;
    height: 500px;
    border: 1px solid gray;
    perspective: 1000px; /*定义 3D 元素距视图的距离*/
}
.wrap1-3d{
    width: 100%;
    height: 100%;
    transform: rotateY(62deg);
    transform-style: preserve-3d; /*确定元素的子元素是否位于3D空间中，还是在该元素所在的平面内被扁平化。*/
}
.cnt-3d{
    width: 100px;
    height: 300px;
    /* margin: 20px auto; */
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -50px;
    /* border: 1px solid gray;
    transform: translateZ(100px); */
    transform-style: preserve-3d;
}
.cnt-3d1{
    /* background: #409eff; */
    transform: rotateY(0deg) translateZ(400px) rotateY(-0deg);
}
.cnt-3d2{
    /* background: #e2c178; */
    transform: rotateY(120deg) translateZ(400px) rotateY(-120deg);
}
.cnt-3d3{
    /* background: #e962ac; */
    transform: rotateY(240deg) translateZ(400px) rotateY(-240deg);
}
.cnt-3d div{
    width: 100%;
    height: 100%;
    transform: rotateY(-62deg);
    /* transform-style: preserve-3d; */
}
.cnt-3d1 div{
    background: #409eff;
}
.cnt-3d2 div{
    background: #e2c178;
}
.cnt-3d3 div{
    background: #e962ac;
}

.list-wrap{
    margin: 0 auto;
    padding: 44px 60px 0;
    width: 1050px;
    perspective: 1200px;
    position: relative;
    overflow: hidden;
    background: antiquewhite;
}
.item-list{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    /* overflow: hidden; */
    transform: translate3d(-3073px, 0px, 0px);
    transform-style: preserve-3d;
}
.item{
    width: 244px;
    height: 410px;
    border-radius: 6px;
    text-align: center;
    position: relative;
    /* background: #14151b; */
    border: 1px solid gray;
    flex-shrink: 0;
    transform-style: preserve-3d;
}
@-webkit-keyframes animate1 {
    from {
        -webkit-transform: translate(0px, 0px);
        transform: translate(0px, 0px);
    }
    to {
        -webkit-transform: translate(0px, 15px);
        transform: translate(0px, 15px);
    }
}
@keyframes animate1 {
    from {
        -webkit-transform: translate(0px, 0px);
        transform: translate(0px, 0px);
    }
    to {
        -webkit-transform: translate(0px, 15px);
        transform: translate(0px, 15px);
    }
}
@-webkit-keyframes animate2 {
    from {
        -webkit-transform: translate(0px, 0px);
        transform: translate(0px, 0px);
    }
    to {
        -webkit-transform: translate(0px, -15px);
        transform: translate(0px, -15px);
    }
}
@keyframes animate2 {
    from {
        -webkit-transform: translate(0px, 0px);
        transform: translate(0px, 0px);
    }
    to {
        -webkit-transform: translate(0px, -15px);
        transform: translate(0px, -15px);
    }
}
@keyframes animate3 {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(15deg);
    }
}
@keyframes animate4 {
    0% {
        transform: translate(100px, 12px);
    }
    6.25% {
        transform: translate(70px, 20px);
    }
    12.5% {
        transform: translate(40px, 35px);
    }
    18.75% {
        transform: translate(10px, 60px);
    }
    25% {
        transform: translate(0px, 83px);
    }
    31.25% {
        transform: translate(50px, 100px);
    }
    37.5% {
        transform: translate(80px, 96px);
    }
    43.75% {
        transform: translate(110px, 90px);
    }
    50% {
        transform: translate(140px, 80px);
    }
    56.25% {
        transform: translate(170px, 70px);
    }
    62.5% {
        transform: translate(200px, 55px);
    }
    68.75% {
        transform: translate(230px, 20px);
    }
    75% {
        transform: translate(200px, 3px);
    }
    81.25% {
        transform: translate(170px, 2px);
    }
    87.5% {
        transform: translate(140px, 2px);
    }
    93.75% {
        transform: translate(110px, 10px);
    }
    100% {
        transform: translate(100px, 12px);
    }
}
@keyframes loading-dash{
    0%{
        stroke-dasharray:1,200;stroke-dashoffset:0
    }
    50%{
        stroke-dasharray:90,150;stroke-dashoffset:-40px
    }
    100%{
        stroke-dasharray:90,150;stroke-dashoffset:-120px
    }
}
@keyframes loading-rotate
{
    100%{
        transform:rotate(360deg);
    }
}
@keyframes animate5{
    0%{
        stroke-dasharray:10,1000;
    }
    8%{
        stroke-dasharray:40,1000;
    }
    16%{
        stroke-dasharray:70,1000;
    }
    24%{
        stroke-dasharray:100,1000;
    }
    32%{
        stroke-dasharray:130,1000;
    }
    40%{
        stroke-dasharray:160,1000;
    }
    48%{
        stroke-dasharray:190,1000;
    }
    56%{
        stroke-dasharray:220,1000;
    }
    64%{
        stroke-dasharray:250,1000;
    }
    72%{
        stroke-dasharray:280,1000;
    }
    80%{
        stroke-dasharray:310,1000;
    }
    88%{
        stroke-dasharray:340,1000;
    }
    96%{
        stroke-dasharray:370,1000;
    }
    100%{
        stroke-dasharray:400,1000;
    }
}
</style>


