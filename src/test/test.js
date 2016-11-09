import waitUntil from 'wait-until-promise';

let _getCheckObj = (checkDict) => checkDict.obj[checkDict.propStr];

let common = {
  //during tests, expects need to make sure to make sure cc objects such as sprites are fully initiated
  waitUntil:(checkDict,resolveObj) => {
    let pFunc = (resolve, reject) => {
      waitUntil(() => _getCheckObj(checkDict),2000).then(
        () => resolve(resolveObj)
      ).catch(
        (err) => console.log(err)
          //reject(err)
      );
    };
    return new Promise(pFunc);
  },
  waitUntilThenTest:(checkDict,testCB) => {
    let pFunc = (resolve, reject) => {
      common.waitUntil(checkDict,checkDict.obj).then(
        () => resolve(testCB())
      ).catch(
        (err) => reject(err)
      );
    };
    let p = new Promise(pFunc);
    return p;
  }
};

let _isSpriteEquals = function (sprite, resPath){
  //test to see some sprite properties exist
  console.log(sprite);
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
      () => _isSprite(sprite) && _isSpriteEquals(sprite,resPath));
  }
};

let test = {
  common:common,
  Sprite:Sprite
};

module.exports = test;
