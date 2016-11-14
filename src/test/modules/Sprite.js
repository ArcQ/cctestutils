const common = require('./common.js');

let _isSpriteEquals = function (sprite, resPath){
  //test to see some sprite properties exist
  if(sprite.texture.url === resPath){
    return true;
  }
  return false;
};

let _isSprite = function(sprite){
  //test to see some sprite properties exist
  if(sprite._position && sprite.opacity){
    return true;
  }
  return false;
};

let Sprite = {
  create:(resPath) => {
    let tSprite = new cc.Sprite(resPath);
    return common.waitUntil(tSprite.texture,tSprite,tSprite);
  },
  checkEquals:(sprite, resPath)=>{
    return common.waitUntilThenTest(
      {obj:sprite,propStr:"texture"},
      () => _isSprite(sprite) && _isSpriteEquals(sprite,resPath)).catch(()=>{
        resolve(false);
      });
  }
};

module.exports = Sprite;
