
var canvasObject = document.createElement('canvas');
        var width = 200;
        var height = 100;
        var myCanvas = {};  
        canvasObject.width = width;
        canvasObject.height= height;
        canvasObject.setAttribute("id", "gameCanvas");
        document.body.appendChild(canvasObject);

cc.game.onStart = function(){
  console.log("onstart being called");
  if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
    document.body.removeChild(document.getElementById("cocosLoading"));
  // Pass true to enable retina display, disabled by default to improve performance
  cc.view.enableRetina(true);
  // Adjust viewport meta
  cc.view.adjustViewPort(true);
  // Setup the resolution policy and design resolution size
  cc.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
  // The game will be resized when browser size change
  cc.view.resizeWithBrowserSize(true);
  //MainCtrl.start();
console.log("cc.game.run is being run");

};
cc.game.run();

describe('cc library object', () => {
  console.log("test is being run");
  beforeEach(function() {
  });
  it('should be the cocos2d library object', () => {
  console.log(cc);
  console.log(cc.Scene);
    var sceneObj = {
      onEnter:()=>undefined,
      update:(dt)=>dt
    };

    expect(cc).toBeDefined();
    expect(cc.Scene.extend(sceneObj)).toBeDefined();

  });

  it('should be able to return a sprite', () => {
    expect(sub).toBe(3);
    var tSprite = new cc.Sprite("");
    console.log(tSprite);
  });

});
