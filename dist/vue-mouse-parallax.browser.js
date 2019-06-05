!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueMouseParallax=factory():root.VueMouseParallax=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports,__webpack_require__){__webpack_require__(9);var Component=__webpack_require__(1)(__webpack_require__(7),__webpack_require__(11),"data-v-9f140bfc",null);module.exports=Component.exports},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports,__webpack_require__){__webpack_require__(8);var Component=__webpack_require__(1)(__webpack_require__(6),__webpack_require__(10),"data-v-569ff987",null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";function getPosition(el){var box=el.getBoundingClientRect();return{y:box.top,x:box.left}}__webpack_exports__.a=getPosition},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__components_ParallaxContainer_vue__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_0__components_ParallaxContainer_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ParallaxContainer_vue__),__WEBPACK_IMPORTED_MODULE_1__components_ParallaxElement_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_1__components_ParallaxElement_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ParallaxElement_vue__);__webpack_require__.d(__webpack_exports__,"ParallaxContainer",function(){return __WEBPACK_IMPORTED_MODULE_0__components_ParallaxContainer_vue___default.a}),__webpack_require__.d(__webpack_exports__,"ParallaxElement",function(){return __WEBPACK_IMPORTED_MODULE_1__components_ParallaxElement_vue___default.a}),__webpack_exports__.default={install:function(Vue){Vue.component("parallax-container",__WEBPACK_IMPORTED_MODULE_0__components_ParallaxContainer_vue___default.a),Vue.component("parallax-element",__WEBPACK_IMPORTED_MODULE_1__components_ParallaxElement_vue___default.a)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";function throttle(callback,delay){var last,timer;return function(){var context=this,now=+new Date,args=arguments;last&&now<last+delay?(clearTimeout(timer),timer=setTimeout(function(){last=now,callback.apply(context,args)},delay)):(last=now,callback.apply(context,args))}}__webpack_exports__.a=throttle},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__ParallaxElement_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0__ParallaxElement_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ParallaxElement_vue__),__WEBPACK_IMPORTED_MODULE_1__throttle__=__webpack_require__(5);__webpack_exports__.default={data:function(){return{mouseX:0,mouseY:0,hovering:!1}},methods:{getMousePosition:__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__throttle__.a)(function(e){var _this=this;this.$children.map(function(child){0!=child.$options.propsData.parallaxStrength&&(_this.hovering=!0)});this.mouseX=e.clientX,this.mouseY=e.clientY,this.hovering},100),parallaxStart:function(){this.hovering=!0;this.$children.map(function(child){child.isHovering=!0})},parallaxStop:function(){this.hovering=!1;this.$children.map(function(child){child.isHovering=!1})}},mounted:function(){},components:{parallaxElement:__WEBPACK_IMPORTED_MODULE_0__ParallaxElement_vue___default.a}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__getPosition__=__webpack_require__(3);__webpack_exports__.default={props:["parallaxStrength","isHover","type"],mounted:function(){this.width=this.$refs.parallaxSection.offsetWidth,this.height=this.$refs.parallaxSection.offsetHeight,this.offsetX=parseInt(this.$refs.parallaxSection.offsetLeft),this.offsetY=parseInt(this.$refs.parallaxSection.getBoundingClientRect().top+document.documentElement.scrollTop),this.$emit("parallaxStrengthValue",this.parallaxStrength)},data:function(){return{width:0,height:0,offsetX:0,offsetY:0,movementX:0,movementY:0,isHovering:!1}},computed:{transformParallax:function(){var mouseX=this.$parent.mouseX,mouseY=this.$parent.mouseY;if(!1!==this.isHovering){if("translation"===this.type){var relX=mouseX-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPosition__.a)(this.$refs.parallaxSection).x,relY=mouseY-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPosition__.a)(this.$refs.parallaxSection).y;return this.movementX=(relX-this.width/2)/this.width*this.parallaxStrength,this.movementY=(relY-this.height/2)/this.height*this.parallaxStrength,{transform:"translateX("+this.movementX+"px) translateY("+this.movementY+"px)"}}if("rotation"===this.type){var _relX=mouseX-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPosition__.a)(this.$refs.parallaxSection).x,_relY=mouseY-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPosition__.a)(this.$refs.parallaxSection).y;this.movementX=(_relX-this.width/2)/this.width*this.parallaxStrength,this.movementY=(_relY-this.height/2)/this.height*this.parallaxStrength;return{transform:"rotateZ("+(this.movementX+this.movementY)+"deg)"}}if("depth"===this.type){var _relX2=mouseX-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPosition__.a)(this.$refs.parallaxSection).x,_relY2=mouseY-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPosition__.a)(this.$refs.parallaxSection).y;return this.movementX=(_relX2-this.width/2)/this.width*Math.abs(this.parallaxStrength),this.movementY=(_relY2-this.height/1.5)/this.height*Math.abs(this.parallaxStrength),{transform:"rotateX("+-this.movementY+"deg) rotateY("+this.movementX+"deg) translateZ("+2*this.parallaxStrength+"px) "}}}}},created:function(){}}},function(module,exports){},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement;return(_vm._self._c||_h)("div",{staticClass:"parallax-container",on:{mousemove:_vm.getMousePosition,mouseout:_vm.parallaxStop,mouseover:_vm.parallaxStart}},[_vm._t("default")],2)},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement;return(_vm._self._c||_h)("div",{ref:"parallaxSection",staticClass:"parallax-element",style:_vm.transformParallax},[_vm._t("default")],2)},staticRenderFns:[]}}])});