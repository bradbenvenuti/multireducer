'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};exports.default=

wrapDispatch;var _wrapAction=require('./wrapAction');var _wrapAction2=_interopRequireDefault(_wrapAction);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function wrapDispatch(dispatch,reducerKey){
var wrappedDispatch=function wrappedDispatch(action){
var wrappedAction=void 0;
if(typeof action==='function'){
wrappedAction=function wrappedAction(globalDispatch,getState,extraArgument){return(
action(wrappedDispatch,getState,globalDispatch,reducerKey,extraArgument));};
}else if((typeof action==='undefined'?'undefined':_typeof(action))==='object'){
wrappedAction=(0,_wrapAction2.default)(action,reducerKey);
}
return dispatch(wrappedAction);
};

return wrappedDispatch;
}