/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/common-iform/dist/cjs/src/component/form/Button.js":
/*!*************************************************************************!*\
  !*** ./node_modules/common-iform/dist/cjs/src/component/form/Button.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst common_iutils_1 = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/esm/utils/index.js\");\nclass Button extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.$style = new common_iutils_1.IElement('style')\n            .setTextContent(`\n          .button {\n            height: 30px;\n            background: #00A6FF;\n            border: 0;\n            color: white;\n            transition: 0.2s;\n            cursor: pointer;\n            border-radius: 2px;\n            font-family : inherit;\n          }\n          .button.large {\n            height: 35px;\n          }\n          .button.small {\n            height: 25px;\n          }\n          \n          .button:hover {\n            background: #50C2FF;\n            color: white;\n          }\n        `)\n            .getElement();\n        this.$button = new common_iutils_1.IElement('input')\n            .setAttribute('class', 'button')\n            .setAttribute('type', 'button')\n            .getElement();\n        this.shadowRoot.append(this.$style, this.$button);\n    }\n    static get observedAttributes() {\n        return ['name', 'size', 'style'];\n    }\n    // connectedCallback() {\n    //   this.setAttribute('size', 'normal');\n    // }\n    attributeChangedCallback(name, oldValue, newValue) {\n        switch (name) {\n            case 'name':\n                this.$button.setAttribute('value', newValue);\n                break;\n            case 'size':\n                if (newValue === 'large') {\n                    this.$button.classList.remove('large');\n                    this.$button.classList.add('large');\n                }\n                else if (newValue === 'small') {\n                    this.$button.classList.remove('large');\n                    this.$button.classList.add('small');\n                }\n                else {\n                    this.$button.classList.remove('large');\n                    this.$button.classList.remove('small');\n                }\n                break;\n        }\n    }\n    setName(name) {\n        this.setAttribute('name', name);\n        return this;\n    }\n    setSize(size) {\n        this.setAttribute('size', size);\n        return this;\n    }\n}\nexports[\"default\"] = Button;\ncustomElements.define('inte-button', Button);\n\n\n//# sourceURL=webpack://common-ialert/./node_modules/common-iform/dist/cjs/src/component/form/Button.js?");

/***/ }),

/***/ "./node_modules/common-iform/dist/cjs/src/component/form/Input.js":
/*!************************************************************************!*\
  !*** ./node_modules/common-iform/dist/cjs/src/component/form/Input.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst common_iutils_1 = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/esm/utils/index.js\");\nclass Input extends HTMLInputElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.$input = document.createElement('input');\n        this.$style = new common_iutils_1.IElement('style')\n            .setTextContent(`\n        input {\n          height: 30px;\n          min-width: 120px;\n          border-radius: 2px;\n          border: 1px solid #00A6FF;\n        }\n      `)\n            .getElement();\n        this.shadowRoot.append(this.$style, this.$input);\n    }\n    static get observedAttributes() {\n        return ['type', 'style'];\n    }\n    attributeChangedCallback(name, oldValue, newValue) {\n        switch (name) {\n            case 'type':\n                this.$input.setAttribute('type', newValue);\n                break;\n        }\n    }\n}\nexports[\"default\"] = Input;\ncustomElements.define('inte-input', Input, { extends: 'input' });\n\n\n//# sourceURL=webpack://common-ialert/./node_modules/common-iform/dist/cjs/src/component/form/Input.js?");

/***/ }),

