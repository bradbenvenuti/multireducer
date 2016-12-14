'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=



plainMultireducer;var _mapValues=require('./mapValues');var _mapValues2=_interopRequireDefault(_mapValues);var _key=require('./key');var _key2=_interopRequireDefault(_key);var _initAction=require('./initAction');var _initAction2=_interopRequireDefault(_initAction);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function plainMultireducer(reducers,reducerKey){
var isCustomMountPoint=void 0;
if(typeof reducers==='function'){
if(!reducerKey){
throw new Error('No key specified for custom mounting of reducer');
}else{
isCustomMountPoint=true;
}
}

var initialState=isCustomMountPoint?
reducers(undefined,_initAction2.default):
(0,_mapValues2.default)(reducers,function(reducer){return reducer(undefined,_initAction2.default);});

return function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
if(action&&action.meta&&action.meta[_key2.default]){
var actionReducerKey=action.meta[_key2.default];


if(isCustomMountPoint&&reducerKey===actionReducerKey){
return reducers(state,action);
}


var reducer=reducers[actionReducerKey];

if(reducer){
return _extends({},
state,_defineProperty({},
actionReducerKey,reducer(state[actionReducerKey],action)));

}
}

return state;
};
}