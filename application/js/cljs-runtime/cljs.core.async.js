goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15377 = (function (f,blockable,meta15378){
this.f = f;
this.blockable = blockable;
this.meta15378 = meta15378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15379,meta15378__$1){
var self__ = this;
var _15379__$1 = this;
return (new cljs.core.async.t_cljs$core$async15377(self__.f,self__.blockable,meta15378__$1));
}));

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15379){
var self__ = this;
var _15379__$1 = this;
return self__.meta15378;
}));

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15378","meta15378",1011897466,null)], null);
}));

(cljs.core.async.t_cljs$core$async15377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15377");

(cljs.core.async.t_cljs$core$async15377.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15377.
 */
cljs.core.async.__GT_t_cljs$core$async15377 = (function cljs$core$async$__GT_t_cljs$core$async15377(f,blockable,meta15378){
return (new cljs.core.async.t_cljs$core$async15377(f,blockable,meta15378));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15376 = arguments.length;
switch (G__15376) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15377(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15382 = arguments.length;
switch (G__15382) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15393 = arguments.length;
switch (G__15393) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15395 = arguments.length;
switch (G__15395) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16888 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16888) : fn1.call(null, val_16888));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16888) : fn1.call(null, val_16888));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15397 = arguments.length;
switch (G__15397) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___16890 = n;
var x_16891 = (0);
while(true){
if((x_16891 < n__5593__auto___16890)){
(a[x_16891] = x_16891);

var G__16892 = (x_16891 + (1));
x_16891 = G__16892;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15398 = (function (flag,meta15399){
this.flag = flag;
this.meta15399 = meta15399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15400,meta15399__$1){
var self__ = this;
var _15400__$1 = this;
return (new cljs.core.async.t_cljs$core$async15398(self__.flag,meta15399__$1));
}));

(cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15400){
var self__ = this;
var _15400__$1 = this;
return self__.meta15399;
}));

(cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15399","meta15399",-2090760099,null)], null);
}));

(cljs.core.async.t_cljs$core$async15398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15398");

(cljs.core.async.t_cljs$core$async15398.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15398.
 */
cljs.core.async.__GT_t_cljs$core$async15398 = (function cljs$core$async$__GT_t_cljs$core$async15398(flag,meta15399){
return (new cljs.core.async.t_cljs$core$async15398(flag,meta15399));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15398(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15401 = (function (flag,cb,meta15402){
this.flag = flag;
this.cb = cb;
this.meta15402 = meta15402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15403,meta15402__$1){
var self__ = this;
var _15403__$1 = this;
return (new cljs.core.async.t_cljs$core$async15401(self__.flag,self__.cb,meta15402__$1));
}));

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15403){
var self__ = this;
var _15403__$1 = this;
return self__.meta15402;
}));

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15402","meta15402",635172750,null)], null);
}));

