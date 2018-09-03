import _ from 'lodash';
import './resource/style/style.css'
import img from './resource/img/1.png'
import func from './main.js';
  function component() {
    var element = document.createElement('div');
var btn =document.createElement('button')
  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  btn.innerHTML="点我";
  btn.onclick=()=>{alert('JJ')}
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
element.classList.add('hello')
var Img=new Image();
Img.src=img;
// console.error('you wrong!!!')//解决打包后无法错误跟踪
element.appendChild(Img);
element.appendChild(btn);
console.log(module.hot)
    return element;
  }
func();
  document.body.appendChild(component());