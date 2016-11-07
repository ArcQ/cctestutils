import waitUntil from 'wait-until-promise';

class common_tests{
  constructor(){
  }
  //during tests, expects need to make sure to make sure cc objects such as sprites are fully initiated
  waitUntil(checkObj,returnObj) {
    waitUntil(()=>checkObj,
      2000
    ).then(
      (texture) => resolve(tSprite),
      (err) => reject(err)
    );
  }
}

let Sprite = {
  create:(resPath)=>{
    let pFunc = (resolve, reject) => {
      let tSprite = new cc.Sprite(resPath);
      waitUntil(tSprite.texture,tSprite);
    };
    return new Promise(pFunc(resolve, reject));
  },
  checkEquals:(resPath)=>{
    expect(texture.url).toEqual("base/"+resPath);
  }
};

let test = {
  Sprite:new Sprite(),
  isTypeOf: (ccType,testObj,done) => {
    switch(ccType){
      case "Sprite":
        return isSprite(testObj);
      default:
        console.error(ccType + " is not a ccType that has a defined cctestutils test");
    }
  }
};


let isTypeOf = function(){
};

module.exports = test;