/***/ "./node_modules/common-iform/dist/cjs/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/common-iform/dist/cjs/src/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Input = exports.Button = void 0;\nconst Button_1 = __webpack_require__(/*! ./component/form/Button */ \"./node_modules/common-iform/dist/cjs/src/component/form/Button.js\");\nexports.Button = Button_1.default;\nconst Input_1 = __webpack_require__(/*! ./component/form/Input */ \"./node_modules/common-iform/dist/cjs/src/component/form/Input.js\");\nexports.Input = Input_1.default;\n\n\n//# sourceURL=webpack://common-ialert/./node_modules/common-iform/dist/cjs/src/index.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/esm/utils/IElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/common-iutils/dist/esm/utils/IElement.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IElement)\n/* harmony export */ });\nclass IElement {\n    constructor(tag) {\n        this.$element = document.createElement(tag);\n    }\n    setAttribute(name, attribute) {\n        this.$element.setAttribute(name, attribute);\n        return this;\n    }\n    append(...nodes) {\n        this.$element.append(...nodes);\n        return this;\n    }\n    appendChild(node) {\n        this.$element.append(node);\n        return this;\n    }\n    getElement() {\n        return this.$element;\n    }\n    clearChildren() {\n        this.$element.replaceChildren();\n        return this;\n    }\n    setParent(node) {\n        node.appendChild(this.$element);\n        return this;\n    }\n    setTextContent(text) {\n        this.$element.textContent = text;\n        return this;\n    }\n}\n;\n\n\n//# sourceURL=webpack://common-ialert/./node_modules/common-iutils/dist/esm/utils/IElement.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/esm/utils/IStyle.js":
/*!*************************************************************!*\
  !*** ./node_modules/common-iutils/dist/esm/utils/IStyle.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IStyle)\n/* harmony export */ });\nclass IStyle {\n    constructor($element) {\n        this.$element = $element;\n    }\n    width(value) {\n        this.$element.style.width = value;\n        return this;\n    }\n    height(value) {\n        this.$element.style.height = value;\n        return this;\n    }\n    color(value) {\n        this.$element.style.color = value;\n        return this;\n    }\n    left(value) {\n        this.$element.style.left = value;\n        return this;\n    }\n    right(value) {\n        this.$element.style.right = value;\n        return this;\n    }\n    top(value) {\n        this.$element.style.top = value;\n        return this;\n    }\n    bottom(value) {\n        this.$element.style.bottom = value;\n        return this;\n    }\n    transform(value) {\n        this.$element.style.transform = value;\n        return this;\n    }\n    opacity(value) {\n        this.$element.style.opacity = value;\n        return this;\n    }\n    background(value) {\n        this.$element.style.background = value;\n        return this;\n    }\n    display(value) {\n        this.$element.style.display = value;\n        return this;\n    }\n    flexDirection(value) {\n        this.$element.style.flexDirection = value;\n        return this;\n    }\n    justifyContent(value) {\n        this.$element.style.justifyContent = value;\n        return this;\n    }\n    alignItems(value) {\n        this.$element.style.alignItems = value;\n        return this;\n    }\n    margin(value) {\n        this.$element.style.margin = value;\n        return this;\n    }\n    marginTop(value) {\n        this.$element.style.marginTop = value;\n        return this;\n    }\n    marginBottom(value) {\n        this.$element.style.marginBottom = value;\n        return this;\n    }\n    marginLeft(value) {\n        this.$element.style.marginLeft = value;\n        return this;\n    }\n    marginRight(value) {\n        this.$element.style.marginRight = value;\n        return this;\n    }\n    padding(value) {\n        this.$element.style.padding = value;\n        return this;\n    }\n    paddingTop(value) {\n        this.$element.style.paddingTop = value;\n        return this;\n    }\n    paddingBottom(value) {\n        this.$element.style.paddingBottom = value;\n        return this;\n    }\n    paddingRight(value) {\n        this.$element.style.paddingRight = value;\n        return this;\n    }\n    paddingLeft(value) {\n        this.$element.style.paddingLeft = value;\n        return this;\n    }\n    border(value) {\n        this.$element.style.border = value;\n        return this;\n    }\n    borderTop(value) {\n        this.$element.style.borderTop = value;\n        return this;\n    }\n    borderBottom(value) {\n        this.$element.style.borderBottom = value;\n        return this;\n    }\n    borderRight(value) {\n        this.$element.style.borderRight = value;\n        return this;\n    }\n    borderLeft(value) {\n        this.$element.style.borderLeft = value;\n        return this;\n    }\n    borderRadius(value) {\n        this.$element.style.borderRadius = value;\n        return this;\n    }\n    transition(value) {\n        this.$element.style.transition = value;\n        return this;\n    }\n    position(value) {\n        this.$element.style.position = value;\n        return this;\n    }\n    minWidth(value) {\n        this.$element.style.minWidth = value;\n        return this;\n    }\n    minHeight(value) {\n        this.$element.style.minHeight = value;\n        return this;\n    }\n    boxShadow(value) {\n        this.$element.style.boxShadow = value;\n        return this;\n    }\n    transformOrigin(value) {\n        this.$element.style.transformOrigin = value;\n        return this;\n    }\n    cursor(value) {\n        this.$element.style.cursor = value;\n        return this;\n    }\n    whiteSpace(value) {\n        this.$element.style.whiteSpace = value;\n        return this;\n    }\n    setStyle(value) {\n        this.$element.setAttribute('style', value);\n        return this;\n    }\n    getElement() {\n        return this.$element;\n    }\n}\n\n\n//# sourceURL=webpack://common-ialert/./node_modules/common-iutils/dist/esm/utils/IStyle.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/esm/utils/index.js":
/*!************************************************************!*\
  !*** ./node_modules/common-iutils/dist/esm/utils/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IElement\": () => (/* reexport safe */ _IElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"IStyle\": () => (/* reexport safe */ _IStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _IElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IElement */ \"./node_modules/common-iutils/dist/esm/utils/IElement.js\");\n/* harmony import */ var _IStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IStyle */ \"./node_modules/common-iutils/dist/esm/utils/IStyle.js\");\n\n\n\n\n\n//# sourceURL=webpack://common-ialert/./node_modules/common-iutils/dist/esm/utils/index.js?");

