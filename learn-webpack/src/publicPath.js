import './ibeacon.png';
import './test.css';
// console.log(process.env.ASSET_PATH);

(function(){
    function test(){
        var div=document.createElement('div');
        div.classList.add('hello');
        div.classList.add('div');
        div.innerHTML="hello webpack!"
        document.body.appendChild(div);
    };
    test();
})();