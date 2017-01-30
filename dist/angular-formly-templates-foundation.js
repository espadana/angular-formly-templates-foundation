// angular-formly-templates-foundation version 1.0.0-beta.4 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ngModuleName = "formlyFoundation";
	var angular = __webpack_require__(2);
	var ngModule = angular.module(ngModuleName, [__webpack_require__(4), __webpack_require__(5)]);
	ngModule.constant("formlyFoundationApiCheck", __webpack_require__(7)({
	  output: {
	    prefix: "angular-formly-foundation"
	  }
	}));
	ngModule.constant("formlyFoundationVersion", ("1.0.0-beta.4"));
	
	__webpack_require__(8)(ngModule);
	__webpack_require__(11)(ngModule);
	__webpack_require__(22)(ngModule);
	// require('css!./style.css');
	
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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = 'ngMessages';


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.6.1
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
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


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addWrappers.$inject = ["formlyConfigProvider"];
	  ngModule.config(addWrappers);
	
	  function addWrappers(formlyConfigProvider) {
	    formlyConfigProvider.setWrapper([{
	      name: "templateLabel",
	      template: __webpack_require__(9),
	      apiCheck: function (check) {
	        return {
	          templateOptions: {
	            label: check.string,
	            required: check.bool.optional
	          }
	        };
	      }
	    }, { name: "templateHasError", template: __webpack_require__(10) }]);
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"\" >\r\n  <label for=\"{{id}}\" ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-label' : ''\">\r\n    <span class=\"formly-wrapper-label\">{{to.label}}</span>\r\n    <span class=\"formly-wrapper-required\" >{{to.required ? '*' : ''}}</span>\r\n    <formly-transclude></formly-transclude>\r\n    <div ng-messages=\"fc.$error\" \r\n    ng-if=\"options.formControl.$toched\" \r\n    class=\"my-messages form-error is-visible\">\r\n      <div ng-message=\"{{::name}}\" ng-repeat=\"(name, message) in ::options.validation.messages\" class=\"form-error is-visible\">{{message(fc.$viewValue, fc.$modelValue, this)}}</div>\r\n    </div>\r\n  </label>\r\n</div>\r\n"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"columns small-{{to.column > 0 ? to.column : 12}}\" ng-class=\"{'has-error': showError}\">\r\n  <formly-transclude></formly-transclude>\r\n</div>\r\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(12)(ngModule);
	  __webpack_require__(14)(ngModule);
	  __webpack_require__(16)(ngModule);
	  __webpack_require__(17)(ngModule);
	  __webpack_require__(19)(ngModule);
	  __webpack_require__(21)(ngModule);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "checkbox",
	      template: __webpack_require__(13),
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
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"checkbox\">\r\n\t<label ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n\t\t<input type=\"checkbox\"\r\n           class=\"formly-field-checkbox\"\r\n\t\t       ng-model=\"model[options.key]\" ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">\r\n\t\t<span>{{to.label}}</span>\r\n\t\t<span>{{to.required ? '*' : ''}}</span>\r\n\t</label>\r\n</div>\r\n"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "multiCheckbox",
	      template: __webpack_require__(15),
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
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\r\n  <label ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n    <input type=\"checkbox\"\r\n           id=\"{{id + '_'+ $index}}\"\r\n           ng-model=\"multiCheckbox.checked[$index]\"\r\n           ng-change=\"multiCheckbox.change()\" ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">\r\n      {{option[to.labelProp || 'name']}}\r\n  </label>\r\n</div>\r\n"

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addInputType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addInputType);
	
	  function addInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "input",
	      template: "<input ng-model=\"model[options.key]\" ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">",
	      wrapper: ["templateLabel", "templateHasError"],
	      defaultOptions: {
	        templateOptions: { type: "text" }
	      }
	    });
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addRadioType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addRadioType);
	
	  function addRadioType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "radio",
	      template: __webpack_require__(18),
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
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div ng-repeat=\"(key, option) in to.options\" class=\"radio\" ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n  <label>\r\n    <input type=\"radio\"\r\n           id=\"{{id + '_'+ $index}}\"\r\n           tabindex=\"0\"\r\n           ng-value=\"option[to.valueProp || 'value']\"\r\n           ng-model=\"model[options.key]\"\r\n           ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">\r\n      {{option[to.labelProp || 'name']}}\r\n  </label>\r\n</div>\r\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addSelectType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addSelectType);
	
	  function addSelectType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "select",
	      template: __webpack_require__(20),
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
/* 20 */
/***/ function(module, exports) {

	module.exports = "<select\r\n  ng-model=\"model[options.key]\"\r\n  ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options\"\r\n  ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\">\r\n</select>"

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (ngModule) {
	  addTextareaType.$inject = ["formlyConfigProvider"];
	  ngModule.config(addTextareaType);
	
	  function addTextareaType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "textarea",
	      template: "<textarea class=\"\" ng-model=\"model[options.key]\"" + " ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-input' : ''\"></textarea>",
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"{'': to.addonLeft || to.addonRight}\">\r\n    <div class=\"\" ng-if=\"to.addonLeft\">\r\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\r\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\r\n    </div>\r\n    <formly-transclude></formly-transclude>\r\n    <div class=\"\" ng-if=\"to.addonRight\">\r\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\r\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\r\n    </div>\r\n</div>"

/***/ },
/* 25 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYzIxMDJiODJiZDY3YTg3M2NiNSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8zMDkwIiwid2VicGFjazovLy8uL2luZGV4LmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanM/ODMyMiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcz9jMzdlIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2FuZ3VsYXItbWVzc2FnZXMvYW5ndWxhci1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcz82MTY2Iiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanM/OGM2OSIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcz81NDk2Iiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzPzZiZjciLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzPzUxZWYiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanM/NGIxYSIsIndlYnBhY2s6Ly8vLi90eXBlcy9yYWRpby5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuanM/NTk4ZiIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcz8zNDZkIiwid2VicGFjazovLy8uL3J1bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanM/NjRmZCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy8uL3J1bi9hZGRvbnMuanM/ZWViNCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3J1bi9kZXNjcmlwdGlvbi5qcz9mZGI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQ0FBLFFBQU8sVUFBVSxvQkFBUSxHOzs7Ozs7QUNBekI7O0FDQUEsS0FBTSxlQUFlO0FBQ3JCLEtBQU0sVUFBVSxvQkFBUTtBQUN4QixLQUFNLFdBQVcsUUFBUSxPQUFPLGNBQWMsQ0FBQyxvQkFBUSxJQUFtQixvQkFBUTtBQUNsRixVQUFTLFNBQ1AsNEJBQ0Esb0JBQVEsR0FBYTtHQUNuQixRQUFRO0tBQ04sUUFBUTs7O0FBSWQsVUFBUyxTQUFTLDJCQUEyQjs7QUFFN0MscUJBQVEsR0FBYztBQUN0QixxQkFBUSxJQUFXO0FBQ25CLHFCQUFRLElBQVM7OztBREVqQixRQUFPLFVDQ1EsYTs7Ozs7O0FDbEJmOztBQUVBOztBQ0FBLEtBQUksVUFBVSxvQkFBUTtBQUN0QixLQUFJLENBQUMsUUFBUSxTQUFTO0dBQ3BCLFVBQVUsT0FBTzs7QUFFbkIsUUFBTyxVQUFVLFE7Ozs7OztBQ05qQixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQscUJBQXFCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFPOztjQUVKO1NBQ0wsT0FBTyIsImZpbGUiOiJhbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtZm91bmRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImFuZ3VsYXJcIiksIHJlcXVpcmUoXCJhbmd1bGFyLWZvcm1seVwiKSwgcmVxdWlyZShcImFwaS1jaGVja1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJhbmd1bGFyXCIsIFwiYW5ndWxhci1mb3JtbHlcIiwgXCJhcGktY2hlY2tcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmdGb3JtbHlUZW1wbGF0ZXNGb3VuZGF0aW9uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpLCByZXF1aXJlKFwiYXBpLWNoZWNrXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ0Zvcm1seVRlbXBsYXRlc0ZvdW5kYXRpb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJhbmd1bGFyXCJdLCByb290W1wibmdGb3JtbHlcIl0sIHJvb3RbXCJhcGlDaGVja1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjMjEwMmI4MmJkNjdhODczY2I1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaW5kZXguY29tbW9uXCIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2luZGV4LmNvbW1vbicpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG5nTW9kdWxlTmFtZSA9IFwiZm9ybWx5Rm91bmRhdGlvblwiO1xudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiLi9hbmd1bGFyLWZpeFwiKTtcbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5nTW9kdWxlTmFtZSwgW3JlcXVpcmUoXCJhbmd1bGFyLWZvcm1seVwiKSwgcmVxdWlyZShcImFuZ3VsYXItbWVzc2FnZXNcIildKTtcbm5nTW9kdWxlLmNvbnN0YW50KFwiZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrXCIsIHJlcXVpcmUoXCJhcGktY2hlY2tcIikoe1xuICBvdXRwdXQ6IHtcbiAgICBwcmVmaXg6IFwiYW5ndWxhci1mb3JtbHktZm91bmRhdGlvblwiXG4gIH1cbn0pKTtcbm5nTW9kdWxlLmNvbnN0YW50KFwiZm9ybWx5Rm91bmRhdGlvblZlcnNpb25cIiwgVkVSU0lPTik7XG5cbnJlcXVpcmUoXCIuL3dyYXBwZXJzXCIpKG5nTW9kdWxlKTtcbnJlcXVpcmUoXCIuL3R5cGVzXCIpKG5nTW9kdWxlKTtcbnJlcXVpcmUoXCIuL3J1blwiKShuZ01vZHVsZSk7XG4vLyByZXF1aXJlKCdjc3MhLi9zdHlsZS5jc3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZ01vZHVsZU5hbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguY29tbW9uLmpzIiwiY29uc3QgbmdNb2R1bGVOYW1lID0gJ2Zvcm1seUZvdW5kYXRpb24nO1xyXG5jb25zdCBhbmd1bGFyID0gcmVxdWlyZSgnLi9hbmd1bGFyLWZpeCcpO1xyXG5jb25zdCBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5nTW9kdWxlTmFtZSwgW3JlcXVpcmUoJ2FuZ3VsYXItZm9ybWx5JykgLHJlcXVpcmUoJ2FuZ3VsYXItbWVzc2FnZXMnKSAsXSk7XHJcbm5nTW9kdWxlLmNvbnN0YW50KFxyXG4gICdmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2snLFxyXG4gIHJlcXVpcmUoJ2FwaS1jaGVjaycpKHtcclxuICAgIG91dHB1dDoge1xyXG4gICAgICBwcmVmaXg6ICdhbmd1bGFyLWZvcm1seS1mb3VuZGF0aW9uJ1xyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcbm5nTW9kdWxlLmNvbnN0YW50KCdmb3JtbHlGb3VuZGF0aW9uVmVyc2lvbicsIFZFUlNJT04pO1xyXG5cclxucmVxdWlyZSgnLi93cmFwcGVycycpKG5nTW9kdWxlKTtcclxucmVxdWlyZSgnLi90eXBlcycpKG5nTW9kdWxlKTtcclxucmVxdWlyZSgnLi9ydW4nKShuZ01vZHVsZSk7XHJcbi8vIHJlcXVpcmUoJ2NzcyEuL3N0eWxlLmNzcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGVOYW1lO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vaW5kZXguY29tbW9uLmpzIiwiLy8gc29tZSB2ZXJzaW9ucyBvZiBhbmd1bGFyIGRvbid0IGV4cG9ydCB0aGUgYW5ndWxhciBtb2R1bGUgcHJvcGVybHksXG4vLyBzbyB3ZSBnZXQgaXQgZnJvbSB3aW5kb3cgaW4gdGhpcyBjYXNlLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhbmd1bGFyID0gcmVxdWlyZShcImFuZ3VsYXJcIik7XG5pZiAoIWFuZ3VsYXIudmVyc2lvbikge1xuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYW5ndWxhci1maXgvaW5kZXguanMiLCIvLyBzb21lIHZlcnNpb25zIG9mIGFuZ3VsYXIgZG9uJ3QgZXhwb3J0IHRoZSBhbmd1bGFyIG1vZHVsZSBwcm9wZXJseSxcclxuLy8gc28gd2UgZ2V0IGl0IGZyb20gd2luZG93IGluIHRoaXMgY2FzZS5cclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbmlmICghYW5ndWxhci52ZXJzaW9uKSB7XHJcbiAgYW5ndWxhciA9IHdpbmRvdy5hbmd1bGFyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL2FuZ3VsYXItZml4L2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm5nRm9ybWx5XCIsXCJhbWRcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qczJcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qc1wiOlwiYW5ndWxhci1mb3JtbHlcIn1cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9hbmd1bGFyLW1lc3NhZ2VzJyk7XG5tb2R1bGUuZXhwb3J0cyA9ICduZ01lc3NhZ2VzJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vYW5ndWxhci1tZXNzYWdlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXJKUyB2MS42LjFcbiAqIChjKSAyMDEwLTIwMTYgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgYW5ndWxhcikgeyd1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2g7XG52YXIgaXNBcnJheTtcbnZhciBpc1N0cmluZztcbnZhciBqcUxpdGU7XG5cbi8qKlxuICogQG5nZG9jIG1vZHVsZVxuICogQG5hbWUgbmdNZXNzYWdlc1xuICogQGRlc2NyaXB0aW9uXG4gKlxuICogVGhlIGBuZ01lc3NhZ2VzYCBtb2R1bGUgcHJvdmlkZXMgZW5oYW5jZWQgc3VwcG9ydCBmb3IgZGlzcGxheWluZyBtZXNzYWdlcyB3aXRoaW4gdGVtcGxhdGVzXG4gKiAodHlwaWNhbGx5IHdpdGhpbiBmb3JtcyBvciB3aGVuIHJlbmRlcmluZyBtZXNzYWdlIG9iamVjdHMgdGhhdCByZXR1cm4ga2V5L3ZhbHVlIGRhdGEpLlxuICogSW5zdGVhZCBvZiByZWx5aW5nIG9uIEphdmFTY3JpcHQgY29kZSBhbmQvb3IgY29tcGxleCBuZy1pZiBzdGF0ZW1lbnRzIHdpdGhpbiB5b3VyIGZvcm0gdGVtcGxhdGUgdG9cbiAqIHNob3cgYW5kIGhpZGUgZXJyb3IgbWVzc2FnZXMgc3BlY2lmaWMgdG8gdGhlIHN0YXRlIG9mIGFuIGlucHV0IGZpZWxkLCB0aGUgYG5nTWVzc2FnZXNgIGFuZFxuICogYG5nTWVzc2FnZWAgZGlyZWN0aXZlcyBhcmUgZGVzaWduZWQgdG8gaGFuZGxlIHRoZSBjb21wbGV4aXR5LCBpbmhlcml0YW5jZSBhbmQgcHJpb3JpdHlcbiAqIHNlcXVlbmNpbmcgYmFzZWQgb24gdGhlIG9yZGVyIG9mIGhvdyB0aGUgbWVzc2FnZXMgYXJlIGRlZmluZWQgaW4gdGhlIHRlbXBsYXRlLlxuICpcbiAqIEN1cnJlbnRseSwgdGhlIG5nTWVzc2FnZXMgbW9kdWxlIG9ubHkgY29udGFpbnMgdGhlIGNvZGUgZm9yIHRoZSBgbmdNZXNzYWdlc2AsIGBuZ01lc3NhZ2VzSW5jbHVkZWBcbiAqIGBuZ01lc3NhZ2VgIGFuZCBgbmdNZXNzYWdlRXhwYCBkaXJlY3RpdmVzLlxuICpcbiAqICMgVXNhZ2VcbiAqIFRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlIGFsbG93cyBrZXlzIGluIGEga2V5L3ZhbHVlIGNvbGxlY3Rpb24gdG8gYmUgYXNzb2NpYXRlZCB3aXRoIGEgY2hpbGQgZWxlbWVudFxuICogKG9yICdtZXNzYWdlJykgdGhhdCB3aWxsIHNob3cgb3IgaGlkZSBiYXNlZCBvbiB0aGUgdHJ1dGhpbmVzcyBvZiB0aGF0IGtleSdzIHZhbHVlIGluIHRoZSBjb2xsZWN0aW9uLiBBIGNvbW1vbiB1c2VcbiAqIGNhc2UgZm9yIGBuZ01lc3NhZ2VzYCBpcyB0byBkaXNwbGF5IGVycm9yIG1lc3NhZ2VzIGZvciBpbnB1dHMgdXNpbmcgdGhlIGAkZXJyb3JgIG9iamVjdCBleHBvc2VkIGJ5IHRoZVxuICoge0BsaW5rIG5nTW9kZWwgbmdNb2RlbH0gZGlyZWN0aXZlLlxuICpcbiAqIFRoZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZSBhcmUgbWF0Y2hlZCB0byB0aGUgY29sbGVjdGlvbiBrZXlzIGJ5IGEgYG5nTWVzc2FnZWAgb3JcbiAqIGBuZ01lc3NhZ2VFeHBgIGRpcmVjdGl2ZS4gVGhlIHZhbHVlIG9mIHRoZXNlIGF0dHJpYnV0ZXMgbXVzdCBtYXRjaCBhIGtleSBpbiB0aGUgY29sbGVjdGlvbiB0aGF0IGlzIHByb3ZpZGVkIGJ5XG4gKiB0aGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZS5cbiAqXG4gKiBDb25zaWRlciB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIHdoaWNoIGlsbHVzdHJhdGVzIGEgdHlwaWNhbCB1c2UgY2FzZSBvZiBgbmdNZXNzYWdlc2AuIFdpdGhpbiB0aGUgZm9ybSBgbXlGb3JtYCB3ZVxuICogaGF2ZSBhIHRleHQgaW5wdXQgbmFtZWQgYG15RmllbGRgIHdoaWNoIGlzIGJvdW5kIHRvIHRoZSBzY29wZSB2YXJpYWJsZSBgZmllbGRgIHVzaW5nIHRoZSB7QGxpbmsgbmdNb2RlbCBuZ01vZGVsfVxuICogZGlyZWN0aXZlLlxuICpcbiAqIFRoZSBgbXlGaWVsZGAgZmllbGQgaXMgYSByZXF1aXJlZCBpbnB1dCBvZiB0eXBlIGBlbWFpbGAgd2l0aCBhIG1heGltdW0gbGVuZ3RoIG9mIDE1IGNoYXJhY3RlcnMuXG4gKlxuICogYGBgaHRtbFxuICogPGZvcm0gbmFtZT1cIm15Rm9ybVwiPlxuICogICA8bGFiZWw+XG4gKiAgICAgRW50ZXIgdGV4dDpcbiAqICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmctbW9kZWw9XCJmaWVsZFwiIG5hbWU9XCJteUZpZWxkXCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiMTVcIiAvPlxuICogICA8L2xhYmVsPlxuICogICA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RmllbGQuJGVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5QbGVhc2UgZW50ZXIgYSB2YWx1ZSBmb3IgdGhpcyBmaWVsZC48L2Rpdj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJlbWFpbFwiPlRoaXMgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuPC9kaXY+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwibWF4bGVuZ3RoXCI+VGhpcyBmaWVsZCBjYW4gYmUgYXQgbW9zdCAxNSBjaGFyYWN0ZXJzIGxvbmcuPC9kaXY+XG4gKiAgIDwvZGl2PlxuICogPC9mb3JtPlxuICogYGBgXG4gKlxuICogSW4gb3JkZXIgdG8gc2hvdyBlcnJvciBtZXNzYWdlcyBjb3JyZXNwb25kaW5nIHRvIGBteUZpZWxkYCB3ZSBmaXJzdCBjcmVhdGUgYW4gZWxlbWVudCB3aXRoIGFuIGBuZ01lc3NhZ2VzYCBhdHRyaWJ1dGVcbiAqIHNldCB0byB0aGUgYCRlcnJvcmAgb2JqZWN0IG93bmVkIGJ5IHRoZSBgbXlGaWVsZGAgaW5wdXQgaW4gb3VyIGBteUZvcm1gIGZvcm0uXG4gKlxuICogV2l0aGluIHRoaXMgZWxlbWVudCB3ZSB0aGVuIGNyZWF0ZSBzZXBhcmF0ZSBlbGVtZW50cyBmb3IgZWFjaCBvZiB0aGUgcG9zc2libGUgZXJyb3JzIHRoYXQgYG15RmllbGRgIGNvdWxkIGhhdmUuXG4gKiBUaGUgYG5nTWVzc2FnZWAgYXR0cmlidXRlIGlzIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBlbGVtZW50KHMpIHdpbGwgYXBwZWFyIGZvciB3aGljaCBlcnJvciAtIGZvciBleGFtcGxlLFxuICogc2V0dGluZyBgbmctbWVzc2FnZT1cInJlcXVpcmVkXCJgIHNwZWNpZmllcyB0aGF0IHRoaXMgcGFydGljdWxhciBlbGVtZW50IHNob3VsZCBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZVxuICogaXMgbm8gdmFsdWUgcHJlc2VudCBmb3IgdGhlIHJlcXVpcmVkIGZpZWxkIGBteUZpZWxkYCAoYmVjYXVzZSB0aGUga2V5IGByZXF1aXJlZGAgd2lsbCBiZSBgdHJ1ZWAgaW4gdGhlIG9iamVjdFxuICogYG15Rm9ybS5teUZpZWxkLiRlcnJvcmApLlxuICpcbiAqICMjIyBNZXNzYWdlIG9yZGVyXG4gKlxuICogQnkgZGVmYXVsdCwgYG5nTWVzc2FnZXNgIHdpbGwgb25seSBkaXNwbGF5IG9uZSBtZXNzYWdlIGZvciBhIHBhcnRpY3VsYXIga2V5L3ZhbHVlIGNvbGxlY3Rpb24gYXQgYW55IHRpbWUuIElmIG1vcmVcbiAqIHRoYW4gb25lIG1lc3NhZ2UgKG9yIGVycm9yKSBrZXkgaXMgY3VycmVudGx5IHRydWUsIHRoZW4gd2hpY2ggbWVzc2FnZSBpcyBzaG93biBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciBvZiBtZXNzYWdlc1xuICogaW4gdGhlIEhUTUwgdGVtcGxhdGUgY29kZSAobWVzc2FnZXMgZGVjbGFyZWQgZmlyc3QgYXJlIHByaW9yaXRpc2VkKS4gVGhpcyBtZWNoYW5pc20gbWVhbnMgdGhlIGRldmVsb3BlciBkb2VzIG5vdCBoYXZlXG4gKiB0byBwcmlvcml0aXplIG1lc3NhZ2VzIHVzaW5nIGN1c3RvbSBKYXZhU2NyaXB0IGNvZGUuXG4gKlxuICogR2l2ZW4gdGhlIGZvbGxvd2luZyBlcnJvciBvYmplY3QgZm9yIG91ciBleGFtcGxlICh3aGljaCBpbmZvcm1zIHVzIHRoYXQgdGhlIGZpZWxkIGBteUZpZWxkYCBjdXJyZW50bHkgaGFzIGJvdGggdGhlXG4gKiBgcmVxdWlyZWRgIGFuZCBgZW1haWxgIGVycm9ycyk6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogPCEtLSBrZWVwIGluIG1pbmQgdGhhdCBuZ01vZGVsIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGVzZSBlcnJvciBmbGFncyAtLT5cbiAqIG15RmllbGQuJGVycm9yID0geyByZXF1aXJlZCA6IHRydWUsIGVtYWlsOiB0cnVlLCBtYXhsZW5ndGg6IGZhbHNlIH07XG4gKiBgYGBcbiAqIFRoZSBgcmVxdWlyZWRgIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgc2luY2UgaXQgYXBwZWFycyBiZWZvcmUgdGhlIGBlbWFpbGAgbWVzc2FnZSBpbiB0aGUgRE9NLlxuICogT25jZSB0aGUgdXNlciB0eXBlcyBhIHNpbmdsZSBjaGFyYWN0ZXIsIHRoZSBgcmVxdWlyZWRgIG1lc3NhZ2Ugd2lsbCBkaXNhcHBlYXIgKHNpbmNlIHRoZSBmaWVsZCBub3cgaGFzIGEgdmFsdWUpXG4gKiBidXQgdGhlIGBlbWFpbGAgbWVzc2FnZSB3aWxsIGJlIHZpc2libGUgYmVjYXVzZSBpdCBpcyBzdGlsbCBhcHBsaWNhYmxlLlxuICpcbiAqICMjIyBEaXNwbGF5aW5nIG11bHRpcGxlIG1lc3NhZ2VzIGF0IHRoZSBzYW1lIHRpbWVcbiAqXG4gKiBXaGlsZSBgbmdNZXNzYWdlc2Agd2lsbCBieSBkZWZhdWx0IG9ubHkgZGlzcGxheSBvbmUgZXJyb3IgZWxlbWVudCBhdCBhIHRpbWUsIHRoZSBgbmctbWVzc2FnZXMtbXVsdGlwbGVgIGF0dHJpYnV0ZSBjYW5cbiAqIGJlIGFwcGxpZWQgdG8gdGhlIGBuZ01lc3NhZ2VzYCBjb250YWluZXIgZWxlbWVudCB0byBjYXVzZSBpdCB0byBkaXNwbGF5IGFsbCBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2VzIGF0IG9uY2U6XG4gKlxuICogYGBgaHRtbFxuICogPCEtLSBhdHRyaWJ1dGUtc3R5bGUgdXNhZ2UgLS0+XG4gKiA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RmllbGQuJGVycm9yXCIgbmctbWVzc2FnZXMtbXVsdGlwbGU+Li4uPC9kaXY+XG4gKlxuICogPCEtLSBlbGVtZW50LXN0eWxlIHVzYWdlIC0tPlxuICogPG5nLW1lc3NhZ2VzIGZvcj1cIm15Rm9ybS5teUZpZWxkLiRlcnJvclwiIG11bHRpcGxlPi4uLjwvbmctbWVzc2FnZXM+XG4gKiBgYGBcbiAqXG4gKiAjIyBSZXVzaW5nIGFuZCBPdmVycmlkaW5nIE1lc3NhZ2VzXG4gKiBJbiBhZGRpdGlvbiB0byBwcmlvcml0aXphdGlvbiwgbmdNZXNzYWdlcyBhbHNvIGFsbG93cyBmb3IgaW5jbHVkaW5nIG1lc3NhZ2VzIGZyb20gYSByZW1vdGUgb3IgYW4gaW5saW5lXG4gKiB0ZW1wbGF0ZS4gVGhpcyBhbGxvd3MgZm9yIGdlbmVyaWMgY29sbGVjdGlvbiBvZiBtZXNzYWdlcyB0byBiZSByZXVzZWQgYWNyb3NzIG11bHRpcGxlIHBhcnRzIG9mIGFuXG4gKiBhcHBsaWNhdGlvbi5cbiAqXG4gKiBgYGBodG1sXG4gKiA8c2NyaXB0IHR5cGU9XCJ0ZXh0L25nLXRlbXBsYXRlXCIgaWQ9XCJlcnJvci1tZXNzYWdlc1wiPlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwibWlubGVuZ3RoXCI+VGhpcyBmaWVsZCBpcyB0b28gc2hvcnQ8L2Rpdj5cbiAqIDwvc2NyaXB0PlxuICpcbiAqIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlGaWVsZC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcy1pbmNsdWRlPVwiZXJyb3ItbWVzc2FnZXNcIj48L2Rpdj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogSG93ZXZlciwgaW5jbHVkaW5nIGdlbmVyaWMgbWVzc2FnZXMgbWF5IG5vdCBiZSB1c2VmdWwgZW5vdWdoIHRvIG1hdGNoIGFsbCBpbnB1dCBmaWVsZHMsIHRoZXJlZm9yZSxcbiAqIGBuZ01lc3NhZ2VzYCBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBvdmVycmlkZSBtZXNzYWdlcyBkZWZpbmVkIGluIHRoZSByZW1vdGUgdGVtcGxhdGUgYnkgcmVkZWZpbmluZ1xuICogdGhlbSB3aXRoaW4gdGhlIGRpcmVjdGl2ZSBjb250YWluZXIuXG4gKlxuICogYGBgaHRtbFxuICogPCEtLSBhIGdlbmVyaWMgdGVtcGxhdGUgb2YgZXJyb3IgbWVzc2FnZXMga25vd24gYXMgXCJteS1jdXN0b20tbWVzc2FnZXNcIiAtLT5cbiAqIDxzY3JpcHQgdHlwZT1cInRleHQvbmctdGVtcGxhdGVcIiBpZD1cIm15LWN1c3RvbS1tZXNzYWdlc1wiPlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwibWlubGVuZ3RoXCI+VGhpcyBmaWVsZCBpcyB0b28gc2hvcnQ8L2Rpdj5cbiAqIDwvc2NyaXB0PlxuICpcbiAqIDxmb3JtIG5hbWU9XCJteUZvcm1cIj5cbiAqICAgPGxhYmVsPlxuICogICAgIEVtYWlsIGFkZHJlc3NcbiAqICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAqICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gKiAgICAgICAgICAgIG5hbWU9XCJteUVtYWlsXCJcbiAqICAgICAgICAgICAgbmctbW9kZWw9XCJlbWFpbFwiXG4gKiAgICAgICAgICAgIG1pbmxlbmd0aD1cIjVcIlxuICogICAgICAgICAgICByZXF1aXJlZCAvPlxuICogICA8L2xhYmVsPlxuICogICA8IS0tIGFueSBuZy1tZXNzYWdlIGVsZW1lbnRzIHRoYXQgYXBwZWFyIEJFRk9SRSB0aGUgbmctbWVzc2FnZXMtaW5jbHVkZSB3aWxsXG4gKiAgICAgICAgb3ZlcnJpZGUgdGhlIG1lc3NhZ2VzIHByZXNlbnQgaW4gdGhlIG5nLW1lc3NhZ2VzLWluY2x1ZGUgdGVtcGxhdGUgLS0+XG4gKiAgIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlFbWFpbC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgICA8IS0tIHRoaXMgcmVxdWlyZWQgbWVzc2FnZSBoYXMgb3ZlcnJpZGRlbiB0aGUgdGVtcGxhdGUgbWVzc2FnZSAtLT5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPllvdSBkaWQgbm90IGVudGVyIHlvdXIgZW1haWwgYWRkcmVzczwvZGl2PlxuICpcbiAqICAgICA8IS0tIHRoaXMgaXMgYSBicmFuZCBuZXcgbWVzc2FnZSBhbmQgd2lsbCBhcHBlYXIgbGFzdCBpbiB0aGUgcHJpb3JpdGl6YXRpb24gLS0+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwiZW1haWxcIj5Zb3VyIGVtYWlsIGFkZHJlc3MgaXMgaW52YWxpZDwvZGl2PlxuICpcbiAqICAgICA8IS0tIGFuZCBoZXJlIGFyZSB0aGUgZ2VuZXJpYyBlcnJvciBtZXNzYWdlcyAtLT5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2VzLWluY2x1ZGU9XCJteS1jdXN0b20tbWVzc2FnZXNcIj48L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKiBgYGBcbiAqXG4gKiBJbiB0aGUgZXhhbXBsZSBIVE1MIGNvZGUgYWJvdmUgdGhlIG1lc3NhZ2UgdGhhdCBpcyBzZXQgb24gcmVxdWlyZWQgd2lsbCBvdmVycmlkZSB0aGUgY29ycmVzcG9uZGluZ1xuICogcmVxdWlyZWQgbWVzc2FnZSBkZWZpbmVkIHdpdGhpbiB0aGUgcmVtb3RlIHRlbXBsYXRlLiBUaGVyZWZvcmUsIHdpdGggcGFydGljdWxhciBpbnB1dCBmaWVsZHMgKHN1Y2hcbiAqIGVtYWlsIGFkZHJlc3NlcywgZGF0ZSBmaWVsZHMsIGF1dG9jb21wbGV0ZSBpbnB1dHMsIGV0Yy4uLiksIHNwZWNpYWxpemVkIGVycm9yIG1lc3NhZ2VzIGNhbiBiZSBhcHBsaWVkXG4gKiB3aGlsZSBtb3JlIGdlbmVyaWMgbWVzc2FnZXMgY2FuIGJlIHVzZWQgdG8gaGFuZGxlIG90aGVyLCBtb3JlIGdlbmVyYWwgaW5wdXQgZXJyb3JzLlxuICpcbiAqICMjIER5bmFtaWMgTWVzc2FnaW5nXG4gKiBuZ01lc3NhZ2VzIGFsc28gc3VwcG9ydHMgdXNpbmcgZXhwcmVzc2lvbnMgdG8gZHluYW1pY2FsbHkgY2hhbmdlIGtleSB2YWx1ZXMuIFVzaW5nIGFycmF5cyBhbmRcbiAqIHJlcGVhdGVycyB0byBsaXN0IG1lc3NhZ2VzIGlzIGFsc28gc3VwcG9ydGVkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvZGUgYmVsb3cgd2lsbCBiZSBhYmxlIHRvXG4gKiBmdWxseSBhZGFwdCBpdHNlbGYgYW5kIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIG1lc3NhZ2Ugd2hlbiBhbnkgb2YgdGhlIGV4cHJlc3Npb24gZGF0YSBjaGFuZ2VzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxmb3JtIG5hbWU9XCJteUZvcm1cIj5cbiAqICAgPGxhYmVsPlxuICogICAgIEVtYWlsIGFkZHJlc3NcbiAqICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbmFtZT1cIm15RW1haWxcIlxuICogICAgICAgICAgICBuZy1tb2RlbD1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbWlubGVuZ3RoPVwiNVwiXG4gKiAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gKiAgIDwvbGFiZWw+XG4gKiAgIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlFbWFpbC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPllvdSBkaWQgbm90IGVudGVyIHlvdXIgZW1haWwgYWRkcmVzczwvZGl2PlxuICogICAgIDxkaXYgbmctcmVwZWF0PVwiZXJyb3JNZXNzYWdlIGluIGVycm9yTWVzc2FnZXNcIj5cbiAqICAgICAgIDwhLS0gdXNlIG5nLW1lc3NhZ2UtZXhwIGZvciBhIG1lc3NhZ2Ugd2hvc2Uga2V5IGlzIGdpdmVuIGJ5IGFuIGV4cHJlc3Npb24gLS0+XG4gKiAgICAgICA8ZGl2IG5nLW1lc3NhZ2UtZXhwPVwiZXJyb3JNZXNzYWdlLnR5cGVcIj57eyBlcnJvck1lc3NhZ2UudGV4dCB9fTwvZGl2PlxuICogICAgIDwvZGl2PlxuICogICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqIGBgYFxuICpcbiAqIFRoZSBgZXJyb3JNZXNzYWdlLnR5cGVgIGV4cHJlc3Npb24gY2FuIGJlIGEgc3RyaW5nIHZhbHVlIG9yIGl0IGNhbiBiZSBhbiBhcnJheSBzb1xuICogdGhhdCBtdWx0aXBsZSBlcnJvcnMgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBlcnJvciBtZXNzYWdlOlxuICpcbiAqIGBgYGh0bWxcbiAqICAgPGxhYmVsPlxuICogICAgIEVtYWlsIGFkZHJlc3NcbiAqICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbmctbW9kZWw9XCJkYXRhLmVtYWlsXCJcbiAqICAgICAgICAgICAgbmFtZT1cIm15RW1haWxcIlxuICogICAgICAgICAgICBuZy1taW5sZW5ndGg9XCI1XCJcbiAqICAgICAgICAgICAgbmctbWF4bGVuZ3RoPVwiMTAwXCJcbiAqICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAqICAgPC9sYWJlbD5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUVtYWlsLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICAgIDxkaXYgbmctbWVzc2FnZS1leHA9XCIncmVxdWlyZWQnXCI+WW91IGRpZCBub3QgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzPC9kaXY+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlLWV4cD1cIlsnbWlubGVuZ3RoJywgJ21heGxlbmd0aCddXCI+XG4gKiAgICAgICBZb3VyIGVtYWlsIG11c3QgYmUgYmV0d2VlbiA1IGFuZCAxMDAgY2hhcmFjdGVycyBsb25nXG4gKiAgICAgPC9kaXY+XG4gKiAgIDwvZGl2PlxuICogYGBgXG4gKlxuICogRmVlbCBmcmVlIHRvIHVzZSBvdGhlciBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXMgc3VjaCBhcyBuZy1pZiBhbmQgbmctc3dpdGNoIHRvIGZ1cnRoZXIgY29udHJvbFxuICogd2hhdCBtZXNzYWdlcyBhcmUgYWN0aXZlIGFuZCB3aGVuLiBCZSBjYXJlZnVsLCBpZiB5b3UgcGxhY2UgbmctbWVzc2FnZSBvbiB0aGUgc2FtZSBlbGVtZW50XG4gKiBhcyB0aGVzZSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXMsIEFuZ3VsYXIgbWF5IG5vdCBiZSBhYmxlIHRvIGRldGVybWluZSBpZiBhIG1lc3NhZ2UgaXMgYWN0aXZlXG4gKiBvciBub3QuIFRoZXJlZm9yZSBpdCBpcyBiZXN0IHRvIHBsYWNlIHRoZSBuZy1tZXNzYWdlIG9uIGEgY2hpbGQgZWxlbWVudCBvZiB0aGUgc3RydWN0dXJhbFxuICogZGlyZWN0aXZlLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlFbWFpbC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgPGRpdiBuZy1pZj1cInNob3dSZXF1aXJlZEVycm9yXCI+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5QbGVhc2UgZW50ZXIgc29tZXRoaW5nPC9kaXY+XG4gKiAgIDwvZGl2PlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiAjIyBBbmltYXRpb25zXG4gKiBJZiB0aGUgYG5nQW5pbWF0ZWAgbW9kdWxlIGlzIGFjdGl2ZSB3aXRoaW4gdGhlIGFwcGxpY2F0aW9uIHRoZW4gdGhlIGBuZ01lc3NhZ2VzYCwgYG5nTWVzc2FnZWAgYW5kXG4gKiBgbmdNZXNzYWdlRXhwYCBkaXJlY3RpdmVzIHdpbGwgdHJpZ2dlciBhbmltYXRpb25zIHdoZW5ldmVyIGFueSBtZXNzYWdlcyBhcmUgYWRkZWQgYW5kIHJlbW92ZWQgZnJvbVxuICogdGhlIERPTSBieSB0aGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZS5cbiAqXG4gKiBXaGVuZXZlciB0aGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZSBjb250YWlucyBvbmUgb3IgbW9yZSB2aXNpYmxlIG1lc3NhZ2VzIHRoZW4gdGhlIGAubmctYWN0aXZlYCBDU1NcbiAqIGNsYXNzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQuIFRoZSBgLm5nLWluYWN0aXZlYCBDU1MgY2xhc3Mgd2lsbCBiZSBhcHBsaWVkIHdoZW4gdGhlcmUgYXJlIG5vXG4gKiBtZXNzYWdlcyBwcmVzZW50LiBUaGVyZWZvcmUsIENTUyB0cmFuc2l0aW9ucyBhbmQga2V5ZnJhbWVzIGFzIHdlbGwgYXMgSmF2YVNjcmlwdCBhbmltYXRpb25zIGNhblxuICogaG9vayBpbnRvIHRoZSBhbmltYXRpb25zIHdoZW5ldmVyIHRoZXNlIGNsYXNzZXMgYXJlIGFkZGVkL3JlbW92ZWQuXG4gKlxuICogTGV0J3Mgc2F5IHRoYXQgb3VyIEhUTUwgY29kZSBmb3Igb3VyIG1lc3NhZ2VzIGNvbnRhaW5lciBsb29rcyBsaWtlIHNvOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgbmctbWVzc2FnZXM9XCJteU1lc3NhZ2VzXCIgY2xhc3M9XCJteS1tZXNzYWdlc1wiIHJvbGU9XCJhbGVydFwiPlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJhbGVydFwiIGNsYXNzPVwic29tZS1tZXNzYWdlXCI+Li4uPC9kaXY+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cImZhaWxcIiBjbGFzcz1cInNvbWUtbWVzc2FnZVwiPi4uLjwvZGl2PlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBUaGVuIHRoZSBDU1MgYW5pbWF0aW9uIGNvZGUgZm9yIHRoZSBtZXNzYWdlIGNvbnRhaW5lciBsb29rcyBsaWtlIHNvOlxuICpcbiAqIGBgYGNzc1xuICogLm15LW1lc3NhZ2VzIHtcbiAqICAgdHJhbnNpdGlvbjoxcyBsaW5lYXIgYWxsO1xuICogfVxuICogLm15LW1lc3NhZ2VzLm5nLWFjdGl2ZSB7XG4gKiAgIC8vIG1lc3NhZ2VzIGFyZSB2aXNpYmxlXG4gKiB9XG4gKiAubXktbWVzc2FnZXMubmctaW5hY3RpdmUge1xuICogICAvLyBtZXNzYWdlcyBhcmUgaGlkZGVuXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuZXZlciBhbiBpbm5lciBtZXNzYWdlIGlzIGF0dGFjaGVkIChiZWNvbWVzIHZpc2libGUpIG9yIHJlbW92ZWQgKGJlY29tZXMgaGlkZGVuKSB0aGVuIHRoZSBlbnRlclxuICogYW5kIGxlYXZlIGFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgZm9yIGVhY2ggcGFydGljdWxhciBlbGVtZW50IGJvdW5kIHRvIHRoZSBgbmdNZXNzYWdlYCBkaXJlY3RpdmUuXG4gKlxuICogVGhlcmVmb3JlLCB0aGUgQ1NTIGNvZGUgZm9yIHRoZSBpbm5lciBtZXNzYWdlcyBsb29rcyBsaWtlIHNvOlxuICpcbiAqIGBgYGNzc1xuICogLnNvbWUtbWVzc2FnZSB7XG4gKiAgIHRyYW5zaXRpb246MXMgbGluZWFyIGFsbDtcbiAqIH1cbiAqXG4gKiAuc29tZS1tZXNzYWdlLm5nLWVudGVyIHt9XG4gKiAuc29tZS1tZXNzYWdlLm5nLWVudGVyLm5nLWVudGVyLWFjdGl2ZSB7fVxuICpcbiAqIC5zb21lLW1lc3NhZ2UubmctbGVhdmUge31cbiAqIC5zb21lLW1lc3NhZ2UubmctbGVhdmUubmctbGVhdmUtYWN0aXZlIHt9XG4gKiBgYGBcbiAqXG4gKiB7QGxpbmsgbmdBbmltYXRlIENsaWNrIGhlcmV9IHRvIGxlYXJuIGhvdyB0byB1c2UgSmF2YVNjcmlwdCBhbmltYXRpb25zIG9yIHRvIGxlYXJuIG1vcmUgYWJvdXQgbmdBbmltYXRlLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnbmdNZXNzYWdlcycsIFtdLCBmdW5jdGlvbiBpbml0QW5ndWxhckhlbHBlcnMoKSB7XG4gIC8vIEFjY2VzcyBoZWxwZXJzIGZyb20gYW5ndWxhciBjb3JlLlxuICAvLyBEbyBpdCBpbnNpZGUgYSBgY29uZmlnYCBibG9jayB0byBlbnN1cmUgYHdpbmRvdy5hbmd1bGFyYCBpcyBhdmFpbGFibGUuXG4gIGZvckVhY2ggPSBhbmd1bGFyLmZvckVhY2g7XG4gIGlzQXJyYXkgPSBhbmd1bGFyLmlzQXJyYXk7XG4gIGlzU3RyaW5nID0gYW5ndWxhci5pc1N0cmluZztcbiAganFMaXRlID0gYW5ndWxhci5lbGVtZW50O1xufSlcblxuICAvKipcbiAgICogQG5nZG9jIGRpcmVjdGl2ZVxuICAgKiBAbW9kdWxlIG5nTWVzc2FnZXNcbiAgICogQG5hbWUgbmdNZXNzYWdlc1xuICAgKiBAcmVzdHJpY3QgQUVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGBuZ01lc3NhZ2VzYCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGlzIGRlc2lnbmVkIHRvIHNob3cgYW5kIGhpZGUgbWVzc2FnZXMgYmFzZWQgb24gdGhlIHN0YXRlXG4gICAqIG9mIGEga2V5L3ZhbHVlIG9iamVjdCB0aGF0IGl0IGxpc3RlbnMgb24uIFRoZSBkaXJlY3RpdmUgaXRzZWxmIGNvbXBsZW1lbnRzIGVycm9yIG1lc3NhZ2VcbiAgICogcmVwb3J0aW5nIHdpdGggdGhlIGBuZ01vZGVsYCAkZXJyb3Igb2JqZWN0ICh3aGljaCBzdG9yZXMgYSBrZXkvdmFsdWUgc3RhdGUgb2YgdmFsaWRhdGlvbiBlcnJvcnMpLlxuICAgKlxuICAgKiBgbmdNZXNzYWdlc2AgbWFuYWdlcyB0aGUgc3RhdGUgb2YgaW50ZXJuYWwgbWVzc2FnZXMgd2l0aGluIGl0cyBjb250YWluZXIgZWxlbWVudC4gVGhlIGludGVybmFsXG4gICAqIG1lc3NhZ2VzIHVzZSB0aGUgYG5nTWVzc2FnZWAgZGlyZWN0aXZlIGFuZCB3aWxsIGJlIGluc2VydGVkL3JlbW92ZWQgZnJvbSB0aGUgcGFnZSBkZXBlbmRpbmdcbiAgICogb24gaWYgdGhleSdyZSBwcmVzZW50IHdpdGhpbiB0aGUga2V5L3ZhbHVlIG9iamVjdC4gQnkgZGVmYXVsdCwgb25seSBvbmUgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZFxuICAgKiBhdCBhIHRpbWUgYW5kIHRoaXMgZGVwZW5kcyBvbiB0aGUgcHJpb3JpdGl6YXRpb24gb2YgdGhlIG1lc3NhZ2VzIHdpdGhpbiB0aGUgdGVtcGxhdGUuIChUaGlzIGNhblxuICAgKiBiZSBjaGFuZ2VkIGJ5IHVzaW5nIHRoZSBgbmctbWVzc2FnZXMtbXVsdGlwbGVgIG9yIGBtdWx0aXBsZWAgYXR0cmlidXRlIG9uIHRoZSBkaXJlY3RpdmUgY29udGFpbmVyLilcbiAgICpcbiAgICogQSByZW1vdGUgdGVtcGxhdGUgY2FuIGFsc28gYmUgdXNlZCB0byBwcm9tb3RlIG1lc3NhZ2UgcmV1c2FiaWxpdHkgYW5kIG1lc3NhZ2VzIGNhbiBhbHNvIGJlXG4gICAqIG92ZXJyaWRkZW4uXG4gICAqXG4gICAqIHtAbGluayBtb2R1bGU6bmdNZXNzYWdlcyBDbGljayBoZXJlfSB0byBsZWFybiBtb3JlIGFib3V0IGBuZ01lc3NhZ2VzYCBhbmQgYG5nTWVzc2FnZWAuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBodG1sXG4gICAqIDwhLS0gdXNpbmcgYXR0cmlidXRlIGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxBTlkgbmctbWVzc2FnZXM9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlPVwic3RyaW5nVmFsdWVcIj4uLi48L0FOWT5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2U9XCJzdHJpbmdWYWx1ZTEsIHN0cmluZ1ZhbHVlMiwgLi4uXCI+Li4uPC9BTlk+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlLWV4cD1cImV4cHJlc3Npb25WYWx1ZVwiPi4uLjwvQU5ZPlxuICAgKiA8L0FOWT5cbiAgICpcbiAgICogPCEtLSBvciBieSB1c2luZyBlbGVtZW50IGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxuZy1tZXNzYWdlcyBmb3I9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbj1cInN0cmluZ1ZhbHVlXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW49XCJzdHJpbmdWYWx1ZTEsIHN0cmluZ1ZhbHVlMiwgLi4uXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW4tZXhwPVwiZXhwcmVzc2lvblZhbHVlXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiA8L25nLW1lc3NhZ2VzPlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5nTWVzc2FnZXMgYW4gYW5ndWxhciBleHByZXNzaW9uIGV2YWx1YXRpbmcgdG8gYSBrZXkvdmFsdWUgb2JqZWN0XG4gICAqICAgICAgICAgICAgICAgICAodGhpcyBpcyB0eXBpY2FsbHkgdGhlICRlcnJvciBvYmplY3Qgb24gYW4gbmdNb2RlbCBpbnN0YW5jZSkuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gbmdNZXNzYWdlc011bHRpcGxlfG11bHRpcGxlIHdoZW4gc2V0LCBhbGwgbWVzc2FnZXMgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aCB0cnVlXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDxleGFtcGxlIG5hbWU9XCJuZ01lc3NhZ2VzLWRpcmVjdGl2ZVwiIG1vZHVsZT1cIm5nTWVzc2FnZXNFeGFtcGxlXCJcbiAgICogICAgICAgICAgZGVwcz1cImFuZ3VsYXItbWVzc2FnZXMuanNcIlxuICAgKiAgICAgICAgICBhbmltYXRpb25zPVwidHJ1ZVwiIGZpeEJhc2U9XCJ0cnVlXCI+XG4gICAqICAgPGZpbGUgbmFtZT1cImluZGV4Lmh0bWxcIj5cbiAgICogICAgIDxmb3JtIG5hbWU9XCJteUZvcm1cIj5cbiAgICogICAgICAgPGxhYmVsPlxuICAgKiAgICAgICAgIEVudGVyIHlvdXIgbmFtZTpcbiAgICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgKiAgICAgICAgICAgICAgICBuYW1lPVwibXlOYW1lXCJcbiAgICogICAgICAgICAgICAgICAgbmctbW9kZWw9XCJuYW1lXCJcbiAgICogICAgICAgICAgICAgICAgbmctbWlubGVuZ3RoPVwiNVwiXG4gICAqICAgICAgICAgICAgICAgIG5nLW1heGxlbmd0aD1cIjIwXCJcbiAgICogICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAgICogICAgICAgPC9sYWJlbD5cbiAgICogICAgICAgPHByZT5teUZvcm0ubXlOYW1lLiRlcnJvciA9IHt7IG15Rm9ybS5teU5hbWUuJGVycm9yIHwganNvbiB9fTwvcHJlPlxuICAgKlxuICAgKiAgICAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15TmFtZS4kZXJyb3JcIiBzdHlsZT1cImNvbG9yOm1hcm9vblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgICAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+WW91IGRpZCBub3QgZW50ZXIgYSBmaWVsZDwvZGl2PlxuICAgKiAgICAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm1pbmxlbmd0aFwiPllvdXIgZmllbGQgaXMgdG9vIHNob3J0PC9kaXY+XG4gICAqICAgICAgICAgPGRpdiBuZy1tZXNzYWdlPVwibWF4bGVuZ3RoXCI+WW91ciBmaWVsZCBpcyB0b28gbG9uZzwvZGl2PlxuICAgKiAgICAgICA8L2Rpdj5cbiAgICogICAgIDwvZm9ybT5cbiAgICogICA8L2ZpbGU+XG4gICAqICAgPGZpbGUgbmFtZT1cInNjcmlwdC5qc1wiPlxuICAgKiAgICAgYW5ndWxhci5tb2R1bGUoJ25nTWVzc2FnZXNFeGFtcGxlJywgWyduZ01lc3NhZ2VzJ10pO1xuICAgKiAgIDwvZmlsZT5cbiAgICogPC9leGFtcGxlPlxuICAgKi9cbiAgLmRpcmVjdGl2ZSgnbmdNZXNzYWdlcycsIFsnJGFuaW1hdGUnLCBmdW5jdGlvbigkYW5pbWF0ZSkge1xuICAgIHZhciBBQ1RJVkVfQ0xBU1MgPSAnbmctYWN0aXZlJztcbiAgICB2YXIgSU5BQ1RJVkVfQ0xBU1MgPSAnbmctaW5hY3RpdmUnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVpcmU6ICduZ01lc3NhZ2VzJyxcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogWyckZWxlbWVudCcsICckc2NvcGUnLCAnJGF0dHJzJywgZnVuY3Rpb24gTmdNZXNzYWdlc0N0cmwoJGVsZW1lbnQsICRzY29wZSwgJGF0dHJzKSB7XG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcbiAgICAgICAgdmFyIGxhdGVzdEtleSA9IDA7XG4gICAgICAgIHZhciBuZXh0QXR0YWNoSWQgPSAwO1xuXG4gICAgICAgIHRoaXMuZ2V0QXR0YWNoSWQgPSBmdW5jdGlvbiBnZXRBdHRhY2hJZCgpIHsgcmV0dXJuIG5leHRBdHRhY2hJZCsrOyB9O1xuXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMubWVzc2FnZXMgPSB7fTtcbiAgICAgICAgdmFyIHJlbmRlckxhdGVyLCBjYWNoZWRDb2xsZWN0aW9uO1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgICAgICAgIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uIHx8IHt9O1xuXG4gICAgICAgICAgcmVuZGVyTGF0ZXIgPSBmYWxzZTtcbiAgICAgICAgICBjYWNoZWRDb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcblxuICAgICAgICAgIC8vIHRoaXMgaXMgdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGVtcHR5IG9yIGlmIHRoZSBhdHRyaWJ1dGUgdmFsdWUgaXMgdHJ1dGh5XG4gICAgICAgICAgdmFyIG11bHRpcGxlID0gaXNBdHRyVHJ1dGh5KCRzY29wZSwgJGF0dHJzLm5nTWVzc2FnZXNNdWx0aXBsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc0F0dHJUcnV0aHkoJHNjb3BlLCAkYXR0cnMubXVsdGlwbGUpO1xuXG4gICAgICAgICAgdmFyIHVubWF0Y2hlZE1lc3NhZ2VzID0gW107XG4gICAgICAgICAgdmFyIG1hdGNoZWRLZXlzID0ge307XG4gICAgICAgICAgdmFyIG1lc3NhZ2VJdGVtID0gY3RybC5oZWFkO1xuICAgICAgICAgIHZhciBtZXNzYWdlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB2YXIgdG90YWxNZXNzYWdlcyA9IDA7XG5cbiAgICAgICAgICAvLyB3ZSB1c2UgIT0gaW5zdGVhZCBvZiAhPT0gdG8gYWxsb3cgZm9yIGJvdGggdW5kZWZpbmVkIGFuZCBudWxsIHZhbHVlc1xuICAgICAgICAgIHdoaWxlIChtZXNzYWdlSXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0b3RhbE1lc3NhZ2VzKys7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZUN0cmwgPSBtZXNzYWdlSXRlbS5tZXNzYWdlO1xuXG4gICAgICAgICAgICB2YXIgbWVzc2FnZVVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghbWVzc2FnZUZvdW5kKSB7XG4gICAgICAgICAgICAgIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZVVzZWQgJiYgdHJ1dGh5KHZhbHVlKSAmJiBtZXNzYWdlQ3RybC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdG8gcHJldmVudCB0aGUgc2FtZSBlcnJvciBuYW1lIGZyb20gc2hvd2luZyB1cCB0d2ljZVxuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRLZXlzW2tleV0pIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIG1hdGNoZWRLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlVXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlQ3RybC5hdHRhY2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWVzc2FnZVVzZWQpIHtcbiAgICAgICAgICAgICAgLy8gdW5sZXNzIHdlIHdhbnQgdG8gZGlzcGxheSBtdWx0aXBsZSBtZXNzYWdlcyB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgICAvLyBzZXQgYSBmbGFnIGhlcmUgdG8gYXZvaWQgZGlzcGxheWluZyB0aGUgbmV4dCBtZXNzYWdlIGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgIG1lc3NhZ2VGb3VuZCA9ICFtdWx0aXBsZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVubWF0Y2hlZE1lc3NhZ2VzLnB1c2gobWVzc2FnZUN0cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZXNzYWdlSXRlbSA9IG1lc3NhZ2VJdGVtLm5leHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yRWFjaCh1bm1hdGNoZWRNZXNzYWdlcywgZnVuY3Rpb24obWVzc2FnZUN0cmwpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VDdHJsLmRldGFjaCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHVubWF0Y2hlZE1lc3NhZ2VzLmxlbmd0aCAhPT0gdG90YWxNZXNzYWdlcykge1xuICAgICAgICAgICAgJGFuaW1hdGUuc2V0Q2xhc3MoJGVsZW1lbnQsIEFDVElWRV9DTEFTUywgSU5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYW5pbWF0ZS5zZXRDbGFzcygkZWxlbWVudCwgSU5BQ1RJVkVfQ0xBU1MsIEFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKCRhdHRycy5uZ01lc3NhZ2VzIHx8ICRhdHRyc1snZm9yJ10sIGN0cmwucmVuZGVyKTtcblxuICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyBkZXN0cm95ZWQsIHByb2FjdGl2ZWx5IGRlc3Ryb3kgYWxsIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBtZXNzYWdlc1xuICAgICAgICAkZWxlbWVudC5vbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBmb3JFYWNoKG1lc3NhZ2VzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLm1lc3NhZ2UuZGV0YWNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVSZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIXJlbmRlckxhdGVyKSB7XG4gICAgICAgICAgICByZW5kZXJMYXRlciA9IHRydWU7XG4gICAgICAgICAgICAkc2NvcGUuJGV2YWxBc3luYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHJlbmRlckxhdGVyICYmIGNhY2hlZENvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjdHJsLnJlbmRlcihjYWNoZWRDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbihjb21tZW50LCBtZXNzYWdlQ3RybCkge1xuICAgICAgICAgIHZhciBuZXh0S2V5ID0gbGF0ZXN0S2V5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgbWVzc2FnZXNbbmV4dEtleV0gPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlQ3RybFxuICAgICAgICAgIH07XG4gICAgICAgICAgaW5zZXJ0TWVzc2FnZU5vZGUoJGVsZW1lbnRbMF0sIGNvbW1lbnQsIG5leHRLZXkpO1xuICAgICAgICAgIGNvbW1lbnQuJCRuZ01lc3NhZ2VOb2RlID0gbmV4dEtleTtcbiAgICAgICAgICBsYXRlc3RLZXkrKztcblxuICAgICAgICAgIGN0cmwucmVSZW5kZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXIgPSBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgICAgICAgdmFyIGtleSA9IGNvbW1lbnQuJCRuZ01lc3NhZ2VOb2RlO1xuICAgICAgICAgIGRlbGV0ZSBjb21tZW50LiQkbmdNZXNzYWdlTm9kZTtcbiAgICAgICAgICByZW1vdmVNZXNzYWdlTm9kZSgkZWxlbWVudFswXSwgY29tbWVudCwga2V5KTtcbiAgICAgICAgICBkZWxldGUgbWVzc2FnZXNba2V5XTtcbiAgICAgICAgICBjdHJsLnJlUmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZFByZXZpb3VzTWVzc2FnZShwYXJlbnQsIGNvbW1lbnQpIHtcbiAgICAgICAgICB2YXIgcHJldk5vZGUgPSBjb21tZW50O1xuICAgICAgICAgIHZhciBwYXJlbnRMb29rdXAgPSBbXTtcblxuICAgICAgICAgIHdoaWxlIChwcmV2Tm9kZSAmJiBwcmV2Tm9kZSAhPT0gcGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJldktleSA9IHByZXZOb2RlLiQkbmdNZXNzYWdlTm9kZTtcbiAgICAgICAgICAgIGlmIChwcmV2S2V5ICYmIHByZXZLZXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlc1twcmV2S2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGl2ZSBkZWVwZXIgaW50byB0aGUgRE9NIGFuZCBleGFtaW5lIGl0cyBjaGlsZHJlbiBmb3IgYW55IG5nTWVzc2FnZVxuICAgICAgICAgICAgLy8gY29tbWVudHMgdGhhdCBtYXkgYmUgaW4gYW4gZWxlbWVudCB0aGF0IGFwcGVhcnMgZGVlcGVyIGluIHRoZSBsaXN0XG4gICAgICAgICAgICBpZiAocHJldk5vZGUuY2hpbGROb2Rlcy5sZW5ndGggJiYgcGFyZW50TG9va3VwLmluZGV4T2YocHJldk5vZGUpID09PSAtMSkge1xuICAgICAgICAgICAgICBwYXJlbnRMb29rdXAucHVzaChwcmV2Tm9kZSk7XG4gICAgICAgICAgICAgIHByZXZOb2RlID0gcHJldk5vZGUuY2hpbGROb2Rlc1twcmV2Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2Tm9kZS5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgcHJldk5vZGUgPSBwcmV2Tm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcmV2Tm9kZSA9IHByZXZOb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHBhcmVudExvb2t1cC5wdXNoKHByZXZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRNZXNzYWdlTm9kZShwYXJlbnQsIGNvbW1lbnQsIGtleSkge1xuICAgICAgICAgIHZhciBtZXNzYWdlTm9kZSA9IG1lc3NhZ2VzW2tleV07XG4gICAgICAgICAgaWYgKCFjdHJsLmhlYWQpIHtcbiAgICAgICAgICAgIGN0cmwuaGVhZCA9IG1lc3NhZ2VOb2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmaW5kUHJldmlvdXNNZXNzYWdlKHBhcmVudCwgY29tbWVudCk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZU5vZGUubmV4dCA9IG1hdGNoLm5leHQ7XG4gICAgICAgICAgICAgIG1hdGNoLm5leHQgPSBtZXNzYWdlTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VOb2RlLm5leHQgPSBjdHJsLmhlYWQ7XG4gICAgICAgICAgICAgIGN0cmwuaGVhZCA9IG1lc3NhZ2VOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU1lc3NhZ2VOb2RlKHBhcmVudCwgY29tbWVudCwga2V5KSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2VOb2RlID0gbWVzc2FnZXNba2V5XTtcblxuICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRQcmV2aW91c01lc3NhZ2UocGFyZW50LCBjb21tZW50KTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIG1hdGNoLm5leHQgPSBtZXNzYWdlTm9kZS5uZXh0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHJsLmhlYWQgPSBtZXNzYWdlTm9kZS5uZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNBdHRyVHJ1dGh5KHNjb3BlLCBhdHRyKSB7XG4gICAgIHJldHVybiAoaXNTdHJpbmcoYXR0cikgJiYgYXR0ci5sZW5ndGggPT09IDApIHx8IC8vZW1wdHkgYXR0cmlidXRlXG4gICAgICAgICAgICB0cnV0aHkoc2NvcGUuJGV2YWwoYXR0cikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRydXRoeSh2YWwpIHtcbiAgICAgIHJldHVybiBpc1N0cmluZyh2YWwpID8gdmFsLmxlbmd0aCA6ICEhdmFsO1xuICAgIH1cbiAgfV0pXG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAgICogQG5hbWUgbmdNZXNzYWdlc0luY2x1ZGVcbiAgICogQHJlc3RyaWN0IEFFXG4gICAqIEBzY29wZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogYG5nTWVzc2FnZXNJbmNsdWRlYCBpcyBhIGRpcmVjdGl2ZSB3aXRoIHRoZSBwdXJwb3NlIHRvIGltcG9ydCBleGlzdGluZyBuZ01lc3NhZ2UgdGVtcGxhdGVcbiAgICogY29kZSBmcm9tIGEgcmVtb3RlIHRlbXBsYXRlIGFuZCBwbGFjZSB0aGUgZG93bmxvYWRlZCB0ZW1wbGF0ZSBjb2RlIGludG8gdGhlIGV4YWN0IHNwb3RcbiAgICogdGhhdCB0aGUgbmdNZXNzYWdlc0luY2x1ZGUgZGlyZWN0aXZlIGlzIHBsYWNlZCB3aXRoaW4gdGhlIG5nTWVzc2FnZXMgY29udGFpbmVyLiBUaGlzIGFsbG93c1xuICAgKiBmb3IgYSBzZXJpZXMgb2YgcHJlLWRlZmluZWQgbWVzc2FnZXMgdG8gYmUgcmV1c2VkIGFuZCBhbHNvIGFsbG93cyBmb3IgdGhlIGRldmVsb3BlciB0b1xuICAgKiBkZXRlcm1pbmUgd2hhdCBtZXNzYWdlcyBhcmUgb3ZlcnJpZGRlbiBkdWUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgbmdNZXNzYWdlc0luY2x1ZGUgZGlyZWN0aXZlLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgaHRtbFxuICAgKiA8IS0tIHVzaW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVzIC0tPlxuICAgKiA8QU5ZIG5nLW1lc3NhZ2VzPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZXMtaW5jbHVkZT1cInJlbW90ZVRwbFN0cmluZ1wiPi4uLjwvQU5ZPlxuICAgKiA8L0FOWT5cbiAgICpcbiAgICogPCEtLSBvciBieSB1c2luZyBlbGVtZW50IGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxuZy1tZXNzYWdlcyBmb3I9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPG5nLW1lc3NhZ2VzLWluY2x1ZGUgc3JjPVwiZXhwcmVzc2lvblZhbHVlMVwiPi4uLjwvbmctbWVzc2FnZXMtaW5jbHVkZT5cbiAgICogPC9uZy1tZXNzYWdlcz5cbiAgICogYGBgXG4gICAqXG4gICAqIHtAbGluayBtb2R1bGU6bmdNZXNzYWdlcyBDbGljayBoZXJlfSB0byBsZWFybiBtb3JlIGFib3V0IGBuZ01lc3NhZ2VzYCBhbmQgYG5nTWVzc2FnZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZ01lc3NhZ2VzSW5jbHVkZXxzcmMgYSBzdHJpbmcgdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgcmVtb3RlIHRlbXBsYXRlLlxuICAgKi9cbiAgLmRpcmVjdGl2ZSgnbmdNZXNzYWdlc0luY2x1ZGUnLFxuICAgIFsnJHRlbXBsYXRlUmVxdWVzdCcsICckZG9jdW1lbnQnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbigkdGVtcGxhdGVSZXF1ZXN0LCAkZG9jdW1lbnQsICRjb21waWxlKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICByZXF1aXJlOiAnXl5uZ01lc3NhZ2VzJywgLy8gd2Ugb25seSByZXF1aXJlIHRoaXMgZm9yIHZhbGlkYXRpb24gc2FrZVxuICAgICAgbGluazogZnVuY3Rpb24oJHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB2YXIgc3JjID0gYXR0cnMubmdNZXNzYWdlc0luY2x1ZGUgfHwgYXR0cnMuc3JjO1xuICAgICAgICAkdGVtcGxhdGVSZXF1ZXN0KHNyYykudGhlbihmdW5jdGlvbihodG1sKSB7XG4gICAgICAgICAgaWYgKCRzY29wZS4kJGRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGlzU3RyaW5nKGh0bWwpICYmICFodG1sLnRyaW0oKSkge1xuICAgICAgICAgICAgLy8gRW1wdHkgdGVtcGxhdGUgLSBub3RoaW5nIHRvIGNvbXBpbGVcbiAgICAgICAgICAgIHJlcGxhY2VFbGVtZW50V2l0aE1hcmtlcihlbGVtZW50LCBzcmMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOb24tZW1wdHkgdGVtcGxhdGUgLSBjb21waWxlIGFuZCBsaW5rXG4gICAgICAgICAgICAkY29tcGlsZShodG1sKSgkc2NvcGUsIGZ1bmN0aW9uKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuYWZ0ZXIoY29udGVudHMpO1xuICAgICAgICAgICAgICByZXBsYWNlRWxlbWVudFdpdGhNYXJrZXIoZWxlbWVudCwgc3JjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEhlbHBlcnNcbiAgICBmdW5jdGlvbiByZXBsYWNlRWxlbWVudFdpdGhNYXJrZXIoZWxlbWVudCwgc3JjKSB7XG4gICAgICAvLyBBIGNvbW1lbnQgbWFya2VyIGlzIHBsYWNlZCBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXG4gICAgICB2YXIgY29tbWVudCA9ICRjb21waWxlLiQkY3JlYXRlQ29tbWVudCA/XG4gICAgICAgICAgJGNvbXBpbGUuJCRjcmVhdGVDb21tZW50KCduZ01lc3NhZ2VzSW5jbHVkZScsIHNyYykgOlxuICAgICAgICAgICRkb2N1bWVudFswXS5jcmVhdGVDb21tZW50KCcgbmdNZXNzYWdlc0luY2x1ZGU6ICcgKyBzcmMgKyAnICcpO1xuICAgICAgdmFyIG1hcmtlciA9IGpxTGl0ZShjb21tZW50KTtcbiAgICAgIGVsZW1lbnQuYWZ0ZXIobWFya2VyKTtcblxuICAgICAgLy8gRG9uJ3QgcG9sbHV0ZSB0aGUgRE9NIGFueW1vcmUgYnkga2VlcGluZyBhbiBlbXB0eSBkaXJlY3RpdmUgZWxlbWVudFxuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1dKVxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZGlyZWN0aXZlXG4gICAqIEBuYW1lIG5nTWVzc2FnZVxuICAgKiBAcmVzdHJpY3QgQUVcbiAgICogQHNjb3BlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmdNZXNzYWdlYCBpcyBhIGRpcmVjdGl2ZSB3aXRoIHRoZSBwdXJwb3NlIHRvIHNob3cgYW5kIGhpZGUgYSBwYXJ0aWN1bGFyIG1lc3NhZ2UuXG4gICAqIEZvciBgbmdNZXNzYWdlYCB0byBvcGVyYXRlLCBhIHBhcmVudCBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlIG9uIGEgcGFyZW50IERPTSBlbGVtZW50XG4gICAqIG11c3QgYmUgc2l0dWF0ZWQgc2luY2UgaXQgZGV0ZXJtaW5lcyB3aGljaCBtZXNzYWdlcyBhcmUgdmlzaWJsZSBiYXNlZCBvbiB0aGUgc3RhdGVcbiAgICogb2YgdGhlIHByb3ZpZGVkIGtleS92YWx1ZSBtYXAgdGhhdCBgbmdNZXNzYWdlc2AgbGlzdGVucyBvbi5cbiAgICpcbiAgICogTW9yZSBpbmZvcm1hdGlvbiBhYm91dCB1c2luZyBgbmdNZXNzYWdlYCBjYW4gYmUgZm91bmQgaW4gdGhlXG4gICAqIHtAbGluayBtb2R1bGU6bmdNZXNzYWdlcyBgbmdNZXNzYWdlc2AgbW9kdWxlIGRvY3VtZW50YXRpb259LlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgaHRtbFxuICAgKiA8IS0tIHVzaW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVzIC0tPlxuICAgKiA8QU5ZIG5nLW1lc3NhZ2VzPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZT1cInN0cmluZ1ZhbHVlXCI+Li4uPC9BTlk+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlPVwic3RyaW5nVmFsdWUxLCBzdHJpbmdWYWx1ZTIsIC4uLlwiPi4uLjwvQU5ZPlxuICAgKiA8L0FOWT5cbiAgICpcbiAgICogPCEtLSBvciBieSB1c2luZyBlbGVtZW50IGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxuZy1tZXNzYWdlcyBmb3I9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbj1cInN0cmluZ1ZhbHVlXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW49XCJzdHJpbmdWYWx1ZTEsIHN0cmluZ1ZhbHVlMiwgLi4uXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiA8L25nLW1lc3NhZ2VzPlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtleHByZXNzaW9ufSBuZ01lc3NhZ2V8d2hlbiBhIHN0cmluZyB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBtZXNzYWdlIGtleS5cbiAgICovXG4gIC5kaXJlY3RpdmUoJ25nTWVzc2FnZScsIG5nTWVzc2FnZURpcmVjdGl2ZUZhY3RvcnkoKSlcblxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZGlyZWN0aXZlXG4gICAqIEBuYW1lIG5nTWVzc2FnZUV4cFxuICAgKiBAcmVzdHJpY3QgQUVcbiAgICogQHByaW9yaXR5IDFcbiAgICogQHNjb3BlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmdNZXNzYWdlRXhwYCBpcyB0aGUgc2FtZSBhcyB7QGxpbmsgZGlyZWN0aXZlOm5nTWVzc2FnZSBgbmdNZXNzYWdlYH0sIGJ1dCBpbnN0ZWFkIG9mIGEgc3RhdGljXG4gICAqIHZhbHVlLCBpdCBhY2NlcHRzIGFuIGV4cHJlc3Npb24gdG8gYmUgZXZhbHVhdGVkIGZvciB0aGUgbWVzc2FnZSBrZXkuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBodG1sXG4gICAqIDwhLS0gdXNpbmcgYXR0cmlidXRlIGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxBTlkgbmctbWVzc2FnZXM9XCJleHByZXNzaW9uXCI+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlLWV4cD1cImV4cHJlc3Npb25WYWx1ZVwiPi4uLjwvQU5ZPlxuICAgKiA8L0FOWT5cbiAgICpcbiAgICogPCEtLSBvciBieSB1c2luZyBlbGVtZW50IGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxuZy1tZXNzYWdlcyBmb3I9XCJleHByZXNzaW9uXCI+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbi1leHA9XCJleHByZXNzaW9uVmFsdWVcIj4uLi48L25nLW1lc3NhZ2U+XG4gICAqIDwvbmctbWVzc2FnZXM+XG4gICAqIGBgYFxuICAgKlxuICAgKiB7QGxpbmsgbW9kdWxlOm5nTWVzc2FnZXMgQ2xpY2sgaGVyZX0gdG8gbGVhcm4gbW9yZSBhYm91dCBgbmdNZXNzYWdlc2AgYW5kIGBuZ01lc3NhZ2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge2V4cHJlc3Npb259IG5nTWVzc2FnZUV4cHx3aGVuRXhwIGFuIGV4cHJlc3Npb24gdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgbWVzc2FnZSBrZXkuXG4gICAqL1xuICAuZGlyZWN0aXZlKCduZ01lc3NhZ2VFeHAnLCBuZ01lc3NhZ2VEaXJlY3RpdmVGYWN0b3J5KCkpO1xuXG5mdW5jdGlvbiBuZ01lc3NhZ2VEaXJlY3RpdmVGYWN0b3J5KCkge1xuICByZXR1cm4gWyckYW5pbWF0ZScsIGZ1bmN0aW9uKCRhbmltYXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgdHJhbnNjbHVkZTogJ2VsZW1lbnQnLFxuICAgICAgcHJpb3JpdHk6IDEsIC8vIG11c3QgcnVuIGJlZm9yZSBuZ0JpbmQsIG90aGVyd2lzZSB0aGUgdGV4dCBpcyBzZXQgb24gdGhlIGNvbW1lbnRcbiAgICAgIHRlcm1pbmFsOiB0cnVlLFxuICAgICAgcmVxdWlyZTogJ15ebmdNZXNzYWdlcycsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTWVzc2FnZXNDdHJsLCAkdHJhbnNjbHVkZSkge1xuICAgICAgICB2YXIgY29tbWVudE5vZGUgPSBlbGVtZW50WzBdO1xuXG4gICAgICAgIHZhciByZWNvcmRzO1xuICAgICAgICB2YXIgc3RhdGljRXhwID0gYXR0cnMubmdNZXNzYWdlIHx8IGF0dHJzLndoZW47XG4gICAgICAgIHZhciBkeW5hbWljRXhwID0gYXR0cnMubmdNZXNzYWdlRXhwIHx8IGF0dHJzLndoZW5FeHA7XG4gICAgICAgIHZhciBhc3NpZ25SZWNvcmRzID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgICByZWNvcmRzID0gaXRlbXNcbiAgICAgICAgICAgICAgPyAoaXNBcnJheShpdGVtcylcbiAgICAgICAgICAgICAgICAgID8gaXRlbXNcbiAgICAgICAgICAgICAgICAgIDogaXRlbXMuc3BsaXQoL1tcXHMsXSsvKSlcbiAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIG5nTWVzc2FnZXNDdHJsLnJlUmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGR5bmFtaWNFeHApIHtcbiAgICAgICAgICBhc3NpZ25SZWNvcmRzKHNjb3BlLiRldmFsKGR5bmFtaWNFeHApKTtcbiAgICAgICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKGR5bmFtaWNFeHAsIGFzc2lnblJlY29yZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFzc2lnblJlY29yZHMoc3RhdGljRXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJyZW50RWxlbWVudCwgbWVzc2FnZUN0cmw7XG4gICAgICAgIG5nTWVzc2FnZXNDdHJsLnJlZ2lzdGVyKGNvbW1lbnROb2RlLCBtZXNzYWdlQ3RybCA9IHtcbiAgICAgICAgICB0ZXN0OiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbnMocmVjb3JkcywgbmFtZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAkdHJhbnNjbHVkZShmdW5jdGlvbihlbG0sIG5ld1Njb3BlKSB7XG4gICAgICAgICAgICAgICAgJGFuaW1hdGUuZW50ZXIoZWxtLCBudWxsLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGVsbTtcblxuICAgICAgICAgICAgICAgIC8vIEVhY2ggdGltZSB3ZSBhdHRhY2ggdGhpcyBub2RlIHRvIGEgbWVzc2FnZSB3ZSBnZXQgYSBuZXcgaWQgdGhhdCB3ZSBjYW4gbWF0Y2hcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGFyZSBkZXN0cm95aW5nIHRoZSBub2RlIGxhdGVyLlxuICAgICAgICAgICAgICAgIHZhciAkJGF0dGFjaElkID0gY3VycmVudEVsZW1lbnQuJCRhdHRhY2hJZCA9IG5nTWVzc2FnZXNDdHJsLmdldEF0dGFjaElkKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZWxlbWVudCBvciBhIHBhcmVudCBlbGVtZW50IGlzIGRlc3Ryb3llZFxuICAgICAgICAgICAgICAgIC8vIGJ5IGFub3RoZXIgc3RydWN0dXJhbCBkaXJlY3RpdmUgdGhlbiBpdCdzIHRpbWVcbiAgICAgICAgICAgICAgICAvLyB0byBkZXJlZ2lzdGVyIHRoZSBtZXNzYWdlIGZyb20gdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5vbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudCAmJiBjdXJyZW50RWxlbWVudC4kJGF0dGFjaElkID09PSAkJGF0dGFjaElkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5nTWVzc2FnZXNDdHJsLmRlcmVnaXN0ZXIoY29tbWVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ3RybC5kZXRhY2goKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG5ld1Njb3BlLiRkZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGV0YWNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICB2YXIgZWxtID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgJGFuaW1hdGUubGVhdmUoZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1dO1xuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKGNvbGxlY3Rpb24sIGtleSkge1xuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gaXNBcnJheShjb2xsZWN0aW9uKVxuICAgICAgICAgID8gY29sbGVjdGlvbi5pbmRleE9mKGtleSkgPj0gMFxuICAgICAgICAgIDogY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgfVxufVxuXG5cbn0pKHdpbmRvdywgd2luZG93LmFuZ3VsYXIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2FuZ3VsYXItbWVzc2FnZXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJhcGlDaGVja1wiLFwiYW1kXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzMlwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qc1wiOlwiYXBpLWNoZWNrXCJ9XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkV3JhcHBlcnMpO1xuXG4gIGZ1bmN0aW9uIGFkZFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbe1xuICAgICAgbmFtZTogXCJ0ZW1wbGF0ZUxhYmVsXCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbGFiZWwuaHRtbFwiKSxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbC5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7IG5hbWU6IFwidGVtcGxhdGVIYXNFcnJvclwiLCB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vaGFzLWVycm9yLmh0bWxcIikgfV0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dyYXBwZXJzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRXcmFwcGVycyk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRXcmFwcGVyKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0ZW1wbGF0ZUxhYmVsJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sYWJlbC5odG1sJyksXHJcbiAgICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2wub3B0aW9uYWxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB7bmFtZTogJ3RlbXBsYXRlSGFzRXJyb3InLCB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9oYXMtZXJyb3IuaHRtbCcpfVxyXG4gICAgXSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vd3JhcHBlcnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiXFxcIiA+XFxyXFxuICA8bGFiZWwgZm9yPVxcXCJ7e2lkfX1cXFwiIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtbGFiZWwnIDogJydcXFwiPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybWx5LXdyYXBwZXItbGFiZWxcXFwiPnt7dG8ubGFiZWx9fTwvc3Bhbj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImZvcm1seS13cmFwcGVyLXJlcXVpcmVkXFxcIiA+e3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX08L3NwYW4+XFxyXFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbiAgICA8ZGl2IG5nLW1lc3NhZ2VzPVxcXCJmYy4kZXJyb3JcXFwiIFxcclxcbiAgICBuZy1pZj1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kdG9jaGVkXFxcIiBcXHJcXG4gICAgY2xhc3M9XFxcIm15LW1lc3NhZ2VzIGZvcm0tZXJyb3IgaXMtdmlzaWJsZVxcXCI+XFxyXFxuICAgICAgPGRpdiBuZy1tZXNzYWdlPVxcXCJ7ezo6bmFtZX19XFxcIiBuZy1yZXBlYXQ9XFxcIihuYW1lLCBtZXNzYWdlKSBpbiA6Om9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1xcXCIgY2xhc3M9XFxcImZvcm0tZXJyb3IgaXMtdmlzaWJsZVxcXCI+e3ttZXNzYWdlKGZjLiR2aWV3VmFsdWUsIGZjLiRtb2RlbFZhbHVlLCB0aGlzKX19PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9sYWJlbD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3JhcHBlcnMvbGFiZWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sdW1ucyBzbWFsbC17e3RvLmNvbHVtbiA+IDAgPyB0by5jb2x1bW4gOiAxMn19XFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBzaG93RXJyb3J9XFxcIj5cXHJcXG4gIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cmFwcGVycy9oYXMtZXJyb3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIHJlcXVpcmUoXCIuL2NoZWNrYm94XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vbXVsdGlDaGVja2JveFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL2lucHV0XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vcmFkaW9cIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9zZWxlY3RcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi90ZXh0YXJlYVwiKShuZ01vZHVsZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIHJlcXVpcmUoJy4vY2hlY2tib3gnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9tdWx0aUNoZWNrYm94JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vaW5wdXQnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9yYWRpbycpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL3NlbGVjdCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL3RleHRhcmVhJykobmdNb2R1bGUpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZENoZWNrYm94VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcImNoZWNrYm94XCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2hlY2tib3guaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlSGFzRXJyb3JcIl0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2NoZWNrYm94LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAnY2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jaGVja2JveC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVIYXNFcnJvciddLFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9jaGVja2JveC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuXFx0PGxhYmVsIG5nLWNsYXNzPVxcXCJmYy4kdmFsaWQgPyAnJyA6ICdpcy1pbnZhbGlkLWxhYmVsJ1xcXCI+XFxyXFxuXFx0XFx0PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZC1jaGVja2JveFxcXCJcXHJcXG5cXHRcXHQgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCIgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgPyAnaXMtaW52YWxpZC1pbnB1dCcgOiAnJ1xcXCI+XFxyXFxuXFx0XFx0PHNwYW4+e3t0by5sYWJlbH19PC9zcGFuPlxcclxcblxcdFxcdDxzcGFuPnt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319PC9zcGFuPlxcclxcblxcdDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL2NoZWNrYm94Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwibXVsdGlDaGVja2JveFwiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL211bHRpQ2hlY2tib3guaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXG4gICAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXI6IC8qIEBuZ0luamVjdCAqL2Z1bmN0aW9uIGNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgICAgIHZhciB0byA9ICRzY29wZS50bztcbiAgICAgICAgdmFyIG9wdHMgPSAkc2NvcGUub3B0aW9ucztcbiAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3ggPSB7XG4gICAgICAgICAgY2hlY2tlZDogW10sXG4gICAgICAgICAgY2hhbmdlOiBzZXRNb2RlbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNoZWNrYm94ZXMgY2hlY2sgcHJvcGVydHlcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSB0by52YWx1ZVByb3AgfHwgXCJ2YWx1ZVwiO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uICh2LCBpbmRleCkge1xuICAgICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkW2luZGV4XSA9IG1vZGVsVmFsdWUuaW5kZXhPZih2W3ZhbHVlUHJvcF0pICE9PSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRNb2RlbCgpIHtcbiAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldID0gW107XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWQsIGZ1bmN0aW9uIChjaGVja2JveCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldLnB1c2godG8ub3B0aW9uc1tpbmRleF1bdG8udmFsdWVQcm9wIHx8IFwidmFsdWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ211bHRpQ2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tdWx0aUNoZWNrYm94Lmh0bWwnKSxcclxuICAgICAgd3JhcHBlcjogWyd0ZW1wbGF0ZUxhYmVsJywgJ3RlbXBsYXRlSGFzRXJyb3InXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICBub0Zvcm1Db250cm9sOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2YoY2hlY2sub2JqZWN0KSxcclxuICAgICAgICAgIGxhYmVsUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgICAgdmFsdWVQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi8gZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgY29uc3QgdG8gPSAkc2NvcGUudG87XHJcbiAgICAgICAgY29uc3Qgb3B0cyA9ICRzY29wZS5vcHRpb25zO1xyXG4gICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94ID0ge1xyXG4gICAgICAgICAgY2hlY2tlZDogW10sXHJcbiAgICAgICAgICBjaGFuZ2U6IHNldE1vZGVsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY2hlY2tib3hlcyBjaGVjayBwcm9wZXJ0eVxyXG4gICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xyXG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IHRvLnZhbHVlUHJvcCB8fCAndmFsdWUnO1xyXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uKHYsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWRbaW5kZXhdID0gbW9kZWxWYWx1ZS5pbmRleE9mKHZbdmFsdWVQcm9wXSkgIT09IC0xO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRNb2RlbCgpIHtcclxuICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0gPSBbXTtcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkLCAoY2hlY2tib3gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0ucHVzaCh0by5vcHRpb25zW2luZGV4XVt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gIDxsYWJlbCBuZy1jbGFzcz1cXFwiZmMuJHZhbGlkID8gJycgOiAnaXMtaW52YWxpZC1sYWJlbCdcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICBpZD1cXFwie3tpZCArICdfJysgJGluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICBuZy1tb2RlbD1cXFwibXVsdGlDaGVja2JveC5jaGVja2VkWyRpbmRleF1cXFwiXFxyXFxuICAgICAgICAgICBuZy1jaGFuZ2U9XFxcIm11bHRpQ2hlY2tib3guY2hhbmdlKClcXFwiIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL211bHRpQ2hlY2tib3guaHRtbFxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRJbnB1dFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZElucHV0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJpbnB1dFwiLFxuICAgICAgdGVtcGxhdGU6IFwiPGlucHV0IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlwiLFxuICAgICAgd3JhcHBlcjogW1widGVtcGxhdGVMYWJlbFwiLCBcInRlbXBsYXRlSGFzRXJyb3JcIl0sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgdHlwZTogXCJ0ZXh0XCIgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2lucHV0LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRJbnB1dFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRJbnB1dFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAnaW5wdXQnLFxyXG4gICAgICB0ZW1wbGF0ZTogJzxpbnB1dCBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiIG5nLWNsYXNzPVwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/IFxcJ2lzLWludmFsaWQtaW5wdXRcXCcgOiBcXCdcXCdcIj4nLFxyXG4gICAgICB3cmFwcGVyOiBbJ3RlbXBsYXRlTGFiZWwnLCAndGVtcGxhdGVIYXNFcnJvcicgXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgdHlwZTogJ3RleHQnIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvaW5wdXQuanMiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFJhZGlvVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmFkaW8uaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXG4gICAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3JhZGlvLmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRSYWRpb1R5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRSYWRpb1R5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAncmFkaW8nLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yYWRpby5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXHJcbiAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvcmFkaW8uanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcInJhZGlvXFxcIiBuZy1jbGFzcz1cXFwiZmMuJHZhbGlkID8gJycgOiAnaXMtaW52YWxpZC1sYWJlbCdcXFwiPlxcclxcbiAgPGxhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxyXFxuICAgICAgICAgICBpZD1cXFwie3tpZCArICdfJysgJGluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgIG5nLXZhbHVlPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddXFxcIlxcclxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL3JhZGlvLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJzZWxlY3RcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9zZWxlY3QuaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3NlbGVjdC5qcyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFNlbGVjdFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRTZWxlY3RUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3NlbGVjdCcsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NlbGVjdC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGFwaUNoZWNrOiBjaGVjayA9PiAoe1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxyXG4gICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXHJcbiAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvc2VsZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWxlY3RcXHJcXG4gIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICBuZy1vcHRpb25zPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddIGFzIG9wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXSBncm91cCBieSBvcHRpb25bdG8uZ3JvdXBQcm9wIHx8ICdncm91cCddIGZvciBvcHRpb24gaW4gdG8ub3B0aW9uc1xcXCJcXHJcXG4gIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlxcclxcbjwvc2VsZWN0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90eXBlcy9zZWxlY3QuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRUZXh0YXJlYVR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZFRleHRhcmVhVHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgdGVtcGxhdGU6IFwiPHRleHRhcmVhIGNsYXNzPVxcXCJcXFwiIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXCIgKyBcIiBuZy1jbGFzcz1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/ICdpcy1pbnZhbGlkLWlucHV0JyA6ICcnXFxcIj48L3RleHRhcmVhPlwiLFxuICAgICAgd3JhcHBlcjogW1widGVtcGxhdGVMYWJlbFwiLCBcInRlbXBsYXRlSGFzRXJyb3JcIl0sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBuZ01vZGVsQXR0cnM6IHtcbiAgICAgICAgICByb3dzOiB7IGF0dHJpYnV0ZTogXCJyb3dzXCIgfSxcbiAgICAgICAgICBjb2xzOiB7IGF0dHJpYnV0ZTogXCJjb2xzXCIgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgcm93czogY2hlY2subnVtYmVyLm9wdGlvbmFsLFxuICAgICAgICAgICAgY29sczogY2hlY2subnVtYmVyLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3RleHRhcmVhLmpzIiwiZXhwb3J0IGRlZmF1bHQgIG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkVGV4dGFyZWFUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkVGV4dGFyZWFUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3RleHRhcmVhJyxcclxuICAgICAgdGVtcGxhdGU6ICc8dGV4dGFyZWEgY2xhc3M9XCJcIiBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiJyArIFxyXG4gICAgICAnIG5nLWNsYXNzPVwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/IFxcJ2lzLWludmFsaWQtaW5wdXRcXCcgOiBcXCdcXCdcIj48L3RleHRhcmVhPicsXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XHJcbiAgICAgICAgICByb3dzOiB7YXR0cmlidXRlOiAncm93cyd9LFxyXG4gICAgICAgICAgY29sczoge2F0dHJpYnV0ZTogJ2NvbHMnfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIub3B0aW9uYWwsXHJcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXIub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy90ZXh0YXJlYS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iajsgfTtcblxudmFyIGFkZG9ucyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9hZGRvbnNcIikpO1xuXG52YXIgZGVzY3JpcHRpb24gPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vZGVzY3JpcHRpb25cIikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBhZGRvbnMobmdNb2R1bGUpO1xuICBkZXNjcmlwdGlvbihuZ01vZHVsZSk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcbi8vICByZXF1aXJlKCcuL2Rlc2NyaXB0aW9uJykobmdNb2R1bGUpO1xuLy99O1xuLy9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ydW4vaW5kZXguanMiLCJpbXBvcnQgYWRkb25zIGZyb20gJy4vYWRkb25zJztcclxuaW1wb3J0IGRlc2NyaXB0aW9uIGZyb20gJy4vZGVzY3JpcHRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIGFkZG9ucyhuZ01vZHVsZSk7XHJcbiAgZGVzY3JpcHRpb24obmdNb2R1bGUpO1xyXG59O1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcclxuLy8gIHJlcXVpcmUoJy4vZGVzY3JpcHRpb24nKShuZ01vZHVsZSk7XHJcbi8vfTtcclxuLy9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3J1bi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xuXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9hZGRvbnMuaHRtbFwiKTtcbiAgICB2YXIgYWRkb25DaGVja2VyID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIFwiY2xhc3NcIjogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgIHRleHQ6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zdHJpbmcub3B0aW9uYWxcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XG4gICAgdmFyIGFwaSA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxuICAgICAgICBhZGRvblJpZ2h0OiBhZGRvbkNoZWNrZXJcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIucHVzaChmdW5jdGlvbiAodGVtcGxhdGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09IFwiaW5wdXRcIiB8fCAhb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuYWRkb25MZWZ0ICYmICFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvblJpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xuICAgICAgcmV0dXJuIGFkZG9uVGVtcGxhdGUucmVwbGFjZShcIjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlwiLCB0ZW1wbGF0ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcnVuL2FkZG9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRBZGRvbnNNYW5pcHVsYXRvcihmb3JtbHlDb25maWcsIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaykge1xyXG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKCcuL2FkZG9ucy5odG1sJyk7XHJcbiAgICBjb25zdCBhZGRvbkNoZWNrZXIgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICBjbGFzczogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgdGV4dDogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbFxyXG4gICAgfSkuc3RyaWN0Lm9wdGlvbmFsO1xyXG4gICAgY29uc3QgYXBpID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxyXG4gICAgICAgIGFkZG9uUmlnaHQ6IGFkZG9uQ2hlY2tlclxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uKHRlbXBsYXRlLCBvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09ICdpbnB1dCcgfHwgKCFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvbkxlZnQgJiYgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uUmlnaHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xyXG4gICAgICByZXR1cm4gYWRkb25UZW1wbGF0ZS5yZXBsYWNlKCc8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT4nLCB0ZW1wbGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vYWRkb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcInsnJzogdG8uYWRkb25MZWZ0IHx8IHRvLmFkZG9uUmlnaHR9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uTGVmdC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LmNsYXNzXFxcIj48L2k+XFxyXFxuICAgICAgICA8c3BhbiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LnRleHRcXFwiPnt7dG8uYWRkb25MZWZ0LnRleHR9fTwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uUmlnaHQuY2xhc3N9fVxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHQuY2xhc3NcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0LnRleHRcXFwiPnt7dG8uYWRkb25SaWdodC50ZXh0fX08L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ydW4vYWRkb25zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbikgJiYgb3B0aW9ucy50eXBlICE9PSBcInJhZGlvXCIgJiYgb3B0aW9ucy50eXBlICE9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlKVswXSk7XG4gICAgICAgIHZhciBtb2RlbEVscyA9IGFuZ3VsYXIuZWxlbWVudChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLW1vZGVsXVwiKSk7XG4gICAgICAgIGlmIChtb2RlbEVscykge1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcIjxwIGlkPVxcXCJcIiArIHNjb3BlLmlkICsgXCJfZGVzY3JpcHRpb25cXFwiXCIgKyBcImNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIlwiICsgXCJuZy1pZj1cXFwidG8uZGVzY3JpcHRpb25cXFwiPlwiICsgXCJ7e3RvLmRlc2NyaXB0aW9ufX1cIiArIFwiPC9wPlwiKVswXSk7XG4gICAgICAgICAgbW9kZWxFbHMuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiwgc2NvcGUuaWQgKyBcIl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3J1bi9kZXNjcmlwdGlvbi5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uTWFuaXB1bGF0b3IoZm9ybWx5Q29uZmlnKSB7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcclxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uKSAmJlxyXG4gICAgICAgIG9wdGlvbnMudHlwZSAhPT0gJ3JhZGlvJyAmJiBvcHRpb25zLnR5cGUgIT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpWzBdKTtcclxuICAgICAgICB2YXIgbW9kZWxFbHMgPSBhbmd1bGFyLmVsZW1lbnQoZWwucXVlcnlTZWxlY3RvckFsbCgnW25nLW1vZGVsXScpKTtcclxuICAgICAgICBpZiAobW9kZWxFbHMpIHtcclxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcclxuICAgICAgICAgICAgJzxwIGlkPVwiJyArIHNjb3BlLmlkICsgJ19kZXNjcmlwdGlvblwiJyArXHJcbiAgICAgICAgICAgICdjbGFzcz1cImhlbHAtYmxvY2tcIicgK1xyXG4gICAgICAgICAgICAnbmctaWY9XCJ0by5kZXNjcmlwdGlvblwiPicgK1xyXG4gICAgICAgICAgICAne3t0by5kZXNjcmlwdGlvbn19JyArXHJcbiAgICAgICAgICAgICc8L3A+J1xyXG4gICAgICAgICAgKVswXSk7XHJcbiAgICAgICAgICBtb2RlbEVscy5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5Jywgc2NvcGUuaWQgKyAnX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL2Rlc2NyaXB0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==