(cljs.core.async.t_cljs$core$async15401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15401");

(cljs.core.async.t_cljs$core$async15401.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15401.
 */
cljs.core.async.__GT_t_cljs$core$async15401 = (function cljs$core$async$__GT_t_cljs$core$async15401(flag,cb,meta15402){
return (new cljs.core.async.t_cljs$core$async15401(flag,cb,meta15402));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15401(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15414_SHARP_){
var G__15416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15414_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15416) : fret.call(null, G__15416));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15415_SHARP_){
var G__15417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15415_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15417) : fret.call(null, G__15417));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16893 = (i + (1));
i = G__16893;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16894 = arguments.length;
var i__5727__auto___16895 = (0);
while(true){
if((i__5727__auto___16895 < len__5726__auto___16894)){
args__5732__auto__.push((arguments[i__5727__auto___16895]));

var G__16896 = (i__5727__auto___16895 + (1));
i__5727__auto___16895 = G__16896;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15420){
var map__15421 = p__15420;
var map__15421__$1 = cljs.core.__destructure_map(map__15421);
var opts = map__15421__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15418){
var G__15419 = cljs.core.first(seq15418);
var seq15418__$1 = cljs.core.next(seq15418);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15419,seq15418__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15423 = arguments.length;
switch (G__15423) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15318__auto___16898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_15447){
var state_val_15448 = (state_15447[(1)]);
if((state_val_15448 === (7))){
var inst_15443 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15449_16899 = state_15447__$1;
(statearr_15449_16899[(2)] = inst_15443);

(statearr_15449_16899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (1))){
var state_15447__$1 = state_15447;
var statearr_15450_16900 = state_15447__$1;
(statearr_15450_16900[(2)] = null);

(statearr_15450_16900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (4))){
var inst_15426 = (state_15447[(7)]);
var inst_15426__$1 = (state_15447[(2)]);
var inst_15427 = (inst_15426__$1 == null);
var state_15447__$1 = (function (){var statearr_15451 = state_15447;
(statearr_15451[(7)] = inst_15426__$1);

return statearr_15451;
})();
if(cljs.core.truth_(inst_15427)){
var statearr_15452_16901 = state_15447__$1;
(statearr_15452_16901[(1)] = (5));

} else {
var statearr_15453_16902 = state_15447__$1;
(statearr_15453_16902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (13))){
var state_15447__$1 = state_15447;
var statearr_15454_16903 = state_15447__$1;
(statearr_15454_16903[(2)] = null);

(statearr_15454_16903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (6))){
var inst_15426 = (state_15447[(7)]);
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15447__$1,(11),to,inst_15426);
} else {
if((state_val_15448 === (3))){
var inst_15445 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15447__$1,inst_15445);
} else {
if((state_val_15448 === (12))){
var state_15447__$1 = state_15447;
var statearr_15455_16904 = state_15447__$1;
(statearr_15455_16904[(2)] = null);

(statearr_15455_16904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (2))){
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15447__$1,(4),from);
} else {
if((state_val_15448 === (11))){
var inst_15436 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15436)){
var statearr_15456_16905 = state_15447__$1;
(statearr_15456_16905[(1)] = (12));

} else {
var statearr_15457_16906 = state_15447__$1;
(statearr_15457_16906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (9))){
var state_15447__$1 = state_15447;
var statearr_15458_16907 = state_15447__$1;
(statearr_15458_16907[(2)] = null);

(statearr_15458_16907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (5))){
var state_15447__$1 = state_15447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15459_16908 = state_15447__$1;
(statearr_15459_16908[(1)] = (8));

} else {
var statearr_15460_16909 = state_15447__$1;
(statearr_15460_16909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (14))){
var inst_15441 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15461_16910 = state_15447__$1;
(statearr_15461_16910[(2)] = inst_15441);

(statearr_15461_16910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (10))){
var inst_15433 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15462_16911 = state_15447__$1;
(statearr_15462_16911[(2)] = inst_15433);

(statearr_15462_16911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (8))){
var inst_15430 = cljs.core.async.close_BANG_(to);
var state_15447__$1 = state_15447;
var statearr_15463_16912 = state_15447__$1;
(statearr_15463_16912[(2)] = inst_15430);

(statearr_15463_16912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_15464 = [null,null,null,null,null,null,null,null];
(statearr_15464[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_15464[(1)] = (1));

return statearr_15464;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_15447){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15447);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15465){var ex__15286__auto__ = e15465;
var statearr_15466_16913 = state_15447;
(statearr_15466_16913[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15447[(4)]))){
var statearr_15467_16914 = state_15447;
(statearr_15467_16914[(1)] = cljs.core.first((state_15447[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16915 = state_15447;
state_15447 = G__16915;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_15447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_15447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_15468 = f__15319__auto__();
(statearr_15468[(6)] = c__15318__auto___16898);

return statearr_15468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15469){
var vec__15470 = p__15469;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15470,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15470,(1),null);
var job = vec__15470;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15318__auto___16916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_15477){
var state_val_15478 = (state_15477[(1)]);
if((state_val_15478 === (1))){
var state_15477__$1 = state_15477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15477__$1,(2),res,v);
} else {
if((state_val_15478 === (2))){
var inst_15474 = (state_15477[(2)]);
var inst_15475 = cljs.core.async.close_BANG_(res);
var state_15477__$1 = (function (){var statearr_15479 = state_15477;
(statearr_15479[(7)] = inst_15474);

return statearr_15479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15477__$1,inst_15475);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0 = (function (){
var statearr_15480 = [null,null,null,null,null,null,null,null];
(statearr_15480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__);

(statearr_15480[(1)] = (1));

return statearr_15480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1 = (function (state_15477){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15477);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15481){var ex__15286__auto__ = e15481;
var statearr_15482_16917 = state_15477;
(statearr_15482_16917[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15477[(4)]))){
var statearr_15483_16918 = state_15477;
(statearr_15483_16918[(1)] = cljs.core.first((state_15477[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16919 = state_15477;
state_15477 = G__16919;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = function(state_15477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1.call(this,state_15477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_15484 = f__15319__auto__();
(statearr_15484[(6)] = c__15318__auto___16916);

return statearr_15484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15485){
var vec__15486 = p__15485;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15486,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15486,(1),null);
var job = vec__15486;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___16920 = n;
var __16921 = (0);
while(true){
if((__16921 < n__5593__auto___16920)){
var G__15489_16922 = type;
var G__15489_16923__$1 = (((G__15489_16922 instanceof cljs.core.Keyword))?G__15489_16922.fqn:null);
switch (G__15489_16923__$1) {
case "compute":
var c__15318__auto___16925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16921,c__15318__auto___16925,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async){
return (function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = ((function (__16921,c__15318__auto___16925,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async){
return (function (state_15502){
var state_val_15503 = (state_15502[(1)]);
if((state_val_15503 === (1))){
var state_15502__$1 = state_15502;
var statearr_15504_16926 = state_15502__$1;
(statearr_15504_16926[(2)] = null);

(statearr_15504_16926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (2))){
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15502__$1,(4),jobs);
} else {
if((state_val_15503 === (3))){
var inst_15500 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15502__$1,inst_15500);
} else {
if((state_val_15503 === (4))){
var inst_15492 = (state_15502[(2)]);
var inst_15493 = process__$1(inst_15492);
var state_15502__$1 = state_15502;
if(cljs.core.truth_(inst_15493)){
var statearr_15505_16927 = state_15502__$1;
(statearr_15505_16927[(1)] = (5));

} else {
var statearr_15506_16928 = state_15502__$1;
(statearr_15506_16928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (5))){
var state_15502__$1 = state_15502;
var statearr_15507_16929 = state_15502__$1;
(statearr_15507_16929[(2)] = null);

(statearr_15507_16929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (6))){
var state_15502__$1 = state_15502;
var statearr_15508_16930 = state_15502__$1;
(statearr_15508_16930[(2)] = null);

(statearr_15508_16930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (7))){
var inst_15498 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
var statearr_15509_16931 = state_15502__$1;
(statearr_15509_16931[(2)] = inst_15498);

(statearr_15509_16931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16921,c__15318__auto___16925,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async))
;
return ((function (__16921,switch__15282__auto__,c__15318__auto___16925,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0 = (function (){
var statearr_15510 = [null,null,null,null,null,null,null];
(statearr_15510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__);

(statearr_15510[(1)] = (1));

return statearr_15510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1 = (function (state_15502){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15502);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15511){var ex__15286__auto__ = e15511;
var statearr_15512_16932 = state_15502;
(statearr_15512_16932[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15502[(4)]))){
var statearr_15513_16933 = state_15502;
(statearr_15513_16933[(1)] = cljs.core.first((state_15502[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16934 = state_15502;
state_15502 = G__16934;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = function(state_15502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1.call(this,state_15502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__;
})()
;})(__16921,switch__15282__auto__,c__15318__auto___16925,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async))
})();
var state__15320__auto__ = (function (){var statearr_15514 = f__15319__auto__();
(statearr_15514[(6)] = c__15318__auto___16925);

return statearr_15514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
});})(__16921,c__15318__auto___16925,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async))
);


break;
case "async":
var c__15318__auto___16935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16921,c__15318__auto___16935,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async){
return (function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = ((function (__16921,c__15318__auto___16935,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async){
return (function (state_15527){
var state_val_15528 = (state_15527[(1)]);
if((state_val_15528 === (1))){
var state_15527__$1 = state_15527;
var statearr_15535_16936 = state_15527__$1;
(statearr_15535_16936[(2)] = null);

(statearr_15535_16936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (2))){
var state_15527__$1 = state_15527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15527__$1,(4),jobs);
} else {
if((state_val_15528 === (3))){
var inst_15525 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15527__$1,inst_15525);
} else {
if((state_val_15528 === (4))){
var inst_15517 = (state_15527[(2)]);
var inst_15518 = async(inst_15517);
var state_15527__$1 = state_15527;
if(cljs.core.truth_(inst_15518)){
var statearr_15536_16937 = state_15527__$1;
(statearr_15536_16937[(1)] = (5));

} else {
var statearr_15537_16938 = state_15527__$1;
(statearr_15537_16938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (5))){
var state_15527__$1 = state_15527;
var statearr_15538_16939 = state_15527__$1;
(statearr_15538_16939[(2)] = null);

(statearr_15538_16939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (6))){
var state_15527__$1 = state_15527;
var statearr_15595_16940 = state_15527__$1;
(statearr_15595_16940[(2)] = null);

(statearr_15595_16940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (7))){
var inst_15523 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15596_16941 = state_15527__$1;
(statearr_15596_16941[(2)] = inst_15523);

(statearr_15596_16941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16921,c__15318__auto___16935,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async))
;
return ((function (__16921,switch__15282__auto__,c__15318__auto___16935,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0 = (function (){
var statearr_15597 = [null,null,null,null,null,null,null];
(statearr_15597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__);

(statearr_15597[(1)] = (1));

return statearr_15597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1 = (function (state_15527){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15527);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15598){var ex__15286__auto__ = e15598;
var statearr_15599_16942 = state_15527;
(statearr_15599_16942[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15527[(4)]))){
var statearr_15600_16943 = state_15527;
(statearr_15600_16943[(1)] = cljs.core.first((state_15527[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16944 = state_15527;
state_15527 = G__16944;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = function(state_15527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1.call(this,state_15527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__;
})()
;})(__16921,switch__15282__auto__,c__15318__auto___16935,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async))
})();
var state__15320__auto__ = (function (){var statearr_15601 = f__15319__auto__();
(statearr_15601[(6)] = c__15318__auto___16935);

return statearr_15601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
});})(__16921,c__15318__auto___16935,G__15489_16922,G__15489_16923__$1,n__5593__auto___16920,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15489_16923__$1)].join('')));

}

var G__16945 = (__16921 + (1));
__16921 = G__16945;
continue;
} else {
}
break;
}

var c__15318__auto___16946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_15623){
var state_val_15624 = (state_15623[(1)]);
if((state_val_15624 === (7))){
var inst_15619 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15625_16947 = state_15623__$1;
(statearr_15625_16947[(2)] = inst_15619);

(statearr_15625_16947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (1))){
var state_15623__$1 = state_15623;
var statearr_15626_16948 = state_15623__$1;
(statearr_15626_16948[(2)] = null);

(statearr_15626_16948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (4))){
var inst_15604 = (state_15623[(7)]);
var inst_15604__$1 = (state_15623[(2)]);
var inst_15605 = (inst_15604__$1 == null);
var state_15623__$1 = (function (){var statearr_15627 = state_15623;
(statearr_15627[(7)] = inst_15604__$1);

return statearr_15627;
})();
if(cljs.core.truth_(inst_15605)){
var statearr_15628_16949 = state_15623__$1;
(statearr_15628_16949[(1)] = (5));

} else {
var statearr_15629_16950 = state_15623__$1;
(statearr_15629_16950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (6))){
var inst_15604 = (state_15623[(7)]);
var inst_15609 = (state_15623[(8)]);
var inst_15609__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15611 = [inst_15604,inst_15609__$1];
var inst_15612 = (new cljs.core.PersistentVector(null,2,(5),inst_15610,inst_15611,null));
var state_15623__$1 = (function (){var statearr_15630 = state_15623;
(statearr_15630[(8)] = inst_15609__$1);

return statearr_15630;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15623__$1,(8),jobs,inst_15612);
} else {
if((state_val_15624 === (3))){
var inst_15621 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15623__$1,inst_15621);
} else {
if((state_val_15624 === (2))){
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15623__$1,(4),from);
} else {
if((state_val_15624 === (9))){
var inst_15616 = (state_15623[(2)]);
var state_15623__$1 = (function (){var statearr_15631 = state_15623;
(statearr_15631[(9)] = inst_15616);

return statearr_15631;
})();
var statearr_15632_16951 = state_15623__$1;
(statearr_15632_16951[(2)] = null);

(statearr_15632_16951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (5))){
var inst_15607 = cljs.core.async.close_BANG_(jobs);
var state_15623__$1 = state_15623;
var statearr_15633_16952 = state_15623__$1;
(statearr_15633_16952[(2)] = inst_15607);

(statearr_15633_16952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (8))){
var inst_15609 = (state_15623[(8)]);
var inst_15614 = (state_15623[(2)]);
var state_15623__$1 = (function (){var statearr_15634 = state_15623;
(statearr_15634[(10)] = inst_15614);

return statearr_15634;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15623__$1,(9),results,inst_15609);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0 = (function (){
var statearr_15635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__);

(statearr_15635[(1)] = (1));

return statearr_15635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1 = (function (state_15623){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15623);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15636){var ex__15286__auto__ = e15636;
var statearr_15637_16953 = state_15623;
(statearr_15637_16953[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15623[(4)]))){
var statearr_15638_16954 = state_15623;
(statearr_15638_16954[(1)] = cljs.core.first((state_15623[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16955 = state_15623;
state_15623 = G__16955;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = function(state_15623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1.call(this,state_15623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_15639 = f__15319__auto__();
(statearr_15639[(6)] = c__15318__auto___16946);

return statearr_15639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


var c__15318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_15677){
var state_val_15678 = (state_15677[(1)]);
if((state_val_15678 === (7))){
var inst_15673 = (state_15677[(2)]);
var state_15677__$1 = state_15677;
var statearr_15679_16956 = state_15677__$1;
(statearr_15679_16956[(2)] = inst_15673);

(statearr_15679_16956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (20))){
var state_15677__$1 = state_15677;
var statearr_15680_16957 = state_15677__$1;
(statearr_15680_16957[(2)] = null);

(statearr_15680_16957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (1))){
var state_15677__$1 = state_15677;
var statearr_15681_16958 = state_15677__$1;
(statearr_15681_16958[(2)] = null);

(statearr_15681_16958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (4))){
var inst_15642 = (state_15677[(7)]);
var inst_15642__$1 = (state_15677[(2)]);
var inst_15643 = (inst_15642__$1 == null);
var state_15677__$1 = (function (){var statearr_15682 = state_15677;
(statearr_15682[(7)] = inst_15642__$1);

return statearr_15682;
})();
if(cljs.core.truth_(inst_15643)){
var statearr_15683_16959 = state_15677__$1;
(statearr_15683_16959[(1)] = (5));

} else {
var statearr_15684_16960 = state_15677__$1;
(statearr_15684_16960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (15))){
var inst_15655 = (state_15677[(8)]);
var state_15677__$1 = state_15677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15677__$1,(18),to,inst_15655);
} else {
if((state_val_15678 === (21))){
var inst_15668 = (state_15677[(2)]);
var state_15677__$1 = state_15677;
var statearr_15685_16961 = state_15677__$1;
(statearr_15685_16961[(2)] = inst_15668);

(statearr_15685_16961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (13))){
var inst_15670 = (state_15677[(2)]);
var state_15677__$1 = (function (){var statearr_15686 = state_15677;
(statearr_15686[(9)] = inst_15670);

return statearr_15686;
})();
var statearr_15687_16962 = state_15677__$1;
(statearr_15687_16962[(2)] = null);

(statearr_15687_16962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (6))){
var inst_15642 = (state_15677[(7)]);
var state_15677__$1 = state_15677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15677__$1,(11),inst_15642);
} else {
if((state_val_15678 === (17))){
var inst_15663 = (state_15677[(2)]);
var state_15677__$1 = state_15677;
if(cljs.core.truth_(inst_15663)){
var statearr_15688_16963 = state_15677__$1;
(statearr_15688_16963[(1)] = (19));

} else {
var statearr_15689_16964 = state_15677__$1;
(statearr_15689_16964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (3))){
var inst_15675 = (state_15677[(2)]);
var state_15677__$1 = state_15677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15677__$1,inst_15675);
} else {
if((state_val_15678 === (12))){
var inst_15652 = (state_15677[(10)]);
var state_15677__$1 = state_15677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15677__$1,(14),inst_15652);
} else {
if((state_val_15678 === (2))){
var state_15677__$1 = state_15677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15677__$1,(4),results);
} else {
if((state_val_15678 === (19))){
var state_15677__$1 = state_15677;
var statearr_15690_16965 = state_15677__$1;
(statearr_15690_16965[(2)] = null);

(statearr_15690_16965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (11))){
var inst_15652 = (state_15677[(2)]);
var state_15677__$1 = (function (){var statearr_15691 = state_15677;
(statearr_15691[(10)] = inst_15652);

return statearr_15691;
})();
var statearr_15692_16966 = state_15677__$1;
(statearr_15692_16966[(2)] = null);

(statearr_15692_16966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (9))){
var state_15677__$1 = state_15677;
var statearr_15693_16967 = state_15677__$1;
(statearr_15693_16967[(2)] = null);

(statearr_15693_16967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (5))){
var state_15677__$1 = state_15677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15694_16968 = state_15677__$1;
(statearr_15694_16968[(1)] = (8));

} else {
var statearr_15695_16969 = state_15677__$1;
(statearr_15695_16969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (14))){
var inst_15655 = (state_15677[(8)]);
var inst_15657 = (state_15677[(11)]);
var inst_15655__$1 = (state_15677[(2)]);
var inst_15656 = (inst_15655__$1 == null);
var inst_15657__$1 = cljs.core.not(inst_15656);
var state_15677__$1 = (function (){var statearr_15696 = state_15677;
(statearr_15696[(8)] = inst_15655__$1);

(statearr_15696[(11)] = inst_15657__$1);

return statearr_15696;
})();
if(inst_15657__$1){
var statearr_15697_16970 = state_15677__$1;
(statearr_15697_16970[(1)] = (15));

} else {
var statearr_15698_16971 = state_15677__$1;
(statearr_15698_16971[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (16))){
var inst_15657 = (state_15677[(11)]);
var state_15677__$1 = state_15677;
var statearr_15699_16972 = state_15677__$1;
(statearr_15699_16972[(2)] = inst_15657);

(statearr_15699_16972[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (10))){
var inst_15649 = (state_15677[(2)]);
var state_15677__$1 = state_15677;
var statearr_15700_16973 = state_15677__$1;
(statearr_15700_16973[(2)] = inst_15649);

(statearr_15700_16973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (18))){
var inst_15660 = (state_15677[(2)]);
var state_15677__$1 = state_15677;
var statearr_15701_16974 = state_15677__$1;
(statearr_15701_16974[(2)] = inst_15660);

(statearr_15701_16974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (8))){
var inst_15646 = cljs.core.async.close_BANG_(to);
var state_15677__$1 = state_15677;
var statearr_15702_16975 = state_15677__$1;
(statearr_15702_16975[(2)] = inst_15646);

(statearr_15702_16975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0 = (function (){
var statearr_15703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__);

(statearr_15703[(1)] = (1));

return statearr_15703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1 = (function (state_15677){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15677);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15704){var ex__15286__auto__ = e15704;
var statearr_15705_16976 = state_15677;
(statearr_15705_16976[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15677[(4)]))){
var statearr_15706_16991 = state_15677;
(statearr_15706_16991[(1)] = cljs.core.first((state_15677[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16992 = state_15677;
state_15677 = G__16992;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__ = function(state_15677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1.call(this,state_15677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15283__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_15707 = f__15319__auto__();
(statearr_15707[(6)] = c__15318__auto__);

return statearr_15707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));

return c__15318__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15709 = arguments.length;
switch (G__15709) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15717 = arguments.length;
switch (G__15717) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15719 = arguments.length;
switch (G__15719) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15318__auto___16996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_15745){
var state_val_15746 = (state_15745[(1)]);
if((state_val_15746 === (7))){
var inst_15741 = (state_15745[(2)]);
var state_15745__$1 = state_15745;
var statearr_15747_16997 = state_15745__$1;
(statearr_15747_16997[(2)] = inst_15741);

(statearr_15747_16997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (1))){
var state_15745__$1 = state_15745;
var statearr_15748_16998 = state_15745__$1;
(statearr_15748_16998[(2)] = null);

(statearr_15748_16998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (4))){
var inst_15722 = (state_15745[(7)]);
var inst_15722__$1 = (state_15745[(2)]);
var inst_15723 = (inst_15722__$1 == null);
var state_15745__$1 = (function (){var statearr_15749 = state_15745;
(statearr_15749[(7)] = inst_15722__$1);

return statearr_15749;
})();
if(cljs.core.truth_(inst_15723)){
var statearr_15750_16999 = state_15745__$1;
(statearr_15750_16999[(1)] = (5));

} else {
var statearr_15751_17000 = state_15745__$1;
(statearr_15751_17000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (13))){
var state_15745__$1 = state_15745;
var statearr_15752_17001 = state_15745__$1;
(statearr_15752_17001[(2)] = null);

(statearr_15752_17001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (6))){
var inst_15722 = (state_15745[(7)]);
var inst_15728 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15722) : p.call(null, inst_15722));
var state_15745__$1 = state_15745;
if(cljs.core.truth_(inst_15728)){
var statearr_15753_17002 = state_15745__$1;
(statearr_15753_17002[(1)] = (9));

} else {
var statearr_15754_17003 = state_15745__$1;
(statearr_15754_17003[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (3))){
var inst_15743 = (state_15745[(2)]);
var state_15745__$1 = state_15745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15745__$1,inst_15743);
} else {
if((state_val_15746 === (12))){
var state_15745__$1 = state_15745;
var statearr_15755_17004 = state_15745__$1;
(statearr_15755_17004[(2)] = null);

(statearr_15755_17004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (2))){
var state_15745__$1 = state_15745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15745__$1,(4),ch);
} else {
if((state_val_15746 === (11))){
var inst_15722 = (state_15745[(7)]);
var inst_15732 = (state_15745[(2)]);
var state_15745__$1 = state_15745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15745__$1,(8),inst_15732,inst_15722);
} else {
if((state_val_15746 === (9))){
var state_15745__$1 = state_15745;
var statearr_15756_17005 = state_15745__$1;
(statearr_15756_17005[(2)] = tc);

(statearr_15756_17005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (5))){
var inst_15725 = cljs.core.async.close_BANG_(tc);
var inst_15726 = cljs.core.async.close_BANG_(fc);
var state_15745__$1 = (function (){var statearr_15757 = state_15745;
(statearr_15757[(8)] = inst_15725);

return statearr_15757;
})();
var statearr_15758_17006 = state_15745__$1;
(statearr_15758_17006[(2)] = inst_15726);

(statearr_15758_17006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (14))){
var inst_15739 = (state_15745[(2)]);
var state_15745__$1 = state_15745;
var statearr_15759_17007 = state_15745__$1;
(statearr_15759_17007[(2)] = inst_15739);

(statearr_15759_17007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (10))){
var state_15745__$1 = state_15745;
var statearr_15760_17008 = state_15745__$1;
(statearr_15760_17008[(2)] = fc);

(statearr_15760_17008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15746 === (8))){
var inst_15734 = (state_15745[(2)]);
var state_15745__$1 = state_15745;
if(cljs.core.truth_(inst_15734)){
var statearr_15761_17009 = state_15745__$1;
(statearr_15761_17009[(1)] = (12));

} else {
var statearr_15762_17010 = state_15745__$1;
(statearr_15762_17010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_15763 = [null,null,null,null,null,null,null,null,null];
(statearr_15763[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_15763[(1)] = (1));

return statearr_15763;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_15745){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15745);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15764){var ex__15286__auto__ = e15764;
var statearr_15765_17011 = state_15745;
(statearr_15765_17011[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15745[(4)]))){
var statearr_15766_17012 = state_15745;
(statearr_15766_17012[(1)] = cljs.core.first((state_15745[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17013 = state_15745;
state_15745 = G__17013;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_15745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_15745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_15767 = f__15319__auto__();
(statearr_15767[(6)] = c__15318__auto___16996);

return statearr_15767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_15789){
var state_val_15790 = (state_15789[(1)]);
if((state_val_15790 === (7))){
var inst_15785 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15791_17014 = state_15789__$1;
(statearr_15791_17014[(2)] = inst_15785);

(statearr_15791_17014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (1))){
var inst_15768 = init;
var inst_15769 = inst_15768;
var state_15789__$1 = (function (){var statearr_15792 = state_15789;
(statearr_15792[(7)] = inst_15769);

return statearr_15792;
})();
var statearr_15793_17015 = state_15789__$1;
(statearr_15793_17015[(2)] = null);

(statearr_15793_17015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (4))){
var inst_15772 = (state_15789[(8)]);
var inst_15772__$1 = (state_15789[(2)]);
var inst_15773 = (inst_15772__$1 == null);
var state_15789__$1 = (function (){var statearr_15794 = state_15789;
(statearr_15794[(8)] = inst_15772__$1);

return statearr_15794;
})();
if(cljs.core.truth_(inst_15773)){
var statearr_15795_17016 = state_15789__$1;
(statearr_15795_17016[(1)] = (5));

} else {
var statearr_15796_17017 = state_15789__$1;
(statearr_15796_17017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (6))){
var inst_15772 = (state_15789[(8)]);
var inst_15776 = (state_15789[(9)]);
var inst_15769 = (state_15789[(7)]);
var inst_15776__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15769,inst_15772) : f.call(null, inst_15769,inst_15772));
var inst_15777 = cljs.core.reduced_QMARK_(inst_15776__$1);
var state_15789__$1 = (function (){var statearr_15797 = state_15789;
(statearr_15797[(9)] = inst_15776__$1);

return statearr_15797;
})();
if(inst_15777){
var statearr_15798_17018 = state_15789__$1;
(statearr_15798_17018[(1)] = (8));

} else {
var statearr_15799_17019 = state_15789__$1;
(statearr_15799_17019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (3))){
var inst_15787 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15789__$1,inst_15787);
} else {
if((state_val_15790 === (2))){
var state_15789__$1 = state_15789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15789__$1,(4),ch);
} else {
if((state_val_15790 === (9))){
var inst_15776 = (state_15789[(9)]);
var inst_15769 = inst_15776;
var state_15789__$1 = (function (){var statearr_15800 = state_15789;
(statearr_15800[(7)] = inst_15769);

return statearr_15800;
})();
var statearr_15801_17020 = state_15789__$1;
(statearr_15801_17020[(2)] = null);

(statearr_15801_17020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (5))){
var inst_15769 = (state_15789[(7)]);
var state_15789__$1 = state_15789;
var statearr_15802_17021 = state_15789__$1;
(statearr_15802_17021[(2)] = inst_15769);

(statearr_15802_17021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (10))){
var inst_15783 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15803_17022 = state_15789__$1;
(statearr_15803_17022[(2)] = inst_15783);

(statearr_15803_17022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (8))){
var inst_15776 = (state_15789[(9)]);
var inst_15779 = cljs.core.deref(inst_15776);
var state_15789__$1 = state_15789;
var statearr_15804_17023 = state_15789__$1;
(statearr_15804_17023[(2)] = inst_15779);

(statearr_15804_17023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15283__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15283__auto____0 = (function (){
var statearr_15805 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15805[(0)] = cljs$core$async$reduce_$_state_machine__15283__auto__);

(statearr_15805[(1)] = (1));

return statearr_15805;
});
var cljs$core$async$reduce_$_state_machine__15283__auto____1 = (function (state_15789){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15789);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15806){var ex__15286__auto__ = e15806;
var statearr_15807_17024 = state_15789;
(statearr_15807_17024[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15789[(4)]))){
var statearr_15808_17025 = state_15789;
(statearr_15808_17025[(1)] = cljs.core.first((state_15789[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17026 = state_15789;
state_15789 = G__17026;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15283__auto__ = function(state_15789){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15283__auto____1.call(this,state_15789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15283__auto____0;
cljs$core$async$reduce_$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15283__auto____1;
return cljs$core$async$reduce_$_state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_15809 = f__15319__auto__();
(statearr_15809[(6)] = c__15318__auto__);

return statearr_15809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));

return c__15318__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__15318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_15815){
var state_val_15816 = (state_15815[(1)]);
if((state_val_15816 === (1))){
var inst_15810 = cljs.core.async.reduce(f__$1,init,ch);
var state_15815__$1 = state_15815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15815__$1,(2),inst_15810);
} else {
if((state_val_15816 === (2))){
var inst_15812 = (state_15815[(2)]);
var inst_15813 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15812) : f__$1.call(null, inst_15812));
var state_15815__$1 = state_15815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15815__$1,inst_15813);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15283__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15283__auto____0 = (function (){
var statearr_15817 = [null,null,null,null,null,null,null];
(statearr_15817[(0)] = cljs$core$async$transduce_$_state_machine__15283__auto__);

(statearr_15817[(1)] = (1));

return statearr_15817;
});
var cljs$core$async$transduce_$_state_machine__15283__auto____1 = (function (state_15815){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15815);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15818){var ex__15286__auto__ = e15818;
var statearr_15819_17027 = state_15815;
(statearr_15819_17027[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15815[(4)]))){
var statearr_15820_17028 = state_15815;
(statearr_15820_17028[(1)] = cljs.core.first((state_15815[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17029 = state_15815;
state_15815 = G__17029;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15283__auto__ = function(state_15815){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15283__auto____1.call(this,state_15815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15283__auto____0;
cljs$core$async$transduce_$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15283__auto____1;
return cljs$core$async$transduce_$_state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_15821 = f__15319__auto__();
(statearr_15821[(6)] = c__15318__auto__);

return statearr_15821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));

return c__15318__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15823 = arguments.length;
switch (G__15823) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_15848){
var state_val_15849 = (state_15848[(1)]);
if((state_val_15849 === (7))){
var inst_15830 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15850_17031 = state_15848__$1;
(statearr_15850_17031[(2)] = inst_15830);

(statearr_15850_17031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (1))){
var inst_15824 = cljs.core.seq(coll);
var inst_15825 = inst_15824;
var state_15848__$1 = (function (){var statearr_15851 = state_15848;
(statearr_15851[(7)] = inst_15825);

return statearr_15851;
})();
var statearr_15852_17032 = state_15848__$1;
(statearr_15852_17032[(2)] = null);

(statearr_15852_17032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (4))){
var inst_15825 = (state_15848[(7)]);
var inst_15828 = cljs.core.first(inst_15825);
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15848__$1,(7),ch,inst_15828);
} else {
if((state_val_15849 === (13))){
var inst_15842 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15853_17033 = state_15848__$1;
(statearr_15853_17033[(2)] = inst_15842);

(statearr_15853_17033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (6))){
var inst_15833 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
if(cljs.core.truth_(inst_15833)){
var statearr_15854_17034 = state_15848__$1;
(statearr_15854_17034[(1)] = (8));

} else {
var statearr_15855_17035 = state_15848__$1;
(statearr_15855_17035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (3))){
var inst_15846 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15848__$1,inst_15846);
} else {
if((state_val_15849 === (12))){
var state_15848__$1 = state_15848;
var statearr_15856_17036 = state_15848__$1;
(statearr_15856_17036[(2)] = null);

(statearr_15856_17036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (2))){
var inst_15825 = (state_15848[(7)]);
var state_15848__$1 = state_15848;
if(cljs.core.truth_(inst_15825)){
var statearr_15857_17037 = state_15848__$1;
(statearr_15857_17037[(1)] = (4));

} else {
var statearr_15858_17038 = state_15848__$1;
(statearr_15858_17038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (11))){
var inst_15839 = cljs.core.async.close_BANG_(ch);
var state_15848__$1 = state_15848;
var statearr_15859_17039 = state_15848__$1;
(statearr_15859_17039[(2)] = inst_15839);

(statearr_15859_17039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (9))){
var state_15848__$1 = state_15848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15860_17040 = state_15848__$1;
(statearr_15860_17040[(1)] = (11));

} else {
var statearr_15861_17041 = state_15848__$1;
(statearr_15861_17041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (5))){
var inst_15825 = (state_15848[(7)]);
var state_15848__$1 = state_15848;
var statearr_15862_17042 = state_15848__$1;
(statearr_15862_17042[(2)] = inst_15825);

(statearr_15862_17042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (10))){
var inst_15844 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15863_17043 = state_15848__$1;
(statearr_15863_17043[(2)] = inst_15844);

(statearr_15863_17043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (8))){
var inst_15825 = (state_15848[(7)]);
var inst_15835 = cljs.core.next(inst_15825);
var inst_15825__$1 = inst_15835;
var state_15848__$1 = (function (){var statearr_15864 = state_15848;
(statearr_15864[(7)] = inst_15825__$1);

return statearr_15864;
})();
var statearr_15865_17044 = state_15848__$1;
(statearr_15865_17044[(2)] = null);

(statearr_15865_17044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_15866 = [null,null,null,null,null,null,null,null];
(statearr_15866[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_15866[(1)] = (1));

return statearr_15866;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_15848){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_15848);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e15867){var ex__15286__auto__ = e15867;
var statearr_15868_17045 = state_15848;
(statearr_15868_17045[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_15848[(4)]))){
var statearr_15869_17046 = state_15848;
(statearr_15869_17046[(1)] = cljs.core.first((state_15848[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17047 = state_15848;
state_15848 = G__17047;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_15848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_15848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_15870 = f__15319__auto__();
(statearr_15870[(6)] = c__15318__auto__);

return statearr_15870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));

return c__15318__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15872 = arguments.length;
switch (G__15872) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17049 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17049(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17050 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17050(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17051 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17051(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17052 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17052(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15873 = (function (ch,cs,meta15874){
this.ch = ch;
this.cs = cs;
this.meta15874 = meta15874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15875,meta15874__$1){
var self__ = this;
var _15875__$1 = this;
return (new cljs.core.async.t_cljs$core$async15873(self__.ch,self__.cs,meta15874__$1));
}));

(cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15875){
var self__ = this;
var _15875__$1 = this;
return self__.meta15874;
}));

(cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15874","meta15874",-1195973328,null)], null);
}));

(cljs.core.async.t_cljs$core$async15873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15873");

(cljs.core.async.t_cljs$core$async15873.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15873.
 */
cljs.core.async.__GT_t_cljs$core$async15873 = (function cljs$core$async$__GT_t_cljs$core$async15873(ch,cs,meta15874){
return (new cljs.core.async.t_cljs$core$async15873(ch,cs,meta15874));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15873(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15318__auto___17053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16008){
var state_val_16009 = (state_16008[(1)]);
if((state_val_16009 === (7))){
var inst_16004 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16010_17054 = state_16008__$1;
(statearr_16010_17054[(2)] = inst_16004);

(statearr_16010_17054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (20))){
var inst_15909 = (state_16008[(7)]);
var inst_15921 = cljs.core.first(inst_15909);
var inst_15922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15921,(0),null);
var inst_15923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15921,(1),null);
var state_16008__$1 = (function (){var statearr_16011 = state_16008;
(statearr_16011[(8)] = inst_15922);

return statearr_16011;
})();
if(cljs.core.truth_(inst_15923)){
var statearr_16012_17055 = state_16008__$1;
(statearr_16012_17055[(1)] = (22));

} else {
var statearr_16013_17056 = state_16008__$1;
(statearr_16013_17056[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (27))){
var inst_15878 = (state_16008[(9)]);
var inst_15953 = (state_16008[(10)]);
var inst_15958 = (state_16008[(11)]);
var inst_15951 = (state_16008[(12)]);
var inst_15958__$1 = cljs.core._nth(inst_15951,inst_15953);
var inst_15959 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15958__$1,inst_15878,done);
var state_16008__$1 = (function (){var statearr_16014 = state_16008;
(statearr_16014[(11)] = inst_15958__$1);

return statearr_16014;
})();
if(cljs.core.truth_(inst_15959)){
var statearr_16015_17057 = state_16008__$1;
(statearr_16015_17057[(1)] = (30));

} else {
var statearr_16016_17058 = state_16008__$1;
(statearr_16016_17058[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (1))){
var state_16008__$1 = state_16008;
var statearr_16017_17059 = state_16008__$1;
(statearr_16017_17059[(2)] = null);

(statearr_16017_17059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (24))){
var inst_15909 = (state_16008[(7)]);
var inst_15928 = (state_16008[(2)]);
var inst_15929 = cljs.core.next(inst_15909);
var inst_15887 = inst_15929;
var inst_15888 = null;
var inst_15889 = (0);
var inst_15890 = (0);
var state_16008__$1 = (function (){var statearr_16018 = state_16008;
(statearr_16018[(13)] = inst_15928);

(statearr_16018[(14)] = inst_15888);

(statearr_16018[(15)] = inst_15887);

(statearr_16018[(16)] = inst_15890);

(statearr_16018[(17)] = inst_15889);

return statearr_16018;
})();
var statearr_16019_17060 = state_16008__$1;
(statearr_16019_17060[(2)] = null);

(statearr_16019_17060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (39))){
var state_16008__$1 = state_16008;
var statearr_16023_17061 = state_16008__$1;
(statearr_16023_17061[(2)] = null);

(statearr_16023_17061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (4))){
var inst_15878 = (state_16008[(9)]);
var inst_15878__$1 = (state_16008[(2)]);
var inst_15879 = (inst_15878__$1 == null);
var state_16008__$1 = (function (){var statearr_16024 = state_16008;
(statearr_16024[(9)] = inst_15878__$1);

return statearr_16024;
})();
if(cljs.core.truth_(inst_15879)){
var statearr_16025_17062 = state_16008__$1;
(statearr_16025_17062[(1)] = (5));

} else {
var statearr_16026_17063 = state_16008__$1;
(statearr_16026_17063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (15))){
var inst_15888 = (state_16008[(14)]);
var inst_15887 = (state_16008[(15)]);
var inst_15890 = (state_16008[(16)]);
var inst_15889 = (state_16008[(17)]);
var inst_15905 = (state_16008[(2)]);
var inst_15906 = (inst_15890 + (1));
var tmp16020 = inst_15888;
var tmp16021 = inst_15887;
var tmp16022 = inst_15889;
var inst_15887__$1 = tmp16021;
var inst_15888__$1 = tmp16020;
var inst_15889__$1 = tmp16022;
var inst_15890__$1 = inst_15906;
var state_16008__$1 = (function (){var statearr_16027 = state_16008;
(statearr_16027[(18)] = inst_15905);

(statearr_16027[(14)] = inst_15888__$1);

(statearr_16027[(15)] = inst_15887__$1);

(statearr_16027[(16)] = inst_15890__$1);

(statearr_16027[(17)] = inst_15889__$1);

return statearr_16027;
})();
var statearr_16028_17064 = state_16008__$1;
(statearr_16028_17064[(2)] = null);

(statearr_16028_17064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (21))){
var inst_15932 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16032_17065 = state_16008__$1;
(statearr_16032_17065[(2)] = inst_15932);

(statearr_16032_17065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (31))){
var inst_15958 = (state_16008[(11)]);
var inst_15962 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15958);
var state_16008__$1 = state_16008;
var statearr_16033_17066 = state_16008__$1;
(statearr_16033_17066[(2)] = inst_15962);

(statearr_16033_17066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (32))){
var inst_15953 = (state_16008[(10)]);
var inst_15951 = (state_16008[(12)]);
var inst_15950 = (state_16008[(19)]);
var inst_15952 = (state_16008[(20)]);
var inst_15964 = (state_16008[(2)]);
var inst_15965 = (inst_15953 + (1));
var tmp16029 = inst_15951;
var tmp16030 = inst_15950;
var tmp16031 = inst_15952;
var inst_15950__$1 = tmp16030;
var inst_15951__$1 = tmp16029;
var inst_15952__$1 = tmp16031;
var inst_15953__$1 = inst_15965;
var state_16008__$1 = (function (){var statearr_16034 = state_16008;
(statearr_16034[(10)] = inst_15953__$1);

(statearr_16034[(12)] = inst_15951__$1);

(statearr_16034[(19)] = inst_15950__$1);

(statearr_16034[(20)] = inst_15952__$1);

(statearr_16034[(21)] = inst_15964);

return statearr_16034;
})();
var statearr_16035_17067 = state_16008__$1;
(statearr_16035_17067[(2)] = null);

(statearr_16035_17067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (40))){
var inst_15977 = (state_16008[(22)]);
var inst_15981 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15977);
var state_16008__$1 = state_16008;
var statearr_16036_17068 = state_16008__$1;
(statearr_16036_17068[(2)] = inst_15981);

(statearr_16036_17068[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (33))){
var inst_15968 = (state_16008[(23)]);
var inst_15970 = cljs.core.chunked_seq_QMARK_(inst_15968);
var state_16008__$1 = state_16008;
if(inst_15970){
var statearr_16037_17069 = state_16008__$1;
(statearr_16037_17069[(1)] = (36));

} else {
var statearr_16038_17070 = state_16008__$1;
(statearr_16038_17070[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (13))){
var inst_15899 = (state_16008[(24)]);
var inst_15902 = cljs.core.async.close_BANG_(inst_15899);
var state_16008__$1 = state_16008;
var statearr_16039_17071 = state_16008__$1;
(statearr_16039_17071[(2)] = inst_15902);

(statearr_16039_17071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (22))){
var inst_15922 = (state_16008[(8)]);
var inst_15925 = cljs.core.async.close_BANG_(inst_15922);
var state_16008__$1 = state_16008;
var statearr_16040_17072 = state_16008__$1;
(statearr_16040_17072[(2)] = inst_15925);

(statearr_16040_17072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (36))){
var inst_15968 = (state_16008[(23)]);
var inst_15972 = cljs.core.chunk_first(inst_15968);
var inst_15973 = cljs.core.chunk_rest(inst_15968);
var inst_15974 = cljs.core.count(inst_15972);
var inst_15950 = inst_15973;
var inst_15951 = inst_15972;
var inst_15952 = inst_15974;
var inst_15953 = (0);
var state_16008__$1 = (function (){var statearr_16041 = state_16008;
(statearr_16041[(10)] = inst_15953);

(statearr_16041[(12)] = inst_15951);

(statearr_16041[(19)] = inst_15950);

(statearr_16041[(20)] = inst_15952);

return statearr_16041;
})();
var statearr_16042_17073 = state_16008__$1;
(statearr_16042_17073[(2)] = null);

(statearr_16042_17073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (41))){
var inst_15968 = (state_16008[(23)]);
var inst_15983 = (state_16008[(2)]);
var inst_15984 = cljs.core.next(inst_15968);
var inst_15950 = inst_15984;
var inst_15951 = null;
var inst_15952 = (0);
var inst_15953 = (0);
var state_16008__$1 = (function (){var statearr_16043 = state_16008;
(statearr_16043[(10)] = inst_15953);

(statearr_16043[(12)] = inst_15951);

(statearr_16043[(25)] = inst_15983);

(statearr_16043[(19)] = inst_15950);

(statearr_16043[(20)] = inst_15952);

return statearr_16043;
})();
var statearr_16044_17074 = state_16008__$1;
(statearr_16044_17074[(2)] = null);

(statearr_16044_17074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (43))){
var state_16008__$1 = state_16008;
var statearr_16045_17075 = state_16008__$1;
(statearr_16045_17075[(2)] = null);

(statearr_16045_17075[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (29))){
var inst_15992 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16046_17076 = state_16008__$1;
(statearr_16046_17076[(2)] = inst_15992);

(statearr_16046_17076[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (44))){
var inst_16001 = (state_16008[(2)]);
var state_16008__$1 = (function (){var statearr_16047 = state_16008;
(statearr_16047[(26)] = inst_16001);

return statearr_16047;
})();
var statearr_16048_17077 = state_16008__$1;
(statearr_16048_17077[(2)] = null);

(statearr_16048_17077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (6))){
var inst_15942 = (state_16008[(27)]);
var inst_15941 = cljs.core.deref(cs);
var inst_15942__$1 = cljs.core.keys(inst_15941);
var inst_15943 = cljs.core.count(inst_15942__$1);
var inst_15944 = cljs.core.reset_BANG_(dctr,inst_15943);
var inst_15949 = cljs.core.seq(inst_15942__$1);
var inst_15950 = inst_15949;
var inst_15951 = null;
var inst_15952 = (0);
var inst_15953 = (0);
var state_16008__$1 = (function (){var statearr_16049 = state_16008;
(statearr_16049[(10)] = inst_15953);

(statearr_16049[(12)] = inst_15951);

(statearr_16049[(19)] = inst_15950);

(statearr_16049[(28)] = inst_15944);

(statearr_16049[(20)] = inst_15952);

(statearr_16049[(27)] = inst_15942__$1);

return statearr_16049;
})();
var statearr_16050_17078 = state_16008__$1;
(statearr_16050_17078[(2)] = null);

(statearr_16050_17078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (28))){
var inst_15950 = (state_16008[(19)]);
var inst_15968 = (state_16008[(23)]);
var inst_15968__$1 = cljs.core.seq(inst_15950);
var state_16008__$1 = (function (){var statearr_16051 = state_16008;
(statearr_16051[(23)] = inst_15968__$1);

return statearr_16051;
})();
if(inst_15968__$1){
var statearr_16052_17079 = state_16008__$1;
(statearr_16052_17079[(1)] = (33));

} else {
var statearr_16053_17080 = state_16008__$1;
(statearr_16053_17080[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (25))){
var inst_15953 = (state_16008[(10)]);
var inst_15952 = (state_16008[(20)]);
var inst_15955 = (inst_15953 < inst_15952);
var inst_15956 = inst_15955;
var state_16008__$1 = state_16008;
if(cljs.core.truth_(inst_15956)){
var statearr_16054_17081 = state_16008__$1;
(statearr_16054_17081[(1)] = (27));

} else {
var statearr_16055_17082 = state_16008__$1;
(statearr_16055_17082[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (34))){
var state_16008__$1 = state_16008;
var statearr_16056_17083 = state_16008__$1;
(statearr_16056_17083[(2)] = null);

(statearr_16056_17083[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (17))){
var state_16008__$1 = state_16008;
var statearr_16057_17084 = state_16008__$1;
(statearr_16057_17084[(2)] = null);

(statearr_16057_17084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (3))){
var inst_16006 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16008__$1,inst_16006);
} else {
if((state_val_16009 === (12))){
var inst_15937 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16058_17085 = state_16008__$1;
(statearr_16058_17085[(2)] = inst_15937);

(statearr_16058_17085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (2))){
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16008__$1,(4),ch);
} else {
if((state_val_16009 === (23))){
var state_16008__$1 = state_16008;
var statearr_16059_17086 = state_16008__$1;
(statearr_16059_17086[(2)] = null);

(statearr_16059_17086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (35))){
var inst_15990 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16060_17087 = state_16008__$1;
(statearr_16060_17087[(2)] = inst_15990);

(statearr_16060_17087[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (19))){
var inst_15909 = (state_16008[(7)]);
var inst_15913 = cljs.core.chunk_first(inst_15909);
var inst_15914 = cljs.core.chunk_rest(inst_15909);
var inst_15915 = cljs.core.count(inst_15913);
var inst_15887 = inst_15914;
var inst_15888 = inst_15913;
var inst_15889 = inst_15915;
var inst_15890 = (0);
var state_16008__$1 = (function (){var statearr_16061 = state_16008;
(statearr_16061[(14)] = inst_15888);

(statearr_16061[(15)] = inst_15887);

(statearr_16061[(16)] = inst_15890);

(statearr_16061[(17)] = inst_15889);

return statearr_16061;
})();
var statearr_16062_17088 = state_16008__$1;
(statearr_16062_17088[(2)] = null);

(statearr_16062_17088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (11))){
var inst_15909 = (state_16008[(7)]);
var inst_15887 = (state_16008[(15)]);
var inst_15909__$1 = cljs.core.seq(inst_15887);
var state_16008__$1 = (function (){var statearr_16063 = state_16008;
(statearr_16063[(7)] = inst_15909__$1);

return statearr_16063;
})();
if(inst_15909__$1){
var statearr_16064_17089 = state_16008__$1;
(statearr_16064_17089[(1)] = (16));

} else {
var statearr_16065_17090 = state_16008__$1;
(statearr_16065_17090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (9))){
var inst_15939 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16066_17091 = state_16008__$1;
(statearr_16066_17091[(2)] = inst_15939);

(statearr_16066_17091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (5))){
var inst_15885 = cljs.core.deref(cs);
var inst_15886 = cljs.core.seq(inst_15885);
var inst_15887 = inst_15886;
var inst_15888 = null;
var inst_15889 = (0);
var inst_15890 = (0);
var state_16008__$1 = (function (){var statearr_16067 = state_16008;
(statearr_16067[(14)] = inst_15888);

(statearr_16067[(15)] = inst_15887);

(statearr_16067[(16)] = inst_15890);

(statearr_16067[(17)] = inst_15889);

return statearr_16067;
})();
var statearr_16068_17112 = state_16008__$1;
(statearr_16068_17112[(2)] = null);

(statearr_16068_17112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (14))){
var state_16008__$1 = state_16008;
var statearr_16069_17113 = state_16008__$1;
(statearr_16069_17113[(2)] = null);

(statearr_16069_17113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (45))){
var inst_15998 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16070_17114 = state_16008__$1;
(statearr_16070_17114[(2)] = inst_15998);

(statearr_16070_17114[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (26))){
var inst_15942 = (state_16008[(27)]);
var inst_15994 = (state_16008[(2)]);
var inst_15995 = cljs.core.seq(inst_15942);
var state_16008__$1 = (function (){var statearr_16071 = state_16008;
(statearr_16071[(29)] = inst_15994);

return statearr_16071;
})();
if(inst_15995){
var statearr_16072_17115 = state_16008__$1;
(statearr_16072_17115[(1)] = (42));

} else {
var statearr_16073_17116 = state_16008__$1;
(statearr_16073_17116[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (16))){
var inst_15909 = (state_16008[(7)]);
var inst_15911 = cljs.core.chunked_seq_QMARK_(inst_15909);
var state_16008__$1 = state_16008;
if(inst_15911){
var statearr_16074_17117 = state_16008__$1;
(statearr_16074_17117[(1)] = (19));

} else {
var statearr_16075_17118 = state_16008__$1;
(statearr_16075_17118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (38))){
var inst_15987 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16076_17119 = state_16008__$1;
(statearr_16076_17119[(2)] = inst_15987);

(statearr_16076_17119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (30))){
var state_16008__$1 = state_16008;
var statearr_16077_17120 = state_16008__$1;
(statearr_16077_17120[(2)] = null);

(statearr_16077_17120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (10))){
var inst_15888 = (state_16008[(14)]);
var inst_15890 = (state_16008[(16)]);
var inst_15898 = cljs.core._nth(inst_15888,inst_15890);
var inst_15899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15898,(0),null);
var inst_15900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15898,(1),null);
var state_16008__$1 = (function (){var statearr_16078 = state_16008;
(statearr_16078[(24)] = inst_15899);

return statearr_16078;
})();
if(cljs.core.truth_(inst_15900)){
var statearr_16079_17121 = state_16008__$1;
(statearr_16079_17121[(1)] = (13));

} else {
var statearr_16080_17122 = state_16008__$1;
(statearr_16080_17122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (18))){
var inst_15935 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16081_17123 = state_16008__$1;
(statearr_16081_17123[(2)] = inst_15935);

(statearr_16081_17123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (42))){
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16008__$1,(45),dchan);
} else {
if((state_val_16009 === (37))){
var inst_15878 = (state_16008[(9)]);
var inst_15977 = (state_16008[(22)]);
var inst_15968 = (state_16008[(23)]);
var inst_15977__$1 = cljs.core.first(inst_15968);
var inst_15978 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15977__$1,inst_15878,done);
var state_16008__$1 = (function (){var statearr_16082 = state_16008;
(statearr_16082[(22)] = inst_15977__$1);

return statearr_16082;
})();
if(cljs.core.truth_(inst_15978)){
var statearr_16083_17151 = state_16008__$1;
(statearr_16083_17151[(1)] = (39));

} else {
var statearr_16084_17152 = state_16008__$1;
(statearr_16084_17152[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (8))){
var inst_15890 = (state_16008[(16)]);
var inst_15889 = (state_16008[(17)]);
var inst_15892 = (inst_15890 < inst_15889);
var inst_15893 = inst_15892;
var state_16008__$1 = state_16008;
if(cljs.core.truth_(inst_15893)){
var statearr_16085_17153 = state_16008__$1;
(statearr_16085_17153[(1)] = (10));

} else {
var statearr_16086_17154 = state_16008__$1;
(statearr_16086_17154[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15283__auto__ = null;
var cljs$core$async$mult_$_state_machine__15283__auto____0 = (function (){
var statearr_16087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16087[(0)] = cljs$core$async$mult_$_state_machine__15283__auto__);

(statearr_16087[(1)] = (1));

return statearr_16087;
});
var cljs$core$async$mult_$_state_machine__15283__auto____1 = (function (state_16008){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16008);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16088){var ex__15286__auto__ = e16088;
var statearr_16089_17155 = state_16008;
(statearr_16089_17155[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16008[(4)]))){
var statearr_16090_17156 = state_16008;
(statearr_16090_17156[(1)] = cljs.core.first((state_16008[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17157 = state_16008;
state_16008 = G__17157;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15283__auto__ = function(state_16008){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15283__auto____1.call(this,state_16008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15283__auto____0;
cljs$core$async$mult_$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15283__auto____1;
return cljs$core$async$mult_$_state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16091 = f__15319__auto__();
(statearr_16091[(6)] = c__15318__auto___17053);

return statearr_16091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16093 = arguments.length;
switch (G__16093) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17159 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17159(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17160 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17160(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17161 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17161(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17162 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17162(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17163 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17163(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17164 = arguments.length;
var i__5727__auto___17165 = (0);
while(true){
if((i__5727__auto___17165 < len__5726__auto___17164)){
args__5732__auto__.push((arguments[i__5727__auto___17165]));

var G__17166 = (i__5727__auto___17165 + (1));
i__5727__auto___17165 = G__17166;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16098){
var map__16099 = p__16098;
var map__16099__$1 = cljs.core.__destructure_map(map__16099);
var opts = map__16099__$1;
var statearr_16100_17167 = state;
(statearr_16100_17167[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16101_17168 = state;
(statearr_16101_17168[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16102_17169 = state;
(statearr_16102_17169[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16094){
var G__16095 = cljs.core.first(seq16094);
var seq16094__$1 = cljs.core.next(seq16094);
var G__16096 = cljs.core.first(seq16094__$1);
var seq16094__$2 = cljs.core.next(seq16094__$1);
var G__16097 = cljs.core.first(seq16094__$2);
var seq16094__$3 = cljs.core.next(seq16094__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16095,G__16096,G__16097,seq16094__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16103 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16104){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16104 = meta16104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16105,meta16104__$1){
var self__ = this;
var _16105__$1 = this;
return (new cljs.core.async.t_cljs$core$async16103(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16104__$1));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16105){
var self__ = this;
var _16105__$1 = this;
return self__.meta16104;
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16104","meta16104",1419047555,null)], null);
}));

(cljs.core.async.t_cljs$core$async16103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16103");

(cljs.core.async.t_cljs$core$async16103.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16103.
 */
cljs.core.async.__GT_t_cljs$core$async16103 = (function cljs$core$async$__GT_t_cljs$core$async16103(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16104){
return (new cljs.core.async.t_cljs$core$async16103(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16104));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16103(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15318__auto___17170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16173){
var state_val_16174 = (state_16173[(1)]);
if((state_val_16174 === (7))){
var inst_16133 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
if(cljs.core.truth_(inst_16133)){
var statearr_16175_17171 = state_16173__$1;
(statearr_16175_17171[(1)] = (8));

} else {
var statearr_16176_17172 = state_16173__$1;
(statearr_16176_17172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (20))){
var inst_16126 = (state_16173[(7)]);
var state_16173__$1 = state_16173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16173__$1,(23),out,inst_16126);
} else {
if((state_val_16174 === (1))){
var inst_16109 = calc_state();
var inst_16110 = cljs.core.__destructure_map(inst_16109);
var inst_16111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16110,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16110,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16110,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16114 = inst_16109;
var state_16173__$1 = (function (){var statearr_16177 = state_16173;
(statearr_16177[(8)] = inst_16112);

(statearr_16177[(9)] = inst_16111);

(statearr_16177[(10)] = inst_16113);

(statearr_16177[(11)] = inst_16114);

return statearr_16177;
})();
var statearr_16178_17173 = state_16173__$1;
(statearr_16178_17173[(2)] = null);

(statearr_16178_17173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (24))){
var inst_16117 = (state_16173[(12)]);
var inst_16114 = inst_16117;
var state_16173__$1 = (function (){var statearr_16179 = state_16173;
(statearr_16179[(11)] = inst_16114);

return statearr_16179;
})();
var statearr_16180_17174 = state_16173__$1;
(statearr_16180_17174[(2)] = null);

(statearr_16180_17174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (4))){
var inst_16126 = (state_16173[(7)]);
var inst_16128 = (state_16173[(13)]);
var inst_16125 = (state_16173[(2)]);
var inst_16126__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16125,(0),null);
var inst_16127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16125,(1),null);
var inst_16128__$1 = (inst_16126__$1 == null);
var state_16173__$1 = (function (){var statearr_16181 = state_16173;
(statearr_16181[(7)] = inst_16126__$1);

(statearr_16181[(13)] = inst_16128__$1);

(statearr_16181[(14)] = inst_16127);

return statearr_16181;
})();
if(cljs.core.truth_(inst_16128__$1)){
var statearr_16182_17175 = state_16173__$1;
(statearr_16182_17175[(1)] = (5));

} else {
var statearr_16183_17176 = state_16173__$1;
(statearr_16183_17176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (15))){
var inst_16118 = (state_16173[(15)]);
var inst_16147 = (state_16173[(16)]);
var inst_16147__$1 = cljs.core.empty_QMARK_(inst_16118);
var state_16173__$1 = (function (){var statearr_16184 = state_16173;
(statearr_16184[(16)] = inst_16147__$1);

return statearr_16184;
})();
if(inst_16147__$1){
var statearr_16185_17177 = state_16173__$1;
(statearr_16185_17177[(1)] = (17));

} else {
var statearr_16186_17178 = state_16173__$1;
(statearr_16186_17178[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (21))){
var inst_16117 = (state_16173[(12)]);
var inst_16114 = inst_16117;
var state_16173__$1 = (function (){var statearr_16187 = state_16173;
(statearr_16187[(11)] = inst_16114);

return statearr_16187;
})();
var statearr_16188_17179 = state_16173__$1;
(statearr_16188_17179[(2)] = null);

(statearr_16188_17179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (13))){
var inst_16140 = (state_16173[(2)]);
var inst_16141 = calc_state();
var inst_16114 = inst_16141;
var state_16173__$1 = (function (){var statearr_16189 = state_16173;
(statearr_16189[(17)] = inst_16140);

(statearr_16189[(11)] = inst_16114);

return statearr_16189;
})();
var statearr_16190_17180 = state_16173__$1;
(statearr_16190_17180[(2)] = null);

(statearr_16190_17180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (22))){
var inst_16167 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16191_17181 = state_16173__$1;
(statearr_16191_17181[(2)] = inst_16167);

(statearr_16191_17181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (6))){
var inst_16127 = (state_16173[(14)]);
var inst_16131 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16127,change);
var state_16173__$1 = state_16173;
var statearr_16192_17182 = state_16173__$1;
(statearr_16192_17182[(2)] = inst_16131);

(statearr_16192_17182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (25))){
var state_16173__$1 = state_16173;
var statearr_16193_17183 = state_16173__$1;
(statearr_16193_17183[(2)] = null);

(statearr_16193_17183[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (17))){
var inst_16119 = (state_16173[(18)]);
var inst_16127 = (state_16173[(14)]);
var inst_16149 = (inst_16119.cljs$core$IFn$_invoke$arity$1 ? inst_16119.cljs$core$IFn$_invoke$arity$1(inst_16127) : inst_16119.call(null, inst_16127));
var inst_16150 = cljs.core.not(inst_16149);
var state_16173__$1 = state_16173;
var statearr_16194_17184 = state_16173__$1;
(statearr_16194_17184[(2)] = inst_16150);

(statearr_16194_17184[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (3))){
var inst_16171 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16173__$1,inst_16171);
} else {
if((state_val_16174 === (12))){
var state_16173__$1 = state_16173;
var statearr_16195_17185 = state_16173__$1;
(statearr_16195_17185[(2)] = null);

(statearr_16195_17185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (2))){
var inst_16117 = (state_16173[(12)]);
var inst_16114 = (state_16173[(11)]);
var inst_16117__$1 = cljs.core.__destructure_map(inst_16114);
var inst_16118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16117__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16117__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16117__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16173__$1 = (function (){var statearr_16196 = state_16173;
(statearr_16196[(12)] = inst_16117__$1);

(statearr_16196[(18)] = inst_16119);

(statearr_16196[(15)] = inst_16118);

return statearr_16196;
})();
return cljs.core.async.ioc_alts_BANG_(state_16173__$1,(4),inst_16120);
} else {
if((state_val_16174 === (23))){
var inst_16158 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
if(cljs.core.truth_(inst_16158)){
var statearr_16197_17186 = state_16173__$1;
(statearr_16197_17186[(1)] = (24));

} else {
var statearr_16198_17187 = state_16173__$1;
(statearr_16198_17187[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (19))){
var inst_16153 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16199_17188 = state_16173__$1;
(statearr_16199_17188[(2)] = inst_16153);

(statearr_16199_17188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (11))){
var inst_16127 = (state_16173[(14)]);
var inst_16137 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16127);
var state_16173__$1 = state_16173;
var statearr_16200_17189 = state_16173__$1;
(statearr_16200_17189[(2)] = inst_16137);

(statearr_16200_17189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (9))){
var inst_16118 = (state_16173[(15)]);
var inst_16144 = (state_16173[(19)]);
var inst_16127 = (state_16173[(14)]);
var inst_16144__$1 = (inst_16118.cljs$core$IFn$_invoke$arity$1 ? inst_16118.cljs$core$IFn$_invoke$arity$1(inst_16127) : inst_16118.call(null, inst_16127));
var state_16173__$1 = (function (){var statearr_16201 = state_16173;
(statearr_16201[(19)] = inst_16144__$1);

return statearr_16201;
})();
if(cljs.core.truth_(inst_16144__$1)){
var statearr_16202_17190 = state_16173__$1;
(statearr_16202_17190[(1)] = (14));

} else {
var statearr_16203_17191 = state_16173__$1;
(statearr_16203_17191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (5))){
var inst_16128 = (state_16173[(13)]);
var state_16173__$1 = state_16173;
var statearr_16204_17192 = state_16173__$1;
(statearr_16204_17192[(2)] = inst_16128);

(statearr_16204_17192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (14))){
var inst_16144 = (state_16173[(19)]);
var state_16173__$1 = state_16173;
var statearr_16205_17193 = state_16173__$1;
(statearr_16205_17193[(2)] = inst_16144);

(statearr_16205_17193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (26))){
var inst_16163 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16206_17194 = state_16173__$1;
(statearr_16206_17194[(2)] = inst_16163);

(statearr_16206_17194[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (16))){
var inst_16155 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
if(cljs.core.truth_(inst_16155)){
var statearr_16207_17195 = state_16173__$1;
(statearr_16207_17195[(1)] = (20));

} else {
var statearr_16208_17196 = state_16173__$1;
(statearr_16208_17196[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (10))){
var inst_16169 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16209_17197 = state_16173__$1;
(statearr_16209_17197[(2)] = inst_16169);

(statearr_16209_17197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (18))){
var inst_16147 = (state_16173[(16)]);
var state_16173__$1 = state_16173;
var statearr_16210_17198 = state_16173__$1;
(statearr_16210_17198[(2)] = inst_16147);

(statearr_16210_17198[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (8))){
var inst_16126 = (state_16173[(7)]);
var inst_16135 = (inst_16126 == null);
var state_16173__$1 = state_16173;
if(cljs.core.truth_(inst_16135)){
var statearr_16211_17199 = state_16173__$1;
(statearr_16211_17199[(1)] = (11));

} else {
var statearr_16212_17200 = state_16173__$1;
(statearr_16212_17200[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15283__auto__ = null;
var cljs$core$async$mix_$_state_machine__15283__auto____0 = (function (){
var statearr_16213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16213[(0)] = cljs$core$async$mix_$_state_machine__15283__auto__);

(statearr_16213[(1)] = (1));

return statearr_16213;
});
var cljs$core$async$mix_$_state_machine__15283__auto____1 = (function (state_16173){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16173);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16214){var ex__15286__auto__ = e16214;
var statearr_16215_17201 = state_16173;
(statearr_16215_17201[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16173[(4)]))){
var statearr_16216_17202 = state_16173;
(statearr_16216_17202[(1)] = cljs.core.first((state_16173[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17203 = state_16173;
state_16173 = G__17203;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15283__auto__ = function(state_16173){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15283__auto____1.call(this,state_16173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15283__auto____0;
cljs$core$async$mix_$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15283__auto____1;
return cljs$core$async$mix_$_state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16217 = f__15319__auto__();
(statearr_16217[(6)] = c__15318__auto___17170);

return statearr_16217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17204 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17204(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17205 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17205(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17206 = (function() {
var G__17207 = null;
var G__17207__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17207__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17207 = function(p,v){
switch(arguments.length){
case 1:
return G__17207__1.call(this,p);
case 2:
return G__17207__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17207.cljs$core$IFn$_invoke$arity$1 = G__17207__1;
G__17207.cljs$core$IFn$_invoke$arity$2 = G__17207__2;
return G__17207;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16219 = arguments.length;
switch (G__16219) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17206(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17206(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16223 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16224){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16224 = meta16224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16225,meta16224__$1){
var self__ = this;
var _16225__$1 = this;
return (new cljs.core.async.t_cljs$core$async16223(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16224__$1));
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16225){
var self__ = this;
var _16225__$1 = this;
return self__.meta16224;
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16224","meta16224",-1240340960,null)], null);
}));

(cljs.core.async.t_cljs$core$async16223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16223");

(cljs.core.async.t_cljs$core$async16223.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16223.
 */
cljs.core.async.__GT_t_cljs$core$async16223 = (function cljs$core$async$__GT_t_cljs$core$async16223(ch,topic_fn,buf_fn,mults,ensure_mult,meta16224){
return (new cljs.core.async.t_cljs$core$async16223(ch,topic_fn,buf_fn,mults,ensure_mult,meta16224));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16222 = arguments.length;
switch (G__16222) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16220_SHARP_){
if(cljs.core.truth_((p1__16220_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16220_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16220_SHARP_.call(null, topic)))){
return p1__16220_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16220_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16223(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15318__auto___17229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16297){
var state_val_16298 = (state_16297[(1)]);
if((state_val_16298 === (7))){
var inst_16293 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
var statearr_16299_17230 = state_16297__$1;
(statearr_16299_17230[(2)] = inst_16293);

(statearr_16299_17230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (20))){
var state_16297__$1 = state_16297;
var statearr_16300_17231 = state_16297__$1;
(statearr_16300_17231[(2)] = null);

(statearr_16300_17231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (1))){
var state_16297__$1 = state_16297;
var statearr_16301_17232 = state_16297__$1;
(statearr_16301_17232[(2)] = null);

(statearr_16301_17232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (24))){
var inst_16276 = (state_16297[(7)]);
var inst_16285 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16276);
var state_16297__$1 = state_16297;
var statearr_16302_17233 = state_16297__$1;
(statearr_16302_17233[(2)] = inst_16285);

(statearr_16302_17233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (4))){
var inst_16228 = (state_16297[(8)]);
var inst_16228__$1 = (state_16297[(2)]);
var inst_16229 = (inst_16228__$1 == null);
var state_16297__$1 = (function (){var statearr_16303 = state_16297;
(statearr_16303[(8)] = inst_16228__$1);

return statearr_16303;
})();
if(cljs.core.truth_(inst_16229)){
var statearr_16304_17234 = state_16297__$1;
(statearr_16304_17234[(1)] = (5));

} else {
var statearr_16305_17235 = state_16297__$1;
(statearr_16305_17235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (15))){
var inst_16270 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
var statearr_16306_17236 = state_16297__$1;
(statearr_16306_17236[(2)] = inst_16270);

(statearr_16306_17236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (21))){
var inst_16290 = (state_16297[(2)]);
var state_16297__$1 = (function (){var statearr_16307 = state_16297;
(statearr_16307[(9)] = inst_16290);

return statearr_16307;
})();
var statearr_16308_17237 = state_16297__$1;
(statearr_16308_17237[(2)] = null);

(statearr_16308_17237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (13))){
var inst_16252 = (state_16297[(10)]);
var inst_16254 = cljs.core.chunked_seq_QMARK_(inst_16252);
var state_16297__$1 = state_16297;
if(inst_16254){
var statearr_16309_17238 = state_16297__$1;
(statearr_16309_17238[(1)] = (16));

} else {
var statearr_16310_17239 = state_16297__$1;
(statearr_16310_17239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (22))){
var inst_16282 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
if(cljs.core.truth_(inst_16282)){
var statearr_16311_17240 = state_16297__$1;
(statearr_16311_17240[(1)] = (23));

} else {
var statearr_16312_17241 = state_16297__$1;
(statearr_16312_17241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (6))){
var inst_16276 = (state_16297[(7)]);
var inst_16228 = (state_16297[(8)]);
var inst_16278 = (state_16297[(11)]);
var inst_16276__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16228) : topic_fn.call(null, inst_16228));
var inst_16277 = cljs.core.deref(mults);
var inst_16278__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16277,inst_16276__$1);
var state_16297__$1 = (function (){var statearr_16313 = state_16297;
(statearr_16313[(7)] = inst_16276__$1);

(statearr_16313[(11)] = inst_16278__$1);

return statearr_16313;
})();
if(cljs.core.truth_(inst_16278__$1)){
var statearr_16314_17242 = state_16297__$1;
(statearr_16314_17242[(1)] = (19));

} else {
var statearr_16315_17243 = state_16297__$1;
(statearr_16315_17243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (25))){
var inst_16287 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
var statearr_16316_17244 = state_16297__$1;
(statearr_16316_17244[(2)] = inst_16287);

(statearr_16316_17244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (17))){
var inst_16252 = (state_16297[(10)]);
var inst_16261 = cljs.core.first(inst_16252);
var inst_16262 = cljs.core.async.muxch_STAR_(inst_16261);
var inst_16263 = cljs.core.async.close_BANG_(inst_16262);
var inst_16264 = cljs.core.next(inst_16252);
var inst_16238 = inst_16264;
var inst_16239 = null;
var inst_16240 = (0);
var inst_16241 = (0);
var state_16297__$1 = (function (){var statearr_16317 = state_16297;
(statearr_16317[(12)] = inst_16240);

(statearr_16317[(13)] = inst_16239);

(statearr_16317[(14)] = inst_16263);

(statearr_16317[(15)] = inst_16238);

(statearr_16317[(16)] = inst_16241);

return statearr_16317;
})();
var statearr_16318_17245 = state_16297__$1;
(statearr_16318_17245[(2)] = null);

(statearr_16318_17245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (3))){
var inst_16295 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16297__$1,inst_16295);
} else {
if((state_val_16298 === (12))){
var inst_16272 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
var statearr_16319_17246 = state_16297__$1;
(statearr_16319_17246[(2)] = inst_16272);

(statearr_16319_17246[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (2))){
var state_16297__$1 = state_16297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16297__$1,(4),ch);
} else {
if((state_val_16298 === (23))){
var state_16297__$1 = state_16297;
var statearr_16320_17247 = state_16297__$1;
(statearr_16320_17247[(2)] = null);

(statearr_16320_17247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (19))){
var inst_16228 = (state_16297[(8)]);
var inst_16278 = (state_16297[(11)]);
var inst_16280 = cljs.core.async.muxch_STAR_(inst_16278);
var state_16297__$1 = state_16297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16297__$1,(22),inst_16280,inst_16228);
} else {
if((state_val_16298 === (11))){
var inst_16252 = (state_16297[(10)]);
var inst_16238 = (state_16297[(15)]);
var inst_16252__$1 = cljs.core.seq(inst_16238);
var state_16297__$1 = (function (){var statearr_16321 = state_16297;
(statearr_16321[(10)] = inst_16252__$1);

return statearr_16321;
})();
if(inst_16252__$1){
var statearr_16322_17248 = state_16297__$1;
(statearr_16322_17248[(1)] = (13));

} else {
var statearr_16323_17249 = state_16297__$1;
(statearr_16323_17249[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (9))){
var inst_16274 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
var statearr_16324_17250 = state_16297__$1;
(statearr_16324_17250[(2)] = inst_16274);

(statearr_16324_17250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (5))){
var inst_16235 = cljs.core.deref(mults);
var inst_16236 = cljs.core.vals(inst_16235);
var inst_16237 = cljs.core.seq(inst_16236);
var inst_16238 = inst_16237;
var inst_16239 = null;
var inst_16240 = (0);
var inst_16241 = (0);
var state_16297__$1 = (function (){var statearr_16325 = state_16297;
(statearr_16325[(12)] = inst_16240);

(statearr_16325[(13)] = inst_16239);

(statearr_16325[(15)] = inst_16238);

(statearr_16325[(16)] = inst_16241);

return statearr_16325;
})();
var statearr_16326_17251 = state_16297__$1;
(statearr_16326_17251[(2)] = null);

(statearr_16326_17251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (14))){
var state_16297__$1 = state_16297;
var statearr_16330_17252 = state_16297__$1;
(statearr_16330_17252[(2)] = null);

(statearr_16330_17252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (16))){
var inst_16252 = (state_16297[(10)]);
var inst_16256 = cljs.core.chunk_first(inst_16252);
var inst_16257 = cljs.core.chunk_rest(inst_16252);
var inst_16258 = cljs.core.count(inst_16256);
var inst_16238 = inst_16257;
var inst_16239 = inst_16256;
var inst_16240 = inst_16258;
var inst_16241 = (0);
var state_16297__$1 = (function (){var statearr_16331 = state_16297;
(statearr_16331[(12)] = inst_16240);

(statearr_16331[(13)] = inst_16239);

(statearr_16331[(15)] = inst_16238);

(statearr_16331[(16)] = inst_16241);

return statearr_16331;
})();
var statearr_16332_17253 = state_16297__$1;
(statearr_16332_17253[(2)] = null);

(statearr_16332_17253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (10))){
var inst_16240 = (state_16297[(12)]);
var inst_16239 = (state_16297[(13)]);
var inst_16238 = (state_16297[(15)]);
var inst_16241 = (state_16297[(16)]);
var inst_16246 = cljs.core._nth(inst_16239,inst_16241);
var inst_16247 = cljs.core.async.muxch_STAR_(inst_16246);
var inst_16248 = cljs.core.async.close_BANG_(inst_16247);
var inst_16249 = (inst_16241 + (1));
var tmp16327 = inst_16240;
var tmp16328 = inst_16239;
var tmp16329 = inst_16238;
var inst_16238__$1 = tmp16329;
var inst_16239__$1 = tmp16328;
var inst_16240__$1 = tmp16327;
var inst_16241__$1 = inst_16249;
var state_16297__$1 = (function (){var statearr_16333 = state_16297;
(statearr_16333[(12)] = inst_16240__$1);

(statearr_16333[(13)] = inst_16239__$1);

(statearr_16333[(15)] = inst_16238__$1);

(statearr_16333[(17)] = inst_16248);

(statearr_16333[(16)] = inst_16241__$1);

return statearr_16333;
})();
var statearr_16334_17254 = state_16297__$1;
(statearr_16334_17254[(2)] = null);

(statearr_16334_17254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (18))){
var inst_16267 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
var statearr_16335_17255 = state_16297__$1;
(statearr_16335_17255[(2)] = inst_16267);

(statearr_16335_17255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16298 === (8))){
var inst_16240 = (state_16297[(12)]);
var inst_16241 = (state_16297[(16)]);
var inst_16243 = (inst_16241 < inst_16240);
var inst_16244 = inst_16243;
var state_16297__$1 = state_16297;
if(cljs.core.truth_(inst_16244)){
var statearr_16336_17256 = state_16297__$1;
(statearr_16336_17256[(1)] = (10));

} else {
var statearr_16337_17257 = state_16297__$1;
(statearr_16337_17257[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_16338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16338[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_16338[(1)] = (1));

return statearr_16338;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_16297){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16297);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16339){var ex__15286__auto__ = e16339;
var statearr_16340_17258 = state_16297;
(statearr_16340_17258[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16297[(4)]))){
var statearr_16341_17259 = state_16297;
(statearr_16341_17259[(1)] = cljs.core.first((state_16297[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17260 = state_16297;
state_16297 = G__17260;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_16297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_16297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16342 = f__15319__auto__();
(statearr_16342[(6)] = c__15318__auto___17229);

return statearr_16342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16344 = arguments.length;
switch (G__16344) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16346 = arguments.length;
switch (G__16346) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16348 = arguments.length;
switch (G__16348) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15318__auto___17264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16391){
var state_val_16392 = (state_16391[(1)]);
if((state_val_16392 === (7))){
var state_16391__$1 = state_16391;
var statearr_16393_17265 = state_16391__$1;
(statearr_16393_17265[(2)] = null);

(statearr_16393_17265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (1))){
var state_16391__$1 = state_16391;
var statearr_16394_17266 = state_16391__$1;
(statearr_16394_17266[(2)] = null);

(statearr_16394_17266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (4))){
var inst_16352 = (state_16391[(7)]);
var inst_16351 = (state_16391[(8)]);
var inst_16354 = (inst_16352 < inst_16351);
var state_16391__$1 = state_16391;
if(cljs.core.truth_(inst_16354)){
var statearr_16395_17267 = state_16391__$1;
(statearr_16395_17267[(1)] = (6));

} else {
var statearr_16396_17268 = state_16391__$1;
(statearr_16396_17268[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (15))){
var inst_16377 = (state_16391[(9)]);
var inst_16382 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16377);
var state_16391__$1 = state_16391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16391__$1,(17),out,inst_16382);
} else {
if((state_val_16392 === (13))){
var inst_16377 = (state_16391[(9)]);
var inst_16377__$1 = (state_16391[(2)]);
var inst_16378 = cljs.core.some(cljs.core.nil_QMARK_,inst_16377__$1);
var state_16391__$1 = (function (){var statearr_16397 = state_16391;
(statearr_16397[(9)] = inst_16377__$1);

return statearr_16397;
})();
if(cljs.core.truth_(inst_16378)){
var statearr_16398_17269 = state_16391__$1;
(statearr_16398_17269[(1)] = (14));

} else {
var statearr_16399_17270 = state_16391__$1;
(statearr_16399_17270[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (6))){
var state_16391__$1 = state_16391;
var statearr_16400_17271 = state_16391__$1;
(statearr_16400_17271[(2)] = null);

(statearr_16400_17271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (17))){
var inst_16384 = (state_16391[(2)]);
var state_16391__$1 = (function (){var statearr_16402 = state_16391;
(statearr_16402[(10)] = inst_16384);

return statearr_16402;
})();
var statearr_16403_17272 = state_16391__$1;
(statearr_16403_17272[(2)] = null);

(statearr_16403_17272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (3))){
var inst_16389 = (state_16391[(2)]);
var state_16391__$1 = state_16391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16391__$1,inst_16389);
} else {
if((state_val_16392 === (12))){
var _ = (function (){var statearr_16404 = state_16391;
(statearr_16404[(4)] = cljs.core.rest((state_16391[(4)])));

return statearr_16404;
})();
var state_16391__$1 = state_16391;
var ex16401 = (state_16391__$1[(2)]);
var statearr_16405_17273 = state_16391__$1;
(statearr_16405_17273[(5)] = ex16401);


if((ex16401 instanceof Object)){
var statearr_16406_17274 = state_16391__$1;
(statearr_16406_17274[(1)] = (11));

(statearr_16406_17274[(5)] = null);

} else {
throw ex16401;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (2))){
var inst_16350 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16351 = cnt;
var inst_16352 = (0);
var state_16391__$1 = (function (){var statearr_16407 = state_16391;
(statearr_16407[(7)] = inst_16352);

(statearr_16407[(11)] = inst_16350);

(statearr_16407[(8)] = inst_16351);

return statearr_16407;
})();
var statearr_16408_17275 = state_16391__$1;
(statearr_16408_17275[(2)] = null);

(statearr_16408_17275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (11))){
var inst_16356 = (state_16391[(2)]);
var inst_16357 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16391__$1 = (function (){var statearr_16409 = state_16391;
(statearr_16409[(12)] = inst_16356);

return statearr_16409;
})();
var statearr_16410_17276 = state_16391__$1;
(statearr_16410_17276[(2)] = inst_16357);

(statearr_16410_17276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (9))){
var inst_16352 = (state_16391[(7)]);
var _ = (function (){var statearr_16411 = state_16391;
(statearr_16411[(4)] = cljs.core.cons((12),(state_16391[(4)])));

return statearr_16411;
})();
var inst_16363 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16352) : chs__$1.call(null, inst_16352));
var inst_16364 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16352) : done.call(null, inst_16352));
var inst_16365 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16363,inst_16364);
var ___$1 = (function (){var statearr_16412 = state_16391;
(statearr_16412[(4)] = cljs.core.rest((state_16391[(4)])));

return statearr_16412;
})();
var state_16391__$1 = state_16391;
var statearr_16413_17277 = state_16391__$1;
(statearr_16413_17277[(2)] = inst_16365);

(statearr_16413_17277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (5))){
var inst_16375 = (state_16391[(2)]);
var state_16391__$1 = (function (){var statearr_16414 = state_16391;
(statearr_16414[(13)] = inst_16375);

return statearr_16414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16391__$1,(13),dchan);
} else {
if((state_val_16392 === (14))){
var inst_16380 = cljs.core.async.close_BANG_(out);
var state_16391__$1 = state_16391;
var statearr_16415_17278 = state_16391__$1;
(statearr_16415_17278[(2)] = inst_16380);

(statearr_16415_17278[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (16))){
var inst_16387 = (state_16391[(2)]);
var state_16391__$1 = state_16391;
var statearr_16416_17279 = state_16391__$1;
(statearr_16416_17279[(2)] = inst_16387);

(statearr_16416_17279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (10))){
var inst_16352 = (state_16391[(7)]);
var inst_16368 = (state_16391[(2)]);
var inst_16369 = (inst_16352 + (1));
var inst_16352__$1 = inst_16369;
var state_16391__$1 = (function (){var statearr_16417 = state_16391;
(statearr_16417[(14)] = inst_16368);

(statearr_16417[(7)] = inst_16352__$1);

return statearr_16417;
})();
var statearr_16418_17280 = state_16391__$1;
(statearr_16418_17280[(2)] = null);

(statearr_16418_17280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (8))){
var inst_16373 = (state_16391[(2)]);
var state_16391__$1 = state_16391;
var statearr_16419_17281 = state_16391__$1;
(statearr_16419_17281[(2)] = inst_16373);

(statearr_16419_17281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_16420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16420[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_16420[(1)] = (1));

return statearr_16420;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_16391){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16391);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16421){var ex__15286__auto__ = e16421;
var statearr_16422_17282 = state_16391;
(statearr_16422_17282[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16391[(4)]))){
var statearr_16423_17283 = state_16391;
(statearr_16423_17283[(1)] = cljs.core.first((state_16391[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17284 = state_16391;
state_16391 = G__17284;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_16391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_16391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16424 = f__15319__auto__();
(statearr_16424[(6)] = c__15318__auto___17264);

return statearr_16424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16427 = arguments.length;
switch (G__16427) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15318__auto___17286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16459){
var state_val_16460 = (state_16459[(1)]);
if((state_val_16460 === (7))){
var inst_16439 = (state_16459[(7)]);
var inst_16438 = (state_16459[(8)]);
var inst_16438__$1 = (state_16459[(2)]);
var inst_16439__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16438__$1,(0),null);
var inst_16440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16438__$1,(1),null);
var inst_16441 = (inst_16439__$1 == null);
var state_16459__$1 = (function (){var statearr_16461 = state_16459;
(statearr_16461[(7)] = inst_16439__$1);

(statearr_16461[(9)] = inst_16440);

(statearr_16461[(8)] = inst_16438__$1);

return statearr_16461;
})();
if(cljs.core.truth_(inst_16441)){
var statearr_16462_17287 = state_16459__$1;
(statearr_16462_17287[(1)] = (8));

} else {
var statearr_16463_17288 = state_16459__$1;
(statearr_16463_17288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16460 === (1))){
var inst_16428 = cljs.core.vec(chs);
var inst_16429 = inst_16428;
var state_16459__$1 = (function (){var statearr_16464 = state_16459;
(statearr_16464[(10)] = inst_16429);

return statearr_16464;
})();
var statearr_16465_17289 = state_16459__$1;
(statearr_16465_17289[(2)] = null);

(statearr_16465_17289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16460 === (4))){
var inst_16429 = (state_16459[(10)]);
var state_16459__$1 = state_16459;
return cljs.core.async.ioc_alts_BANG_(state_16459__$1,(7),inst_16429);
} else {
if((state_val_16460 === (6))){
var inst_16455 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
var statearr_16466_17290 = state_16459__$1;
(statearr_16466_17290[(2)] = inst_16455);

(statearr_16466_17290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16460 === (3))){
var inst_16457 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16459__$1,inst_16457);
} else {
if((state_val_16460 === (2))){
var inst_16429 = (state_16459[(10)]);
var inst_16431 = cljs.core.count(inst_16429);
var inst_16432 = (inst_16431 > (0));
var state_16459__$1 = state_16459;
if(cljs.core.truth_(inst_16432)){
var statearr_16468_17291 = state_16459__$1;
(statearr_16468_17291[(1)] = (4));

} else {
var statearr_16469_17292 = state_16459__$1;
(statearr_16469_17292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16460 === (11))){
var inst_16429 = (state_16459[(10)]);
var inst_16448 = (state_16459[(2)]);
var tmp16467 = inst_16429;
var inst_16429__$1 = tmp16467;
var state_16459__$1 = (function (){var statearr_16470 = state_16459;
(statearr_16470[(11)] = inst_16448);

(statearr_16470[(10)] = inst_16429__$1);

return statearr_16470;
})();
var statearr_16471_17293 = state_16459__$1;
(statearr_16471_17293[(2)] = null);

(statearr_16471_17293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16460 === (9))){
var inst_16439 = (state_16459[(7)]);
var state_16459__$1 = state_16459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16459__$1,(11),out,inst_16439);
} else {
if((state_val_16460 === (5))){
var inst_16453 = cljs.core.async.close_BANG_(out);
var state_16459__$1 = state_16459;
var statearr_16472_17294 = state_16459__$1;
(statearr_16472_17294[(2)] = inst_16453);

(statearr_16472_17294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16460 === (10))){
var inst_16451 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
var statearr_16473_17295 = state_16459__$1;
(statearr_16473_17295[(2)] = inst_16451);

(statearr_16473_17295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16460 === (8))){
var inst_16439 = (state_16459[(7)]);
var inst_16440 = (state_16459[(9)]);
var inst_16429 = (state_16459[(10)]);
var inst_16438 = (state_16459[(8)]);
var inst_16443 = (function (){var cs = inst_16429;
var vec__16434 = inst_16438;
var v = inst_16439;
var c = inst_16440;
return (function (p1__16425_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16425_SHARP_);
});
})();
var inst_16444 = cljs.core.filterv(inst_16443,inst_16429);
var inst_16429__$1 = inst_16444;
var state_16459__$1 = (function (){var statearr_16474 = state_16459;
(statearr_16474[(10)] = inst_16429__$1);

return statearr_16474;
})();
var statearr_16475_17296 = state_16459__$1;
(statearr_16475_17296[(2)] = null);

(statearr_16475_17296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_16476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16476[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_16476[(1)] = (1));

return statearr_16476;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_16459){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16459);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16477){var ex__15286__auto__ = e16477;
var statearr_16478_17297 = state_16459;
(statearr_16478_17297[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16459[(4)]))){
var statearr_16479_17298 = state_16459;
(statearr_16479_17298[(1)] = cljs.core.first((state_16459[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17299 = state_16459;
state_16459 = G__17299;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_16459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_16459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16480 = f__15319__auto__();
(statearr_16480[(6)] = c__15318__auto___17286);

return statearr_16480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16482 = arguments.length;
switch (G__16482) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15318__auto___17301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16506){
var state_val_16507 = (state_16506[(1)]);
if((state_val_16507 === (7))){
var inst_16488 = (state_16506[(7)]);
var inst_16488__$1 = (state_16506[(2)]);
var inst_16489 = (inst_16488__$1 == null);
var inst_16490 = cljs.core.not(inst_16489);
var state_16506__$1 = (function (){var statearr_16508 = state_16506;
(statearr_16508[(7)] = inst_16488__$1);

return statearr_16508;
})();
if(inst_16490){
var statearr_16509_17302 = state_16506__$1;
(statearr_16509_17302[(1)] = (8));

} else {
var statearr_16510_17303 = state_16506__$1;
(statearr_16510_17303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (1))){
var inst_16483 = (0);
var state_16506__$1 = (function (){var statearr_16511 = state_16506;
(statearr_16511[(8)] = inst_16483);

return statearr_16511;
})();
var statearr_16512_17304 = state_16506__$1;
(statearr_16512_17304[(2)] = null);

(statearr_16512_17304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (4))){
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16506__$1,(7),ch);
} else {
if((state_val_16507 === (6))){
var inst_16501 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16513_17305 = state_16506__$1;
(statearr_16513_17305[(2)] = inst_16501);

(statearr_16513_17305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (3))){
var inst_16503 = (state_16506[(2)]);
var inst_16504 = cljs.core.async.close_BANG_(out);
var state_16506__$1 = (function (){var statearr_16514 = state_16506;
(statearr_16514[(9)] = inst_16503);

return statearr_16514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16506__$1,inst_16504);
} else {
if((state_val_16507 === (2))){
var inst_16483 = (state_16506[(8)]);
var inst_16485 = (inst_16483 < n);
var state_16506__$1 = state_16506;
if(cljs.core.truth_(inst_16485)){
var statearr_16515_17306 = state_16506__$1;
(statearr_16515_17306[(1)] = (4));

} else {
var statearr_16516_17307 = state_16506__$1;
(statearr_16516_17307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (11))){
var inst_16483 = (state_16506[(8)]);
var inst_16493 = (state_16506[(2)]);
var inst_16494 = (inst_16483 + (1));
var inst_16483__$1 = inst_16494;
var state_16506__$1 = (function (){var statearr_16517 = state_16506;
(statearr_16517[(10)] = inst_16493);

(statearr_16517[(8)] = inst_16483__$1);

return statearr_16517;
})();
var statearr_16518_17308 = state_16506__$1;
(statearr_16518_17308[(2)] = null);

(statearr_16518_17308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (9))){
var state_16506__$1 = state_16506;
var statearr_16519_17309 = state_16506__$1;
(statearr_16519_17309[(2)] = null);

(statearr_16519_17309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (5))){
var state_16506__$1 = state_16506;
var statearr_16520_17310 = state_16506__$1;
(statearr_16520_17310[(2)] = null);

(statearr_16520_17310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (10))){
var inst_16498 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16521_17311 = state_16506__$1;
(statearr_16521_17311[(2)] = inst_16498);

(statearr_16521_17311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (8))){
var inst_16488 = (state_16506[(7)]);
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16506__$1,(11),out,inst_16488);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_16522 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16522[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_16522[(1)] = (1));

return statearr_16522;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_16506){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16506);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16523){var ex__15286__auto__ = e16523;
var statearr_16524_17312 = state_16506;
(statearr_16524_17312[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16506[(4)]))){
var statearr_16525_17313 = state_16506;
(statearr_16525_17313[(1)] = cljs.core.first((state_16506[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17314 = state_16506;
state_16506 = G__17314;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_16506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_16506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16526 = f__15319__auto__();
(statearr_16526[(6)] = c__15318__auto___17301);

return statearr_16526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16531 = (function (f,ch,meta16529,_,fn1,meta16532){
this.f = f;
this.ch = ch;
this.meta16529 = meta16529;
this._ = _;
this.fn1 = fn1;
this.meta16532 = meta16532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16533,meta16532__$1){
var self__ = this;
var _16533__$1 = this;
return (new cljs.core.async.t_cljs$core$async16531(self__.f,self__.ch,self__.meta16529,self__._,self__.fn1,meta16532__$1));
}));

(cljs.core.async.t_cljs$core$async16531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16533){
var self__ = this;
var _16533__$1 = this;
return self__.meta16532;
}));

(cljs.core.async.t_cljs$core$async16531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16527_SHARP_){
var G__16534 = (((p1__16527_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16527_SHARP_) : self__.f.call(null, p1__16527_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16534) : f1.call(null, G__16534));
});
}));

(cljs.core.async.t_cljs$core$async16531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16529","meta16529",965302898,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16528","cljs.core.async/t_cljs$core$async16528",1263657631,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16532","meta16532",306685844,null)], null);
}));

(cljs.core.async.t_cljs$core$async16531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16531");

(cljs.core.async.t_cljs$core$async16531.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16531.
 */
cljs.core.async.__GT_t_cljs$core$async16531 = (function cljs$core$async$__GT_t_cljs$core$async16531(f,ch,meta16529,_,fn1,meta16532){
return (new cljs.core.async.t_cljs$core$async16531(f,ch,meta16529,_,fn1,meta16532));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16528 = (function (f,ch,meta16529){
this.f = f;
this.ch = ch;
this.meta16529 = meta16529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16530,meta16529__$1){
var self__ = this;
var _16530__$1 = this;
return (new cljs.core.async.t_cljs$core$async16528(self__.f,self__.ch,meta16529__$1));
}));

(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16530){
var self__ = this;
var _16530__$1 = this;
return self__.meta16529;
}));

(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16531(self__.f,self__.ch,self__.meta16529,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16535 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16535) : self__.f.call(null, G__16535));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16529","meta16529",965302898,null)], null);
}));

(cljs.core.async.t_cljs$core$async16528.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16528");

(cljs.core.async.t_cljs$core$async16528.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16528");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16528.
 */
cljs.core.async.__GT_t_cljs$core$async16528 = (function cljs$core$async$__GT_t_cljs$core$async16528(f,ch,meta16529){
return (new cljs.core.async.t_cljs$core$async16528(f,ch,meta16529));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16528(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16536 = (function (f,ch,meta16537){
this.f = f;
this.ch = ch;
this.meta16537 = meta16537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16538,meta16537__$1){
var self__ = this;
var _16538__$1 = this;
return (new cljs.core.async.t_cljs$core$async16536(self__.f,self__.ch,meta16537__$1));
}));

(cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16538){
var self__ = this;
var _16538__$1 = this;
return self__.meta16537;
}));

(cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16537","meta16537",-1265629708,null)], null);
}));

(cljs.core.async.t_cljs$core$async16536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16536");

(cljs.core.async.t_cljs$core$async16536.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16536.
 */
cljs.core.async.__GT_t_cljs$core$async16536 = (function cljs$core$async$__GT_t_cljs$core$async16536(f,ch,meta16537){
return (new cljs.core.async.t_cljs$core$async16536(f,ch,meta16537));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16536(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16539 = (function (p,ch,meta16540){
this.p = p;
this.ch = ch;
this.meta16540 = meta16540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16541,meta16540__$1){
var self__ = this;
var _16541__$1 = this;
return (new cljs.core.async.t_cljs$core$async16539(self__.p,self__.ch,meta16540__$1));
}));

(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16541){
var self__ = this;
var _16541__$1 = this;
return self__.meta16540;
}));

(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16540","meta16540",-2140061431,null)], null);
}));

(cljs.core.async.t_cljs$core$async16539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16539");

(cljs.core.async.t_cljs$core$async16539.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16539.
 */
cljs.core.async.__GT_t_cljs$core$async16539 = (function cljs$core$async$__GT_t_cljs$core$async16539(p,ch,meta16540){
return (new cljs.core.async.t_cljs$core$async16539(p,ch,meta16540));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16539(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16543 = arguments.length;
switch (G__16543) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15318__auto___17316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16564){
var state_val_16565 = (state_16564[(1)]);
if((state_val_16565 === (7))){
var inst_16560 = (state_16564[(2)]);
var state_16564__$1 = state_16564;
var statearr_16566_17317 = state_16564__$1;
(statearr_16566_17317[(2)] = inst_16560);

(statearr_16566_17317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16565 === (1))){
var state_16564__$1 = state_16564;
var statearr_16567_17318 = state_16564__$1;
(statearr_16567_17318[(2)] = null);

(statearr_16567_17318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16565 === (4))){
var inst_16546 = (state_16564[(7)]);
var inst_16546__$1 = (state_16564[(2)]);
var inst_16547 = (inst_16546__$1 == null);
var state_16564__$1 = (function (){var statearr_16568 = state_16564;
(statearr_16568[(7)] = inst_16546__$1);

return statearr_16568;
})();
if(cljs.core.truth_(inst_16547)){
var statearr_16569_17319 = state_16564__$1;
(statearr_16569_17319[(1)] = (5));

} else {
var statearr_16570_17320 = state_16564__$1;
(statearr_16570_17320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16565 === (6))){
var inst_16546 = (state_16564[(7)]);
var inst_16551 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16546) : p.call(null, inst_16546));
var state_16564__$1 = state_16564;
if(cljs.core.truth_(inst_16551)){
var statearr_16571_17321 = state_16564__$1;
(statearr_16571_17321[(1)] = (8));

} else {
var statearr_16572_17322 = state_16564__$1;
(statearr_16572_17322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16565 === (3))){
var inst_16562 = (state_16564[(2)]);
var state_16564__$1 = state_16564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16564__$1,inst_16562);
} else {
if((state_val_16565 === (2))){
var state_16564__$1 = state_16564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16564__$1,(4),ch);
} else {
if((state_val_16565 === (11))){
var inst_16554 = (state_16564[(2)]);
var state_16564__$1 = state_16564;
var statearr_16573_17323 = state_16564__$1;
(statearr_16573_17323[(2)] = inst_16554);

(statearr_16573_17323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16565 === (9))){
var state_16564__$1 = state_16564;
var statearr_16574_17324 = state_16564__$1;
(statearr_16574_17324[(2)] = null);

(statearr_16574_17324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16565 === (5))){
var inst_16549 = cljs.core.async.close_BANG_(out);
var state_16564__$1 = state_16564;
var statearr_16575_17325 = state_16564__$1;
(statearr_16575_17325[(2)] = inst_16549);

(statearr_16575_17325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16565 === (10))){
var inst_16557 = (state_16564[(2)]);
var state_16564__$1 = (function (){var statearr_16576 = state_16564;
(statearr_16576[(8)] = inst_16557);

return statearr_16576;
})();
var statearr_16577_17326 = state_16564__$1;
(statearr_16577_17326[(2)] = null);

(statearr_16577_17326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16565 === (8))){
var inst_16546 = (state_16564[(7)]);
var state_16564__$1 = state_16564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16564__$1,(11),out,inst_16546);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_16578 = [null,null,null,null,null,null,null,null,null];
(statearr_16578[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_16578[(1)] = (1));

return statearr_16578;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_16564){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16564);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16579){var ex__15286__auto__ = e16579;
var statearr_16580_17327 = state_16564;
(statearr_16580_17327[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16564[(4)]))){
var statearr_16581_17328 = state_16564;
(statearr_16581_17328[(1)] = cljs.core.first((state_16564[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17329 = state_16564;
state_16564 = G__17329;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_16564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_16564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16582 = f__15319__auto__();
(statearr_16582[(6)] = c__15318__auto___17316);

return statearr_16582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16584 = arguments.length;
switch (G__16584) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16646){
var state_val_16647 = (state_16646[(1)]);
if((state_val_16647 === (7))){
var inst_16642 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
var statearr_16648_17331 = state_16646__$1;
(statearr_16648_17331[(2)] = inst_16642);

(statearr_16648_17331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (20))){
var inst_16612 = (state_16646[(7)]);
var inst_16623 = (state_16646[(2)]);
var inst_16624 = cljs.core.next(inst_16612);
var inst_16598 = inst_16624;
var inst_16599 = null;
var inst_16600 = (0);
var inst_16601 = (0);
var state_16646__$1 = (function (){var statearr_16649 = state_16646;
(statearr_16649[(8)] = inst_16623);

(statearr_16649[(9)] = inst_16600);

(statearr_16649[(10)] = inst_16598);

(statearr_16649[(11)] = inst_16599);

(statearr_16649[(12)] = inst_16601);

return statearr_16649;
})();
var statearr_16650_17332 = state_16646__$1;
(statearr_16650_17332[(2)] = null);

(statearr_16650_17332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (1))){
var state_16646__$1 = state_16646;
var statearr_16651_17333 = state_16646__$1;
(statearr_16651_17333[(2)] = null);

(statearr_16651_17333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (4))){
var inst_16587 = (state_16646[(13)]);
var inst_16587__$1 = (state_16646[(2)]);
var inst_16588 = (inst_16587__$1 == null);
var state_16646__$1 = (function (){var statearr_16652 = state_16646;
(statearr_16652[(13)] = inst_16587__$1);

return statearr_16652;
})();
if(cljs.core.truth_(inst_16588)){
var statearr_16653_17334 = state_16646__$1;
(statearr_16653_17334[(1)] = (5));

} else {
var statearr_16654_17335 = state_16646__$1;
(statearr_16654_17335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (15))){
var state_16646__$1 = state_16646;
var statearr_16658_17336 = state_16646__$1;
(statearr_16658_17336[(2)] = null);

(statearr_16658_17336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (21))){
var state_16646__$1 = state_16646;
var statearr_16659_17337 = state_16646__$1;
(statearr_16659_17337[(2)] = null);

(statearr_16659_17337[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (13))){
var inst_16600 = (state_16646[(9)]);
var inst_16598 = (state_16646[(10)]);
var inst_16599 = (state_16646[(11)]);
var inst_16601 = (state_16646[(12)]);
var inst_16608 = (state_16646[(2)]);
var inst_16609 = (inst_16601 + (1));
var tmp16655 = inst_16600;
var tmp16656 = inst_16598;
var tmp16657 = inst_16599;
var inst_16598__$1 = tmp16656;
var inst_16599__$1 = tmp16657;
var inst_16600__$1 = tmp16655;
var inst_16601__$1 = inst_16609;
var state_16646__$1 = (function (){var statearr_16660 = state_16646;
(statearr_16660[(9)] = inst_16600__$1);

(statearr_16660[(14)] = inst_16608);

(statearr_16660[(10)] = inst_16598__$1);

(statearr_16660[(11)] = inst_16599__$1);

(statearr_16660[(12)] = inst_16601__$1);

return statearr_16660;
})();
var statearr_16661_17338 = state_16646__$1;
(statearr_16661_17338[(2)] = null);

(statearr_16661_17338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (22))){
var state_16646__$1 = state_16646;
var statearr_16662_17339 = state_16646__$1;
(statearr_16662_17339[(2)] = null);

(statearr_16662_17339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (6))){
var inst_16587 = (state_16646[(13)]);
var inst_16596 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16587) : f.call(null, inst_16587));
var inst_16597 = cljs.core.seq(inst_16596);
var inst_16598 = inst_16597;
var inst_16599 = null;
var inst_16600 = (0);
var inst_16601 = (0);
var state_16646__$1 = (function (){var statearr_16663 = state_16646;
(statearr_16663[(9)] = inst_16600);

(statearr_16663[(10)] = inst_16598);

(statearr_16663[(11)] = inst_16599);

(statearr_16663[(12)] = inst_16601);

return statearr_16663;
})();
var statearr_16664_17340 = state_16646__$1;
(statearr_16664_17340[(2)] = null);

(statearr_16664_17340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (17))){
var inst_16612 = (state_16646[(7)]);
var inst_16616 = cljs.core.chunk_first(inst_16612);
var inst_16617 = cljs.core.chunk_rest(inst_16612);
var inst_16618 = cljs.core.count(inst_16616);
var inst_16598 = inst_16617;
var inst_16599 = inst_16616;
var inst_16600 = inst_16618;
var inst_16601 = (0);
var state_16646__$1 = (function (){var statearr_16665 = state_16646;
(statearr_16665[(9)] = inst_16600);

(statearr_16665[(10)] = inst_16598);

(statearr_16665[(11)] = inst_16599);

(statearr_16665[(12)] = inst_16601);

return statearr_16665;
})();
var statearr_16666_17341 = state_16646__$1;
(statearr_16666_17341[(2)] = null);

(statearr_16666_17341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (3))){
var inst_16644 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16646__$1,inst_16644);
} else {
if((state_val_16647 === (12))){
var inst_16632 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
var statearr_16667_17342 = state_16646__$1;
(statearr_16667_17342[(2)] = inst_16632);

(statearr_16667_17342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (2))){
var state_16646__$1 = state_16646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16646__$1,(4),in$);
} else {
if((state_val_16647 === (23))){
var inst_16640 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
var statearr_16668_17343 = state_16646__$1;
(statearr_16668_17343[(2)] = inst_16640);

(statearr_16668_17343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (19))){
var inst_16627 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
var statearr_16669_17344 = state_16646__$1;
(statearr_16669_17344[(2)] = inst_16627);

(statearr_16669_17344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (11))){
var inst_16612 = (state_16646[(7)]);
var inst_16598 = (state_16646[(10)]);
var inst_16612__$1 = cljs.core.seq(inst_16598);
var state_16646__$1 = (function (){var statearr_16670 = state_16646;
(statearr_16670[(7)] = inst_16612__$1);

return statearr_16670;
})();
if(inst_16612__$1){
var statearr_16671_17345 = state_16646__$1;
(statearr_16671_17345[(1)] = (14));

} else {
var statearr_16672_17346 = state_16646__$1;
(statearr_16672_17346[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (9))){
var inst_16634 = (state_16646[(2)]);
var inst_16635 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16646__$1 = (function (){var statearr_16673 = state_16646;
(statearr_16673[(15)] = inst_16634);

return statearr_16673;
})();
if(cljs.core.truth_(inst_16635)){
var statearr_16674_17347 = state_16646__$1;
(statearr_16674_17347[(1)] = (21));

} else {
var statearr_16675_17348 = state_16646__$1;
(statearr_16675_17348[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (5))){
var inst_16590 = cljs.core.async.close_BANG_(out);
var state_16646__$1 = state_16646;
var statearr_16676_17349 = state_16646__$1;
(statearr_16676_17349[(2)] = inst_16590);

(statearr_16676_17349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (14))){
var inst_16612 = (state_16646[(7)]);
var inst_16614 = cljs.core.chunked_seq_QMARK_(inst_16612);
var state_16646__$1 = state_16646;
if(inst_16614){
var statearr_16677_17350 = state_16646__$1;
(statearr_16677_17350[(1)] = (17));

} else {
var statearr_16678_17351 = state_16646__$1;
(statearr_16678_17351[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (16))){
var inst_16630 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
var statearr_16679_17352 = state_16646__$1;
(statearr_16679_17352[(2)] = inst_16630);

(statearr_16679_17352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16647 === (10))){
var inst_16599 = (state_16646[(11)]);
var inst_16601 = (state_16646[(12)]);
var inst_16606 = cljs.core._nth(inst_16599,inst_16601);
var state_16646__$1 = state_16646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16646__$1,(13),out,inst_16606);
} else {
if((state_val_16647 === (18))){
var inst_16612 = (state_16646[(7)]);
var inst_16621 = cljs.core.first(inst_16612);
var state_16646__$1 = state_16646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16646__$1,(20),out,inst_16621);
} else {
if((state_val_16647 === (8))){
var inst_16600 = (state_16646[(9)]);
var inst_16601 = (state_16646[(12)]);
var inst_16603 = (inst_16601 < inst_16600);
var inst_16604 = inst_16603;
var state_16646__$1 = state_16646;
if(cljs.core.truth_(inst_16604)){
var statearr_16680_17353 = state_16646__$1;
(statearr_16680_17353[(1)] = (10));

} else {
var statearr_16681_17354 = state_16646__$1;
(statearr_16681_17354[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15283__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15283__auto____0 = (function (){
var statearr_16682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16682[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15283__auto__);

(statearr_16682[(1)] = (1));

return statearr_16682;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15283__auto____1 = (function (state_16646){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16646);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16683){var ex__15286__auto__ = e16683;
var statearr_16684_17355 = state_16646;
(statearr_16684_17355[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16646[(4)]))){
var statearr_16685_17356 = state_16646;
(statearr_16685_17356[(1)] = cljs.core.first((state_16646[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17357 = state_16646;
state_16646 = G__17357;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15283__auto__ = function(state_16646){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15283__auto____1.call(this,state_16646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15283__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15283__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16686 = f__15319__auto__();
(statearr_16686[(6)] = c__15318__auto__);

return statearr_16686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));

return c__15318__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16688 = arguments.length;
switch (G__16688) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16690 = arguments.length;
switch (G__16690) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16692 = arguments.length;
switch (G__16692) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15318__auto___17361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16716){
var state_val_16717 = (state_16716[(1)]);
if((state_val_16717 === (7))){
var inst_16711 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16718_17362 = state_16716__$1;
(statearr_16718_17362[(2)] = inst_16711);

(statearr_16718_17362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (1))){
var inst_16693 = null;
var state_16716__$1 = (function (){var statearr_16719 = state_16716;
(statearr_16719[(7)] = inst_16693);

return statearr_16719;
})();
var statearr_16720_17363 = state_16716__$1;
(statearr_16720_17363[(2)] = null);

(statearr_16720_17363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (4))){
var inst_16696 = (state_16716[(8)]);
var inst_16696__$1 = (state_16716[(2)]);
var inst_16697 = (inst_16696__$1 == null);
var inst_16698 = cljs.core.not(inst_16697);
var state_16716__$1 = (function (){var statearr_16721 = state_16716;
(statearr_16721[(8)] = inst_16696__$1);

return statearr_16721;
})();
if(inst_16698){
var statearr_16722_17364 = state_16716__$1;
(statearr_16722_17364[(1)] = (5));

} else {
var statearr_16723_17365 = state_16716__$1;
(statearr_16723_17365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (6))){
var state_16716__$1 = state_16716;
var statearr_16724_17366 = state_16716__$1;
(statearr_16724_17366[(2)] = null);

(statearr_16724_17366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (3))){
var inst_16713 = (state_16716[(2)]);
var inst_16714 = cljs.core.async.close_BANG_(out);
var state_16716__$1 = (function (){var statearr_16725 = state_16716;
(statearr_16725[(9)] = inst_16713);

return statearr_16725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16716__$1,inst_16714);
} else {
if((state_val_16717 === (2))){
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16716__$1,(4),ch);
} else {
if((state_val_16717 === (11))){
var inst_16696 = (state_16716[(8)]);
var inst_16705 = (state_16716[(2)]);
var inst_16693 = inst_16696;
var state_16716__$1 = (function (){var statearr_16726 = state_16716;
(statearr_16726[(10)] = inst_16705);

(statearr_16726[(7)] = inst_16693);

return statearr_16726;
})();
var statearr_16727_17367 = state_16716__$1;
(statearr_16727_17367[(2)] = null);

(statearr_16727_17367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (9))){
var inst_16696 = (state_16716[(8)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16716__$1,(11),out,inst_16696);
} else {
if((state_val_16717 === (5))){
var inst_16696 = (state_16716[(8)]);
var inst_16693 = (state_16716[(7)]);
var inst_16700 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16696,inst_16693);
var state_16716__$1 = state_16716;
if(inst_16700){
var statearr_16729_17368 = state_16716__$1;
(statearr_16729_17368[(1)] = (8));

} else {
var statearr_16730_17369 = state_16716__$1;
(statearr_16730_17369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (10))){
var inst_16708 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16731_17370 = state_16716__$1;
(statearr_16731_17370[(2)] = inst_16708);

(statearr_16731_17370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (8))){
var inst_16693 = (state_16716[(7)]);
var tmp16728 = inst_16693;
var inst_16693__$1 = tmp16728;
var state_16716__$1 = (function (){var statearr_16732 = state_16716;
(statearr_16732[(7)] = inst_16693__$1);

return statearr_16732;
})();
var statearr_16733_17371 = state_16716__$1;
(statearr_16733_17371[(2)] = null);

(statearr_16733_17371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_16734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16734[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_16734[(1)] = (1));

return statearr_16734;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_16716){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16716);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16735){var ex__15286__auto__ = e16735;
var statearr_16736_17372 = state_16716;
(statearr_16736_17372[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16716[(4)]))){
var statearr_16737_17373 = state_16716;
(statearr_16737_17373[(1)] = cljs.core.first((state_16716[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17374 = state_16716;
state_16716 = G__17374;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_16716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_16716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16738 = f__15319__auto__();
(statearr_16738[(6)] = c__15318__auto___17361);

return statearr_16738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16740 = arguments.length;
switch (G__16740) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15318__auto___17376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16778){
var state_val_16779 = (state_16778[(1)]);
if((state_val_16779 === (7))){
var inst_16774 = (state_16778[(2)]);
var state_16778__$1 = state_16778;
var statearr_16780_17377 = state_16778__$1;
(statearr_16780_17377[(2)] = inst_16774);

(statearr_16780_17377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (1))){
var inst_16741 = (new Array(n));
var inst_16742 = inst_16741;
var inst_16743 = (0);
var state_16778__$1 = (function (){var statearr_16781 = state_16778;
(statearr_16781[(7)] = inst_16743);

(statearr_16781[(8)] = inst_16742);

return statearr_16781;
})();
var statearr_16782_17378 = state_16778__$1;
(statearr_16782_17378[(2)] = null);

(statearr_16782_17378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (4))){
var inst_16746 = (state_16778[(9)]);
var inst_16746__$1 = (state_16778[(2)]);
var inst_16747 = (inst_16746__$1 == null);
var inst_16748 = cljs.core.not(inst_16747);
var state_16778__$1 = (function (){var statearr_16783 = state_16778;
(statearr_16783[(9)] = inst_16746__$1);

return statearr_16783;
})();
if(inst_16748){
var statearr_16784_17379 = state_16778__$1;
(statearr_16784_17379[(1)] = (5));

} else {
var statearr_16785_17380 = state_16778__$1;
(statearr_16785_17380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (15))){
var inst_16768 = (state_16778[(2)]);
var state_16778__$1 = state_16778;
var statearr_16786_17381 = state_16778__$1;
(statearr_16786_17381[(2)] = inst_16768);

(statearr_16786_17381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (13))){
var state_16778__$1 = state_16778;
var statearr_16787_17382 = state_16778__$1;
(statearr_16787_17382[(2)] = null);

(statearr_16787_17382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (6))){
var inst_16743 = (state_16778[(7)]);
var inst_16764 = (inst_16743 > (0));
var state_16778__$1 = state_16778;
if(cljs.core.truth_(inst_16764)){
var statearr_16788_17383 = state_16778__$1;
(statearr_16788_17383[(1)] = (12));

} else {
var statearr_16789_17384 = state_16778__$1;
(statearr_16789_17384[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (3))){
var inst_16776 = (state_16778[(2)]);
var state_16778__$1 = state_16778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16778__$1,inst_16776);
} else {
if((state_val_16779 === (12))){
var inst_16742 = (state_16778[(8)]);
var inst_16766 = cljs.core.vec(inst_16742);
var state_16778__$1 = state_16778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16778__$1,(15),out,inst_16766);
} else {
if((state_val_16779 === (2))){
var state_16778__$1 = state_16778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16778__$1,(4),ch);
} else {
if((state_val_16779 === (11))){
var inst_16758 = (state_16778[(2)]);
var inst_16759 = (new Array(n));
var inst_16742 = inst_16759;
var inst_16743 = (0);
var state_16778__$1 = (function (){var statearr_16790 = state_16778;
(statearr_16790[(7)] = inst_16743);

(statearr_16790[(10)] = inst_16758);

(statearr_16790[(8)] = inst_16742);

return statearr_16790;
})();
var statearr_16791_17385 = state_16778__$1;
(statearr_16791_17385[(2)] = null);

(statearr_16791_17385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (9))){
var inst_16742 = (state_16778[(8)]);
var inst_16756 = cljs.core.vec(inst_16742);
var state_16778__$1 = state_16778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16778__$1,(11),out,inst_16756);
} else {
if((state_val_16779 === (5))){
var inst_16746 = (state_16778[(9)]);
var inst_16743 = (state_16778[(7)]);
var inst_16751 = (state_16778[(11)]);
var inst_16742 = (state_16778[(8)]);
var inst_16750 = (inst_16742[inst_16743] = inst_16746);
var inst_16751__$1 = (inst_16743 + (1));
var inst_16752 = (inst_16751__$1 < n);
var state_16778__$1 = (function (){var statearr_16792 = state_16778;
(statearr_16792[(12)] = inst_16750);

(statearr_16792[(11)] = inst_16751__$1);

return statearr_16792;
})();
if(cljs.core.truth_(inst_16752)){
var statearr_16793_17386 = state_16778__$1;
(statearr_16793_17386[(1)] = (8));

} else {
var statearr_16794_17387 = state_16778__$1;
(statearr_16794_17387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (14))){
var inst_16771 = (state_16778[(2)]);
var inst_16772 = cljs.core.async.close_BANG_(out);
var state_16778__$1 = (function (){var statearr_16796 = state_16778;
(statearr_16796[(13)] = inst_16771);

return statearr_16796;
})();
var statearr_16797_17388 = state_16778__$1;
(statearr_16797_17388[(2)] = inst_16772);

(statearr_16797_17388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (10))){
var inst_16762 = (state_16778[(2)]);
var state_16778__$1 = state_16778;
var statearr_16798_17389 = state_16778__$1;
(statearr_16798_17389[(2)] = inst_16762);

(statearr_16798_17389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (8))){
var inst_16751 = (state_16778[(11)]);
var inst_16742 = (state_16778[(8)]);
var tmp16795 = inst_16742;
var inst_16742__$1 = tmp16795;
var inst_16743 = inst_16751;
var state_16778__$1 = (function (){var statearr_16799 = state_16778;
(statearr_16799[(7)] = inst_16743);

(statearr_16799[(8)] = inst_16742__$1);

return statearr_16799;
})();
var statearr_16800_17390 = state_16778__$1;
(statearr_16800_17390[(2)] = null);

(statearr_16800_17390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_16801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16801[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_16801[(1)] = (1));

return statearr_16801;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_16778){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16778);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16802){var ex__15286__auto__ = e16802;
var statearr_16803_17391 = state_16778;
(statearr_16803_17391[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16778[(4)]))){
var statearr_16804_17392 = state_16778;
(statearr_16804_17392[(1)] = cljs.core.first((state_16778[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17393 = state_16778;
state_16778 = G__17393;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_16778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_16778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16805 = f__15319__auto__();
(statearr_16805[(6)] = c__15318__auto___17376);

return statearr_16805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16807 = arguments.length;
switch (G__16807) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15318__auto___17429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15319__auto__ = (function (){var switch__15282__auto__ = (function (state_16852){
var state_val_16853 = (state_16852[(1)]);
if((state_val_16853 === (7))){
var inst_16848 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16854_17430 = state_16852__$1;
(statearr_16854_17430[(2)] = inst_16848);

(statearr_16854_17430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (1))){
var inst_16808 = [];
var inst_16809 = inst_16808;
var inst_16810 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16852__$1 = (function (){var statearr_16855 = state_16852;
(statearr_16855[(7)] = inst_16809);

(statearr_16855[(8)] = inst_16810);

return statearr_16855;
})();
var statearr_16856_17431 = state_16852__$1;
(statearr_16856_17431[(2)] = null);

(statearr_16856_17431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (4))){
var inst_16813 = (state_16852[(9)]);
var inst_16813__$1 = (state_16852[(2)]);
var inst_16814 = (inst_16813__$1 == null);
var inst_16815 = cljs.core.not(inst_16814);
var state_16852__$1 = (function (){var statearr_16857 = state_16852;
(statearr_16857[(9)] = inst_16813__$1);

return statearr_16857;
})();
if(inst_16815){
var statearr_16858_17432 = state_16852__$1;
(statearr_16858_17432[(1)] = (5));

} else {
var statearr_16859_17433 = state_16852__$1;
(statearr_16859_17433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (15))){
var inst_16809 = (state_16852[(7)]);
var inst_16840 = cljs.core.vec(inst_16809);
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16852__$1,(18),out,inst_16840);
} else {
if((state_val_16853 === (13))){
var inst_16835 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16860_17434 = state_16852__$1;
(statearr_16860_17434[(2)] = inst_16835);

(statearr_16860_17434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (6))){
var inst_16809 = (state_16852[(7)]);
var inst_16837 = inst_16809.length;
var inst_16838 = (inst_16837 > (0));
var state_16852__$1 = state_16852;
if(cljs.core.truth_(inst_16838)){
var statearr_16861_17435 = state_16852__$1;
(statearr_16861_17435[(1)] = (15));

} else {
var statearr_16862_17436 = state_16852__$1;
(statearr_16862_17436[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (17))){
var inst_16845 = (state_16852[(2)]);
var inst_16846 = cljs.core.async.close_BANG_(out);
var state_16852__$1 = (function (){var statearr_16863 = state_16852;
(statearr_16863[(10)] = inst_16845);

return statearr_16863;
})();
var statearr_16864_17437 = state_16852__$1;
(statearr_16864_17437[(2)] = inst_16846);

(statearr_16864_17437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (3))){
var inst_16850 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16852__$1,inst_16850);
} else {
if((state_val_16853 === (12))){
var inst_16809 = (state_16852[(7)]);
var inst_16828 = cljs.core.vec(inst_16809);
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16852__$1,(14),out,inst_16828);
} else {
if((state_val_16853 === (2))){
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16852__$1,(4),ch);
} else {
if((state_val_16853 === (11))){
var inst_16809 = (state_16852[(7)]);
var inst_16817 = (state_16852[(11)]);
var inst_16813 = (state_16852[(9)]);
var inst_16825 = inst_16809.push(inst_16813);
var tmp16865 = inst_16809;
var inst_16809__$1 = tmp16865;
var inst_16810 = inst_16817;
var state_16852__$1 = (function (){var statearr_16866 = state_16852;
(statearr_16866[(7)] = inst_16809__$1);

(statearr_16866[(12)] = inst_16825);

(statearr_16866[(8)] = inst_16810);

return statearr_16866;
})();
var statearr_16867_17438 = state_16852__$1;
(statearr_16867_17438[(2)] = null);

(statearr_16867_17438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (9))){
var inst_16810 = (state_16852[(8)]);
var inst_16821 = cljs.core.keyword_identical_QMARK_(inst_16810,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16852__$1 = state_16852;
var statearr_16868_17439 = state_16852__$1;
(statearr_16868_17439[(2)] = inst_16821);

(statearr_16868_17439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (5))){
var inst_16817 = (state_16852[(11)]);
var inst_16818 = (state_16852[(13)]);
var inst_16810 = (state_16852[(8)]);
var inst_16813 = (state_16852[(9)]);
var inst_16817__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16813) : f.call(null, inst_16813));
var inst_16818__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16817__$1,inst_16810);
var state_16852__$1 = (function (){var statearr_16869 = state_16852;
(statearr_16869[(11)] = inst_16817__$1);

(statearr_16869[(13)] = inst_16818__$1);

return statearr_16869;
})();
if(inst_16818__$1){
var statearr_16870_17440 = state_16852__$1;
(statearr_16870_17440[(1)] = (8));

} else {
var statearr_16871_17441 = state_16852__$1;
(statearr_16871_17441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (14))){
var inst_16817 = (state_16852[(11)]);
var inst_16813 = (state_16852[(9)]);
var inst_16830 = (state_16852[(2)]);
var inst_16831 = [];
var inst_16832 = inst_16831.push(inst_16813);
var inst_16809 = inst_16831;
var inst_16810 = inst_16817;
var state_16852__$1 = (function (){var statearr_16872 = state_16852;
(statearr_16872[(14)] = inst_16832);

(statearr_16872[(7)] = inst_16809);

(statearr_16872[(15)] = inst_16830);

(statearr_16872[(8)] = inst_16810);

return statearr_16872;
})();
var statearr_16873_17442 = state_16852__$1;
(statearr_16873_17442[(2)] = null);

(statearr_16873_17442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (16))){
var state_16852__$1 = state_16852;
var statearr_16874_17443 = state_16852__$1;
(statearr_16874_17443[(2)] = null);

(statearr_16874_17443[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (10))){
var inst_16823 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
if(cljs.core.truth_(inst_16823)){
var statearr_16875_17444 = state_16852__$1;
(statearr_16875_17444[(1)] = (11));

} else {
var statearr_16876_17445 = state_16852__$1;
(statearr_16876_17445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (18))){
var inst_16842 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16877_17446 = state_16852__$1;
(statearr_16877_17446[(2)] = inst_16842);

(statearr_16877_17446[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (8))){
var inst_16818 = (state_16852[(13)]);
var state_16852__$1 = state_16852;
var statearr_16878_17447 = state_16852__$1;
(statearr_16878_17447[(2)] = inst_16818);

(statearr_16878_17447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15283__auto__ = null;
var cljs$core$async$state_machine__15283__auto____0 = (function (){
var statearr_16879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16879[(0)] = cljs$core$async$state_machine__15283__auto__);

(statearr_16879[(1)] = (1));

return statearr_16879;
});
var cljs$core$async$state_machine__15283__auto____1 = (function (state_16852){
while(true){
var ret_value__15284__auto__ = (function (){try{while(true){
var result__15285__auto__ = switch__15282__auto__(state_16852);
if(cljs.core.keyword_identical_QMARK_(result__15285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15285__auto__;
}
break;
}
}catch (e16880){var ex__15286__auto__ = e16880;
var statearr_16881_17448 = state_16852;
(statearr_16881_17448[(2)] = ex__15286__auto__);


if(cljs.core.seq((state_16852[(4)]))){
var statearr_16882_17449 = state_16852;
(statearr_16882_17449[(1)] = cljs.core.first((state_16852[(4)])));

} else {
throw ex__15286__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17450 = state_16852;
state_16852 = G__17450;
continue;
} else {
return ret_value__15284__auto__;
}
break;
}
});
cljs$core$async$state_machine__15283__auto__ = function(state_16852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15283__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15283__auto____1.call(this,state_16852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15283__auto____0;
cljs$core$async$state_machine__15283__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15283__auto____1;
return cljs$core$async$state_machine__15283__auto__;
})()
})();
var state__15320__auto__ = (function (){var statearr_16883 = f__15319__auto__();
(statearr_16883[(6)] = c__15318__auto___17429);

return statearr_16883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15320__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
