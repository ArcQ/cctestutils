
let _isTextureEquals = function (texture, resPath){
  //test to see some texture properties exist
  if(texture.texture.url === resPath){
    return true;
  }
  return false;
};

let _isTexture = function(texture){
  //test to see some texture properties exist
  if(texture._position && texture.opacity){
    return true;
  }
  return false;
};

let texture = {
  create:(resPath) => {
    let tTexture = cc.textureCache.addImage(resPath);
    return common.waitUntil({obj:tTexture, propStr:'texture'}, tTexture);
  },
  checkEquals:(texture, resPath)=>{
    return common.waitUntilThenTest(
      {obj:texture,propStr:"_textureLoaded"},
      () => _isTexture(texture) && _isTextureEquals(texture,resPath));
  }
};

module.exports = texture;
