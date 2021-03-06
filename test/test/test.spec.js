const cctestutils = require('../../src/cctestutils.js');
const commonTest = cctestutils.test.common;
const spriteTest = cctestutils.test.Sprite;
const textureTest = cctestutils.test.texture;

beforeAll((done)=> {
  cctestutils.startup.addCanvas();
  cctestutils.startup.ccstart(done);
});

describe('utils.test', () => {

  describe('Common tests', ()=>{

    it('should be able to use waitUntil to poll for' + 
      'when an object gets fully initated',(done)=>{
        let asyncObj = {};
        setTimeout(()=>asyncObj.asyncProp = "set",500);
        commonTest.waitUntil({obj:asyncObj, propStr:'asyncProp'}, asyncObj).then((resolveObj)=>{
          expect(resolveObj.asyncProp).toBe("set");
          done();
        });
      });

    it('waitUntil should timeout after 2000 milliseconds',(done)=>{
      let asyncObj = {};
      let test = () =>{
        expect(asyncObj.asyncProp).toBe("set");
      };

      setTimeout(()=>asyncObj.asyncProp = "set",5000);
      commonTest.waitUntil({obj:asyncObj,propStr:'asyncProp'}, asyncObj).then(
        (resolveObj)=>{
          expect(asyncObj.asyncProp).toBeUndefined();
          done();
        }).catch((err)=>{
          console.log(err);
          expect(err).toBe(new Error('Timeout limit hit'));
          done();
        });
    });
  });
  describe('Sprite tests', ()=>{
    it('should be able to test a sprite', (done) => {
      let tSprite = new cc.Sprite(testRes.test);

      spriteTest.checkEquals(tSprite,testRes.test).then((isSprite)=>{
        expect(isSprite).toBe(true);
        done();
      }).catch(
        (err)=>{
          expect(err).toBeNull();
          done();
        });
    });

    it('should be able to test if a sprite is not one', (done) => {
      let emptyClass = function(){
      };
      let notSprite = new emptyClass();

      spriteTest.checkEquals(notSprite,testRes.test).then((isSprite)=>{
        expect(isSprite).toBe(false);
        done();
      }).catch((err)=>{
        expect(err).toContain(new Error('Timeout limit hit'));
        done();
      });
    });

    it('should be able to fully initiate a sprite', (done) => {
      spriteTest.create(testRes.test).then(function(sprite){
        return spriteTest.checkEquals(sprite,testRes.test);
      }).then((isSprite)=>{
        expect(isSprite).toBe(true);
        done();
      }).catch((err)=>{
        expect(err).toContain(new Error('Timeout limit hit'));
        done();
      });
    });

  });

  describe('Texture tests', ()=>{

    it('should be able to test a texture', (done) => {
      let tTexture  = cc.textureCache.addImage(testRes.test);

      textureTest.checkEquals(tTexture, testRes.test).then((isTexture)=>{
        expect(isTexture).toBe(true);
        done();
      }).catch(
        (err)=>{
          expect(err).toBeNull();
          done();
        });
    });

    it('should be able to test if a texture is not one', (done) => {
      let emptyClass = function(){
      };
      let notTexture = new emptyClass();

      textureTest.checkEquals(notTexture ,testRes.test).then((isTexture)=>{
        expect(isTexture).toBe(false);
        done();
      }).catch(
        (err)=>{
          expect(err).toContain(new Error('Timeout limit hit'));
          done();
        });
    });

    it('should be able to fully initialize a texture', (done) => {
      let tTexture = new cc.Sprite(testRes.test);

      textureTest.create(testRes.test).then(function(texture){
        return textureTest.checkEquals(texture,testRes.test);
      }).then((isTexture)=>{
        expect(isTexture).toBe(true);
        done();
      }).catch((err)=>{
        expect(err).toContain(new Error('Timeout limit hit'));
        done();
      });

    });

  });
});

