const cctestutils = require('../../src/cctestutils.js');
const spriteTest = cctestutils.test.Sprite;

beforeAll((done)=> {
  cctestutils.startup.addCanvas();
  cctestutils.startup.ccstart(done);
});

describe('cctestutils.startup', () => {
  it('should fully initiate the cocos2d library object', () => {
    let sceneObj = {
      onEnter:()=>undefined,
      update:(dt)=>dt
    };

    expect(cc).toBeDefined();
    expect(cc.Scene.extend(sceneObj)).toBeDefined();

  });

  it('should be able to return a sprite', (done) => {
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
});

