(window.webpackJsonptaro_ui_test=window.webpackJsonptaro_ui_test||[]).push([[26],{"207":function(e,n,t){var a=t(208);"string"==typeof a&&(a=[[e.i,a,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};t(3)(a,l);a.locals&&(e.exports=a.locals)},"208":function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"@charset \"UTF-8\";\n/**\n * Mixins\n */\n/* library */\n/**\n * 元素居中定位\n */\n/**\n * @example scss\n *\n * .element {\n *   @include clearfix;\n * }\n *\n * // CSS Output\n * .element::after {\n *   clear: both;\n *   content: '';\n *   display: block;\n * }\n */\n/**\n * 通用的遮罩\n */\n/**\n * Mixes a color with black. It's different from darken()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amount of black to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: shade(#ffbb52, 60%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #664a20;\n *   }\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* Flex Item */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 点击态\n */\n/**\n * 禁止态\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 设置placeholder 颜色\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n.at-flex {\n  display: -webkit-flex;\n  display: flex;\n  width: 100%; }\n  .at-flex__direction--row {\n    -webkit-flex-direction: row;\n            flex-direction: row; }\n  .at-flex__direction--column {\n    -webkit-flex-direction: column;\n            flex-direction: column; }\n  .at-flex__direction--row-reverse {\n    -webkit-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  .at-flex__direction--column-reverse {\n    -webkit-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  .at-flex__wrap--no-wrap {\n    -webkit-flex-wrap: nowrap;\n            flex-wrap: nowrap; }\n  .at-flex__wrap--wrap {\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap; }\n  .at-flex__wrap--wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse;\n            flex-wrap: wrap-reverse; }\n  .at-flex__align--start {\n    -webkit-align-items: flex-start;\n            align-items: flex-start;\n    -webkit-box-align: start; }\n  .at-flex__align--end {\n    -webkit-align-items: flex-end;\n            align-items: flex-end;\n    -webkit-box-align: end; }\n  .at-flex__align--center {\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-align: center; }\n  .at-flex__align--stretch {\n    -webkit-align-items: stretch;\n            align-items: stretch;\n    -webkit-box-align: stretch; }\n  .at-flex__align--baseline {\n    -webkit-align-items: baseline;\n            align-items: baseline;\n    -webkit-box-align: baseline; }\n  .at-flex__justify--start {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-box-pack: start; }\n  .at-flex__justify--end {\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    -webkit-box-pack: end; }\n  .at-flex__justify--center {\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-pack: center; }\n  .at-flex__justify--between {\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-box-pack: justify; }\n  .at-flex__justify--around {\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n    -webkit-box-pack: space-around; }\n  .at-flex__align-content--start {\n    -webkit-align-content: flex-start;\n            align-content: flex-start; }\n  .at-flex__align-content--end {\n    -webkit-align-content: flex-end;\n            align-content: flex-end; }\n  .at-flex__align-content--center {\n    -webkit-align-content: center;\n            align-content: center; }\n  .at-flex__align-content--between {\n    -webkit-align-content: space-between;\n            align-content: space-between; }\n  .at-flex__align-content--around {\n    -webkit-align-content: space-around;\n            align-content: space-around; }\n  .at-flex__align-content--stretch {\n    -webkit-align-content: stretch;\n            align-content: stretch; }\n",""])},"209":function(e,n,t){var a=t(210);"string"==typeof a&&(a=[[e.i,a,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};t(3)(a,l);a.locals&&(e.exports=a.locals)},"210":function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"@charset \"UTF-8\";\n/**\n * Mixins\n */\n/* library */\n/**\n * 元素居中定位\n */\n/**\n * @example scss\n *\n * .element {\n *   @include clearfix;\n * }\n *\n * // CSS Output\n * .element::after {\n *   clear: both;\n *   content: '';\n *   display: block;\n * }\n */\n/**\n * 通用的遮罩\n */\n/**\n * Mixes a color with black. It's different from darken()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amount of black to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: shade(#ffbb52, 60%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #664a20;\n *   }\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* Flex Item */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 点击态\n */\n/**\n * 禁止态\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 设置placeholder 颜色\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n.at-flex__item {\n  -webkit-flex: 1;\n          flex: 1;\n  -webkit-box-flex: 1;\n  width: 100%;\n  display: block;\n  word-break: keep-all;\n  box-sizing: border-box; }\n  .at-flex__item-size--1 {\n    -webkit-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    -webkit-box-flex: 0;\n    max-width: 8.33333%; }\n  .at-flex__item-offset--1 {\n    margin-left: 8.33333%; }\n  .at-flex__item-size--2 {\n    -webkit-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    -webkit-box-flex: 0;\n    max-width: 16.66667%; }\n  .at-flex__item-offset--2 {\n    margin-left: 16.66667%; }\n  .at-flex__item-size--3 {\n    -webkit-flex: 0 0 25%;\n            flex: 0 0 25%;\n    -webkit-box-flex: 0;\n    max-width: 25%; }\n  .at-flex__item-offset--3 {\n    margin-left: 25%; }\n  .at-flex__item-size--4 {\n    -webkit-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    -webkit-box-flex: 0;\n    max-width: 33.33333%; }\n  .at-flex__item-offset--4 {\n    margin-left: 33.33333%; }\n  .at-flex__item-size--5 {\n    -webkit-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    -webkit-box-flex: 0;\n    max-width: 41.66667%; }\n  .at-flex__item-offset--5 {\n    margin-left: 41.66667%; }\n  .at-flex__item-size--6 {\n    -webkit-flex: 0 0 50%;\n            flex: 0 0 50%;\n    -webkit-box-flex: 0;\n    max-width: 50%; }\n  .at-flex__item-offset--6 {\n    margin-left: 50%; }\n  .at-flex__item-size--7 {\n    -webkit-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    -webkit-box-flex: 0;\n    max-width: 58.33333%; }\n  .at-flex__item-offset--7 {\n    margin-left: 58.33333%; }\n  .at-flex__item-size--8 {\n    -webkit-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    -webkit-box-flex: 0;\n    max-width: 66.66667%; }\n  .at-flex__item-offset--8 {\n    margin-left: 66.66667%; }\n  .at-flex__item-size--9 {\n    -webkit-flex: 0 0 75%;\n            flex: 0 0 75%;\n    -webkit-box-flex: 0;\n    max-width: 75%; }\n  .at-flex__item-offset--9 {\n    margin-left: 75%; }\n  .at-flex__item-size--10 {\n    -webkit-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    -webkit-box-flex: 0;\n    max-width: 83.33333%; }\n  .at-flex__item-offset--10 {\n    margin-left: 83.33333%; }\n  .at-flex__item-size--11 {\n    -webkit-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    -webkit-box-flex: 0;\n    max-width: 91.66667%; }\n  .at-flex__item-offset--11 {\n    margin-left: 91.66667%; }\n  .at-flex__item-size--12 {\n    -webkit-flex: 0 0 100%;\n            flex: 0 0 100%;\n    -webkit-box-flex: 0;\n    max-width: 100%; }\n  .at-flex__item-offset--12 {\n    margin-left: 100%; }\n  .at-flex__item-align--top {\n    -webkit-align-self: flex-start;\n            align-self: flex-start; }\n  .at-flex__item-align--bottom {\n    -webkit-align-self: flex-end;\n            align-self: flex-end; }\n  .at-flex__item-align--center {\n    -webkit-align-self: center;\n            align-self: center; }\n  .at-flex__item--auto {\n    max-width: initial; }\n  .at-flex__item--wrap {\n    word-wrap: break-word; }\n",""])},"211":function(e,n,t){var a=t(212);"string"==typeof a&&(a=[[e.i,a,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};t(3)(a,l);a.locals&&(e.exports=a.locals)},"212":function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'@charset "UTF-8";\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It\'s different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n.flex-page .at-flex {\n  margin-bottom: 0.85333rem; }\n  .flex-page .at-flex__item {\n    padding: 0.384rem 0.34133rem;\n    color: #FFF;\n    font-size: 0.59733rem;\n    text-align: center; }\n    .flex-page .at-flex__item:nth-child(odd) {\n      background-color: #78A4F4; }\n    .flex-page .at-flex__item:nth-child(even) {\n      background-color: #93b6f6; }\n',""])},"34":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.default=void 0;var a=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}(),l=(_interopRequireDefault(t(1)),_interopRequireDefault(t(0))),i=t(10),r=_interopRequireDefault(t(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}t(207),t(209),t(211);var o=function(e){function FlexPage(){var e,n,t;!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,FlexPage);for(var a=arguments.length,l=Array(a),i=0;i<a;i++)l[i]=arguments[i];return n=t=_possibleConstructorReturn(this,(e=FlexPage.__proto__||Object.getPrototypeOf(FlexPage)).call.apply(e,[this].concat(l))),t.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(t,n)}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(FlexPage,l.default.Component),a(FlexPage,[{"key":"render","value":function render(){return l.default.createElement(i.View,{"className":"page flex-page"},l.default.createElement(r.default,{"title":"Flex 弹性布局"}),l.default.createElement(i.View,{"className":"doc-body"},l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"基本案例"),l.default.createElement(i.View,{"className":"panel__content"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex"},l.default.createElement(i.View,{"className":"at-flex__item"},"A"),l.default.createElement(i.View,{"className":"at-flex__item"},"B"),l.default.createElement(i.View,{"className":"at-flex__item"},"C"))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"定义长度"),l.default.createElement(i.View,{"className":"panel__content"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--3"},"A"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--6"},"B"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--2"},"C"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--1"},"D"))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"定义偏移"),l.default.createElement(i.View,{"className":"panel__content"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-offset--2"},"A"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-offset--3"},"B"),l.default.createElement(i.View,{"className":"at-flex__item"},"C"))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"超出换行"),l.default.createElement(i.View,{"className":"panel__content"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex at-flex__wrap--wrap"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--4"},"A"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--4"},"B"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--4"},"C"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--4"},"D"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--4"},"E"))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"宽度根据内容撑开"),l.default.createElement(i.View,{"className":"panel__content"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--1 at-flex__item--auto"},"被内容撑开"),l.default.createElement(i.View,{"className":"at-flex__item"},"B"))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"内容自动换行"),l.default.createElement(i.View,{"className":"panel__content"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--1 at-flex__item--wrap"},"被内容撑开"),l.default.createElement(i.View,{"className":"at-flex__item"},"B"))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"侧轴方向的对齐方式"),l.default.createElement(i.View,{"className":"panel__content"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex"},l.default.createElement(i.View,{"style":"height:100px","className":"at-flex__item"},"A"),l.default.createElement(i.View,{"className":"at-flex__item"},"默认对齐方式 -- stretch"))),l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex at-flex__align--start"},l.default.createElement(i.View,{"style":"height:100px","className":"at-flex__item"},"B"),l.default.createElement(i.View,{"className":"at-flex__item"},"顶部对齐 -- start"))),l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex at-flex__align--center"},l.default.createElement(i.View,{"style":"height:100px","className":"at-flex__item"},"C"),l.default.createElement(i.View,{"className":"at-flex__item"},"居中对齐 -- center"))),l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex at-flex__align--end"},l.default.createElement(i.View,{"style":"height:100px","className":"at-flex__item"},"D"),l.default.createElement(i.View,{"className":"at-flex__item"},"底部对齐 -- end"))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"主轴方向的排列方式"),l.default.createElement(i.View,{"className":"panel__content"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"默认"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"Start"))),l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex at-flex__justify--end"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"底部排列"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"End"))),l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex at-flex__justify--center"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"居中排列"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"Center"))),l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex at-flex__justify--between"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"左右排列"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"Between"))),l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"at-flex at-flex__justify--around"},l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"平均排列"),l.default.createElement(i.View,{"className":"at-flex__item at-flex__item-size--5"},"Around")))))))}}]),FlexPage}();n.default=o},"46":function(e,n,t){e.exports=t(47)()},"47":function(e,n,t){"use strict";var a=t(48);function emptyFunction(){}e.exports=function(){function shim(e,n,t,l,i,r){if(r!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"49":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.default=void 0;var a=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}(),l=t(1),i=_interopRequireDefault(t(0)),r=_interopRequireDefault(t(46)),o=t(10);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(51);var c=function(e){function DocsHeader(){return function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(DocsHeader,l.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(o.View,{"className":"doc-header"},i.default.createElement(o.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();n.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":r.default.string}},"51":function(e,n,t){var a=t(52);"string"==typeof a&&(a=[[e.i,a,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};t(3)(a,l);a.locals&&(e.exports=a.locals)},"52":function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".doc-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 1.28rem;\n  height: 3.84rem; }\n  .doc-header__title {\n    position: relative;\n    height: 1.92rem;\n    color: #333;\n    font-size: 0.85333rem;\n    font-weight: bold; }\n    .doc-header__title::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      display: inline-block;\n      width: 2.56rem;\n      height: 2PX;\n      border-radius: 1PX;\n      background-color: #6190E8; }\n",""])}}]);