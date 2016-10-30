/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Calculator {
	  add(op1, op2) {
	    return op1 + op2;
	  }

	  sub(op1, op2) {
	    return op1 - op2;
	  }

	  mul(op1, op2) {
	    return op1 * op2;
	  }

	  div(op1, op2) {
	    return op1 / op2;
	  }
	}

	module.exports = Calculator;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var baseConfig = __webpack_require__(3);
	devConfig = baseConfig;
	devConfig.devtool = 'source-map';
	module.exports = devConfig;



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  entry: ["./src/Calculator.js"],
	  output: {
	    filename: "./dist/calculator.js"
	  },
	  module: {
	    loaders: [
	      {
	        test: /\.es6/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['es2015'] 
	        }
	      }
	    ]
	  },
	  resolve: {
	    extensions: ['', '.js']
	  },
	};


/***/ }
/******/ ]);