/***/ }),

/***/ "./website/index.css":
/*!***************************!*\
  !*** ./website/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://common-ialert/./website/index.css?");

/***/ }),

/***/ "./src/component/alert/Alert.ts":
/*!**************************************!*\
  !*** ./src/component/alert/Alert.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Alert)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/esm/utils/index.js\");\n\nclass Alert extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        this.$content = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('span')\n            .setAttribute('class', 'content')\n            .getElement();\n        this.$container = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div')\n            .setAttribute('class', 'container')\n            .append(this.$content)\n            .getElement();\n        this.$middle = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div')\n            .setAttribute('class', 'middle')\n            .append(this.$container)\n            .getElement();\n        this.$style = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('style')\n            .setTextContent(`\n        .middle {\n          position: fixed;\n          top: 0;\n          left: 0;\n          right: 0;\n    \n          display: flex;\n          justify-content: center;\n        }\n        .container {\n          position: absolute;\n          top: 15px;\n          transform: scale(1, 0);\n          padding: 10px;\n          transition: 0.3s;\n          transform-origin: 50% top;\n          min-width: 200px;\n          font-weight: bold;\n    \n          background: white;\n          border: 1px solid #eee;\n          border-radius: 2px;\n          box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, .4);\n    \n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        .content {\n          font-size: 14px;\n        }\n        `)\n            .getElement();\n        this.shadowRoot.append(this.$style, this.$middle);\n        document.body.appendChild(this);\n    }\n    static get observedAttributes() {\n        return ['message', 'type', 'visible', 'style'];\n    }\n    connectedCallback() {\n    }\n    attributeChangedCallback(name, oldValue, newValue) {\n        switch (name) {\n            case 'message':\n                this.$content.textContent = newValue;\n                break;\n            case 'type':\n                if (newValue === 'info') {\n                    this.$content.style.color = '#00A6FF';\n                }\n                else if (newValue === 'error') {\n                    this.$content.style.color = 'crimson';\n                }\n                break;\n            case 'visible':\n                if (newValue === 'true') {\n                    this.$container.style.transform = 'scale(1, 1)';\n                }\n                else {\n                    this.$container.style.transform = 'scale(1, 0)';\n                }\n                break;\n        }\n    }\n    setMessage(message) {\n        this.setAttribute('message', message);\n        return this;\n    }\n    type(type) {\n        this.setAttribute('type', type);\n        return this;\n    }\n    visible(visible) {\n        this.setAttribute('visible', visible);\n    }\n}\ncustomElements.define('inte-message', Alert);\n\n\n//# sourceURL=webpack://common-ialert/./src/component/alert/Alert.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Alert\": () => (/* reexport safe */ _component_alert_Alert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _component_alert_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/alert/Alert */ \"./src/component/alert/Alert.ts\");\n\n\n\n\n//# sourceURL=webpack://common-ialert/./src/index.ts?");

/***/ }),

/***/ "./website/app.ts":
/*!************************!*\
  !*** ./website/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./website/index.css\");\n/* harmony import */ var _messageExample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageExample */ \"./website/messageExample.ts\");\n\n\n(0,_messageExample__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://common-ialert/./website/app.ts?");

/***/ }),

/***/ "./website/messageExample.ts":
/*!***********************************!*\
  !*** ./website/messageExample.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeMessageExample)\n/* harmony export */ });\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src */ \"./src/index.ts\");\n/* harmony import */ var common_iform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-iform */ \"./node_modules/common-iform/dist/cjs/src/index.js\");\n\n\nfunction makeMessageExample() {\n    new common_iform__WEBPACK_IMPORTED_MODULE_1__.Button();\n    const $setMessageButton = document.querySelector('#messageSetMessage');\n    const $visibleTrueButton = document.querySelector('#messageVisibleTrue');\n    const $visibleFalseButton = document.querySelector('#messageVisibleFalse');\n    const $messageTypeInfo = document.querySelector('#messageTypeInfo');\n    const $messageTypeError = document.querySelector('#messageTypeError');\n    const message = new _src__WEBPACK_IMPORTED_MODULE_0__.Alert();\n    $setMessageButton.addEventListener('click', () => {\n        message.setMessage('This is alert');\n    });\n    $visibleTrueButton.addEventListener('click', () => {\n        message.visible(true);\n    });\n    $visibleFalseButton.addEventListener('click', () => {\n        message.visible(false);\n    });\n    $messageTypeInfo.addEventListener('click', () => {\n        message.type('info');\n    });\n    $messageTypeError.addEventListener('click', () => {\n        message.type('error');\n    });\n}\n;\n\n\n//# sourceURL=webpack://common-ialert/./website/messageExample.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./website/app.ts");
/******/ 	
/******/ })()
;