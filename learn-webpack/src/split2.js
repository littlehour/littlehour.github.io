// import _ from 'lodash';

// window.onload=function(){
//   console.log(
//     _.join(['Another', 'module', 'loaded!'], ' ')
//   );
// }
let join='';
async function component(){
  const _=await import(/*webpackChunkName:'lodash1'*/'lodash');
  join=_.join(['Another','module','loaded!'],' ');
};
component().then(function(){
  console.log(join);
});