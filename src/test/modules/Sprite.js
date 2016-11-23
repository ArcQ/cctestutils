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
    return common.waitUntil({obj:tSprite,propStr:'texture'},tSprite);
  },
  checkEquals:(sprite, resPath)=>{
    return common.waitUntil(
      {obj:sprite,propStr:"texture"}, sprite).then(
        (sprite) => {
          var isSprite = false;
          if(sprite && _isSprite(sprite) && _isSpriteEquals(sprite,resPath)){
            isSprite = true;
          }
          return Promise.resolve(isSprite);
        }
      ).catch((err)=>{
        reject(err);
      });
  }
};

module.exports = Sprite;
