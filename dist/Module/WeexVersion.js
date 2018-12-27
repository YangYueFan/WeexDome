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
/******/ 	return __webpack_require__(__webpack_require__.s = 269);
/******/ })
/************************************************************************/
/******/ ({

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(270)
)

/* script */
__vue_exports__ = __webpack_require__(271)

/* template */
var __vue_template__ = __webpack_require__(272)
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
__vue_options__.__file = "/Users/kejibuios/Desktop/Project/Weex_dev/WeexPRO/dist/Vue/WeexVersion.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-40fd1161"
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

/***/ 270:
/***/ (function(module, exports) {

module.exports = {
  "title": {
    "fontSize": "42",
    "textAlign": "center",
    "color": "#888888",
    "marginTop": "50",
    "marginBottom": "20"
  },
  "version": {
    "fontSize": "100",
    "textAlign": "center",
    "marginBottom": "60"
  },
  "group": {
    "marginTop": "22",
    "flexDirection": "row"
  },
  "label": {
    "width": "350",
    "fontSize": "40",
    "textAlign": "right",
    "color": "#888888"
  },
  "value": {
    "width": "350",
    "paddingLeft": "50",
    "fontSize": "40"
  },
  "controls": {
    "marginTop": "80",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "button": {
    "width": "250",
    "color": "#888888",
    "textAlign": "center",
    "fontSize": "50",
    "paddingTop": "16",
    "paddingBottom": "16",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#D0D0D0",
    "backgroundColor": "#F8F8F8"
  }
}

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var clipboard = weex.requireModule('clipboard');
var modal = weex.requireModule('modal');
var invalid = '- invalid -';
var unknown = '- - -';

exports.default = {
  data: function data() {
    return {
      version: invalid,
      jsfmVersion: invalid,
      platform: invalid,
      osVersion: invalid,
      appName: invalid,
      appVersion: invalid,
      deviceModel: invalid,
      deviceWidth: invalid,
      deviceHeight: invalid,
      resolution: invalid
    };
  },
  created: function created() {
    try {
      this.jsfmVersion = getJSFMVersion();
    } catch (e) {
      this.jsfmVersion = '≤ 0.15.6';
    }

    if ((typeof WXEnvironment === 'undefined' ? 'undefined' : _typeof(WXEnvironment)) === 'object') {
      this.version = WXEnvironment.weexVersion || unknown;
      this.platform = WXEnvironment.platform || unknown;
      this.osVersion = WXEnvironment.osVersion || unknown;
      this.appGroup = WXEnvironment.appGroup || unknown;
      this.appName = WXEnvironment.appName || unknown;
      this.appVersion = WXEnvironment.appVersion || unknown;
      this.deviceModel = WXEnvironment.deviceModel || unknown;
      this.deviceWidth = WXEnvironment.deviceWidth || unknown;
      this.deviceHeight = WXEnvironment.deviceHeight || unknown;
      this.resolution = this.deviceWidth + ' x ' + this.deviceHeight;
    }
  },

  methods: {
    copy: function copy() {
      try {
        var info = 'Weex SDK Version: ' + this.version + '\n';
        info += 'JS Framework Version: ' + this.jsfmVersion + '\n';
        info += 'platform: ' + this.platform + '\n';
        info += 'osVersion: ' + this.osVersion + '\n';
        info += 'appGroup: ' + this.appGroup + '\n';
        info += 'appName: ' + this.appName + '\n';
        info += 'appVersion: ' + this.appVersion + '\n';
        info += 'deviceModel: ' + this.deviceModel + '\n';
        info += 'deviceWidth: ' + this.deviceWidth + '\n';
        info += 'deviceHeight: ' + this.deviceHeight;
        clipboard.setString(info);
        modal.toast({ message: 'copied to cilpboard' });
      } catch (e) {
        modal.toast({ message: 'copy failed' });
      }
    }
  }
};

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      justifyContent: "center"
    }
  }, [_c('div', {
    staticClass: ["info"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Weex SDK Version")]), _c('text', {
    staticClass: ["version"]
  }, [_vm._v(_vm._s(_vm.version))]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("JS Framework")]), _c('text', {
    staticClass: ["value"]
  }, [_vm._v(_vm._s(_vm.jsfmVersion))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("platform")]), _c('text', {
    staticClass: ["value"]
  }, [_vm._v(_vm._s(_vm.platform))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("osVersion")]), _c('text', {
    staticClass: ["value"]
  }, [_vm._v(_vm._s(_vm.osVersion))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("appGroup")]), _c('text', {
    staticClass: ["value"]
  }, [_vm._v(_vm._s(_vm.appGroup))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("appName")]), _c('text', {
    staticClass: ["value"]
  }, [_vm._v(_vm._s(_vm.appName))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("appVersion")]), _c('text', {
    staticClass: ["value"]
  }, [_vm._v(_vm._s(_vm.appVersion))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("deviceModel")]), _c('text', {
    staticClass: ["value"]
  }, [_vm._v(_vm._s(_vm.deviceModel))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("resolution")]), _c('text', {
    staticClass: ["value"]
  }, [_vm._v(_vm._s(_vm.resolution))])]), _c('div', {
    staticClass: ["controls"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.copy
    }
  }, [_vm._v("copy")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });