const waitUntil = require('../jasmine-wait-until.js');
//to check if an object is initialized, we need to check the bottleneck property of the obj
let _getCheckObj = (checkDict) => checkDict.obj[checkDict.propStr];

let common = {
  //during tests, expects need to make sure to make sure cc objects such as sprites are fully initiated
  waitUntil:(checkDict,resolveObj) => {
    let pFunc = (resolve, reject) => {
      waitUntil(() => _getCheckObj(checkDict),2000).then(
        () => resolve(resolveObj)
      ).catch(
        (err) => 
          (err+'' == 'Error: Timeout limit hit')?resolve(undefined):reject(err)
      );
    };
    return new Promise(pFunc);
  }
};

module.exports = common;
