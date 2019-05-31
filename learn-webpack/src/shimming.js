/**
 * @author by litterhour
 */
import {g2,g31} from './global.js';
function shimming(){
    // console.log(_.join(['hello','webpack'],' '));
    console.log(join(['hello','webpack'],' '));
    // this.alert('alert');
};
shimming();
// console.log(g1);
console.log(g2());
g31();
g32();
if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/service-worker.js').then(registration=>{
            console.log('SW registered: ',registration);
        }).catch(registrationError=>{
            console.log('SW registration failed: ',registrationError);
        })
    })
}