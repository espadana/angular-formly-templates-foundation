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
	 * @license AngularJS v1.6.5
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
	  .info({ angularVersion: '1.6.5' })
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ZjNhNjYyNzU1MzZmNzhkNjJmNiIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8zMDkwIiwid2VicGFjazovLy8uL2luZGV4LmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanM/ODMyMiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcz9jMzdlIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2FuZ3VsYXItbWVzc2FnZXMvYW5ndWxhci1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcz82MTY2Iiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanM/OGM2OSIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcz81NDk2Iiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzPzZiZjciLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzPzUxZWYiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanM/NGIxYSIsIndlYnBhY2s6Ly8vLi90eXBlcy9yYWRpby5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuanM/NTk4ZiIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcz8zNDZkIiwid2VicGFjazovLy8uL3J1bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanM/NjRmZCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy8uL3J1bi9hZGRvbnMuanM/ZWViNCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3J1bi9kZXNjcmlwdGlvbi5qcz9mZGI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQ0FBLFFBQU8sVUFBVSxvQkFBUSxHOzs7Ozs7QUNBekI7O0FDQUEsS0FBTSxlQUFlO0FBQ3JCLEtBQU0sVUFBVSxvQkFBUTtBQUN4QixLQUFNLFdBQVcsUUFBUSxPQUFPLGNBQWMsQ0FBQyxvQkFBUSxJQUFtQixvQkFBUTtBQUNsRixVQUFTLFNBQ1AsNEJBQ0Esb0JBQVEsR0FBYTtHQUNuQixRQUFRO0tBQ04sUUFBUTs7O0FBSWQsVUFBUyxTQUFTLDJCQUEyQjs7QUFFN0MscUJBQVEsR0FBYztBQUN0QixxQkFBUSxJQUFXO0FBQ25CLHFCQUFRLElBQVM7OztBREVqQixRQUFPLFVDQ1EsYTs7Ozs7O0FDbEJmOztBQUVBOztBQ0FBLEtBQUksVUFBVSxvQkFBUTtBQUN0QixLQUFJLENBQUMsUUFBUSxTQUFTO0dBQ3BCLFVBQVUsT0FBTzs7QUFFbkIsUUFBTyxVQUFVLFE7Ozs7OztBQ05qQixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQscUJBQXFCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ZSI6ImFuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpLCByZXF1aXJlKFwiYXBpLWNoZWNrXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFuZ3VsYXJcIiwgXCJhbmd1bGFyLWZvcm1seVwiLCBcImFwaS1jaGVja1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ0Zvcm1seVRlbXBsYXRlc0ZvdW5kYXRpb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nRm9ybWx5VGVtcGxhdGVzRm91bmRhdGlvblwiXSA9IGZhY3Rvcnkocm9vdFtcImFuZ3VsYXJcIl0sIHJvb3RbXCJuZ0Zvcm1seVwiXSwgcm9vdFtcImFwaUNoZWNrXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWYzYTY2Mjc1NTM2Zjc4ZDYyZjYiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pbmRleC5jb21tb25cIik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW5kZXguY29tbW9uJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbmdNb2R1bGVOYW1lID0gXCJmb3JtbHlGb3VuZGF0aW9uXCI7XG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCIuL2FuZ3VsYXItZml4XCIpO1xudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpLCByZXF1aXJlKFwiYW5ndWxhci1tZXNzYWdlc1wiKV0pO1xubmdNb2R1bGUuY29uc3RhbnQoXCJmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2tcIiwgcmVxdWlyZShcImFwaS1jaGVja1wiKSh7XG4gIG91dHB1dDoge1xuICAgIHByZWZpeDogXCJhbmd1bGFyLWZvcm1seS1mb3VuZGF0aW9uXCJcbiAgfVxufSkpO1xubmdNb2R1bGUuY29uc3RhbnQoXCJmb3JtbHlGb3VuZGF0aW9uVmVyc2lvblwiLCBWRVJTSU9OKTtcblxucmVxdWlyZShcIi4vd3JhcHBlcnNcIikobmdNb2R1bGUpO1xucmVxdWlyZShcIi4vdHlwZXNcIikobmdNb2R1bGUpO1xucmVxdWlyZShcIi4vcnVuXCIpKG5nTW9kdWxlKTtcbi8vIHJlcXVpcmUoJ2NzcyEuL3N0eWxlLmNzcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5nTW9kdWxlTmFtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5jb21tb24uanMiLCJjb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5Rm91bmRhdGlvbic7XHJcbmNvbnN0IGFuZ3VsYXIgPSByZXF1aXJlKCcuL2FuZ3VsYXItZml4Jyk7XHJcbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZSgnYW5ndWxhci1mb3JtbHknKSAscmVxdWlyZSgnYW5ndWxhci1tZXNzYWdlcycpICxdKTtcclxubmdNb2R1bGUuY29uc3RhbnQoXHJcbiAgJ2Zvcm1seUZvdW5kYXRpb25BcGlDaGVjaycsXHJcbiAgcmVxdWlyZSgnYXBpLWNoZWNrJykoe1xyXG4gICAgb3V0cHV0OiB7XHJcbiAgICAgIHByZWZpeDogJ2FuZ3VsYXItZm9ybWx5LWZvdW5kYXRpb24nXHJcbiAgICB9XHJcbiAgfSlcclxuKTtcclxubmdNb2R1bGUuY29uc3RhbnQoJ2Zvcm1seUZvdW5kYXRpb25WZXJzaW9uJywgVkVSU0lPTik7XHJcblxyXG5yZXF1aXJlKCcuL3dyYXBwZXJzJykobmdNb2R1bGUpO1xyXG5yZXF1aXJlKCcuL3R5cGVzJykobmdNb2R1bGUpO1xyXG5yZXF1aXJlKCcuL3J1bicpKG5nTW9kdWxlKTtcclxuLy8gcmVxdWlyZSgnY3NzIS4vc3R5bGUuY3NzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZU5hbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5jb21tb24uanMiLCIvLyBzb21lIHZlcnNpb25zIG9mIGFuZ3VsYXIgZG9uJ3QgZXhwb3J0IHRoZSBhbmd1bGFyIG1vZHVsZSBwcm9wZXJseSxcbi8vIHNvIHdlIGdldCBpdCBmcm9tIHdpbmRvdyBpbiB0aGlzIGNhc2UuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhclwiKTtcbmlmICghYW5ndWxhci52ZXJzaW9uKSB7XG4gIGFuZ3VsYXIgPSB3aW5kb3cuYW5ndWxhcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxyXG4vLyBzbyB3ZSBnZXQgaXQgZnJvbSB3aW5kb3cgaW4gdGhpcyBjYXNlLlxyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuaWYgKCFhbmd1bGFyLnZlcnNpb24pIHtcclxuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vYW5ndWxhci1maXgvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2FuZ3VsYXItbWVzc2FnZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gJ25nTWVzc2FnZXMnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhckpTIHYxLjYuNVxuICogKGMpIDIwMTAtMjAxNyBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiAqIExpY2Vuc2U6IE1JVFxuICovXG4oZnVuY3Rpb24od2luZG93LCBhbmd1bGFyKSB7J3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaDtcbnZhciBpc0FycmF5O1xudmFyIGlzU3RyaW5nO1xudmFyIGpxTGl0ZTtcblxuLyoqXG4gKiBAbmdkb2MgbW9kdWxlXG4gKiBAbmFtZSBuZ01lc3NhZ2VzXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUaGUgYG5nTWVzc2FnZXNgIG1vZHVsZSBwcm92aWRlcyBlbmhhbmNlZCBzdXBwb3J0IGZvciBkaXNwbGF5aW5nIG1lc3NhZ2VzIHdpdGhpbiB0ZW1wbGF0ZXNcbiAqICh0eXBpY2FsbHkgd2l0aGluIGZvcm1zIG9yIHdoZW4gcmVuZGVyaW5nIG1lc3NhZ2Ugb2JqZWN0cyB0aGF0IHJldHVybiBrZXkvdmFsdWUgZGF0YSkuXG4gKiBJbnN0ZWFkIG9mIHJlbHlpbmcgb24gSmF2YVNjcmlwdCBjb2RlIGFuZC9vciBjb21wbGV4IG5nLWlmIHN0YXRlbWVudHMgd2l0aGluIHlvdXIgZm9ybSB0ZW1wbGF0ZSB0b1xuICogc2hvdyBhbmQgaGlkZSBlcnJvciBtZXNzYWdlcyBzcGVjaWZpYyB0byB0aGUgc3RhdGUgb2YgYW4gaW5wdXQgZmllbGQsIHRoZSBgbmdNZXNzYWdlc2AgYW5kXG4gKiBgbmdNZXNzYWdlYCBkaXJlY3RpdmVzIGFyZSBkZXNpZ25lZCB0byBoYW5kbGUgdGhlIGNvbXBsZXhpdHksIGluaGVyaXRhbmNlIGFuZCBwcmlvcml0eVxuICogc2VxdWVuY2luZyBiYXNlZCBvbiB0aGUgb3JkZXIgb2YgaG93IHRoZSBtZXNzYWdlcyBhcmUgZGVmaW5lZCBpbiB0aGUgdGVtcGxhdGUuXG4gKlxuICogQ3VycmVudGx5LCB0aGUgbmdNZXNzYWdlcyBtb2R1bGUgb25seSBjb250YWlucyB0aGUgY29kZSBmb3IgdGhlIGBuZ01lc3NhZ2VzYCwgYG5nTWVzc2FnZXNJbmNsdWRlYFxuICogYG5nTWVzc2FnZWAgYW5kIGBuZ01lc3NhZ2VFeHBgIGRpcmVjdGl2ZXMuXG4gKlxuICogIyBVc2FnZVxuICogVGhlIGBuZ01lc3NhZ2VzYCBkaXJlY3RpdmUgYWxsb3dzIGtleXMgaW4gYSBrZXkvdmFsdWUgY29sbGVjdGlvbiB0byBiZSBhc3NvY2lhdGVkIHdpdGggYSBjaGlsZCBlbGVtZW50XG4gKiAob3IgJ21lc3NhZ2UnKSB0aGF0IHdpbGwgc2hvdyBvciBoaWRlIGJhc2VkIG9uIHRoZSB0cnV0aGluZXNzIG9mIHRoYXQga2V5J3MgdmFsdWUgaW4gdGhlIGNvbGxlY3Rpb24uIEEgY29tbW9uIHVzZVxuICogY2FzZSBmb3IgYG5nTWVzc2FnZXNgIGlzIHRvIGRpc3BsYXkgZXJyb3IgbWVzc2FnZXMgZm9yIGlucHV0cyB1c2luZyB0aGUgYCRlcnJvcmAgb2JqZWN0IGV4cG9zZWQgYnkgdGhlXG4gKiB7QGxpbmsgbmdNb2RlbCBuZ01vZGVsfSBkaXJlY3RpdmUuXG4gKlxuICogVGhlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlIGFyZSBtYXRjaGVkIHRvIHRoZSBjb2xsZWN0aW9uIGtleXMgYnkgYSBgbmdNZXNzYWdlYCBvclxuICogYG5nTWVzc2FnZUV4cGAgZGlyZWN0aXZlLiBUaGUgdmFsdWUgb2YgdGhlc2UgYXR0cmlidXRlcyBtdXN0IG1hdGNoIGEga2V5IGluIHRoZSBjb2xsZWN0aW9uIHRoYXQgaXMgcHJvdmlkZWQgYnlcbiAqIHRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlLlxuICpcbiAqIENvbnNpZGVyIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgd2hpY2ggaWxsdXN0cmF0ZXMgYSB0eXBpY2FsIHVzZSBjYXNlIG9mIGBuZ01lc3NhZ2VzYC4gV2l0aGluIHRoZSBmb3JtIGBteUZvcm1gIHdlXG4gKiBoYXZlIGEgdGV4dCBpbnB1dCBuYW1lZCBgbXlGaWVsZGAgd2hpY2ggaXMgYm91bmQgdG8gdGhlIHNjb3BlIHZhcmlhYmxlIGBmaWVsZGAgdXNpbmcgdGhlIHtAbGluayBuZ01vZGVsIG5nTW9kZWx9XG4gKiBkaXJlY3RpdmUuXG4gKlxuICogVGhlIGBteUZpZWxkYCBmaWVsZCBpcyBhIHJlcXVpcmVkIGlucHV0IG9mIHR5cGUgYGVtYWlsYCB3aXRoIGEgbWF4aW11bSBsZW5ndGggb2YgMTUgY2hhcmFjdGVycy5cbiAqXG4gKiBgYGBodG1sXG4gKiA8Zm9ybSBuYW1lPVwibXlGb3JtXCI+XG4gKiAgIDxsYWJlbD5cbiAqICAgICBFbnRlciB0ZXh0OlxuICogICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuZy1tb2RlbD1cImZpZWxkXCIgbmFtZT1cIm15RmllbGRcIiByZXF1aXJlZCBtYXhsZW5ndGg9XCIxNVwiIC8+XG4gKiAgIDwvbGFiZWw+XG4gKiAgIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlGaWVsZC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlBsZWFzZSBlbnRlciBhIHZhbHVlIGZvciB0aGlzIGZpZWxkLjwvZGl2PlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cImVtYWlsXCI+VGhpcyBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcy48L2Rpdj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtYXhsZW5ndGhcIj5UaGlzIGZpZWxkIGNhbiBiZSBhdCBtb3N0IDE1IGNoYXJhY3RlcnMgbG9uZy48L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKiBgYGBcbiAqXG4gKiBJbiBvcmRlciB0byBzaG93IGVycm9yIG1lc3NhZ2VzIGNvcnJlc3BvbmRpbmcgdG8gYG15RmllbGRgIHdlIGZpcnN0IGNyZWF0ZSBhbiBlbGVtZW50IHdpdGggYW4gYG5nTWVzc2FnZXNgIGF0dHJpYnV0ZVxuICogc2V0IHRvIHRoZSBgJGVycm9yYCBvYmplY3Qgb3duZWQgYnkgdGhlIGBteUZpZWxkYCBpbnB1dCBpbiBvdXIgYG15Rm9ybWAgZm9ybS5cbiAqXG4gKiBXaXRoaW4gdGhpcyBlbGVtZW50IHdlIHRoZW4gY3JlYXRlIHNlcGFyYXRlIGVsZW1lbnRzIGZvciBlYWNoIG9mIHRoZSBwb3NzaWJsZSBlcnJvcnMgdGhhdCBgbXlGaWVsZGAgY291bGQgaGF2ZS5cbiAqIFRoZSBgbmdNZXNzYWdlYCBhdHRyaWJ1dGUgaXMgdXNlZCB0byBkZWNsYXJlIHdoaWNoIGVsZW1lbnQocykgd2lsbCBhcHBlYXIgZm9yIHdoaWNoIGVycm9yIC0gZm9yIGV4YW1wbGUsXG4gKiBzZXR0aW5nIGBuZy1tZXNzYWdlPVwicmVxdWlyZWRcImAgc3BlY2lmaWVzIHRoYXQgdGhpcyBwYXJ0aWN1bGFyIGVsZW1lbnQgc2hvdWxkIGJlIGRpc3BsYXllZCB3aGVuIHRoZXJlXG4gKiBpcyBubyB2YWx1ZSBwcmVzZW50IGZvciB0aGUgcmVxdWlyZWQgZmllbGQgYG15RmllbGRgIChiZWNhdXNlIHRoZSBrZXkgYHJlcXVpcmVkYCB3aWxsIGJlIGB0cnVlYCBpbiB0aGUgb2JqZWN0XG4gKiBgbXlGb3JtLm15RmllbGQuJGVycm9yYCkuXG4gKlxuICogIyMjIE1lc3NhZ2Ugb3JkZXJcbiAqXG4gKiBCeSBkZWZhdWx0LCBgbmdNZXNzYWdlc2Agd2lsbCBvbmx5IGRpc3BsYXkgb25lIG1lc3NhZ2UgZm9yIGEgcGFydGljdWxhciBrZXkvdmFsdWUgY29sbGVjdGlvbiBhdCBhbnkgdGltZS4gSWYgbW9yZVxuICogdGhhbiBvbmUgbWVzc2FnZSAob3IgZXJyb3IpIGtleSBpcyBjdXJyZW50bHkgdHJ1ZSwgdGhlbiB3aGljaCBtZXNzYWdlIGlzIHNob3duIGlzIGRldGVybWluZWQgYnkgdGhlIG9yZGVyIG9mIG1lc3NhZ2VzXG4gKiBpbiB0aGUgSFRNTCB0ZW1wbGF0ZSBjb2RlIChtZXNzYWdlcyBkZWNsYXJlZCBmaXJzdCBhcmUgcHJpb3JpdGlzZWQpLiBUaGlzIG1lY2hhbmlzbSBtZWFucyB0aGUgZGV2ZWxvcGVyIGRvZXMgbm90IGhhdmVcbiAqIHRvIHByaW9yaXRpemUgbWVzc2FnZXMgdXNpbmcgY3VzdG9tIEphdmFTY3JpcHQgY29kZS5cbiAqXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIGVycm9yIG9iamVjdCBmb3Igb3VyIGV4YW1wbGUgKHdoaWNoIGluZm9ybXMgdXMgdGhhdCB0aGUgZmllbGQgYG15RmllbGRgIGN1cnJlbnRseSBoYXMgYm90aCB0aGVcbiAqIGByZXF1aXJlZGAgYW5kIGBlbWFpbGAgZXJyb3JzKTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiA8IS0tIGtlZXAgaW4gbWluZCB0aGF0IG5nTW9kZWwgYXV0b21hdGljYWxseSBzZXRzIHRoZXNlIGVycm9yIGZsYWdzIC0tPlxuICogbXlGaWVsZC4kZXJyb3IgPSB7IHJlcXVpcmVkIDogdHJ1ZSwgZW1haWw6IHRydWUsIG1heGxlbmd0aDogZmFsc2UgfTtcbiAqIGBgYFxuICogVGhlIGByZXF1aXJlZGAgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciBzaW5jZSBpdCBhcHBlYXJzIGJlZm9yZSB0aGUgYGVtYWlsYCBtZXNzYWdlIGluIHRoZSBET00uXG4gKiBPbmNlIHRoZSB1c2VyIHR5cGVzIGEgc2luZ2xlIGNoYXJhY3RlciwgdGhlIGByZXF1aXJlZGAgbWVzc2FnZSB3aWxsIGRpc2FwcGVhciAoc2luY2UgdGhlIGZpZWxkIG5vdyBoYXMgYSB2YWx1ZSlcbiAqIGJ1dCB0aGUgYGVtYWlsYCBtZXNzYWdlIHdpbGwgYmUgdmlzaWJsZSBiZWNhdXNlIGl0IGlzIHN0aWxsIGFwcGxpY2FibGUuXG4gKlxuICogIyMjIERpc3BsYXlpbmcgbXVsdGlwbGUgbWVzc2FnZXMgYXQgdGhlIHNhbWUgdGltZVxuICpcbiAqIFdoaWxlIGBuZ01lc3NhZ2VzYCB3aWxsIGJ5IGRlZmF1bHQgb25seSBkaXNwbGF5IG9uZSBlcnJvciBlbGVtZW50IGF0IGEgdGltZSwgdGhlIGBuZy1tZXNzYWdlcy1tdWx0aXBsZWAgYXR0cmlidXRlIGNhblxuICogYmUgYXBwbGllZCB0byB0aGUgYG5nTWVzc2FnZXNgIGNvbnRhaW5lciBlbGVtZW50IHRvIGNhdXNlIGl0IHRvIGRpc3BsYXkgYWxsIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZXMgYXQgb25jZTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8IS0tIGF0dHJpYnV0ZS1zdHlsZSB1c2FnZSAtLT5cbiAqIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlGaWVsZC4kZXJyb3JcIiBuZy1tZXNzYWdlcy1tdWx0aXBsZT4uLi48L2Rpdj5cbiAqXG4gKiA8IS0tIGVsZW1lbnQtc3R5bGUgdXNhZ2UgLS0+XG4gKiA8bmctbWVzc2FnZXMgZm9yPVwibXlGb3JtLm15RmllbGQuJGVycm9yXCIgbXVsdGlwbGU+Li4uPC9uZy1tZXNzYWdlcz5cbiAqIGBgYFxuICpcbiAqICMjIFJldXNpbmcgYW5kIE92ZXJyaWRpbmcgTWVzc2FnZXNcbiAqIEluIGFkZGl0aW9uIHRvIHByaW9yaXRpemF0aW9uLCBuZ01lc3NhZ2VzIGFsc28gYWxsb3dzIGZvciBpbmNsdWRpbmcgbWVzc2FnZXMgZnJvbSBhIHJlbW90ZSBvciBhbiBpbmxpbmVcbiAqIHRlbXBsYXRlLiBUaGlzIGFsbG93cyBmb3IgZ2VuZXJpYyBjb2xsZWN0aW9uIG9mIG1lc3NhZ2VzIHRvIGJlIHJldXNlZCBhY3Jvc3MgbXVsdGlwbGUgcGFydHMgb2YgYW5cbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxzY3JpcHQgdHlwZT1cInRleHQvbmctdGVtcGxhdGVcIiBpZD1cImVycm9yLW1lc3NhZ2VzXCI+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5sZW5ndGhcIj5UaGlzIGZpZWxkIGlzIHRvbyBzaG9ydDwvZGl2PlxuICogPC9zY3JpcHQ+XG4gKlxuICogPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUZpZWxkLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICA8ZGl2IG5nLW1lc3NhZ2VzLWluY2x1ZGU9XCJlcnJvci1tZXNzYWdlc1wiPjwvZGl2PlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBIb3dldmVyLCBpbmNsdWRpbmcgZ2VuZXJpYyBtZXNzYWdlcyBtYXkgbm90IGJlIHVzZWZ1bCBlbm91Z2ggdG8gbWF0Y2ggYWxsIGlucHV0IGZpZWxkcywgdGhlcmVmb3JlLFxuICogYG5nTWVzc2FnZXNgIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIG92ZXJyaWRlIG1lc3NhZ2VzIGRlZmluZWQgaW4gdGhlIHJlbW90ZSB0ZW1wbGF0ZSBieSByZWRlZmluaW5nXG4gKiB0aGVtIHdpdGhpbiB0aGUgZGlyZWN0aXZlIGNvbnRhaW5lci5cbiAqXG4gKiBgYGBodG1sXG4gKiA8IS0tIGEgZ2VuZXJpYyB0ZW1wbGF0ZSBvZiBlcnJvciBtZXNzYWdlcyBrbm93biBhcyBcIm15LWN1c3RvbS1tZXNzYWdlc1wiIC0tPlxuICogPHNjcmlwdCB0eXBlPVwidGV4dC9uZy10ZW1wbGF0ZVwiIGlkPVwibXktY3VzdG9tLW1lc3NhZ2VzXCI+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5sZW5ndGhcIj5UaGlzIGZpZWxkIGlzIHRvbyBzaG9ydDwvZGl2PlxuICogPC9zY3JpcHQ+XG4gKlxuICogPGZvcm0gbmFtZT1cIm15Rm9ybVwiPlxuICogICA8bGFiZWw+XG4gKiAgICAgRW1haWwgYWRkcmVzc1xuICogICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxuICogICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbmFtZT1cIm15RW1haWxcIlxuICogICAgICAgICAgICBuZy1tb2RlbD1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbWlubGVuZ3RoPVwiNVwiXG4gKiAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gKiAgIDwvbGFiZWw+XG4gKiAgIDwhLS0gYW55IG5nLW1lc3NhZ2UgZWxlbWVudHMgdGhhdCBhcHBlYXIgQkVGT1JFIHRoZSBuZy1tZXNzYWdlcy1pbmNsdWRlIHdpbGxcbiAqICAgICAgICBvdmVycmlkZSB0aGUgbWVzc2FnZXMgcHJlc2VudCBpbiB0aGUgbmctbWVzc2FnZXMtaW5jbHVkZSB0ZW1wbGF0ZSAtLT5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUVtYWlsLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICAgIDwhLS0gdGhpcyByZXF1aXJlZCBtZXNzYWdlIGhhcyBvdmVycmlkZGVuIHRoZSB0ZW1wbGF0ZSBtZXNzYWdlIC0tPlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+WW91IGRpZCBub3QgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzPC9kaXY+XG4gKlxuICogICAgIDwhLS0gdGhpcyBpcyBhIGJyYW5kIG5ldyBtZXNzYWdlIGFuZCB3aWxsIGFwcGVhciBsYXN0IGluIHRoZSBwcmlvcml0aXphdGlvbiAtLT5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJlbWFpbFwiPllvdXIgZW1haWwgYWRkcmVzcyBpcyBpbnZhbGlkPC9kaXY+XG4gKlxuICogICAgIDwhLS0gYW5kIGhlcmUgYXJlIHRoZSBnZW5lcmljIGVycm9yIG1lc3NhZ2VzIC0tPlxuICogICAgIDxkaXYgbmctbWVzc2FnZXMtaW5jbHVkZT1cIm15LWN1c3RvbS1tZXNzYWdlc1wiPjwvZGl2PlxuICogICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqIGBgYFxuICpcbiAqIEluIHRoZSBleGFtcGxlIEhUTUwgY29kZSBhYm92ZSB0aGUgbWVzc2FnZSB0aGF0IGlzIHNldCBvbiByZXF1aXJlZCB3aWxsIG92ZXJyaWRlIHRoZSBjb3JyZXNwb25kaW5nXG4gKiByZXF1aXJlZCBtZXNzYWdlIGRlZmluZWQgd2l0aGluIHRoZSByZW1vdGUgdGVtcGxhdGUuIFRoZXJlZm9yZSwgd2l0aCBwYXJ0aWN1bGFyIGlucHV0IGZpZWxkcyAoc3VjaFxuICogZW1haWwgYWRkcmVzc2VzLCBkYXRlIGZpZWxkcywgYXV0b2NvbXBsZXRlIGlucHV0cywgZXRjLi4uKSwgc3BlY2lhbGl6ZWQgZXJyb3IgbWVzc2FnZXMgY2FuIGJlIGFwcGxpZWRcbiAqIHdoaWxlIG1vcmUgZ2VuZXJpYyBtZXNzYWdlcyBjYW4gYmUgdXNlZCB0byBoYW5kbGUgb3RoZXIsIG1vcmUgZ2VuZXJhbCBpbnB1dCBlcnJvcnMuXG4gKlxuICogIyMgRHluYW1pYyBNZXNzYWdpbmdcbiAqIG5nTWVzc2FnZXMgYWxzbyBzdXBwb3J0cyB1c2luZyBleHByZXNzaW9ucyB0byBkeW5hbWljYWxseSBjaGFuZ2Uga2V5IHZhbHVlcy4gVXNpbmcgYXJyYXlzIGFuZFxuICogcmVwZWF0ZXJzIHRvIGxpc3QgbWVzc2FnZXMgaXMgYWxzbyBzdXBwb3J0ZWQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgY29kZSBiZWxvdyB3aWxsIGJlIGFibGUgdG9cbiAqIGZ1bGx5IGFkYXB0IGl0c2VsZiBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgbWVzc2FnZSB3aGVuIGFueSBvZiB0aGUgZXhwcmVzc2lvbiBkYXRhIGNoYW5nZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGZvcm0gbmFtZT1cIm15Rm9ybVwiPlxuICogICA8bGFiZWw+XG4gKiAgICAgRW1haWwgYWRkcmVzc1xuICogICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxuICogICAgICAgICAgICBuYW1lPVwibXlFbWFpbFwiXG4gKiAgICAgICAgICAgIG5nLW1vZGVsPVwiZW1haWxcIlxuICogICAgICAgICAgICBtaW5sZW5ndGg9XCI1XCJcbiAqICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAqICAgPC9sYWJlbD5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUVtYWlsLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+WW91IGRpZCBub3QgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzPC9kaXY+XG4gKiAgICAgPGRpdiBuZy1yZXBlYXQ9XCJlcnJvck1lc3NhZ2UgaW4gZXJyb3JNZXNzYWdlc1wiPlxuICogICAgICAgPCEtLSB1c2UgbmctbWVzc2FnZS1leHAgZm9yIGEgbWVzc2FnZSB3aG9zZSBrZXkgaXMgZ2l2ZW4gYnkgYW4gZXhwcmVzc2lvbiAtLT5cbiAqICAgICAgIDxkaXYgbmctbWVzc2FnZS1leHA9XCJlcnJvck1lc3NhZ2UudHlwZVwiPnt7IGVycm9yTWVzc2FnZS50ZXh0IH19PC9kaXY+XG4gKiAgICAgPC9kaXY+XG4gKiAgIDwvZGl2PlxuICogPC9mb3JtPlxuICogYGBgXG4gKlxuICogVGhlIGBlcnJvck1lc3NhZ2UudHlwZWAgZXhwcmVzc2lvbiBjYW4gYmUgYSBzdHJpbmcgdmFsdWUgb3IgaXQgY2FuIGJlIGFuIGFycmF5IHNvXG4gKiB0aGF0IG11bHRpcGxlIGVycm9ycyBjYW4gYmUgYXNzb2NpYXRlZCB3aXRoIGEgc2luZ2xlIGVycm9yIG1lc3NhZ2U6XG4gKlxuICogYGBgaHRtbFxuICogICA8bGFiZWw+XG4gKiAgICAgRW1haWwgYWRkcmVzc1xuICogICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxuICogICAgICAgICAgICBuZy1tb2RlbD1cImRhdGEuZW1haWxcIlxuICogICAgICAgICAgICBuYW1lPVwibXlFbWFpbFwiXG4gKiAgICAgICAgICAgIG5nLW1pbmxlbmd0aD1cIjVcIlxuICogICAgICAgICAgICBuZy1tYXhsZW5ndGg9XCIxMDBcIlxuICogICAgICAgICAgICByZXF1aXJlZCAvPlxuICogICA8L2xhYmVsPlxuICogICA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RW1haWwuJGVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlLWV4cD1cIidyZXF1aXJlZCdcIj5Zb3UgZGlkIG5vdCBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3M8L2Rpdj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2UtZXhwPVwiWydtaW5sZW5ndGgnLCAnbWF4bGVuZ3RoJ11cIj5cbiAqICAgICAgIFlvdXIgZW1haWwgbXVzdCBiZSBiZXR3ZWVuIDUgYW5kIDEwMCBjaGFyYWN0ZXJzIGxvbmdcbiAqICAgICA8L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBGZWVsIGZyZWUgdG8gdXNlIG90aGVyIHN0cnVjdHVyYWwgZGlyZWN0aXZlcyBzdWNoIGFzIG5nLWlmIGFuZCBuZy1zd2l0Y2ggdG8gZnVydGhlciBjb250cm9sXG4gKiB3aGF0IG1lc3NhZ2VzIGFyZSBhY3RpdmUgYW5kIHdoZW4uIEJlIGNhcmVmdWwsIGlmIHlvdSBwbGFjZSBuZy1tZXNzYWdlIG9uIHRoZSBzYW1lIGVsZW1lbnRcbiAqIGFzIHRoZXNlIHN0cnVjdHVyYWwgZGlyZWN0aXZlcywgQW5ndWxhciBtYXkgbm90IGJlIGFibGUgdG8gZGV0ZXJtaW5lIGlmIGEgbWVzc2FnZSBpcyBhY3RpdmVcbiAqIG9yIG5vdC4gVGhlcmVmb3JlIGl0IGlzIGJlc3QgdG8gcGxhY2UgdGhlIG5nLW1lc3NhZ2Ugb24gYSBjaGlsZCBlbGVtZW50IG9mIHRoZSBzdHJ1Y3R1cmFsXG4gKiBkaXJlY3RpdmUuXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUVtYWlsLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICA8ZGl2IG5nLWlmPVwic2hvd1JlcXVpcmVkRXJyb3JcIj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlBsZWFzZSBlbnRlciBzb21ldGhpbmc8L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqICMjIEFuaW1hdGlvbnNcbiAqIElmIHRoZSBgbmdBbmltYXRlYCBtb2R1bGUgaXMgYWN0aXZlIHdpdGhpbiB0aGUgYXBwbGljYXRpb24gdGhlbiB0aGUgYG5nTWVzc2FnZXNgLCBgbmdNZXNzYWdlYCBhbmRcbiAqIGBuZ01lc3NhZ2VFeHBgIGRpcmVjdGl2ZXMgd2lsbCB0cmlnZ2VyIGFuaW1hdGlvbnMgd2hlbmV2ZXIgYW55IG1lc3NhZ2VzIGFyZSBhZGRlZCBhbmQgcmVtb3ZlZCBmcm9tXG4gKiB0aGUgRE9NIGJ5IHRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlLlxuICpcbiAqIFdoZW5ldmVyIHRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlIGNvbnRhaW5zIG9uZSBvciBtb3JlIHZpc2libGUgbWVzc2FnZXMgdGhlbiB0aGUgYC5uZy1hY3RpdmVgIENTU1xuICogY2xhc3Mgd2lsbCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudC4gVGhlIGAubmctaW5hY3RpdmVgIENTUyBjbGFzcyB3aWxsIGJlIGFwcGxpZWQgd2hlbiB0aGVyZSBhcmUgbm9cbiAqIG1lc3NhZ2VzIHByZXNlbnQuIFRoZXJlZm9yZSwgQ1NTIHRyYW5zaXRpb25zIGFuZCBrZXlmcmFtZXMgYXMgd2VsbCBhcyBKYXZhU2NyaXB0IGFuaW1hdGlvbnMgY2FuXG4gKiBob29rIGludG8gdGhlIGFuaW1hdGlvbnMgd2hlbmV2ZXIgdGhlc2UgY2xhc3NlcyBhcmUgYWRkZWQvcmVtb3ZlZC5cbiAqXG4gKiBMZXQncyBzYXkgdGhhdCBvdXIgSFRNTCBjb2RlIGZvciBvdXIgbWVzc2FnZXMgY29udGFpbmVyIGxvb2tzIGxpa2Ugc286XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBuZy1tZXNzYWdlcz1cIm15TWVzc2FnZXNcIiBjbGFzcz1cIm15LW1lc3NhZ2VzXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cImFsZXJ0XCIgY2xhc3M9XCJzb21lLW1lc3NhZ2VcIj4uLi48L2Rpdj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwiZmFpbFwiIGNsYXNzPVwic29tZS1tZXNzYWdlXCI+Li4uPC9kaXY+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFRoZW4gdGhlIENTUyBhbmltYXRpb24gY29kZSBmb3IgdGhlIG1lc3NhZ2UgY29udGFpbmVyIGxvb2tzIGxpa2Ugc286XG4gKlxuICogYGBgY3NzXG4gKiAubXktbWVzc2FnZXMge1xuICogICB0cmFuc2l0aW9uOjFzIGxpbmVhciBhbGw7XG4gKiB9XG4gKiAubXktbWVzc2FnZXMubmctYWN0aXZlIHtcbiAqICAgLy8gbWVzc2FnZXMgYXJlIHZpc2libGVcbiAqIH1cbiAqIC5teS1tZXNzYWdlcy5uZy1pbmFjdGl2ZSB7XG4gKiAgIC8vIG1lc3NhZ2VzIGFyZSBoaWRkZW5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW5ldmVyIGFuIGlubmVyIG1lc3NhZ2UgaXMgYXR0YWNoZWQgKGJlY29tZXMgdmlzaWJsZSkgb3IgcmVtb3ZlZCAoYmVjb21lcyBoaWRkZW4pIHRoZW4gdGhlIGVudGVyXG4gKiBhbmQgbGVhdmUgYW5pbWF0aW9uIGlzIHRyaWdnZXJlZCBmb3IgZWFjaCBwYXJ0aWN1bGFyIGVsZW1lbnQgYm91bmQgdG8gdGhlIGBuZ01lc3NhZ2VgIGRpcmVjdGl2ZS5cbiAqXG4gKiBUaGVyZWZvcmUsIHRoZSBDU1MgY29kZSBmb3IgdGhlIGlubmVyIG1lc3NhZ2VzIGxvb2tzIGxpa2Ugc286XG4gKlxuICogYGBgY3NzXG4gKiAuc29tZS1tZXNzYWdlIHtcbiAqICAgdHJhbnNpdGlvbjoxcyBsaW5lYXIgYWxsO1xuICogfVxuICpcbiAqIC5zb21lLW1lc3NhZ2UubmctZW50ZXIge31cbiAqIC5zb21lLW1lc3NhZ2UubmctZW50ZXIubmctZW50ZXItYWN0aXZlIHt9XG4gKlxuICogLnNvbWUtbWVzc2FnZS5uZy1sZWF2ZSB7fVxuICogLnNvbWUtbWVzc2FnZS5uZy1sZWF2ZS5uZy1sZWF2ZS1hY3RpdmUge31cbiAqIGBgYFxuICpcbiAqIHtAbGluayBuZ0FuaW1hdGUgQ2xpY2sgaGVyZX0gdG8gbGVhcm4gaG93IHRvIHVzZSBKYXZhU2NyaXB0IGFuaW1hdGlvbnMgb3IgdG8gbGVhcm4gbW9yZSBhYm91dCBuZ0FuaW1hdGUuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCduZ01lc3NhZ2VzJywgW10sIGZ1bmN0aW9uIGluaXRBbmd1bGFySGVscGVycygpIHtcbiAgLy8gQWNjZXNzIGhlbHBlcnMgZnJvbSBhbmd1bGFyIGNvcmUuXG4gIC8vIERvIGl0IGluc2lkZSBhIGBjb25maWdgIGJsb2NrIHRvIGVuc3VyZSBgd2luZG93LmFuZ3VsYXJgIGlzIGF2YWlsYWJsZS5cbiAgZm9yRWFjaCA9IGFuZ3VsYXIuZm9yRWFjaDtcbiAgaXNBcnJheSA9IGFuZ3VsYXIuaXNBcnJheTtcbiAgaXNTdHJpbmcgPSBhbmd1bGFyLmlzU3RyaW5nO1xuICBqcUxpdGUgPSBhbmd1bGFyLmVsZW1lbnQ7XG59KVxuICAuaW5mbyh7IGFuZ3VsYXJWZXJzaW9uOiAnMS42LjUnIH0pXG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAgICogQG1vZHVsZSBuZ01lc3NhZ2VzXG4gICAqIEBuYW1lIG5nTWVzc2FnZXNcbiAgICogQHJlc3RyaWN0IEFFXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmdNZXNzYWdlc2AgaXMgYSBkaXJlY3RpdmUgdGhhdCBpcyBkZXNpZ25lZCB0byBzaG93IGFuZCBoaWRlIG1lc3NhZ2VzIGJhc2VkIG9uIHRoZSBzdGF0ZVxuICAgKiBvZiBhIGtleS92YWx1ZSBvYmplY3QgdGhhdCBpdCBsaXN0ZW5zIG9uLiBUaGUgZGlyZWN0aXZlIGl0c2VsZiBjb21wbGVtZW50cyBlcnJvciBtZXNzYWdlXG4gICAqIHJlcG9ydGluZyB3aXRoIHRoZSBgbmdNb2RlbGAgJGVycm9yIG9iamVjdCAod2hpY2ggc3RvcmVzIGEga2V5L3ZhbHVlIHN0YXRlIG9mIHZhbGlkYXRpb24gZXJyb3JzKS5cbiAgICpcbiAgICogYG5nTWVzc2FnZXNgIG1hbmFnZXMgdGhlIHN0YXRlIG9mIGludGVybmFsIG1lc3NhZ2VzIHdpdGhpbiBpdHMgY29udGFpbmVyIGVsZW1lbnQuIFRoZSBpbnRlcm5hbFxuICAgKiBtZXNzYWdlcyB1c2UgdGhlIGBuZ01lc3NhZ2VgIGRpcmVjdGl2ZSBhbmQgd2lsbCBiZSBpbnNlcnRlZC9yZW1vdmVkIGZyb20gdGhlIHBhZ2UgZGVwZW5kaW5nXG4gICAqIG9uIGlmIHRoZXkncmUgcHJlc2VudCB3aXRoaW4gdGhlIGtleS92YWx1ZSBvYmplY3QuIEJ5IGRlZmF1bHQsIG9ubHkgb25lIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWRcbiAgICogYXQgYSB0aW1lIGFuZCB0aGlzIGRlcGVuZHMgb24gdGhlIHByaW9yaXRpemF0aW9uIG9mIHRoZSBtZXNzYWdlcyB3aXRoaW4gdGhlIHRlbXBsYXRlLiAoVGhpcyBjYW5cbiAgICogYmUgY2hhbmdlZCBieSB1c2luZyB0aGUgYG5nLW1lc3NhZ2VzLW11bHRpcGxlYCBvciBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiB0aGUgZGlyZWN0aXZlIGNvbnRhaW5lci4pXG4gICAqXG4gICAqIEEgcmVtb3RlIHRlbXBsYXRlIGNhbiBhbHNvIGJlIHVzZWQgdG8gcHJvbW90ZSBtZXNzYWdlIHJldXNhYmlsaXR5IGFuZCBtZXNzYWdlcyBjYW4gYWxzbyBiZVxuICAgKiBvdmVycmlkZGVuLlxuICAgKlxuICAgKiB7QGxpbmsgbW9kdWxlOm5nTWVzc2FnZXMgQ2xpY2sgaGVyZX0gdG8gbGVhcm4gbW9yZSBhYm91dCBgbmdNZXNzYWdlc2AgYW5kIGBuZ01lc3NhZ2VgLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgaHRtbFxuICAgKiA8IS0tIHVzaW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVzIC0tPlxuICAgKiA8QU5ZIG5nLW1lc3NhZ2VzPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZT1cInN0cmluZ1ZhbHVlXCI+Li4uPC9BTlk+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlPVwic3RyaW5nVmFsdWUxLCBzdHJpbmdWYWx1ZTIsIC4uLlwiPi4uLjwvQU5ZPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZS1leHA9XCJleHByZXNzaW9uVmFsdWVcIj4uLi48L0FOWT5cbiAgICogPC9BTlk+XG4gICAqXG4gICAqIDwhLS0gb3IgYnkgdXNpbmcgZWxlbWVudCBkaXJlY3RpdmVzIC0tPlxuICAgKiA8bmctbWVzc2FnZXMgZm9yPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW49XCJzdHJpbmdWYWx1ZVwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuPVwic3RyaW5nVmFsdWUxLCBzdHJpbmdWYWx1ZTIsIC4uLlwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuLWV4cD1cImV4cHJlc3Npb25WYWx1ZVwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogPC9uZy1tZXNzYWdlcz5cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZ01lc3NhZ2VzIGFuIGFuZ3VsYXIgZXhwcmVzc2lvbiBldmFsdWF0aW5nIHRvIGEga2V5L3ZhbHVlIG9iamVjdFxuICAgKiAgICAgICAgICAgICAgICAgKHRoaXMgaXMgdHlwaWNhbGx5IHRoZSAkZXJyb3Igb2JqZWN0IG9uIGFuIG5nTW9kZWwgaW5zdGFuY2UpLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG5nTWVzc2FnZXNNdWx0aXBsZXxtdWx0aXBsZSB3aGVuIHNldCwgYWxsIG1lc3NhZ2VzIHdpbGwgYmUgZGlzcGxheWVkIHdpdGggdHJ1ZVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8ZXhhbXBsZSBuYW1lPVwibmdNZXNzYWdlcy1kaXJlY3RpdmVcIiBtb2R1bGU9XCJuZ01lc3NhZ2VzRXhhbXBsZVwiXG4gICAqICAgICAgICAgIGRlcHM9XCJhbmd1bGFyLW1lc3NhZ2VzLmpzXCJcbiAgICogICAgICAgICAgYW5pbWF0aW9ucz1cInRydWVcIiBmaXhCYXNlPVwidHJ1ZVwiPlxuICAgKiAgIDxmaWxlIG5hbWU9XCJpbmRleC5odG1sXCI+XG4gICAqICAgICA8Zm9ybSBuYW1lPVwibXlGb3JtXCI+XG4gICAqICAgICAgIDxsYWJlbD5cbiAgICogICAgICAgICBFbnRlciB5b3VyIG5hbWU6XG4gICAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICogICAgICAgICAgICAgICAgbmFtZT1cIm15TmFtZVwiXG4gICAqICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwibmFtZVwiXG4gICAqICAgICAgICAgICAgICAgIG5nLW1pbmxlbmd0aD1cIjVcIlxuICAgKiAgICAgICAgICAgICAgICBuZy1tYXhsZW5ndGg9XCIyMFwiXG4gICAqICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gICAqICAgICAgIDwvbGFiZWw+XG4gICAqICAgICAgIDxwcmU+bXlGb3JtLm15TmFtZS4kZXJyb3IgPSB7eyBteUZvcm0ubXlOYW1lLiRlcnJvciB8IGpzb24gfX08L3ByZT5cbiAgICpcbiAgICogICAgICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teU5hbWUuJGVycm9yXCIgc3R5bGU9XCJjb2xvcjptYXJvb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPllvdSBkaWQgbm90IGVudGVyIGEgZmllbGQ8L2Rpdj5cbiAgICogICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5sZW5ndGhcIj5Zb3VyIGZpZWxkIGlzIHRvbyBzaG9ydDwvZGl2PlxuICAgKiAgICAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm1heGxlbmd0aFwiPllvdXIgZmllbGQgaXMgdG9vIGxvbmc8L2Rpdj5cbiAgICogICAgICAgPC9kaXY+XG4gICAqICAgICA8L2Zvcm0+XG4gICAqICAgPC9maWxlPlxuICAgKiAgIDxmaWxlIG5hbWU9XCJzY3JpcHQuanNcIj5cbiAgICogICAgIGFuZ3VsYXIubW9kdWxlKCduZ01lc3NhZ2VzRXhhbXBsZScsIFsnbmdNZXNzYWdlcyddKTtcbiAgICogICA8L2ZpbGU+XG4gICAqIDwvZXhhbXBsZT5cbiAgICovXG4gIC5kaXJlY3RpdmUoJ25nTWVzc2FnZXMnLCBbJyRhbmltYXRlJywgZnVuY3Rpb24oJGFuaW1hdGUpIHtcbiAgICB2YXIgQUNUSVZFX0NMQVNTID0gJ25nLWFjdGl2ZSc7XG4gICAgdmFyIElOQUNUSVZFX0NMQVNTID0gJ25nLWluYWN0aXZlJztcblxuICAgIHJldHVybiB7XG4gICAgICByZXF1aXJlOiAnbmdNZXNzYWdlcycsXG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6IFsnJGVsZW1lbnQnLCAnJHNjb3BlJywgJyRhdHRycycsIGZ1bmN0aW9uIE5nTWVzc2FnZXNDdHJsKCRlbGVtZW50LCAkc2NvcGUsICRhdHRycykge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIHZhciBsYXRlc3RLZXkgPSAwO1xuICAgICAgICB2YXIgbmV4dEF0dGFjaElkID0gMDtcblxuICAgICAgICB0aGlzLmdldEF0dGFjaElkID0gZnVuY3Rpb24gZ2V0QXR0YWNoSWQoKSB7IHJldHVybiBuZXh0QXR0YWNoSWQrKzsgfTtcblxuICAgICAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzID0ge307XG4gICAgICAgIHZhciByZW5kZXJMYXRlciwgY2FjaGVkQ29sbGVjdGlvbjtcblxuICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbiB8fCB7fTtcblxuICAgICAgICAgIHJlbmRlckxhdGVyID0gZmFsc2U7XG4gICAgICAgICAgY2FjaGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cbiAgICAgICAgICAvLyB0aGlzIGlzIHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBlbXB0eSBvciBpZiB0aGUgYXR0cmlidXRlIHZhbHVlIGlzIHRydXRoeVxuICAgICAgICAgIHZhciBtdWx0aXBsZSA9IGlzQXR0clRydXRoeSgkc2NvcGUsICRhdHRycy5uZ01lc3NhZ2VzTXVsdGlwbGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgaXNBdHRyVHJ1dGh5KCRzY29wZSwgJGF0dHJzLm11bHRpcGxlKTtcblxuICAgICAgICAgIHZhciB1bm1hdGNoZWRNZXNzYWdlcyA9IFtdO1xuICAgICAgICAgIHZhciBtYXRjaGVkS2V5cyA9IHt9O1xuICAgICAgICAgIHZhciBtZXNzYWdlSXRlbSA9IGN0cmwuaGVhZDtcbiAgICAgICAgICB2YXIgbWVzc2FnZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgdmFyIHRvdGFsTWVzc2FnZXMgPSAwO1xuXG4gICAgICAgICAgLy8gd2UgdXNlICE9IGluc3RlYWQgb2YgIT09IHRvIGFsbG93IGZvciBib3RoIHVuZGVmaW5lZCBhbmQgbnVsbCB2YWx1ZXNcbiAgICAgICAgICB3aGlsZSAobWVzc2FnZUl0ZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdG90YWxNZXNzYWdlcysrO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VDdHJsID0gbWVzc2FnZUl0ZW0ubWVzc2FnZTtcblxuICAgICAgICAgICAgdmFyIG1lc3NhZ2VVc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2VGb3VuZCkge1xuICAgICAgICAgICAgICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2VVc2VkICYmIHRydXRoeSh2YWx1ZSkgJiYgbWVzc2FnZUN0cmwudGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRvIHByZXZlbnQgdGhlIHNhbWUgZXJyb3IgbmFtZSBmcm9tIHNob3dpbmcgdXAgdHdpY2VcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkS2V5c1trZXldKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICBtYXRjaGVkS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgbWVzc2FnZVVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZUN0cmwuYXR0YWNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VkKSB7XG4gICAgICAgICAgICAgIC8vIHVubGVzcyB3ZSB3YW50IHRvIGRpc3BsYXkgbXVsdGlwbGUgbWVzc2FnZXMgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgICAgLy8gc2V0IGEgZmxhZyBoZXJlIHRvIGF2b2lkIGRpc3BsYXlpbmcgdGhlIG5leHQgbWVzc2FnZSBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICBtZXNzYWdlRm91bmQgPSAhbXVsdGlwbGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1bm1hdGNoZWRNZXNzYWdlcy5wdXNoKG1lc3NhZ2VDdHJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVzc2FnZUl0ZW0gPSBtZXNzYWdlSXRlbS5uZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvckVhY2godW5tYXRjaGVkTWVzc2FnZXMsIGZ1bmN0aW9uKG1lc3NhZ2VDdHJsKSB7XG4gICAgICAgICAgICBtZXNzYWdlQ3RybC5kZXRhY2goKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh1bm1hdGNoZWRNZXNzYWdlcy5sZW5ndGggIT09IHRvdGFsTWVzc2FnZXMpIHtcbiAgICAgICAgICAgICRhbmltYXRlLnNldENsYXNzKCRlbGVtZW50LCBBQ1RJVkVfQ0xBU1MsIElOQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGFuaW1hdGUuc2V0Q2xhc3MoJGVsZW1lbnQsIElOQUNUSVZFX0NMQVNTLCBBQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuJHdhdGNoQ29sbGVjdGlvbigkYXR0cnMubmdNZXNzYWdlcyB8fCAkYXR0cnNbJ2ZvciddLCBjdHJsLnJlbmRlcik7XG5cbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgZGVzdHJveWVkLCBwcm9hY3RpdmVseSBkZXN0cm95IGFsbCB0aGUgY3VycmVudGx5IHZpc2libGUgbWVzc2FnZXNcbiAgICAgICAgJGVsZW1lbnQub24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZm9yRWFjaChtZXNzYWdlcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5tZXNzYWdlLmRldGFjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlUmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFyZW5kZXJMYXRlcikge1xuICAgICAgICAgICAgcmVuZGVyTGF0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgJHNjb3BlLiRldmFsQXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChyZW5kZXJMYXRlciAmJiBjYWNoZWRDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY3RybC5yZW5kZXIoY2FjaGVkQ29sbGVjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gZnVuY3Rpb24oY29tbWVudCwgbWVzc2FnZUN0cmwpIHtcbiAgICAgICAgICB2YXIgbmV4dEtleSA9IGxhdGVzdEtleS50b1N0cmluZygpO1xuICAgICAgICAgIG1lc3NhZ2VzW25leHRLZXldID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZUN0cmxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGluc2VydE1lc3NhZ2VOb2RlKCRlbGVtZW50WzBdLCBjb21tZW50LCBuZXh0S2V5KTtcbiAgICAgICAgICBjb21tZW50LiQkbmdNZXNzYWdlTm9kZSA9IG5leHRLZXk7XG4gICAgICAgICAgbGF0ZXN0S2V5Kys7XG5cbiAgICAgICAgICBjdHJsLnJlUmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyID0gZnVuY3Rpb24oY29tbWVudCkge1xuICAgICAgICAgIHZhciBrZXkgPSBjb21tZW50LiQkbmdNZXNzYWdlTm9kZTtcbiAgICAgICAgICBkZWxldGUgY29tbWVudC4kJG5nTWVzc2FnZU5vZGU7XG4gICAgICAgICAgcmVtb3ZlTWVzc2FnZU5vZGUoJGVsZW1lbnRbMF0sIGNvbW1lbnQsIGtleSk7XG4gICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW2tleV07XG4gICAgICAgICAgY3RybC5yZVJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRQcmV2aW91c01lc3NhZ2UocGFyZW50LCBjb21tZW50KSB7XG4gICAgICAgICAgdmFyIHByZXZOb2RlID0gY29tbWVudDtcbiAgICAgICAgICB2YXIgcGFyZW50TG9va3VwID0gW107XG5cbiAgICAgICAgICB3aGlsZSAocHJldk5vZGUgJiYgcHJldk5vZGUgIT09IHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIHByZXZLZXkgPSBwcmV2Tm9kZS4kJG5nTWVzc2FnZU5vZGU7XG4gICAgICAgICAgICBpZiAocHJldktleSAmJiBwcmV2S2V5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZXNbcHJldktleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRpdmUgZGVlcGVyIGludG8gdGhlIERPTSBhbmQgZXhhbWluZSBpdHMgY2hpbGRyZW4gZm9yIGFueSBuZ01lc3NhZ2VcbiAgICAgICAgICAgIC8vIGNvbW1lbnRzIHRoYXQgbWF5IGJlIGluIGFuIGVsZW1lbnQgdGhhdCBhcHBlYXJzIGRlZXBlciBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHByZXZOb2RlLmNoaWxkTm9kZXMubGVuZ3RoICYmIHBhcmVudExvb2t1cC5pbmRleE9mKHByZXZOb2RlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgcGFyZW50TG9va3VwLnB1c2gocHJldk5vZGUpO1xuICAgICAgICAgICAgICBwcmV2Tm9kZSA9IHByZXZOb2RlLmNoaWxkTm9kZXNbcHJldk5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldk5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIHByZXZOb2RlID0gcHJldk5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJldk5vZGUgPSBwcmV2Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBwYXJlbnRMb29rdXAucHVzaChwcmV2Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0TWVzc2FnZU5vZGUocGFyZW50LCBjb21tZW50LCBrZXkpIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZU5vZGUgPSBtZXNzYWdlc1trZXldO1xuICAgICAgICAgIGlmICghY3RybC5oZWFkKSB7XG4gICAgICAgICAgICBjdHJsLmhlYWQgPSBtZXNzYWdlTm9kZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFByZXZpb3VzTWVzc2FnZShwYXJlbnQsIGNvbW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VOb2RlLm5leHQgPSBtYXRjaC5uZXh0O1xuICAgICAgICAgICAgICBtYXRjaC5uZXh0ID0gbWVzc2FnZU5vZGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlTm9kZS5uZXh0ID0gY3RybC5oZWFkO1xuICAgICAgICAgICAgICBjdHJsLmhlYWQgPSBtZXNzYWdlTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNZXNzYWdlTm9kZShwYXJlbnQsIGNvbW1lbnQsIGtleSkge1xuICAgICAgICAgIHZhciBtZXNzYWdlTm9kZSA9IG1lc3NhZ2VzW2tleV07XG5cbiAgICAgICAgICB2YXIgbWF0Y2ggPSBmaW5kUHJldmlvdXNNZXNzYWdlKHBhcmVudCwgY29tbWVudCk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBtYXRjaC5uZXh0ID0gbWVzc2FnZU5vZGUubmV4dDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3RybC5oZWFkID0gbWVzc2FnZU5vZGUubmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzQXR0clRydXRoeShzY29wZSwgYXR0cikge1xuICAgICByZXR1cm4gKGlzU3RyaW5nKGF0dHIpICYmIGF0dHIubGVuZ3RoID09PSAwKSB8fCAvL2VtcHR5IGF0dHJpYnV0ZVxuICAgICAgICAgICAgdHJ1dGh5KHNjb3BlLiRldmFsKGF0dHIpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cnV0aHkodmFsKSB7XG4gICAgICByZXR1cm4gaXNTdHJpbmcodmFsKSA/IHZhbC5sZW5ndGggOiAhIXZhbDtcbiAgICB9XG4gIH1dKVxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZGlyZWN0aXZlXG4gICAqIEBuYW1lIG5nTWVzc2FnZXNJbmNsdWRlXG4gICAqIEByZXN0cmljdCBBRVxuICAgKiBAc2NvcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGBuZ01lc3NhZ2VzSW5jbHVkZWAgaXMgYSBkaXJlY3RpdmUgd2l0aCB0aGUgcHVycG9zZSB0byBpbXBvcnQgZXhpc3RpbmcgbmdNZXNzYWdlIHRlbXBsYXRlXG4gICAqIGNvZGUgZnJvbSBhIHJlbW90ZSB0ZW1wbGF0ZSBhbmQgcGxhY2UgdGhlIGRvd25sb2FkZWQgdGVtcGxhdGUgY29kZSBpbnRvIHRoZSBleGFjdCBzcG90XG4gICAqIHRoYXQgdGhlIG5nTWVzc2FnZXNJbmNsdWRlIGRpcmVjdGl2ZSBpcyBwbGFjZWQgd2l0aGluIHRoZSBuZ01lc3NhZ2VzIGNvbnRhaW5lci4gVGhpcyBhbGxvd3NcbiAgICogZm9yIGEgc2VyaWVzIG9mIHByZS1kZWZpbmVkIG1lc3NhZ2VzIHRvIGJlIHJldXNlZCBhbmQgYWxzbyBhbGxvd3MgZm9yIHRoZSBkZXZlbG9wZXIgdG9cbiAgICogZGV0ZXJtaW5lIHdoYXQgbWVzc2FnZXMgYXJlIG92ZXJyaWRkZW4gZHVlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIG5nTWVzc2FnZXNJbmNsdWRlIGRpcmVjdGl2ZS5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYGh0bWxcbiAgICogPCEtLSB1c2luZyBhdHRyaWJ1dGUgZGlyZWN0aXZlcyAtLT5cbiAgICogPEFOWSBuZy1tZXNzYWdlcz1cImV4cHJlc3Npb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2VzLWluY2x1ZGU9XCJyZW1vdGVUcGxTdHJpbmdcIj4uLi48L0FOWT5cbiAgICogPC9BTlk+XG4gICAqXG4gICAqIDwhLS0gb3IgYnkgdXNpbmcgZWxlbWVudCBkaXJlY3RpdmVzIC0tPlxuICAgKiA8bmctbWVzc2FnZXMgZm9yPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxuZy1tZXNzYWdlcy1pbmNsdWRlIHNyYz1cImV4cHJlc3Npb25WYWx1ZTFcIj4uLi48L25nLW1lc3NhZ2VzLWluY2x1ZGU+XG4gICAqIDwvbmctbWVzc2FnZXM+XG4gICAqIGBgYFxuICAgKlxuICAgKiB7QGxpbmsgbW9kdWxlOm5nTWVzc2FnZXMgQ2xpY2sgaGVyZX0gdG8gbGVhcm4gbW9yZSBhYm91dCBgbmdNZXNzYWdlc2AgYW5kIGBuZ01lc3NhZ2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmdNZXNzYWdlc0luY2x1ZGV8c3JjIGEgc3RyaW5nIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlbW90ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIC5kaXJlY3RpdmUoJ25nTWVzc2FnZXNJbmNsdWRlJyxcbiAgICBbJyR0ZW1wbGF0ZVJlcXVlc3QnLCAnJGRvY3VtZW50JywgJyRjb21waWxlJywgZnVuY3Rpb24oJHRlbXBsYXRlUmVxdWVzdCwgJGRvY3VtZW50LCAkY29tcGlsZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgcmVxdWlyZTogJ15ebmdNZXNzYWdlcycsIC8vIHdlIG9ubHkgcmVxdWlyZSB0aGlzIGZvciB2YWxpZGF0aW9uIHNha2VcbiAgICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIHNyYyA9IGF0dHJzLm5nTWVzc2FnZXNJbmNsdWRlIHx8IGF0dHJzLnNyYztcbiAgICAgICAgJHRlbXBsYXRlUmVxdWVzdChzcmMpLnRoZW4oZnVuY3Rpb24oaHRtbCkge1xuICAgICAgICAgIGlmICgkc2NvcGUuJCRkZXN0cm95ZWQpIHJldHVybjtcblxuICAgICAgICAgIGlmIChpc1N0cmluZyhodG1sKSAmJiAhaHRtbC50cmltKCkpIHtcbiAgICAgICAgICAgIC8vIEVtcHR5IHRlbXBsYXRlIC0gbm90aGluZyB0byBjb21waWxlXG4gICAgICAgICAgICByZXBsYWNlRWxlbWVudFdpdGhNYXJrZXIoZWxlbWVudCwgc3JjKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm9uLWVtcHR5IHRlbXBsYXRlIC0gY29tcGlsZSBhbmQgbGlua1xuICAgICAgICAgICAgJGNvbXBpbGUoaHRtbCkoJHNjb3BlLCBmdW5jdGlvbihjb250ZW50cykge1xuICAgICAgICAgICAgICBlbGVtZW50LmFmdGVyKGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnRXaXRoTWFya2VyKGVsZW1lbnQsIHNyYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIZWxwZXJzXG4gICAgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnRXaXRoTWFya2VyKGVsZW1lbnQsIHNyYykge1xuICAgICAgLy8gQSBjb21tZW50IG1hcmtlciBpcyBwbGFjZWQgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlc1xuICAgICAgdmFyIGNvbW1lbnQgPSAkY29tcGlsZS4kJGNyZWF0ZUNvbW1lbnQgP1xuICAgICAgICAgICRjb21waWxlLiQkY3JlYXRlQ29tbWVudCgnbmdNZXNzYWdlc0luY2x1ZGUnLCBzcmMpIDpcbiAgICAgICAgICAkZG9jdW1lbnRbMF0uY3JlYXRlQ29tbWVudCgnIG5nTWVzc2FnZXNJbmNsdWRlOiAnICsgc3JjICsgJyAnKTtcbiAgICAgIHZhciBtYXJrZXIgPSBqcUxpdGUoY29tbWVudCk7XG4gICAgICBlbGVtZW50LmFmdGVyKG1hcmtlcik7XG5cbiAgICAgIC8vIERvbid0IHBvbGx1dGUgdGhlIERPTSBhbnltb3JlIGJ5IGtlZXBpbmcgYW4gZW1wdHkgZGlyZWN0aXZlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XSlcblxuICAvKipcbiAgICogQG5nZG9jIGRpcmVjdGl2ZVxuICAgKiBAbmFtZSBuZ01lc3NhZ2VcbiAgICogQHJlc3RyaWN0IEFFXG4gICAqIEBzY29wZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogYG5nTWVzc2FnZWAgaXMgYSBkaXJlY3RpdmUgd2l0aCB0aGUgcHVycG9zZSB0byBzaG93IGFuZCBoaWRlIGEgcGFydGljdWxhciBtZXNzYWdlLlxuICAgKiBGb3IgYG5nTWVzc2FnZWAgdG8gb3BlcmF0ZSwgYSBwYXJlbnQgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZSBvbiBhIHBhcmVudCBET00gZWxlbWVudFxuICAgKiBtdXN0IGJlIHNpdHVhdGVkIHNpbmNlIGl0IGRldGVybWluZXMgd2hpY2ggbWVzc2FnZXMgYXJlIHZpc2libGUgYmFzZWQgb24gdGhlIHN0YXRlXG4gICAqIG9mIHRoZSBwcm92aWRlZCBrZXkvdmFsdWUgbWFwIHRoYXQgYG5nTWVzc2FnZXNgIGxpc3RlbnMgb24uXG4gICAqXG4gICAqIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdXNpbmcgYG5nTWVzc2FnZWAgY2FuIGJlIGZvdW5kIGluIHRoZVxuICAgKiB7QGxpbmsgbW9kdWxlOm5nTWVzc2FnZXMgYG5nTWVzc2FnZXNgIG1vZHVsZSBkb2N1bWVudGF0aW9ufS5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYGh0bWxcbiAgICogPCEtLSB1c2luZyBhdHRyaWJ1dGUgZGlyZWN0aXZlcyAtLT5cbiAgICogPEFOWSBuZy1tZXNzYWdlcz1cImV4cHJlc3Npb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2U9XCJzdHJpbmdWYWx1ZVwiPi4uLjwvQU5ZPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZT1cInN0cmluZ1ZhbHVlMSwgc3RyaW5nVmFsdWUyLCAuLi5cIj4uLi48L0FOWT5cbiAgICogPC9BTlk+XG4gICAqXG4gICAqIDwhLS0gb3IgYnkgdXNpbmcgZWxlbWVudCBkaXJlY3RpdmVzIC0tPlxuICAgKiA8bmctbWVzc2FnZXMgZm9yPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW49XCJzdHJpbmdWYWx1ZVwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuPVwic3RyaW5nVmFsdWUxLCBzdHJpbmdWYWx1ZTIsIC4uLlwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogPC9uZy1tZXNzYWdlcz5cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7ZXhwcmVzc2lvbn0gbmdNZXNzYWdlfHdoZW4gYSBzdHJpbmcgdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgbWVzc2FnZSBrZXkuXG4gICAqL1xuICAuZGlyZWN0aXZlKCduZ01lc3NhZ2UnLCBuZ01lc3NhZ2VEaXJlY3RpdmVGYWN0b3J5KCkpXG5cblxuICAvKipcbiAgICogQG5nZG9jIGRpcmVjdGl2ZVxuICAgKiBAbmFtZSBuZ01lc3NhZ2VFeHBcbiAgICogQHJlc3RyaWN0IEFFXG4gICAqIEBwcmlvcml0eSAxXG4gICAqIEBzY29wZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogYG5nTWVzc2FnZUV4cGAgaXMgdGhlIHNhbWUgYXMge0BsaW5rIGRpcmVjdGl2ZTpuZ01lc3NhZ2UgYG5nTWVzc2FnZWB9LCBidXQgaW5zdGVhZCBvZiBhIHN0YXRpY1xuICAgKiB2YWx1ZSwgaXQgYWNjZXB0cyBhbiBleHByZXNzaW9uIHRvIGJlIGV2YWx1YXRlZCBmb3IgdGhlIG1lc3NhZ2Uga2V5LlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgaHRtbFxuICAgKiA8IS0tIHVzaW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVzIC0tPlxuICAgKiA8QU5ZIG5nLW1lc3NhZ2VzPVwiZXhwcmVzc2lvblwiPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZS1leHA9XCJleHByZXNzaW9uVmFsdWVcIj4uLi48L0FOWT5cbiAgICogPC9BTlk+XG4gICAqXG4gICAqIDwhLS0gb3IgYnkgdXNpbmcgZWxlbWVudCBkaXJlY3RpdmVzIC0tPlxuICAgKiA8bmctbWVzc2FnZXMgZm9yPVwiZXhwcmVzc2lvblwiPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW4tZXhwPVwiZXhwcmVzc2lvblZhbHVlXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiA8L25nLW1lc3NhZ2VzPlxuICAgKiBgYGBcbiAgICpcbiAgICoge0BsaW5rIG1vZHVsZTpuZ01lc3NhZ2VzIENsaWNrIGhlcmV9IHRvIGxlYXJuIG1vcmUgYWJvdXQgYG5nTWVzc2FnZXNgIGFuZCBgbmdNZXNzYWdlYC5cbiAgICpcbiAgICogQHBhcmFtIHtleHByZXNzaW9ufSBuZ01lc3NhZ2VFeHB8d2hlbkV4cCBhbiBleHByZXNzaW9uIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG1lc3NhZ2Uga2V5LlxuICAgKi9cbiAgLmRpcmVjdGl2ZSgnbmdNZXNzYWdlRXhwJywgbmdNZXNzYWdlRGlyZWN0aXZlRmFjdG9yeSgpKTtcblxuZnVuY3Rpb24gbmdNZXNzYWdlRGlyZWN0aXZlRmFjdG9yeSgpIHtcbiAgcmV0dXJuIFsnJGFuaW1hdGUnLCBmdW5jdGlvbigkYW5pbWF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIHRyYW5zY2x1ZGU6ICdlbGVtZW50JyxcbiAgICAgIHByaW9yaXR5OiAxLCAvLyBtdXN0IHJ1biBiZWZvcmUgbmdCaW5kLCBvdGhlcndpc2UgdGhlIHRleHQgaXMgc2V0IG9uIHRoZSBjb21tZW50XG4gICAgICB0ZXJtaW5hbDogdHJ1ZSxcbiAgICAgIHJlcXVpcmU6ICdeXm5nTWVzc2FnZXMnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01lc3NhZ2VzQ3RybCwgJHRyYW5zY2x1ZGUpIHtcbiAgICAgICAgdmFyIGNvbW1lbnROb2RlID0gZWxlbWVudFswXTtcblxuICAgICAgICB2YXIgcmVjb3JkcztcbiAgICAgICAgdmFyIHN0YXRpY0V4cCA9IGF0dHJzLm5nTWVzc2FnZSB8fCBhdHRycy53aGVuO1xuICAgICAgICB2YXIgZHluYW1pY0V4cCA9IGF0dHJzLm5nTWVzc2FnZUV4cCB8fCBhdHRycy53aGVuRXhwO1xuICAgICAgICB2YXIgYXNzaWduUmVjb3JkcyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgcmVjb3JkcyA9IGl0ZW1zXG4gICAgICAgICAgICAgID8gKGlzQXJyYXkoaXRlbXMpXG4gICAgICAgICAgICAgICAgICA/IGl0ZW1zXG4gICAgICAgICAgICAgICAgICA6IGl0ZW1zLnNwbGl0KC9bXFxzLF0rLykpXG4gICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICBuZ01lc3NhZ2VzQ3RybC5yZVJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkeW5hbWljRXhwKSB7XG4gICAgICAgICAgYXNzaWduUmVjb3JkcyhzY29wZS4kZXZhbChkeW5hbWljRXhwKSk7XG4gICAgICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbihkeW5hbWljRXhwLCBhc3NpZ25SZWNvcmRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhc3NpZ25SZWNvcmRzKHN0YXRpY0V4cCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQsIG1lc3NhZ2VDdHJsO1xuICAgICAgICBuZ01lc3NhZ2VzQ3RybC5yZWdpc3Rlcihjb21tZW50Tm9kZSwgbWVzc2FnZUN0cmwgPSB7XG4gICAgICAgICAgdGVzdDogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5zKHJlY29yZHMsIG5hbWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0YWNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgJHRyYW5zY2x1ZGUoZnVuY3Rpb24oZWxtLCBuZXdTY29wZSkge1xuICAgICAgICAgICAgICAgICRhbmltYXRlLmVudGVyKGVsbSwgbnVsbCwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBlbG07XG5cbiAgICAgICAgICAgICAgICAvLyBFYWNoIHRpbWUgd2UgYXR0YWNoIHRoaXMgbm9kZSB0byBhIG1lc3NhZ2Ugd2UgZ2V0IGEgbmV3IGlkIHRoYXQgd2UgY2FuIG1hdGNoXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBhcmUgZGVzdHJveWluZyB0aGUgbm9kZSBsYXRlci5cbiAgICAgICAgICAgICAgICB2YXIgJCRhdHRhY2hJZCA9IGN1cnJlbnRFbGVtZW50LiQkYXR0YWNoSWQgPSBuZ01lc3NhZ2VzQ3RybC5nZXRBdHRhY2hJZCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGVsZW1lbnQgb3IgYSBwYXJlbnQgZWxlbWVudCBpcyBkZXN0cm95ZWRcbiAgICAgICAgICAgICAgICAvLyBieSBhbm90aGVyIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHRoZW4gaXQncyB0aW1lXG4gICAgICAgICAgICAgICAgLy8gdG8gZGVyZWdpc3RlciB0aGUgbWVzc2FnZSBmcm9tIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQub24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQuJCRhdHRhY2hJZCA9PT0gJCRhdHRhY2hJZCkge1xuICAgICAgICAgICAgICAgICAgICBuZ01lc3NhZ2VzQ3RybC5kZXJlZ2lzdGVyKGNvbW1lbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUN0cmwuZGV0YWNoKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBuZXdTY29wZS4kZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRldGFjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdmFyIGVsbSA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICRhbmltYXRlLmxlYXZlKGVsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XTtcblxuICBmdW5jdGlvbiBjb250YWlucyhjb2xsZWN0aW9uLCBrZXkpIHtcbiAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGlzQXJyYXkoY29sbGVjdGlvbilcbiAgICAgICAgICA/IGNvbGxlY3Rpb24uaW5kZXhPZihrZXkpID49IDBcbiAgICAgICAgICA6IGNvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICB9XG4gIH1cbn1cblxuXG59KSh3aW5kb3csIHdpbmRvdy5hbmd1bGFyKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vYW5ndWxhci1tZXNzYWdlcy9hbmd1bGFyLW1lc3NhZ2VzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFdyYXBwZXJzKTtcblxuICBmdW5jdGlvbiBhZGRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoW3tcbiAgICAgIG5hbWU6IFwiZm91bmRhdGlvbkxhYmVsXCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbGFiZWwuaHRtbFwiKVxuICAgICAgLy8gYXBpQ2hlY2s6IGNoZWNrID0+ICh7XG4gICAgICAvLyAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgLy8gICAgIGxhYmVsOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAvLyAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2wub3B0aW9uYWxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICB9LCB7IG5hbWU6IFwiZm91bmRhdGlvbkhhc0Vycm9yXCIsIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9oYXMtZXJyb3IuaHRtbFwiKSB9XSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3JhcHBlcnMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFdyYXBwZXJzKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkV3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZvdW5kYXRpb25MYWJlbCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGFiZWwuaHRtbCcpXHJcbiAgICAgICAgLy8gYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgLy8gICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAvLyAgICAgbGFiZWw6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2wub3B0aW9uYWxcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgICB9LFxyXG4gICAgICB7bmFtZTogJ2ZvdW5kYXRpb25IYXNFcnJvcicsIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hhcy1lcnJvci5odG1sJyl9XHJcbiAgICBdKTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi93cmFwcGVycy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiID5cXHJcXG4gIDxsYWJlbCBmb3I9XFxcInt7aWR9fVxcXCIgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgPyAnaXMtaW52YWxpZC1sYWJlbCcgOiAnJ1xcXCI+XFxyXFxuICAgIDxzcGFuIG5nLWlmPVxcXCJ0by50cmFuZGxhdGVcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtbHktd3JhcHBlci1sYWJlbFxcXCIgdHJhbnNsYXRlPVxcXCJ7e3RvLnRyYW5zbGF0ZX19XFxcIj48L3NwYW4+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG4gICAgPHNwYW4gbmctaWY9XFxcIiF0by50cmFuZGxhdGVcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtbHktd3JhcHBlci1sYWJlbFxcXCI+e3t0by5sYWJlbH19PC9zcGFuPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtbHktd3JhcHBlci1yZXF1aXJlZFxcXCIgPnt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319PC9zcGFuPlxcclxcbiAgICA8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG4gICAgPGRpdiBuZy1tZXNzYWdlcz1cXFwiZmMuJGVycm9yXFxcIiBcXHJcXG4gICAgbmctaWY9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJHRvdWNoZWRcXFwiIFxcclxcbiAgICBjbGFzcz1cXFwibXktbWVzc2FnZXMgZm9ybS1lcnJvciBpcy12aXNpYmxlXFxcIj5cXHJcXG4gICAgICA8ZGl2IG5nLW1lc3NhZ2U9XFxcInt7OjpuYW1lfX1cXFwiIG5nLXJlcGVhdD1cXFwiKG5hbWUsIG1lc3NhZ2UpIGluIDo6b3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzXFxcIiBjbGFzcz1cXFwiZm9ybS1lcnJvciBpcy12aXNpYmxlXFxcIj57e21lc3NhZ2UoZmMuJHZpZXdWYWx1ZSwgZmMuJG1vZGVsVmFsdWUsIHRoaXMpfX08L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cmFwcGVycy9sYWJlbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIHNtYWxsLXt7dG8uY29sdW1uID4gMCA/IHRvLmNvbHVtbiA6IDEyfX1cXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IHNob3dFcnJvcn1cXFwiPlxcclxcbiAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dyYXBwZXJzL2hhcy1lcnJvci5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgcmVxdWlyZShcIi4vY2hlY2tib3hcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9tdWx0aUNoZWNrYm94XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vaW5wdXRcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9yYWRpb1wiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL3NlbGVjdFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL3RleHRhcmVhXCIpKG5nTW9kdWxlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgcmVxdWlyZSgnLi9jaGVja2JveCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL211bHRpQ2hlY2tib3gnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9pbnB1dCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL3JhZGlvJykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vc2VsZWN0JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vdGV4dGFyZWEnKShuZ01vZHVsZSk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwiY2hlY2tib3hcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jaGVja2JveC5odG1sXCIpLFxuICAgICAgd3JhcHBlcjogW1wiZm91bmRhdGlvbkhhc0Vycm9yXCJdLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9jaGVja2JveC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ2NoZWNrYm94JyxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2hlY2tib3guaHRtbCcpLFxyXG4gICAgICB3cmFwcGVyOiBbJ2ZvdW5kYXRpb25IYXNFcnJvciddLFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9jaGVja2JveC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuXFx0PGxhYmVsIG5nLWNsYXNzPVxcXCJmYy4kdmFsaWQgPyAnJyA6ICdpcy1pbnZhbGlkLWxhYmVsJ1xcXCI+XFxyXFxuXFx0XFx0PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZC1jaGVja2JveFxcXCJcXHJcXG5cXHRcXHQgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCIgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgPyAnaXMtaW52YWxpZC1pbnB1dCcgOiAnJ1xcXCI+XFxyXFxuXFx0XFx0PHNwYW4+e3t0by5sYWJlbH19PC9zcGFuPlxcclxcblxcdFxcdDxzcGFuPnt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319PC9zcGFuPlxcclxcblxcdDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL2NoZWNrYm94Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwibXVsdGlDaGVja2JveFwiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL211bHRpQ2hlY2tib3guaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcImZvdW5kYXRpb25MYWJlbFwiLCBcImZvdW5kYXRpb25IYXNFcnJvclwiXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi9mdW5jdGlvbiBjb250cm9sbGVyKCRzY29wZSkge1xuICAgICAgICB2YXIgdG8gPSAkc2NvcGUudG87XG4gICAgICAgIHZhciBvcHRzID0gJHNjb3BlLm9wdGlvbnM7XG4gICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94ID0ge1xuICAgICAgICAgIGNoZWNrZWQ6IFtdLFxuICAgICAgICAgIGNoYW5nZTogc2V0TW9kZWxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBjaGVja2JveGVzIGNoZWNrIHByb3BlcnR5XG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gJHNjb3BlLm1vZGVsW29wdHMua2V5XTtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0gdG8udmFsdWVQcm9wIHx8IFwidmFsdWVcIjtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0by5vcHRpb25zLCBmdW5jdGlvbiAodiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3guY2hlY2tlZFtpbmRleF0gPSBtb2RlbFZhbHVlLmluZGV4T2Yodlt2YWx1ZVByb3BdKSAhPT0gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0TW9kZWwoKSB7XG4gICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XSA9IFtdO1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkLCBmdW5jdGlvbiAoY2hlY2tib3gsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XS5wdXNoKHRvLm9wdGlvbnNbaW5kZXhdW3RvLnZhbHVlUHJvcCB8fCBcInZhbHVlXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZENoZWNrYm94VHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICdtdWx0aUNoZWNrYm94JyxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXVsdGlDaGVja2JveC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsnZm91bmRhdGlvbkxhYmVsJywgJ2ZvdW5kYXRpb25IYXNFcnJvciddLFxyXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGFwaUNoZWNrOiBjaGVjayA9PiAoe1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxyXG4gICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXHJcbiAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbFxyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIGNvbnRyb2xsZXI6IC8qIEBuZ0luamVjdCAqLyBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICAgICBjb25zdCB0byA9ICRzY29wZS50bztcclxuICAgICAgICBjb25zdCBvcHRzID0gJHNjb3BlLm9wdGlvbnM7XHJcbiAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3ggPSB7XHJcbiAgICAgICAgICBjaGVja2VkOiBbXSxcclxuICAgICAgICAgIGNoYW5nZTogc2V0TW9kZWxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBjaGVja2JveGVzIGNoZWNrIHByb3BlcnR5XHJcbiAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9ICRzY29wZS5tb2RlbFtvcHRzLmtleV07XHJcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShtb2RlbFZhbHVlKSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWVQcm9wID0gdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSc7XHJcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2godG8ub3B0aW9ucywgZnVuY3Rpb24odiwgaW5kZXgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3guY2hlY2tlZFtpbmRleF0gPSBtb2RlbFZhbHVlLmluZGV4T2Yodlt2YWx1ZVByb3BdKSAhPT0gLTE7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE1vZGVsKCkge1xyXG4gICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XSA9IFtdO1xyXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWQsIChjaGVja2JveCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XS5wdXNoKHRvLm9wdGlvbnNbaW5kZXhdW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLXJlcGVhdD1cXFwiKGtleSwgb3B0aW9uKSBpbiB0by5vcHRpb25zXFxcIiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgPGxhYmVsIG5nLWNsYXNzPVxcXCJmYy4kdmFsaWQgPyAnJyA6ICdpcy1pbnZhbGlkLWxhYmVsJ1xcXCI+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgIGlkPVxcXCJ7e2lkICsgJ18nKyAkaW5kZXh9fVxcXCJcXHJcXG4gICAgICAgICAgIG5nLW1vZGVsPVxcXCJtdWx0aUNoZWNrYm94LmNoZWNrZWRbJGluZGV4XVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWNoYW5nZT1cXFwibXVsdGlDaGVja2JveC5jaGFuZ2UoKVxcXCIgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgPyAnaXMtaW52YWxpZC1pbnB1dCcgOiAnJ1xcXCI+XFxyXFxuICAgICAge3tvcHRpb25bdG8ubGFiZWxQcm9wIHx8ICduYW1lJ119fVxcclxcbiAgPC9sYWJlbD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZElucHV0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkSW5wdXRUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcImlucHV0XCIsXG4gICAgICB0ZW1wbGF0ZTogXCI8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCIgXCIgKyBcIiBuZy1jbGFzcz1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSBcIiArIFwiID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlwiLFxuICAgICAgd3JhcHBlcjogW1wiZm91bmRhdGlvbkxhYmVsXCIsIFwiZm91bmRhdGlvbkhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IHR5cGU6IFwidGV4dFwiIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9pbnB1dC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkSW5wdXRUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkSW5wdXRUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ2lucHV0JyxcclxuICAgICAgdGVtcGxhdGU6ICc8aW5wdXQgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIiAnICtcclxuICAgICAgJyBuZy1jbGFzcz1cIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgJyArXHJcbiAgICAgICcgPyBcXCdpcy1pbnZhbGlkLWlucHV0XFwnIDogXFwnXFwnXCI+JyxcclxuICAgICAgd3JhcHBlcjogWydmb3VuZGF0aW9uTGFiZWwnLCAnZm91bmRhdGlvbkhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IHR5cGU6ICd0ZXh0JyB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2lucHV0LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRSYWRpb1R5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZFJhZGlvVHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3JhZGlvLmh0bWxcIiksXG4gICAgICB3cmFwcGVyOiBbXCJmb3VuZGF0aW9uTGFiZWxcIiwgXCJmb3VuZGF0aW9uSGFzRXJyb3JcIl0sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBub0Zvcm1Db250cm9sOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2YoY2hlY2sub2JqZWN0KSxcbiAgICAgICAgICAgIGxhYmVsUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgICAgICAgdmFsdWVQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWxcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvcmFkaW8uanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFJhZGlvVHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFJhZGlvVHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICdyYWRpbycsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JhZGlvLmh0bWwnKSxcclxuICAgICAgd3JhcHBlcjogWydmb3VuZGF0aW9uTGFiZWwnLCAnZm91bmRhdGlvbkhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXHJcbiAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvcmFkaW8uanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcInJhZGlvXFxcIiBuZy1jbGFzcz1cXFwiZmMuJHZhbGlkID8gJycgOiAnaXMtaW52YWxpZC1sYWJlbCdcXFwiPlxcclxcbiAgPGxhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxyXFxuICAgICAgICAgICBpZD1cXFwie3tpZCArICdfJysgJGluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgIG5nLXZhbHVlPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddXFxcIlxcclxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL3JhZGlvLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJzZWxlY3RcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9zZWxlY3QuaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcImZvdW5kYXRpb25MYWJlbFwiLCBcImZvdW5kYXRpb25IYXNFcnJvclwiXSxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2YoY2hlY2sub2JqZWN0KSxcbiAgICAgICAgICAgIGxhYmVsUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgICAgICAgdmFsdWVQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICBncm91cFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9zZWxlY3QuanMiLCJleHBvcnQgZGVmYXVsdCAgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRTZWxlY3RUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICdzZWxlY3QnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zZWxlY3QuaHRtbCcpLFxyXG4gICAgICB3cmFwcGVyOiBbJ2ZvdW5kYXRpb25MYWJlbCcsICdmb3VuZGF0aW9uSGFzRXJyb3InXSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXHJcbiAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgICAgZ3JvdXBQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9zZWxlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlbGVjdFxcclxcbiAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG4gIG5nLW9wdGlvbnM9XFxcIm9wdGlvblt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10gYXMgb3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddIGdyb3VwIGJ5IG9wdGlvblt0by5ncm91cFByb3AgfHwgJ2dyb3VwJ10gZm9yIG9wdGlvbiBpbiB0by5vcHRpb25zXFxcIlxcclxcbiAgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgPyAnaXMtaW52YWxpZC1pbnB1dCcgOiAnJ1xcXCI+XFxyXFxuPC9zZWxlY3Q+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL3NlbGVjdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkVGV4dGFyZWFUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInRleHRhcmVhXCIsXG4gICAgICB0ZW1wbGF0ZTogXCI8dGV4dGFyZWEgY2xhc3M9XFxcIlxcXCIgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcIiArIFwiIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlIFwiICsgXCIgPyAnaXMtaW52YWxpZC1pbnB1dCcgOiAnJ1xcXCI+PC90ZXh0YXJlYT5cIixcbiAgICAgIHdyYXBwZXI6IFtcImZvdW5kYXRpb25MYWJlbFwiLCBcImZvdW5kYXRpb25IYXNFcnJvclwiXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5nTW9kZWxBdHRyczoge1xuICAgICAgICAgIHJvd3M6IHsgYXR0cmlidXRlOiBcInJvd3NcIiB9LFxuICAgICAgICAgIGNvbHM6IHsgYXR0cmlidXRlOiBcImNvbHNcIiB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIub3B0aW9uYWwsXG4gICAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXIub3B0aW9uYWxcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvdGV4dGFyZWEuanMiLCJleHBvcnQgZGVmYXVsdCAgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRUZXh0YXJlYVR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRUZXh0YXJlYVR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAndGV4dGFyZWEnLFxyXG4gICAgICB0ZW1wbGF0ZTogJzx0ZXh0YXJlYSBjbGFzcz1cIlwiIG5nLW1vZGVsPVwibW9kZWxbb3B0aW9ucy5rZXldXCInICsgXHJcbiAgICAgICcgbmctY2xhc3M9XCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlICcgK1xyXG4gICAgICAnID8gXFwnaXMtaW52YWxpZC1pbnB1dFxcJyA6IFxcJ1xcJ1wiPjwvdGV4dGFyZWE+JyxcclxuICAgICAgd3JhcHBlcjogWydmb3VuZGF0aW9uTGFiZWwnLCAnZm91bmRhdGlvbkhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XHJcbiAgICAgICAgICByb3dzOiB7YXR0cmlidXRlOiAncm93cyd9LFxyXG4gICAgICAgICAgY29sczoge2F0dHJpYnV0ZTogJ2NvbHMnfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIub3B0aW9uYWwsXHJcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXIub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy90ZXh0YXJlYS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iajsgfTtcblxudmFyIGFkZG9ucyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9hZGRvbnNcIikpO1xuXG52YXIgZGVzY3JpcHRpb24gPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vZGVzY3JpcHRpb25cIikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBhZGRvbnMobmdNb2R1bGUpO1xuICBkZXNjcmlwdGlvbihuZ01vZHVsZSk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcbi8vICByZXF1aXJlKCcuL2Rlc2NyaXB0aW9uJykobmdNb2R1bGUpO1xuLy99O1xuLy9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ydW4vaW5kZXguanMiLCJpbXBvcnQgYWRkb25zIGZyb20gJy4vYWRkb25zJztcclxuaW1wb3J0IGRlc2NyaXB0aW9uIGZyb20gJy4vZGVzY3JpcHRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIGFkZG9ucyhuZ01vZHVsZSk7XHJcbiAgZGVzY3JpcHRpb24obmdNb2R1bGUpO1xyXG59O1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcclxuLy8gIHJlcXVpcmUoJy4vZGVzY3JpcHRpb24nKShuZ01vZHVsZSk7XHJcbi8vfTtcclxuLy9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3J1bi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xuXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9hZGRvbnMuaHRtbFwiKTtcbiAgICB2YXIgYWRkb25DaGVja2VyID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIFwiY2xhc3NcIjogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgIHRleHQ6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zdHJpbmcub3B0aW9uYWxcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XG4gICAgdmFyIGFwaSA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxuICAgICAgICBhZGRvblJpZ2h0OiBhZGRvbkNoZWNrZXJcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIucHVzaChmdW5jdGlvbiAodGVtcGxhdGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09IFwiaW5wdXRcIiB8fCAhb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuYWRkb25MZWZ0ICYmICFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvblJpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xuICAgICAgcmV0dXJuIGFkZG9uVGVtcGxhdGUucmVwbGFjZShcIjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlwiLCB0ZW1wbGF0ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcnVuL2FkZG9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRBZGRvbnNNYW5pcHVsYXRvcihmb3JtbHlDb25maWcsIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaykge1xyXG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKCcuL2FkZG9ucy5odG1sJyk7XHJcbiAgICBjb25zdCBhZGRvbkNoZWNrZXIgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICBjbGFzczogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgdGV4dDogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbFxyXG4gICAgfSkuc3RyaWN0Lm9wdGlvbmFsO1xyXG4gICAgY29uc3QgYXBpID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxyXG4gICAgICAgIGFkZG9uUmlnaHQ6IGFkZG9uQ2hlY2tlclxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uKHRlbXBsYXRlLCBvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09ICdpbnB1dCcgfHwgKCFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvbkxlZnQgJiYgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uUmlnaHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xyXG4gICAgICByZXR1cm4gYWRkb25UZW1wbGF0ZS5yZXBsYWNlKCc8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT4nLCB0ZW1wbGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vYWRkb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcInsnJzogdG8uYWRkb25MZWZ0IHx8IHRvLmFkZG9uUmlnaHR9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uTGVmdC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LmNsYXNzXFxcIj48L2k+XFxyXFxuICAgICAgICA8c3BhbiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LnRleHRcXFwiPnt7dG8uYWRkb25MZWZ0LnRleHR9fTwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uUmlnaHQuY2xhc3N9fVxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHQuY2xhc3NcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0LnRleHRcXFwiPnt7dG8uYWRkb25SaWdodC50ZXh0fX08L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ydW4vYWRkb25zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbikgJiYgb3B0aW9ucy50eXBlICE9PSBcInJhZGlvXCIgJiYgb3B0aW9ucy50eXBlICE9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlKVswXSk7XG4gICAgICAgIHZhciBtb2RlbEVscyA9IGFuZ3VsYXIuZWxlbWVudChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLW1vZGVsXVwiKSk7XG4gICAgICAgIGlmIChtb2RlbEVscykge1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcIjxwIGlkPVxcXCJcIiArIHNjb3BlLmlkICsgXCJfZGVzY3JpcHRpb25cXFwiXCIgKyBcImNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIlwiICsgXCJuZy1pZj1cXFwidG8uZGVzY3JpcHRpb25cXFwiPlwiICsgXCJ7e3RvLmRlc2NyaXB0aW9ufX1cIiArIFwiPC9wPlwiKVswXSk7XG4gICAgICAgICAgbW9kZWxFbHMuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiwgc2NvcGUuaWQgKyBcIl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3J1bi9kZXNjcmlwdGlvbi5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uTWFuaXB1bGF0b3IoZm9ybWx5Q29uZmlnKSB7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcclxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uKSAmJlxyXG4gICAgICAgIG9wdGlvbnMudHlwZSAhPT0gJ3JhZGlvJyAmJiBvcHRpb25zLnR5cGUgIT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpWzBdKTtcclxuICAgICAgICB2YXIgbW9kZWxFbHMgPSBhbmd1bGFyLmVsZW1lbnQoZWwucXVlcnlTZWxlY3RvckFsbCgnW25nLW1vZGVsXScpKTtcclxuICAgICAgICBpZiAobW9kZWxFbHMpIHtcclxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcclxuICAgICAgICAgICAgJzxwIGlkPVwiJyArIHNjb3BlLmlkICsgJ19kZXNjcmlwdGlvblwiJyArXHJcbiAgICAgICAgICAgICdjbGFzcz1cImhlbHAtYmxvY2tcIicgK1xyXG4gICAgICAgICAgICAnbmctaWY9XCJ0by5kZXNjcmlwdGlvblwiPicgK1xyXG4gICAgICAgICAgICAne3t0by5kZXNjcmlwdGlvbn19JyArXHJcbiAgICAgICAgICAgICc8L3A+J1xyXG4gICAgICAgICAgKVswXSk7XHJcbiAgICAgICAgICBtb2RlbEVscy5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5Jywgc2NvcGUuaWQgKyAnX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL2Rlc2NyaXB0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==