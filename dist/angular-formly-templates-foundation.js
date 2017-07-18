// angular-formly-templates-foundation version 1.0.4 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-formly"), require("api-check"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-formly", "api-check"], factory);
	else if(typeof exports === 'object')
		exports["ngFormlyTemplatesFoundation"] = factory(require("angular"), require("angular-formly"), require("api-check"));
	else
		root["ngFormlyTemplatesFoundation"] = factory(root["angular"], root["ngFormly"], root["apiCheck"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var ngModuleName = "formlyFoundation";
	var angular = __webpack_require__(2);
	var ngModule = angular.module(ngModuleName, [__webpack_require__(4), __webpack_require__(5)]);
	ngModule.constant("formlyFoundationApiCheck", __webpack_require__(7)({
	  output: {
	    prefix: "angular-formly-foundation"
	  }
	}));
	ngModule.constant("formlyFoundationVersion", ("1.0.4"));
	
	__webpack_require__(8)(ngModule);
	__webpack_require__(11)(ngModule);
	__webpack_require__(22)(ngModule);
	// require('css!./style.css');
	
	module.exports = ngModuleName;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	"use strict";
	
	var angular = __webpack_require__(3);
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = 'ngMessages';


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * @license AngularJS v1.5.11
	 * (c) 2010-2017 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';
	
	var forEach;
	var isArray;
	var isString;
	var jqLite;
	
	/**
	 * @ngdoc module
	 * @name ngMessages
	 * @description
	 *
	 * The `ngMessages` module provides enhanced support for displaying messages within templates
	 * (typically within forms or when rendering message objects that return key/value data).
	 * Instead of relying on JavaScript code and/or complex ng-if statements within your form template to
	 * show and hide error messages specific to the state of an input field, the `ngMessages` and
	 * `ngMessage` directives are designed to handle the complexity, inheritance and priority
	 * sequencing based on the order of how the messages are defined in the template.
	 *
	 * Currently, the ngMessages module only contains the code for the `ngMessages`, `ngMessagesInclude`
	 * `ngMessage` and `ngMessageExp` directives.
	 *
	 * # Usage
	 * The `ngMessages` directive allows keys in a key/value collection to be associated with a child element
	 * (or 'message') that will show or hide based on the truthiness of that key's value in the collection. A common use
	 * case for `ngMessages` is to display error messages for inputs using the `$error` object exposed by the
	 * {@link ngModel ngModel} directive.
	 *
	 * The child elements of the `ngMessages` directive are matched to the collection keys by a `ngMessage` or
	 * `ngMessageExp` directive. The value of these attributes must match a key in the collection that is provided by
	 * the `ngMessages` directive.
	 *
	 * Consider the following example, which illustrates a typical use case of `ngMessages`. Within the form `myForm` we
	 * have a text input named `myField` which is bound to the scope variable `field` using the {@link ngModel ngModel}
	 * directive.
	 *
	 * The `myField` field is a required input of type `email` with a maximum length of 15 characters.
	 *
	 * ```html
	 * <form name="myForm">
	 *   <label>
	 *     Enter text:
	 *     <input type="email" ng-model="field" name="myField" required maxlength="15" />
	 *   </label>
	 *   <div ng-messages="myForm.myField.$error" role="alert">
	 *     <div ng-message="required">Please enter a value for this field.</div>
	 *     <div ng-message="email">This field must be a valid email address.</div>
	 *     <div ng-message="maxlength">This field can be at most 15 characters long.</div>
	 *   </div>
	 * </form>
	 * ```
	 *
	 * In order to show error messages corresponding to `myField` we first create an element with an `ngMessages` attribute
	 * set to the `$error` object owned by the `myField` input in our `myForm` form.
	 *
	 * Within this element we then create separate elements for each of the possible errors that `myField` could have.
	 * The `ngMessage` attribute is used to declare which element(s) will appear for which error - for example,
	 * setting `ng-message="required"` specifies that this particular element should be displayed when there
	 * is no value present for the required field `myField` (because the key `required` will be `true` in the object
	 * `myForm.myField.$error`).
	 *
	 * ### Message order
	 *
	 * By default, `ngMessages` will only display one message for a particular key/value collection at any time. If more
	 * than one message (or error) key is currently true, then which message is shown is determined by the order of messages
	 * in the HTML template code (messages declared first are prioritised). This mechanism means the developer does not have
	 * to prioritize messages using custom JavaScript code.
	 *
	 * Given the following error object for our example (which informs us that the field `myField` currently has both the
	 * `required` and `email` errors):
	 *
	 * ```javascript
	 * <!-- keep in mind that ngModel automatically sets these error flags -->
	 * myField.$error = { required : true, email: true, maxlength: false };
	 * ```
	 * The `required` message will be displayed to the user since it appears before the `email` message in the DOM.
	 * Once the user types a single character, the `required` message will disappear (since the field now has a value)
	 * but the `email` message will be visible because it is still applicable.
	 *
	 * ### Displaying multiple messages at the same time
	 *
	 * While `ngMessages` will by default only display one error element at a time, the `ng-messages-multiple` attribute can
	 * be applied to the `ngMessages` container element to cause it to display all applicable error messages at once:
	 *
	 * ```html
	 * <!-- attribute-style usage -->
	 * <div ng-messages="myForm.myField.$error" ng-messages-multiple>...</div>
	 *
	 * <!-- element-style usage -->
	 * <ng-messages for="myForm.myField.$error" multiple>...</ng-messages>
	 * ```
	 *
	 * ## Reusing and Overriding Messages
	 * In addition to prioritization, ngMessages also allows for including messages from a remote or an inline
	 * template. This allows for generic collection of messages to be reused across multiple parts of an
	 * application.
	 *
	 * ```html
	 * <script type="text/ng-template" id="error-messages">
	 *   <div ng-message="required">This field is required</div>
	 *   <div ng-message="minlength">This field is too short</div>
	 * </script>
	 *
	 * <div ng-messages="myForm.myField.$error" role="alert">
	 *   <div ng-messages-include="error-messages"></div>
	 * </div>
	 * ```
	 *
	 * However, including generic messages may not be useful enough to match all input fields, therefore,
	 * `ngMessages` provides the ability to override messages defined in the remote template by redefining
	 * them within the directive container.
	 *
	 * ```html
	 * <!-- a generic template of error messages known as "my-custom-messages" -->
	 * <script type="text/ng-template" id="my-custom-messages">
	 *   <div ng-message="required">This field is required</div>
	 *   <div ng-message="minlength">This field is too short</div>
	 * </script>
	 *
	 * <form name="myForm">
	 *   <label>
	 *     Email address
	 *     <input type="email"
	 *            id="email"
	 *            name="myEmail"
	 *            ng-model="email"
	 *            minlength="5"
	 *            required />
	 *   </label>
	 *   <!-- any ng-message elements that appear BEFORE the ng-messages-include will
	 *        override the messages present in the ng-messages-include template -->
	 *   <div ng-messages="myForm.myEmail.$error" role="alert">
	 *     <!-- this required message has overridden the template message -->
	 *     <div ng-message="required">You did not enter your email address</div>
	 *
	 *     <!-- this is a brand new message and will appear last in the prioritization -->
	 *     <div ng-message="email">Your email address is invalid</div>
	 *
	 *     <!-- and here are the generic error messages -->
	 *     <div ng-messages-include="my-custom-messages"></div>
	 *   </div>
	 * </form>
	 * ```
	 *
	 * In the example HTML code above the message that is set on required will override the corresponding
	 * required message defined within the remote template. Therefore, with particular input fields (such
	 * email addresses, date fields, autocomplete inputs, etc...), specialized error messages can be applied
	 * while more generic messages can be used to handle other, more general input errors.
	 *
	 * ## Dynamic Messaging
	 * ngMessages also supports using expressions to dynamically change key values. Using arrays and
	 * repeaters to list messages is also supported. This means that the code below will be able to
	 * fully adapt itself and display the appropriate message when any of the expression data changes:
	 *
	 * ```html
	 * <form name="myForm">
	 *   <label>
	 *     Email address
	 *     <input type="email"
	 *            name="myEmail"
	 *            ng-model="email"
	 *            minlength="5"
	 *            required />
	 *   </label>
	 *   <div ng-messages="myForm.myEmail.$error" role="alert">
	 *     <div ng-message="required">You did not enter your email address</div>
	 *     <div ng-repeat="errorMessage in errorMessages">
	 *       <!-- use ng-message-exp for a message whose key is given by an expression -->
	 *       <div ng-message-exp="errorMessage.type">{{ errorMessage.text }}</div>
	 *     </div>
	 *   </div>
	 * </form>
	 * ```
	 *
	 * The `errorMessage.type` expression can be a string value or it can be an array so
	 * that multiple errors can be associated with a single error message:
	 *
	 * ```html
	 *   <label>
	 *     Email address
	 *     <input type="email"
	 *            ng-model="data.email"
	 *            name="myEmail"
	 *            ng-minlength="5"
	 *            ng-maxlength="100"
	 *            required />
	 *   </label>
	 *   <div ng-messages="myForm.myEmail.$error" role="alert">
	 *     <div ng-message-exp="'required'">You did not enter your email address</div>
	 *     <div ng-message-exp="['minlength', 'maxlength']">
	 *       Your email must be between 5 and 100 characters long
	 *     </div>
	 *   </div>
	 * ```
	 *
	 * Feel free to use other structural directives such as ng-if and ng-switch to further control
	 * what messages are active and when. Be careful, if you place ng-message on the same element
	 * as these structural directives, Angular may not be able to determine if a message is active
	 * or not. Therefore it is best to place the ng-message on a child element of the structural
	 * directive.
	 *
	 * ```html
	 * <div ng-messages="myForm.myEmail.$error" role="alert">
	 *   <div ng-if="showRequiredError">
	 *     <div ng-message="required">Please enter something</div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * ## Animations
	 * If the `ngAnimate` module is active within the application then the `ngMessages`, `ngMessage` and
	 * `ngMessageExp` directives will trigger animations whenever any messages are added and removed from
	 * the DOM by the `ngMessages` directive.
	 *
	 * Whenever the `ngMessages` directive contains one or more visible messages then the `.ng-active` CSS
	 * class will be added to the element. The `.ng-inactive` CSS class will be applied when there are no
	 * messages present. Therefore, CSS transitions and keyframes as well as JavaScript animations can
	 * hook into the animations whenever these classes are added/removed.
	 *
	 * Let's say that our HTML code for our messages container looks like so:
	 *
	 * ```html
	 * <div ng-messages="myMessages" class="my-messages" role="alert">
	 *   <div ng-message="alert" class="some-message">...</div>
	 *   <div ng-message="fail" class="some-message">...</div>
	 * </div>
	 * ```
	 *
	 * Then the CSS animation code for the message container looks like so:
	 *
	 * ```css
	 * .my-messages {
	 *   transition:1s linear all;
	 * }
	 * .my-messages.ng-active {
	 *   // messages are visible
	 * }
	 * .my-messages.ng-inactive {
	 *   // messages are hidden
	 * }
	 * ```
	 *
	 * Whenever an inner message is attached (becomes visible) or removed (becomes hidden) then the enter
	 * and leave animation is triggered for each particular element bound to the `ngMessage` directive.
	 *
	 * Therefore, the CSS code for the inner messages looks like so:
	 *
	 * ```css
	 * .some-message {
	 *   transition:1s linear all;
	 * }
	 *
	 * .some-message.ng-enter {}
	 * .some-message.ng-enter.ng-enter-active {}
	 *
	 * .some-message.ng-leave {}
	 * .some-message.ng-leave.ng-leave-active {}
	 * ```
	 *
	 * {@link ngAnimate Click here} to learn how to use JavaScript animations or to learn more about ngAnimate.
	 */
	angular.module('ngMessages', [], function initAngularHelpers() {
	  // Access helpers from angular core.
	  // Do it inside a `config` block to ensure `window.angular` is available.
	  forEach = angular.forEach;
	  isArray = angular.isArray;
	  isString = angular.isString;
	  jqLite = angular.element;
	})
	
	  /**
	   * @ngdoc directive
	   * @module ngMessages
	   * @name ngMessages
	   * @restrict AE
	   *
	   * @description
	   * `ngMessages` is a directive that is designed to show and hide messages based on the state
	   * of a key/value object that it listens on. The directive itself complements error message
	   * reporting with the `ngModel` $error object (which stores a key/value state of validation errors).
	   *
	   * `ngMessages` manages the state of internal messages within its container element. The internal
	   * messages use the `ngMessage` directive and will be inserted/removed from the page depending
	   * on if they're present within the key/value object. By default, only one message will be displayed
	   * at a time and this depends on the prioritization of the messages within the template. (This can
	   * be changed by using the `ng-messages-multiple` or `multiple` attribute on the directive container.)
	   *
	   * A remote template can also be used to promote message reusability and messages can also be
	   * overridden.
	   *
	   * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
	   *
	   * @usage
	   * ```html
	   * <!-- using attribute directives -->
	   * <ANY ng-messages="expression" role="alert">
	   *   <ANY ng-message="stringValue">...</ANY>
	   *   <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
	   *   <ANY ng-message-exp="expressionValue">...</ANY>
	   * </ANY>
	   *
	   * <!-- or by using element directives -->
	   * <ng-messages for="expression" role="alert">
	   *   <ng-message when="stringValue">...</ng-message>
	   *   <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
	   *   <ng-message when-exp="expressionValue">...</ng-message>
	   * </ng-messages>
	   * ```
	   *
	   * @param {string} ngMessages an angular expression evaluating to a key/value object
	   *                 (this is typically the $error object on an ngModel instance).
	   * @param {string=} ngMessagesMultiple|multiple when set, all messages will be displayed with true
	   *
	   * @example
	   * <example name="ngMessages-directive" module="ngMessagesExample"
	   *          deps="angular-messages.js"
	   *          animations="true" fixBase="true">
	   *   <file name="index.html">
	   *     <form name="myForm">
	   *       <label>
	   *         Enter your name:
	   *         <input type="text"
	   *                name="myName"
	   *                ng-model="name"
	   *                ng-minlength="5"
	   *                ng-maxlength="20"
	   *                required />
	   *       </label>
	   *       <pre>myForm.myName.$error = {{ myForm.myName.$error | json }}</pre>
	   *
	   *       <div ng-messages="myForm.myName.$error" style="color:maroon" role="alert">
	   *         <div ng-message="required">You did not enter a field</div>
	   *         <div ng-message="minlength">Your field is too short</div>
	   *         <div ng-message="maxlength">Your field is too long</div>
	   *       </div>
	   *     </form>
	   *   </file>
	   *   <file name="script.js">
	   *     angular.module('ngMessagesExample', ['ngMessages']);
	   *   </file>
	   * </example>
	   */
	  .directive('ngMessages', ['$animate', function($animate) {
	    var ACTIVE_CLASS = 'ng-active';
	    var INACTIVE_CLASS = 'ng-inactive';
	
	    return {
	      require: 'ngMessages',
	      restrict: 'AE',
	      controller: ['$element', '$scope', '$attrs', function NgMessagesCtrl($element, $scope, $attrs) {
	        var ctrl = this;
	        var latestKey = 0;
	        var nextAttachId = 0;
	
	        this.getAttachId = function getAttachId() { return nextAttachId++; };
	
	        var messages = this.messages = {};
	        var renderLater, cachedCollection;
	
	        this.render = function(collection) {
	          collection = collection || {};
	
	          renderLater = false;
	          cachedCollection = collection;
	
	          // this is true if the attribute is empty or if the attribute value is truthy
	          var multiple = isAttrTruthy($scope, $attrs.ngMessagesMultiple) ||
	                         isAttrTruthy($scope, $attrs.multiple);
	
	          var unmatchedMessages = [];
	          var matchedKeys = {};
	          var messageItem = ctrl.head;
	          var messageFound = false;
	          var totalMessages = 0;
	
	          // we use != instead of !== to allow for both undefined and null values
	          while (messageItem != null) {
	            totalMessages++;
	            var messageCtrl = messageItem.message;
	
	            var messageUsed = false;
	            if (!messageFound) {
	              forEach(collection, function(value, key) {
	                if (!messageUsed && truthy(value) && messageCtrl.test(key)) {
	                  // this is to prevent the same error name from showing up twice
	                  if (matchedKeys[key]) return;
	                  matchedKeys[key] = true;
	
	                  messageUsed = true;
	                  messageCtrl.attach();
	                }
	              });
	            }
	
	            if (messageUsed) {
	              // unless we want to display multiple messages then we should
	              // set a flag here to avoid displaying the next message in the list
	              messageFound = !multiple;
	            } else {
	              unmatchedMessages.push(messageCtrl);
	            }
	
	            messageItem = messageItem.next;
	          }
	
	          forEach(unmatchedMessages, function(messageCtrl) {
	            messageCtrl.detach();
	          });
	
	          if (unmatchedMessages.length !== totalMessages) {
	            $animate.setClass($element, ACTIVE_CLASS, INACTIVE_CLASS);
	          } else {
	            $animate.setClass($element, INACTIVE_CLASS, ACTIVE_CLASS);
	          }
	        };
	
	        $scope.$watchCollection($attrs.ngMessages || $attrs['for'], ctrl.render);
	
	        // If the element is destroyed, proactively destroy all the currently visible messages
	        $element.on('$destroy', function() {
	          forEach(messages, function(item) {
	            item.message.detach();
	          });
	        });
	
	        this.reRender = function() {
	          if (!renderLater) {
	            renderLater = true;
	            $scope.$evalAsync(function() {
	              if (renderLater && cachedCollection) {
	                ctrl.render(cachedCollection);
	              }
	            });
	          }
	        };
	
	        this.register = function(comment, messageCtrl) {
	          var nextKey = latestKey.toString();
	          messages[nextKey] = {
	            message: messageCtrl
	          };
	          insertMessageNode($element[0], comment, nextKey);
	          comment.$$ngMessageNode = nextKey;
	          latestKey++;
	
	          ctrl.reRender();
	        };
	
	        this.deregister = function(comment) {
	          var key = comment.$$ngMessageNode;
	          delete comment.$$ngMessageNode;
	          removeMessageNode($element[0], comment, key);
	          delete messages[key];
	          ctrl.reRender();
	        };
	
	        function findPreviousMessage(parent, comment) {
	          var prevNode = comment;
	          var parentLookup = [];
	
	          while (prevNode && prevNode !== parent) {
	            var prevKey = prevNode.$$ngMessageNode;
	            if (prevKey && prevKey.length) {
	              return messages[prevKey];
	            }
	
	            // dive deeper into the DOM and examine its children for any ngMessage
	            // comments that may be in an element that appears deeper in the list
	            if (prevNode.childNodes.length && parentLookup.indexOf(prevNode) === -1) {
	              parentLookup.push(prevNode);
	              prevNode = prevNode.childNodes[prevNode.childNodes.length - 1];
	            } else if (prevNode.previousSibling) {
	              prevNode = prevNode.previousSibling;
	            } else {
	              prevNode = prevNode.parentNode;
	              parentLookup.push(prevNode);
	            }
	          }
	        }
	
	        function insertMessageNode(parent, comment, key) {
	          var messageNode = messages[key];
	          if (!ctrl.head) {
	            ctrl.head = messageNode;
	          } else {
	            var match = findPreviousMessage(parent, comment);
	            if (match) {
	              messageNode.next = match.next;
	              match.next = messageNode;
	            } else {
	              messageNode.next = ctrl.head;
	              ctrl.head = messageNode;
	            }
	          }
	        }
	
	        function removeMessageNode(parent, comment, key) {
	          var messageNode = messages[key];
	
	          var match = findPreviousMessage(parent, comment);
	          if (match) {
	            match.next = messageNode.next;
	          } else {
	            ctrl.head = messageNode.next;
	          }
	        }
	      }]
	    };
	
	    function isAttrTruthy(scope, attr) {
	     return (isString(attr) && attr.length === 0) || //empty attribute
	            truthy(scope.$eval(attr));
	    }
	
	    function truthy(val) {
	      return isString(val) ? val.length : !!val;
	    }
	  }])
	
	  /**
	   * @ngdoc directive
	   * @name ngMessagesInclude
	   * @restrict AE
	   * @scope
	   *
	   * @description
	   * `ngMessagesInclude` is a directive with the purpose to import existing ngMessage template
	   * code from a remote template and place the downloaded template code into the exact spot
	   * that the ngMessagesInclude directive is placed within the ngMessages container. This allows
	   * for a series of pre-defined messages to be reused and also allows for the developer to
	   * determine what messages are overridden due to the placement of the ngMessagesInclude directive.
	   *
	   * @usage
	   * ```html
	   * <!-- using attribute directives -->
	   * <ANY ng-messages="expression" role="alert">
	   *   <ANY ng-messages-include="remoteTplString">...</ANY>
	   * </ANY>
	   *
	   * <!-- or by using element directives -->
	   * <ng-messages for="expression" role="alert">
	   *   <ng-messages-include src="expressionValue1">...</ng-messages-include>
	   * </ng-messages>
	   * ```
	   *
	   * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
	   *
	   * @param {string} ngMessagesInclude|src a string value corresponding to the remote template.
	   */
	  .directive('ngMessagesInclude',
	    ['$templateRequest', '$document', '$compile', function($templateRequest, $document, $compile) {
	
	    return {
	      restrict: 'AE',
	      require: '^^ngMessages', // we only require this for validation sake
	      link: function($scope, element, attrs) {
	        var src = attrs.ngMessagesInclude || attrs.src;
	        $templateRequest(src).then(function(html) {
	          if ($scope.$$destroyed) return;
	
	          if (isString(html) && !html.trim()) {
	            // Empty template - nothing to compile
	            replaceElementWithMarker(element, src);
	          } else {
	            // Non-empty template - compile and link
	            $compile(html)($scope, function(contents) {
	              element.after(contents);
	              replaceElementWithMarker(element, src);
	            });
	          }
	        });
	      }
	    };
	
	    // Helpers
	    function replaceElementWithMarker(element, src) {
	      // A comment marker is placed for debugging purposes
	      var comment = $compile.$$createComment ?
	          $compile.$$createComment('ngMessagesInclude', src) :
	          $document[0].createComment(' ngMessagesInclude: ' + src + ' ');
	      var marker = jqLite(comment);
	      element.after(marker);
	
	      // Don't pollute the DOM anymore by keeping an empty directive element
	      element.remove();
	    }
	  }])
	
	  /**
	   * @ngdoc directive
	   * @name ngMessage
	   * @restrict AE
	   * @scope
	   *
	   * @description
	   * `ngMessage` is a directive with the purpose to show and hide a particular message.
	   * For `ngMessage` to operate, a parent `ngMessages` directive on a parent DOM element
	   * must be situated since it determines which messages are visible based on the state
	   * of the provided key/value map that `ngMessages` listens on.
	   *
	   * More information about using `ngMessage` can be found in the
	   * {@link module:ngMessages `ngMessages` module documentation}.
	   *
	   * @usage
	   * ```html
	   * <!-- using attribute directives -->
	   * <ANY ng-messages="expression" role="alert">
	   *   <ANY ng-message="stringValue">...</ANY>
	   *   <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
	   * </ANY>
	   *
	   * <!-- or by using element directives -->
	   * <ng-messages for="expression" role="alert">
	   *   <ng-message when="stringValue">...</ng-message>
	   *   <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
	   * </ng-messages>
	   * ```
	   *
	   * @param {expression} ngMessage|when a string value corresponding to the message key.
	   */
	  .directive('ngMessage', ngMessageDirectiveFactory())
	
	
	  /**
	   * @ngdoc directive
	   * @name ngMessageExp
	   * @restrict AE
	   * @priority 1
	   * @scope
	   *
	   * @description
	   * `ngMessageExp` is the same as {@link directive:ngMessage `ngMessage`}, but instead of a static
	   * value, it accepts an expression to be evaluated for the message key.
	   *
	   * @usage
	   * ```html
	   * <!-- using attribute directives -->
	   * <ANY ng-messages="expression">
	   *   <ANY ng-message-exp="expressionValue">...</ANY>
	   * </ANY>
	   *
	   * <!-- or by using element directives -->
	   * <ng-messages for="expression">
	   *   <ng-message when-exp="expressionValue">...</ng-message>
	   * </ng-messages>
	   * ```
	   *
	   * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
	   *
	   * @param {expression} ngMessageExp|whenExp an expression value corresponding to the message key.
	   */
	  .directive('ngMessageExp', ngMessageDirectiveFactory());
	
	function ngMessageDirectiveFactory() {
	  return ['$animate', function($animate) {
	    return {
	      restrict: 'AE',
	      transclude: 'element',
	      priority: 1, // must run before ngBind, otherwise the text is set on the comment
	      terminal: true,
	      require: '^^ngMessages',
	      link: function(scope, element, attrs, ngMessagesCtrl, $transclude) {
	        var commentNode = element[0];
	
	        var records;
	        var staticExp = attrs.ngMessage || attrs.when;
	        var dynamicExp = attrs.ngMessageExp || attrs.whenExp;
	        var assignRecords = function(items) {
	          records = items
	              ? (isArray(items)
	                  ? items
	                  : items.split(/[\s,]+/))
	              : null;
	          ngMessagesCtrl.reRender();
	        };
	
	        if (dynamicExp) {
	          assignRecords(scope.$eval(dynamicExp));
	          scope.$watchCollection(dynamicExp, assignRecords);
	        } else {
	          assignRecords(staticExp);
	        }
	
	        var currentElement, messageCtrl;
	        ngMessagesCtrl.register(commentNode, messageCtrl = {
	          test: function(name) {
	            return contains(records, name);
	          },
	          attach: function() {
	            if (!currentElement) {
	              $transclude(function(elm, newScope) {
	                $animate.enter(elm, null, element);
	                currentElement = elm;
	
	                // Each time we attach this node to a message we get a new id that we can match
	                // when we are destroying the node later.
	                var $$attachId = currentElement.$$attachId = ngMessagesCtrl.getAttachId();
	
	                // in the event that the element or a parent element is destroyed
	                // by another structural directive then it's time
	                // to deregister the message from the controller
	                currentElement.on('$destroy', function() {
	                  if (currentElement && currentElement.$$attachId === $$attachId) {
	                    ngMessagesCtrl.deregister(commentNode);
	                    messageCtrl.detach();
	                  }
	                  newScope.$destroy();
	                });
	              });
	            }
	          },
	          detach: function() {
	            if (currentElement) {
	              var elm = currentElement;
	              currentElement = null;
	              $animate.leave(elm);
	            }
	          }
	        });
	      }
	    };
	  }];
	
	  function contains(collection, key) {
	    if (collection) {
	      return isArray(collection)
	          ? collection.indexOf(key) >= 0
	          : collection.hasOwnProperty(key);
	    }
	  }
	}
	
	
	})(window, window.angular);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addWrappers.$inject = ["formlyConfigProvider"];
	  ngModule.config(addWrappers);
	
	  function addWrappers(formlyConfigProvider) {
	    formlyConfigProvider.setWrapper([{
	      name: "foundationLabel",
	      template: __webpack_require__(9)
	      // apiCheck: check => ({
	      //   templateOptions: {
	      //     label: check.string.optional,
	      //     required: check.bool.optional
	      //   }
	      // })
	    }, { name: "foundationHasError", template: __webpack_require__(10) }]);
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"\" >\r\n  <label for=\"{{id}}\" ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-label' : ''\">\r\n    <span ng-if=\"to.trandlate\">\r\n      <span class=\"formly-wrapper-label\" translate=\"{{to.translate}}\"></span>\r\n    </span>\r\n    <span ng-if=\"!to.trandlate\">\r\n      <span class=\"formly-wrapper-label\">{{to.label}}</span>\r\n    </span>\r\n    <span class=\"formly-wrapper-required\" >{{to.required ? '*' : ''}}</span>\r\n    <formly-transclude></formly-transclude>\r\n    <div ng-messages=\"fc.$error\" \r\n    ng-if=\"options.formControl.$touched\" \r\n    class=\"my-messages form-error is-visible\">\r\n      <div ng-message=\"{{::name}}\" ng-repeat=\"(name, message) in ::options.validation.messages\" class=\"form-error is-visible\">{{message(fc.$viewValue, fc.$modelValue, this)}}</div>\r\n    </div>\r\n  </label>\r\n</div>\r\n"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"columns small-{{to.column > 0 ? to.column : 12}}\" ng-class=\"{'has-error': showError}\">\r\n  <formly-transclude></formly-transclude>\r\n</div>\r\n"

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(12)(ngModule);
	  __webpack_require__(14)(ngModule);
	  __webpack_require__(16)(ngModule);
	  __webpack_require__(17)(ngModule);
	  __webpack_require__(19)(ngModule);
	  __webpack_require__(21)(ngModule);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "checkbox",
	      template: __webpack_require__(13),
	      wrapper: ["foundationHasError"],
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

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"checkbox\">\r\n\t<label ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n\t\t<input type=\"checkbox\"\r\n           class=\"formly-field-checkbox\"\r\n\t\t       ng-model=\"model[options.key]\" ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">\r\n\t\t<span>{{to.label}}</span>\r\n\t\t<span>{{to.required ? '*' : ''}}</span>\r\n\t</label>\r\n</div>\r\n"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "multiCheckbox",
	      template: __webpack_require__(15),
	      wrapper: ["foundationLabel", "foundationHasError"],
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

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\r\n  <label ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n    <input type=\"checkbox\"\r\n           id=\"{{id + '_'+ $index}}\"\r\n           ng-model=\"multiCheckbox.checked[$index]\"\r\n           ng-change=\"multiCheckbox.change()\" ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">\r\n      {{option[to.labelProp || 'name']}}\r\n  </label>\r\n</div>\r\n"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addInputType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addInputType);
	
	  function addInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "input",
	      template: "<input ng-model=\"model[options.key]\" " + " ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false " + " ? 'is-invalid-input' : ''\">",
	      wrapper: ["foundationLabel", "foundationHasError"],
	      defaultOptions: {
	        templateOptions: { type: "text" }
	      }
	    });
	  }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addRadioType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addRadioType);
	
	  function addRadioType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "radio",
	      template: __webpack_require__(18),
	      wrapper: ["foundationLabel", "foundationHasError"],
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

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div ng-repeat=\"(key, option) in to.options\" class=\"radio\" ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n  <label>\r\n    <input type=\"radio\"\r\n           id=\"{{id + '_'+ $index}}\"\r\n           tabindex=\"0\"\r\n           ng-value=\"option[to.valueProp || 'value']\"\r\n           ng-model=\"model[options.key]\"\r\n           ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">\r\n      {{option[to.labelProp || 'name']}}\r\n  </label>\r\n</div>\r\n"

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addSelectType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addSelectType);
	
	  function addSelectType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "select",
	      template: __webpack_require__(20),
	      wrapper: ["foundationLabel", "foundationHasError"],
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

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = "<select\r\n  ng-model=\"model[options.key]\"\r\n  ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options\"\r\n  ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">\r\n</select>"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addTextareaType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addTextareaType);
	
	  function addTextareaType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "textarea",
	      template: "<textarea class=\"\" ng-model=\"model[options.key]\"" + " ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false " + " ? 'is-invalid-input' : ''\"></textarea>",
	      wrapper: ["foundationLabel", "foundationHasError"],
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var addons = _interopRequire(__webpack_require__(23));
	
	var description = _interopRequire(__webpack_require__(25));
	
	module.exports = function (ngModule) {
	  addons(ngModule);
	  description(ngModule);
	};
	
	//export default ngModule => {
	//  require('./addons')(ngModule);
	//  require('./description')(ngModule);
	//};
	//

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addAddonsManipulator.$inject = ["formlyConfig", "formlyFoundationApiCheck"];
	  ngModule.run(addAddonsManipulator);
	
	  function addAddonsManipulator(formlyConfig, formlyFoundationApiCheck) {
	    var addonTemplate = __webpack_require__(24);
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

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "<div ng-class=\"{'': to.addonLeft || to.addonRight}\">\r\n    <div class=\"\" ng-if=\"to.addonLeft\">\r\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\r\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\r\n    </div>\r\n    <formly-transclude></formly-transclude>\r\n    <div class=\"\" ng-if=\"to.addonRight\">\r\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\r\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\r\n    </div>\r\n</div>"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZmU2MDg1YmI4ZDlkM2MzY2ZhNyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8zMDkwIiwid2VicGFjazovLy8uL2luZGV4LmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanM/ODMyMiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcz9jMzdlIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2FuZ3VsYXItbWVzc2FnZXMvYW5ndWxhci1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcz82MTY2Iiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanM/OGM2OSIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcz81NDk2Iiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzPzZiZjciLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzPzUxZWYiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanM/NGIxYSIsIndlYnBhY2s6Ly8vLi90eXBlcy9yYWRpby5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuanM/NTk4ZiIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcz8zNDZkIiwid2VicGFjazovLy8uL3J1bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanM/NjRmZCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy8uL3J1bi9hZGRvbnMuanM/ZWViNCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3J1bi9kZXNjcmlwdGlvbi5qcz9mZGI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQ0FBLFFBQU8sVUFBVSxvQkFBUSxHOzs7Ozs7QUNBekI7O0FDQUEsS0FBTSxlQUFlO0FBQ3JCLEtBQU0sVUFBVSxvQkFBUTtBQUN4QixLQUFNLFdBQVcsUUFBUSxPQUFPLGNBQWMsQ0FBQyxvQkFBUSxJQUFtQixvQkFBUTtBQUNsRixVQUFTLFNBQ1AsNEJBQ0Esb0JBQVEsR0FBYTtHQUNuQixRQUFRO0tBQ04sUUFBUTs7O0FBSWQsVUFBUyxTQUFTLDJCQUEyQjs7QUFFN0MscUJBQVEsR0FBYztBQUN0QixxQkFBUSxJQUFXO0FBQ25CLHFCQUFRLElBQVM7OztBREVqQixRQUFPLFVDQ1EsYTs7Ozs7O0FDbEJmOztBQUVBOztBQ0FBLEtBQUksVUFBVSxvQkFBUTtBQUN0QixLQUFJLENBQUMsUUFBUSxTQUFTO0dBQ3BCLFVBQVUsT0FBTzs7QUFFbkIsUUFBTyxVQUFVLFE7Ozs7OztBQ05qQixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQscUJBQXFCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LXRlbXBsYXRlcy1mb3VuZGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpLCByZXF1aXJlKFwiYXBpLWNoZWNrXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFuZ3VsYXJcIiwgXCJhbmd1bGFyLWZvcm1seVwiLCBcImFwaS1jaGVja1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ0Zvcm1seVRlbXBsYXRlc0ZvdW5kYXRpb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nRm9ybWx5VGVtcGxhdGVzRm91bmRhdGlvblwiXSA9IGZhY3Rvcnkocm9vdFtcImFuZ3VsYXJcIl0sIHJvb3RbXCJuZ0Zvcm1seVwiXSwgcm9vdFtcImFwaUNoZWNrXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmZlNjA4NWJiOGQ5ZDNjM2NmYTciLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pbmRleC5jb21tb25cIik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW5kZXguY29tbW9uJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbmdNb2R1bGVOYW1lID0gXCJmb3JtbHlGb3VuZGF0aW9uXCI7XG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCIuL2FuZ3VsYXItZml4XCIpO1xudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpLCByZXF1aXJlKFwiYW5ndWxhci1tZXNzYWdlc1wiKV0pO1xubmdNb2R1bGUuY29uc3RhbnQoXCJmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2tcIiwgcmVxdWlyZShcImFwaS1jaGVja1wiKSh7XG4gIG91dHB1dDoge1xuICAgIHByZWZpeDogXCJhbmd1bGFyLWZvcm1seS1mb3VuZGF0aW9uXCJcbiAgfVxufSkpO1xubmdNb2R1bGUuY29uc3RhbnQoXCJmb3JtbHlGb3VuZGF0aW9uVmVyc2lvblwiLCBWRVJTSU9OKTtcblxucmVxdWlyZShcIi4vd3JhcHBlcnNcIikobmdNb2R1bGUpO1xucmVxdWlyZShcIi4vdHlwZXNcIikobmdNb2R1bGUpO1xucmVxdWlyZShcIi4vcnVuXCIpKG5nTW9kdWxlKTtcbi8vIHJlcXVpcmUoJ2NzcyEuL3N0eWxlLmNzcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5nTW9kdWxlTmFtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5jb21tb24uanMiLCJjb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5Rm91bmRhdGlvbic7XHJcbmNvbnN0IGFuZ3VsYXIgPSByZXF1aXJlKCcuL2FuZ3VsYXItZml4Jyk7XHJcbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZSgnYW5ndWxhci1mb3JtbHknKSAscmVxdWlyZSgnYW5ndWxhci1tZXNzYWdlcycpICxdKTtcclxubmdNb2R1bGUuY29uc3RhbnQoXHJcbiAgJ2Zvcm1seUZvdW5kYXRpb25BcGlDaGVjaycsXHJcbiAgcmVxdWlyZSgnYXBpLWNoZWNrJykoe1xyXG4gICAgb3V0cHV0OiB7XHJcbiAgICAgIHByZWZpeDogJ2FuZ3VsYXItZm9ybWx5LWZvdW5kYXRpb24nXHJcbiAgICB9XHJcbiAgfSlcclxuKTtcclxubmdNb2R1bGUuY29uc3RhbnQoJ2Zvcm1seUZvdW5kYXRpb25WZXJzaW9uJywgVkVSU0lPTik7XHJcblxyXG5yZXF1aXJlKCcuL3dyYXBwZXJzJykobmdNb2R1bGUpO1xyXG5yZXF1aXJlKCcuL3R5cGVzJykobmdNb2R1bGUpO1xyXG5yZXF1aXJlKCcuL3J1bicpKG5nTW9kdWxlKTtcclxuLy8gcmVxdWlyZSgnY3NzIS4vc3R5bGUuY3NzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZU5hbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5jb21tb24uanMiLCIvLyBzb21lIHZlcnNpb25zIG9mIGFuZ3VsYXIgZG9uJ3QgZXhwb3J0IHRoZSBhbmd1bGFyIG1vZHVsZSBwcm9wZXJseSxcbi8vIHNvIHdlIGdldCBpdCBmcm9tIHdpbmRvdyBpbiB0aGlzIGNhc2UuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhclwiKTtcbmlmICghYW5ndWxhci52ZXJzaW9uKSB7XG4gIGFuZ3VsYXIgPSB3aW5kb3cuYW5ndWxhcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxyXG4vLyBzbyB3ZSBnZXQgaXQgZnJvbSB3aW5kb3cgaW4gdGhpcyBjYXNlLlxyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuaWYgKCFhbmd1bGFyLnZlcnNpb24pIHtcclxuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vYW5ndWxhci1maXgvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2FuZ3VsYXItbWVzc2FnZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gJ25nTWVzc2FnZXMnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhckpTIHYxLjUuMTFcbiAqIChjKSAyMDEwLTIwMTcgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgYW5ndWxhcikgeyd1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2g7XG52YXIgaXNBcnJheTtcbnZhciBpc1N0cmluZztcbnZhciBqcUxpdGU7XG5cbi8qKlxuICogQG5nZG9jIG1vZHVsZVxuICogQG5hbWUgbmdNZXNzYWdlc1xuICogQGRlc2NyaXB0aW9uXG4gKlxuICogVGhlIGBuZ01lc3NhZ2VzYCBtb2R1bGUgcHJvdmlkZXMgZW5oYW5jZWQgc3VwcG9ydCBmb3IgZGlzcGxheWluZyBtZXNzYWdlcyB3aXRoaW4gdGVtcGxhdGVzXG4gKiAodHlwaWNhbGx5IHdpdGhpbiBmb3JtcyBvciB3aGVuIHJlbmRlcmluZyBtZXNzYWdlIG9iamVjdHMgdGhhdCByZXR1cm4ga2V5L3ZhbHVlIGRhdGEpLlxuICogSW5zdGVhZCBvZiByZWx5aW5nIG9uIEphdmFTY3JpcHQgY29kZSBhbmQvb3IgY29tcGxleCBuZy1pZiBzdGF0ZW1lbnRzIHdpdGhpbiB5b3VyIGZvcm0gdGVtcGxhdGUgdG9cbiAqIHNob3cgYW5kIGhpZGUgZXJyb3IgbWVzc2FnZXMgc3BlY2lmaWMgdG8gdGhlIHN0YXRlIG9mIGFuIGlucHV0IGZpZWxkLCB0aGUgYG5nTWVzc2FnZXNgIGFuZFxuICogYG5nTWVzc2FnZWAgZGlyZWN0aXZlcyBhcmUgZGVzaWduZWQgdG8gaGFuZGxlIHRoZSBjb21wbGV4aXR5LCBpbmhlcml0YW5jZSBhbmQgcHJpb3JpdHlcbiAqIHNlcXVlbmNpbmcgYmFzZWQgb24gdGhlIG9yZGVyIG9mIGhvdyB0aGUgbWVzc2FnZXMgYXJlIGRlZmluZWQgaW4gdGhlIHRlbXBsYXRlLlxuICpcbiAqIEN1cnJlbnRseSwgdGhlIG5nTWVzc2FnZXMgbW9kdWxlIG9ubHkgY29udGFpbnMgdGhlIGNvZGUgZm9yIHRoZSBgbmdNZXNzYWdlc2AsIGBuZ01lc3NhZ2VzSW5jbHVkZWBcbiAqIGBuZ01lc3NhZ2VgIGFuZCBgbmdNZXNzYWdlRXhwYCBkaXJlY3RpdmVzLlxuICpcbiAqICMgVXNhZ2VcbiAqIFRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlIGFsbG93cyBrZXlzIGluIGEga2V5L3ZhbHVlIGNvbGxlY3Rpb24gdG8gYmUgYXNzb2NpYXRlZCB3aXRoIGEgY2hpbGQgZWxlbWVudFxuICogKG9yICdtZXNzYWdlJykgdGhhdCB3aWxsIHNob3cgb3IgaGlkZSBiYXNlZCBvbiB0aGUgdHJ1dGhpbmVzcyBvZiB0aGF0IGtleSdzIHZhbHVlIGluIHRoZSBjb2xsZWN0aW9uLiBBIGNvbW1vbiB1c2VcbiAqIGNhc2UgZm9yIGBuZ01lc3NhZ2VzYCBpcyB0byBkaXNwbGF5IGVycm9yIG1lc3NhZ2VzIGZvciBpbnB1dHMgdXNpbmcgdGhlIGAkZXJyb3JgIG9iamVjdCBleHBvc2VkIGJ5IHRoZVxuICoge0BsaW5rIG5nTW9kZWwgbmdNb2RlbH0gZGlyZWN0aXZlLlxuICpcbiAqIFRoZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZSBhcmUgbWF0Y2hlZCB0byB0aGUgY29sbGVjdGlvbiBrZXlzIGJ5IGEgYG5nTWVzc2FnZWAgb3JcbiAqIGBuZ01lc3NhZ2VFeHBgIGRpcmVjdGl2ZS4gVGhlIHZhbHVlIG9mIHRoZXNlIGF0dHJpYnV0ZXMgbXVzdCBtYXRjaCBhIGtleSBpbiB0aGUgY29sbGVjdGlvbiB0aGF0IGlzIHByb3ZpZGVkIGJ5XG4gKiB0aGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZS5cbiAqXG4gKiBDb25zaWRlciB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIHdoaWNoIGlsbHVzdHJhdGVzIGEgdHlwaWNhbCB1c2UgY2FzZSBvZiBgbmdNZXNzYWdlc2AuIFdpdGhpbiB0aGUgZm9ybSBgbXlGb3JtYCB3ZVxuICogaGF2ZSBhIHRleHQgaW5wdXQgbmFtZWQgYG15RmllbGRgIHdoaWNoIGlzIGJvdW5kIHRvIHRoZSBzY29wZSB2YXJpYWJsZSBgZmllbGRgIHVzaW5nIHRoZSB7QGxpbmsgbmdNb2RlbCBuZ01vZGVsfVxuICogZGlyZWN0aXZlLlxuICpcbiAqIFRoZSBgbXlGaWVsZGAgZmllbGQgaXMgYSByZXF1aXJlZCBpbnB1dCBvZiB0eXBlIGBlbWFpbGAgd2l0aCBhIG1heGltdW0gbGVuZ3RoIG9mIDE1IGNoYXJhY3RlcnMuXG4gKlxuICogYGBgaHRtbFxuICogPGZvcm0gbmFtZT1cIm15Rm9ybVwiPlxuICogICA8bGFiZWw+XG4gKiAgICAgRW50ZXIgdGV4dDpcbiAqICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmctbW9kZWw9XCJmaWVsZFwiIG5hbWU9XCJteUZpZWxkXCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiMTVcIiAvPlxuICogICA8L2xhYmVsPlxuICogICA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RmllbGQuJGVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5QbGVhc2UgZW50ZXIgYSB2YWx1ZSBmb3IgdGhpcyBmaWVsZC48L2Rpdj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJlbWFpbFwiPlRoaXMgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuPC9kaXY+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwibWF4bGVuZ3RoXCI+VGhpcyBmaWVsZCBjYW4gYmUgYXQgbW9zdCAxNSBjaGFyYWN0ZXJzIGxvbmcuPC9kaXY+XG4gKiAgIDwvZGl2PlxuICogPC9mb3JtPlxuICogYGBgXG4gKlxuICogSW4gb3JkZXIgdG8gc2hvdyBlcnJvciBtZXNzYWdlcyBjb3JyZXNwb25kaW5nIHRvIGBteUZpZWxkYCB3ZSBmaXJzdCBjcmVhdGUgYW4gZWxlbWVudCB3aXRoIGFuIGBuZ01lc3NhZ2VzYCBhdHRyaWJ1dGVcbiAqIHNldCB0byB0aGUgYCRlcnJvcmAgb2JqZWN0IG93bmVkIGJ5IHRoZSBgbXlGaWVsZGAgaW5wdXQgaW4gb3VyIGBteUZvcm1gIGZvcm0uXG4gKlxuICogV2l0aGluIHRoaXMgZWxlbWVudCB3ZSB0aGVuIGNyZWF0ZSBzZXBhcmF0ZSBlbGVtZW50cyBmb3IgZWFjaCBvZiB0aGUgcG9zc2libGUgZXJyb3JzIHRoYXQgYG15RmllbGRgIGNvdWxkIGhhdmUuXG4gKiBUaGUgYG5nTWVzc2FnZWAgYXR0cmlidXRlIGlzIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBlbGVtZW50KHMpIHdpbGwgYXBwZWFyIGZvciB3aGljaCBlcnJvciAtIGZvciBleGFtcGxlLFxuICogc2V0dGluZyBgbmctbWVzc2FnZT1cInJlcXVpcmVkXCJgIHNwZWNpZmllcyB0aGF0IHRoaXMgcGFydGljdWxhciBlbGVtZW50IHNob3VsZCBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZVxuICogaXMgbm8gdmFsdWUgcHJlc2VudCBmb3IgdGhlIHJlcXVpcmVkIGZpZWxkIGBteUZpZWxkYCAoYmVjYXVzZSB0aGUga2V5IGByZXF1aXJlZGAgd2lsbCBiZSBgdHJ1ZWAgaW4gdGhlIG9iamVjdFxuICogYG15Rm9ybS5teUZpZWxkLiRlcnJvcmApLlxuICpcbiAqICMjIyBNZXNzYWdlIG9yZGVyXG4gKlxuICogQnkgZGVmYXVsdCwgYG5nTWVzc2FnZXNgIHdpbGwgb25seSBkaXNwbGF5IG9uZSBtZXNzYWdlIGZvciBhIHBhcnRpY3VsYXIga2V5L3ZhbHVlIGNvbGxlY3Rpb24gYXQgYW55IHRpbWUuIElmIG1vcmVcbiAqIHRoYW4gb25lIG1lc3NhZ2UgKG9yIGVycm9yKSBrZXkgaXMgY3VycmVudGx5IHRydWUsIHRoZW4gd2hpY2ggbWVzc2FnZSBpcyBzaG93biBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciBvZiBtZXNzYWdlc1xuICogaW4gdGhlIEhUTUwgdGVtcGxhdGUgY29kZSAobWVzc2FnZXMgZGVjbGFyZWQgZmlyc3QgYXJlIHByaW9yaXRpc2VkKS4gVGhpcyBtZWNoYW5pc20gbWVhbnMgdGhlIGRldmVsb3BlciBkb2VzIG5vdCBoYXZlXG4gKiB0byBwcmlvcml0aXplIG1lc3NhZ2VzIHVzaW5nIGN1c3RvbSBKYXZhU2NyaXB0IGNvZGUuXG4gKlxuICogR2l2ZW4gdGhlIGZvbGxvd2luZyBlcnJvciBvYmplY3QgZm9yIG91ciBleGFtcGxlICh3aGljaCBpbmZvcm1zIHVzIHRoYXQgdGhlIGZpZWxkIGBteUZpZWxkYCBjdXJyZW50bHkgaGFzIGJvdGggdGhlXG4gKiBgcmVxdWlyZWRgIGFuZCBgZW1haWxgIGVycm9ycyk6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogPCEtLSBrZWVwIGluIG1pbmQgdGhhdCBuZ01vZGVsIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGVzZSBlcnJvciBmbGFncyAtLT5cbiAqIG15RmllbGQuJGVycm9yID0geyByZXF1aXJlZCA6IHRydWUsIGVtYWlsOiB0cnVlLCBtYXhsZW5ndGg6IGZhbHNlIH07XG4gKiBgYGBcbiAqIFRoZSBgcmVxdWlyZWRgIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgc2luY2UgaXQgYXBwZWFycyBiZWZvcmUgdGhlIGBlbWFpbGAgbWVzc2FnZSBpbiB0aGUgRE9NLlxuICogT25jZSB0aGUgdXNlciB0eXBlcyBhIHNpbmdsZSBjaGFyYWN0ZXIsIHRoZSBgcmVxdWlyZWRgIG1lc3NhZ2Ugd2lsbCBkaXNhcHBlYXIgKHNpbmNlIHRoZSBmaWVsZCBub3cgaGFzIGEgdmFsdWUpXG4gKiBidXQgdGhlIGBlbWFpbGAgbWVzc2FnZSB3aWxsIGJlIHZpc2libGUgYmVjYXVzZSBpdCBpcyBzdGlsbCBhcHBsaWNhYmxlLlxuICpcbiAqICMjIyBEaXNwbGF5aW5nIG11bHRpcGxlIG1lc3NhZ2VzIGF0IHRoZSBzYW1lIHRpbWVcbiAqXG4gKiBXaGlsZSBgbmdNZXNzYWdlc2Agd2lsbCBieSBkZWZhdWx0IG9ubHkgZGlzcGxheSBvbmUgZXJyb3IgZWxlbWVudCBhdCBhIHRpbWUsIHRoZSBgbmctbWVzc2FnZXMtbXVsdGlwbGVgIGF0dHJpYnV0ZSBjYW5cbiAqIGJlIGFwcGxpZWQgdG8gdGhlIGBuZ01lc3NhZ2VzYCBjb250YWluZXIgZWxlbWVudCB0byBjYXVzZSBpdCB0byBkaXNwbGF5IGFsbCBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2VzIGF0IG9uY2U6XG4gKlxuICogYGBgaHRtbFxuICogPCEtLSBhdHRyaWJ1dGUtc3R5bGUgdXNhZ2UgLS0+XG4gKiA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RmllbGQuJGVycm9yXCIgbmctbWVzc2FnZXMtbXVsdGlwbGU+Li4uPC9kaXY+XG4gKlxuICogPCEtLSBlbGVtZW50LXN0eWxlIHVzYWdlIC0tPlxuICogPG5nLW1lc3NhZ2VzIGZvcj1cIm15Rm9ybS5teUZpZWxkLiRlcnJvclwiIG11bHRpcGxlPi4uLjwvbmctbWVzc2FnZXM+XG4gKiBgYGBcbiAqXG4gKiAjIyBSZXVzaW5nIGFuZCBPdmVycmlkaW5nIE1lc3NhZ2VzXG4gKiBJbiBhZGRpdGlvbiB0byBwcmlvcml0aXphdGlvbiwgbmdNZXNzYWdlcyBhbHNvIGFsbG93cyBmb3IgaW5jbHVkaW5nIG1lc3NhZ2VzIGZyb20gYSByZW1vdGUgb3IgYW4gaW5saW5lXG4gKiB0ZW1wbGF0ZS4gVGhpcyBhbGxvd3MgZm9yIGdlbmVyaWMgY29sbGVjdGlvbiBvZiBtZXNzYWdlcyB0byBiZSByZXVzZWQgYWNyb3NzIG11bHRpcGxlIHBhcnRzIG9mIGFuXG4gKiBhcHBsaWNhdGlvbi5cbiAqXG4gKiBgYGBodG1sXG4gKiA8c2NyaXB0IHR5cGU9XCJ0ZXh0L25nLXRlbXBsYXRlXCIgaWQ9XCJlcnJvci1tZXNzYWdlc1wiPlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwibWlubGVuZ3RoXCI+VGhpcyBmaWVsZCBpcyB0b28gc2hvcnQ8L2Rpdj5cbiAqIDwvc2NyaXB0PlxuICpcbiAqIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlGaWVsZC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcy1pbmNsdWRlPVwiZXJyb3ItbWVzc2FnZXNcIj48L2Rpdj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogSG93ZXZlciwgaW5jbHVkaW5nIGdlbmVyaWMgbWVzc2FnZXMgbWF5IG5vdCBiZSB1c2VmdWwgZW5vdWdoIHRvIG1hdGNoIGFsbCBpbnB1dCBmaWVsZHMsIHRoZXJlZm9yZSxcbiAqIGBuZ01lc3NhZ2VzYCBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBvdmVycmlkZSBtZXNzYWdlcyBkZWZpbmVkIGluIHRoZSByZW1vdGUgdGVtcGxhdGUgYnkgcmVkZWZpbmluZ1xuICogdGhlbSB3aXRoaW4gdGhlIGRpcmVjdGl2ZSBjb250YWluZXIuXG4gKlxuICogYGBgaHRtbFxuICogPCEtLSBhIGdlbmVyaWMgdGVtcGxhdGUgb2YgZXJyb3IgbWVzc2FnZXMga25vd24gYXMgXCJteS1jdXN0b20tbWVzc2FnZXNcIiAtLT5cbiAqIDxzY3JpcHQgdHlwZT1cInRleHQvbmctdGVtcGxhdGVcIiBpZD1cIm15LWN1c3RvbS1tZXNzYWdlc1wiPlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwibWlubGVuZ3RoXCI+VGhpcyBmaWVsZCBpcyB0b28gc2hvcnQ8L2Rpdj5cbiAqIDwvc2NyaXB0PlxuICpcbiAqIDxmb3JtIG5hbWU9XCJteUZvcm1cIj5cbiAqICAgPGxhYmVsPlxuICogICAgIEVtYWlsIGFkZHJlc3NcbiAqICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAqICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gKiAgICAgICAgICAgIG5hbWU9XCJteUVtYWlsXCJcbiAqICAgICAgICAgICAgbmctbW9kZWw9XCJlbWFpbFwiXG4gKiAgICAgICAgICAgIG1pbmxlbmd0aD1cIjVcIlxuICogICAgICAgICAgICByZXF1aXJlZCAvPlxuICogICA8L2xhYmVsPlxuICogICA8IS0tIGFueSBuZy1tZXNzYWdlIGVsZW1lbnRzIHRoYXQgYXBwZWFyIEJFRk9SRSB0aGUgbmctbWVzc2FnZXMtaW5jbHVkZSB3aWxsXG4gKiAgICAgICAgb3ZlcnJpZGUgdGhlIG1lc3NhZ2VzIHByZXNlbnQgaW4gdGhlIG5nLW1lc3NhZ2VzLWluY2x1ZGUgdGVtcGxhdGUgLS0+XG4gKiAgIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlFbWFpbC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgICA8IS0tIHRoaXMgcmVxdWlyZWQgbWVzc2FnZSBoYXMgb3ZlcnJpZGRlbiB0aGUgdGVtcGxhdGUgbWVzc2FnZSAtLT5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPllvdSBkaWQgbm90IGVudGVyIHlvdXIgZW1haWwgYWRkcmVzczwvZGl2PlxuICpcbiAqICAgICA8IS0tIHRoaXMgaXMgYSBicmFuZCBuZXcgbWVzc2FnZSBhbmQgd2lsbCBhcHBlYXIgbGFzdCBpbiB0aGUgcHJpb3JpdGl6YXRpb24gLS0+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwiZW1haWxcIj5Zb3VyIGVtYWlsIGFkZHJlc3MgaXMgaW52YWxpZDwvZGl2PlxuICpcbiAqICAgICA8IS0tIGFuZCBoZXJlIGFyZSB0aGUgZ2VuZXJpYyBlcnJvciBtZXNzYWdlcyAtLT5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2VzLWluY2x1ZGU9XCJteS1jdXN0b20tbWVzc2FnZXNcIj48L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKiBgYGBcbiAqXG4gKiBJbiB0aGUgZXhhbXBsZSBIVE1MIGNvZGUgYWJvdmUgdGhlIG1lc3NhZ2UgdGhhdCBpcyBzZXQgb24gcmVxdWlyZWQgd2lsbCBvdmVycmlkZSB0aGUgY29ycmVzcG9uZGluZ1xuICogcmVxdWlyZWQgbWVzc2FnZSBkZWZpbmVkIHdpdGhpbiB0aGUgcmVtb3RlIHRlbXBsYXRlLiBUaGVyZWZvcmUsIHdpdGggcGFydGljdWxhciBpbnB1dCBmaWVsZHMgKHN1Y2hcbiAqIGVtYWlsIGFkZHJlc3NlcywgZGF0ZSBmaWVsZHMsIGF1dG9jb21wbGV0ZSBpbnB1dHMsIGV0Yy4uLiksIHNwZWNpYWxpemVkIGVycm9yIG1lc3NhZ2VzIGNhbiBiZSBhcHBsaWVkXG4gKiB3aGlsZSBtb3JlIGdlbmVyaWMgbWVzc2FnZXMgY2FuIGJlIHVzZWQgdG8gaGFuZGxlIG90aGVyLCBtb3JlIGdlbmVyYWwgaW5wdXQgZXJyb3JzLlxuICpcbiAqICMjIER5bmFtaWMgTWVzc2FnaW5nXG4gKiBuZ01lc3NhZ2VzIGFsc28gc3VwcG9ydHMgdXNpbmcgZXhwcmVzc2lvbnMgdG8gZHluYW1pY2FsbHkgY2hhbmdlIGtleSB2YWx1ZXMuIFVzaW5nIGFycmF5cyBhbmRcbiAqIHJlcGVhdGVycyB0byBsaXN0IG1lc3NhZ2VzIGlzIGFsc28gc3VwcG9ydGVkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvZGUgYmVsb3cgd2lsbCBiZSBhYmxlIHRvXG4gKiBmdWxseSBhZGFwdCBpdHNlbGYgYW5kIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIG1lc3NhZ2Ugd2hlbiBhbnkgb2YgdGhlIGV4cHJlc3Npb24gZGF0YSBjaGFuZ2VzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxmb3JtIG5hbWU9XCJteUZvcm1cIj5cbiAqICAgPGxhYmVsPlxuICogICAgIEVtYWlsIGFkZHJlc3NcbiAqICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbmFtZT1cIm15RW1haWxcIlxuICogICAgICAgICAgICBuZy1tb2RlbD1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbWlubGVuZ3RoPVwiNVwiXG4gKiAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gKiAgIDwvbGFiZWw+XG4gKiAgIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlFbWFpbC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPllvdSBkaWQgbm90IGVudGVyIHlvdXIgZW1haWwgYWRkcmVzczwvZGl2PlxuICogICAgIDxkaXYgbmctcmVwZWF0PVwiZXJyb3JNZXNzYWdlIGluIGVycm9yTWVzc2FnZXNcIj5cbiAqICAgICAgIDwhLS0gdXNlIG5nLW1lc3NhZ2UtZXhwIGZvciBhIG1lc3NhZ2Ugd2hvc2Uga2V5IGlzIGdpdmVuIGJ5IGFuIGV4cHJlc3Npb24gLS0+XG4gKiAgICAgICA8ZGl2IG5nLW1lc3NhZ2UtZXhwPVwiZXJyb3JNZXNzYWdlLnR5cGVcIj57eyBlcnJvck1lc3NhZ2UudGV4dCB9fTwvZGl2PlxuICogICAgIDwvZGl2PlxuICogICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqIGBgYFxuICpcbiAqIFRoZSBgZXJyb3JNZXNzYWdlLnR5cGVgIGV4cHJlc3Npb24gY2FuIGJlIGEgc3RyaW5nIHZhbHVlIG9yIGl0IGNhbiBiZSBhbiBhcnJheSBzb1xuICogdGhhdCBtdWx0aXBsZSBlcnJvcnMgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBlcnJvciBtZXNzYWdlOlxuICpcbiAqIGBgYGh0bWxcbiAqICAgPGxhYmVsPlxuICogICAgIEVtYWlsIGFkZHJlc3NcbiAqICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbmctbW9kZWw9XCJkYXRhLmVtYWlsXCJcbiAqICAgICAgICAgICAgbmFtZT1cIm15RW1haWxcIlxuICogICAgICAgICAgICBuZy1taW5sZW5ndGg9XCI1XCJcbiAqICAgICAgICAgICAgbmctbWF4bGVuZ3RoPVwiMTAwXCJcbiAqICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAqICAgPC9sYWJlbD5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUVtYWlsLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICAgIDxkaXYgbmctbWVzc2FnZS1leHA9XCIncmVxdWlyZWQnXCI+WW91IGRpZCBub3QgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzPC9kaXY+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlLWV4cD1cIlsnbWlubGVuZ3RoJywgJ21heGxlbmd0aCddXCI+XG4gKiAgICAgICBZb3VyIGVtYWlsIG11c3QgYmUgYmV0d2VlbiA1IGFuZCAxMDAgY2hhcmFjdGVycyBsb25nXG4gKiAgICAgPC9kaXY+XG4gKiAgIDwvZGl2PlxuICogYGBgXG4gKlxuICogRmVlbCBmcmVlIHRvIHVzZSBvdGhlciBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXMgc3VjaCBhcyBuZy1pZiBhbmQgbmctc3dpdGNoIHRvIGZ1cnRoZXIgY29udHJvbFxuICogd2hhdCBtZXNzYWdlcyBhcmUgYWN0aXZlIGFuZCB3aGVuLiBCZSBjYXJlZnVsLCBpZiB5b3UgcGxhY2UgbmctbWVzc2FnZSBvbiB0aGUgc2FtZSBlbGVtZW50XG4gKiBhcyB0aGVzZSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXMsIEFuZ3VsYXIgbWF5IG5vdCBiZSBhYmxlIHRvIGRldGVybWluZSBpZiBhIG1lc3NhZ2UgaXMgYWN0aXZlXG4gKiBvciBub3QuIFRoZXJlZm9yZSBpdCBpcyBiZXN0IHRvIHBsYWNlIHRoZSBuZy1tZXNzYWdlIG9uIGEgY2hpbGQgZWxlbWVudCBvZiB0aGUgc3RydWN0dXJhbFxuICogZGlyZWN0aXZlLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlFbWFpbC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgPGRpdiBuZy1pZj1cInNob3dSZXF1aXJlZEVycm9yXCI+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5QbGVhc2UgZW50ZXIgc29tZXRoaW5nPC9kaXY+XG4gKiAgIDwvZGl2PlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiAjIyBBbmltYXRpb25zXG4gKiBJZiB0aGUgYG5nQW5pbWF0ZWAgbW9kdWxlIGlzIGFjdGl2ZSB3aXRoaW4gdGhlIGFwcGxpY2F0aW9uIHRoZW4gdGhlIGBuZ01lc3NhZ2VzYCwgYG5nTWVzc2FnZWAgYW5kXG4gKiBgbmdNZXNzYWdlRXhwYCBkaXJlY3RpdmVzIHdpbGwgdHJpZ2dlciBhbmltYXRpb25zIHdoZW5ldmVyIGFueSBtZXNzYWdlcyBhcmUgYWRkZWQgYW5kIHJlbW92ZWQgZnJvbVxuICogdGhlIERPTSBieSB0aGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZS5cbiAqXG4gKiBXaGVuZXZlciB0aGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZSBjb250YWlucyBvbmUgb3IgbW9yZSB2aXNpYmxlIG1lc3NhZ2VzIHRoZW4gdGhlIGAubmctYWN0aXZlYCBDU1NcbiAqIGNsYXNzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQuIFRoZSBgLm5nLWluYWN0aXZlYCBDU1MgY2xhc3Mgd2lsbCBiZSBhcHBsaWVkIHdoZW4gdGhlcmUgYXJlIG5vXG4gKiBtZXNzYWdlcyBwcmVzZW50LiBUaGVyZWZvcmUsIENTUyB0cmFuc2l0aW9ucyBhbmQga2V5ZnJhbWVzIGFzIHdlbGwgYXMgSmF2YVNjcmlwdCBhbmltYXRpb25zIGNhblxuICogaG9vayBpbnRvIHRoZSBhbmltYXRpb25zIHdoZW5ldmVyIHRoZXNlIGNsYXNzZXMgYXJlIGFkZGVkL3JlbW92ZWQuXG4gKlxuICogTGV0J3Mgc2F5IHRoYXQgb3VyIEhUTUwgY29kZSBmb3Igb3VyIG1lc3NhZ2VzIGNvbnRhaW5lciBsb29rcyBsaWtlIHNvOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgbmctbWVzc2FnZXM9XCJteU1lc3NhZ2VzXCIgY2xhc3M9XCJteS1tZXNzYWdlc1wiIHJvbGU9XCJhbGVydFwiPlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJhbGVydFwiIGNsYXNzPVwic29tZS1tZXNzYWdlXCI+Li4uPC9kaXY+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cImZhaWxcIiBjbGFzcz1cInNvbWUtbWVzc2FnZVwiPi4uLjwvZGl2PlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBUaGVuIHRoZSBDU1MgYW5pbWF0aW9uIGNvZGUgZm9yIHRoZSBtZXNzYWdlIGNvbnRhaW5lciBsb29rcyBsaWtlIHNvOlxuICpcbiAqIGBgYGNzc1xuICogLm15LW1lc3NhZ2VzIHtcbiAqICAgdHJhbnNpdGlvbjoxcyBsaW5lYXIgYWxsO1xuICogfVxuICogLm15LW1lc3NhZ2VzLm5nLWFjdGl2ZSB7XG4gKiAgIC8vIG1lc3NhZ2VzIGFyZSB2aXNpYmxlXG4gKiB9XG4gKiAubXktbWVzc2FnZXMubmctaW5hY3RpdmUge1xuICogICAvLyBtZXNzYWdlcyBhcmUgaGlkZGVuXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuZXZlciBhbiBpbm5lciBtZXNzYWdlIGlzIGF0dGFjaGVkIChiZWNvbWVzIHZpc2libGUpIG9yIHJlbW92ZWQgKGJlY29tZXMgaGlkZGVuKSB0aGVuIHRoZSBlbnRlclxuICogYW5kIGxlYXZlIGFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgZm9yIGVhY2ggcGFydGljdWxhciBlbGVtZW50IGJvdW5kIHRvIHRoZSBgbmdNZXNzYWdlYCBkaXJlY3RpdmUuXG4gKlxuICogVGhlcmVmb3JlLCB0aGUgQ1NTIGNvZGUgZm9yIHRoZSBpbm5lciBtZXNzYWdlcyBsb29rcyBsaWtlIHNvOlxuICpcbiAqIGBgYGNzc1xuICogLnNvbWUtbWVzc2FnZSB7XG4gKiAgIHRyYW5zaXRpb246MXMgbGluZWFyIGFsbDtcbiAqIH1cbiAqXG4gKiAuc29tZS1tZXNzYWdlLm5nLWVudGVyIHt9XG4gKiAuc29tZS1tZXNzYWdlLm5nLWVudGVyLm5nLWVudGVyLWFjdGl2ZSB7fVxuICpcbiAqIC5zb21lLW1lc3NhZ2UubmctbGVhdmUge31cbiAqIC5zb21lLW1lc3NhZ2UubmctbGVhdmUubmctbGVhdmUtYWN0aXZlIHt9XG4gKiBgYGBcbiAqXG4gKiB7QGxpbmsgbmdBbmltYXRlIENsaWNrIGhlcmV9IHRvIGxlYXJuIGhvdyB0byB1c2UgSmF2YVNjcmlwdCBhbmltYXRpb25zIG9yIHRvIGxlYXJuIG1vcmUgYWJvdXQgbmdBbmltYXRlLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnbmdNZXNzYWdlcycsIFtdLCBmdW5jdGlvbiBpbml0QW5ndWxhckhlbHBlcnMoKSB7XG4gIC8vIEFjY2VzcyBoZWxwZXJzIGZyb20gYW5ndWxhciBjb3JlLlxuICAvLyBEbyBpdCBpbnNpZGUgYSBgY29uZmlnYCBibG9jayB0byBlbnN1cmUgYHdpbmRvdy5hbmd1bGFyYCBpcyBhdmFpbGFibGUuXG4gIGZvckVhY2ggPSBhbmd1bGFyLmZvckVhY2g7XG4gIGlzQXJyYXkgPSBhbmd1bGFyLmlzQXJyYXk7XG4gIGlzU3RyaW5nID0gYW5ndWxhci5pc1N0cmluZztcbiAganFMaXRlID0gYW5ndWxhci5lbGVtZW50O1xufSlcblxuICAvKipcbiAgICogQG5nZG9jIGRpcmVjdGl2ZVxuICAgKiBAbW9kdWxlIG5nTWVzc2FnZXNcbiAgICogQG5hbWUgbmdNZXNzYWdlc1xuICAgKiBAcmVzdHJpY3QgQUVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGBuZ01lc3NhZ2VzYCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGlzIGRlc2lnbmVkIHRvIHNob3cgYW5kIGhpZGUgbWVzc2FnZXMgYmFzZWQgb24gdGhlIHN0YXRlXG4gICAqIG9mIGEga2V5L3ZhbHVlIG9iamVjdCB0aGF0IGl0IGxpc3RlbnMgb24uIFRoZSBkaXJlY3RpdmUgaXRzZWxmIGNvbXBsZW1lbnRzIGVycm9yIG1lc3NhZ2VcbiAgICogcmVwb3J0aW5nIHdpdGggdGhlIGBuZ01vZGVsYCAkZXJyb3Igb2JqZWN0ICh3aGljaCBzdG9yZXMgYSBrZXkvdmFsdWUgc3RhdGUgb2YgdmFsaWRhdGlvbiBlcnJvcnMpLlxuICAgKlxuICAgKiBgbmdNZXNzYWdlc2AgbWFuYWdlcyB0aGUgc3RhdGUgb2YgaW50ZXJuYWwgbWVzc2FnZXMgd2l0aGluIGl0cyBjb250YWluZXIgZWxlbWVudC4gVGhlIGludGVybmFsXG4gICAqIG1lc3NhZ2VzIHVzZSB0aGUgYG5nTWVzc2FnZWAgZGlyZWN0aXZlIGFuZCB3aWxsIGJlIGluc2VydGVkL3JlbW92ZWQgZnJvbSB0aGUgcGFnZSBkZXBlbmRpbmdcbiAgICogb24gaWYgdGhleSdyZSBwcmVzZW50IHdpdGhpbiB0aGUga2V5L3ZhbHVlIG9iamVjdC4gQnkgZGVmYXVsdCwgb25seSBvbmUgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZFxuICAgKiBhdCBhIHRpbWUgYW5kIHRoaXMgZGVwZW5kcyBvbiB0aGUgcHJpb3JpdGl6YXRpb24gb2YgdGhlIG1lc3NhZ2VzIHdpdGhpbiB0aGUgdGVtcGxhdGUuIChUaGlzIGNhblxuICAgKiBiZSBjaGFuZ2VkIGJ5IHVzaW5nIHRoZSBgbmctbWVzc2FnZXMtbXVsdGlwbGVgIG9yIGBtdWx0aXBsZWAgYXR0cmlidXRlIG9uIHRoZSBkaXJlY3RpdmUgY29udGFpbmVyLilcbiAgICpcbiAgICogQSByZW1vdGUgdGVtcGxhdGUgY2FuIGFsc28gYmUgdXNlZCB0byBwcm9tb3RlIG1lc3NhZ2UgcmV1c2FiaWxpdHkgYW5kIG1lc3NhZ2VzIGNhbiBhbHNvIGJlXG4gICAqIG92ZXJyaWRkZW4uXG4gICAqXG4gICAqIHtAbGluayBtb2R1bGU6bmdNZXNzYWdlcyBDbGljayBoZXJlfSB0byBsZWFybiBtb3JlIGFib3V0IGBuZ01lc3NhZ2VzYCBhbmQgYG5nTWVzc2FnZWAuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBodG1sXG4gICAqIDwhLS0gdXNpbmcgYXR0cmlidXRlIGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxBTlkgbmctbWVzc2FnZXM9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlPVwic3RyaW5nVmFsdWVcIj4uLi48L0FOWT5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2U9XCJzdHJpbmdWYWx1ZTEsIHN0cmluZ1ZhbHVlMiwgLi4uXCI+Li4uPC9BTlk+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlLWV4cD1cImV4cHJlc3Npb25WYWx1ZVwiPi4uLjwvQU5ZPlxuICAgKiA8L0FOWT5cbiAgICpcbiAgICogPCEtLSBvciBieSB1c2luZyBlbGVtZW50IGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxuZy1tZXNzYWdlcyBmb3I9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbj1cInN0cmluZ1ZhbHVlXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW49XCJzdHJpbmdWYWx1ZTEsIHN0cmluZ1ZhbHVlMiwgLi4uXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW4tZXhwPVwiZXhwcmVzc2lvblZhbHVlXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiA8L25nLW1lc3NhZ2VzPlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5nTWVzc2FnZXMgYW4gYW5ndWxhciBleHByZXNzaW9uIGV2YWx1YXRpbmcgdG8gYSBrZXkvdmFsdWUgb2JqZWN0XG4gICAqICAgICAgICAgICAgICAgICAodGhpcyBpcyB0eXBpY2FsbHkgdGhlICRlcnJvciBvYmplY3Qgb24gYW4gbmdNb2RlbCBpbnN0YW5jZSkuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gbmdNZXNzYWdlc011bHRpcGxlfG11bHRpcGxlIHdoZW4gc2V0LCBhbGwgbWVzc2FnZXMgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aCB0cnVlXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDxleGFtcGxlIG5hbWU9XCJuZ01lc3NhZ2VzLWRpcmVjdGl2ZVwiIG1vZHVsZT1cIm5nTWVzc2FnZXNFeGFtcGxlXCJcbiAgICogICAgICAgICAgZGVwcz1cImFuZ3VsYXItbWVzc2FnZXMuanNcIlxuICAgKiAgICAgICAgICBhbmltYXRpb25zPVwidHJ1ZVwiIGZpeEJhc2U9XCJ0cnVlXCI+XG4gICAqICAgPGZpbGUgbmFtZT1cImluZGV4Lmh0bWxcIj5cbiAgICogICAgIDxmb3JtIG5hbWU9XCJteUZvcm1cIj5cbiAgICogICAgICAgPGxhYmVsPlxuICAgKiAgICAgICAgIEVudGVyIHlvdXIgbmFtZTpcbiAgICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgKiAgICAgICAgICAgICAgICBuYW1lPVwibXlOYW1lXCJcbiAgICogICAgICAgICAgICAgICAgbmctbW9kZWw9XCJuYW1lXCJcbiAgICogICAgICAgICAgICAgICAgbmctbWlubGVuZ3RoPVwiNVwiXG4gICAqICAgICAgICAgICAgICAgIG5nLW1heGxlbmd0aD1cIjIwXCJcbiAgICogICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAgICogICAgICAgPC9sYWJlbD5cbiAgICogICAgICAgPHByZT5teUZvcm0ubXlOYW1lLiRlcnJvciA9IHt7IG15Rm9ybS5teU5hbWUuJGVycm9yIHwganNvbiB9fTwvcHJlPlxuICAgKlxuICAgKiAgICAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15TmFtZS4kZXJyb3JcIiBzdHlsZT1cImNvbG9yOm1hcm9vblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgICAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+WW91IGRpZCBub3QgZW50ZXIgYSBmaWVsZDwvZGl2PlxuICAgKiAgICAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm1pbmxlbmd0aFwiPllvdXIgZmllbGQgaXMgdG9vIHNob3J0PC9kaXY+XG4gICAqICAgICAgICAgPGRpdiBuZy1tZXNzYWdlPVwibWF4bGVuZ3RoXCI+WW91ciBmaWVsZCBpcyB0b28gbG9uZzwvZGl2PlxuICAgKiAgICAgICA8L2Rpdj5cbiAgICogICAgIDwvZm9ybT5cbiAgICogICA8L2ZpbGU+XG4gICAqICAgPGZpbGUgbmFtZT1cInNjcmlwdC5qc1wiPlxuICAgKiAgICAgYW5ndWxhci5tb2R1bGUoJ25nTWVzc2FnZXNFeGFtcGxlJywgWyduZ01lc3NhZ2VzJ10pO1xuICAgKiAgIDwvZmlsZT5cbiAgICogPC9leGFtcGxlPlxuICAgKi9cbiAgLmRpcmVjdGl2ZSgnbmdNZXNzYWdlcycsIFsnJGFuaW1hdGUnLCBmdW5jdGlvbigkYW5pbWF0ZSkge1xuICAgIHZhciBBQ1RJVkVfQ0xBU1MgPSAnbmctYWN0aXZlJztcbiAgICB2YXIgSU5BQ1RJVkVfQ0xBU1MgPSAnbmctaW5hY3RpdmUnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVpcmU6ICduZ01lc3NhZ2VzJyxcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogWyckZWxlbWVudCcsICckc2NvcGUnLCAnJGF0dHJzJywgZnVuY3Rpb24gTmdNZXNzYWdlc0N0cmwoJGVsZW1lbnQsICRzY29wZSwgJGF0dHJzKSB7XG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcbiAgICAgICAgdmFyIGxhdGVzdEtleSA9IDA7XG4gICAgICAgIHZhciBuZXh0QXR0YWNoSWQgPSAwO1xuXG4gICAgICAgIHRoaXMuZ2V0QXR0YWNoSWQgPSBmdW5jdGlvbiBnZXRBdHRhY2hJZCgpIHsgcmV0dXJuIG5leHRBdHRhY2hJZCsrOyB9O1xuXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMubWVzc2FnZXMgPSB7fTtcbiAgICAgICAgdmFyIHJlbmRlckxhdGVyLCBjYWNoZWRDb2xsZWN0aW9uO1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgICAgICAgIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uIHx8IHt9O1xuXG4gICAgICAgICAgcmVuZGVyTGF0ZXIgPSBmYWxzZTtcbiAgICAgICAgICBjYWNoZWRDb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcblxuICAgICAgICAgIC8vIHRoaXMgaXMgdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGVtcHR5IG9yIGlmIHRoZSBhdHRyaWJ1dGUgdmFsdWUgaXMgdHJ1dGh5XG4gICAgICAgICAgdmFyIG11bHRpcGxlID0gaXNBdHRyVHJ1dGh5KCRzY29wZSwgJGF0dHJzLm5nTWVzc2FnZXNNdWx0aXBsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc0F0dHJUcnV0aHkoJHNjb3BlLCAkYXR0cnMubXVsdGlwbGUpO1xuXG4gICAgICAgICAgdmFyIHVubWF0Y2hlZE1lc3NhZ2VzID0gW107XG4gICAgICAgICAgdmFyIG1hdGNoZWRLZXlzID0ge307XG4gICAgICAgICAgdmFyIG1lc3NhZ2VJdGVtID0gY3RybC5oZWFkO1xuICAgICAgICAgIHZhciBtZXNzYWdlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB2YXIgdG90YWxNZXNzYWdlcyA9IDA7XG5cbiAgICAgICAgICAvLyB3ZSB1c2UgIT0gaW5zdGVhZCBvZiAhPT0gdG8gYWxsb3cgZm9yIGJvdGggdW5kZWZpbmVkIGFuZCBudWxsIHZhbHVlc1xuICAgICAgICAgIHdoaWxlIChtZXNzYWdlSXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0b3RhbE1lc3NhZ2VzKys7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZUN0cmwgPSBtZXNzYWdlSXRlbS5tZXNzYWdlO1xuXG4gICAgICAgICAgICB2YXIgbWVzc2FnZVVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghbWVzc2FnZUZvdW5kKSB7XG4gICAgICAgICAgICAgIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZVVzZWQgJiYgdHJ1dGh5KHZhbHVlKSAmJiBtZXNzYWdlQ3RybC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdG8gcHJldmVudCB0aGUgc2FtZSBlcnJvciBuYW1lIGZyb20gc2hvd2luZyB1cCB0d2ljZVxuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRLZXlzW2tleV0pIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIG1hdGNoZWRLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlVXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlQ3RybC5hdHRhY2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWVzc2FnZVVzZWQpIHtcbiAgICAgICAgICAgICAgLy8gdW5sZXNzIHdlIHdhbnQgdG8gZGlzcGxheSBtdWx0aXBsZSBtZXNzYWdlcyB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgICAvLyBzZXQgYSBmbGFnIGhlcmUgdG8gYXZvaWQgZGlzcGxheWluZyB0aGUgbmV4dCBtZXNzYWdlIGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgIG1lc3NhZ2VGb3VuZCA9ICFtdWx0aXBsZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVubWF0Y2hlZE1lc3NhZ2VzLnB1c2gobWVzc2FnZUN0cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZXNzYWdlSXRlbSA9IG1lc3NhZ2VJdGVtLm5leHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yRWFjaCh1bm1hdGNoZWRNZXNzYWdlcywgZnVuY3Rpb24obWVzc2FnZUN0cmwpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VDdHJsLmRldGFjaCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHVubWF0Y2hlZE1lc3NhZ2VzLmxlbmd0aCAhPT0gdG90YWxNZXNzYWdlcykge1xuICAgICAgICAgICAgJGFuaW1hdGUuc2V0Q2xhc3MoJGVsZW1lbnQsIEFDVElWRV9DTEFTUywgSU5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYW5pbWF0ZS5zZXRDbGFzcygkZWxlbWVudCwgSU5BQ1RJVkVfQ0xBU1MsIEFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKCRhdHRycy5uZ01lc3NhZ2VzIHx8ICRhdHRyc1snZm9yJ10sIGN0cmwucmVuZGVyKTtcblxuICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyBkZXN0cm95ZWQsIHByb2FjdGl2ZWx5IGRlc3Ryb3kgYWxsIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBtZXNzYWdlc1xuICAgICAgICAkZWxlbWVudC5vbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBmb3JFYWNoKG1lc3NhZ2VzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLm1lc3NhZ2UuZGV0YWNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVSZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIXJlbmRlckxhdGVyKSB7XG4gICAgICAgICAgICByZW5kZXJMYXRlciA9IHRydWU7XG4gICAgICAgICAgICAkc2NvcGUuJGV2YWxBc3luYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHJlbmRlckxhdGVyICYmIGNhY2hlZENvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjdHJsLnJlbmRlcihjYWNoZWRDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbihjb21tZW50LCBtZXNzYWdlQ3RybCkge1xuICAgICAgICAgIHZhciBuZXh0S2V5ID0gbGF0ZXN0S2V5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgbWVzc2FnZXNbbmV4dEtleV0gPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlQ3RybFxuICAgICAgICAgIH07XG4gICAgICAgICAgaW5zZXJ0TWVzc2FnZU5vZGUoJGVsZW1lbnRbMF0sIGNvbW1lbnQsIG5leHRLZXkpO1xuICAgICAgICAgIGNvbW1lbnQuJCRuZ01lc3NhZ2VOb2RlID0gbmV4dEtleTtcbiAgICAgICAgICBsYXRlc3RLZXkrKztcblxuICAgICAgICAgIGN0cmwucmVSZW5kZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXIgPSBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgICAgICAgdmFyIGtleSA9IGNvbW1lbnQuJCRuZ01lc3NhZ2VOb2RlO1xuICAgICAgICAgIGRlbGV0ZSBjb21tZW50LiQkbmdNZXNzYWdlTm9kZTtcbiAgICAgICAgICByZW1vdmVNZXNzYWdlTm9kZSgkZWxlbWVudFswXSwgY29tbWVudCwga2V5KTtcbiAgICAgICAgICBkZWxldGUgbWVzc2FnZXNba2V5XTtcbiAgICAgICAgICBjdHJsLnJlUmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZFByZXZpb3VzTWVzc2FnZShwYXJlbnQsIGNvbW1lbnQpIHtcbiAgICAgICAgICB2YXIgcHJldk5vZGUgPSBjb21tZW50O1xuICAgICAgICAgIHZhciBwYXJlbnRMb29rdXAgPSBbXTtcblxuICAgICAgICAgIHdoaWxlIChwcmV2Tm9kZSAmJiBwcmV2Tm9kZSAhPT0gcGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJldktleSA9IHByZXZOb2RlLiQkbmdNZXNzYWdlTm9kZTtcbiAgICAgICAgICAgIGlmIChwcmV2S2V5ICYmIHByZXZLZXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlc1twcmV2S2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGl2ZSBkZWVwZXIgaW50byB0aGUgRE9NIGFuZCBleGFtaW5lIGl0cyBjaGlsZHJlbiBmb3IgYW55IG5nTWVzc2FnZVxuICAgICAgICAgICAgLy8gY29tbWVudHMgdGhhdCBtYXkgYmUgaW4gYW4gZWxlbWVudCB0aGF0IGFwcGVhcnMgZGVlcGVyIGluIHRoZSBsaXN0XG4gICAgICAgICAgICBpZiAocHJldk5vZGUuY2hpbGROb2Rlcy5sZW5ndGggJiYgcGFyZW50TG9va3VwLmluZGV4T2YocHJldk5vZGUpID09PSAtMSkge1xuICAgICAgICAgICAgICBwYXJlbnRMb29rdXAucHVzaChwcmV2Tm9kZSk7XG4gICAgICAgICAgICAgIHByZXZOb2RlID0gcHJldk5vZGUuY2hpbGROb2Rlc1twcmV2Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2Tm9kZS5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgcHJldk5vZGUgPSBwcmV2Tm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcmV2Tm9kZSA9IHByZXZOb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHBhcmVudExvb2t1cC5wdXNoKHByZXZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRNZXNzYWdlTm9kZShwYXJlbnQsIGNvbW1lbnQsIGtleSkge1xuICAgICAgICAgIHZhciBtZXNzYWdlTm9kZSA9IG1lc3NhZ2VzW2tleV07XG4gICAgICAgICAgaWYgKCFjdHJsLmhlYWQpIHtcbiAgICAgICAgICAgIGN0cmwuaGVhZCA9IG1lc3NhZ2VOb2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmaW5kUHJldmlvdXNNZXNzYWdlKHBhcmVudCwgY29tbWVudCk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZU5vZGUubmV4dCA9IG1hdGNoLm5leHQ7XG4gICAgICAgICAgICAgIG1hdGNoLm5leHQgPSBtZXNzYWdlTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VOb2RlLm5leHQgPSBjdHJsLmhlYWQ7XG4gICAgICAgICAgICAgIGN0cmwuaGVhZCA9IG1lc3NhZ2VOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU1lc3NhZ2VOb2RlKHBhcmVudCwgY29tbWVudCwga2V5KSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2VOb2RlID0gbWVzc2FnZXNba2V5XTtcblxuICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRQcmV2aW91c01lc3NhZ2UocGFyZW50LCBjb21tZW50KTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIG1hdGNoLm5leHQgPSBtZXNzYWdlTm9kZS5uZXh0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHJsLmhlYWQgPSBtZXNzYWdlTm9kZS5uZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNBdHRyVHJ1dGh5KHNjb3BlLCBhdHRyKSB7XG4gICAgIHJldHVybiAoaXNTdHJpbmcoYXR0cikgJiYgYXR0ci5sZW5ndGggPT09IDApIHx8IC8vZW1wdHkgYXR0cmlidXRlXG4gICAgICAgICAgICB0cnV0aHkoc2NvcGUuJGV2YWwoYXR0cikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRydXRoeSh2YWwpIHtcbiAgICAgIHJldHVybiBpc1N0cmluZyh2YWwpID8gdmFsLmxlbmd0aCA6ICEhdmFsO1xuICAgIH1cbiAgfV0pXG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAgICogQG5hbWUgbmdNZXNzYWdlc0luY2x1ZGVcbiAgICogQHJlc3RyaWN0IEFFXG4gICAqIEBzY29wZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogYG5nTWVzc2FnZXNJbmNsdWRlYCBpcyBhIGRpcmVjdGl2ZSB3aXRoIHRoZSBwdXJwb3NlIHRvIGltcG9ydCBleGlzdGluZyBuZ01lc3NhZ2UgdGVtcGxhdGVcbiAgICogY29kZSBmcm9tIGEgcmVtb3RlIHRlbXBsYXRlIGFuZCBwbGFjZSB0aGUgZG93bmxvYWRlZCB0ZW1wbGF0ZSBjb2RlIGludG8gdGhlIGV4YWN0IHNwb3RcbiAgICogdGhhdCB0aGUgbmdNZXNzYWdlc0luY2x1ZGUgZGlyZWN0aXZlIGlzIHBsYWNlZCB3aXRoaW4gdGhlIG5nTWVzc2FnZXMgY29udGFpbmVyLiBUaGlzIGFsbG93c1xuICAgKiBmb3IgYSBzZXJpZXMgb2YgcHJlLWRlZmluZWQgbWVzc2FnZXMgdG8gYmUgcmV1c2VkIGFuZCBhbHNvIGFsbG93cyBmb3IgdGhlIGRldmVsb3BlciB0b1xuICAgKiBkZXRlcm1pbmUgd2hhdCBtZXNzYWdlcyBhcmUgb3ZlcnJpZGRlbiBkdWUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgbmdNZXNzYWdlc0luY2x1ZGUgZGlyZWN0aXZlLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgaHRtbFxuICAgKiA8IS0tIHVzaW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVzIC0tPlxuICAgKiA8QU5ZIG5nLW1lc3NhZ2VzPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZXMtaW5jbHVkZT1cInJlbW90ZVRwbFN0cmluZ1wiPi4uLjwvQU5ZPlxuICAgKiA8L0FOWT5cbiAgICpcbiAgICogPCEtLSBvciBieSB1c2luZyBlbGVtZW50IGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxuZy1tZXNzYWdlcyBmb3I9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPG5nLW1lc3NhZ2VzLWluY2x1ZGUgc3JjPVwiZXhwcmVzc2lvblZhbHVlMVwiPi4uLjwvbmctbWVzc2FnZXMtaW5jbHVkZT5cbiAgICogPC9uZy1tZXNzYWdlcz5cbiAgICogYGBgXG4gICAqXG4gICAqIHtAbGluayBtb2R1bGU6bmdNZXNzYWdlcyBDbGljayBoZXJlfSB0byBsZWFybiBtb3JlIGFib3V0IGBuZ01lc3NhZ2VzYCBhbmQgYG5nTWVzc2FnZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZ01lc3NhZ2VzSW5jbHVkZXxzcmMgYSBzdHJpbmcgdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgcmVtb3RlIHRlbXBsYXRlLlxuICAgKi9cbiAgLmRpcmVjdGl2ZSgnbmdNZXNzYWdlc0luY2x1ZGUnLFxuICAgIFsnJHRlbXBsYXRlUmVxdWVzdCcsICckZG9jdW1lbnQnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbigkdGVtcGxhdGVSZXF1ZXN0LCAkZG9jdW1lbnQsICRjb21waWxlKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICByZXF1aXJlOiAnXl5uZ01lc3NhZ2VzJywgLy8gd2Ugb25seSByZXF1aXJlIHRoaXMgZm9yIHZhbGlkYXRpb24gc2FrZVxuICAgICAgbGluazogZnVuY3Rpb24oJHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB2YXIgc3JjID0gYXR0cnMubmdNZXNzYWdlc0luY2x1ZGUgfHwgYXR0cnMuc3JjO1xuICAgICAgICAkdGVtcGxhdGVSZXF1ZXN0KHNyYykudGhlbihmdW5jdGlvbihodG1sKSB7XG4gICAgICAgICAgaWYgKCRzY29wZS4kJGRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGlzU3RyaW5nKGh0bWwpICYmICFodG1sLnRyaW0oKSkge1xuICAgICAgICAgICAgLy8gRW1wdHkgdGVtcGxhdGUgLSBub3RoaW5nIHRvIGNvbXBpbGVcbiAgICAgICAgICAgIHJlcGxhY2VFbGVtZW50V2l0aE1hcmtlcihlbGVtZW50LCBzcmMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOb24tZW1wdHkgdGVtcGxhdGUgLSBjb21waWxlIGFuZCBsaW5rXG4gICAgICAgICAgICAkY29tcGlsZShodG1sKSgkc2NvcGUsIGZ1bmN0aW9uKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuYWZ0ZXIoY29udGVudHMpO1xuICAgICAgICAgICAgICByZXBsYWNlRWxlbWVudFdpdGhNYXJrZXIoZWxlbWVudCwgc3JjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEhlbHBlcnNcbiAgICBmdW5jdGlvbiByZXBsYWNlRWxlbWVudFdpdGhNYXJrZXIoZWxlbWVudCwgc3JjKSB7XG4gICAgICAvLyBBIGNvbW1lbnQgbWFya2VyIGlzIHBsYWNlZCBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXG4gICAgICB2YXIgY29tbWVudCA9ICRjb21waWxlLiQkY3JlYXRlQ29tbWVudCA/XG4gICAgICAgICAgJGNvbXBpbGUuJCRjcmVhdGVDb21tZW50KCduZ01lc3NhZ2VzSW5jbHVkZScsIHNyYykgOlxuICAgICAgICAgICRkb2N1bWVudFswXS5jcmVhdGVDb21tZW50KCcgbmdNZXNzYWdlc0luY2x1ZGU6ICcgKyBzcmMgKyAnICcpO1xuICAgICAgdmFyIG1hcmtlciA9IGpxTGl0ZShjb21tZW50KTtcbiAgICAgIGVsZW1lbnQuYWZ0ZXIobWFya2VyKTtcblxuICAgICAgLy8gRG9uJ3QgcG9sbHV0ZSB0aGUgRE9NIGFueW1vcmUgYnkga2VlcGluZyBhbiBlbXB0eSBkaXJlY3RpdmUgZWxlbWVudFxuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1dKVxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZGlyZWN0aXZlXG4gICAqIEBuYW1lIG5nTWVzc2FnZVxuICAgKiBAcmVzdHJpY3QgQUVcbiAgICogQHNjb3BlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmdNZXNzYWdlYCBpcyBhIGRpcmVjdGl2ZSB3aXRoIHRoZSBwdXJwb3NlIHRvIHNob3cgYW5kIGhpZGUgYSBwYXJ0aWN1bGFyIG1lc3NhZ2UuXG4gICAqIEZvciBgbmdNZXNzYWdlYCB0byBvcGVyYXRlLCBhIHBhcmVudCBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlIG9uIGEgcGFyZW50IERPTSBlbGVtZW50XG4gICAqIG11c3QgYmUgc2l0dWF0ZWQgc2luY2UgaXQgZGV0ZXJtaW5lcyB3aGljaCBtZXNzYWdlcyBhcmUgdmlzaWJsZSBiYXNlZCBvbiB0aGUgc3RhdGVcbiAgICogb2YgdGhlIHByb3ZpZGVkIGtleS92YWx1ZSBtYXAgdGhhdCBgbmdNZXNzYWdlc2AgbGlzdGVucyBvbi5cbiAgICpcbiAgICogTW9yZSBpbmZvcm1hdGlvbiBhYm91dCB1c2luZyBgbmdNZXNzYWdlYCBjYW4gYmUgZm91bmQgaW4gdGhlXG4gICAqIHtAbGluayBtb2R1bGU6bmdNZXNzYWdlcyBgbmdNZXNzYWdlc2AgbW9kdWxlIGRvY3VtZW50YXRpb259LlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgaHRtbFxuICAgKiA8IS0tIHVzaW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVzIC0tPlxuICAgKiA8QU5ZIG5nLW1lc3NhZ2VzPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZT1cInN0cmluZ1ZhbHVlXCI+Li4uPC9BTlk+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlPVwic3RyaW5nVmFsdWUxLCBzdHJpbmdWYWx1ZTIsIC4uLlwiPi4uLjwvQU5ZPlxuICAgKiA8L0FOWT5cbiAgICpcbiAgICogPCEtLSBvciBieSB1c2luZyBlbGVtZW50IGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxuZy1tZXNzYWdlcyBmb3I9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbj1cInN0cmluZ1ZhbHVlXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW49XCJzdHJpbmdWYWx1ZTEsIHN0cmluZ1ZhbHVlMiwgLi4uXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiA8L25nLW1lc3NhZ2VzPlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtleHByZXNzaW9ufSBuZ01lc3NhZ2V8d2hlbiBhIHN0cmluZyB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBtZXNzYWdlIGtleS5cbiAgICovXG4gIC5kaXJlY3RpdmUoJ25nTWVzc2FnZScsIG5nTWVzc2FnZURpcmVjdGl2ZUZhY3RvcnkoKSlcblxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZGlyZWN0aXZlXG4gICAqIEBuYW1lIG5nTWVzc2FnZUV4cFxuICAgKiBAcmVzdHJpY3QgQUVcbiAgICogQHByaW9yaXR5IDFcbiAgICogQHNjb3BlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmdNZXNzYWdlRXhwYCBpcyB0aGUgc2FtZSBhcyB7QGxpbmsgZGlyZWN0aXZlOm5nTWVzc2FnZSBgbmdNZXNzYWdlYH0sIGJ1dCBpbnN0ZWFkIG9mIGEgc3RhdGljXG4gICAqIHZhbHVlLCBpdCBhY2NlcHRzIGFuIGV4cHJlc3Npb24gdG8gYmUgZXZhbHVhdGVkIGZvciB0aGUgbWVzc2FnZSBrZXkuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBodG1sXG4gICAqIDwhLS0gdXNpbmcgYXR0cmlidXRlIGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxBTlkgbmctbWVzc2FnZXM9XCJleHByZXNzaW9uXCI+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlLWV4cD1cImV4cHJlc3Npb25WYWx1ZVwiPi4uLjwvQU5ZPlxuICAgKiA8L0FOWT5cbiAgICpcbiAgICogPCEtLSBvciBieSB1c2luZyBlbGVtZW50IGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxuZy1tZXNzYWdlcyBmb3I9XCJleHByZXNzaW9uXCI+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbi1leHA9XCJleHByZXNzaW9uVmFsdWVcIj4uLi48L25nLW1lc3NhZ2U+XG4gICAqIDwvbmctbWVzc2FnZXM+XG4gICAqIGBgYFxuICAgKlxuICAgKiB7QGxpbmsgbW9kdWxlOm5nTWVzc2FnZXMgQ2xpY2sgaGVyZX0gdG8gbGVhcm4gbW9yZSBhYm91dCBgbmdNZXNzYWdlc2AgYW5kIGBuZ01lc3NhZ2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge2V4cHJlc3Npb259IG5nTWVzc2FnZUV4cHx3aGVuRXhwIGFuIGV4cHJlc3Npb24gdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgbWVzc2FnZSBrZXkuXG4gICAqL1xuICAuZGlyZWN0aXZlKCduZ01lc3NhZ2VFeHAnLCBuZ01lc3NhZ2VEaXJlY3RpdmVGYWN0b3J5KCkpO1xuXG5mdW5jdGlvbiBuZ01lc3NhZ2VEaXJlY3RpdmVGYWN0b3J5KCkge1xuICByZXR1cm4gWyckYW5pbWF0ZScsIGZ1bmN0aW9uKCRhbmltYXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgdHJhbnNjbHVkZTogJ2VsZW1lbnQnLFxuICAgICAgcHJpb3JpdHk6IDEsIC8vIG11c3QgcnVuIGJlZm9yZSBuZ0JpbmQsIG90aGVyd2lzZSB0aGUgdGV4dCBpcyBzZXQgb24gdGhlIGNvbW1lbnRcbiAgICAgIHRlcm1pbmFsOiB0cnVlLFxuICAgICAgcmVxdWlyZTogJ15ebmdNZXNzYWdlcycsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTWVzc2FnZXNDdHJsLCAkdHJhbnNjbHVkZSkge1xuICAgICAgICB2YXIgY29tbWVudE5vZGUgPSBlbGVtZW50WzBdO1xuXG4gICAgICAgIHZhciByZWNvcmRzO1xuICAgICAgICB2YXIgc3RhdGljRXhwID0gYXR0cnMubmdNZXNzYWdlIHx8IGF0dHJzLndoZW47XG4gICAgICAgIHZhciBkeW5hbWljRXhwID0gYXR0cnMubmdNZXNzYWdlRXhwIHx8IGF0dHJzLndoZW5FeHA7XG4gICAgICAgIHZhciBhc3NpZ25SZWNvcmRzID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgICByZWNvcmRzID0gaXRlbXNcbiAgICAgICAgICAgICAgPyAoaXNBcnJheShpdGVtcylcbiAgICAgICAgICAgICAgICAgID8gaXRlbXNcbiAgICAgICAgICAgICAgICAgIDogaXRlbXMuc3BsaXQoL1tcXHMsXSsvKSlcbiAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIG5nTWVzc2FnZXNDdHJsLnJlUmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGR5bmFtaWNFeHApIHtcbiAgICAgICAgICBhc3NpZ25SZWNvcmRzKHNjb3BlLiRldmFsKGR5bmFtaWNFeHApKTtcbiAgICAgICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKGR5bmFtaWNFeHAsIGFzc2lnblJlY29yZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFzc2lnblJlY29yZHMoc3RhdGljRXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJyZW50RWxlbWVudCwgbWVzc2FnZUN0cmw7XG4gICAgICAgIG5nTWVzc2FnZXNDdHJsLnJlZ2lzdGVyKGNvbW1lbnROb2RlLCBtZXNzYWdlQ3RybCA9IHtcbiAgICAgICAgICB0ZXN0OiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbnMocmVjb3JkcywgbmFtZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAkdHJhbnNjbHVkZShmdW5jdGlvbihlbG0sIG5ld1Njb3BlKSB7XG4gICAgICAgICAgICAgICAgJGFuaW1hdGUuZW50ZXIoZWxtLCBudWxsLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGVsbTtcblxuICAgICAgICAgICAgICAgIC8vIEVhY2ggdGltZSB3ZSBhdHRhY2ggdGhpcyBub2RlIHRvIGEgbWVzc2FnZSB3ZSBnZXQgYSBuZXcgaWQgdGhhdCB3ZSBjYW4gbWF0Y2hcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGFyZSBkZXN0cm95aW5nIHRoZSBub2RlIGxhdGVyLlxuICAgICAgICAgICAgICAgIHZhciAkJGF0dGFjaElkID0gY3VycmVudEVsZW1lbnQuJCRhdHRhY2hJZCA9IG5nTWVzc2FnZXNDdHJsLmdldEF0dGFjaElkKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZWxlbWVudCBvciBhIHBhcmVudCBlbGVtZW50IGlzIGRlc3Ryb3llZFxuICAgICAgICAgICAgICAgIC8vIGJ5IGFub3RoZXIgc3RydWN0dXJhbCBkaXJlY3RpdmUgdGhlbiBpdCdzIHRpbWVcbiAgICAgICAgICAgICAgICAvLyB0byBkZXJlZ2lzdGVyIHRoZSBtZXNzYWdlIGZyb20gdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5vbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudCAmJiBjdXJyZW50RWxlbWVudC4kJGF0dGFjaElkID09PSAkJGF0dGFjaElkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5nTWVzc2FnZXNDdHJsLmRlcmVnaXN0ZXIoY29tbWVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ3RybC5kZXRhY2goKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG5ld1Njb3BlLiRkZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGV0YWNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICB2YXIgZWxtID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgJGFuaW1hdGUubGVhdmUoZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1dO1xuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKGNvbGxlY3Rpb24sIGtleSkge1xuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gaXNBcnJheShjb2xsZWN0aW9uKVxuICAgICAgICAgID8gY29sbGVjdGlvbi5pbmRleE9mKGtleSkgPj0gMFxuICAgICAgICAgIDogY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgfVxufVxuXG5cbn0pKHdpbmRvdywgd2luZG93LmFuZ3VsYXIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2FuZ3VsYXItbWVzc2FnZXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJhcGlDaGVja1wiLFwiYW1kXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzMlwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qc1wiOlwiYXBpLWNoZWNrXCJ9XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkV3JhcHBlcnMpO1xuXG4gIGZ1bmN0aW9uIGFkZFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbe1xuICAgICAgbmFtZTogXCJmb3VuZGF0aW9uTGFiZWxcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9sYWJlbC5odG1sXCIpXG4gICAgICAvLyBhcGlDaGVjazogY2hlY2sgPT4gKHtcbiAgICAgIC8vICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAvLyAgICAgbGFiZWw6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgIC8vICAgICByZXF1aXJlZDogY2hlY2suYm9vbC5vcHRpb25hbFxuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgIH0sIHsgbmFtZTogXCJmb3VuZGF0aW9uSGFzRXJyb3JcIiwgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2hhcy1lcnJvci5odG1sXCIpIH1dKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93cmFwcGVycy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkV3JhcHBlcnMpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnZm91bmRhdGlvbkxhYmVsJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sYWJlbC5odG1sJylcclxuICAgICAgICAvLyBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICAvLyAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIC8vICAgICBsYWJlbDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgIC8vICAgICByZXF1aXJlZDogY2hlY2suYm9vbC5vcHRpb25hbFxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHtuYW1lOiAnZm91bmRhdGlvbkhhc0Vycm9yJywgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaGFzLWVycm9yLmh0bWwnKX1cclxuICAgIF0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3dyYXBwZXJzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIlxcXCIgPlxcclxcbiAgPGxhYmVsIGZvcj1cXFwie3tpZH19XFxcIiBuZy1jbGFzcz1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/ICdpcy1pbnZhbGlkLWxhYmVsJyA6ICcnXFxcIj5cXHJcXG4gICAgPHNwYW4gbmctaWY9XFxcInRvLnRyYW5kbGF0ZVxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm1seS13cmFwcGVyLWxhYmVsXFxcIiB0cmFuc2xhdGU9XFxcInt7dG8udHJhbnNsYXRlfX1cXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8c3BhbiBuZy1pZj1cXFwiIXRvLnRyYW5kbGF0ZVxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm1seS13cmFwcGVyLWxhYmVsXFxcIj57e3RvLmxhYmVsfX08L3NwYW4+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImZvcm1seS13cmFwcGVyLXJlcXVpcmVkXFxcIiA+e3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX08L3NwYW4+XFxyXFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbiAgICA8ZGl2IG5nLW1lc3NhZ2VzPVxcXCJmYy4kZXJyb3JcXFwiIFxcclxcbiAgICBuZy1pZj1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kdG91Y2hlZFxcXCIgXFxyXFxuICAgIGNsYXNzPVxcXCJteS1tZXNzYWdlcyBmb3JtLWVycm9yIGlzLXZpc2libGVcXFwiPlxcclxcbiAgICAgIDxkaXYgbmctbWVzc2FnZT1cXFwie3s6Om5hbWV9fVxcXCIgbmctcmVwZWF0PVxcXCIobmFtZSwgbWVzc2FnZSkgaW4gOjpvcHRpb25zLnZhbGlkYXRpb24ubWVzc2FnZXNcXFwiIGNsYXNzPVxcXCJmb3JtLWVycm9yIGlzLXZpc2libGVcXFwiPnt7bWVzc2FnZShmYy4kdmlld1ZhbHVlLCBmYy4kbW9kZWxWYWx1ZSwgdGhpcyl9fTwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dyYXBwZXJzL2xhYmVsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbHVtbnMgc21hbGwte3t0by5jb2x1bW4gPiAwID8gdG8uY29sdW1uIDogMTJ9fVxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogc2hvd0Vycm9yfVxcXCI+XFxyXFxuICA8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICByZXF1aXJlKFwiLi9jaGVja2JveFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL211bHRpQ2hlY2tib3hcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9pbnB1dFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL3JhZGlvXCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vc2VsZWN0XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vdGV4dGFyZWFcIikobmdNb2R1bGUpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICByZXF1aXJlKCcuL2NoZWNrYm94JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vbXVsdGlDaGVja2JveCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL2lucHV0JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vcmFkaW8nKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9zZWxlY3QnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi90ZXh0YXJlYScpKG5nTW9kdWxlKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJjaGVja2JveFwiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NoZWNrYm94Lmh0bWxcIiksXG4gICAgICB3cmFwcGVyOiBbXCJmb3VuZGF0aW9uSGFzRXJyb3JcIl0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2NoZWNrYm94LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAnY2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jaGVja2JveC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsnZm91bmRhdGlvbkhhc0Vycm9yJ10sXHJcbiAgICAgIGFwaUNoZWNrOiBjaGVjayA9PiAoe1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2NoZWNrYm94LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG5cXHQ8bGFiZWwgbmctY2xhc3M9XFxcImZjLiR2YWxpZCA/ICcnIDogJ2lzLWludmFsaWQtbGFiZWwnXFxcIj5cXHJcXG5cXHRcXHQ8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICBjbGFzcz1cXFwiZm9ybWx5LWZpZWxkLWNoZWNrYm94XFxcIlxcclxcblxcdFxcdCAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIiBuZy1jbGFzcz1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/ICdpcy1pbnZhbGlkLWlucHV0JyA6ICcnXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj57e3RvLmxhYmVsfX08L3NwYW4+XFxyXFxuXFx0XFx0PHNwYW4+e3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX08L3NwYW4+XFxyXFxuXFx0PC9sYWJlbD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdHlwZXMvY2hlY2tib3guaHRtbFxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJtdWx0aUNoZWNrYm94XCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbXVsdGlDaGVja2JveC5odG1sXCIpLFxuICAgICAgd3JhcHBlcjogW1wiZm91bmRhdGlvbkxhYmVsXCIsIFwiZm91bmRhdGlvbkhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXG4gICAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXI6IC8qIEBuZ0luamVjdCAqL2Z1bmN0aW9uIGNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgICAgIHZhciB0byA9ICRzY29wZS50bztcbiAgICAgICAgdmFyIG9wdHMgPSAkc2NvcGUub3B0aW9ucztcbiAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3ggPSB7XG4gICAgICAgICAgY2hlY2tlZDogW10sXG4gICAgICAgICAgY2hhbmdlOiBzZXRNb2RlbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNoZWNrYm94ZXMgY2hlY2sgcHJvcGVydHlcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSB0by52YWx1ZVByb3AgfHwgXCJ2YWx1ZVwiO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uICh2LCBpbmRleCkge1xuICAgICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkW2luZGV4XSA9IG1vZGVsVmFsdWUuaW5kZXhPZih2W3ZhbHVlUHJvcF0pICE9PSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRNb2RlbCgpIHtcbiAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldID0gW107XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWQsIGZ1bmN0aW9uIChjaGVja2JveCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldLnB1c2godG8ub3B0aW9uc1tpbmRleF1bdG8udmFsdWVQcm9wIHx8IFwidmFsdWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ211bHRpQ2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tdWx0aUNoZWNrYm94Lmh0bWwnKSxcclxuICAgICAgd3JhcHBlcjogWydmb3VuZGF0aW9uTGFiZWwnLCAnZm91bmRhdGlvbkhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXHJcbiAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgY29udHJvbGxlcjogLyogQG5nSW5qZWN0ICovIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgIGNvbnN0IHRvID0gJHNjb3BlLnRvO1xyXG4gICAgICAgIGNvbnN0IG9wdHMgPSAkc2NvcGUub3B0aW9ucztcclxuICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveCA9IHtcclxuICAgICAgICAgIGNoZWNrZWQ6IFtdLFxyXG4gICAgICAgICAgY2hhbmdlOiBzZXRNb2RlbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNoZWNrYm94ZXMgY2hlY2sgcHJvcGVydHlcclxuICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gJHNjb3BlLm1vZGVsW29wdHMua2V5XTtcclxuICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZVByb3AgPSB0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJztcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0by5vcHRpb25zLCBmdW5jdGlvbih2LCBpbmRleCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkW2luZGV4XSA9IG1vZGVsVmFsdWUuaW5kZXhPZih2W3ZhbHVlUHJvcF0pICE9PSAtMTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TW9kZWwoKSB7XHJcbiAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldID0gW107XHJcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLm11bHRpQ2hlY2tib3guY2hlY2tlZCwgKGNoZWNrYm94LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3gpIHtcclxuICAgICAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldLnB1c2godG8ub3B0aW9uc1tpbmRleF1bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctcmVwZWF0PVxcXCIoa2V5LCBvcHRpb24pIGluIHRvLm9wdGlvbnNcXFwiIGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICA8bGFiZWwgbmctY2xhc3M9XFxcImZjLiR2YWxpZCA/ICcnIDogJ2lzLWludmFsaWQtbGFiZWwnXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcIm11bHRpQ2hlY2tib3guY2hlY2tlZFskaW5kZXhdXFxcIlxcclxcbiAgICAgICAgICAgbmctY2hhbmdlPVxcXCJtdWx0aUNoZWNrYm94LmNoYW5nZSgpXFxcIiBuZy1jbGFzcz1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/ICdpcy1pbnZhbGlkLWlucHV0JyA6ICcnXFxcIj5cXHJcXG4gICAgICB7e29wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXX19XFxyXFxuICA8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90eXBlcy9tdWx0aUNoZWNrYm94Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkSW5wdXRUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRJbnB1dFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwiaW5wdXRcIixcbiAgICAgIHRlbXBsYXRlOiBcIjxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIiBcIiArIFwiIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlIFwiICsgXCIgPyAnaXMtaW52YWxpZC1pbnB1dCcgOiAnJ1xcXCI+XCIsXG4gICAgICB3cmFwcGVyOiBbXCJmb3VuZGF0aW9uTGFiZWxcIiwgXCJmb3VuZGF0aW9uSGFzRXJyb3JcIl0sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgdHlwZTogXCJ0ZXh0XCIgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2lucHV0LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRJbnB1dFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRJbnB1dFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAnaW5wdXQnLFxyXG4gICAgICB0ZW1wbGF0ZTogJzxpbnB1dCBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiICcgK1xyXG4gICAgICAnIG5nLWNsYXNzPVwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSAnICtcclxuICAgICAgJyA/IFxcJ2lzLWludmFsaWQtaW5wdXRcXCcgOiBcXCdcXCdcIj4nLFxyXG4gICAgICB3cmFwcGVyOiBbJ2ZvdW5kYXRpb25MYWJlbCcsICdmb3VuZGF0aW9uSGFzRXJyb3InXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgdHlwZTogJ3RleHQnIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvaW5wdXQuanMiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFJhZGlvVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmFkaW8uaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcImZvdW5kYXRpb25MYWJlbFwiLCBcImZvdW5kYXRpb25IYXNFcnJvclwiXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9yYWRpby5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkUmFkaW9UeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3JhZGlvJyxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmFkaW8uaHRtbCcpLFxyXG4gICAgICB3cmFwcGVyOiBbJ2ZvdW5kYXRpb25MYWJlbCcsICdmb3VuZGF0aW9uSGFzRXJyb3InXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICBub0Zvcm1Db250cm9sOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2YoY2hlY2sub2JqZWN0KSxcclxuICAgICAgICAgIGxhYmVsUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgICAgdmFsdWVQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9yYWRpby5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLXJlcGVhdD1cXFwiKGtleSwgb3B0aW9uKSBpbiB0by5vcHRpb25zXFxcIiBjbGFzcz1cXFwicmFkaW9cXFwiIG5nLWNsYXNzPVxcXCJmYy4kdmFsaWQgPyAnJyA6ICdpcy1pbnZhbGlkLWxhYmVsJ1xcXCI+XFxyXFxuICA8bGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCJcXHJcXG4gICAgICAgICAgIGlkPVxcXCJ7e2lkICsgJ18nKyAkaW5kZXh9fVxcXCJcXHJcXG4gICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgbmctdmFsdWU9XFxcIm9wdGlvblt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ11cXFwiXFxyXFxuICAgICAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcbiAgICAgICAgICAgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgPyAnaXMtaW52YWxpZC1pbnB1dCcgOiAnJ1xcXCI+XFxyXFxuICAgICAge3tvcHRpb25bdG8ubGFiZWxQcm9wIHx8ICduYW1lJ119fVxcclxcbiAgPC9sYWJlbD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdHlwZXMvcmFkaW8uaHRtbFxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRTZWxlY3RUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRTZWxlY3RUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInNlbGVjdFwiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3NlbGVjdC5odG1sXCIpLFxuICAgICAgd3JhcHBlcjogW1wiZm91bmRhdGlvbkxhYmVsXCIsIFwiZm91bmRhdGlvbkhhc0Vycm9yXCJdLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3NlbGVjdC5qcyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFNlbGVjdFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRTZWxlY3RUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3NlbGVjdCcsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NlbGVjdC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsnZm91bmRhdGlvbkxhYmVsJywgJ2ZvdW5kYXRpb25IYXNFcnJvciddLFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2YoY2hlY2sub2JqZWN0KSxcclxuICAgICAgICAgIGxhYmVsUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgICAgdmFsdWVQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXHJcbiAgICAgICAgICBncm91cFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL3NlbGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2VsZWN0XFxyXFxuICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcbiAgbmctb3B0aW9ucz1cXFwib3B0aW9uW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXSBhcyBvcHRpb25bdG8ubGFiZWxQcm9wIHx8ICduYW1lJ10gZ3JvdXAgYnkgb3B0aW9uW3RvLmdyb3VwUHJvcCB8fCAnZ3JvdXAnXSBmb3Igb3B0aW9uIGluIHRvLm9wdGlvbnNcXFwiXFxyXFxuICBuZy1jbGFzcz1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/ICdpcy1pbnZhbGlkLWlucHV0JyA6ICcnXFxcIj5cXHJcXG48L3NlbGVjdD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdHlwZXMvc2VsZWN0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkVGV4dGFyZWFUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRUZXh0YXJlYVR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwidGV4dGFyZWFcIixcbiAgICAgIHRlbXBsYXRlOiBcIjx0ZXh0YXJlYSBjbGFzcz1cXFwiXFxcIiBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlwiICsgXCIgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgXCIgKyBcIiA/ICdpcy1pbnZhbGlkLWlucHV0JyA6ICcnXFxcIj48L3RleHRhcmVhPlwiLFxuICAgICAgd3JhcHBlcjogW1wiZm91bmRhdGlvbkxhYmVsXCIsIFwiZm91bmRhdGlvbkhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XG4gICAgICAgICAgcm93czogeyBhdHRyaWJ1dGU6IFwicm93c1wiIH0sXG4gICAgICAgICAgY29sczogeyBhdHRyaWJ1dGU6IFwiY29sc1wiIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlci5vcHRpb25hbCxcbiAgICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlci5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy90ZXh0YXJlYS5qcyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRleHRhcmVhVHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXHJcbiAgICAgIHRlbXBsYXRlOiAnPHRleHRhcmVhIGNsYXNzPVwiXCIgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIicgKyBcclxuICAgICAgJyBuZy1jbGFzcz1cIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgJyArXHJcbiAgICAgICcgPyBcXCdpcy1pbnZhbGlkLWlucHV0XFwnIDogXFwnXFwnXCI+PC90ZXh0YXJlYT4nLFxyXG4gICAgICB3cmFwcGVyOiBbJ2ZvdW5kYXRpb25MYWJlbCcsICdmb3VuZGF0aW9uSGFzRXJyb3InXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICBuZ01vZGVsQXR0cnM6IHtcclxuICAgICAgICAgIHJvd3M6IHthdHRyaWJ1dGU6ICdyb3dzJ30sXHJcbiAgICAgICAgICBjb2xzOiB7YXR0cmlidXRlOiAnY29scyd9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlci5vcHRpb25hbCxcclxuICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlci5vcHRpb25hbFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL3RleHRhcmVhLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmUgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqOyB9O1xuXG52YXIgYWRkb25zID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL2FkZG9uc1wiKSk7XG5cbnZhciBkZXNjcmlwdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9kZXNjcmlwdGlvblwiKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIGFkZG9ucyhuZ01vZHVsZSk7XG4gIGRlc2NyaXB0aW9uKG5nTW9kdWxlKTtcbn07XG5cbi8vZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuLy8gIHJlcXVpcmUoJy4vYWRkb25zJykobmdNb2R1bGUpO1xuLy8gIHJlcXVpcmUoJy4vZGVzY3JpcHRpb24nKShuZ01vZHVsZSk7XG4vL307XG4vL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3J1bi9pbmRleC5qcyIsImltcG9ydCBhZGRvbnMgZnJvbSAnLi9hZGRvbnMnO1xyXG5pbXBvcnQgZGVzY3JpcHRpb24gZnJvbSAnLi9kZXNjcmlwdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgYWRkb25zKG5nTW9kdWxlKTtcclxuICBkZXNjcmlwdGlvbihuZ01vZHVsZSk7XHJcbn07XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuLy8gIHJlcXVpcmUoJy4vYWRkb25zJykobmdNb2R1bGUpO1xyXG4vLyAgcmVxdWlyZSgnLi9kZXNjcmlwdGlvbicpKG5nTW9kdWxlKTtcclxuLy99O1xyXG4vL1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLnJ1bihhZGRBZGRvbnNNYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkQWRkb25zTWFuaXB1bGF0b3IoZm9ybWx5Q29uZmlnLCBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2spIHtcbiAgICB2YXIgYWRkb25UZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2FkZG9ucy5odG1sXCIpO1xuICAgIHZhciBhZGRvbkNoZWNrZXIgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xuICAgICAgXCJjbGFzc1wiOiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgdGV4dDogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbFxuICAgIH0pLnN0cmljdC5vcHRpb25hbDtcbiAgICB2YXIgYXBpID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIHRlbXBsYXRlT3B0aW9uczogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcbiAgICAgICAgYWRkb25MZWZ0OiBhZGRvbkNoZWNrZXIsXG4gICAgICAgIGFkZG9uUmlnaHQ6IGFkZG9uQ2hlY2tlclxuICAgICAgfSlcbiAgICB9KTtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uICh0ZW1wbGF0ZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMudHlwZSAhPT0gXCJpbnB1dFwiIHx8ICFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvbkxlZnQgJiYgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uUmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgICAgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLndhcm4oW2FwaV0sIFtvcHRpb25zXSk7XG4gICAgICByZXR1cm4gYWRkb25UZW1wbGF0ZS5yZXBsYWNlKFwiPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XCIsIHRlbXBsYXRlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ydW4vYWRkb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLnJ1bihhZGRBZGRvbnNNYW5pcHVsYXRvcik7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XHJcbiAgICB2YXIgYWRkb25UZW1wbGF0ZSA9IHJlcXVpcmUoJy4vYWRkb25zLmh0bWwnKTtcclxuICAgIGNvbnN0IGFkZG9uQ2hlY2tlciA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XHJcbiAgICAgIGNsYXNzOiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICB0ZXh0OiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XHJcbiAgICBjb25zdCBhcGkgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XHJcbiAgICAgICAgYWRkb25MZWZ0OiBhZGRvbkNoZWNrZXIsXHJcbiAgICAgICAgYWRkb25SaWdodDogYWRkb25DaGVja2VyXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2goZnVuY3Rpb24odGVtcGxhdGUsIG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMudHlwZSAhPT0gJ2lucHV0JyB8fCAoIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uTGVmdCAmJiAhb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuYWRkb25SaWdodCkpIHtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLndhcm4oW2FwaV0sIFtvcHRpb25zXSk7XHJcbiAgICAgIHJldHVybiBhZGRvblRlbXBsYXRlLnJlcGxhY2UoJzxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPicsIHRlbXBsYXRlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3J1bi9hZGRvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1jbGFzcz1cXFwieycnOiB0by5hZGRvbkxlZnQgfHwgdG8uYWRkb25SaWdodH1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWlmPVxcXCJ0by5hZGRvbkxlZnRcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcInt7dG8uYWRkb25MZWZ0LmNsYXNzfX1cXFwiIG5nLWlmPVxcXCJ0by5hZGRvbkxlZnQuY2xhc3NcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvbkxlZnQudGV4dFxcXCI+e3t0by5hZGRvbkxlZnQudGV4dH19PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIlxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHRcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcInt7dG8uYWRkb25SaWdodC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25SaWdodC5jbGFzc1xcXCI+PC9pPlxcclxcbiAgICAgICAgPHNwYW4gbmctaWY9XFxcInRvLmFkZG9uUmlnaHQudGV4dFxcXCI+e3t0by5hZGRvblJpZ2h0LnRleHR9fTwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3J1bi9hZGRvbnMuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLnJ1bihhZGREZXNjcmlwdGlvbk1hbmlwdWxhdG9yKTtcblxuICBmdW5jdGlvbiBhZGREZXNjcmlwdGlvbk1hbmlwdWxhdG9yKGZvcm1seUNvbmZpZykge1xuICAgIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2goZnVuY3Rpb24gYXJpYURlc2NyaWJlZEJ5KHRlbXBsYXRlLCBvcHRpb25zLCBzY29wZSkge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uKSAmJiBvcHRpb25zLnR5cGUgIT09IFwicmFkaW9cIiAmJiBvcHRpb25zLnR5cGUgIT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpWzBdKTtcbiAgICAgICAgdmFyIG1vZGVsRWxzID0gYW5ndWxhci5lbGVtZW50KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmctbW9kZWxdXCIpKTtcbiAgICAgICAgaWYgKG1vZGVsRWxzKSB7XG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KFwiPHAgaWQ9XFxcIlwiICsgc2NvcGUuaWQgKyBcIl9kZXNjcmlwdGlvblxcXCJcIiArIFwiY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiXCIgKyBcIm5nLWlmPVxcXCJ0by5kZXNjcmlwdGlvblxcXCI+XCIgKyBcInt7dG8uZGVzY3JpcHRpb259fVwiICsgXCI8L3A+XCIpWzBdKTtcbiAgICAgICAgICBtb2RlbEVscy5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLCBzY29wZS5pZCArIFwiX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcnVuL2Rlc2NyaXB0aW9uLmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLnJ1bihhZGREZXNjcmlwdGlvbk1hbmlwdWxhdG9yKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcclxuICAgIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2goZnVuY3Rpb24gYXJpYURlc2NyaWJlZEJ5KHRlbXBsYXRlLCBvcHRpb25zLCBzY29wZSkge1xyXG4gICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQob3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuZGVzY3JpcHRpb24pICYmXHJcbiAgICAgICAgb3B0aW9ucy50eXBlICE9PSAncmFkaW8nICYmIG9wdGlvbnMudHlwZSAhPT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudCh0ZW1wbGF0ZSlbMF0pO1xyXG4gICAgICAgIHZhciBtb2RlbEVscyA9IGFuZ3VsYXIuZWxlbWVudChlbC5xdWVyeVNlbGVjdG9yQWxsKCdbbmctbW9kZWxdJykpO1xyXG4gICAgICAgIGlmIChtb2RlbEVscykge1xyXG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KFxyXG4gICAgICAgICAgICAnPHAgaWQ9XCInICsgc2NvcGUuaWQgKyAnX2Rlc2NyaXB0aW9uXCInICtcclxuICAgICAgICAgICAgJ2NsYXNzPVwiaGVscC1ibG9ja1wiJyArXHJcbiAgICAgICAgICAgICduZy1pZj1cInRvLmRlc2NyaXB0aW9uXCI+JyArXHJcbiAgICAgICAgICAgICd7e3RvLmRlc2NyaXB0aW9ufX0nICtcclxuICAgICAgICAgICAgJzwvcD4nXHJcbiAgICAgICAgICApWzBdKTtcclxuICAgICAgICAgIG1vZGVsRWxzLmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBzY29wZS5pZCArICdfZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgIHJldHVybiBlbC5pbm5lckhUTUw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vZGVzY3JpcHRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9