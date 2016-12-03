const common = require('./common.js');

let _isTextureEquals = function (texture, resPath){
  //test to see some texture properties exist
  if(texture.url === resPath){
    console.log('equals');
    return true;
  }
  return false;
};

let _isTexture = function(texture){
  //test to see some texture properties exist
  if(texture._htmlElementObj && texture.height){
    console.log('_isTexture');
    return true;
  }
  return false;
};

let texture = {
  create:(resPath) => {
    let tTexture = cc.textureCache.addImage(resPath);
    return common.waitUntil({obj:tTexture, propStr:'_textureLoaded'}, tTexture);
  },
  checkEquals:(texture, resPath)=>{
    return common.waitUntil(
      {obj:texture,propStr:'_textureLoaded'}, texture).then(
        (texture) => {
          var isTexture = false;
          if(texture && _isTexture(texture) && _isTextureEquals(texture,resPath)){
            isTexture = true;
          }
          return Promise.resolve(isTexture);
        }
      ).catch((err)=>{
        return Promise.reject(err);
      });
  }
};

module.exports = texture;
