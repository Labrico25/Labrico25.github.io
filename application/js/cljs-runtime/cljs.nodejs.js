goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__11764__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__11764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11765__i = 0, G__11765__a = new Array(arguments.length -  0);
while (G__11765__i < G__11765__a.length) {G__11765__a[G__11765__i] = arguments[G__11765__i + 0]; ++G__11765__i;}
  args = new cljs.core.IndexedSeq(G__11765__a,0,null);
} 
return G__11764__delegate.call(this,args);};
G__11764.cljs$lang$maxFixedArity = 0;
G__11764.cljs$lang$applyTo = (function (arglist__11766){
var args = cljs.core.seq(arglist__11766);
return G__11764__delegate(args);
});
G__11764.cljs$core$IFn$_invoke$arity$variadic = G__11764__delegate;
return G__11764;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__11767__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__11767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11768__i = 0, G__11768__a = new Array(arguments.length -  0);
while (G__11768__i < G__11768__a.length) {G__11768__a[G__11768__i] = arguments[G__11768__i + 0]; ++G__11768__i;}
  args = new cljs.core.IndexedSeq(G__11768__a,0,null);
} 
return G__11767__delegate.call(this,args);};
G__11767.cljs$lang$maxFixedArity = 0;
G__11767.cljs$lang$applyTo = (function (arglist__11769){
var args = cljs.core.seq(arglist__11769);
return G__11767__delegate(args);
});
G__11767.cljs$core$IFn$_invoke$arity$variadic = G__11767__delegate;
return G__11767;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map
