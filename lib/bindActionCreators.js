Object.defineProperty(exports,"__esModule",{value:true});exports.default=



bindActionCreators;var _redux=require('redux');var _wrapDispatch=require('./wrapDispatch');var _wrapDispatch2=_interopRequireDefault(_wrapDispatch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function bindActionCreators(actionCreators,dispatch,reducerKey){
var wrappedDispatch=(0,_wrapDispatch2.default)(dispatch,reducerKey);
return(0,_redux.bindActionCreators)(actionCreators,wrappedDispatch);
}