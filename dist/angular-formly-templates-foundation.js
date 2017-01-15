// angular-formly-templates-foundation version 1.0.0-beta.3 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-formly"), require("api-check"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-formly", "api-check"], factory);
	else if(typeof exports === 'object')
		exports["ngFormlyTemplatesFoundation"] = factory(require("angular"), require("angular-formly"), require("api-check"));
	else
		root["ngFormlyTemplatesFoundation"] = factory(root["angular"], root["ngFormly"], root["apiCheck"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ngModuleName = "formlyFoundation";
	var angular = __webpack_require__(2);
	var ngModule = angular.module(ngModuleName, [__webpack_require__(4)]);
	ngModule.constant("formlyFoundationApiCheck", __webpack_require__(5)({
	  output: {
	    prefix: "angular-formly-foundation"
	  }
	}));
	ngModule.constant("formlyFoundationVersion", ("1.0.0-beta.3"));
	
	__webpack_require__(6)(ngModule);
	__webpack_require__(9)(ngModule);
	__webpack_require__(20)(ngModule);
	
	module.exports = ngModuleName;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	"use strict";
	
	var angular = __webpack_require__(3);
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addWrappers.$inject = ["formlyConfigProvider"];
	  ngModule.config(addWrappers);
	
	  function addWrappers(formlyConfigProvider) {
	    formlyConfigProvider.setWrapper([{
	      name: "templateLabel",
	      template: __webpack_require__(7),
	      apiCheck: function (check) {
	        return {
	          templateOptions: {
	            label: check.string,
	            required: check.bool.optional
	          }
	        };
	      }
	    }, { name: "templateHasError", template: __webpack_require__(8) }]);
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"columns small-12\" ng-class=\"fc.$error ? is-invalid-label : ''\">\r\n  <label for=\"{{id}}\" class=\"\">\r\n    <span class=\"formly-wrapper-label\">{{to.label}}</span>\r\n    <span class=\"formly-wrapper-required\">{{to.required ? '*' : ''}}</span>\r\n    <formly-transclude></formly-transclude>\r\n    <div ng-messages=\"fc.$error\" ng-if=\"options.formControl.$touched\" class=\"my-messages \">\r\n      <div ng-message=\"{{::name}}\" ng-repeat=\"(name, message) in ::options.validation.messages\" class=\"form-error is-visible\"><span style=\"color:red;font-size: 10px\">{{message(fc.$viewValue, fc.$modelValue, this)}}</span></div>\r\n    </div>\r\n  </label>\r\n</div>\r\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"\" ng-class=\"{'has-error': showError}\">\r\n  <formly-transclude></formly-transclude>\r\n</div>\r\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(10)(ngModule);
	  __webpack_require__(12)(ngModule);
	  __webpack_require__(14)(ngModule);
	  __webpack_require__(15)(ngModule);
	  __webpack_require__(17)(ngModule);
	  __webpack_require__(19)(ngModule);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "checkbox",
	      template: __webpack_require__(11),
	      wrapper: ["templateHasError"],
	      apiCheck: function (check) {
	        return {
	          templateOptions: {
	            label: check.string
	          }
	        };
	      }
	    });
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"checkbox\">\r\n\t<label>\r\n\t\t<input type=\"checkbox\"\r\n           class=\"formly-field-checkbox\"\r\n\t\t       ng-model=\"model[options.key]\">\r\n\t\t{{to.label}}\r\n\t\t{{to.required ? '*' : ''}}\r\n\t</label>\r\n</div>\r\n"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "multiCheckbox",
	      template: __webpack_require__(13),
	      wrapper: ["templateLabel", "templateHasError"],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: function (check) {
	        return {
	          templateOptions: {
	            options: check.arrayOf(check.object),
	            labelProp: check.string.optional,
	            valueProp: check.string.optional
	          }
	        };
	      },
	      controller: /* @ngInject */["$scope", function controller($scope) {
	        var to = $scope.to;
	        var opts = $scope.options;
	        $scope.multiCheckbox = {
	          checked: [],
	          change: setModel
	        };
	
	        // initialize the checkboxes check property
	        var modelValue = $scope.model[opts.key];
	        if (angular.isArray(modelValue)) {
	          (function () {
	            var valueProp = to.valueProp || "value";
	            angular.forEach(to.options, function (v, index) {
	              $scope.multiCheckbox.checked[index] = modelValue.indexOf(v[valueProp]) !== -1;
	            });
	          })();
	        }
	
	        function setModel() {
	          $scope.model[opts.key] = [];
	          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
	            if (checkbox) {
	              $scope.model[opts.key].push(to.options[index][to.valueProp || "value"]);
	            }
	          });
	        }
	      }]
	    });
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\r\n  <label>\r\n    <input type=\"checkbox\"\r\n           id=\"{{id + '_'+ $index}}\"\r\n           ng-model=\"multiCheckbox.checked[$index]\"\r\n           ng-change=\"multiCheckbox.change()\">\r\n      {{option[to.labelProp || 'name']}}\r\n  </label>\r\n</div>\r\n"

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addInputType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addInputType);
	
	  function addInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "input",
	      template: "<input ng-model=\"model[options.key]\">",
	      wrapper: ["templateLabel", "templateHasError"],
	      defaultOptions: {
	        templateOptions: { type: "text" }
	      }
	    });
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addRadioType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addRadioType);
	
	  function addRadioType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "radio",
	      template: __webpack_require__(16),
	      wrapper: ["templateLabel", "templateHasError"],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: function (check) {
	        return {
	          templateOptions: {
	            options: check.arrayOf(check.object),
	            labelProp: check.string.optional,
	            valueProp: check.string.optional
	          }
	        };
	      }
	    });
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\r\n  <label>\r\n    <input type=\"radio\"\r\n           id=\"{{id + '_'+ $index}}\"\r\n           tabindex=\"0\"\r\n           ng-value=\"option[to.valueProp || 'value']\"\r\n           ng-model=\"model[options.key]\">\r\n      {{option[to.labelProp || 'name']}}\r\n  </label>\r\n</div>\r\n"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addSelectType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addSelectType);
	
	  function addSelectType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "select",
	      template: __webpack_require__(18),
	      wrapper: ["templateLabel", "templateHasError"],
	      apiCheck: function (check) {
	        return {
	          templateOptions: {
	            options: check.arrayOf(check.object),
	            labelProp: check.string.optional,
	            valueProp: check.string.optional,
	            groupProp: check.string.optional
	          }
	        };
	      }
	    });
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<select\r\n  ng-model=\"model[options.key]\"\r\n  ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options\">\r\n</select>"

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addTextareaType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addTextareaType);
	
	  function addTextareaType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "textarea",
	      template: "<textarea class=\"\" ng-model=\"model[options.key]\"></textarea>",
	      wrapper: ["templateLabel", "templateHasError"],
	      defaultOptions: {
	        ngModelAttrs: {
	          rows: { attribute: "rows" },
	          cols: { attribute: "cols" }
	        }
	      },
	      apiCheck: function (check) {
	        return {
	          templateOptions: {
	            rows: check.number.optional,
	            cols: check.number.optional
	          }
	        };
	      }
	    });
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var addons = _interopRequire(__webpack_require__(21));
	
	var description = _interopRequire(__webpack_require__(23));
	
	module.exports = function (ngModule) {
	  addons(ngModule);
	  description(ngModule);
	};
	
	//export default ngModule => {
	//  require('./addons')(ngModule);
	//  require('./description')(ngModule);
	//};
	//

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addAddonsManipulator.$inject = ["formlyConfig", "formlyFoundationApiCheck"];
	  ngModule.run(addAddonsManipulator);
	
	  function addAddonsManipulator(formlyConfig, formlyFoundationApiCheck) {
	    var addonTemplate = __webpack_require__(22);
	    var addonChecker = formlyFoundationApiCheck.shape({
	      "class": formlyFoundationApiCheck.string.optional,
	      text: formlyFoundationApiCheck.string.optional
	    }).strict.optional;
	    var api = formlyFoundationApiCheck.shape({
	      templateOptions: formlyFoundationApiCheck.shape({
	        addonLeft: addonChecker,
	        addonRight: addonChecker
	      })
	    });
	    formlyConfig.templateManipulators.preWrapper.push(function (template, options) {
	      if (options.type !== "input" || !options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
	        return template;
	      }
	      formlyFoundationApiCheck.warn([api], [options]);
	      return addonTemplate.replace("<formly-transclude></formly-transclude>", template);
	    });
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"{'': to.addonLeft || to.addonRight}\">\r\n    <div class=\"\" ng-if=\"to.addonLeft\">\r\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\r\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\r\n    </div>\r\n    <formly-transclude></formly-transclude>\r\n    <div class=\"\" ng-if=\"to.addonRight\">\r\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\r\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\r\n    </div>\r\n</div>"

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addDescriptionManipulator.$inject = ["formlyConfig"];
	  ngModule.run(addDescriptionManipulator);
	
	  function addDescriptionManipulator(formlyConfig) {
	    formlyConfig.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
	      if (angular.isDefined(options.templateOptions.description) && options.type !== "radio" && options.type !== "checkbox") {
	        var el = document.createElement("div");
	        el.appendChild(angular.element(template)[0]);
	        var modelEls = angular.element(el.querySelectorAll("[ng-model]"));
	        if (modelEls) {
	          el.appendChild(angular.element("<p id=\"" + scope.id + "_description\"" + "class=\"help-block\"" + "ng-if=\"to.description\">" + "{{to.description}}" + "</p>")[0]);
	          modelEls.attr("aria-describedby", scope.id + "_description");
	          return el.innerHTML;
	        } else {
	          return template;
	        }
	      } else {
	        return template;
	      }
	    });
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjODY5Y2Q4NGQ4Nzc4MjNjM2Y2YyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8zMDkwIiwid2VicGFjazovLy8uL2luZGV4LmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanM/ODMyMiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcz9jMzdlIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcz82MTY2Iiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanM/OGM2OSIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcz81NDk2Iiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzPzZiZjciLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzPzUxZWYiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanM/NGIxYSIsIndlYnBhY2s6Ly8vLi90eXBlcy9yYWRpby5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuanM/NTk4ZiIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcz8zNDZkIiwid2VicGFjazovLy8uL3J1bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanM/NjRmZCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy8uL3J1bi9hZGRvbnMuanM/ZWViNCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3J1bi9kZXNjcmlwdGlvbi5qcz9mZGI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QWtDLDJFQUEyRSxvQkFBb0Isb0ZBQW9GLG1CQUFtQiw2SUFBNkkscUJBQXFCLHNGQUFzRixvQkFBb0IsZ0M7Ozs7OztBQ0F2aEI7Ozt3RENBMkI7R0FDekIsU0FBUyxJQUFJOztHQUViLFNBQVMsMEJBQTBCLGNBQWM7S0FDL0MsYUFBYSxxQkFBcUIsV0FBVyxLQUFLLFNBQVMsZ0JBQWdCLFVBQVUsU0FBUyxPQUFPO09BQ25HLElBQUksUUFBUSxVQUFVLFFBQVEsZ0JBQWdCLGdCQUM1QyxRQUFRLFNBQVMsV0FBVyxRQUFRLFNBQVMsWUFBWTtTQUN6RCxJQUFJLEtBQUssU0FBUyxjQUFjO1NBQ2hDLEdBQUcsWUFBWSxRQUFRLFFBQVEsVUFBVTtTQUN6QyxJQUFJLFdBQVcsUUFBUSxRQUFRLEdBQUcsaUJBQWlCO1NBQ25ELElBQUksVUFBVTtXQUNaLEdBQUcsWUFBWSxRQUFRLFFBQ3JCLGFBQVksTUFBTSxLQUFLLG1CQUN2Qix5QkFDQSw4QkFDQSx1QkFDQSxRQUNBO1dBQ0YsU0FBUyxLQUFLLG9CQUFvQixNQUFNLEtBQUs7V0FDN0MsT0FBTyxHQUFHO2dCQUNMO1dBQ0wsT0FBTzs7Y0FFSjtTQUNMLE9BQU8iLCJmaWxlIjoiYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYW5ndWxhclwiLCBcImFuZ3VsYXItZm9ybWx5XCIsIFwiYXBpLWNoZWNrXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nRm9ybWx5VGVtcGxhdGVzRm91bmRhdGlvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcImFuZ3VsYXJcIiksIHJlcXVpcmUoXCJhbmd1bGFyLWZvcm1seVwiKSwgcmVxdWlyZShcImFwaS1jaGVja1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmdGb3JtbHlUZW1wbGF0ZXNGb3VuZGF0aW9uXCJdID0gZmFjdG9yeShyb290W1wiYW5ndWxhclwiXSwgcm9vdFtcIm5nRm9ybWx5XCJdLCByb290W1wiYXBpQ2hlY2tcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjODY5Y2Q4NGQ4Nzc4MjNjM2Y2YyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2luZGV4LmNvbW1vblwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbmRleC5jb21tb24nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBuZ01vZHVsZU5hbWUgPSBcImZvcm1seUZvdW5kYXRpb25cIjtcbnZhciBhbmd1bGFyID0gcmVxdWlyZShcIi4vYW5ndWxhci1maXhcIik7XG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuZ01vZHVsZU5hbWUsIFtyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIildKTtcbm5nTW9kdWxlLmNvbnN0YW50KFwiZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrXCIsIHJlcXVpcmUoXCJhcGktY2hlY2tcIikoe1xuICBvdXRwdXQ6IHtcbiAgICBwcmVmaXg6IFwiYW5ndWxhci1mb3JtbHktZm91bmRhdGlvblwiXG4gIH1cbn0pKTtcbm5nTW9kdWxlLmNvbnN0YW50KFwiZm9ybWx5Rm91bmRhdGlvblZlcnNpb25cIiwgVkVSU0lPTik7XG5cbnJlcXVpcmUoXCIuL3dyYXBwZXJzXCIpKG5nTW9kdWxlKTtcbnJlcXVpcmUoXCIuL3R5cGVzXCIpKG5nTW9kdWxlKTtcbnJlcXVpcmUoXCIuL3J1blwiKShuZ01vZHVsZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmdNb2R1bGVOYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmNvbW1vbi5qcyIsImNvbnN0IG5nTW9kdWxlTmFtZSA9ICdmb3JtbHlGb3VuZGF0aW9uJztcclxuY29uc3QgYW5ndWxhciA9IHJlcXVpcmUoJy4vYW5ndWxhci1maXgnKTtcclxuY29uc3QgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuZ01vZHVsZU5hbWUsIFtyZXF1aXJlKCdhbmd1bGFyLWZvcm1seScpXSk7XHJcbm5nTW9kdWxlLmNvbnN0YW50KFxyXG4gICdmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2snLFxyXG4gIHJlcXVpcmUoJ2FwaS1jaGVjaycpKHtcclxuICAgIG91dHB1dDoge1xyXG4gICAgICBwcmVmaXg6ICdhbmd1bGFyLWZvcm1seS1mb3VuZGF0aW9uJ1xyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcbm5nTW9kdWxlLmNvbnN0YW50KCdmb3JtbHlGb3VuZGF0aW9uVmVyc2lvbicsIFZFUlNJT04pO1xyXG5cclxucmVxdWlyZSgnLi93cmFwcGVycycpKG5nTW9kdWxlKTtcclxucmVxdWlyZSgnLi90eXBlcycpKG5nTW9kdWxlKTtcclxucmVxdWlyZSgnLi9ydW4nKShuZ01vZHVsZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZU5hbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5jb21tb24uanMiLCIvLyBzb21lIHZlcnNpb25zIG9mIGFuZ3VsYXIgZG9uJ3QgZXhwb3J0IHRoZSBhbmd1bGFyIG1vZHVsZSBwcm9wZXJseSxcbi8vIHNvIHdlIGdldCBpdCBmcm9tIHdpbmRvdyBpbiB0aGlzIGNhc2UuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhclwiKTtcbmlmICghYW5ndWxhci52ZXJzaW9uKSB7XG4gIGFuZ3VsYXIgPSB3aW5kb3cuYW5ndWxhcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxyXG4vLyBzbyB3ZSBnZXQgaXQgZnJvbSB3aW5kb3cgaW4gdGhpcyBjYXNlLlxyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuaWYgKCFhbmd1bGFyLnZlcnNpb24pIHtcclxuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vYW5ndWxhci1maXgvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImFwaUNoZWNrXCIsXCJhbWRcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanMyXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzXCI6XCJhcGktY2hlY2tcIn1cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRXcmFwcGVycyk7XG5cbiAgZnVuY3Rpb24gYWRkV3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRXcmFwcGVyKFt7XG4gICAgICBuYW1lOiBcInRlbXBsYXRlTGFiZWxcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9sYWJlbC5odG1sXCIpLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHsgbmFtZTogXCJ0ZW1wbGF0ZUhhc0Vycm9yXCIsIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9oYXMtZXJyb3IuaHRtbFwiKSB9XSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3JhcHBlcnMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFdyYXBwZXJzKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkV3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RlbXBsYXRlTGFiZWwnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xhYmVsLmh0bWwnKSxcclxuICAgICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbC5vcHRpb25hbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHtuYW1lOiAndGVtcGxhdGVIYXNFcnJvcicsIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hhcy1lcnJvci5odG1sJyl9XHJcbiAgICBdKTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi93cmFwcGVycy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIHNtYWxsLTEyXFxcIiBuZy1jbGFzcz1cXFwiZmMuJGVycm9yID8gaXMtaW52YWxpZC1sYWJlbCA6ICcnXFxcIj5cXHJcXG4gIDxsYWJlbCBmb3I9XFxcInt7aWR9fVxcXCIgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtbHktd3JhcHBlci1sYWJlbFxcXCI+e3t0by5sYWJlbH19PC9zcGFuPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybWx5LXdyYXBwZXItcmVxdWlyZWRcXFwiPnt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319PC9zcGFuPlxcclxcbiAgICA8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG4gICAgPGRpdiBuZy1tZXNzYWdlcz1cXFwiZmMuJGVycm9yXFxcIiBuZy1pZj1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kdG91Y2hlZFxcXCIgY2xhc3M9XFxcIm15LW1lc3NhZ2VzIFxcXCI+XFxyXFxuICAgICAgPGRpdiBuZy1tZXNzYWdlPVxcXCJ7ezo6bmFtZX19XFxcIiBuZy1yZXBlYXQ9XFxcIihuYW1lLCBtZXNzYWdlKSBpbiA6Om9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1xcXCIgY2xhc3M9XFxcImZvcm0tZXJyb3IgaXMtdmlzaWJsZVxcXCI+PHNwYW4gc3R5bGU9XFxcImNvbG9yOnJlZDtmb250LXNpemU6IDEwcHhcXFwiPnt7bWVzc2FnZShmYy4kdmlld1ZhbHVlLCBmYy4kbW9kZWxWYWx1ZSwgdGhpcyl9fTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cmFwcGVycy9sYWJlbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IHNob3dFcnJvcn1cXFwiPlxcclxcbiAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dyYXBwZXJzL2hhcy1lcnJvci5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICByZXF1aXJlKFwiLi9jaGVja2JveFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL211bHRpQ2hlY2tib3hcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9pbnB1dFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL3JhZGlvXCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vc2VsZWN0XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vdGV4dGFyZWFcIikobmdNb2R1bGUpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICByZXF1aXJlKCcuL2NoZWNrYm94JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vbXVsdGlDaGVja2JveCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL2lucHV0JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vcmFkaW8nKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9zZWxlY3QnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi90ZXh0YXJlYScpKG5nTW9kdWxlKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJjaGVja2JveFwiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NoZWNrYm94Lmh0bWxcIiksXG4gICAgICB3cmFwcGVyOiBbXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9jaGVja2JveC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ2NoZWNrYm94JyxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2hlY2tib3guaHRtbCcpLFxyXG4gICAgICB3cmFwcGVyOiBbJ3RlbXBsYXRlSGFzRXJyb3InXSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvY2hlY2tib3guanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcblxcdDxsYWJlbD5cXHJcXG5cXHRcXHQ8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICBjbGFzcz1cXFwiZm9ybWx5LWZpZWxkLWNoZWNrYm94XFxcIlxcclxcblxcdFxcdCAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIj5cXHJcXG5cXHRcXHR7e3RvLmxhYmVsfX1cXHJcXG5cXHRcXHR7e3RvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcclxcblxcdDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL2NoZWNrYm94Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwibXVsdGlDaGVja2JveFwiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL211bHRpQ2hlY2tib3guaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXG4gICAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXI6IC8qIEBuZ0luamVjdCAqL2Z1bmN0aW9uIGNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgICAgIHZhciB0byA9ICRzY29wZS50bztcbiAgICAgICAgdmFyIG9wdHMgPSAkc2NvcGUub3B0aW9ucztcbiAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3ggPSB7XG4gICAgICAgICAgY2hlY2tlZDogW10sXG4gICAgICAgICAgY2hhbmdlOiBzZXRNb2RlbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNoZWNrYm94ZXMgY2hlY2sgcHJvcGVydHlcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSB0by52YWx1ZVByb3AgfHwgXCJ2YWx1ZVwiO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uICh2LCBpbmRleCkge1xuICAgICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkW2luZGV4XSA9IG1vZGVsVmFsdWUuaW5kZXhPZih2W3ZhbHVlUHJvcF0pICE9PSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRNb2RlbCgpIHtcbiAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldID0gW107XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWQsIGZ1bmN0aW9uIChjaGVja2JveCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldLnB1c2godG8ub3B0aW9uc1tpbmRleF1bdG8udmFsdWVQcm9wIHx8IFwidmFsdWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ211bHRpQ2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tdWx0aUNoZWNrYm94Lmh0bWwnKSxcclxuICAgICAgd3JhcHBlcjogWyd0ZW1wbGF0ZUxhYmVsJywgJ3RlbXBsYXRlSGFzRXJyb3InXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICBub0Zvcm1Db250cm9sOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2YoY2hlY2sub2JqZWN0KSxcclxuICAgICAgICAgIGxhYmVsUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgICAgdmFsdWVQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi8gZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgY29uc3QgdG8gPSAkc2NvcGUudG87XHJcbiAgICAgICAgY29uc3Qgb3B0cyA9ICRzY29wZS5vcHRpb25zO1xyXG4gICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94ID0ge1xyXG4gICAgICAgICAgY2hlY2tlZDogW10sXHJcbiAgICAgICAgICBjaGFuZ2U6IHNldE1vZGVsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY2hlY2tib3hlcyBjaGVjayBwcm9wZXJ0eVxyXG4gICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xyXG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IHRvLnZhbHVlUHJvcCB8fCAndmFsdWUnO1xyXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uKHYsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWRbaW5kZXhdID0gbW9kZWxWYWx1ZS5pbmRleE9mKHZbdmFsdWVQcm9wXSkgIT09IC0xO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRNb2RlbCgpIHtcclxuICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0gPSBbXTtcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkLCAoY2hlY2tib3gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0ucHVzaCh0by5vcHRpb25zW2luZGV4XVt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gIDxsYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcIm11bHRpQ2hlY2tib3guY2hlY2tlZFskaW5kZXhdXFxcIlxcclxcbiAgICAgICAgICAgbmctY2hhbmdlPVxcXCJtdWx0aUNoZWNrYm94LmNoYW5nZSgpXFxcIj5cXHJcXG4gICAgICB7e29wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXX19XFxyXFxuICA8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90eXBlcy9tdWx0aUNoZWNrYm94Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkSW5wdXRUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRJbnB1dFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwiaW5wdXRcIixcbiAgICAgIHRlbXBsYXRlOiBcIjxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIj5cIixcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IHR5cGU6IFwidGV4dFwiIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9pbnB1dC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkSW5wdXRUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkSW5wdXRUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ2lucHV0JyxcclxuICAgICAgdGVtcGxhdGU6ICc8aW5wdXQgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIj4nLFxyXG4gICAgICB3cmFwcGVyOiBbJ3RlbXBsYXRlTGFiZWwnLCAndGVtcGxhdGVIYXNFcnJvcicgXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgdHlwZTogJ3RleHQnIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvaW5wdXQuanMiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFJhZGlvVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmFkaW8uaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXG4gICAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3JhZGlvLmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRSYWRpb1R5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRSYWRpb1R5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAncmFkaW8nLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yYWRpby5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXHJcbiAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvcmFkaW8uanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcInJhZGlvXFxcIj5cXHJcXG4gIDxsYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIlxcclxcbiAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgICBuZy12YWx1ZT1cXFwib3B0aW9uW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXVxcXCJcXHJcXG4gICAgICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL3JhZGlvLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJzZWxlY3RcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9zZWxlY3QuaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3NlbGVjdC5qcyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFNlbGVjdFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRTZWxlY3RUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3NlbGVjdCcsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NlbGVjdC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGFwaUNoZWNrOiBjaGVjayA9PiAoe1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxyXG4gICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXHJcbiAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvc2VsZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWxlY3RcXHJcXG4gIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICBuZy1vcHRpb25zPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddIGFzIG9wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXSBncm91cCBieSBvcHRpb25bdG8uZ3JvdXBQcm9wIHx8ICdncm91cCddIGZvciBvcHRpb24gaW4gdG8ub3B0aW9uc1xcXCI+XFxyXFxuPC9zZWxlY3Q+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL3NlbGVjdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkVGV4dGFyZWFUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInRleHRhcmVhXCIsXG4gICAgICB0ZW1wbGF0ZTogXCI8dGV4dGFyZWEgY2xhc3M9XFxcIlxcXCIgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCI+PC90ZXh0YXJlYT5cIixcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XG4gICAgICAgICAgcm93czogeyBhdHRyaWJ1dGU6IFwicm93c1wiIH0sXG4gICAgICAgICAgY29sczogeyBhdHRyaWJ1dGU6IFwiY29sc1wiIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlci5vcHRpb25hbCxcbiAgICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlci5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy90ZXh0YXJlYS5qcyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRleHRhcmVhVHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXHJcbiAgICAgIHRlbXBsYXRlOiAnPHRleHRhcmVhIGNsYXNzPVwiXCIgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIj48L3RleHRhcmVhPicsXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XHJcbiAgICAgICAgICByb3dzOiB7YXR0cmlidXRlOiAncm93cyd9LFxyXG4gICAgICAgICAgY29sczoge2F0dHJpYnV0ZTogJ2NvbHMnfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIub3B0aW9uYWwsXHJcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXIub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy90ZXh0YXJlYS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iajsgfTtcblxudmFyIGFkZG9ucyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9hZGRvbnNcIikpO1xuXG52YXIgZGVzY3JpcHRpb24gPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vZGVzY3JpcHRpb25cIikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBhZGRvbnMobmdNb2R1bGUpO1xuICBkZXNjcmlwdGlvbihuZ01vZHVsZSk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcbi8vICByZXF1aXJlKCcuL2Rlc2NyaXB0aW9uJykobmdNb2R1bGUpO1xuLy99O1xuLy9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ydW4vaW5kZXguanMiLCJpbXBvcnQgYWRkb25zIGZyb20gJy4vYWRkb25zJztcclxuaW1wb3J0IGRlc2NyaXB0aW9uIGZyb20gJy4vZGVzY3JpcHRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIGFkZG9ucyhuZ01vZHVsZSk7XHJcbiAgZGVzY3JpcHRpb24obmdNb2R1bGUpO1xyXG59O1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcclxuLy8gIHJlcXVpcmUoJy4vZGVzY3JpcHRpb24nKShuZ01vZHVsZSk7XHJcbi8vfTtcclxuLy9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3J1bi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xuXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9hZGRvbnMuaHRtbFwiKTtcbiAgICB2YXIgYWRkb25DaGVja2VyID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIFwiY2xhc3NcIjogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgIHRleHQ6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zdHJpbmcub3B0aW9uYWxcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XG4gICAgdmFyIGFwaSA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxuICAgICAgICBhZGRvblJpZ2h0OiBhZGRvbkNoZWNrZXJcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIucHVzaChmdW5jdGlvbiAodGVtcGxhdGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09IFwiaW5wdXRcIiB8fCAhb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuYWRkb25MZWZ0ICYmICFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvblJpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xuICAgICAgcmV0dXJuIGFkZG9uVGVtcGxhdGUucmVwbGFjZShcIjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlwiLCB0ZW1wbGF0ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcnVuL2FkZG9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRBZGRvbnNNYW5pcHVsYXRvcihmb3JtbHlDb25maWcsIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaykge1xyXG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKCcuL2FkZG9ucy5odG1sJyk7XHJcbiAgICBjb25zdCBhZGRvbkNoZWNrZXIgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICBjbGFzczogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgdGV4dDogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbFxyXG4gICAgfSkuc3RyaWN0Lm9wdGlvbmFsO1xyXG4gICAgY29uc3QgYXBpID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxyXG4gICAgICAgIGFkZG9uUmlnaHQ6IGFkZG9uQ2hlY2tlclxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uKHRlbXBsYXRlLCBvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09ICdpbnB1dCcgfHwgKCFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvbkxlZnQgJiYgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uUmlnaHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xyXG4gICAgICByZXR1cm4gYWRkb25UZW1wbGF0ZS5yZXBsYWNlKCc8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT4nLCB0ZW1wbGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vYWRkb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcInsnJzogdG8uYWRkb25MZWZ0IHx8IHRvLmFkZG9uUmlnaHR9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uTGVmdC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LmNsYXNzXFxcIj48L2k+XFxyXFxuICAgICAgICA8c3BhbiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LnRleHRcXFwiPnt7dG8uYWRkb25MZWZ0LnRleHR9fTwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uUmlnaHQuY2xhc3N9fVxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHQuY2xhc3NcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0LnRleHRcXFwiPnt7dG8uYWRkb25SaWdodC50ZXh0fX08L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ydW4vYWRkb25zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbikgJiYgb3B0aW9ucy50eXBlICE9PSBcInJhZGlvXCIgJiYgb3B0aW9ucy50eXBlICE9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlKVswXSk7XG4gICAgICAgIHZhciBtb2RlbEVscyA9IGFuZ3VsYXIuZWxlbWVudChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLW1vZGVsXVwiKSk7XG4gICAgICAgIGlmIChtb2RlbEVscykge1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcIjxwIGlkPVxcXCJcIiArIHNjb3BlLmlkICsgXCJfZGVzY3JpcHRpb25cXFwiXCIgKyBcImNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIlwiICsgXCJuZy1pZj1cXFwidG8uZGVzY3JpcHRpb25cXFwiPlwiICsgXCJ7e3RvLmRlc2NyaXB0aW9ufX1cIiArIFwiPC9wPlwiKVswXSk7XG4gICAgICAgICAgbW9kZWxFbHMuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiwgc2NvcGUuaWQgKyBcIl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3J1bi9kZXNjcmlwdGlvbi5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uTWFuaXB1bGF0b3IoZm9ybWx5Q29uZmlnKSB7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcclxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uKSAmJlxyXG4gICAgICAgIG9wdGlvbnMudHlwZSAhPT0gJ3JhZGlvJyAmJiBvcHRpb25zLnR5cGUgIT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpWzBdKTtcclxuICAgICAgICB2YXIgbW9kZWxFbHMgPSBhbmd1bGFyLmVsZW1lbnQoZWwucXVlcnlTZWxlY3RvckFsbCgnW25nLW1vZGVsXScpKTtcclxuICAgICAgICBpZiAobW9kZWxFbHMpIHtcclxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcclxuICAgICAgICAgICAgJzxwIGlkPVwiJyArIHNjb3BlLmlkICsgJ19kZXNjcmlwdGlvblwiJyArXHJcbiAgICAgICAgICAgICdjbGFzcz1cImhlbHAtYmxvY2tcIicgK1xyXG4gICAgICAgICAgICAnbmctaWY9XCJ0by5kZXNjcmlwdGlvblwiPicgK1xyXG4gICAgICAgICAgICAne3t0by5kZXNjcmlwdGlvbn19JyArXHJcbiAgICAgICAgICAgICc8L3A+J1xyXG4gICAgICAgICAgKVswXSk7XHJcbiAgICAgICAgICBtb2RlbEVscy5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5Jywgc2NvcGUuaWQgKyAnX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL2Rlc2NyaXB0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==