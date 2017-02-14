// angular-formly-templates-foundation version 1.0.1 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

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
	ngModule.constant("formlyFoundationVersion", ("1.0.1"));
	
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
	  addWrappers.$inject = ["formlyConfigProvider", "formlyFoundationApiCheck"];
	  ngModule.config(addWrappers);
	
	  function addWrappers(formlyConfigProvider, formlyFoundationApiCheck) {
	    var c = formlyFoundationApiCheck;
	    formlyConfigProvider.setWrapper([{
	      name: "templateLabel",
	      template: __webpack_require__(9),
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string,
	          required: c.bool.optional
	        })
	      },
	      apiCheckInstance: c
	    }, { name: "templateHasError", template: __webpack_require__(10) }]);
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"\" >\r\n  <label for=\"{{id}}\" ng-class=\"options.formControl.$invalid && options.formControl.$pristine == false ? 'is-invalid-label' : ''\">\r\n    <span class=\"formly-wrapper-label\">{{to.label}}</span>\r\n    <span class=\"formly-wrapper-required\" >{{to.required ? '*' : ''}}</span>\r\n    <formly-transclude></formly-transclude>\r\n    <div ng-messages=\"fc.$error\" \r\n    ng-if=\"options.formControl.$touched\" \r\n    class=\"my-messages form-error is-visible\">\r\n      <div ng-message=\"{{::name}}\" ng-repeat=\"(name, message) in ::options.validation.messages\" class=\"form-error is-visible\">{{message(fc.$viewValue, fc.$modelValue, this)}}</div>\r\n    </div>\r\n  </label>\r\n</div>\r\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZmQ5MWMzZDE1ZWRmYzc3N2I5ZiIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8zMDkwIiwid2VicGFjazovLy8uL2luZGV4LmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanM/ODMyMiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcz9jMzdlIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vLi4vfi9hbmd1bGFyLW1lc3NhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2FuZ3VsYXItbWVzc2FnZXMvYW5ndWxhci1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcz82MTY2Iiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanM/OGM2OSIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGVja2JveC5qcz81NDk2Iiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzPzZiZjciLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbXVsdGlDaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL2lucHV0LmpzPzUxZWYiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanM/NGIxYSIsIndlYnBhY2s6Ly8vLi90eXBlcy9yYWRpby5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuanM/NTk4ZiIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcz8zNDZkIiwid2VicGFjazovLy8uL3J1bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanM/NjRmZCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy8uL3J1bi9hZGRvbnMuanM/ZWViNCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3J1bi9kZXNjcmlwdGlvbi5qcz9mZGI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQ0FBLFFBQU8sVUFBVSxvQkFBUSxHOzs7Ozs7QUNBekI7O0FDQUEsS0FBTSxlQUFlO0FBQ3JCLEtBQU0sVUFBVSxvQkFBUTtBQUN4QixLQUFNLFdBQVcsUUFBUSxPQUFPLGNBQWMsQ0FBQyxvQkFBUSxJQUFtQixvQkFBUTtBQUNsRixVQUFTLFNBQ1AsNEJBQ0Esb0JBQVEsR0FBYTtHQUNuQixRQUFRO0tBQ04sUUFBUTs7O0FBSWQsVUFBUyxTQUFTLDJCQUEyQjs7QUFFN0MscUJBQVEsR0FBYztBQUN0QixxQkFBUSxJQUFXO0FBQ25CLHFCQUFRLElBQVM7OztBREVqQixRQUFPLFVDQ1EsYTs7Ozs7O0FDbEJmOztBQUVBOztBQ0FBLEtBQUksVUFBVSxvQkFBUTtBQUN0QixLQUFJLENBQUMsUUFBUSxTQUFTO0dBQ3BCLFVBQVUsT0FBTzs7QUFFbkIsUUFBTyxVQUFVLFE7Ozs7OztBQ05qQixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQscUJBQXFCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0FDN0MsT0FBTyxHQUFHO2dCQUNMO1dBQ0wsT0FBTzs7Y0FFSjtTQUNMLE9BQU8iLCJmaWxlIjoiYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLWZvdW5kYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYW5ndWxhclwiLCBcImFuZ3VsYXItZm9ybWx5XCIsIFwiYXBpLWNoZWNrXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nRm9ybWx5VGVtcGxhdGVzRm91bmRhdGlvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcImFuZ3VsYXJcIiksIHJlcXVpcmUoXCJhbmd1bGFyLWZvcm1seVwiKSwgcmVxdWlyZShcImFwaS1jaGVja1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmdGb3JtbHlUZW1wbGF0ZXNGb3VuZGF0aW9uXCJdID0gZmFjdG9yeShyb290W1wiYW5ndWxhclwiXSwgcm9vdFtcIm5nRm9ybWx5XCJdLCByb290W1wiYXBpQ2hlY2tcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZmQ5MWMzZDE1ZWRmYzc3N2I5ZiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2luZGV4LmNvbW1vblwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbmRleC5jb21tb24nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBuZ01vZHVsZU5hbWUgPSBcImZvcm1seUZvdW5kYXRpb25cIjtcbnZhciBhbmd1bGFyID0gcmVxdWlyZShcIi4vYW5ndWxhci1maXhcIik7XG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuZ01vZHVsZU5hbWUsIFtyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhbmd1bGFyLW1lc3NhZ2VzXCIpXSk7XG5uZ01vZHVsZS5jb25zdGFudChcImZvcm1seUZvdW5kYXRpb25BcGlDaGVja1wiLCByZXF1aXJlKFwiYXBpLWNoZWNrXCIpKHtcbiAgb3V0cHV0OiB7XG4gICAgcHJlZml4OiBcImFuZ3VsYXItZm9ybWx5LWZvdW5kYXRpb25cIlxuICB9XG59KSk7XG5uZ01vZHVsZS5jb25zdGFudChcImZvcm1seUZvdW5kYXRpb25WZXJzaW9uXCIsIFZFUlNJT04pO1xuXG5yZXF1aXJlKFwiLi93cmFwcGVyc1wiKShuZ01vZHVsZSk7XG5yZXF1aXJlKFwiLi90eXBlc1wiKShuZ01vZHVsZSk7XG5yZXF1aXJlKFwiLi9ydW5cIikobmdNb2R1bGUpO1xuLy8gcmVxdWlyZSgnY3NzIS4vc3R5bGUuY3NzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmdNb2R1bGVOYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmNvbW1vbi5qcyIsImNvbnN0IG5nTW9kdWxlTmFtZSA9ICdmb3JtbHlGb3VuZGF0aW9uJztcclxuY29uc3QgYW5ndWxhciA9IHJlcXVpcmUoJy4vYW5ndWxhci1maXgnKTtcclxuY29uc3QgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuZ01vZHVsZU5hbWUsIFtyZXF1aXJlKCdhbmd1bGFyLWZvcm1seScpICxyZXF1aXJlKCdhbmd1bGFyLW1lc3NhZ2VzJykgLF0pO1xyXG5uZ01vZHVsZS5jb25zdGFudChcclxuICAnZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrJyxcclxuICByZXF1aXJlKCdhcGktY2hlY2snKSh7XHJcbiAgICBvdXRwdXQ6IHtcclxuICAgICAgcHJlZml4OiAnYW5ndWxhci1mb3JtbHktZm91bmRhdGlvbidcclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG5uZ01vZHVsZS5jb25zdGFudCgnZm9ybWx5Rm91bmRhdGlvblZlcnNpb24nLCBWRVJTSU9OKTtcclxuXHJcbnJlcXVpcmUoJy4vd3JhcHBlcnMnKShuZ01vZHVsZSk7XHJcbnJlcXVpcmUoJy4vdHlwZXMnKShuZ01vZHVsZSk7XHJcbnJlcXVpcmUoJy4vcnVuJykobmdNb2R1bGUpO1xyXG4vLyByZXF1aXJlKCdjc3MhLi9zdHlsZS5jc3MnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlTmFtZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL2luZGV4LmNvbW1vbi5qcyIsIi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxuLy8gc28gd2UgZ2V0IGl0IGZyb20gd2luZG93IGluIHRoaXMgY2FzZS5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyXCIpO1xuaWYgKCFhbmd1bGFyLnZlcnNpb24pIHtcbiAgYW5ndWxhciA9IHdpbmRvdy5hbmd1bGFyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FuZ3VsYXItZml4L2luZGV4LmpzIiwiLy8gc29tZSB2ZXJzaW9ucyBvZiBhbmd1bGFyIGRvbid0IGV4cG9ydCB0aGUgYW5ndWxhciBtb2R1bGUgcHJvcGVybHksXHJcbi8vIHNvIHdlIGdldCBpdCBmcm9tIHdpbmRvdyBpbiB0aGlzIGNhc2UuXHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG5pZiAoIWFuZ3VsYXIudmVyc2lvbikge1xyXG4gIGFuZ3VsYXIgPSB3aW5kb3cuYW5ndWxhcjtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJuZ0Zvcm1seVwiLFwiYW1kXCI6XCJhbmd1bGFyLWZvcm1seVwiLFwiY29tbW9uanMyXCI6XCJhbmd1bGFyLWZvcm1seVwiLFwiY29tbW9uanNcIjpcImFuZ3VsYXItZm9ybWx5XCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vYW5ndWxhci1tZXNzYWdlcycpO1xubW9kdWxlLmV4cG9ydHMgPSAnbmdNZXNzYWdlcyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2FuZ3VsYXItbWVzc2FnZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFySlMgdjEuNi4xXG4gKiAoYykgMjAxMC0yMDE2IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuICogTGljZW5zZTogTUlUXG4gKi9cbihmdW5jdGlvbih3aW5kb3csIGFuZ3VsYXIpIHsndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoO1xudmFyIGlzQXJyYXk7XG52YXIgaXNTdHJpbmc7XG52YXIganFMaXRlO1xuXG4vKipcbiAqIEBuZ2RvYyBtb2R1bGVcbiAqIEBuYW1lIG5nTWVzc2FnZXNcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFRoZSBgbmdNZXNzYWdlc2AgbW9kdWxlIHByb3ZpZGVzIGVuaGFuY2VkIHN1cHBvcnQgZm9yIGRpc3BsYXlpbmcgbWVzc2FnZXMgd2l0aGluIHRlbXBsYXRlc1xuICogKHR5cGljYWxseSB3aXRoaW4gZm9ybXMgb3Igd2hlbiByZW5kZXJpbmcgbWVzc2FnZSBvYmplY3RzIHRoYXQgcmV0dXJuIGtleS92YWx1ZSBkYXRhKS5cbiAqIEluc3RlYWQgb2YgcmVseWluZyBvbiBKYXZhU2NyaXB0IGNvZGUgYW5kL29yIGNvbXBsZXggbmctaWYgc3RhdGVtZW50cyB3aXRoaW4geW91ciBmb3JtIHRlbXBsYXRlIHRvXG4gKiBzaG93IGFuZCBoaWRlIGVycm9yIG1lc3NhZ2VzIHNwZWNpZmljIHRvIHRoZSBzdGF0ZSBvZiBhbiBpbnB1dCBmaWVsZCwgdGhlIGBuZ01lc3NhZ2VzYCBhbmRcbiAqIGBuZ01lc3NhZ2VgIGRpcmVjdGl2ZXMgYXJlIGRlc2lnbmVkIHRvIGhhbmRsZSB0aGUgY29tcGxleGl0eSwgaW5oZXJpdGFuY2UgYW5kIHByaW9yaXR5XG4gKiBzZXF1ZW5jaW5nIGJhc2VkIG9uIHRoZSBvcmRlciBvZiBob3cgdGhlIG1lc3NhZ2VzIGFyZSBkZWZpbmVkIGluIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiBDdXJyZW50bHksIHRoZSBuZ01lc3NhZ2VzIG1vZHVsZSBvbmx5IGNvbnRhaW5zIHRoZSBjb2RlIGZvciB0aGUgYG5nTWVzc2FnZXNgLCBgbmdNZXNzYWdlc0luY2x1ZGVgXG4gKiBgbmdNZXNzYWdlYCBhbmQgYG5nTWVzc2FnZUV4cGAgZGlyZWN0aXZlcy5cbiAqXG4gKiAjIFVzYWdlXG4gKiBUaGUgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZSBhbGxvd3Mga2V5cyBpbiBhIGtleS92YWx1ZSBjb2xsZWN0aW9uIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCBhIGNoaWxkIGVsZW1lbnRcbiAqIChvciAnbWVzc2FnZScpIHRoYXQgd2lsbCBzaG93IG9yIGhpZGUgYmFzZWQgb24gdGhlIHRydXRoaW5lc3Mgb2YgdGhhdCBrZXkncyB2YWx1ZSBpbiB0aGUgY29sbGVjdGlvbi4gQSBjb21tb24gdXNlXG4gKiBjYXNlIGZvciBgbmdNZXNzYWdlc2AgaXMgdG8gZGlzcGxheSBlcnJvciBtZXNzYWdlcyBmb3IgaW5wdXRzIHVzaW5nIHRoZSBgJGVycm9yYCBvYmplY3QgZXhwb3NlZCBieSB0aGVcbiAqIHtAbGluayBuZ01vZGVsIG5nTW9kZWx9IGRpcmVjdGl2ZS5cbiAqXG4gKiBUaGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGBuZ01lc3NhZ2VzYCBkaXJlY3RpdmUgYXJlIG1hdGNoZWQgdG8gdGhlIGNvbGxlY3Rpb24ga2V5cyBieSBhIGBuZ01lc3NhZ2VgIG9yXG4gKiBgbmdNZXNzYWdlRXhwYCBkaXJlY3RpdmUuIFRoZSB2YWx1ZSBvZiB0aGVzZSBhdHRyaWJ1dGVzIG11c3QgbWF0Y2ggYSBrZXkgaW4gdGhlIGNvbGxlY3Rpb24gdGhhdCBpcyBwcm92aWRlZCBieVxuICogdGhlIGBuZ01lc3NhZ2VzYCBkaXJlY3RpdmUuXG4gKlxuICogQ29uc2lkZXIgdGhlIGZvbGxvd2luZyBleGFtcGxlLCB3aGljaCBpbGx1c3RyYXRlcyBhIHR5cGljYWwgdXNlIGNhc2Ugb2YgYG5nTWVzc2FnZXNgLiBXaXRoaW4gdGhlIGZvcm0gYG15Rm9ybWAgd2VcbiAqIGhhdmUgYSB0ZXh0IGlucHV0IG5hbWVkIGBteUZpZWxkYCB3aGljaCBpcyBib3VuZCB0byB0aGUgc2NvcGUgdmFyaWFibGUgYGZpZWxkYCB1c2luZyB0aGUge0BsaW5rIG5nTW9kZWwgbmdNb2RlbH1cbiAqIGRpcmVjdGl2ZS5cbiAqXG4gKiBUaGUgYG15RmllbGRgIGZpZWxkIGlzIGEgcmVxdWlyZWQgaW5wdXQgb2YgdHlwZSBgZW1haWxgIHdpdGggYSBtYXhpbXVtIGxlbmd0aCBvZiAxNSBjaGFyYWN0ZXJzLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxmb3JtIG5hbWU9XCJteUZvcm1cIj5cbiAqICAgPGxhYmVsPlxuICogICAgIEVudGVyIHRleHQ6XG4gKiAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5nLW1vZGVsPVwiZmllbGRcIiBuYW1lPVwibXlGaWVsZFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjE1XCIgLz5cbiAqICAgPC9sYWJlbD5cbiAqICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUZpZWxkLiRlcnJvclwiIHJvbGU9XCJhbGVydFwiPlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+UGxlYXNlIGVudGVyIGEgdmFsdWUgZm9yIHRoaXMgZmllbGQuPC9kaXY+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwiZW1haWxcIj5UaGlzIGZpZWxkIG11c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLjwvZGl2PlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cIm1heGxlbmd0aFwiPlRoaXMgZmllbGQgY2FuIGJlIGF0IG1vc3QgMTUgY2hhcmFjdGVycyBsb25nLjwvZGl2PlxuICogICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqIGBgYFxuICpcbiAqIEluIG9yZGVyIHRvIHNob3cgZXJyb3IgbWVzc2FnZXMgY29ycmVzcG9uZGluZyB0byBgbXlGaWVsZGAgd2UgZmlyc3QgY3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBhbiBgbmdNZXNzYWdlc2AgYXR0cmlidXRlXG4gKiBzZXQgdG8gdGhlIGAkZXJyb3JgIG9iamVjdCBvd25lZCBieSB0aGUgYG15RmllbGRgIGlucHV0IGluIG91ciBgbXlGb3JtYCBmb3JtLlxuICpcbiAqIFdpdGhpbiB0aGlzIGVsZW1lbnQgd2UgdGhlbiBjcmVhdGUgc2VwYXJhdGUgZWxlbWVudHMgZm9yIGVhY2ggb2YgdGhlIHBvc3NpYmxlIGVycm9ycyB0aGF0IGBteUZpZWxkYCBjb3VsZCBoYXZlLlxuICogVGhlIGBuZ01lc3NhZ2VgIGF0dHJpYnV0ZSBpcyB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggZWxlbWVudChzKSB3aWxsIGFwcGVhciBmb3Igd2hpY2ggZXJyb3IgLSBmb3IgZXhhbXBsZSxcbiAqIHNldHRpbmcgYG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiYCBzcGVjaWZpZXMgdGhhdCB0aGlzIHBhcnRpY3VsYXIgZWxlbWVudCBzaG91bGQgYmUgZGlzcGxheWVkIHdoZW4gdGhlcmVcbiAqIGlzIG5vIHZhbHVlIHByZXNlbnQgZm9yIHRoZSByZXF1aXJlZCBmaWVsZCBgbXlGaWVsZGAgKGJlY2F1c2UgdGhlIGtleSBgcmVxdWlyZWRgIHdpbGwgYmUgYHRydWVgIGluIHRoZSBvYmplY3RcbiAqIGBteUZvcm0ubXlGaWVsZC4kZXJyb3JgKS5cbiAqXG4gKiAjIyMgTWVzc2FnZSBvcmRlclxuICpcbiAqIEJ5IGRlZmF1bHQsIGBuZ01lc3NhZ2VzYCB3aWxsIG9ubHkgZGlzcGxheSBvbmUgbWVzc2FnZSBmb3IgYSBwYXJ0aWN1bGFyIGtleS92YWx1ZSBjb2xsZWN0aW9uIGF0IGFueSB0aW1lLiBJZiBtb3JlXG4gKiB0aGFuIG9uZSBtZXNzYWdlIChvciBlcnJvcikga2V5IGlzIGN1cnJlbnRseSB0cnVlLCB0aGVuIHdoaWNoIG1lc3NhZ2UgaXMgc2hvd24gaXMgZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXIgb2YgbWVzc2FnZXNcbiAqIGluIHRoZSBIVE1MIHRlbXBsYXRlIGNvZGUgKG1lc3NhZ2VzIGRlY2xhcmVkIGZpcnN0IGFyZSBwcmlvcml0aXNlZCkuIFRoaXMgbWVjaGFuaXNtIG1lYW5zIHRoZSBkZXZlbG9wZXIgZG9lcyBub3QgaGF2ZVxuICogdG8gcHJpb3JpdGl6ZSBtZXNzYWdlcyB1c2luZyBjdXN0b20gSmF2YVNjcmlwdCBjb2RlLlxuICpcbiAqIEdpdmVuIHRoZSBmb2xsb3dpbmcgZXJyb3Igb2JqZWN0IGZvciBvdXIgZXhhbXBsZSAod2hpY2ggaW5mb3JtcyB1cyB0aGF0IHRoZSBmaWVsZCBgbXlGaWVsZGAgY3VycmVudGx5IGhhcyBib3RoIHRoZVxuICogYHJlcXVpcmVkYCBhbmQgYGVtYWlsYCBlcnJvcnMpOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIDwhLS0ga2VlcCBpbiBtaW5kIHRoYXQgbmdNb2RlbCBhdXRvbWF0aWNhbGx5IHNldHMgdGhlc2UgZXJyb3IgZmxhZ3MgLS0+XG4gKiBteUZpZWxkLiRlcnJvciA9IHsgcmVxdWlyZWQgOiB0cnVlLCBlbWFpbDogdHJ1ZSwgbWF4bGVuZ3RoOiBmYWxzZSB9O1xuICogYGBgXG4gKiBUaGUgYHJlcXVpcmVkYCBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyIHNpbmNlIGl0IGFwcGVhcnMgYmVmb3JlIHRoZSBgZW1haWxgIG1lc3NhZ2UgaW4gdGhlIERPTS5cbiAqIE9uY2UgdGhlIHVzZXIgdHlwZXMgYSBzaW5nbGUgY2hhcmFjdGVyLCB0aGUgYHJlcXVpcmVkYCBtZXNzYWdlIHdpbGwgZGlzYXBwZWFyIChzaW5jZSB0aGUgZmllbGQgbm93IGhhcyBhIHZhbHVlKVxuICogYnV0IHRoZSBgZW1haWxgIG1lc3NhZ2Ugd2lsbCBiZSB2aXNpYmxlIGJlY2F1c2UgaXQgaXMgc3RpbGwgYXBwbGljYWJsZS5cbiAqXG4gKiAjIyMgRGlzcGxheWluZyBtdWx0aXBsZSBtZXNzYWdlcyBhdCB0aGUgc2FtZSB0aW1lXG4gKlxuICogV2hpbGUgYG5nTWVzc2FnZXNgIHdpbGwgYnkgZGVmYXVsdCBvbmx5IGRpc3BsYXkgb25lIGVycm9yIGVsZW1lbnQgYXQgYSB0aW1lLCB0aGUgYG5nLW1lc3NhZ2VzLW11bHRpcGxlYCBhdHRyaWJ1dGUgY2FuXG4gKiBiZSBhcHBsaWVkIHRvIHRoZSBgbmdNZXNzYWdlc2AgY29udGFpbmVyIGVsZW1lbnQgdG8gY2F1c2UgaXQgdG8gZGlzcGxheSBhbGwgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlcyBhdCBvbmNlOlxuICpcbiAqIGBgYGh0bWxcbiAqIDwhLS0gYXR0cmlidXRlLXN0eWxlIHVzYWdlIC0tPlxuICogPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teUZpZWxkLiRlcnJvclwiIG5nLW1lc3NhZ2VzLW11bHRpcGxlPi4uLjwvZGl2PlxuICpcbiAqIDwhLS0gZWxlbWVudC1zdHlsZSB1c2FnZSAtLT5cbiAqIDxuZy1tZXNzYWdlcyBmb3I9XCJteUZvcm0ubXlGaWVsZC4kZXJyb3JcIiBtdWx0aXBsZT4uLi48L25nLW1lc3NhZ2VzPlxuICogYGBgXG4gKlxuICogIyMgUmV1c2luZyBhbmQgT3ZlcnJpZGluZyBNZXNzYWdlc1xuICogSW4gYWRkaXRpb24gdG8gcHJpb3JpdGl6YXRpb24sIG5nTWVzc2FnZXMgYWxzbyBhbGxvd3MgZm9yIGluY2x1ZGluZyBtZXNzYWdlcyBmcm9tIGEgcmVtb3RlIG9yIGFuIGlubGluZVxuICogdGVtcGxhdGUuIFRoaXMgYWxsb3dzIGZvciBnZW5lcmljIGNvbGxlY3Rpb24gb2YgbWVzc2FnZXMgdG8gYmUgcmV1c2VkIGFjcm9zcyBtdWx0aXBsZSBwYXJ0cyBvZiBhblxuICogYXBwbGljYXRpb24uXG4gKlxuICogYGBgaHRtbFxuICogPHNjcmlwdCB0eXBlPVwidGV4dC9uZy10ZW1wbGF0ZVwiIGlkPVwiZXJyb3ItbWVzc2FnZXNcIj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cIm1pbmxlbmd0aFwiPlRoaXMgZmllbGQgaXMgdG9vIHNob3J0PC9kaXY+XG4gKiA8L3NjcmlwdD5cbiAqXG4gKiA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RmllbGQuJGVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgIDxkaXYgbmctbWVzc2FnZXMtaW5jbHVkZT1cImVycm9yLW1lc3NhZ2VzXCI+PC9kaXY+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEhvd2V2ZXIsIGluY2x1ZGluZyBnZW5lcmljIG1lc3NhZ2VzIG1heSBub3QgYmUgdXNlZnVsIGVub3VnaCB0byBtYXRjaCBhbGwgaW5wdXQgZmllbGRzLCB0aGVyZWZvcmUsXG4gKiBgbmdNZXNzYWdlc2AgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gb3ZlcnJpZGUgbWVzc2FnZXMgZGVmaW5lZCBpbiB0aGUgcmVtb3RlIHRlbXBsYXRlIGJ5IHJlZGVmaW5pbmdcbiAqIHRoZW0gd2l0aGluIHRoZSBkaXJlY3RpdmUgY29udGFpbmVyLlxuICpcbiAqIGBgYGh0bWxcbiAqIDwhLS0gYSBnZW5lcmljIHRlbXBsYXRlIG9mIGVycm9yIG1lc3NhZ2VzIGtub3duIGFzIFwibXktY3VzdG9tLW1lc3NhZ2VzXCIgLS0+XG4gKiA8c2NyaXB0IHR5cGU9XCJ0ZXh0L25nLXRlbXBsYXRlXCIgaWQ9XCJteS1jdXN0b20tbWVzc2FnZXNcIj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XG4gKiAgIDxkaXYgbmctbWVzc2FnZT1cIm1pbmxlbmd0aFwiPlRoaXMgZmllbGQgaXMgdG9vIHNob3J0PC9kaXY+XG4gKiA8L3NjcmlwdD5cbiAqXG4gKiA8Zm9ybSBuYW1lPVwibXlGb3JtXCI+XG4gKiAgIDxsYWJlbD5cbiAqICAgICBFbWFpbCBhZGRyZXNzXG4gKiAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiXG4gKiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICogICAgICAgICAgICBuYW1lPVwibXlFbWFpbFwiXG4gKiAgICAgICAgICAgIG5nLW1vZGVsPVwiZW1haWxcIlxuICogICAgICAgICAgICBtaW5sZW5ndGg9XCI1XCJcbiAqICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAqICAgPC9sYWJlbD5cbiAqICAgPCEtLSBhbnkgbmctbWVzc2FnZSBlbGVtZW50cyB0aGF0IGFwcGVhciBCRUZPUkUgdGhlIG5nLW1lc3NhZ2VzLWluY2x1ZGUgd2lsbFxuICogICAgICAgIG92ZXJyaWRlIHRoZSBtZXNzYWdlcyBwcmVzZW50IGluIHRoZSBuZy1tZXNzYWdlcy1pbmNsdWRlIHRlbXBsYXRlIC0tPlxuICogICA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RW1haWwuJGVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgICAgPCEtLSB0aGlzIHJlcXVpcmVkIG1lc3NhZ2UgaGFzIG92ZXJyaWRkZW4gdGhlIHRlbXBsYXRlIG1lc3NhZ2UgLS0+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5Zb3UgZGlkIG5vdCBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3M8L2Rpdj5cbiAqXG4gKiAgICAgPCEtLSB0aGlzIGlzIGEgYnJhbmQgbmV3IG1lc3NhZ2UgYW5kIHdpbGwgYXBwZWFyIGxhc3QgaW4gdGhlIHByaW9yaXRpemF0aW9uIC0tPlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cImVtYWlsXCI+WW91ciBlbWFpbCBhZGRyZXNzIGlzIGludmFsaWQ8L2Rpdj5cbiAqXG4gKiAgICAgPCEtLSBhbmQgaGVyZSBhcmUgdGhlIGdlbmVyaWMgZXJyb3IgbWVzc2FnZXMgLS0+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlcy1pbmNsdWRlPVwibXktY3VzdG9tLW1lc3NhZ2VzXCI+PC9kaXY+XG4gKiAgIDwvZGl2PlxuICogPC9mb3JtPlxuICogYGBgXG4gKlxuICogSW4gdGhlIGV4YW1wbGUgSFRNTCBjb2RlIGFib3ZlIHRoZSBtZXNzYWdlIHRoYXQgaXMgc2V0IG9uIHJlcXVpcmVkIHdpbGwgb3ZlcnJpZGUgdGhlIGNvcnJlc3BvbmRpbmdcbiAqIHJlcXVpcmVkIG1lc3NhZ2UgZGVmaW5lZCB3aXRoaW4gdGhlIHJlbW90ZSB0ZW1wbGF0ZS4gVGhlcmVmb3JlLCB3aXRoIHBhcnRpY3VsYXIgaW5wdXQgZmllbGRzIChzdWNoXG4gKiBlbWFpbCBhZGRyZXNzZXMsIGRhdGUgZmllbGRzLCBhdXRvY29tcGxldGUgaW5wdXRzLCBldGMuLi4pLCBzcGVjaWFsaXplZCBlcnJvciBtZXNzYWdlcyBjYW4gYmUgYXBwbGllZFxuICogd2hpbGUgbW9yZSBnZW5lcmljIG1lc3NhZ2VzIGNhbiBiZSB1c2VkIHRvIGhhbmRsZSBvdGhlciwgbW9yZSBnZW5lcmFsIGlucHV0IGVycm9ycy5cbiAqXG4gKiAjIyBEeW5hbWljIE1lc3NhZ2luZ1xuICogbmdNZXNzYWdlcyBhbHNvIHN1cHBvcnRzIHVzaW5nIGV4cHJlc3Npb25zIHRvIGR5bmFtaWNhbGx5IGNoYW5nZSBrZXkgdmFsdWVzLiBVc2luZyBhcnJheXMgYW5kXG4gKiByZXBlYXRlcnMgdG8gbGlzdCBtZXNzYWdlcyBpcyBhbHNvIHN1cHBvcnRlZC4gVGhpcyBtZWFucyB0aGF0IHRoZSBjb2RlIGJlbG93IHdpbGwgYmUgYWJsZSB0b1xuICogZnVsbHkgYWRhcHQgaXRzZWxmIGFuZCBkaXNwbGF5IHRoZSBhcHByb3ByaWF0ZSBtZXNzYWdlIHdoZW4gYW55IG9mIHRoZSBleHByZXNzaW9uIGRhdGEgY2hhbmdlczpcbiAqXG4gKiBgYGBodG1sXG4gKiA8Zm9ybSBuYW1lPVwibXlGb3JtXCI+XG4gKiAgIDxsYWJlbD5cbiAqICAgICBFbWFpbCBhZGRyZXNzXG4gKiAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiXG4gKiAgICAgICAgICAgIG5hbWU9XCJteUVtYWlsXCJcbiAqICAgICAgICAgICAgbmctbW9kZWw9XCJlbWFpbFwiXG4gKiAgICAgICAgICAgIG1pbmxlbmd0aD1cIjVcIlxuICogICAgICAgICAgICByZXF1aXJlZCAvPlxuICogICA8L2xhYmVsPlxuICogICA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RW1haWwuJGVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5Zb3UgZGlkIG5vdCBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3M8L2Rpdj5cbiAqICAgICA8ZGl2IG5nLXJlcGVhdD1cImVycm9yTWVzc2FnZSBpbiBlcnJvck1lc3NhZ2VzXCI+XG4gKiAgICAgICA8IS0tIHVzZSBuZy1tZXNzYWdlLWV4cCBmb3IgYSBtZXNzYWdlIHdob3NlIGtleSBpcyBnaXZlbiBieSBhbiBleHByZXNzaW9uIC0tPlxuICogICAgICAgPGRpdiBuZy1tZXNzYWdlLWV4cD1cImVycm9yTWVzc2FnZS50eXBlXCI+e3sgZXJyb3JNZXNzYWdlLnRleHQgfX08L2Rpdj5cbiAqICAgICA8L2Rpdj5cbiAqICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKiBgYGBcbiAqXG4gKiBUaGUgYGVycm9yTWVzc2FnZS50eXBlYCBleHByZXNzaW9uIGNhbiBiZSBhIHN0cmluZyB2YWx1ZSBvciBpdCBjYW4gYmUgYW4gYXJyYXkgc29cbiAqIHRoYXQgbXVsdGlwbGUgZXJyb3JzIGNhbiBiZSBhc3NvY2lhdGVkIHdpdGggYSBzaW5nbGUgZXJyb3IgbWVzc2FnZTpcbiAqXG4gKiBgYGBodG1sXG4gKiAgIDxsYWJlbD5cbiAqICAgICBFbWFpbCBhZGRyZXNzXG4gKiAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiXG4gKiAgICAgICAgICAgIG5nLW1vZGVsPVwiZGF0YS5lbWFpbFwiXG4gKiAgICAgICAgICAgIG5hbWU9XCJteUVtYWlsXCJcbiAqICAgICAgICAgICAgbmctbWlubGVuZ3RoPVwiNVwiXG4gKiAgICAgICAgICAgIG5nLW1heGxlbmd0aD1cIjEwMFwiXG4gKiAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gKiAgIDwvbGFiZWw+XG4gKiAgIDxkaXYgbmctbWVzc2FnZXM9XCJteUZvcm0ubXlFbWFpbC4kZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgICA8ZGl2IG5nLW1lc3NhZ2UtZXhwPVwiJ3JlcXVpcmVkJ1wiPllvdSBkaWQgbm90IGVudGVyIHlvdXIgZW1haWwgYWRkcmVzczwvZGl2PlxuICogICAgIDxkaXYgbmctbWVzc2FnZS1leHA9XCJbJ21pbmxlbmd0aCcsICdtYXhsZW5ndGgnXVwiPlxuICogICAgICAgWW91ciBlbWFpbCBtdXN0IGJlIGJldHdlZW4gNSBhbmQgMTAwIGNoYXJhY3RlcnMgbG9uZ1xuICogICAgIDwvZGl2PlxuICogICA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEZlZWwgZnJlZSB0byB1c2Ugb3RoZXIgc3RydWN0dXJhbCBkaXJlY3RpdmVzIHN1Y2ggYXMgbmctaWYgYW5kIG5nLXN3aXRjaCB0byBmdXJ0aGVyIGNvbnRyb2xcbiAqIHdoYXQgbWVzc2FnZXMgYXJlIGFjdGl2ZSBhbmQgd2hlbi4gQmUgY2FyZWZ1bCwgaWYgeW91IHBsYWNlIG5nLW1lc3NhZ2Ugb24gdGhlIHNhbWUgZWxlbWVudFxuICogYXMgdGhlc2Ugc3RydWN0dXJhbCBkaXJlY3RpdmVzLCBBbmd1bGFyIG1heSBub3QgYmUgYWJsZSB0byBkZXRlcm1pbmUgaWYgYSBtZXNzYWdlIGlzIGFjdGl2ZVxuICogb3Igbm90LiBUaGVyZWZvcmUgaXQgaXMgYmVzdCB0byBwbGFjZSB0aGUgbmctbWVzc2FnZSBvbiBhIGNoaWxkIGVsZW1lbnQgb2YgdGhlIHN0cnVjdHVyYWxcbiAqIGRpcmVjdGl2ZS5cbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlGb3JtLm15RW1haWwuJGVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gKiAgIDxkaXYgbmctaWY9XCJzaG93UmVxdWlyZWRFcnJvclwiPlxuICogICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+UGxlYXNlIGVudGVyIHNvbWV0aGluZzwvZGl2PlxuICogICA8L2Rpdj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogIyMgQW5pbWF0aW9uc1xuICogSWYgdGhlIGBuZ0FuaW1hdGVgIG1vZHVsZSBpcyBhY3RpdmUgd2l0aGluIHRoZSBhcHBsaWNhdGlvbiB0aGVuIHRoZSBgbmdNZXNzYWdlc2AsIGBuZ01lc3NhZ2VgIGFuZFxuICogYG5nTWVzc2FnZUV4cGAgZGlyZWN0aXZlcyB3aWxsIHRyaWdnZXIgYW5pbWF0aW9ucyB3aGVuZXZlciBhbnkgbWVzc2FnZXMgYXJlIGFkZGVkIGFuZCByZW1vdmVkIGZyb21cbiAqIHRoZSBET00gYnkgdGhlIGBuZ01lc3NhZ2VzYCBkaXJlY3RpdmUuXG4gKlxuICogV2hlbmV2ZXIgdGhlIGBuZ01lc3NhZ2VzYCBkaXJlY3RpdmUgY29udGFpbnMgb25lIG9yIG1vcmUgdmlzaWJsZSBtZXNzYWdlcyB0aGVuIHRoZSBgLm5nLWFjdGl2ZWAgQ1NTXG4gKiBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50LiBUaGUgYC5uZy1pbmFjdGl2ZWAgQ1NTIGNsYXNzIHdpbGwgYmUgYXBwbGllZCB3aGVuIHRoZXJlIGFyZSBub1xuICogbWVzc2FnZXMgcHJlc2VudC4gVGhlcmVmb3JlLCBDU1MgdHJhbnNpdGlvbnMgYW5kIGtleWZyYW1lcyBhcyB3ZWxsIGFzIEphdmFTY3JpcHQgYW5pbWF0aW9ucyBjYW5cbiAqIGhvb2sgaW50byB0aGUgYW5pbWF0aW9ucyB3aGVuZXZlciB0aGVzZSBjbGFzc2VzIGFyZSBhZGRlZC9yZW1vdmVkLlxuICpcbiAqIExldCdzIHNheSB0aGF0IG91ciBIVE1MIGNvZGUgZm9yIG91ciBtZXNzYWdlcyBjb250YWluZXIgbG9va3MgbGlrZSBzbzpcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IG5nLW1lc3NhZ2VzPVwibXlNZXNzYWdlc1wiIGNsYXNzPVwibXktbWVzc2FnZXNcIiByb2xlPVwiYWxlcnRcIj5cbiAqICAgPGRpdiBuZy1tZXNzYWdlPVwiYWxlcnRcIiBjbGFzcz1cInNvbWUtbWVzc2FnZVwiPi4uLjwvZGl2PlxuICogICA8ZGl2IG5nLW1lc3NhZ2U9XCJmYWlsXCIgY2xhc3M9XCJzb21lLW1lc3NhZ2VcIj4uLi48L2Rpdj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogVGhlbiB0aGUgQ1NTIGFuaW1hdGlvbiBjb2RlIGZvciB0aGUgbWVzc2FnZSBjb250YWluZXIgbG9va3MgbGlrZSBzbzpcbiAqXG4gKiBgYGBjc3NcbiAqIC5teS1tZXNzYWdlcyB7XG4gKiAgIHRyYW5zaXRpb246MXMgbGluZWFyIGFsbDtcbiAqIH1cbiAqIC5teS1tZXNzYWdlcy5uZy1hY3RpdmUge1xuICogICAvLyBtZXNzYWdlcyBhcmUgdmlzaWJsZVxuICogfVxuICogLm15LW1lc3NhZ2VzLm5nLWluYWN0aXZlIHtcbiAqICAgLy8gbWVzc2FnZXMgYXJlIGhpZGRlblxuICogfVxuICogYGBgXG4gKlxuICogV2hlbmV2ZXIgYW4gaW5uZXIgbWVzc2FnZSBpcyBhdHRhY2hlZCAoYmVjb21lcyB2aXNpYmxlKSBvciByZW1vdmVkIChiZWNvbWVzIGhpZGRlbikgdGhlbiB0aGUgZW50ZXJcbiAqIGFuZCBsZWF2ZSBhbmltYXRpb24gaXMgdHJpZ2dlcmVkIGZvciBlYWNoIHBhcnRpY3VsYXIgZWxlbWVudCBib3VuZCB0byB0aGUgYG5nTWVzc2FnZWAgZGlyZWN0aXZlLlxuICpcbiAqIFRoZXJlZm9yZSwgdGhlIENTUyBjb2RlIGZvciB0aGUgaW5uZXIgbWVzc2FnZXMgbG9va3MgbGlrZSBzbzpcbiAqXG4gKiBgYGBjc3NcbiAqIC5zb21lLW1lc3NhZ2Uge1xuICogICB0cmFuc2l0aW9uOjFzIGxpbmVhciBhbGw7XG4gKiB9XG4gKlxuICogLnNvbWUtbWVzc2FnZS5uZy1lbnRlciB7fVxuICogLnNvbWUtbWVzc2FnZS5uZy1lbnRlci5uZy1lbnRlci1hY3RpdmUge31cbiAqXG4gKiAuc29tZS1tZXNzYWdlLm5nLWxlYXZlIHt9XG4gKiAuc29tZS1tZXNzYWdlLm5nLWxlYXZlLm5nLWxlYXZlLWFjdGl2ZSB7fVxuICogYGBgXG4gKlxuICoge0BsaW5rIG5nQW5pbWF0ZSBDbGljayBoZXJlfSB0byBsZWFybiBob3cgdG8gdXNlIEphdmFTY3JpcHQgYW5pbWF0aW9ucyBvciB0byBsZWFybiBtb3JlIGFib3V0IG5nQW5pbWF0ZS5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ25nTWVzc2FnZXMnLCBbXSwgZnVuY3Rpb24gaW5pdEFuZ3VsYXJIZWxwZXJzKCkge1xuICAvLyBBY2Nlc3MgaGVscGVycyBmcm9tIGFuZ3VsYXIgY29yZS5cbiAgLy8gRG8gaXQgaW5zaWRlIGEgYGNvbmZpZ2AgYmxvY2sgdG8gZW5zdXJlIGB3aW5kb3cuYW5ndWxhcmAgaXMgYXZhaWxhYmxlLlxuICBmb3JFYWNoID0gYW5ndWxhci5mb3JFYWNoO1xuICBpc0FycmF5ID0gYW5ndWxhci5pc0FycmF5O1xuICBpc1N0cmluZyA9IGFuZ3VsYXIuaXNTdHJpbmc7XG4gIGpxTGl0ZSA9IGFuZ3VsYXIuZWxlbWVudDtcbn0pXG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAgICogQG1vZHVsZSBuZ01lc3NhZ2VzXG4gICAqIEBuYW1lIG5nTWVzc2FnZXNcbiAgICogQHJlc3RyaWN0IEFFXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmdNZXNzYWdlc2AgaXMgYSBkaXJlY3RpdmUgdGhhdCBpcyBkZXNpZ25lZCB0byBzaG93IGFuZCBoaWRlIG1lc3NhZ2VzIGJhc2VkIG9uIHRoZSBzdGF0ZVxuICAgKiBvZiBhIGtleS92YWx1ZSBvYmplY3QgdGhhdCBpdCBsaXN0ZW5zIG9uLiBUaGUgZGlyZWN0aXZlIGl0c2VsZiBjb21wbGVtZW50cyBlcnJvciBtZXNzYWdlXG4gICAqIHJlcG9ydGluZyB3aXRoIHRoZSBgbmdNb2RlbGAgJGVycm9yIG9iamVjdCAod2hpY2ggc3RvcmVzIGEga2V5L3ZhbHVlIHN0YXRlIG9mIHZhbGlkYXRpb24gZXJyb3JzKS5cbiAgICpcbiAgICogYG5nTWVzc2FnZXNgIG1hbmFnZXMgdGhlIHN0YXRlIG9mIGludGVybmFsIG1lc3NhZ2VzIHdpdGhpbiBpdHMgY29udGFpbmVyIGVsZW1lbnQuIFRoZSBpbnRlcm5hbFxuICAgKiBtZXNzYWdlcyB1c2UgdGhlIGBuZ01lc3NhZ2VgIGRpcmVjdGl2ZSBhbmQgd2lsbCBiZSBpbnNlcnRlZC9yZW1vdmVkIGZyb20gdGhlIHBhZ2UgZGVwZW5kaW5nXG4gICAqIG9uIGlmIHRoZXkncmUgcHJlc2VudCB3aXRoaW4gdGhlIGtleS92YWx1ZSBvYmplY3QuIEJ5IGRlZmF1bHQsIG9ubHkgb25lIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWRcbiAgICogYXQgYSB0aW1lIGFuZCB0aGlzIGRlcGVuZHMgb24gdGhlIHByaW9yaXRpemF0aW9uIG9mIHRoZSBtZXNzYWdlcyB3aXRoaW4gdGhlIHRlbXBsYXRlLiAoVGhpcyBjYW5cbiAgICogYmUgY2hhbmdlZCBieSB1c2luZyB0aGUgYG5nLW1lc3NhZ2VzLW11bHRpcGxlYCBvciBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiB0aGUgZGlyZWN0aXZlIGNvbnRhaW5lci4pXG4gICAqXG4gICAqIEEgcmVtb3RlIHRlbXBsYXRlIGNhbiBhbHNvIGJlIHVzZWQgdG8gcHJvbW90ZSBtZXNzYWdlIHJldXNhYmlsaXR5IGFuZCBtZXNzYWdlcyBjYW4gYWxzbyBiZVxuICAgKiBvdmVycmlkZGVuLlxuICAgKlxuICAgKiB7QGxpbmsgbW9kdWxlOm5nTWVzc2FnZXMgQ2xpY2sgaGVyZX0gdG8gbGVhcm4gbW9yZSBhYm91dCBgbmdNZXNzYWdlc2AgYW5kIGBuZ01lc3NhZ2VgLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgaHRtbFxuICAgKiA8IS0tIHVzaW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVzIC0tPlxuICAgKiA8QU5ZIG5nLW1lc3NhZ2VzPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZT1cInN0cmluZ1ZhbHVlXCI+Li4uPC9BTlk+XG4gICAqICAgPEFOWSBuZy1tZXNzYWdlPVwic3RyaW5nVmFsdWUxLCBzdHJpbmdWYWx1ZTIsIC4uLlwiPi4uLjwvQU5ZPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZS1leHA9XCJleHByZXNzaW9uVmFsdWVcIj4uLi48L0FOWT5cbiAgICogPC9BTlk+XG4gICAqXG4gICAqIDwhLS0gb3IgYnkgdXNpbmcgZWxlbWVudCBkaXJlY3RpdmVzIC0tPlxuICAgKiA8bmctbWVzc2FnZXMgZm9yPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW49XCJzdHJpbmdWYWx1ZVwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuPVwic3RyaW5nVmFsdWUxLCBzdHJpbmdWYWx1ZTIsIC4uLlwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuLWV4cD1cImV4cHJlc3Npb25WYWx1ZVwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogPC9uZy1tZXNzYWdlcz5cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZ01lc3NhZ2VzIGFuIGFuZ3VsYXIgZXhwcmVzc2lvbiBldmFsdWF0aW5nIHRvIGEga2V5L3ZhbHVlIG9iamVjdFxuICAgKiAgICAgICAgICAgICAgICAgKHRoaXMgaXMgdHlwaWNhbGx5IHRoZSAkZXJyb3Igb2JqZWN0IG9uIGFuIG5nTW9kZWwgaW5zdGFuY2UpLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG5nTWVzc2FnZXNNdWx0aXBsZXxtdWx0aXBsZSB3aGVuIHNldCwgYWxsIG1lc3NhZ2VzIHdpbGwgYmUgZGlzcGxheWVkIHdpdGggdHJ1ZVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8ZXhhbXBsZSBuYW1lPVwibmdNZXNzYWdlcy1kaXJlY3RpdmVcIiBtb2R1bGU9XCJuZ01lc3NhZ2VzRXhhbXBsZVwiXG4gICAqICAgICAgICAgIGRlcHM9XCJhbmd1bGFyLW1lc3NhZ2VzLmpzXCJcbiAgICogICAgICAgICAgYW5pbWF0aW9ucz1cInRydWVcIiBmaXhCYXNlPVwidHJ1ZVwiPlxuICAgKiAgIDxmaWxlIG5hbWU9XCJpbmRleC5odG1sXCI+XG4gICAqICAgICA8Zm9ybSBuYW1lPVwibXlGb3JtXCI+XG4gICAqICAgICAgIDxsYWJlbD5cbiAgICogICAgICAgICBFbnRlciB5b3VyIG5hbWU6XG4gICAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICogICAgICAgICAgICAgICAgbmFtZT1cIm15TmFtZVwiXG4gICAqICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwibmFtZVwiXG4gICAqICAgICAgICAgICAgICAgIG5nLW1pbmxlbmd0aD1cIjVcIlxuICAgKiAgICAgICAgICAgICAgICBuZy1tYXhsZW5ndGg9XCIyMFwiXG4gICAqICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gICAqICAgICAgIDwvbGFiZWw+XG4gICAqICAgICAgIDxwcmU+bXlGb3JtLm15TmFtZS4kZXJyb3IgPSB7eyBteUZvcm0ubXlOYW1lLiRlcnJvciB8IGpzb24gfX08L3ByZT5cbiAgICpcbiAgICogICAgICAgPGRpdiBuZy1tZXNzYWdlcz1cIm15Rm9ybS5teU5hbWUuJGVycm9yXCIgc3R5bGU9XCJjb2xvcjptYXJvb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPllvdSBkaWQgbm90IGVudGVyIGEgZmllbGQ8L2Rpdj5cbiAgICogICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5sZW5ndGhcIj5Zb3VyIGZpZWxkIGlzIHRvbyBzaG9ydDwvZGl2PlxuICAgKiAgICAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm1heGxlbmd0aFwiPllvdXIgZmllbGQgaXMgdG9vIGxvbmc8L2Rpdj5cbiAgICogICAgICAgPC9kaXY+XG4gICAqICAgICA8L2Zvcm0+XG4gICAqICAgPC9maWxlPlxuICAgKiAgIDxmaWxlIG5hbWU9XCJzY3JpcHQuanNcIj5cbiAgICogICAgIGFuZ3VsYXIubW9kdWxlKCduZ01lc3NhZ2VzRXhhbXBsZScsIFsnbmdNZXNzYWdlcyddKTtcbiAgICogICA8L2ZpbGU+XG4gICAqIDwvZXhhbXBsZT5cbiAgICovXG4gIC5kaXJlY3RpdmUoJ25nTWVzc2FnZXMnLCBbJyRhbmltYXRlJywgZnVuY3Rpb24oJGFuaW1hdGUpIHtcbiAgICB2YXIgQUNUSVZFX0NMQVNTID0gJ25nLWFjdGl2ZSc7XG4gICAgdmFyIElOQUNUSVZFX0NMQVNTID0gJ25nLWluYWN0aXZlJztcblxuICAgIHJldHVybiB7XG4gICAgICByZXF1aXJlOiAnbmdNZXNzYWdlcycsXG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6IFsnJGVsZW1lbnQnLCAnJHNjb3BlJywgJyRhdHRycycsIGZ1bmN0aW9uIE5nTWVzc2FnZXNDdHJsKCRlbGVtZW50LCAkc2NvcGUsICRhdHRycykge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIHZhciBsYXRlc3RLZXkgPSAwO1xuICAgICAgICB2YXIgbmV4dEF0dGFjaElkID0gMDtcblxuICAgICAgICB0aGlzLmdldEF0dGFjaElkID0gZnVuY3Rpb24gZ2V0QXR0YWNoSWQoKSB7IHJldHVybiBuZXh0QXR0YWNoSWQrKzsgfTtcblxuICAgICAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzID0ge307XG4gICAgICAgIHZhciByZW5kZXJMYXRlciwgY2FjaGVkQ29sbGVjdGlvbjtcblxuICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbiB8fCB7fTtcblxuICAgICAgICAgIHJlbmRlckxhdGVyID0gZmFsc2U7XG4gICAgICAgICAgY2FjaGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cbiAgICAgICAgICAvLyB0aGlzIGlzIHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBlbXB0eSBvciBpZiB0aGUgYXR0cmlidXRlIHZhbHVlIGlzIHRydXRoeVxuICAgICAgICAgIHZhciBtdWx0aXBsZSA9IGlzQXR0clRydXRoeSgkc2NvcGUsICRhdHRycy5uZ01lc3NhZ2VzTXVsdGlwbGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgaXNBdHRyVHJ1dGh5KCRzY29wZSwgJGF0dHJzLm11bHRpcGxlKTtcblxuICAgICAgICAgIHZhciB1bm1hdGNoZWRNZXNzYWdlcyA9IFtdO1xuICAgICAgICAgIHZhciBtYXRjaGVkS2V5cyA9IHt9O1xuICAgICAgICAgIHZhciBtZXNzYWdlSXRlbSA9IGN0cmwuaGVhZDtcbiAgICAgICAgICB2YXIgbWVzc2FnZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgdmFyIHRvdGFsTWVzc2FnZXMgPSAwO1xuXG4gICAgICAgICAgLy8gd2UgdXNlICE9IGluc3RlYWQgb2YgIT09IHRvIGFsbG93IGZvciBib3RoIHVuZGVmaW5lZCBhbmQgbnVsbCB2YWx1ZXNcbiAgICAgICAgICB3aGlsZSAobWVzc2FnZUl0ZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdG90YWxNZXNzYWdlcysrO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VDdHJsID0gbWVzc2FnZUl0ZW0ubWVzc2FnZTtcblxuICAgICAgICAgICAgdmFyIG1lc3NhZ2VVc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2VGb3VuZCkge1xuICAgICAgICAgICAgICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2VVc2VkICYmIHRydXRoeSh2YWx1ZSkgJiYgbWVzc2FnZUN0cmwudGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRvIHByZXZlbnQgdGhlIHNhbWUgZXJyb3IgbmFtZSBmcm9tIHNob3dpbmcgdXAgdHdpY2VcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkS2V5c1trZXldKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICBtYXRjaGVkS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgbWVzc2FnZVVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZUN0cmwuYXR0YWNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VkKSB7XG4gICAgICAgICAgICAgIC8vIHVubGVzcyB3ZSB3YW50IHRvIGRpc3BsYXkgbXVsdGlwbGUgbWVzc2FnZXMgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgICAgLy8gc2V0IGEgZmxhZyBoZXJlIHRvIGF2b2lkIGRpc3BsYXlpbmcgdGhlIG5leHQgbWVzc2FnZSBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICBtZXNzYWdlRm91bmQgPSAhbXVsdGlwbGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1bm1hdGNoZWRNZXNzYWdlcy5wdXNoKG1lc3NhZ2VDdHJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVzc2FnZUl0ZW0gPSBtZXNzYWdlSXRlbS5uZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvckVhY2godW5tYXRjaGVkTWVzc2FnZXMsIGZ1bmN0aW9uKG1lc3NhZ2VDdHJsKSB7XG4gICAgICAgICAgICBtZXNzYWdlQ3RybC5kZXRhY2goKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh1bm1hdGNoZWRNZXNzYWdlcy5sZW5ndGggIT09IHRvdGFsTWVzc2FnZXMpIHtcbiAgICAgICAgICAgICRhbmltYXRlLnNldENsYXNzKCRlbGVtZW50LCBBQ1RJVkVfQ0xBU1MsIElOQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGFuaW1hdGUuc2V0Q2xhc3MoJGVsZW1lbnQsIElOQUNUSVZFX0NMQVNTLCBBQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuJHdhdGNoQ29sbGVjdGlvbigkYXR0cnMubmdNZXNzYWdlcyB8fCAkYXR0cnNbJ2ZvciddLCBjdHJsLnJlbmRlcik7XG5cbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgZGVzdHJveWVkLCBwcm9hY3RpdmVseSBkZXN0cm95IGFsbCB0aGUgY3VycmVudGx5IHZpc2libGUgbWVzc2FnZXNcbiAgICAgICAgJGVsZW1lbnQub24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZm9yRWFjaChtZXNzYWdlcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5tZXNzYWdlLmRldGFjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlUmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFyZW5kZXJMYXRlcikge1xuICAgICAgICAgICAgcmVuZGVyTGF0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgJHNjb3BlLiRldmFsQXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChyZW5kZXJMYXRlciAmJiBjYWNoZWRDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY3RybC5yZW5kZXIoY2FjaGVkQ29sbGVjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gZnVuY3Rpb24oY29tbWVudCwgbWVzc2FnZUN0cmwpIHtcbiAgICAgICAgICB2YXIgbmV4dEtleSA9IGxhdGVzdEtleS50b1N0cmluZygpO1xuICAgICAgICAgIG1lc3NhZ2VzW25leHRLZXldID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZUN0cmxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGluc2VydE1lc3NhZ2VOb2RlKCRlbGVtZW50WzBdLCBjb21tZW50LCBuZXh0S2V5KTtcbiAgICAgICAgICBjb21tZW50LiQkbmdNZXNzYWdlTm9kZSA9IG5leHRLZXk7XG4gICAgICAgICAgbGF0ZXN0S2V5Kys7XG5cbiAgICAgICAgICBjdHJsLnJlUmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyID0gZnVuY3Rpb24oY29tbWVudCkge1xuICAgICAgICAgIHZhciBrZXkgPSBjb21tZW50LiQkbmdNZXNzYWdlTm9kZTtcbiAgICAgICAgICBkZWxldGUgY29tbWVudC4kJG5nTWVzc2FnZU5vZGU7XG4gICAgICAgICAgcmVtb3ZlTWVzc2FnZU5vZGUoJGVsZW1lbnRbMF0sIGNvbW1lbnQsIGtleSk7XG4gICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW2tleV07XG4gICAgICAgICAgY3RybC5yZVJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRQcmV2aW91c01lc3NhZ2UocGFyZW50LCBjb21tZW50KSB7XG4gICAgICAgICAgdmFyIHByZXZOb2RlID0gY29tbWVudDtcbiAgICAgICAgICB2YXIgcGFyZW50TG9va3VwID0gW107XG5cbiAgICAgICAgICB3aGlsZSAocHJldk5vZGUgJiYgcHJldk5vZGUgIT09IHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIHByZXZLZXkgPSBwcmV2Tm9kZS4kJG5nTWVzc2FnZU5vZGU7XG4gICAgICAgICAgICBpZiAocHJldktleSAmJiBwcmV2S2V5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZXNbcHJldktleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRpdmUgZGVlcGVyIGludG8gdGhlIERPTSBhbmQgZXhhbWluZSBpdHMgY2hpbGRyZW4gZm9yIGFueSBuZ01lc3NhZ2VcbiAgICAgICAgICAgIC8vIGNvbW1lbnRzIHRoYXQgbWF5IGJlIGluIGFuIGVsZW1lbnQgdGhhdCBhcHBlYXJzIGRlZXBlciBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHByZXZOb2RlLmNoaWxkTm9kZXMubGVuZ3RoICYmIHBhcmVudExvb2t1cC5pbmRleE9mKHByZXZOb2RlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgcGFyZW50TG9va3VwLnB1c2gocHJldk5vZGUpO1xuICAgICAgICAgICAgICBwcmV2Tm9kZSA9IHByZXZOb2RlLmNoaWxkTm9kZXNbcHJldk5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldk5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIHByZXZOb2RlID0gcHJldk5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJldk5vZGUgPSBwcmV2Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBwYXJlbnRMb29rdXAucHVzaChwcmV2Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0TWVzc2FnZU5vZGUocGFyZW50LCBjb21tZW50LCBrZXkpIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZU5vZGUgPSBtZXNzYWdlc1trZXldO1xuICAgICAgICAgIGlmICghY3RybC5oZWFkKSB7XG4gICAgICAgICAgICBjdHJsLmhlYWQgPSBtZXNzYWdlTm9kZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFByZXZpb3VzTWVzc2FnZShwYXJlbnQsIGNvbW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VOb2RlLm5leHQgPSBtYXRjaC5uZXh0O1xuICAgICAgICAgICAgICBtYXRjaC5uZXh0ID0gbWVzc2FnZU5vZGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlTm9kZS5uZXh0ID0gY3RybC5oZWFkO1xuICAgICAgICAgICAgICBjdHJsLmhlYWQgPSBtZXNzYWdlTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNZXNzYWdlTm9kZShwYXJlbnQsIGNvbW1lbnQsIGtleSkge1xuICAgICAgICAgIHZhciBtZXNzYWdlTm9kZSA9IG1lc3NhZ2VzW2tleV07XG5cbiAgICAgICAgICB2YXIgbWF0Y2ggPSBmaW5kUHJldmlvdXNNZXNzYWdlKHBhcmVudCwgY29tbWVudCk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBtYXRjaC5uZXh0ID0gbWVzc2FnZU5vZGUubmV4dDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3RybC5oZWFkID0gbWVzc2FnZU5vZGUubmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzQXR0clRydXRoeShzY29wZSwgYXR0cikge1xuICAgICByZXR1cm4gKGlzU3RyaW5nKGF0dHIpICYmIGF0dHIubGVuZ3RoID09PSAwKSB8fCAvL2VtcHR5IGF0dHJpYnV0ZVxuICAgICAgICAgICAgdHJ1dGh5KHNjb3BlLiRldmFsKGF0dHIpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cnV0aHkodmFsKSB7XG4gICAgICByZXR1cm4gaXNTdHJpbmcodmFsKSA/IHZhbC5sZW5ndGggOiAhIXZhbDtcbiAgICB9XG4gIH1dKVxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZGlyZWN0aXZlXG4gICAqIEBuYW1lIG5nTWVzc2FnZXNJbmNsdWRlXG4gICAqIEByZXN0cmljdCBBRVxuICAgKiBAc2NvcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGBuZ01lc3NhZ2VzSW5jbHVkZWAgaXMgYSBkaXJlY3RpdmUgd2l0aCB0aGUgcHVycG9zZSB0byBpbXBvcnQgZXhpc3RpbmcgbmdNZXNzYWdlIHRlbXBsYXRlXG4gICAqIGNvZGUgZnJvbSBhIHJlbW90ZSB0ZW1wbGF0ZSBhbmQgcGxhY2UgdGhlIGRvd25sb2FkZWQgdGVtcGxhdGUgY29kZSBpbnRvIHRoZSBleGFjdCBzcG90XG4gICAqIHRoYXQgdGhlIG5nTWVzc2FnZXNJbmNsdWRlIGRpcmVjdGl2ZSBpcyBwbGFjZWQgd2l0aGluIHRoZSBuZ01lc3NhZ2VzIGNvbnRhaW5lci4gVGhpcyBhbGxvd3NcbiAgICogZm9yIGEgc2VyaWVzIG9mIHByZS1kZWZpbmVkIG1lc3NhZ2VzIHRvIGJlIHJldXNlZCBhbmQgYWxzbyBhbGxvd3MgZm9yIHRoZSBkZXZlbG9wZXIgdG9cbiAgICogZGV0ZXJtaW5lIHdoYXQgbWVzc2FnZXMgYXJlIG92ZXJyaWRkZW4gZHVlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIG5nTWVzc2FnZXNJbmNsdWRlIGRpcmVjdGl2ZS5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYGh0bWxcbiAgICogPCEtLSB1c2luZyBhdHRyaWJ1dGUgZGlyZWN0aXZlcyAtLT5cbiAgICogPEFOWSBuZy1tZXNzYWdlcz1cImV4cHJlc3Npb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2VzLWluY2x1ZGU9XCJyZW1vdGVUcGxTdHJpbmdcIj4uLi48L0FOWT5cbiAgICogPC9BTlk+XG4gICAqXG4gICAqIDwhLS0gb3IgYnkgdXNpbmcgZWxlbWVudCBkaXJlY3RpdmVzIC0tPlxuICAgKiA8bmctbWVzc2FnZXMgZm9yPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxuZy1tZXNzYWdlcy1pbmNsdWRlIHNyYz1cImV4cHJlc3Npb25WYWx1ZTFcIj4uLi48L25nLW1lc3NhZ2VzLWluY2x1ZGU+XG4gICAqIDwvbmctbWVzc2FnZXM+XG4gICAqIGBgYFxuICAgKlxuICAgKiB7QGxpbmsgbW9kdWxlOm5nTWVzc2FnZXMgQ2xpY2sgaGVyZX0gdG8gbGVhcm4gbW9yZSBhYm91dCBgbmdNZXNzYWdlc2AgYW5kIGBuZ01lc3NhZ2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmdNZXNzYWdlc0luY2x1ZGV8c3JjIGEgc3RyaW5nIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlbW90ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIC5kaXJlY3RpdmUoJ25nTWVzc2FnZXNJbmNsdWRlJyxcbiAgICBbJyR0ZW1wbGF0ZVJlcXVlc3QnLCAnJGRvY3VtZW50JywgJyRjb21waWxlJywgZnVuY3Rpb24oJHRlbXBsYXRlUmVxdWVzdCwgJGRvY3VtZW50LCAkY29tcGlsZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgcmVxdWlyZTogJ15ebmdNZXNzYWdlcycsIC8vIHdlIG9ubHkgcmVxdWlyZSB0aGlzIGZvciB2YWxpZGF0aW9uIHNha2VcbiAgICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIHNyYyA9IGF0dHJzLm5nTWVzc2FnZXNJbmNsdWRlIHx8IGF0dHJzLnNyYztcbiAgICAgICAgJHRlbXBsYXRlUmVxdWVzdChzcmMpLnRoZW4oZnVuY3Rpb24oaHRtbCkge1xuICAgICAgICAgIGlmICgkc2NvcGUuJCRkZXN0cm95ZWQpIHJldHVybjtcblxuICAgICAgICAgIGlmIChpc1N0cmluZyhodG1sKSAmJiAhaHRtbC50cmltKCkpIHtcbiAgICAgICAgICAgIC8vIEVtcHR5IHRlbXBsYXRlIC0gbm90aGluZyB0byBjb21waWxlXG4gICAgICAgICAgICByZXBsYWNlRWxlbWVudFdpdGhNYXJrZXIoZWxlbWVudCwgc3JjKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm9uLWVtcHR5IHRlbXBsYXRlIC0gY29tcGlsZSBhbmQgbGlua1xuICAgICAgICAgICAgJGNvbXBpbGUoaHRtbCkoJHNjb3BlLCBmdW5jdGlvbihjb250ZW50cykge1xuICAgICAgICAgICAgICBlbGVtZW50LmFmdGVyKGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnRXaXRoTWFya2VyKGVsZW1lbnQsIHNyYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIZWxwZXJzXG4gICAgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnRXaXRoTWFya2VyKGVsZW1lbnQsIHNyYykge1xuICAgICAgLy8gQSBjb21tZW50IG1hcmtlciBpcyBwbGFjZWQgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlc1xuICAgICAgdmFyIGNvbW1lbnQgPSAkY29tcGlsZS4kJGNyZWF0ZUNvbW1lbnQgP1xuICAgICAgICAgICRjb21waWxlLiQkY3JlYXRlQ29tbWVudCgnbmdNZXNzYWdlc0luY2x1ZGUnLCBzcmMpIDpcbiAgICAgICAgICAkZG9jdW1lbnRbMF0uY3JlYXRlQ29tbWVudCgnIG5nTWVzc2FnZXNJbmNsdWRlOiAnICsgc3JjICsgJyAnKTtcbiAgICAgIHZhciBtYXJrZXIgPSBqcUxpdGUoY29tbWVudCk7XG4gICAgICBlbGVtZW50LmFmdGVyKG1hcmtlcik7XG5cbiAgICAgIC8vIERvbid0IHBvbGx1dGUgdGhlIERPTSBhbnltb3JlIGJ5IGtlZXBpbmcgYW4gZW1wdHkgZGlyZWN0aXZlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XSlcblxuICAvKipcbiAgICogQG5nZG9jIGRpcmVjdGl2ZVxuICAgKiBAbmFtZSBuZ01lc3NhZ2VcbiAgICogQHJlc3RyaWN0IEFFXG4gICAqIEBzY29wZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogYG5nTWVzc2FnZWAgaXMgYSBkaXJlY3RpdmUgd2l0aCB0aGUgcHVycG9zZSB0byBzaG93IGFuZCBoaWRlIGEgcGFydGljdWxhciBtZXNzYWdlLlxuICAgKiBGb3IgYG5nTWVzc2FnZWAgdG8gb3BlcmF0ZSwgYSBwYXJlbnQgYG5nTWVzc2FnZXNgIGRpcmVjdGl2ZSBvbiBhIHBhcmVudCBET00gZWxlbWVudFxuICAgKiBtdXN0IGJlIHNpdHVhdGVkIHNpbmNlIGl0IGRldGVybWluZXMgd2hpY2ggbWVzc2FnZXMgYXJlIHZpc2libGUgYmFzZWQgb24gdGhlIHN0YXRlXG4gICAqIG9mIHRoZSBwcm92aWRlZCBrZXkvdmFsdWUgbWFwIHRoYXQgYG5nTWVzc2FnZXNgIGxpc3RlbnMgb24uXG4gICAqXG4gICAqIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdXNpbmcgYG5nTWVzc2FnZWAgY2FuIGJlIGZvdW5kIGluIHRoZVxuICAgKiB7QGxpbmsgbW9kdWxlOm5nTWVzc2FnZXMgYG5nTWVzc2FnZXNgIG1vZHVsZSBkb2N1bWVudGF0aW9ufS5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYGh0bWxcbiAgICogPCEtLSB1c2luZyBhdHRyaWJ1dGUgZGlyZWN0aXZlcyAtLT5cbiAgICogPEFOWSBuZy1tZXNzYWdlcz1cImV4cHJlc3Npb25cIiByb2xlPVwiYWxlcnRcIj5cbiAgICogICA8QU5ZIG5nLW1lc3NhZ2U9XCJzdHJpbmdWYWx1ZVwiPi4uLjwvQU5ZPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZT1cInN0cmluZ1ZhbHVlMSwgc3RyaW5nVmFsdWUyLCAuLi5cIj4uLi48L0FOWT5cbiAgICogPC9BTlk+XG4gICAqXG4gICAqIDwhLS0gb3IgYnkgdXNpbmcgZWxlbWVudCBkaXJlY3RpdmVzIC0tPlxuICAgKiA8bmctbWVzc2FnZXMgZm9yPVwiZXhwcmVzc2lvblwiIHJvbGU9XCJhbGVydFwiPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW49XCJzdHJpbmdWYWx1ZVwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogICA8bmctbWVzc2FnZSB3aGVuPVwic3RyaW5nVmFsdWUxLCBzdHJpbmdWYWx1ZTIsIC4uLlwiPi4uLjwvbmctbWVzc2FnZT5cbiAgICogPC9uZy1tZXNzYWdlcz5cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7ZXhwcmVzc2lvbn0gbmdNZXNzYWdlfHdoZW4gYSBzdHJpbmcgdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgbWVzc2FnZSBrZXkuXG4gICAqL1xuICAuZGlyZWN0aXZlKCduZ01lc3NhZ2UnLCBuZ01lc3NhZ2VEaXJlY3RpdmVGYWN0b3J5KCkpXG5cblxuICAvKipcbiAgICogQG5nZG9jIGRpcmVjdGl2ZVxuICAgKiBAbmFtZSBuZ01lc3NhZ2VFeHBcbiAgICogQHJlc3RyaWN0IEFFXG4gICAqIEBwcmlvcml0eSAxXG4gICAqIEBzY29wZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogYG5nTWVzc2FnZUV4cGAgaXMgdGhlIHNhbWUgYXMge0BsaW5rIGRpcmVjdGl2ZTpuZ01lc3NhZ2UgYG5nTWVzc2FnZWB9LCBidXQgaW5zdGVhZCBvZiBhIHN0YXRpY1xuICAgKiB2YWx1ZSwgaXQgYWNjZXB0cyBhbiBleHByZXNzaW9uIHRvIGJlIGV2YWx1YXRlZCBmb3IgdGhlIG1lc3NhZ2Uga2V5LlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgaHRtbFxuICAgKiA8IS0tIHVzaW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVzIC0tPlxuICAgKiA8QU5ZIG5nLW1lc3NhZ2VzPVwiZXhwcmVzc2lvblwiPlxuICAgKiAgIDxBTlkgbmctbWVzc2FnZS1leHA9XCJleHByZXNzaW9uVmFsdWVcIj4uLi48L0FOWT5cbiAgICogPC9BTlk+XG4gICAqXG4gICAqIDwhLS0gb3IgYnkgdXNpbmcgZWxlbWVudCBkaXJlY3RpdmVzIC0tPlxuICAgKiA8bmctbWVzc2FnZXMgZm9yPVwiZXhwcmVzc2lvblwiPlxuICAgKiAgIDxuZy1tZXNzYWdlIHdoZW4tZXhwPVwiZXhwcmVzc2lvblZhbHVlXCI+Li4uPC9uZy1tZXNzYWdlPlxuICAgKiA8L25nLW1lc3NhZ2VzPlxuICAgKiBgYGBcbiAgICpcbiAgICoge0BsaW5rIG1vZHVsZTpuZ01lc3NhZ2VzIENsaWNrIGhlcmV9IHRvIGxlYXJuIG1vcmUgYWJvdXQgYG5nTWVzc2FnZXNgIGFuZCBgbmdNZXNzYWdlYC5cbiAgICpcbiAgICogQHBhcmFtIHtleHByZXNzaW9ufSBuZ01lc3NhZ2VFeHB8d2hlbkV4cCBhbiBleHByZXNzaW9uIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG1lc3NhZ2Uga2V5LlxuICAgKi9cbiAgLmRpcmVjdGl2ZSgnbmdNZXNzYWdlRXhwJywgbmdNZXNzYWdlRGlyZWN0aXZlRmFjdG9yeSgpKTtcblxuZnVuY3Rpb24gbmdNZXNzYWdlRGlyZWN0aXZlRmFjdG9yeSgpIHtcbiAgcmV0dXJuIFsnJGFuaW1hdGUnLCBmdW5jdGlvbigkYW5pbWF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIHRyYW5zY2x1ZGU6ICdlbGVtZW50JyxcbiAgICAgIHByaW9yaXR5OiAxLCAvLyBtdXN0IHJ1biBiZWZvcmUgbmdCaW5kLCBvdGhlcndpc2UgdGhlIHRleHQgaXMgc2V0IG9uIHRoZSBjb21tZW50XG4gICAgICB0ZXJtaW5hbDogdHJ1ZSxcbiAgICAgIHJlcXVpcmU6ICdeXm5nTWVzc2FnZXMnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01lc3NhZ2VzQ3RybCwgJHRyYW5zY2x1ZGUpIHtcbiAgICAgICAgdmFyIGNvbW1lbnROb2RlID0gZWxlbWVudFswXTtcblxuICAgICAgICB2YXIgcmVjb3JkcztcbiAgICAgICAgdmFyIHN0YXRpY0V4cCA9IGF0dHJzLm5nTWVzc2FnZSB8fCBhdHRycy53aGVuO1xuICAgICAgICB2YXIgZHluYW1pY0V4cCA9IGF0dHJzLm5nTWVzc2FnZUV4cCB8fCBhdHRycy53aGVuRXhwO1xuICAgICAgICB2YXIgYXNzaWduUmVjb3JkcyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgcmVjb3JkcyA9IGl0ZW1zXG4gICAgICAgICAgICAgID8gKGlzQXJyYXkoaXRlbXMpXG4gICAgICAgICAgICAgICAgICA/IGl0ZW1zXG4gICAgICAgICAgICAgICAgICA6IGl0ZW1zLnNwbGl0KC9bXFxzLF0rLykpXG4gICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICBuZ01lc3NhZ2VzQ3RybC5yZVJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkeW5hbWljRXhwKSB7XG4gICAgICAgICAgYXNzaWduUmVjb3JkcyhzY29wZS4kZXZhbChkeW5hbWljRXhwKSk7XG4gICAgICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbihkeW5hbWljRXhwLCBhc3NpZ25SZWNvcmRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhc3NpZ25SZWNvcmRzKHN0YXRpY0V4cCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQsIG1lc3NhZ2VDdHJsO1xuICAgICAgICBuZ01lc3NhZ2VzQ3RybC5yZWdpc3Rlcihjb21tZW50Tm9kZSwgbWVzc2FnZUN0cmwgPSB7XG4gICAgICAgICAgdGVzdDogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5zKHJlY29yZHMsIG5hbWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0YWNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgJHRyYW5zY2x1ZGUoZnVuY3Rpb24oZWxtLCBuZXdTY29wZSkge1xuICAgICAgICAgICAgICAgICRhbmltYXRlLmVudGVyKGVsbSwgbnVsbCwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBlbG07XG5cbiAgICAgICAgICAgICAgICAvLyBFYWNoIHRpbWUgd2UgYXR0YWNoIHRoaXMgbm9kZSB0byBhIG1lc3NhZ2Ugd2UgZ2V0IGEgbmV3IGlkIHRoYXQgd2UgY2FuIG1hdGNoXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBhcmUgZGVzdHJveWluZyB0aGUgbm9kZSBsYXRlci5cbiAgICAgICAgICAgICAgICB2YXIgJCRhdHRhY2hJZCA9IGN1cnJlbnRFbGVtZW50LiQkYXR0YWNoSWQgPSBuZ01lc3NhZ2VzQ3RybC5nZXRBdHRhY2hJZCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGVsZW1lbnQgb3IgYSBwYXJlbnQgZWxlbWVudCBpcyBkZXN0cm95ZWRcbiAgICAgICAgICAgICAgICAvLyBieSBhbm90aGVyIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHRoZW4gaXQncyB0aW1lXG4gICAgICAgICAgICAgICAgLy8gdG8gZGVyZWdpc3RlciB0aGUgbWVzc2FnZSBmcm9tIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQub24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQuJCRhdHRhY2hJZCA9PT0gJCRhdHRhY2hJZCkge1xuICAgICAgICAgICAgICAgICAgICBuZ01lc3NhZ2VzQ3RybC5kZXJlZ2lzdGVyKGNvbW1lbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUN0cmwuZGV0YWNoKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBuZXdTY29wZS4kZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRldGFjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdmFyIGVsbSA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICRhbmltYXRlLmxlYXZlKGVsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XTtcblxuICBmdW5jdGlvbiBjb250YWlucyhjb2xsZWN0aW9uLCBrZXkpIHtcbiAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGlzQXJyYXkoY29sbGVjdGlvbilcbiAgICAgICAgICA/IGNvbGxlY3Rpb24uaW5kZXhPZihrZXkpID49IDBcbiAgICAgICAgICA6IGNvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICB9XG4gIH1cbn1cblxuXG59KSh3aW5kb3csIHdpbmRvdy5hbmd1bGFyKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vYW5ndWxhci1tZXNzYWdlcy9hbmd1bGFyLW1lc3NhZ2VzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFdyYXBwZXJzKTtcblxuICBmdW5jdGlvbiBhZGRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XG4gICAgdmFyIGMgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbe1xuICAgICAgbmFtZTogXCJ0ZW1wbGF0ZUxhYmVsXCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbGFiZWwuaHRtbFwiKSxcbiAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgbGFiZWw6IGMuc3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBjLmJvb2wub3B0aW9uYWxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSwgeyBuYW1lOiBcInRlbXBsYXRlSGFzRXJyb3JcIiwgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2hhcy1lcnJvci5odG1sXCIpIH1dKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93cmFwcGVycy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkV3JhcHBlcnMpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlcixmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2spIHtcclxuICAgIHZhciBjID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrO1xyXG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAndGVtcGxhdGVMYWJlbCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGFiZWwuaHRtbCcpLFxyXG4gICAgICAgIGFwaUNoZWNrOiB7XHJcblx0ICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xyXG5cdCAgICAgICAgICBsYWJlbDogYy5zdHJpbmcsXHJcblx0ICAgICAgICAgIHJlcXVpcmVkOiBjLmJvb2wub3B0aW9uYWxcclxuXHQgICAgICAgIH0pXHJcblx0ICAgICAgfSxcclxuXHQgICAgICBhcGlDaGVja0luc3RhbmNlOiBjXHJcbiAgICAgIH0sXHJcbiAgICAgIHtuYW1lOiAndGVtcGxhdGVIYXNFcnJvcicsIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hhcy1lcnJvci5odG1sJyl9XHJcbiAgICBdKTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi93cmFwcGVycy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiID5cXHJcXG4gIDxsYWJlbCBmb3I9XFxcInt7aWR9fVxcXCIgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgPyAnaXMtaW52YWxpZC1sYWJlbCcgOiAnJ1xcXCI+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtbHktd3JhcHBlci1sYWJlbFxcXCI+e3t0by5sYWJlbH19PC9zcGFuPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybWx5LXdyYXBwZXItcmVxdWlyZWRcXFwiID57e3RvLnJlcXVpcmVkID8gJyonIDogJyd9fTwvc3Bhbj5cXHJcXG4gICAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuICAgIDxkaXYgbmctbWVzc2FnZXM9XFxcImZjLiRlcnJvclxcXCIgXFxyXFxuICAgIG5nLWlmPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiR0b3VjaGVkXFxcIiBcXHJcXG4gICAgY2xhc3M9XFxcIm15LW1lc3NhZ2VzIGZvcm0tZXJyb3IgaXMtdmlzaWJsZVxcXCI+XFxyXFxuICAgICAgPGRpdiBuZy1tZXNzYWdlPVxcXCJ7ezo6bmFtZX19XFxcIiBuZy1yZXBlYXQ9XFxcIihuYW1lLCBtZXNzYWdlKSBpbiA6Om9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1xcXCIgY2xhc3M9XFxcImZvcm0tZXJyb3IgaXMtdmlzaWJsZVxcXCI+e3ttZXNzYWdlKGZjLiR2aWV3VmFsdWUsIGZjLiRtb2RlbFZhbHVlLCB0aGlzKX19PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9sYWJlbD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3JhcHBlcnMvbGFiZWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sdW1ucyBzbWFsbC17e3RvLmNvbHVtbiA+IDAgPyB0by5jb2x1bW4gOiAxMn19XFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBzaG93RXJyb3J9XFxcIj5cXHJcXG4gIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cmFwcGVycy9oYXMtZXJyb3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIHJlcXVpcmUoXCIuL2NoZWNrYm94XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vbXVsdGlDaGVja2JveFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL2lucHV0XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vcmFkaW9cIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9zZWxlY3RcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi90ZXh0YXJlYVwiKShuZ01vZHVsZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIHJlcXVpcmUoJy4vY2hlY2tib3gnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9tdWx0aUNoZWNrYm94JykobmdNb2R1bGUpO1xyXG4gIHJlcXVpcmUoJy4vaW5wdXQnKShuZ01vZHVsZSk7XHJcbiAgcmVxdWlyZSgnLi9yYWRpbycpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL3NlbGVjdCcpKG5nTW9kdWxlKTtcclxuICByZXF1aXJlKCcuL3RleHRhcmVhJykobmdNb2R1bGUpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZENoZWNrYm94VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcImNoZWNrYm94XCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2hlY2tib3guaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlSGFzRXJyb3JcIl0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2NoZWNrYm94LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAnY2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jaGVja2JveC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVIYXNFcnJvciddLFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9jaGVja2JveC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuXFx0PGxhYmVsIG5nLWNsYXNzPVxcXCJmYy4kdmFsaWQgPyAnJyA6ICdpcy1pbnZhbGlkLWxhYmVsJ1xcXCI+XFxyXFxuXFx0XFx0PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZC1jaGVja2JveFxcXCJcXHJcXG5cXHRcXHQgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCIgbmctY2xhc3M9XFxcIm9wdGlvbnMuZm9ybUNvbnRyb2wuJGludmFsaWQgJiYgb3B0aW9ucy5mb3JtQ29udHJvbC4kcHJpc3RpbmUgPT0gZmFsc2UgPyAnaXMtaW52YWxpZC1pbnB1dCcgOiAnJ1xcXCI+XFxyXFxuXFx0XFx0PHNwYW4+e3t0by5sYWJlbH19PC9zcGFuPlxcclxcblxcdFxcdDxzcGFuPnt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319PC9zcGFuPlxcclxcblxcdDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL2NoZWNrYm94Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6IFwibXVsdGlDaGVja2JveFwiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL211bHRpQ2hlY2tib3guaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXG4gICAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXI6IC8qIEBuZ0luamVjdCAqL2Z1bmN0aW9uIGNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgICAgIHZhciB0byA9ICRzY29wZS50bztcbiAgICAgICAgdmFyIG9wdHMgPSAkc2NvcGUub3B0aW9ucztcbiAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3ggPSB7XG4gICAgICAgICAgY2hlY2tlZDogW10sXG4gICAgICAgICAgY2hhbmdlOiBzZXRNb2RlbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNoZWNrYm94ZXMgY2hlY2sgcHJvcGVydHlcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSB0by52YWx1ZVByb3AgfHwgXCJ2YWx1ZVwiO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uICh2LCBpbmRleCkge1xuICAgICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkW2luZGV4XSA9IG1vZGVsVmFsdWUuaW5kZXhPZih2W3ZhbHVlUHJvcF0pICE9PSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRNb2RlbCgpIHtcbiAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldID0gW107XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWQsIGZ1bmN0aW9uIChjaGVja2JveCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWxbb3B0cy5rZXldLnB1c2godG8ub3B0aW9uc1tpbmRleF1bdG8udmFsdWVQcm9wIHx8IFwidmFsdWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHlwZXMvbXVsdGlDaGVja2JveC5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ211bHRpQ2hlY2tib3gnLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tdWx0aUNoZWNrYm94Lmh0bWwnKSxcclxuICAgICAgd3JhcHBlcjogWyd0ZW1wbGF0ZUxhYmVsJywgJ3RlbXBsYXRlSGFzRXJyb3InXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICBub0Zvcm1Db250cm9sOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBhcGlDaGVjazogY2hlY2sgPT4gKHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2YoY2hlY2sub2JqZWN0KSxcclxuICAgICAgICAgIGxhYmVsUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsLFxyXG4gICAgICAgICAgdmFsdWVQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi8gZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgY29uc3QgdG8gPSAkc2NvcGUudG87XHJcbiAgICAgICAgY29uc3Qgb3B0cyA9ICRzY29wZS5vcHRpb25zO1xyXG4gICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94ID0ge1xyXG4gICAgICAgICAgY2hlY2tlZDogW10sXHJcbiAgICAgICAgICBjaGFuZ2U6IHNldE1vZGVsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY2hlY2tib3hlcyBjaGVjayBwcm9wZXJ0eVxyXG4gICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xyXG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IHRvLnZhbHVlUHJvcCB8fCAndmFsdWUnO1xyXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uKHYsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWRbaW5kZXhdID0gbW9kZWxWYWx1ZS5pbmRleE9mKHZbdmFsdWVQcm9wXSkgIT09IC0xO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRNb2RlbCgpIHtcclxuICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0gPSBbXTtcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkLCAoY2hlY2tib3gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0ucHVzaCh0by5vcHRpb25zW2luZGV4XVt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gIDxsYWJlbCBuZy1jbGFzcz1cXFwiZmMuJHZhbGlkID8gJycgOiAnaXMtaW52YWxpZC1sYWJlbCdcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICBpZD1cXFwie3tpZCArICdfJysgJGluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICBuZy1tb2RlbD1cXFwibXVsdGlDaGVja2JveC5jaGVja2VkWyRpbmRleF1cXFwiXFxyXFxuICAgICAgICAgICBuZy1jaGFuZ2U9XFxcIm11bHRpQ2hlY2tib3guY2hhbmdlKClcXFwiIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL211bHRpQ2hlY2tib3guaHRtbFxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRJbnB1dFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZElucHV0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJpbnB1dFwiLFxuICAgICAgdGVtcGxhdGU6IFwiPGlucHV0IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlwiLFxuICAgICAgd3JhcHBlcjogW1widGVtcGxhdGVMYWJlbFwiLCBcInRlbXBsYXRlSGFzRXJyb3JcIl0sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgdHlwZTogXCJ0ZXh0XCIgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2lucHV0LmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRJbnB1dFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRJbnB1dFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAnaW5wdXQnLFxyXG4gICAgICB0ZW1wbGF0ZTogJzxpbnB1dCBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiIG5nLWNsYXNzPVwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/IFxcJ2lzLWludmFsaWQtaW5wdXRcXCcgOiBcXCdcXCdcIj4nLFxyXG4gICAgICB3cmFwcGVyOiBbJ3RlbXBsYXRlTGFiZWwnLCAndGVtcGxhdGVIYXNFcnJvcicgXSxcclxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgdHlwZTogJ3RleHQnIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvaW5wdXQuanMiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFJhZGlvVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmFkaW8uaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXG4gICAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3JhZGlvLmpzIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRSYWRpb1R5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRSYWRpb1R5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xyXG4gICAgICBuYW1lOiAncmFkaW8nLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yYWRpby5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKGNoZWNrLm9iamVjdCksXHJcbiAgICAgICAgICBsYWJlbFByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIHZhbHVlUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvcmFkaW8uanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcInJhZGlvXFxcIiBuZy1jbGFzcz1cXFwiZmMuJHZhbGlkID8gJycgOiAnaXMtaW52YWxpZC1sYWJlbCdcXFwiPlxcclxcbiAgPGxhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxyXFxuICAgICAgICAgICBpZD1cXFwie3tpZCArICdfJysgJGluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgIG5nLXZhbHVlPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddXFxcIlxcclxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlxcclxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXHJcXG4gIDwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3R5cGVzL3JhZGlvLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJzZWxlY3RcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9zZWxlY3QuaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcInRlbXBsYXRlTGFiZWxcIiwgXCJ0ZW1wbGF0ZUhhc0Vycm9yXCJdLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxuICAgICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3NlbGVjdC5qcyIsImV4cG9ydCBkZWZhdWx0ICBuZ01vZHVsZSA9PiB7XHJcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFNlbGVjdFR5cGUpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRTZWxlY3RUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3NlbGVjdCcsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NlbGVjdC5odG1sJyksXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGFwaUNoZWNrOiBjaGVjayA9PiAoe1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZihjaGVjay5vYmplY3QpLFxyXG4gICAgICAgICAgbGFiZWxQcm9wOiBjaGVjay5zdHJpbmcub3B0aW9uYWwsXHJcbiAgICAgICAgICB2YWx1ZVByb3A6IGNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgICAgIGdyb3VwUHJvcDogY2hlY2suc3RyaW5nLm9wdGlvbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvc2VsZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWxlY3RcXHJcXG4gIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICBuZy1vcHRpb25zPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddIGFzIG9wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXSBncm91cCBieSBvcHRpb25bdG8uZ3JvdXBQcm9wIHx8ICdncm91cCddIGZvciBvcHRpb24gaW4gdG8ub3B0aW9uc1xcXCJcXHJcXG4gIG5nLWNsYXNzPVxcXCJvcHRpb25zLmZvcm1Db250cm9sLiRpbnZhbGlkICYmIG9wdGlvbnMuZm9ybUNvbnRyb2wuJHByaXN0aW5lID09IGZhbHNlID8gJ2lzLWludmFsaWQtaW5wdXQnIDogJydcXFwiPlxcclxcbjwvc2VsZWN0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90eXBlcy9zZWxlY3QuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRUZXh0YXJlYVR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZFRleHRhcmVhVHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgdGVtcGxhdGU6IFwiPHRleHRhcmVhIGNsYXNzPVxcXCJcXFwiIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXCIgKyBcIiBuZy1jbGFzcz1cXFwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/ICdpcy1pbnZhbGlkLWlucHV0JyA6ICcnXFxcIj48L3RleHRhcmVhPlwiLFxuICAgICAgd3JhcHBlcjogW1widGVtcGxhdGVMYWJlbFwiLCBcInRlbXBsYXRlSGFzRXJyb3JcIl0sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBuZ01vZGVsQXR0cnM6IHtcbiAgICAgICAgICByb3dzOiB7IGF0dHJpYnV0ZTogXCJyb3dzXCIgfSxcbiAgICAgICAgICBjb2xzOiB7IGF0dHJpYnV0ZTogXCJjb2xzXCIgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgcm93czogY2hlY2subnVtYmVyLm9wdGlvbmFsLFxuICAgICAgICAgICAgY29sczogY2hlY2subnVtYmVyLm9wdGlvbmFsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3RleHRhcmVhLmpzIiwiZXhwb3J0IGRlZmF1bHQgIG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5jb25maWcoYWRkVGV4dGFyZWFUeXBlKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkVGV4dGFyZWFUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcclxuICAgICAgbmFtZTogJ3RleHRhcmVhJyxcclxuICAgICAgdGVtcGxhdGU6ICc8dGV4dGFyZWEgY2xhc3M9XCJcIiBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiJyArIFxyXG4gICAgICAnIG5nLWNsYXNzPVwib3B0aW9ucy5mb3JtQ29udHJvbC4kaW52YWxpZCAmJiBvcHRpb25zLmZvcm1Db250cm9sLiRwcmlzdGluZSA9PSBmYWxzZSA/IFxcJ2lzLWludmFsaWQtaW5wdXRcXCcgOiBcXCdcXCdcIj48L3RleHRhcmVhPicsXHJcbiAgICAgIHdyYXBwZXI6IFsndGVtcGxhdGVMYWJlbCcsICd0ZW1wbGF0ZUhhc0Vycm9yJ10sXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XHJcbiAgICAgICAgICByb3dzOiB7YXR0cmlidXRlOiAncm93cyd9LFxyXG4gICAgICAgICAgY29sczoge2F0dHJpYnV0ZTogJ2NvbHMnfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXBpQ2hlY2s6IGNoZWNrID0+ICh7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIub3B0aW9uYWwsXHJcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXIub3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy90ZXh0YXJlYS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iajsgfTtcblxudmFyIGFkZG9ucyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9hZGRvbnNcIikpO1xuXG52YXIgZGVzY3JpcHRpb24gPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vZGVzY3JpcHRpb25cIikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBhZGRvbnMobmdNb2R1bGUpO1xuICBkZXNjcmlwdGlvbihuZ01vZHVsZSk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcbi8vICByZXF1aXJlKCcuL2Rlc2NyaXB0aW9uJykobmdNb2R1bGUpO1xuLy99O1xuLy9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ydW4vaW5kZXguanMiLCJpbXBvcnQgYWRkb25zIGZyb20gJy4vYWRkb25zJztcclxuaW1wb3J0IGRlc2NyaXB0aW9uIGZyb20gJy4vZGVzY3JpcHRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xyXG4gIGFkZG9ucyhuZ01vZHVsZSk7XHJcbiAgZGVzY3JpcHRpb24obmdNb2R1bGUpO1xyXG59O1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XHJcbi8vICByZXF1aXJlKCcuL2FkZG9ucycpKG5nTW9kdWxlKTtcclxuLy8gIHJlcXVpcmUoJy4vZGVzY3JpcHRpb24nKShuZ01vZHVsZSk7XHJcbi8vfTtcclxuLy9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vanNoaW50LWxvYWRlciEuL3J1bi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xuXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrKSB7XG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9hZGRvbnMuaHRtbFwiKTtcbiAgICB2YXIgYWRkb25DaGVja2VyID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIFwiY2xhc3NcIjogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgIHRleHQ6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zdHJpbmcub3B0aW9uYWxcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XG4gICAgdmFyIGFwaSA9IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay5zaGFwZSh7XG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxuICAgICAgICBhZGRvblJpZ2h0OiBhZGRvbkNoZWNrZXJcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIucHVzaChmdW5jdGlvbiAodGVtcGxhdGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09IFwiaW5wdXRcIiB8fCAhb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuYWRkb25MZWZ0ICYmICFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvblJpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xuICAgICAgcmV0dXJuIGFkZG9uVGVtcGxhdGUucmVwbGFjZShcIjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlwiLCB0ZW1wbGF0ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcnVuL2FkZG9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRBZGRvbnNNYW5pcHVsYXRvcihmb3JtbHlDb25maWcsIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjaykge1xyXG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKCcuL2FkZG9ucy5odG1sJyk7XHJcbiAgICBjb25zdCBhZGRvbkNoZWNrZXIgPSBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICBjbGFzczogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcclxuICAgICAgdGV4dDogZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnN0cmluZy5vcHRpb25hbFxyXG4gICAgfSkuc3RyaWN0Lm9wdGlvbmFsO1xyXG4gICAgY29uc3QgYXBpID0gZm9ybWx5Rm91bmRhdGlvbkFwaUNoZWNrLnNoYXBlKHtcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiBmb3JtbHlGb3VuZGF0aW9uQXBpQ2hlY2suc2hhcGUoe1xyXG4gICAgICAgIGFkZG9uTGVmdDogYWRkb25DaGVja2VyLFxyXG4gICAgICAgIGFkZG9uUmlnaHQ6IGFkZG9uQ2hlY2tlclxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uKHRlbXBsYXRlLCBvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09ICdpbnB1dCcgfHwgKCFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvbkxlZnQgJiYgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uUmlnaHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1seUZvdW5kYXRpb25BcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xyXG4gICAgICByZXR1cm4gYWRkb25UZW1wbGF0ZS5yZXBsYWNlKCc8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT4nLCB0ZW1wbGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vYWRkb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcInsnJzogdG8uYWRkb25MZWZ0IHx8IHRvLmFkZG9uUmlnaHR9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uTGVmdC5jbGFzc319XFxcIiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LmNsYXNzXFxcIj48L2k+XFxyXFxuICAgICAgICA8c3BhbiBuZy1pZj1cXFwidG8uYWRkb25MZWZ0LnRleHRcXFwiPnt7dG8uYWRkb25MZWZ0LnRleHR9fTwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uUmlnaHQuY2xhc3N9fVxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHQuY2xhc3NcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0LnRleHRcXFwiPnt7dG8uYWRkb25SaWdodC50ZXh0fX08L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ydW4vYWRkb25zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbikgJiYgb3B0aW9ucy50eXBlICE9PSBcInJhZGlvXCIgJiYgb3B0aW9ucy50eXBlICE9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlKVswXSk7XG4gICAgICAgIHZhciBtb2RlbEVscyA9IGFuZ3VsYXIuZWxlbWVudChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLW1vZGVsXVwiKSk7XG4gICAgICAgIGlmIChtb2RlbEVscykge1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcIjxwIGlkPVxcXCJcIiArIHNjb3BlLmlkICsgXCJfZGVzY3JpcHRpb25cXFwiXCIgKyBcImNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIlwiICsgXCJuZy1pZj1cXFwidG8uZGVzY3JpcHRpb25cXFwiPlwiICsgXCJ7e3RvLmRlc2NyaXB0aW9ufX1cIiArIFwiPC9wPlwiKVswXSk7XG4gICAgICAgICAgbW9kZWxFbHMuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiwgc2NvcGUuaWQgKyBcIl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3J1bi9kZXNjcmlwdGlvbi5qcyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcclxuICBuZ01vZHVsZS5ydW4oYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvcik7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uTWFuaXB1bGF0b3IoZm9ybWx5Q29uZmlnKSB7XHJcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5wdXNoKGZ1bmN0aW9uIGFyaWFEZXNjcmliZWRCeSh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcclxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uKSAmJlxyXG4gICAgICAgIG9wdGlvbnMudHlwZSAhPT0gJ3JhZGlvJyAmJiBvcHRpb25zLnR5cGUgIT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpWzBdKTtcclxuICAgICAgICB2YXIgbW9kZWxFbHMgPSBhbmd1bGFyLmVsZW1lbnQoZWwucXVlcnlTZWxlY3RvckFsbCgnW25nLW1vZGVsXScpKTtcclxuICAgICAgICBpZiAobW9kZWxFbHMpIHtcclxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcclxuICAgICAgICAgICAgJzxwIGlkPVwiJyArIHNjb3BlLmlkICsgJ19kZXNjcmlwdGlvblwiJyArXHJcbiAgICAgICAgICAgICdjbGFzcz1cImhlbHAtYmxvY2tcIicgK1xyXG4gICAgICAgICAgICAnbmctaWY9XCJ0by5kZXNjcmlwdGlvblwiPicgK1xyXG4gICAgICAgICAgICAne3t0by5kZXNjcmlwdGlvbn19JyArXHJcbiAgICAgICAgICAgICc8L3A+J1xyXG4gICAgICAgICAgKVswXSk7XHJcbiAgICAgICAgICBtb2RlbEVscy5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5Jywgc2NvcGUuaWQgKyAnX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL2Rlc2NyaXB0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==