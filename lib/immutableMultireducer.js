Object.defineProperty(exports,"__esModule",{value:true});exports.default=



plainMultireducer;var _immutable=require('immutable');var _immutable2=_interopRequireDefault(_immutable);var _key=require('./key');var _key2=_interopRequireDefault(_key);var _initAction=require('./initAction');var _initAction2=_interopRequireDefault(_initAction);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function plainMultireducer(reducers,reducerKey){
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
new _immutable2.default.Map(reducers).map(function(reducer){return reducer(undefined,_initAction2.default);});

return function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
if(action&&action.meta&&action.meta[_key2.default]){
var actionReducerKey=action.meta[_key2.default];


if(isCustomMountPoint&&reducerKey===actionReducerKey){
return reducers(state,action);
}


var reducer=reducers[actionReducerKey];

if(reducer){
return state.set(actionReducerKey,reducer(state.get(actionReducerKey),action));
}
}

return state;
};
}