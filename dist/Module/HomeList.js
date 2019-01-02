// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var isNative = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object';

var isFn = function isFn(fn) {
	return typeof fn === 'function';
};

var isPhone = function isPhone(str) {
	if (typeof str === 'number') {
		str = str.toString();
	} else if (typeof str !== 'string') {
		return false;
	}

	return (/^\+?[\d\-\#\*\.\(\)]+$/.test(str)
	);
};

var isEmail = function isEmail(str) {
	if (typeof str !== 'string') {
		return false;
	}

	return (/^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/.test(str)
	);
};

module.exports = {
	isNative: isNative,
	isFn: isFn,
	isPhone: isPhone,
	isEmail: isEmail
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(44)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/kejibuios/Desktop/Project/Weex_dev/WeexPRO/dist/Vue/HomeList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-36ad8a7a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "700",
    "height": "700",
    "borderWidth": "3",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "marginTop": "250",
    "marginLeft": "25"
  },
  "row": {
    "height": "100",
    "justifyContent": "center",
    "paddingLeft": "30",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  "text": {
    "fontSize": "45",
    "color": "rgb(255,255,255)",
    "textAlign": "center"
  },
  "list": {
    "marginTop": "64wx",
    "height": "1000"
  },
  "banner": {
    "width": "750",
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25",
    "fontSize": "60",
    "textAlign": "center",
    "fontWeight": "bold",
    "color": "#cc5588",
    "backgroundColor": "rgb(162,217,192)"
  },
  "panel": {
    "width": "750",
    "height": "100",
    "marginTop": "10",
    "marginBottom": "10",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(0,0,0)",
    "backgroundColor": "rgba(70,163,210,0.557)"
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _natjs = __webpack_require__(18);

var _natjs2 = _interopRequireDefault(_natjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//导入navigator模块
var navigator = weex.requireModule("navigator"); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule("modal");
exports.default = {
  data: function data() {
    var rows = ["Scan", "UploadImage", "Location", "WeexUI", "WeexVersion", "WeexDome", "WeexDome2", "WebSocket"];
    var natjs = ["Communication-Call", "Communication-Sms", "pick-图片选取", "preview-图片预览", "Take a photo", "captureVideo"];
    return {
      rows: rows,
      natjs: natjs,
      myBaseURL: "http://10.11.46.112:8081/dist/Module/"
    };
  },

  methods: {
    pushTo: function pushTo(i) {
      console.log("pushTo");
      var url = this.myBaseURL + this.rows[i] + ".js";
      navigator.push({
        url: url,
        animated: "true"
      });
    },
    doNatjs: function doNatjs(i) {
      switch (i) {
        case 0:
          _natjs2.default.call("10010", function () {
            console.log("called-10010");
          });
          break;
        case 1:
          _natjs2.default.sms(["10086", "10010"], "message goes here", function () {
            console.log("sms popup");
          });
          break;
        case 2:
          _natjs2.default.image.pick({
            limit: 3,
            showCamera: false
          }, function (err, ret) {
            console.log(ret.paths);
            _natjs2.default.image.preview(ret.paths, {
              current: 0,
              style: "none"
            });
          });
          break;
        case 3:
          _natjs2.default.image.preview(["http://g.hiphotos.baidu.com/image/pic/item/adaf2edda3cc7cd9ebe507433401213fb90e915b.jpg", "http://e.hiphotos.baidu.com/image/pic/item/a8773912b31bb05114a597be3b7adab44bede0a7.jpg"], {
            current: 0,
            style: "dots"
          });
          break;
        case 4:
          // Take a photo;
          _natjs2.default.camera.captureImage({}, function (err, ret) {
            console.log("Path: ", ret.path);
          });
          break;
        case 5:
          _natjs2.default.camera.captureVideo({}, function (err, ret) {
            console.log(ret.path);
          });
          break;
        default:
          break;
      }
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nat = {};

if (weex && weex.requireModule || typeof __weex_define__ === 'function') {
	var camera = __webpack_require__(19);
	var communication = __webpack_require__(20);
	var geolocation = __webpack_require__(21);
	var media = __webpack_require__(22);
	var modal = __webpack_require__(26);
	var recorder = __webpack_require__(27);
	var network = __webpack_require__(28);
	var sensor = __webpack_require__(31);
	var device = __webpack_require__(34);
	var Navigator = __webpack_require__(41);
	var alipay = __webpack_require__(42);
	var wechat = __webpack_require__(43);

	// camera
	if (camera) {
		Nat.camera = camera;
	}

	// communication
	if (communication) {
		Nat.call = communication.call;
		Nat.sms = communication.sms;
		Nat.mail = communication.mail;
	}

	// geolocation
	if (geolocation) {
		Nat.geolocation = geolocation;
	}

	// media
	if (media) {
		Nat.audio = media.audio;
		Nat.image = media.image;
		Nat.video = media.video;
	}

	// recorder
	if (recorder) {
		Nat.recorder = recorder;
	}

	// modal
	if (modal) {
		Nat.alert = modal.alert;
		Nat.confirm = modal.confirm;
		Nat.prompt = modal.prompt;
		Nat.toast = modal.toast;
		Nat.actionSheet = modal.actionSheet;
	}

	// network
	if (network) {
		Nat.fetch = network.stream.fetch;
		Nat.download = network.transfer.download;
		Nat.upload = network.transfer.upload;
		Nat.websocket = network.websocket;
	}

	// sensor
	if (sensor) {
		Nat.accelerometer = sensor.accelerometer;
		Nat.compass = sensor.compass;
	}

	// device
	if (device) {
		Nat.device = device.info;
		Nat.battery = device.battery;
		Nat.network = device.network;
		Nat.screen = device.screen;
		Nat.vibrate = device.vibration.vibrate;
		Nat.volume = device.volume;
	}

	// navigator
	if (Navigator) {
		Nat.navigator = Navigator;
	}

	// alipay
	if (alipay) {
		Nat.alipay = alipay;
	}

	// wechat
	if (wechat) {
		Nat.wechat = wechat;
	}
}

module.exports = Nat;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camera = void 0;

if (weex && weex.requireModule) {
	camera = weex.requireModule('nat/camera');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		camera = __weex_require__('@weex-module/nat/camera');
	});
}

// launch

var launch = function launch(opts) {
	camera.launch();
};

// captureImage (snap)

var captureImage = function captureImage(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureImage({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// captureVideo (record)

var captureVideo = function captureVideo(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureVideo({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	launch: launch,
	captureImage: captureImage,
	captureVideo: captureVideo
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var communication = void 0;

if (weex && weex.requireModule) {
	communication = weex.requireModule('nat/communication');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		communication = __weex_require__('@weex-module/nat/communication');
	});
}

// call

var call = function call(to, cb) {
	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 101040,
				message: 'CALL_MISSING_ARGUMENT'
			});
			return;
		} else if (!_utils2.default.isPhone(to)) {
			reject({
				code: 101050,
				message: 'CALL_INVALID_ARGUMENT',
				details: 'Invalid phone number: ' + to
			});
			return;
		}

		communication.call(to, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// sms

var sms = function sms(to, text, cb) {
	text = text || '';

	if (typeof text === 'function') {
		cb = text;
		text = '';
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 102040,
				message: 'SMS_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isPhone(to[i])) {
				reject({
					code: 102050,
					message: 'SMS_INVALID_ARGUMENT'
				});
				return;
			}
		}

		communication.sms(to, text, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// mail

var mail = function mail(to, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 103040,
				message: 'MAIL_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isEmail(to[i])) {
				reject({
					code: 103050,
					message: 'MAIL_INVALID_ARGUMENT',
					details: 'Invalid emaill address: ' + to[i]
				});
				return;
			}
		}

		communication.mail(to, {
			subject: opts.subject || '',
			body: opts.body || '',
			attachments: opts.attachments || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	call: call,
	sms: sms,
	mail: mail
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var geolocation = void 0;

if (weex && weex.requireModule) {
	geolocation = weex.requireModule('nat/geolocation');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		geolocation = __weex_require__('@weex-module/nat/geolocation');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.watch({
			maximumAge: opts.maximumAge || 0,
			timeout: opts.timeout || 10000,
			model: opts.model || 'highAccuracy'
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		geolocation.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _audio = __webpack_require__(23);

var _audio2 = _interopRequireDefault(_audio);

var _image = __webpack_require__(24);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(25);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	audio: _audio2.default,
	image: _image2.default,
	video: _video2.default
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var audio = void 0;

if (weex && weex.requireModule) {
	audio = weex.requireModule('nat/media/audio');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		audio = __weex_require__('@weex-module/nat/media/audio');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		audio.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		audio.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		audio.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = void 0;

if (weex && weex.requireModule) {
	image = weex.requireModule('nat/media/image');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		image = __weex_require__('@weex-module/nat/media/image');
	});
}

// pick
var pick = function pick(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	opts.limit = opts.limit || 1;
	opts.quality = opts.quality && opts.quality < 100 ? parseInt(opts.quality) : 100;

	return new Promise(function (resolve, reject) {
		image.pick({
			limit: opts.limit,
			quality: opts.quality,
			width: opts.width || null,
			height: opts.height || null,
			showCamera: opts.showCamera || false
		}, function (ret) {
			if (ret === null) {
				return;
			}

			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// preview

var preview = function preview(files, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!files) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof files === 'string') {
			files = [files];
		}

		// style
		if (['dots', 'label', 'none'].indexOf(opts.style) < 0) {
			opts.style = 'dots';
		}

		if (opts.style === 'dots') {
			if (files.length > 9) {
				opts.style = 'label';
			} else if (files.length === 1) {
				opts.style = 'none';
			}
		}

		image.preview(files, {
			current: opts.current,
			style: opts.style
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// info

var info = function info(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.info(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// exif

var exif = function exif(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.exif(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pick: pick,
	preview: preview,
	info: info,
	exif: exif
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var video = void 0;

if (weex && weex.requireModule) {
	video = weex.requireModule('nat/media/video');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		video = __weex_require__('@weex-module/nat/media/video');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		video.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		video.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		video.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _utils = __webpack_require__(4);

var modal = void 0;

if (weex && weex.requireModule) {
	modal = weex.requireModule('nat/modal');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		modal = __weex_require__('@weex-module/nat/modal');
	});
}
// alert

var Alert = function Alert(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.alert({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK'
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		} else {
			window.alert(opts.message);
			resolve();
		}
	});
};

// confirm

var Confirm = function Confirm(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.confirm({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				if (typeof ret === 'undefined') {
					ret = {
						error: 'unknow error, please report to natjs team'
					};
				}

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var c = window.confirm(opts.message);
			resolve(c);
		}
	});
};

// prompt

var Prompt = function Prompt(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.prompt({
				title: opts.title || '',
				message: opts.message || '',
				text: opts.text || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var p = window.prompt(opts.message || '', opts.text || '');

			resolve({
				result: p && p.length,
				data: p
			});
		}
	});
};

// toast

var Toast = function Toast(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		// position
		if (['top', 'middle', 'bottom'].indexOf(opts.position) < 0) {
			opts.position = 'bottom';
		}

		if (_utils.isNative) {
			modal.toast({
				message: opts.message || '',
				duration: opts.duration || 3000,
				position: opts.position
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		} else {
			window.alert(opts.message);
			resolve();
		}
	});
};

var actionSheet = {
	show: function show(opts, cb) {
		return new Promise(function (resolve, reject) {
			opts = opts || {};

			if (!Array.isArray(opts.options) || !opts.options.length) {
				reject({
					code: 145050,
					message: 'ACTIONSHEET_INVALID_ARGUMENT'
				});
				return;
			}

			var options = opts.options.map(function (item) {
				if (['string', 'number'].includes(typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
					return {
						title: item
					};
				}
				return item;
			});

			if (_utils.isNative) {
				modal.showActionSheet({
					title: opts.title,
					options: options
				}, function (ret) {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				});
			} else {
				resolve();
			}
		});
	}
};

module.exports = {
	alert: Alert,
	confirm: Confirm,
	prompt: Prompt,
	toast: Toast,
	actionSheet: actionSheet
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var recorder = void 0;

if (weex && weex.requireModule) {
	recorder = weex.requireModule('nat/recorder');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		recorder = __weex_require__('@weex-module/nat/recorder');
	});
}

// start
var start = function start(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		// channel
		if (['stereo', 'mono'].indexOf(opts.channel) < 0) {
			opts.channel = 'stereo';
		}

		// quality
		if (['low', 'standard', 'high'].indexOf(opts.quality) < 0) {
			opts.quality = 'standard';
		}

		recorder.start({
			channel: opts.channel,
			quality: opts.quality
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		recorder.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		recorder.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	start: start,
	pause: pause,
	stop: stop
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stream = __webpack_require__(29);

var _stream2 = _interopRequireDefault(_stream);

var _transfer = __webpack_require__(30);

var _transfer2 = _interopRequireDefault(_transfer);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

// import websocket from './websocket'
// import info from './info'

module.exports = {
	stream: _stream2.default,
	transfer: _transfer2.default
	// websocket,
	// info
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _utils = __webpack_require__(4);

var stream = void 0;

if (weex && weex.requireModule) {
	stream = weex.requireModule('nat/stream');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		stream = __weex_require__('@weex-module/nat/stream');
	});
}

// fetch

var Fetch = function Fetch(url, opts, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'FETCH_MISSING_ARGUMENT'
			});
			return;
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			cb = opts;
			opts = url;
		} else if (typeof opts === 'function') {
			cb = opts;
			opts = {
				url: url
			};
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// headers
		opts.headers = opts.headers || {};

		if (opts.headers['Content-Type'] && /application\/json/.test(opts.headers['Content-Type'])) {
			opts.type = 'json';
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'GET';

		if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		// type
		opts.type = opts.type ? opts.type.toLowerCase() : 'json';

		if (['json', 'jsonp', 'text'].indexOf(opts.type) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request type'
			});
			return;
		}

		// body
		if (_typeof(opts.body) === 'object') {
			if (opts.type === 'json' && opts.method !== 'GET') {
				opts.body = JSON.stringify(opts.body);
			} else {
				reject({
					code: 151050,
					message: 'FETCH_INVALID_ARGUMENT',
					details: 'Request body must be a string'
				});
				return;
			}
		}

		opts = {
			method: opts.method,
			url: opts.url,
			headers: opts.headers,
			type: opts.type,
			body: opts.body
		};

		if (_utils.isNative) {
			stream.fetch(opts, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					if (ret.ok && typeof ret.data === 'string') {
						switch (opts.type) {
							case 'json':
								ret.data = JSON.parse(ret.data);
								break;

							case 'jsonp':
								{
									var matched = ret.data.match(/^\s*?.*\((.*)\)\s*?$/);
									if (matched) {
										ret.data = JSON.parse(matched[1]);
									}
									break;
								}
						}
					}
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var _url = opts.url;
			delete opts.url;

			var _res = {};

			window.fetch(_url, opts).then(function (res) {
				_res = res;

				if (res.ok) {
					if (res.status === 204) {
						return null;
					} else {
						if (opts.type === 'json') {
							return res.json();
						} else {
							return res.text();
						}
					}
				} else {
					throw new Error(res.statusText);
				}
			}).then(function (data) {
				if (opts.type === 'jsonp') {
					var matched = data.match(/^\s*?.*\((.*)\)\s*?$/);
					if (matched) {
						data = JSON.parse(matched[1]);
					}
				}

				resolve({
					data: data,
					headers: _res.headers,
					ok: _res.ok,
					redirected: _res.redirected,
					status: _res.status,
					statusText: _res.statusText
				});
			}).catch(function (e) {
				reject(e);
				if (typeof cb === 'function') cb(e, null);
			});
		}
	});
};

module.exports = {
	fetch: Fetch
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var transfer = void 0;

if (weex && weex.requireModule) {
	transfer = weex.requireModule('nat/transfer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		transfer = __weex_require__('@weex-module/nat/transfer');
	});
}

// download

var download = function download(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'DOWNLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		transfer.download({
			url: opts.url,
			headers: opts.headers || {},
			target: opts.target
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// upload

var upload = function upload(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		// path
		if (!opts.path) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'POST';

		if (['POST', 'PUT', 'PATCH'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'UPLOAD_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		transfer.upload({
			url: opts.url,
			method: opts.method,
			path: opts.path,
			name: opts.name,
			headers: opts.headers || {},
			formData: opts.formData || {},
			mimeType: opts.mimeType
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	download: download,
	upload: upload
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _accelerometer = __webpack_require__(32);

var _accelerometer2 = _interopRequireDefault(_accelerometer);

var _compass = __webpack_require__(33);

var _compass2 = _interopRequireDefault(_compass);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	accelerometer: _accelerometer2.default,
	compass: _compass2.default
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var accelerometer = void 0;

if (weex && weex.requireModule) {
	accelerometer = weex.requireModule('nat/sensor/accelerometer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		accelerometer = __weex_require__('@weex-module/nat/sensor/accelerometer');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		accelerometer.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compass = void 0;

if (weex && weex.requireModule) {
	compass = weex.requireModule('nat/sensor/compass');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		compass = __weex_require__('@weex-module/nat/sensor/compass');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		compass.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _info = __webpack_require__(35);

var _info2 = _interopRequireDefault(_info);

var _battery = __webpack_require__(36);

var _battery2 = _interopRequireDefault(_battery);

var _network = __webpack_require__(37);

var _network2 = _interopRequireDefault(_network);

var _screen = __webpack_require__(38);

var _screen2 = _interopRequireDefault(_screen);

var _vibration = __webpack_require__(39);

var _vibration2 = _interopRequireDefault(_vibration);

var _volume = __webpack_require__(40);

var _volume2 = _interopRequireDefault(_volume);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	info: _info2.default,
	battery: _battery2.default,
	network: _network2.default,
	screen: _screen2.default,
	vibration: _vibration2.default,
	volume: _volume2.default
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var device = void 0;

if (weex && weex.requireModule) {
	device = weex.requireModule('nat/device/info');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		device = __weex_require__('@weex-module/nat/device/info');
	});
}

// info

var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		device.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	info: info
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var battery = void 0;

if (weex && weex.requireModule) {
	battery = weex.requireModule('nat/device/battery');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		battery = __weex_require__('@weex-module/nat/device/battery');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		battery.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var network = void 0;

if (weex && weex.requireModule) {
	network = weex.requireModule('nat/device/network');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		network = __weex_require__('@weex-module/nat/device/network');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		network.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var screen = void 0;

if (weex && weex.requireModule) {
	screen = weex.requireModule('nat/device/screen');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		screen = __weex_require__('@weex-module/nat/device/screen');
	});
}

// brightness

var brightness = {
	get: function get(cb) {
		return new Promise(function (resolve, reject) {
			screen.getBrightness(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	set: function set(brightness, cb) {
		return new Promise(function (resolve, reject) {
			screen.setBrightness(brightness, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// orientation

};var orientation = {
	status: function status(cb) {
		return new Promise(function (resolve, reject) {
			screen.getOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	lock: function lock(orientation, cb) {
		if (typeof orientation === 'function') {
			cb = orientation;
			orientation = {};
		}

		// orientation
		if (['portrait-primary', 'portrait-secondary', 'landscape-primary', 'landscape-secondary', 'portrait', // either portrait-primary or portrait-secondary.
		'landscape', // either landscape-primary or landscape-secondary.
		'any' // All orientations are supported (unlocked orientation)
		].indexOf(orientation) < 0) {
			orientation = 'any';
		}

		return new Promise(function (resolve, reject) {
			screen.lockOrientation(orientation, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	unlock: function unlock(cb) {
		return new Promise(function (resolve, reject) {
			screen.unlockOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// info

};var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		screen.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	brightness: brightness,
	orientation: orientation,
	info: info
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vibration = void 0;

if (weex && weex.requireModule) {
	vibration = weex.requireModule('nat/device/vibration');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		vibration = __weex_require__('@weex-module/nat/device/vibration');
	});
}

// vibrate

var vibrate = function vibrate(time, cb) {
	if (typeof time === 'function') {
		cb = time;
		time = {};
	}

	return new Promise(function (resolve, reject) {
		vibration.vibrate(time || 500, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	vibrate: vibrate
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var volume = void 0;

if (weex && weex.requireModule) {
	volume = weex.requireModule('nat/device/volume');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		volume = __weex_require__('@weex-module/nat/device/volume');
	});
}

// get

var get = function get(cb) {
	return new Promise(function (resolve, reject) {
		volume.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// set

var set = function set(vol, cb) {
	return new Promise(function (resolve, reject) {
		volume.set(vol, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	set: set
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navigator = void 0;

if (weex && weex.requireModule) {
	navigator = weex.requireModule('nat/navigator');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		navigator = __weex_require__('@weex-module/nat/navigator');
	});
}

// push

var push = function push(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			url: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.push(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// pop
var pop = function pop(opts, cb) {
	return new Promise(function (resolve, reject) {
		navigator.pop(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// popToRoot
var popToRoot = function popToRoot(opts, cb) {
	opts = opts || {
		animated: true
	};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {
			animated: true
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.popToRoot(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setTitle
var setTitle = function setTitle(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			title: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setTitle(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setColor
var setColor = function setColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			color: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setBackgroundColor
var setBackgroundColor = function setBackgroundColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			backgroundColor: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setBackgroundColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setFontSize
var setFontSize = function setFontSize(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string' || typeof opts === 'number') {
		opts = {
			fontSize: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setFontSize(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// init
var init = function init(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		navigator.init(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// hide
var hide = function hide(cb) {
	return new Promise(function (resolve, reject) {
		navigator.hide(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// show
var show = function show(cb) {
	return new Promise(function (resolve, reject) {
		navigator.show(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	push: push,
	pop: pop,
	popToRoot: popToRoot,
	setTitle: setTitle,
	setColor: setColor,
	setBackgroundColor: setBackgroundColor,
	setFontSize: setFontSize,
	init: init,
	hide: hide,
	show: show
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alipay = void 0;

if (weex && weex.requireModule) {
	alipay = weex.requireModule('nat/alipay');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		alipay = __weex_require__('@weex-module/nat/alipay');
	});
}

// pay

var pay = function pay(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.pay(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				switch (ret.error.code) {
					case '8000':
						ret.error.msg = '正在处理中，支付结果未知';
						break;

					case '4000':
						ret.error.msg = '订单支付失败';
						break;

					case '5000':
						ret.error.msg = '重复请求';
						break;

					case '6001':
						ret.error.msg = '用户中途取消';
						break;

					case '6002':
						ret.error.msg = '网络连接出错';
						break;

					case '6004':
						ret.error.msg = '支付结果未知';
						break;
				}
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// auth

var auth = function auth(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.auth(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pay: pay,
	auth: auth
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SHARE_TYPES = {
	'app': 1,
	'emotion': 2,
	'file': 3,
	'image': 4,
	'music': 5,
	'video': 6,
	'webpage': 7,
	'link': 7,
	'mini-program': 8
};

var SCENE_TYPES = {
	'session': 0,
	'timeline': 1,
	'favorite': 2
};

var __c = void 0;

var wechat = {
	get wechatModule() {
		if (__c) {
			return __c;
		} else if (weex && weex.requireModule) {
			__c = weex.requireModule('nat/wechat');
			return __c;
		}
	},

	// init
	init: function init(appId, cb) {
		var _this = this;

		return new Promise(function (resolve, reject) {
			if (!appId) {
				reject({
					code: 301040,
					message: 'MISSING_ARGUMENT',
					details: 'appId is required'
				});
				return;
			}

			_this.wechatModule.init(appId, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	// checkInstalled
	checkInstalled: function checkInstalled(cb) {
		var _this2 = this;

		return new Promise(function (resolve, reject) {
			_this2.wechatModule.checkInstalled(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	/**
 	share
 		@params
 	- content
 		- title
 		- description (desc)
 		- type
 		- filePath
 		- thumbUrl
 		- dataUrl
 		- link
 	- scene
  */
	share: function share(params, cb) {
		var _this3 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'SHARE_MISSING_ARGUMENT'
				});
				return;
			}

			params = params || {};

			if (typeof params.scene === 'string') {
				params.scene = SCENE_TYPES[params.scene] || 0;
			} else {
				params.scene = params.scene || 0;
			}

			if (typeof params.content === 'string') {
				params.text = params.content;
				delete params.content;
			} else {
				var type = 0;
				params.content = params.content || {};

				if (!params.content.description && params.content.desc) {
					params.content.description = params.content.desc;
				}

				if (typeof params.content.type === 'string') {
					type = SHARE_TYPES[params.content.type];
					params.content.type = type;

					if (!type) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'unsupported share content type'
						});
						return;
					}
				}

				// app & file
				// filePath: local only
				if ([1, 3].includes(type) && !params.content.filePath) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.filePath is required'
					});
					return;
				}
				// emotion & image & music & video
				else if ([2, 4, 5, 6].includes(type) && !params.content.dataUrl) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'content.dataUrl is required'
						});
						return;
					}

				// add link (music & webpage)
				if ([5, 7].includes(type) && !params.content.link) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.link is required'
					});
					return;
				}
			}

			_this3.wechatModule.share(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	// pay
	pay: function pay(params, cb) {
		var _this4 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				});
				return;
			}

			// if (!params.appid) {
			// 	reject({
			// 		code: 301040,
			// 		message: 'PAY_MISSING_ARGUMENT',
			// 		details: '[params.appid] is required'
			// 	})
			// 	return
			// }

			_this4.wechatModule.pay(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	// auth
	auth: function auth(params, cb) {
		var _this5 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				});
				return;
			}

			params = params || {};

			if (!params.info) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT',
					details: '[params.info] is required'
				});
				return;
			}

			_this5.wechatModule.auth(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}
};

module.exports = wechat;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list"]
  }, [_c('list', [_vm._m(0), _vm._l((_vm.rows), function(name, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"],
      on: {
        "click": function($event) {
          _vm.pushTo(index)
        }
      }
    }, [_vm._v(_vm._s(name))])])])
  }), _vm._m(1), _vm._l((_vm.natjs), function(name, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"],
      on: {
        "click": function($event) {
          _vm.doNatjs(index)
        }
      }
    }, [_vm._v(_vm._s(name))])])])
  }), _vm._m(2)], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["banner"]
  }, [_vm._v("HEADER")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["banner"]
  }, [_vm._v("Nat.js")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["banner"]
  }, [_vm._v("End")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);