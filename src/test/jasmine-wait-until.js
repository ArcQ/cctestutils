module.exports = function(escapeFunction, timeoutLimit) {
  let pFunc = (resolve, reject) =>{
    var _runFunction;
    var _checkDelay = 5;
    var _counter = 0;

    var interval = setInterval(function() {
      if (escapeFunction()) {
        clearInterval(interval);
        resolve(escapeFunction());
      }
      _counter += _checkDelay;
      if(_counter > timeoutLimit){
        reject("Timeout time limit hit.");
      }
    }, _checkDelay);
  };
  return new Promise(pFunc);  
};
