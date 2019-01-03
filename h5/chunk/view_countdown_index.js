(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"157":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(63)),a=n(62),u=_interopRequireDefault(n(65)),s=_interopRequireDefault(n(64)),l=_interopRequireDefault(n(158));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function toSeconds(e,t,n,o){return 60*e*60*24+60*t*60+60*n+o},f=function(e){function AtCountdown(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtCountdown);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtCountdown.__proto__||Object.getPrototypeOf(AtCountdown)).apply(this,arguments)),t=e.props,n=t.day,o=t.hours,r=t.minutes,i=t.seconds;return e.seconds=c(n,o,r,i),e.state={"day":n,"hours":o,"minutes":r,"seconds":i},e.timer=null,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtCountdown,s.default),o(AtCountdown,[{"key":"setTimer","value":function setTimer(){this.timer||this.countdonwn()}},{"key":"clearTimer","value":function clearTimer(){this.timer&&(clearTimeout(this.timer),this.timer=null)}},{"key":"countdonwn","value":function countdonwn(){var e=this,t=0,n=0,o=0,r=0;if(this.seconds>0&&(t=Math.floor(this.seconds/86400),n=Math.floor(this.seconds/3600)-24*t,o=Math.floor(this.seconds/60)-24*t*60-60*n,r=Math.floor(this.seconds)-24*t*60*60-60*n*60-60*o),this.setState({"day":t,"hours":n,"minutes":o,"seconds":r}),this.seconds--,this.seconds<0)return this.clearTimer(),void this.props.onTimeUp();this.timer=setTimeout(function(){e.countdonwn()},1e3)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=this.props;if(e.day!==t.day||e.hours!==t.hours||e.minutes!==t.minutes||e.seconds!==t.seconds){var n=e.day,o=e.hours,r=e.minutes,i=e.seconds;this.seconds=c(n,o,r,i),this.clearTimer(),this.setTimer()}}},{"key":"componentDidMount","value":function componentDidMount(){this.setTimer()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearTimer()}},{"key":"componentDidHide","value":function componentDidHide(){this.clearTimer()}},{"key":"componentDidShow","value":function componentDidShow(){this.setTimer()}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.customStyle,o=e.format,i=e.isShowDay,s=e.isCard,c=this.state,f=c.day,p=c.hours,d=c.minutes,m=c.seconds;return r.default.createElement(a.View,{"className":(0,u.default)({"at-countdown":!0,"at-countdown--card":s},t),"style":n},i&&r.default.createElement(l.default,{"num":f,"separator":o.day}),r.default.createElement(l.default,{"num":p,"separator":o.hours}),r.default.createElement(l.default,{"num":d,"separator":o.minutes}),r.default.createElement(l.default,{"num":m,"separator":o.seconds}))}}]),AtCountdown}();t.default=f,f.defaultProps={"customStyle":"","className":"","isCard":!1,"isShowDay":!1,"format":{"day":"天","hours":"时","minutes":"分","seconds":"秒"},"day":0,"hours":0,"minutes":0,"seconds":0,"onTimeUp":function onTimeUp(){}},f.propTypes={"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string]),"isCard":i.default.bool,"isShowDay":i.default.bool,"format":i.default.object,"day":i.default.number,"hours":i.default.number,"minutes":i.default.number,"seconds":i.default.number,"onTimeUp":i.default.func}},"158":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(63)),a=n(62),u=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function AtCountdownItem(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtCountdownItem),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtCountdownItem.__proto__||Object.getPrototypeOf(AtCountdownItem)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtCountdownItem,u.default),o(AtCountdownItem,[{"key":"formatNum","value":function formatNum(e){return e<=9?"0"+e:""+e}},{"key":"render","value":function render(){var e=this.props,t=e.num,n=e.separator;return r.default.createElement(a.View,{"className":"at-countdown__item"},r.default.createElement(a.View,{"className":"at-countdown__time-box"},r.default.createElement(a.Text,{"className":"at-countdown__time"},this.formatNum(t))),r.default.createElement(a.Text,{"className":"at-countdown__separator"},n))}}]),AtCountdownItem}();s.defaultProps={"num":0,"separator":":"},s.propTypes={"num":i.default.number.isRequired,"separator":i.default.string},t.default=s},"159":function(e,t,n){},"25":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(2)),a=n(62),u=_interopRequireDefault(n(157)),s=_interopRequireDefault(n(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(159);var l=function(e){function CountDownPage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CountDownPage);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=CountDownPage.__proto__||Object.getPrototypeOf(CountDownPage)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CountDownPage,r.default.Component),o(CountDownPage,[{"key":"onTimeUp","value":function onTimeUp(){r.default.showToast({"title":"时间到","icon":"success","duration":2e3})}},{"key":"render","value":function render(){return i.default.createElement(a.View,{"className":"page"},i.default.createElement(s.default,{"title":"CountDown 倒计时"}),i.default.createElement(a.View,{"className":"doc-body"},i.default.createElement(a.View,{"className":"panel"},i.default.createElement(a.View,{"className":"panel__title"},"一般用法"),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(u.default,{"minutes":1,"seconds":10})),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(u.default,{"isShowDay":!0,"hours":1,"minutes":1,"seconds":10}))),i.default.createElement(a.View,{"className":"panel"},i.default.createElement(a.View,{"className":"panel__title"},"自定义格式化"),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(u.default,{"format":{"hours":":","minutes":":","seconds":""},"minutes":1,"seconds":10}))),i.default.createElement(a.View,{"className":"panel"},i.default.createElement(a.View,{"className":"panel__title"},"卡片式"),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(u.default,{"isCard":!0,"minutes":1,"seconds":10})),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(u.default,{"isCard":!0,"isShowDay":!0,"day":1,"minutes":1,"seconds":10,"format":{"day":"天","hours":":","minutes":":","seconds":""}}))),i.default.createElement(a.View,{"className":"panel"},i.default.createElement(a.View,{"className":"panel__title"},"自定义倒计时回调事件"),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(u.default,{"format":{"hours":":","minutes":":","seconds":""},"seconds":10,"onTimeUp":this.onTimeUp.bind(this)})))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),CountDownPage}();t.default=l},"62":function(e,t,n){e.exports=n(0)(18)},"63":function(e,t,n){e.exports=n(66)()},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(1);_interopRequireDefault(i),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var a=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":r(e))){var t="";return Object.keys(e).forEach(function(n){var o=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=o+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},u=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,i.Component),o(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":r(e))&&t&&"object"===(void 0===t?"undefined":r(t))?Object.assign({},e,t):a(e)+a(t)}}]),AtComponent}();u.options={"addGlobalClass":!0},t.default=u},"65":function(e,t,n){e.exports=n(0)(19)},"66":function(e,t,n){"use strict";var o=n(67);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"67":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"68":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),i=(_interopRequireDefault(r),_interopRequireDefault(n(2))),a=_interopRequireDefault(n(63)),u=n(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(69);var s=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(u.View,{"className":"doc-header"},i.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=s,s.defaultProps={"title":"标题"},s.propTypes={"title":a.default.string}},"69":function(e,t,n){}}]);