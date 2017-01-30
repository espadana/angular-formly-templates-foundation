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

	module.exports = "<div class=\"\" >\r\n  <label for=\"{{id}}\" ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n    <span class=\"formly-wrapper-label\">{{to.label}}</span>\r\n    <span class=\"formly-wrapper-required\" >{{to.required ? '*' : ''}}</span>\r\n    <formly-transclude></formly-transclude>\r\n    <div ng-messages=\"fc.$error\" \r\n    ng-if=\"options.formControl.$touched\" \r\n    class=\"my-messages form-error is-visible\">\r\n      <div ng-message=\"{{::name}}\" ng-repeat=\"(name, message) in ::options.validation.messages\" class=\"form-error is-visible\">{{message(fc.$viewValue, fc.$modelValue, this)}}</div>\r\n    </div>\r\n  </label>\r\n</div>\r\n"

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

	module.exports = "<div class=\"checkbox\">\r\n\t<label ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n\t\t<input type=\"checkbox\"\r\n           class=\"formly-field-checkbox\"\r\n\t\t       ng-model=\"model[options.key]\" ng-class=\"fc.$valid ? '' : 'is-invalid-input'\">\r\n\t\t<span>{{to.label}}</span>\r\n\t\t<span>{{to.required ? '*' : ''}}</span>\r\n\t</label>\r\n</div>\r\n"

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

	module.exports = "<div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\r\n  <label ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n    <input type=\"checkbox\"\r\n           id=\"{{id + '_'+ $index}}\"\r\n           ng-model=\"multiCheckbox.checked[$index]\"\r\n           ng-change=\"multiCheckbox.change()\" ng-class=\"fc.$valid ? '' : 'is-invalid-input'\">\r\n      {{option[to.labelProp || 'name']}}\r\n  </label>\r\n</div>\r\n"

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
	      template: "<input ng-model=\"model[options.key]\" ng-class=\"fc.$valid ? '' : 'is-invalid-input'\">",
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

	module.exports = "<div ng-repeat=\"(key, option) in to.options\" class=\"radio\" ng-class=\"fc.$valid ? '' : 'is-invalid-label'\">\r\n  <label>\r\n    <input type=\"radio\"\r\n           id=\"{{id + '_'+ $index}}\"\r\n           tabindex=\"0\"\r\n           ng-value=\"option[to.valueProp || 'value']\"\r\n           ng-model=\"model[options.key]\"\r\n           ng-class=\"fc.$valid ? '' : 'is-invalid-input'\">\r\n      {{option[to.labelProp || 'name']}}\r\n  </label>\r\n</div>\r\n"

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

	module.exports = "<select\r\n  ng-model=\"model[options.key]\"\r\n  ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options\"\r\n  ng-class=\"fc.$valid ? '' : 'is-invalid-input'\">\r\n</select>"

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
	      template: "<textarea class=\"\" ng-model=\"model[options.key]\"" + " ng-class=\"fc.$valid ? '' : 'is-invalid-input'\"></textarea>",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMDE3NTA3MDg5ODY3OGVkYzUzZCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8zMDkwIiwid2VicGFjazovLy8uL2luZGV4LmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanM/ODMyMiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcz9jMzdlIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2FuZ3VsYXItbWVzc2FnZXMvYW5ndWxhci1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcz82MTY2Iiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanM/OGM2OSIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcz81NDk2Iiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzPzZiZjciLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzPzUxZWYiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanM/NGIxYSIsIndlYnBhY2s6Ly8vLi90eXBlcy9yYWRpby5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuanM/NTk4ZiIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcz8zNDZkIiwid2VicGFjazovLy8uL3J1bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanM/NjRmZCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy8uL3J1bi9hZGRvbnMuanM/ZWViNCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3J1bi9kZXNjcmlwdGlvbi5qcz9mZGI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQ0FBLFFBQU8sVUFBVSxvQkFBUSxHOzs7Ozs7QUNBekI7O0FDQUEsS0FBTSxlQUFlO0FBQ3JCLEtBQU0sVUFBVSxvQkFBUTtBQUN4QixLQUFNLFdBQVcsUUFBUSxPQUFPLGNBQWMsQ0FBQyxvQkFBUSxJQUFtQixvQkFBUTtBQUNsRixVQUFTLFNBQ1AsNEJBQ0Esb0JBQVEsR0FBYTtHQUNuQixRQUFRO0tBQ04sUUFBUTs7O0FBSWQsVUFBUyxTQUFTLDJCQUEyQjs7QUFFN0MscUJBQVEsR0FBYztBQUN0QixxQkFBUSxJQUFXO0FBQ25CLHFCQUFRLElBQVM7OztBREVqQixRQUFPLFVDQ1EsYTs7Ozs7O0FDbEJmOztBQUVBOztBQ0FBLEtBQUksVUFBVSxvQkFBUTtBQUN0QixLQUFJLENBQUMsUUFBUSxTQUFTO0dBQ3BCLFVBQVUsT0FBTzs7QUFFbkIsUUFBTyxVQUFVLFE7Ozs7OztBQ05qQixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQscUJBQXFCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QU87O2NBRUo7U0FDTCxPQUFPIiwiZmlsZSI6ImFuZ3VsYXItZm9ybWx5LXRlbXBsYXRlcy1mb3VuZGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpLCByZXF1aXJlKFwiYXBpLWNoZWNrXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFuZ3VsYXJcIiwgXCJhbmd1bGFyLWZvcm1seVwiLCBcImFwaS1jaGVja1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ0Zvcm1seVRlbXBsYXRlc0ZvdW5kYXRpb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nRm9ybWx5VGVtcGxhdGVzRm91bmRhdGlvblwiXSA9IGZhY3Rvcnkocm9vdFtcImFuZ3VsYXJcIl0sIHJvb3RbXCJuZ0Zvcm1seVwiXSwgcm9vdFtcImFwaUNoZWNrXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDAxNzUwNzA4OTg2NzhlZGM1M2QiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pbmRleC5jb21tb25cIik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW5kZXguY29tbW9uJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbmdNb2R1bGVOYW1lID0gXCJmb3JtbHlGb3VuZGF0aW9uXCI7XG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCIuL2FuZ3VsYXItZml4XCIpO1xudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpLCByZXF1aXJlKFwiYW5ndWxhci1tZXNzYWdlc1wiKV0pO1xubmdNb2R1bGUuY29uc3RhbnQoXCJmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2tcIiwgcmVxdWlyZShcImFwaS1jaGVja1wiKSh7XG4gIG91dHB1dDoge1xuICAgIHByZWZpeDogXCJhbmd1bGFyLWZvcm1seS1mb3VuZGF0aW9uXCJcbiAgfVxufSkpO1xubmdNb2R1bGUuY29uc3RhbnQoXCJmb3JtbHlGb3VuZGF0aW9uVmVyc2lvblwiLCBWRVJTSU9OKTtcblxucmVxdWlyZShcIi4vd3JhcHBlcnNcIikobmdNb2R1bGUpO1xucmVxdWlyZShcIi4vdHlwZXNcIikobmdNb2R1bGUpO1xucmVxdWlyZShcIi4vcnVuXCIpKG5nTW9kdWxlKTtcbi8vIHJlcXVpcmUoJ2NzcyEuL3N0eWxlLmNzcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5nTW9kdWxlTmFtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5jb21tb24uanMiLCJjb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5Rm91bmRhdGlvbic7XHJcbmNvbnN0IGFuZ3VsYXIgPSByZXF1aXJlKCcuL2FuZ3VsYXItZml4Jyk7XHJcbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZSgnYW5ndWxhci1mb3JtbHknKSAscmVxdWlyZSgnYW5ndWxhci1tZXNzYWdlcycpICxdKTtcclxubmdNb2R1bGUuY29uc3RhbnQoXHJcbiAgJ2Zvcm1seUZvdW5kYXRpb25BcGlDaGVjaycsXHJcbiAgcmVxdWlyZSgnYXBpLWNoZWNrJykoe1xyXG4gICAgb3V0cHV0OiB7XHJcbiAgICAgIHByZWZpeDogJ2FuZ3VsYXItZm9ybWx5LWZvdW5kYXRpb24nXHJcbiAgICB9XHJcbiAgfSlcclxuKTtcclxubmdNb2R1bGUuY29uc3RhbnQoJ2Zvcm1seUZvdW5kYXRpb25WZXJzaW9uJywgVkVSU0lPTik7XHJcblxyXG5yZXF1aXJlKCcuL3dyYXBwZXJzJykobmdNb2R1bGUpO1xyXG5yZXF1aXJlKCcuL3R5cGVzJykobmdNb2R1bGUpO1xyXG5yZXF1aXJlKCcuL3J1bicpKG5nTW9kdWxlKTtcclxuLy8gcmVxdWlyZSgnY3NzIS4vc3R5bGUuY3NzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZU5hbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5jb21tb24uanMiLCIvLyBzb21lIHZlcnNpb25zIG9mIGFuZ3VsYXIgZG9uJ3QgZXhwb3J0IHRoZSBhbmd1bGFyIG1vZHVsZSBwcm9wZXJseSxcbi8vIHNvIHdlIGdldCBpdCBmcm9tIHdpbmRvdyBpbiB0aGlzIGNhc2UuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhclwiKTtcbmlmICghYW5ndWxhci52ZXJzaW9uKSB7XG4gIGFuZ3VsYXIgPSB3aW5kb3cuYW5ndWxhcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxyXG4vLyBzbyB3ZSBnZXQgaXQgZnJvbSB3aW5kb3cgaW4gdGhpcyBjYXNlLlxyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuaWYgKCFhbmd1bGFyLnZlcnNpb24pIHtcclxuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vYW5ndWxhci1maXgvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2FuZ3VsYXItbWVzc2FnZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gJ25nTWVzc2FnZXMnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhckpTIHYxLjYuMVxuICogKGMpIDIwMTAtMjAxNiBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiAqIExpY2Vuc2U6IE1JVFxuICovXG4oZnVuY3Rpb24od2luZG93LCBhbmd1bGFyKSB7J3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaDtcbnZhciBpc0FycmF5O1xudmFyIGlzU3RyaW5nO1xudmFyIGpxTGl0ZTtcblxuLyoqXG4gKiBAbmdkb2MgbW9kdWxlXG4gKiBAbmFtZSBuZ01lc3NhZ2VzXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUaGUgYG5nTWVzc2FnZXNgIG1vZHVsZSBwcm92aWRlcyBlbmhhbmNlZCBzdXBwb3J0IGZvciBkaXNwbGF5aW5nIG1lc3NhZ2VzIHdpdGhpbiB0ZW1wbGF0ZXNcbiAqICh0eXBpY2FsbHkgd2l0aGluIGZvcm1zIG9yIHdoZW4gcmVuZGVyaW5nIG1lc3NhZ2Ugb2JqZWN0cyB0aGF0IHJldHVybiBrZXkvdmFsdWUgZGF0YSkuXG4gKiBJbnN0ZWFkIG9mIHJlbHlpbmcgb24gSmF2YVNjcmlwdCBjb2RlIGFuZC9vciBjb21wbGV4IG5nLWlmIHN0YXRlbWVudHMgd2l0aGluIHlvdXIgZm9ybSB0ZW1wbGF0ZSB0b1xuICogc2hvdyBhbmQgaGlkZSBlcnJvciBtZXNzYWdlcyBzcGVjaWZpYyB0byB0aGUgc3RhdGUgb2YgYW4gaW5wdXQgZmllbGQsIHRoZSBgbmdNZXNzYWdlc2AgYW5kXG4gKiBgbmdNZXNzYWdlYCBkaXJlY3RpdmVzIGFyZSBkZXNpZ25lZCB0byBoYW5kbGUgdGhlIGNvbXBsZXhpdHksIGluaGVyaXRhbmNlIGFuZCBwcmlvcml0eVxuICogc2VxdWVuY2luZyBiYXNlZCBvbiB0aGUgb3JkZXIgb2YgaG93IHRoZSBtZXNzYWdlcyBhcmUgZGVmaW5lZCBpbiB0aGUgdGVtcGxhdGUuXG4gKlxuICogQ3VycmVudGx5LCB0aGUgbmdNZXNzYWdlcyBtb2R1bGUgb25seSBjb250YWlucyB0aGUgY29kZSBmb3IgdGhlIGBuZ01lc3NhZ2VzYCwgYG5nTWVzc2FnZXNJbmNsdWRlYFxuICogYG5nTWVzc2FnZWAgYW5kIGBuZ01lc3NhZ2VFeHBgIGRpcmVjdGl2ZXMuXG4gKlxuICogIyBVc2FnZVxuICogVGhlIGBuZ01lc3NhZ2VzYCBkaXJlY3RpdmUgYWxsb3dzIGtleXMgaW4gYSBrZXkvdmFsdWUgY29sbGVjdGlvbiB0byBiZSBhc3NvY2lhdGVkIHdpdGggYSBjaGlsZCBlbGVtZW50XG4gKiAob3IgJ21lc3NhZ2UnKSB0aGF0IHdpbGwgc2hvdyBvciBoaWRlIGJhc2VkIG9uIHRoZSB0cnV0aGluZXNzIG9mIHRoYXQga2V5J3MgdmFsdWUgaW4gdGhlIGNvbGxlY3Rpb24uIEEgY29tbW9uIHVzZVxuICogY2FzZSBmb3IgYG5nTWVzc2FnZXNgIGlzIHRvIGRpc3BsYXkgZXJyb3IgbWVzc2FnZXMgZm9yIGlucHV0cyB1c2luZyB0aGUgYCRlcnJvcmAgb2JqZWN0IGV4cG9zZWQgYnkgdGhlXG4gKiB7QGxpbmsgbmdNb2RlbCBuZ01vZGVsfSBkaXJlY3RpdmUuXG4gKlxuICogVGhlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlIGFyZSBtYXRjaGVkIHRvIHRoZSBjb2xsZWN0aW9uIGtleXMgYnkgYSBgbmdNZXNzYWdlYCBvclxuICogYG5nTWVzc2FnZUV4cGAgZGlyZWN0aXZlLiBUaGUgdmFsdWUgb2YgdGhlc2UgYXR0cmlidXRlcyBtdXN0IG1hdGNoIGEga2V5IGluIHRoZSBjb2xsZWN0aW9uIHRoYXQgaXMgcHJvdmlkZWQgYnlcbiAqIHRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlLlxuICpcbiAqIENvbnNpZGVyIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgd2hpY2ggaWxsdXN0cmF0ZXMgYSB0eXBpY2FsIHVzZSBjYXNlIG9mIGBuZ01lc3NhZ2VzYC4gV2l0aGluIHRoZSBmb3JtIGBteUZvcm1gIHdlXG4gKiBoYXZlIGEgdGV4dCBpbnB1dCBuYW1lZCBgbXlGaWVsZGAgd2hpY2ggaXMgYm91bmQgdG8gdGhlIHNjb3BlIHZhcmlhYmxlIGBmaWVsZGAgdXNpbmcgdGhlIHtAbGluayBuZ01vZGVsIG5nTW9kZWx9XG4gKiBkaXJlY3RpdmUuXG4gKlxuICogVGhlIGBteUZpZWxkYCBmaWVsZCBpcyBhIHJlcXVpcmVkIGlucHV0IG9mIHR5cGUgYGVtYWlsYCB3aXRoIGEgbWF4aW11bSBsZW5ndGggb2YgMTUgY2hhcmFjdGVycy5cbiAqXG4gKiBgYGBodG1sXG4gKiA8Zm9ybSBuYW1lPVwibXlGb3JtXCI+XG4gKiAgIDxsYWJlbD5cbiAqICAgICBFbnRlciB0ZXh0OlxuICogICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuZy1tb2RlbD1cImZpZWxkXCIgbmFtZT1cIm15RmllbGRcIiByZXF1aXJlZCBtYXhsZW5ndGg9XCIxNVwiIC8+XG4gKiAgIDwvbGFiZWw+XG4gKiAgIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlGaWVsZC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlBsZWFzZSBlbnRlciBhIHZhbHVlIGZvciB0aGlzIGZpZWxkLjwvZGl2PlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cImVtYWlsXCI+VGhpcyBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcy48L2Rpdj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtYXhsZW5ndGhcIj5UaGlzIGZpZWxkIGNhbiBiZSBhdCBtb3N0IDE1IGNoYXJhY3RlcnMgbG9uZy48L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKiBgYGBcbiAqXG4gKiBJbiBvcmRlciB0byBzaG93IGVycm9yIG1lc3NhZ2VzIGNvcnJlc3BvbmRpbmcgdG8gYG15RmllbGRgIHdlIGZpcnN0IGNyZWF0ZSBhbiBlbGVtZW50IHdpdGggYW4gYG5nTWVzc2FnZXNgIGF0dHJpYnV0ZVxuICogc2V0IHRvIHRoZSBgJGVycm9yYCBvYmplY3Qgb3duZWQgYnkgdGhlIGBteUZpZWxkYCBpbnB1dCBpbiBvdXIgYG15Rm9ybWAgZm9ybS5cbiAqXG4gKiBXaXRoaW4gdGhpcyBlbGVtZW50IHdlIHRoZW4gY3JlYXRlIHNlcGFyYXRlIGVsZW1lbnRzIGZvciBlYWNoIG9mIHRoZSBwb3NzaWJsZSBlcnJvcnMgdGhhdCBgbXlGaWVsZGAgY291bGQgaGF2ZS5cbiAqIFRoZSBgbmdNZXNzYWdlYCBhdHRyaWJ1dGUgaXMgdXNlZCB0byBkZWNsYXJlIHdoaWNoIGVsZW1lbnQocykgd2lsbCBhcHBlYXIgZm9yIHdoaWNoIGVycm9yIC0gZm9yIGV4YW1wbGUsXG4gKiBzZXR0aW5nIGBuZy1tZXNzYWdlPVwicmVxdWlyZWRcImAgc3BlY2lmaWVzIHRoYXQgdGhpcyBwYXJ0aWN1bGFyIGVsZW1lbnQgc2hvdWxkIGJlIGRpc3BsYXllZCB3aGVuIHRoZXJlXG4gKiBpcyBubyB2YWx1ZSBwcmVzZW50IGZvciB0aGUgcmVxdWlyZWQgZmllbGQgYG15RmllbGRgIChiZWNhdXNlIHRoZSBrZXkgYHJlcXVpcmVkYCB3aWxsIGJlIGB0cnVlYCBpbiB0aGUgb2JqZWN0XG4gKiBgbXlGb3JtLm15RmllbGQuJGVycm9yYCkuXG4gKlxuICogIyMjIE1lc3NhZ2Ugb3JkZXJcbiAqXG4gKiBCeSBkZWZhdWx0LCBgbmdNZXNzYWdlc2Agd2lsbCBvbmx5IGRpc3BsYXkgb25lIG1lc3NhZ2UgZm9yIGEgcGFydGljdWxhciBrZXkvdmFsdWUgY29sbGVjdGlvbiBhdCBhbnkgdGltZS4gSWYgbW9yZVxuICogdGhhbiBvbmUgbWVzc2FnZSAob3IgZXJyb3IpIGtleSBpcyBjdXJyZW50bHkgdHJ1ZSwgdGhlbiB3aGljaCBtZXNzYWdlIGlzIHNob3duIGlzIGRldGVybWluZWQgYnkgdGhlIG9yZGVyIG9mIG1lc3NhZ2VzXG4gKiBpbiB0aGUgSFRNTCB0ZW1wbGF0ZSBjb2RlIChtZXNzYWdlcyBkZWNsYXJlZCBmaXJzdCBhcmUgcHJpb3JpdGlzZWQpLiBUaGlzIG1lY2hhbmlzbSBtZWFucyB0aGUgZGV2ZWxvcGVyIGRvZXMgbm90IGhhdmVcbiAqIHRvIHByaW9yaXRpemUgbWVzc2FnZXMgdXNpbmcgY3VzdG9tIEphdmFTY3JpcHQgY29kZS5cbiAqXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIGVycm9yIG9iamVjdCBmb3Igb3VyIGV4YW1wbGUgKHdoaWNoIGluZm9ybXMgdXMgdGhhdCB0aGUgZmllbGQgYG15RmllbGRgIGN1cnJlbnRseSBoYXMgYm90aCB0aGVcbiAqIGByZXF1aXJlZGAgYW5kIGBlbWFpbGAgZXJyb3JzKTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiA8IS0tIGtlZXAgaW4gbWluZCB0aGF0IG5nTW9kZWwgYXV0b21hdGljYWxseSBzZXRzIHRoZXNlIGVycm9yIGZsYWdzIC0tPlxuICogbXlGaWVsZC4kZXJyb3IgPSB7IHJlcXVpcmVkIDogdHJ1ZSwgZW1haWw6IHRydWUsIG1heGxlbmd0aDogZmFsc2UgfTtcbiAqIGBgYFxuICogVGhlIGByZXF1aXJlZGAgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciBzaW5jZSBpdCBhcHBlYXJzIGJlZm9yZSB0aGUgYGVtYWlsYCBtZXNzYWdlIGluIHRoZSBET00uXG4gKiBPbmNlIHRoZSB1c2VyIHR5cGVzIGEgc2luZ2xlIGNoYXJhY3RlciwgdGhlIGByZXF1aXJlZGAgbWVzc2FnZSB3aWxsIGRpc2FwcGVhciAoc2luY2UgdGhlIGZpZWxkIG5vdyBoYXMgYSB2YWx1ZSlcbiAqIGJ1dCB0aGUgYGVtYWlsYCBtZXNzYWdlIHdpbGwgYmUgdmlzaWJsZSBiZWNhdXNlIGl0IGlzIHN0aWxsIGFwcGxpY2FibGUuXG4gKlxuICogIyMjIERpc3BsYXlpbmcgbXVsdGlwbGUgbWVzc2FnZXMgYXQgdGhlIHNhbWUgdGltZVxuICpcbiAqIFdoaWxlIGBuZ01lc3NhZ2VzYCB3aWxsIGJ5IGRlZmF1bHQgb25seSBkaXNwbGF5IG9uZSBlcnJvciBlbGVtZW50IGF0IGEgdGltZSwgdGhlIGBuZy1tZXNzYWdlcy1tdWx0aXBsZWAgYXR0cmlidXRlIGNhblxuICogYmUgYXBwbGllZCB0byB0aGUgYG5nTWVzc2FnZXNgIGNvbnRhaW5lciBlbGVtZW50IHRvIGNhdXNlIGl0IHRvIGRpc3BsYXkgYWxsIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZXMgYXQgb25jZTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8IS0tIGF0dHJpYnV0ZS1zdHlsZSB1c2FnZSAtLT5cbiAqIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlGaWVsZC4kZXJyb3JcIiBuZy1tZXNzYWdlcy1tdWx0aXBsZT4uLi48L2Rpdj5cbiAqXG4gKiA8IS0tIGVsZW1lbnQtc3R5bGUgdXNhZ2UgLS0+XG4gKiA8bmctbWVzc2FnZXMgZm9yPVwibXlGb3JtLm15RmllbGQuJGVycm9yXCIgbXVsdGlwbGU+Li4uPC9uZy1tZXNzYWdlcz5cbiAqIGBgYFxuICpcbiAqICMjIFJldXNpbmcgYW5kIE92ZXJyaWRpbmcgTWVzc2FnZXNcbiAqIEluIGFkZGl0aW9uIHRvIHByaW9yaXRpemF0aW9uLCBuZ01lc3NhZ2VzIGFsc28gYWxsb3dzIGZvciBpbmNsdWRpbmcgbWVzc2FnZXMgZnJvbSBhIHJlbW90ZSBvciBhbiBpbmxpbmVcbiAqIHRlbXBsYXRlLiBUaGlzIGFsbG93cyBmb3IgZ2VuZXJpYyBjb2xsZWN0aW9uIG9mIG1lc3NhZ2VzIHRvIGJlIHJldXNlZCBhY3Jvc3MgbXVsdGlwbGUgcGFydHMgb2YgYW5cbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxzY3JpcHQgdHlwZT1cInRleHQvbmctdGVtcGxhdGVcIiBpZD1cImVycm9yLW1lc3NhZ2VzXCI+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5sZW5ndGhcIj5UaGlzIGZpZWxkIGlzIHRvbyBzaG9ydDwvZGl2PlxuICogPC9zY3JpcHQ+XG4gKlxuICogPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUZpZWxkLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICA8ZGl2IG5nLW1lc3NhZ2VzLWluY2x1ZGU9XCJlcnJvci1tZXNzYWdlc1wiPjwvZGl2PlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBIb3dldmVyLCBpbmNsdWRpbmcgZ2VuZXJpYyBtZXNzYWdlcyBtYXkgbm90IGJlIHVzZWZ1bCBlbm91Z2ggdG8gbWF0Y2ggYWxsIGlucHV0IGZpZWxkcywgdGhlcmVmb3JlLFxuICogYG5nTWVzc2FnZXNgIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIG92ZXJyaWRlIG1lc3NhZ2VzIGRlZmluZWQgaW4gdGhlIHJlbW90ZSB0ZW1wbGF0ZSBieSByZWRlZmluaW5nXG4gKiB0aGVtIHdpdGhpbiB0aGUgZGlyZWN0aXZlIGNvbnRhaW5lci5cbiAqXG4gKiBgYGBodG1sXG4gKiA8IS0tIGEgZ2VuZXJpYyB0ZW1wbGF0ZSBvZiBlcnJvciBtZXNzYWdlcyBrbm93biBhcyBcIm15LWN1c3RvbS1tZXNzYWdlc1wiIC0tPlxuICogPHNjcmlwdCB0eXBlPVwidGV4dC9uZy10ZW1wbGF0ZVwiIGlkPVwibXktY3VzdG9tLW1lc3NhZ2VzXCI+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5sZW5ndGhcIj5UaGlzIGZpZWxkIGlzIHRvbyBzaG9ydDwvZGl2PlxuICogPC9zY3JpcHQ+XG4gKlxuICogPGZvcm0gbmFtZT1cIm15Rm9ybVwiPlxuICogICA8bGFiZWw+XG4gKiAgICAgRW1haWwgYWRkcmVzc1xuICogICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxuICogICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbmFtZT1cIm15RW1haWxcIlxuICogICAgICAgICAgICBuZy1tb2RlbD1cImVtYWlsXCJcbiAqICAgICAgICAgICAgbWlubGVuZ3RoPVwiNVwiXG4gKiAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gKiAgIDwvbGFiZWw+XG4gKiAgIDwhLS0gYW55IG5nLW1lc3NhZ2UgZWxlbWVudHMgdGhhdCBhcHBlYXIgQkVGT1JFIHRoZSBuZy1tZXNzYWdlcy1pbmNsdWRlIHdpbGxcbiAqICAgICAgICBvdmVycmlkZSB0aGUgbWVzc2FnZXMgcHJlc2VudCBpbiB0aGUgbmctbWVzc2FnZXMtaW5jbHVkZSB0ZW1wbGF0ZSAtLT5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUVtYWlsLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICAgIDwhLS0gdGhpcyByZXF1aXJlZCBtZXNzYWdlIGhhcyBvdmVycmlkZGVuIHRoZSB0ZW1wbGF0ZSBtZXNzYWdlIC0tPlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+WW91IGRpZCBub3QgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzPC9kaXY+XG4gKlxuICogICAgIDwhLS0gdGhpcyBpcyBhIGJyYW5kIG5ldyBtZXNzYWdlIGFuZCB3aWxsIGFwcGVhciBsYXN0IGluIHRoZSBwcmlvcml0aXphdGlvbiAtLT5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJlbWFpbFwiPllvdXIgZW1haWwgYWRkcmVzcyBpcyBpbnZhbGlkPC9kaXY+XG4gKlxuICogICAgIDwhLS0gYW5kIGhlcmUgYXJlIHRoZSBnZW5lcmljIGVycm9yIG1lc3NhZ2VzIC0tPlxuICogICAgIDxkaXYgbmctbWVzc2FnZXMtaW5jbHVkZT1cIm15LWN1c3RvbS1tZXNzYWdlc1wiPjwvZGl2PlxuICogICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqIGBgYFxuICpcbiAqIEluIHRoZSBleGFtcGxlIEhUTUwgY29kZSBhYm92ZSB0aGUgbWVzc2FnZSB0aGF0IGlzIHNldCBvbiByZXF1aXJlZCB3aWxsIG92ZXJyaWRlIHRoZSBjb3JyZXNwb25kaW5nXG4gKiByZXF1aXJlZCBtZXNzYWdlIGRlZmluZWQgd2l0aGluIHRoZSByZW1vdGUgdGVtcGxhdGUuIFRoZXJlZm9yZSwgd2l0aCBwYXJ0aWN1bGFyIGlucHV0IGZpZWxkcyAoc3VjaFxuICogZW1haWwgYWRkcmVzc2VzLCBkYXRlIGZpZWxkcywgYXV0b2NvbXBsZXRlIGlucHV0cywgZXRjLi4uKSwgc3BlY2lhbGl6ZWQgZXJyb3IgbWVzc2FnZXMgY2FuIGJlIGFwcGxpZWRcbiAqIHdoaWxlIG1vcmUgZ2VuZXJpYyBtZXNzYWdlcyBjYW4gYmUgdXNlZCB0byBoYW5kbGUgb3RoZXIsIG1vcmUgZ2VuZXJhbCBpbnB1dCBlcnJvcnMuXG4gKlxuICogIyMgRHluYW1pYyBNZXNzYWdpbmdcbiAqIG5nTWVzc2FnZXMgYWxzbyBzdXBwb3J0cyB1c2luZyBleHByZXNzaW9ucyB0byBkeW5hbWljYWxseSBjaGFuZ2Uga2V5IHZhbHVlcy4gVXNpbmcgYXJyYXlzIGFuZFxuICogcmVwZWF0ZXJzIHRvIGxpc3QgbWVzc2FnZXMgaXMgYWxzbyBzdXBwb3J0ZWQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgY29kZSBiZWxvdyB3aWxsIGJlIGFibGUgdG9cbiAqIGZ1bGx5IGFkYXB0IGl0c2VsZiBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgbWVzc2FnZSB3aGVuIGFueSBvZiB0aGUgZXhwcmVzc2lvbiBkYXRhIGNoYW5nZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGZvcm0gbmFtZT1cIm15Rm9ybVwiPlxuICogICA8bGFiZWw+XG4gKiAgICAgRW1haWwgYWRkcmVzc1xuICogICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxuICogICAgICAgICAgICBuYW1lPVwibXlFbWFpbFwiXG4gKiAgICAgICAgICAgIG5nLW1vZGVsPVwiZW1haWxcIlxuICogICAgICAgICAgICBtaW5sZW5ndGg9XCI1XCJcbiAqICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAqICAgPC9sYWJlbD5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUVtYWlsLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+WW91IGRpZCBub3QgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzPC9kaXY+XG4gKiAgICAgPGRpdiBuZy1yZXBlYXQ9XCJlcnJvck1lc3NhZ2UgaW4gZXJyb3JNZXNzYWdlc1wiPlxuICogICAgICAgPCEtLSB1c2UgbmctbWVzc2FnZS1leHAgZm9yIGEgbWVzc2FnZSB3aG9zZSBrZXkgaXMgZ2l2ZW4gYnkgYW4gZXhwcmVzc2lvbiAtLT5cbiAqICAgICAgIDxkaXYgbmctbWVzc2FnZS1leHA9XCJlcnJvck1lc3NhZ2UudHlwZVwiPnt7IGVycm9yTWVzc2FnZS50ZXh0IH19PC9kaXY+XG4gKiAgICAgPC9kaXY+XG4gKiAgIDwvZGl2PlxuICogPC9mb3JtPlxuICogYGBgXG4gKlxuICogVGhlIGBlcnJvck1lc3NhZ2UudHlwZWAgZXhwcmVzc2lvbiBjYW4gYmUgYSBzdHJpbmcgdmFsdWUgb3IgaXQgY2FuIGJlIGFuIGFycmF5IHNvXG4gKiB0aGF0IG11bHRpcGxlIGVycm9ycyBjYW4gYmUgYXNzb2NpYXRlZCB3aXRoIGEgc2luZ2xlIGVycm9yIG1lc3NhZ2U6XG4gKlxuICogYGBgaHRtbFxuICogICA8bGFiZWw+XG4gKiAgICAgRW1haWwgYWRkcmVzc1xuICogICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxuICogICAgICAgICAgICBuZy1tb2RlbD1cImRhdGEuZW1haWxcIlxuICogICAgICAgICAgICBuYW1lPVwibXlFbWFpbFwiXG4gKiAgICAgICAgICAgIG5nLW1pbmxlbmd0aD1cIjVcIlxuICogICAgICAgICAgICBuZy1tYXhsZW5ndGg9XCIxMDBcIlxuICogICAgICAgICAgICByZXF1aXJlZCAvPlxuICogICA8L2xhYmVsPlxuICogICA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RW1haWwuJGVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlLWV4cD1cIidyZXF1aXJlZCdcIj5Zb3UgZGlkIG5vdCBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3M8L2Rpdj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2UtZXhwPVwiWydtaW5sZW5ndGgnLCAnbWF4bGVuZ3RoJ11cIj5cbiAqICAgICAgIFlvdXIgZW1haWwgbXVzdCBiZSBiZXR3ZWVuIDUgYW5kIDEwMCBjaGFyYWN0ZXJzIGxvbmdcbiAqICAgICA8L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBGZWVsIGZyZWUgdG8gdXNlIG90aGVyIHN0cnVjdHVyYWwgZGlyZWN0aXZlcyBzdWNoIGFzIG5nLWlmIGFuZCBuZy1zd2l0Y2ggdG8gZnVydGhlciBjb250cm9sXG4gKiB3aGF0IG1lc3NhZ2VzIGFyZSBhY3RpdmUgYW5kIHdoZW4uIEJlIGNhcmVmdWwsIGlmIHlvdSBwbGFjZSBuZy1tZXNzYWdlIG9uIHRoZSBzYW1lIGVsZW1lbnRcbiAqIGFzIHRoZXNlIHN0cnVjdHVyYWwgZGlyZWN0aXZlcywgQW5ndWxhciBtYXkgbm90IGJlIGFibGUgdG8gZGV0ZXJtaW5lIGlmIGEgbWVzc2FnZSBpcyBhY3RpdmVcbiAqIG9yIG5vdC4gVGhlcmVmb3JlIGl0IGlzIGJlc3QgdG8gcGxhY2UgdGhlIG5nLW1lc3NhZ2Ugb24gYSBjaGlsZCBlbGVtZW50IG9mIHRoZSBzdHJ1Y3R1cmFsXG4gKiBkaXJlY3RpdmUuXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUVtYWlsLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICA8ZGl2IG5nLWlmPVwic2hvd1JlcXVpcmVkRXJyb3JcIj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlBsZWFzZSBlbnRlciBzb21ldGhpbmc8L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqICMjIEFuaW1hdGlvbnNcbiAqIElmIHRoZSBgbmdBbmltYXRlYCBtb2R1bGUgaXMgYWN0aXZlIHdpdGhpbiB0aGUgYXBwbGljYXRpb24gdGhlbiB0aGUgYG5nTWVzc2FnZXNgLCBgbmdNZXNzYWdlYCBhbmRcbiAqIGBuZ01lc3NhZ2VFeHBgIGRpcmVjdGl2ZXMgd2lsbCB0cmlnZ2VyIGFuaW1hdGlvbnMgd2hlbmV2ZXIgYW55IG1lc3NhZ2VzIGFyZSBhZGRlZCBhbmQgcmVtb3ZlZCBmcm9tXG4gKiB0aGUgRE9NIGJ5IHRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlLlxuICpcbiAqIFdoZW5ldmVyIHRoZSBgbmdNZXNzYWdlc2AgZGlyZWN0aXZlIGNvbnRhaW5zIG9uZSBvciBtb3JlIHZpc2libGUgbWVzc2FnZXMgdGhlbiB0aGUgYC5uZy1hY3RpdmVgIENTU1xuICogY2xhc3Mgd2lsbCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudC4gVGhlIGAubmctaW5hY3RpdmVgIENTUyBjbGFzcyB3aWxsIGJlIGFwcGxpZWQgd2hlbiB0aGVyZSBhcmUgbm9cbiAqIG1lc3NhZ2VzIHByZXNlbnQuIFRoZXJlZm9yZSwgQ1NTIHRyYW5zaXRpb25zIGFuZCBrZXlmcmFtZXMgYXMgd2VsbCBhcyBKYXZhU2NyaXB0IGFuaW1hdGlvbnMgY2FuXG4gKiBob29rIGludG8gdGhlIGFuaW1hdGlvbnMgd2hlbmV2ZXIgdGhlc2UgY2xhc3NlcyBhcmUgYWRkZWQvcmVtb3ZlZC5cbiAqXG4gKiBMZXQncyBzYXkgdGhhdCBvdXIgSFRNTCBjb2RlIGZvciBvdXIgbWVzc2FnZXMgY29udGFpbmVyIGxvb2tzIGxpa2Ugc286XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBuZy1tZXNzYWdlcz1cIm15TWVzc2FnZXNcIiBjbGFzcz1cIm15LW1lc3NhZ2VzXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cImFsZXJ0XCIgY2xhc3M9XCJzb21lLW1lc3NhZ2VcIj4uLi48L2Rpdj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwiZmFpbFwiIGNsYXNzPVwic29tZS1tZXNzYWdlXCI+Li4uPC9kaXY+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFRoZW4gdGhlIENTUyBhbmltYXRpb24gY29kZSBmb3IgdGhlIG1lc3NhZ2UgY29udGFpbmVyIGxvb2tzIGxpa2Ugc286XG4gKlxuICogYGBgY3NzXG4gKiAubXktbWVzc2FnZXMge1xuICogICB0cmFuc2l0aW9uOjFzIGxpbmVhciBhbGw7XG4gKiB9XG4gKiAubXktbWVzc2FnZXMubmctYWN0aXZlIHtcbiAqICAgLy8gbWVzc2FnZXMgYXJlIHZpc2libGVcbiAqIH1cbiAqIC5teS1tZXNzYWdlcy5uZy1pbmFjdGl2ZSB7XG4gKiAgIC8vIG1lc3NhZ2VzIGFyZSBoaWRkZW5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW5ldmVyIGFuIGlubmVyIG1lc3NhZ2UgaXMgYXR0YWNoZWQgKGJlY29tZXMgdmlzaWJsZSkgb3IgcmVtb3ZlZCAoYmVjb21lcyBoaWRkZW4pIHRoZW4gdGhlIGVudGVyXG4gKiBhbmQgbGVhdmUgYW5pbWF0aW9uIGlzIHRyaWdnZXJlZCBmb3IgZWFjaCBwYXJ0aWN1bGFyIGVsZW1lbnQgYm91bmQgdG8gdGhlIGBuZ01lc3NhZ2VgIGRpcmVjdGl2ZS5cbiAqXG4gKiBUaGVyZWZvcmUsIHRoZSBDU1MgY29kZSBmb3IgdGhlIGlubmVyIG1lc3NhZ2VzIGxvb2tzIGxpa2Ugc286XG4gKlxuICogYGBgY3NzXG4gKiAuc29tZS1tZXNzYWdlIHtcbiAqICAgdHJhbnNpdGlvbjoxcyBsaW5lYXIgYWxsO1xuICogfVxuICpcbiAqIC5zb21lLW1lc3NhZ2UubmctZW50ZXIge31cbiAqIC5zb21lLW1lc3NhZ2UubmctZW50ZXIubmctZW50ZXItYWN0aXZlIHt9XG4gKlxuICogLnNvbWUtbWVzc2FnZS5uZy1sZWF2ZSB7fVxuICogLnNvbWUtbWVzc2FnZS5uZy1sZWF2ZS5uZy1sZWF2ZS1hY3RpdmUge31cbiAqIGBgYFxuICpcbiAqIHtAbGluayBuZ0FuaW1hdGUgQ2xpY2sgaGVyZX0gdG8gbGVhcm4gaG93IHRvIHVzZSBKYXZhU2NyaXB0IGFuaW1hdGlvbnMgb3IgdG8gbGVhcm4gbW9yZSBhYm91dCBuZ0FuaW1hdGUuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCduZ01lc3NhZ2VzJywgW10sIGZ1bmN0aW9uIGluaXRBbmd1bGFySGVscGVycygpIHtcbiAgLy8gQWNjZXNzIGhlbHBlcnMgZnJvbSBhbmd1bGFyIGNvcmUuXG4gIC8vIERvIGl0IGluc2lkZSBhIGBjb25maWdgIGJsb2NrIHRvIGVuc3VyZSBgd2luZG93LmFuZ3VsYXJgIGlzIGF2YWlsYWJsZS5cbiAgZm9yRWFjaCA9IGFuZ3VsYXIuZm9yRWFjaDtcbiAgaXNBcnJheSA9IGFuZ3VsYXIuaXNBcnJheTtcbiAgaXNTdHJpbmcgPSBhbmd1bGFyLmlzU3RyaW5nO1xuICBqcUxpdGUgPSBhbmd1bGFyLmVsZW1lbnQ7XG59KVxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZGlyZWN0aXZlXG4gICAqIEBtb2R1bGUgbmdNZXNzYWdlc1xuICAgKiBAbmFtZSBuZ01lc3NhZ2VzXG4gICAqIEByZXN0cmljdCBBRVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogYG5nTWVzc2FnZXNgIGlzIGEgZGlyZWN0aXZlIHRoYXQgaXMgZGVzaWduZWQgdG8gc2hvdyBhbmQgaGlkZSBtZXNzYWdlcyBiYXNlZCBvbiB0aGUgc3RhdGVcbiAgICogb2YgYSBrZXkvdmFsdWUgb2JqZWN0IHRoYXQgaXQgbGlzdGVucyBvbi4gVGhlIGRpcmVjdGl2ZSBpdHNlbGYgY29tcGxlbWVudHMgZXJyb3IgbWVzc2FnZVxuICAgKiByZXBvcnRpbmcgd2l0aCB0aGUgYG5nTW9kZWxgICRlcnJvciBvYmplY3QgKHdoaWNoIHN0b3JlcyBhIGtleS92YWx1ZSBzdGF0ZSBvZiB2YWxpZGF0aW9uIGVycm9ycykuXG4gICAqXG4gICAqIGBuZ01lc3NhZ2VzYCBtYW5hZ2VzIHRoZSBzdGF0ZSBvZiBpbnRlcm5hbCBtZXNzYWdlcyB3aXRoaW4gaXRzIGNvbnRhaW5lciBlbGVtZW50LiBUaGUgaW50ZXJuYWxcbiAgICogbWVzc2FnZXMgdXNlIHRoZSBgbmdNZXNzYWdlYCBkaXJlY3RpdmUgYW5kIHdpbGwgYmUgaW5zZXJ0ZWQvcmVtb3ZlZCBmcm9tIHRoZSBwYWdlIGRlcGVuZGluZ1xuICAgKiBvbiBpZiB0aGV5J3JlIHByZXNlbnQgd2l0aGluIHRoZSBrZXkvdmFsdWUgb2JqZWN0LiBCeSBkZWZhdWx0LCBvbmx5IG9uZSBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkXG4gICAqIGF0IGEgdGltZSBhbmQgdGhpcyBkZXBlbmRzIG9uIHRoZSBwcmlvcml0aXphdGlvbiBvZiB0aGUgbWVzc2FnZXMgd2l0aGluIHRoZSB0ZW1wbGF0ZS4gKFRoaXMgY2FuXG4gICAqIGJlIGNoYW5nZWQgYnkgdXNpbmcgdGhlIGBuZy1tZXNzYWdlcy1tdWx0aXBsZWAgb3IgYG11bHRpcGxlYCBhdHRyaWJ1dGUgb24gdGhlIGRpcmVjdGl2ZSBjb250YWluZXIuKVxuICAgKlxuICAgKiBBIHJlbW90ZSB0ZW1wbGF0ZSBjYW4gYWxzbyBiZSB1c2VkIHRvIHByb21vdGUgbWVzc2FnZSByZXVzYWJpbGl0eSBhbmQgbWVzc2FnZXMgY2FuIGFsc28gYmVcbiAgICogb3ZlcnJpZGRlbi5cbiAgICpcbiAgICoge0BsaW5rIG1vZHVsZTpuZ01lc3NhZ2VzIENsaWNrIGhlcmV9IHRvIGxlYXJuIG1vcmUgYWJvdXQgYG5nTWVzc2FnZXNgIGFuZCBgbmdNZXNzYWdlYC5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYGh0bWxcbiAgICogPCEtLSB1c2luZyBhdHRyaWJ1dGUgZGlyZWN0aXZlcyAtLT5cbiAgICogPEFOWSBuZy1tZXNzYWdlcz1cImV4cHJlc3Npb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2U9XCJzdHJpbmdWYWx1ZVwiPi4uLjwvQU5ZPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZT1cInN0cmluZ1ZhbHVlMSwgc3RyaW5nVmFsdWUyLCAuLi5cIj4uLi48L0FOWT5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2UtZXhwPVwiZXhwcmVzc2lvblZhbHVlXCI+Li4uPC9BTlk+XG4gICAqIDwvQU5ZPlxuICAgKlxuICAgKiA8IS0tIG9yIGJ5IHVzaW5nIGVsZW1lbnQgZGlyZWN0aXZlcyAtLT5cbiAgICogPG5nLW1lc3NhZ2VzIGZvcj1cImV4cHJlc3Npb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuPVwic3RyaW5nVmFsdWVcIj4uLi48L25nLW1lc3NhZ2U+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbj1cInN0cmluZ1ZhbHVlMSwgc3RyaW5nVmFsdWUyLCAuLi5cIj4uLi48L25nLW1lc3NhZ2U+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbi1leHA9XCJleHByZXNzaW9uVmFsdWVcIj4uLi48L25nLW1lc3NhZ2U+XG4gICAqIDwvbmctbWVzc2FnZXM+XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmdNZXNzYWdlcyBhbiBhbmd1bGFyIGV4cHJlc3Npb24gZXZhbHVhdGluZyB0byBhIGtleS92YWx1ZSBvYmplY3RcbiAgICogICAgICAgICAgICAgICAgICh0aGlzIGlzIHR5cGljYWxseSB0aGUgJGVycm9yIG9iamVjdCBvbiBhbiBuZ01vZGVsIGluc3RhbmNlKS5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBuZ01lc3NhZ2VzTXVsdGlwbGV8bXVsdGlwbGUgd2hlbiBzZXQsIGFsbCBtZXNzYWdlcyB3aWxsIGJlIGRpc3BsYXllZCB3aXRoIHRydWVcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPGV4YW1wbGUgbmFtZT1cIm5nTWVzc2FnZXMtZGlyZWN0aXZlXCIgbW9kdWxlPVwibmdNZXNzYWdlc0V4YW1wbGVcIlxuICAgKiAgICAgICAgICBkZXBzPVwiYW5ndWxhci1tZXNzYWdlcy5qc1wiXG4gICAqICAgICAgICAgIGFuaW1hdGlvbnM9XCJ0cnVlXCIgZml4QmFzZT1cInRydWVcIj5cbiAgICogICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgKiAgICAgPGZvcm0gbmFtZT1cIm15Rm9ybVwiPlxuICAgKiAgICAgICA8bGFiZWw+XG4gICAqICAgICAgICAgRW50ZXIgeW91ciBuYW1lOlxuICAgKiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAqICAgICAgICAgICAgICAgIG5hbWU9XCJteU5hbWVcIlxuICAgKiAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIm5hbWVcIlxuICAgKiAgICAgICAgICAgICAgICBuZy1taW5sZW5ndGg9XCI1XCJcbiAgICogICAgICAgICAgICAgICAgbmctbWF4bGVuZ3RoPVwiMjBcIlxuICAgKiAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgKiAgICAgICA8L2xhYmVsPlxuICAgKiAgICAgICA8cHJlPm15Rm9ybS5teU5hbWUuJGVycm9yID0ge3sgbXlGb3JtLm15TmFtZS4kZXJyb3IgfCBqc29uIH19PC9wcmU+XG4gICAqXG4gICAqICAgICAgIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlOYW1lLiRlcnJvclwiIHN0eWxlPVwiY29sb3I6bWFyb29uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5Zb3UgZGlkIG5vdCBlbnRlciBhIGZpZWxkPC9kaXY+XG4gICAqICAgICAgICAgPGRpdiBuZy1tZXNzYWdlPVwibWlubGVuZ3RoXCI+WW91ciBmaWVsZCBpcyB0b28gc2hvcnQ8L2Rpdj5cbiAgICogICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtYXhsZW5ndGhcIj5Zb3VyIGZpZWxkIGlzIHRvbyBsb25nPC9kaXY+XG4gICAqICAgICAgIDwvZGl2PlxuICAgKiAgICAgPC9mb3JtPlxuICAgKiAgIDwvZmlsZT5cbiAgICogICA8ZmlsZSBuYW1lPVwic2NyaXB0LmpzXCI+XG4gICAqICAgICBhbmd1bGFyLm1vZHVsZSgnbmdNZXNzYWdlc0V4YW1wbGUnLCBbJ25nTWVzc2FnZXMnXSk7XG4gICAqICAgPC9maWxlPlxuICAgKiA8L2V4YW1wbGU+XG4gICAqL1xuICAuZGlyZWN0aXZlKCduZ01lc3NhZ2VzJywgWyckYW5pbWF0ZScsIGZ1bmN0aW9uKCRhbmltYXRlKSB7XG4gICAgdmFyIEFDVElWRV9DTEFTUyA9ICduZy1hY3RpdmUnO1xuICAgIHZhciBJTkFDVElWRV9DTEFTUyA9ICduZy1pbmFjdGl2ZSc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWlyZTogJ25nTWVzc2FnZXMnLFxuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiBbJyRlbGVtZW50JywgJyRzY29wZScsICckYXR0cnMnLCBmdW5jdGlvbiBOZ01lc3NhZ2VzQ3RybCgkZWxlbWVudCwgJHNjb3BlLCAkYXR0cnMpIHtcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xuICAgICAgICB2YXIgbGF0ZXN0S2V5ID0gMDtcbiAgICAgICAgdmFyIG5leHRBdHRhY2hJZCA9IDA7XG5cbiAgICAgICAgdGhpcy5nZXRBdHRhY2hJZCA9IGZ1bmN0aW9uIGdldEF0dGFjaElkKCkgeyByZXR1cm4gbmV4dEF0dGFjaElkKys7IH07XG5cbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcyA9IHt9O1xuICAgICAgICB2YXIgcmVuZGVyTGF0ZXIsIGNhY2hlZENvbGxlY3Rpb247XG5cbiAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24gfHwge307XG5cbiAgICAgICAgICByZW5kZXJMYXRlciA9IGZhbHNlO1xuICAgICAgICAgIGNhY2hlZENvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuXG4gICAgICAgICAgLy8gdGhpcyBpcyB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgZW1wdHkgb3IgaWYgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBpcyB0cnV0aHlcbiAgICAgICAgICB2YXIgbXVsdGlwbGUgPSBpc0F0dHJUcnV0aHkoJHNjb3BlLCAkYXR0cnMubmdNZXNzYWdlc011bHRpcGxlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXR0clRydXRoeSgkc2NvcGUsICRhdHRycy5tdWx0aXBsZSk7XG5cbiAgICAgICAgICB2YXIgdW5tYXRjaGVkTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgICB2YXIgbWF0Y2hlZEtleXMgPSB7fTtcbiAgICAgICAgICB2YXIgbWVzc2FnZUl0ZW0gPSBjdHJsLmhlYWQ7XG4gICAgICAgICAgdmFyIG1lc3NhZ2VGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIHZhciB0b3RhbE1lc3NhZ2VzID0gMDtcblxuICAgICAgICAgIC8vIHdlIHVzZSAhPSBpbnN0ZWFkIG9mICE9PSB0byBhbGxvdyBmb3IgYm90aCB1bmRlZmluZWQgYW5kIG51bGwgdmFsdWVzXG4gICAgICAgICAgd2hpbGUgKG1lc3NhZ2VJdGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRvdGFsTWVzc2FnZXMrKztcbiAgICAgICAgICAgIHZhciBtZXNzYWdlQ3RybCA9IG1lc3NhZ2VJdGVtLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgIHZhciBtZXNzYWdlVXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFtZXNzYWdlRm91bmQpIHtcbiAgICAgICAgICAgICAgZm9yRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlVXNlZCAmJiB0cnV0aHkodmFsdWUpICYmIG1lc3NhZ2VDdHJsLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0byBwcmV2ZW50IHRoZSBzYW1lIGVycm9yIG5hbWUgZnJvbSBzaG93aW5nIHVwIHR3aWNlXG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEtleXNba2V5XSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgbWF0Y2hlZEtleXNba2V5XSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VVc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDdHJsLmF0dGFjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXNzYWdlVXNlZCkge1xuICAgICAgICAgICAgICAvLyB1bmxlc3Mgd2Ugd2FudCB0byBkaXNwbGF5IG11bHRpcGxlIG1lc3NhZ2VzIHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgICAgICAgIC8vIHNldCBhIGZsYWcgaGVyZSB0byBhdm9pZCBkaXNwbGF5aW5nIHRoZSBuZXh0IG1lc3NhZ2UgaW4gdGhlIGxpc3RcbiAgICAgICAgICAgICAgbWVzc2FnZUZvdW5kID0gIW11bHRpcGxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdW5tYXRjaGVkTWVzc2FnZXMucHVzaChtZXNzYWdlQ3RybCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lc3NhZ2VJdGVtID0gbWVzc2FnZUl0ZW0ubmV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3JFYWNoKHVubWF0Y2hlZE1lc3NhZ2VzLCBmdW5jdGlvbihtZXNzYWdlQ3RybCkge1xuICAgICAgICAgICAgbWVzc2FnZUN0cmwuZGV0YWNoKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodW5tYXRjaGVkTWVzc2FnZXMubGVuZ3RoICE9PSB0b3RhbE1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAkYW5pbWF0ZS5zZXRDbGFzcygkZWxlbWVudCwgQUNUSVZFX0NMQVNTLCBJTkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhbmltYXRlLnNldENsYXNzKCRlbGVtZW50LCBJTkFDVElWRV9DTEFTUywgQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLiR3YXRjaENvbGxlY3Rpb24oJGF0dHJzLm5nTWVzc2FnZXMgfHwgJGF0dHJzWydmb3InXSwgY3RybC5yZW5kZXIpO1xuXG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIGRlc3Ryb3llZCwgcHJvYWN0aXZlbHkgZGVzdHJveSBhbGwgdGhlIGN1cnJlbnRseSB2aXNpYmxlIG1lc3NhZ2VzXG4gICAgICAgICRlbGVtZW50Lm9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZvckVhY2gobWVzc2FnZXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0ubWVzc2FnZS5kZXRhY2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZVJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghcmVuZGVyTGF0ZXIpIHtcbiAgICAgICAgICAgIHJlbmRlckxhdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICRzY29wZS4kZXZhbEFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAocmVuZGVyTGF0ZXIgJiYgY2FjaGVkQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGN0cmwucmVuZGVyKGNhY2hlZENvbGxlY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlciA9IGZ1bmN0aW9uKGNvbW1lbnQsIG1lc3NhZ2VDdHJsKSB7XG4gICAgICAgICAgdmFyIG5leHRLZXkgPSBsYXRlc3RLZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICBtZXNzYWdlc1tuZXh0S2V5XSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VDdHJsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbnNlcnRNZXNzYWdlTm9kZSgkZWxlbWVudFswXSwgY29tbWVudCwgbmV4dEtleSk7XG4gICAgICAgICAgY29tbWVudC4kJG5nTWVzc2FnZU5vZGUgPSBuZXh0S2V5O1xuICAgICAgICAgIGxhdGVzdEtleSsrO1xuXG4gICAgICAgICAgY3RybC5yZVJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGVyZWdpc3RlciA9IGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICAgICAgICB2YXIga2V5ID0gY29tbWVudC4kJG5nTWVzc2FnZU5vZGU7XG4gICAgICAgICAgZGVsZXRlIGNvbW1lbnQuJCRuZ01lc3NhZ2VOb2RlO1xuICAgICAgICAgIHJlbW92ZU1lc3NhZ2VOb2RlKCRlbGVtZW50WzBdLCBjb21tZW50LCBrZXkpO1xuICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1trZXldO1xuICAgICAgICAgIGN0cmwucmVSZW5kZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBmaW5kUHJldmlvdXNNZXNzYWdlKHBhcmVudCwgY29tbWVudCkge1xuICAgICAgICAgIHZhciBwcmV2Tm9kZSA9IGNvbW1lbnQ7XG4gICAgICAgICAgdmFyIHBhcmVudExvb2t1cCA9IFtdO1xuXG4gICAgICAgICAgd2hpbGUgKHByZXZOb2RlICYmIHByZXZOb2RlICE9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgIHZhciBwcmV2S2V5ID0gcHJldk5vZGUuJCRuZ01lc3NhZ2VOb2RlO1xuICAgICAgICAgICAgaWYgKHByZXZLZXkgJiYgcHJldktleS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzW3ByZXZLZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkaXZlIGRlZXBlciBpbnRvIHRoZSBET00gYW5kIGV4YW1pbmUgaXRzIGNoaWxkcmVuIGZvciBhbnkgbmdNZXNzYWdlXG4gICAgICAgICAgICAvLyBjb21tZW50cyB0aGF0IG1heSBiZSBpbiBhbiBlbGVtZW50IHRoYXQgYXBwZWFycyBkZWVwZXIgaW4gdGhlIGxpc3RcbiAgICAgICAgICAgIGlmIChwcmV2Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAmJiBwYXJlbnRMb29rdXAuaW5kZXhPZihwcmV2Tm9kZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHBhcmVudExvb2t1cC5wdXNoKHByZXZOb2RlKTtcbiAgICAgICAgICAgICAgcHJldk5vZGUgPSBwcmV2Tm9kZS5jaGlsZE5vZGVzW3ByZXZOb2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZXZOb2RlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgICBwcmV2Tm9kZSA9IHByZXZOb2RlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByZXZOb2RlID0gcHJldk5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgcGFyZW50TG9va3VwLnB1c2gocHJldk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluc2VydE1lc3NhZ2VOb2RlKHBhcmVudCwgY29tbWVudCwga2V5KSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2VOb2RlID0gbWVzc2FnZXNba2V5XTtcbiAgICAgICAgICBpZiAoIWN0cmwuaGVhZCkge1xuICAgICAgICAgICAgY3RybC5oZWFkID0gbWVzc2FnZU5vZGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRQcmV2aW91c01lc3NhZ2UocGFyZW50LCBjb21tZW50KTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICBtZXNzYWdlTm9kZS5uZXh0ID0gbWF0Y2gubmV4dDtcbiAgICAgICAgICAgICAgbWF0Y2gubmV4dCA9IG1lc3NhZ2VOb2RlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVzc2FnZU5vZGUubmV4dCA9IGN0cmwuaGVhZDtcbiAgICAgICAgICAgICAgY3RybC5oZWFkID0gbWVzc2FnZU5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTWVzc2FnZU5vZGUocGFyZW50LCBjb21tZW50LCBrZXkpIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZU5vZGUgPSBtZXNzYWdlc1trZXldO1xuXG4gICAgICAgICAgdmFyIG1hdGNoID0gZmluZFByZXZpb3VzTWVzc2FnZShwYXJlbnQsIGNvbW1lbnQpO1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgbWF0Y2gubmV4dCA9IG1lc3NhZ2VOb2RlLm5leHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0cmwuaGVhZCA9IG1lc3NhZ2VOb2RlLm5leHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc0F0dHJUcnV0aHkoc2NvcGUsIGF0dHIpIHtcbiAgICAgcmV0dXJuIChpc1N0cmluZyhhdHRyKSAmJiBhdHRyLmxlbmd0aCA9PT0gMCkgfHwgLy9lbXB0eSBhdHRyaWJ1dGVcbiAgICAgICAgICAgIHRydXRoeShzY29wZS4kZXZhbChhdHRyKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJ1dGh5KHZhbCkge1xuICAgICAgcmV0dXJuIGlzU3RyaW5nKHZhbCkgPyB2YWwubGVuZ3RoIDogISF2YWw7XG4gICAgfVxuICB9XSlcblxuICAvKipcbiAgICogQG5nZG9jIGRpcmVjdGl2ZVxuICAgKiBAbmFtZSBuZ01lc3NhZ2VzSW5jbHVkZVxuICAgKiBAcmVzdHJpY3QgQUVcbiAgICogQHNjb3BlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmdNZXNzYWdlc0luY2x1ZGVgIGlzIGEgZGlyZWN0aXZlIHdpdGggdGhlIHB1cnBvc2UgdG8gaW1wb3J0IGV4aXN0aW5nIG5nTWVzc2FnZSB0ZW1wbGF0ZVxuICAgKiBjb2RlIGZyb20gYSByZW1vdGUgdGVtcGxhdGUgYW5kIHBsYWNlIHRoZSBkb3dubG9hZGVkIHRlbXBsYXRlIGNvZGUgaW50byB0aGUgZXhhY3Qgc3BvdFxuICAgKiB0aGF0IHRoZSBuZ01lc3NhZ2VzSW5jbHVkZSBkaXJlY3RpdmUgaXMgcGxhY2VkIHdpdGhpbiB0aGUgbmdNZXNzYWdlcyBjb250YWluZXIuIFRoaXMgYWxsb3dzXG4gICAqIGZvciBhIHNlcmllcyBvZiBwcmUtZGVmaW5lZCBtZXNzYWdlcyB0byBiZSByZXVzZWQgYW5kIGFsc28gYWxsb3dzIGZvciB0aGUgZGV2ZWxvcGVyIHRvXG4gICAqIGRldGVybWluZSB3aGF0IG1lc3NhZ2VzIGFyZSBvdmVycmlkZGVuIGR1ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBuZ01lc3NhZ2VzSW5jbHVkZSBkaXJlY3RpdmUuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBodG1sXG4gICAqIDwhLS0gdXNpbmcgYXR0cmlidXRlIGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxBTlkgbmctbWVzc2FnZXM9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlcy1pbmNsdWRlPVwicmVtb3RlVHBsU3RyaW5nXCI+Li4uPC9BTlk+XG4gICAqIDwvQU5ZPlxuICAgKlxuICAgKiA8IS0tIG9yIGJ5IHVzaW5nIGVsZW1lbnQgZGlyZWN0aXZlcyAtLT5cbiAgICogPG5nLW1lc3NhZ2VzIGZvcj1cImV4cHJlc3Npb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICA8bmctbWVzc2FnZXMtaW5jbHVkZSBzcmM9XCJleHByZXNzaW9uVmFsdWUxXCI+Li4uPC9uZy1tZXNzYWdlcy1pbmNsdWRlPlxuICAgKiA8L25nLW1lc3NhZ2VzPlxuICAgKiBgYGBcbiAgICpcbiAgICoge0BsaW5rIG1vZHVsZTpuZ01lc3NhZ2VzIENsaWNrIGhlcmV9IHRvIGxlYXJuIG1vcmUgYWJvdXQgYG5nTWVzc2FnZXNgIGFuZCBgbmdNZXNzYWdlYC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5nTWVzc2FnZXNJbmNsdWRlfHNyYyBhIHN0cmluZyB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSByZW1vdGUgdGVtcGxhdGUuXG4gICAqL1xuICAuZGlyZWN0aXZlKCduZ01lc3NhZ2VzSW5jbHVkZScsXG4gICAgWyckdGVtcGxhdGVSZXF1ZXN0JywgJyRkb2N1bWVudCcsICckY29tcGlsZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZVJlcXVlc3QsICRkb2N1bWVudCwgJGNvbXBpbGUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIHJlcXVpcmU6ICdeXm5nTWVzc2FnZXMnLCAvLyB3ZSBvbmx5IHJlcXVpcmUgdGhpcyBmb3IgdmFsaWRhdGlvbiBzYWtlXG4gICAgICBsaW5rOiBmdW5jdGlvbigkc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciBzcmMgPSBhdHRycy5uZ01lc3NhZ2VzSW5jbHVkZSB8fCBhdHRycy5zcmM7XG4gICAgICAgICR0ZW1wbGF0ZVJlcXVlc3Qoc3JjKS50aGVuKGZ1bmN0aW9uKGh0bWwpIHtcbiAgICAgICAgICBpZiAoJHNjb3BlLiQkZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoaXNTdHJpbmcoaHRtbCkgJiYgIWh0bWwudHJpbSgpKSB7XG4gICAgICAgICAgICAvLyBFbXB0eSB0ZW1wbGF0ZSAtIG5vdGhpbmcgdG8gY29tcGlsZVxuICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnRXaXRoTWFya2VyKGVsZW1lbnQsIHNyYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vbi1lbXB0eSB0ZW1wbGF0ZSAtIGNvbXBpbGUgYW5kIGxpbmtcbiAgICAgICAgICAgICRjb21waWxlKGh0bWwpKCRzY29wZSwgZnVuY3Rpb24oY29udGVudHMpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5hZnRlcihjb250ZW50cyk7XG4gICAgICAgICAgICAgIHJlcGxhY2VFbGVtZW50V2l0aE1hcmtlcihlbGVtZW50LCBzcmMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gSGVscGVyc1xuICAgIGZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50V2l0aE1hcmtlcihlbGVtZW50LCBzcmMpIHtcbiAgICAgIC8vIEEgY29tbWVudCBtYXJrZXIgaXMgcGxhY2VkIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXNcbiAgICAgIHZhciBjb21tZW50ID0gJGNvbXBpbGUuJCRjcmVhdGVDb21tZW50ID9cbiAgICAgICAgICAkY29tcGlsZS4kJGNyZWF0ZUNvbW1lbnQoJ25nTWVzc2FnZXNJbmNsdWRlJywgc3JjKSA6XG4gICAgICAgICAgJGRvY3VtZW50WzBdLmNyZWF0ZUNvbW1lbnQoJyBuZ01lc3NhZ2VzSW5jbHVkZTogJyArIHNyYyArICcgJyk7XG4gICAgICB2YXIgbWFya2VyID0ganFMaXRlKGNvbW1lbnQpO1xuICAgICAgZWxlbWVudC5hZnRlcihtYXJrZXIpO1xuXG4gICAgICAvLyBEb24ndCBwb2xsdXRlIHRoZSBET00gYW55bW9yZSBieSBrZWVwaW5nIGFuIGVtcHR5IGRpcmVjdGl2ZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfV0pXG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAgICogQG5hbWUgbmdNZXNzYWdlXG4gICAqIEByZXN0cmljdCBBRVxuICAgKiBAc2NvcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGBuZ01lc3NhZ2VgIGlzIGEgZGlyZWN0aXZlIHdpdGggdGhlIHB1cnBvc2UgdG8gc2hvdyBhbmQgaGlkZSBhIHBhcnRpY3VsYXIgbWVzc2FnZS5cbiAgICogRm9yIGBuZ01lc3NhZ2VgIHRvIG9wZXJhdGUsIGEgcGFyZW50IGBuZ01lc3NhZ2VzYCBkaXJlY3RpdmUgb24gYSBwYXJlbnQgRE9NIGVsZW1lbnRcbiAgICogbXVzdCBiZSBzaXR1YXRlZCBzaW5jZSBpdCBkZXRlcm1pbmVzIHdoaWNoIG1lc3NhZ2VzIGFyZSB2aXNpYmxlIGJhc2VkIG9uIHRoZSBzdGF0ZVxuICAgKiBvZiB0aGUgcHJvdmlkZWQga2V5L3ZhbHVlIG1hcCB0aGF0IGBuZ01lc3NhZ2VzYCBsaXN0ZW5zIG9uLlxuICAgKlxuICAgKiBNb3JlIGluZm9ybWF0aW9uIGFib3V0IHVzaW5nIGBuZ01lc3NhZ2VgIGNhbiBiZSBmb3VuZCBpbiB0aGVcbiAgICoge0BsaW5rIG1vZHVsZTpuZ01lc3NhZ2VzIGBuZ01lc3NhZ2VzYCBtb2R1bGUgZG9jdW1lbnRhdGlvbn0uXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBodG1sXG4gICAqIDwhLS0gdXNpbmcgYXR0cmlidXRlIGRpcmVjdGl2ZXMgLS0+XG4gICAqIDxBTlkgbmctbWVzc2FnZXM9XCJleHByZXNzaW9uXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlPVwic3RyaW5nVmFsdWVcIj4uLi48L0FOWT5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2U9XCJzdHJpbmdWYWx1ZTEsIHN0cmluZ1ZhbHVlMiwgLi4uXCI+Li4uPC9BTlk+XG4gICAqIDwvQU5ZPlxuICAgKlxuICAgKiA8IS0tIG9yIGJ5IHVzaW5nIGVsZW1lbnQgZGlyZWN0aXZlcyAtLT5cbiAgICogPG5nLW1lc3NhZ2VzIGZvcj1cImV4cHJlc3Npb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuPVwic3RyaW5nVmFsdWVcIj4uLi48L25nLW1lc3NhZ2U+XG4gICAqICAgPG5nLW1lc3NhZ2Ugd2hlbj1cInN0cmluZ1ZhbHVlMSwgc3RyaW5nVmFsdWUyLCAuLi5cIj4uLi48L25nLW1lc3NhZ2U+XG4gICAqIDwvbmctbWVzc2FnZXM+XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge2V4cHJlc3Npb259IG5nTWVzc2FnZXx3aGVuIGEgc3RyaW5nIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG1lc3NhZ2Uga2V5LlxuICAgKi9cbiAgLmRpcmVjdGl2ZSgnbmdNZXNzYWdlJywgbmdNZXNzYWdlRGlyZWN0aXZlRmFjdG9yeSgpKVxuXG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAgICogQG5hbWUgbmdNZXNzYWdlRXhwXG4gICAqIEByZXN0cmljdCBBRVxuICAgKiBAcHJpb3JpdHkgMVxuICAgKiBAc2NvcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGBuZ01lc3NhZ2VFeHBgIGlzIHRoZSBzYW1lIGFzIHtAbGluayBkaXJlY3RpdmU6bmdNZXNzYWdlIGBuZ01lc3NhZ2VgfSwgYnV0IGluc3RlYWQgb2YgYSBzdGF0aWNcbiAgICogdmFsdWUsIGl0IGFjY2VwdHMgYW4gZXhwcmVzc2lvbiB0byBiZSBldmFsdWF0ZWQgZm9yIHRoZSBtZXNzYWdlIGtleS5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYGh0bWxcbiAgICogPCEtLSB1c2luZyBhdHRyaWJ1dGUgZGlyZWN0aXZlcyAtLT5cbiAgICogPEFOWSBuZy1tZXNzYWdlcz1cImV4cHJlc3Npb25cIj5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2UtZXhwPVwiZXhwcmVzc2lvblZhbHVlXCI+Li4uPC9BTlk+XG4gICAqIDwvQU5ZPlxuICAgKlxuICAgKiA8IS0tIG9yIGJ5IHVzaW5nIGVsZW1lbnQgZGlyZWN0aXZlcyAtLT5cbiAgICogPG5nLW1lc3NhZ2VzIGZvcj1cImV4cHJlc3Npb25cIj5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuLWV4cD1cImV4cHJlc3Npb25WYWx1ZVwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogPC9uZy1tZXNzYWdlcz5cbiAgICogYGBgXG4gICAqXG4gICAqIHtAbGluayBtb2R1bGU6bmdNZXNzYWdlcyBDbGljayBoZXJlfSB0byBsZWFybiBtb3JlIGFib3V0IGBuZ01lc3NhZ2VzYCBhbmQgYG5nTWVzc2FnZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7ZXhwcmVzc2lvbn0gbmdNZXNzYWdlRXhwfHdoZW5FeHAgYW4gZXhwcmVzc2lvbiB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBtZXNzYWdlIGtleS5cbiAgICovXG4gIC5kaXJlY3RpdmUoJ25nTWVzc2FnZUV4cCcsIG5nTWVzc2FnZURpcmVjdGl2ZUZhY3RvcnkoKSk7XG5cbmZ1bmN0aW9uIG5nTWVzc2FnZURpcmVjdGl2ZUZhY3RvcnkoKSB7XG4gIHJldHVybiBbJyRhbmltYXRlJywgZnVuY3Rpb24oJGFuaW1hdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICB0cmFuc2NsdWRlOiAnZWxlbWVudCcsXG4gICAgICBwcmlvcml0eTogMSwgLy8gbXVzdCBydW4gYmVmb3JlIG5nQmluZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0IGlzIHNldCBvbiB0aGUgY29tbWVudFxuICAgICAgdGVybWluYWw6IHRydWUsXG4gICAgICByZXF1aXJlOiAnXl5uZ01lc3NhZ2VzJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNZXNzYWdlc0N0cmwsICR0cmFuc2NsdWRlKSB7XG4gICAgICAgIHZhciBjb21tZW50Tm9kZSA9IGVsZW1lbnRbMF07XG5cbiAgICAgICAgdmFyIHJlY29yZHM7XG4gICAgICAgIHZhciBzdGF0aWNFeHAgPSBhdHRycy5uZ01lc3NhZ2UgfHwgYXR0cnMud2hlbjtcbiAgICAgICAgdmFyIGR5bmFtaWNFeHAgPSBhdHRycy5uZ01lc3NhZ2VFeHAgfHwgYXR0cnMud2hlbkV4cDtcbiAgICAgICAgdmFyIGFzc2lnblJlY29yZHMgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICAgIHJlY29yZHMgPSBpdGVtc1xuICAgICAgICAgICAgICA/IChpc0FycmF5KGl0ZW1zKVxuICAgICAgICAgICAgICAgICAgPyBpdGVtc1xuICAgICAgICAgICAgICAgICAgOiBpdGVtcy5zcGxpdCgvW1xccyxdKy8pKVxuICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgbmdNZXNzYWdlc0N0cmwucmVSZW5kZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZHluYW1pY0V4cCkge1xuICAgICAgICAgIGFzc2lnblJlY29yZHMoc2NvcGUuJGV2YWwoZHluYW1pY0V4cCkpO1xuICAgICAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24oZHluYW1pY0V4cCwgYXNzaWduUmVjb3Jkcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXNzaWduUmVjb3JkcyhzdGF0aWNFeHApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50LCBtZXNzYWdlQ3RybDtcbiAgICAgICAgbmdNZXNzYWdlc0N0cmwucmVnaXN0ZXIoY29tbWVudE5vZGUsIG1lc3NhZ2VDdHJsID0ge1xuICAgICAgICAgIHRlc3Q6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250YWlucyhyZWNvcmRzLCBuYW1lKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dGFjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICR0cmFuc2NsdWRlKGZ1bmN0aW9uKGVsbSwgbmV3U2NvcGUpIHtcbiAgICAgICAgICAgICAgICAkYW5pbWF0ZS5lbnRlcihlbG0sIG51bGwsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gZWxtO1xuXG4gICAgICAgICAgICAgICAgLy8gRWFjaCB0aW1lIHdlIGF0dGFjaCB0aGlzIG5vZGUgdG8gYSBtZXNzYWdlIHdlIGdldCBhIG5ldyBpZCB0aGF0IHdlIGNhbiBtYXRjaFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gd2UgYXJlIGRlc3Ryb3lpbmcgdGhlIG5vZGUgbGF0ZXIuXG4gICAgICAgICAgICAgICAgdmFyICQkYXR0YWNoSWQgPSBjdXJyZW50RWxlbWVudC4kJGF0dGFjaElkID0gbmdNZXNzYWdlc0N0cmwuZ2V0QXR0YWNoSWQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBldmVudCB0aGF0IHRoZSBlbGVtZW50IG9yIGEgcGFyZW50IGVsZW1lbnQgaXMgZGVzdHJveWVkXG4gICAgICAgICAgICAgICAgLy8gYnkgYW5vdGhlciBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSB0aGVuIGl0J3MgdGltZVxuICAgICAgICAgICAgICAgIC8vIHRvIGRlcmVnaXN0ZXIgdGhlIG1lc3NhZ2UgZnJvbSB0aGUgY29udHJvbGxlclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50Lm9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50LiQkYXR0YWNoSWQgPT09ICQkYXR0YWNoSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNZXNzYWdlc0N0cmwuZGVyZWdpc3Rlcihjb21tZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDdHJsLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbmV3U2NvcGUuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXRhY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHZhciBlbG0gPSBjdXJyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAkYW5pbWF0ZS5sZWF2ZShlbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfV07XG5cbiAgZnVuY3Rpb24gY29udGFpbnMoY29sbGVjdGlvbiwga2V5KSB7XG4gICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBpc0FycmF5KGNvbGxlY3Rpb24pXG4gICAgICAgICAgPyBjb2xsZWN0aW9uLmluZGV4T2Yoa2V5KSA+PSAwXG4gICAgICAgICAgOiBjb2xsZWN0aW9uLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgfVxuICB9XG59XG5cblxufSkod2luZG93LCB3aW5kb3cuYW5ndWxhcik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2FuZ3VsYXItbWVzc2FnZXMvYW5ndWxhci1tZXNzYWdlcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImFwaUNoZWNrXCIsXCJhbWRcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanMyXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzXCI6XCJhcGktY2hlY2tcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRXcmFwcGVycyk7XG5cbiAgZnVuY3Rpb24gYWRkV3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRXcmFwcGVyKFt7XG4gICAgICBuYW1lOiBcInRlbXBsYXRlTGFiZWxcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9sYWJlbC5odG1sXCIpLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHsgbmFtZTogXCJ0ZW1wbGF0ZUhhc0Vycm9yXCIsIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9oYXMtZXJyb3IuaHRtbFwiKSB9XSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3JhcHBlcnMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFdyYXBwZXJzKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkV3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RlbXBsYXRlTGFiZWwnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xhYmVsLmh0bWwnKSxcclxuICAgICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbC5vcHRpb25hbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHtuYW1lOiAndGVtcGxhdGVIYXNFcnJvcicsIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hhcy1lcnJvci5odG1sJyl9XHJcbiAgICBdKTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi93cmFwcGVycy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiID5cXHJcXG4gIDxsYWJlbCBmb3I9XFxcInt7aWR9fVxcXCIgbmctY2xhc3M9XFxcImZjLiR2YWxpZCA/ICcnIDogJ2lzLWludmFsaWQtbGFiZWwnXFxcIj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImZvcm1seS13cmFwcGVyLWxhYmVsXFxcIj57e3RvLmxhYmVsfX08L3NwYW4+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtbHktd3JhcHBlci1yZXF1aXJlZFxcXCIgPnt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319PC9zcGFuPlxcclxcbiAgICA8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG4gICAgPGRpdiBuZy1tZXNzYWdlcz1cXFwiZmMuJGVycm9yXFxcIiBcXHJcXG4gICAgbmctaWY9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJHRvdWNoZWRcXFwiIFxcclxcbiAgICBjbGFzcz1cXFwibXktbWVzc2FnZXMgZm9ybS1lcnJvciBpcy12aXNpYmxlXFxcIj5cXHJcXG4gICAgICA8ZGl2IG5nLW1lc3NhZ2U9XFxcInt7OjpuYW1lfX1cXFwiIG5nLXJlcGVhdD1cXFwiKG5hbWUsIG1lc3NhZ2UpIGluIDo6b3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzXFxcIiBjbGFzcz1cXFwiZm9ybS1lcnJvciBpcy12aXNpYmxlXFxcIj57e21lc3NhZ2UoZmMuJHZpZXdWYWx1ZSwgZmMuJG1vZGVsVmFsdWUsIHRoaXMpfX08L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cmFwcGVycy9sYWJlbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIHNtYWxsLXt7dG8uY29sdW1uID4gMCA/IHRvLmNvbHVtbiA6IDEyfX1cXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IHNob3dFcnJvcn1cXFwiPlxcclxcbiAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dyYXBwZXJzL2hhcy1lcnJvci5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgcmVxdWlyZShcIi4vY2hlY2tib3hcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9tdWx0aUNoZWNrYm94XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vaW5wdXRcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9yYWRpb1wiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL3NlbGVjdFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL3RleHRhcmVhXCIpKG5nTW9kdWxlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgcmVxdWlyZSgnLi9jaGVja2JveCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL211bHRpQ2hlY2tib3gnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9pbnB1dCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL3JhZGlvJykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vc2VsZWN0JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vdGV4dGFyZWEnKShuZ01vZHVsZSk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwiY2hlY2tib3hcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jaGVja2JveC5odG1sXCIpLFxuICAgICAgd3JhcHBlcjogW1widGVtcGxhdGVIYXNFcnJvclwiXSxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmdcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvY2hlY2tib3guanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZENoZWNrYm94VHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICdjaGVja2JveCcsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NoZWNrYm94Lmh0bWwnKSxcclxuICAgICAgd3JhcHBlcjogWyd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGFwaUNoZWNrOiBjaGVjayA9PiAoe1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2NoZWNrYm94LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG5cXHQ8bGFiZWwgbmctY2xhc3M9XFxcImZjLiR2YWxpZCA/ICcnIDogJ2lzLWludmFsaWQtbGFiZWwnXFxcIj5cXHJcXG5cXHRcXHQ8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICBjbGFzcz1cXFwiZm9ybWx5LWZpZWxkLWNoZWNrYm94XFxcIlxcclxcblxcdFxcdCAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIiBuZy1jbGFzcz1cXFwiZmMuJHZhbGlkID8gJycgOiAnaXMtaW52YWxpZC1pbnB1dCdcXFwiPlxcclxcblxcdFxcdDxzcGFuPnt7dG8ubGFiZWx9fTwvc3Bhbj5cXHJcXG5cXHRcXHQ8c3Bhbj57e3RvLnJlcXVpcmVkID8gJyonIDogJyd9fTwvc3Bhbj5cXHJcXG5cXHQ8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90eXBlcy9jaGVja2JveC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZENoZWNrYm94VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcIm11bHRpQ2hlY2tib3hcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tdWx0aUNoZWNrYm94Lmh0bWxcIiksXG4gICAgICB3cmFwcGVyOiBbXCJ0ZW1wbGF0ZUxhYmVsXCIsIFwidGVtcGxhdGVIYXNFcnJvclwiXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi9mdW5jdGlvbiBjb250cm9sbGVyKCRzY29wZSkge1xuICAgICAgICB2YXIgdG8gPSAkc2NvcGUudG87XG4gICAgICAgIHZhciBvcHRzID0gJHNjb3BlLm9wdGlvbnM7XG4gICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94ID0ge1xuICAgICAgICAgIGNoZWNrZWQ6IFtdLFxuICAgICAgICAgIGNoYW5nZTogc2V0TW9kZWxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBjaGVja2JveGVzIGNoZWNrIHByb3BlcnR5XG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gJHNjb3BlLm1vZGVsW29wdHMua2V5XTtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0gdG8udmFsdWVQcm9wIHx8IFwidmFsdWVcIjtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0by5vcHRpb25zLCBmdW5jdGlvbiAodiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3guY2hlY2tlZFtpbmRleF0gPSBtb2RlbFZhbHVlLmluZGV4T2Yodlt2YWx1ZVByb3BdKSAhPT0gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0TW9kZWwoKSB7XG4gICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XSA9IFtdO1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkLCBmdW5jdGlvbiAoY2hlY2tib3gsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XS5wdXNoKHRvLm9wdGlvbnNbaW5kZXhdW3RvLnZhbHVlUHJvcCB8fCBcInZhbHVlXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZENoZWNrYm94VHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICdtdWx0aUNoZWNrYm94JyxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXVsdGlDaGVja2JveC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXHJcbiAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgY29udHJvbGxlcjogLyogQG5nSW5qZWN0ICovIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgIGNvbnN0IHRvID0gJHNjb3BlLnRvO1xyXG4gICAgICAgIGNvbnN0IG9wdHMgPSAkc2NvcGUub3B0aW9ucztcclxuICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveCA9IHtcclxuICAgICAgICAgIGNoZWNrZWQ6IFtdLFxyXG4gICAgICAgICAgY2hhbmdlOiBzZXRNb2RlbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNoZWNrYm94ZXMgY2hlY2sgcHJvcGVydHlcclxuICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gJHNjb3BlLm1vZGVsW29wdHMua2V5XTtcclxuICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZVByb3AgPSB0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJztcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0by5vcHRpb25zLCBmdW5jdGlvbih2LCBpbmRleCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkW2luZGV4XSA9IG1vZGVsVmFsdWUuaW5kZXhPZih2W3ZhbHVlUHJvcF0pICE9PSAtMTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TW9kZWwoKSB7XHJcbiAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldID0gW107XHJcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLm11bHRpQ2hlY2tib3guY2hlY2tlZCwgKGNoZWNrYm94LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3gpIHtcclxuICAgICAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldLnB1c2godG8ub3B0aW9uc1tpbmRleF1bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctcmVwZWF0PVxcXCIoa2V5LCBvcHRpb24pIGluIHRvLm9wdGlvbnNcXFwiIGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICA8bGFiZWwgbmctY2xhc3M9XFxcImZjLiR2YWxpZCA/ICcnIDogJ2lzLWludmFsaWQtbGFiZWwnXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcIm11bHRpQ2hlY2tib3guY2hlY2tlZFskaW5kZXhdXFxcIlxcclxcbiAgICAgICAgICAgbmctY2hhbmdlPVxcXCJtdWx0aUNoZWNrYm94LmNoYW5nZSgpXFxcIiBuZy1jbGFzcz1cXFwiZmMuJHZhbGlkID8gJycgOiAnaXMtaW52YWxpZC1pbnB1dCdcXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL211bHRpQ2hlY2tib3guaHRtbFxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRJbnB1dFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZElucHV0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJpbnB1dFwiLFxuICAgICAgdGVtcGxhdGU6IFwiPGlucHV0IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiIG5nLWNsYXNzPVxcXCJmYy4kdmFsaWQgPyAnJyA6ICdpcy1pbnZhbGlkLWlucHV0J1xcXCI+XCIsXG4gICAgICB3cmFwcGVyOiBbXCJ0ZW1wbGF0ZUxhYmVsXCIsIFwidGVtcGxhdGVIYXNFcnJvclwiXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogeyB0eXBlOiBcInRleHRcIiB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvaW5wdXQuanMiLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZElucHV0VHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZElucHV0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICdpbnB1dCcsXHJcbiAgICAgIHRlbXBsYXRlOiAnPGlucHV0IG5nLW1vZGVsPVwibW9kZWxbb3B0aW9ucy5rZXldXCIgbmctY2xhc3M9XCJmYy4kdmFsaWQgPyBcXCdcXCcgOiBcXCdpcy1pbnZhbGlkLWlucHV0XFwnXCI+JyxcclxuICAgICAgd3JhcHBlcjogWyd0ZW1wbGF0ZUxhYmVsJywgJ3RlbXBsYXRlSGFzRXJyb3InIF0sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IHR5cGU6ICd0ZXh0JyB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2lucHV0LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRSYWRpb1R5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZFJhZGlvVHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3JhZGlvLmh0bWxcIiksXG4gICAgICB3cmFwcGVyOiBbXCJ0ZW1wbGF0ZUxhYmVsXCIsIFwidGVtcGxhdGVIYXNFcnJvclwiXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9yYWRpby5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkUmFkaW9UeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3JhZGlvJyxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmFkaW8uaHRtbCcpLFxyXG4gICAgICB3cmFwcGVyOiBbJ3RlbXBsYXRlTGFiZWwnLCAndGVtcGxhdGVIYXNFcnJvciddLFxyXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGFwaUNoZWNrOiBjaGVjayA9PiAoe1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxyXG4gICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXHJcbiAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL3JhZGlvLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctcmVwZWF0PVxcXCIoa2V5LCBvcHRpb24pIGluIHRvLm9wdGlvbnNcXFwiIGNsYXNzPVxcXCJyYWRpb1xcXCIgbmctY2xhc3M9XFxcImZjLiR2YWxpZCA/ICcnIDogJ2lzLWludmFsaWQtbGFiZWwnXFxcIj5cXHJcXG4gIDxsYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIlxcclxcbiAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgICBuZy12YWx1ZT1cXFwib3B0aW9uW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXVxcXCJcXHJcXG4gICAgICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICBuZy1jbGFzcz1cXFwiZmMuJHZhbGlkID8gJycgOiAnaXMtaW52YWxpZC1pbnB1dCdcXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL3JhZGlvLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJzZWxlY3RcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9zZWxlY3QuaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3NlbGVjdC5qcyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFNlbGVjdFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRTZWxlY3RUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3NlbGVjdCcsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NlbGVjdC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGFwaUNoZWNrOiBjaGVjayA9PiAoe1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxyXG4gICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXHJcbiAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvc2VsZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWxlY3RcXHJcXG4gIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICBuZy1vcHRpb25zPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddIGFzIG9wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXSBncm91cCBieSBvcHRpb25bdG8uZ3JvdXBQcm9wIHx8ICdncm91cCddIGZvciBvcHRpb24gaW4gdG8ub3B0aW9uc1xcXCJcXHJcXG4gIG5nLWNsYXNzPVxcXCJmYy4kdmFsaWQgPyAnJyA6ICdpcy1pbnZhbGlkLWlucHV0J1xcXCI+XFxyXFxuPC9zZWxlY3Q+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL3NlbGVjdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkVGV4dGFyZWFUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInRleHRhcmVhXCIsXG4gICAgICB0ZW1wbGF0ZTogXCI8dGV4dGFyZWEgY2xhc3M9XFxcIlxcXCIgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcIiArIFwiIG5nLWNsYXNzPVxcXCJmYy4kdmFsaWQgPyAnJyA6ICdpcy1pbnZhbGlkLWlucHV0J1xcXCI+PC90ZXh0YXJlYT5cIixcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XG4gICAgICAgICAgcm93czogeyBhdHRyaWJ1dGU6IFwicm93c1wiIH0sXG4gICAgICAgICAgY29sczogeyBhdHRyaWJ1dGU6IFwiY29sc1wiIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlci5vcHRpb25hbCxcbiAgICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlci5vcHRpb25hbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy90ZXh0YXJlYS5qcyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRleHRhcmVhVHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XHJcbiAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXHJcbiAgICAgIHRlbXBsYXRlOiAnPHRleHRhcmVhIGNsYXNzPVwiXCIgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIicgKyBcclxuICAgICAgJyBuZy1jbGFzcz1cImZjLiR2YWxpZCA/IFxcJ1xcJyA6IFxcJ2lzLWludmFsaWQtaW5wdXRcXCdcIj48L3RleHRhcmVhPicsXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XHJcbiAgICAgICAgICByb3dzOiB7YXR0cmlidXRlOiAncm93cyd9LFxyXG4gICAgICAgICAgY29sczoge2F0dHJpYnV0ZTogJ2NvbHMnfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIub3B0aW9uYWwsXHJcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXIub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy90ZXh0YXJlYS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iajsgfTtcblxudmFyIGFkZG9ucyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9hZGRvbnNcIikpO1xuXG52YXIgZGVzY3JpcHRpb24gPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vZGVzY3JpcHRpb25cIikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBhZGRvbnMobmdNb2R1bGUpO1xuICBkZXNjcmlwdGlvbihuZ01vZHVsZSk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcbi8vICByZXF1aXJlKCcuL2Rlc2NyaXB0aW9uJykobmdNb2R1bGUpO1xuLy99O1xuLy9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ydW4vaW5kZXguanMiLCJpbXBvcnQgYWRkb25zIGZyb20gJy4vYWRkb25zJztcclxuaW1wb3J0IGRlc2NyaXB0aW9uIGZyb20gJy4vZGVzY3JpcHRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIGFkZG9ucyhuZ01vZHVsZSk7XHJcbiAgZGVzY3JpcHRpb24obmdNb2R1bGUpO1xyXG59O1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcclxuLy8gIHJlcXVpcmUoJy4vZGVzY3JpcHRpb24nKShuZ01vZHVsZSk7XHJcbi8vfTtcclxuLy9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3J1bi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xuXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9hZGRvbnMuaHRtbFwiKTtcbiAgICB2YXIgYWRkb25DaGVja2VyID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIFwiY2xhc3NcIjogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgIHRleHQ6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zdHJpbmcub3B0aW9uYWxcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XG4gICAgdmFyIGFwaSA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxuICAgICAgICBhZGRvblJpZ2h0OiBhZGRvbkNoZWNrZXJcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIucHVzaChmdW5jdGlvbiAodGVtcGxhdGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09IFwiaW5wdXRcIiB8fCAhb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuYWRkb25MZWZ0ICYmICFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvblJpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xuICAgICAgcmV0dXJuIGFkZG9uVGVtcGxhdGUucmVwbGFjZShcIjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlwiLCB0ZW1wbGF0ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcnVuL2FkZG9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRBZGRvbnNNYW5pcHVsYXRvcihmb3JtbHlDb25maWcsIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaykge1xyXG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKCcuL2FkZG9ucy5odG1sJyk7XHJcbiAgICBjb25zdCBhZGRvbkNoZWNrZXIgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICBjbGFzczogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgdGV4dDogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbFxyXG4gICAgfSkuc3RyaWN0Lm9wdGlvbmFsO1xyXG4gICAgY29uc3QgYXBpID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxyXG4gICAgICAgIGFkZG9uUmlnaHQ6IGFkZG9uQ2hlY2tlclxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uKHRlbXBsYXRlLCBvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09ICdpbnB1dCcgfHwgKCFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvbkxlZnQgJiYgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uUmlnaHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xyXG4gICAgICByZXR1cm4gYWRkb25UZW1wbGF0ZS5yZXBsYWNlKCc8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT4nLCB0ZW1wbGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vYWRkb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcInsnJzogdG8uYWRkb25MZWZ0IHx8IHRvLmFkZG9uUmlnaHR9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uTGVmdC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LmNsYXNzXFxcIj48L2k+XFxyXFxuICAgICAgICA8c3BhbiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LnRleHRcXFwiPnt7dG8uYWRkb25MZWZ0LnRleHR9fTwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uUmlnaHQuY2xhc3N9fVxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHQuY2xhc3NcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0LnRleHRcXFwiPnt7dG8uYWRkb25SaWdodC50ZXh0fX08L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ydW4vYWRkb25zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbikgJiYgb3B0aW9ucy50eXBlICE9PSBcInJhZGlvXCIgJiYgb3B0aW9ucy50eXBlICE9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlKVswXSk7XG4gICAgICAgIHZhciBtb2RlbEVscyA9IGFuZ3VsYXIuZWxlbWVudChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLW1vZGVsXVwiKSk7XG4gICAgICAgIGlmIChtb2RlbEVscykge1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcIjxwIGlkPVxcXCJcIiArIHNjb3BlLmlkICsgXCJfZGVzY3JpcHRpb25cXFwiXCIgKyBcImNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIlwiICsgXCJuZy1pZj1cXFwidG8uZGVzY3JpcHRpb25cXFwiPlwiICsgXCJ7e3RvLmRlc2NyaXB0aW9ufX1cIiArIFwiPC9wPlwiKVswXSk7XG4gICAgICAgICAgbW9kZWxFbHMuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiwgc2NvcGUuaWQgKyBcIl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3J1bi9kZXNjcmlwdGlvbi5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uTWFuaXB1bGF0b3IoZm9ybWx5Q29uZmlnKSB7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcclxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uKSAmJlxyXG4gICAgICAgIG9wdGlvbnMudHlwZSAhPT0gJ3JhZGlvJyAmJiBvcHRpb25zLnR5cGUgIT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpWzBdKTtcclxuICAgICAgICB2YXIgbW9kZWxFbHMgPSBhbmd1bGFyLmVsZW1lbnQoZWwucXVlcnlTZWxlY3RvckFsbCgnW25nLW1vZGVsXScpKTtcclxuICAgICAgICBpZiAobW9kZWxFbHMpIHtcclxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcclxuICAgICAgICAgICAgJzxwIGlkPVwiJyArIHNjb3BlLmlkICsgJ19kZXNjcmlwdGlvblwiJyArXHJcbiAgICAgICAgICAgICdjbGFzcz1cImhlbHAtYmxvY2tcIicgK1xyXG4gICAgICAgICAgICAnbmctaWY9XCJ0by5kZXNjcmlwdGlvblwiPicgK1xyXG4gICAgICAgICAgICAne3t0by5kZXNjcmlwdGlvbn19JyArXHJcbiAgICAgICAgICAgICc8L3A+J1xyXG4gICAgICAgICAgKVswXSk7XHJcbiAgICAgICAgICBtb2RlbEVscy5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5Jywgc2NvcGUuaWQgKyAnX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL2Rlc2NyaXB0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==