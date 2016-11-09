import waitUntil from 'wait-until-promise';
let startup = {
  addCanvas:()=>{
    let canvasObject = document.createElement('canvas');
    let width = 800;
    let height = 800;
    let myCanvas = {};  
    canvasObject.width = width;
    canvasObject.height= height;
    canvasObject.setAttribute("id", "gameCanvas");
    document.body.appendChild(canvasObject);
  }
};
console.log('start');
startup.ccstart = require('./cocos2d/main.js');
module.exports = startup;
