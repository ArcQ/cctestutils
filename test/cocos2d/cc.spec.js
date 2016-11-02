let ccstart = require('./main.js');
import waitUntil from 'wait-until-promise';
let addCanvas = function(){
  let canvasObject = document.createElement('canvas');
  let width = 800;
  let height = 800;
  let myCanvas = {};  
  canvasObject.width = width;
  canvasObject.height= height;
  canvasObject.setAttribute("id", "gameCanvas");
  document.body.appendChild(canvasObject);
};

beforeAll((done)=> {
  addCanvas();
  ccstart(done);
});

describe('cc library object', () => {
  it('should be the cocos2d library object', () => {
    let sceneObj = {
      onEnter:()=>undefined,
      update:(dt)=>dt
    };

    expect(cc).toBeDefined();
    expect(cc.Scene.extend(sceneObj)).toBeDefined();

  });

  it('should be able to return a sprite', (done) => {
    let tSprite = new cc.Sprite(testRes.test);
    waitUntil(
      ()=>tSprite.texture,
      2000
    ).then(
      (texture) => {
        expect(texture.url).toEqual("base/test/res/test.png");
        done();
      }
    );
  });

});

