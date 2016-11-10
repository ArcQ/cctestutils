const startup = {
  addCanvas:()=>{
    let canvasObject = document.createElement('canvas');
    const width = 800;
    const height = 800;
    let myCanvas = {};  
    canvasObject.width = width;
    canvasObject.height= height;
    canvasObject.setAttribute("id", "gameCanvas");
    document.body.appendChild(canvasObject);
  }
};
startup.ccstart = require('./main.js');
module.exports = startup;
