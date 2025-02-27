goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18083){
var map__18084 = p__18083;
var map__18084__$1 = cljs.core.__destructure_map(map__18084);
var runtime = map__18084__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18143 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18143)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18085 = runtime;
var G__18086 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18143);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18085,G__18086) : shadow.remote.runtime.shared.process.call(null, G__18085,G__18086));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18087,res){
var map__18088 = p__18087;
var map__18088__$1 = cljs.core.__destructure_map(map__18088);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18089 = res;
var G__18089__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18089,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18089);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18089__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18089__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18091 = arguments.length;
switch (G__18091) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18092,msg,handlers,timeout_after_ms){
var map__18093 = p__18092;
var map__18093__$1 = cljs.core.__destructure_map(map__18093);
var runtime = map__18093__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18145 = arguments.length;
var i__5727__auto___18146 = (0);
while(true){
if((i__5727__auto___18146 < len__5726__auto___18145)){
args__5732__auto__.push((arguments[i__5727__auto___18146]));

var G__18147 = (i__5727__auto___18146 + (1));
i__5727__auto___18146 = G__18147;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18097,ev,args){
var map__18098 = p__18097;
var map__18098__$1 = cljs.core.__destructure_map(map__18098);
var runtime = map__18098__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18099 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18102 = null;
var count__18103 = (0);
var i__18104 = (0);
while(true){
if((i__18104 < count__18103)){
var ext = chunk__18102.cljs$core$IIndexed$_nth$arity$2(null, i__18104);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18148 = seq__18099;
var G__18149 = chunk__18102;
var G__18150 = count__18103;
var G__18151 = (i__18104 + (1));
seq__18099 = G__18148;
chunk__18102 = G__18149;
count__18103 = G__18150;
i__18104 = G__18151;
continue;
} else {
var G__18152 = seq__18099;
var G__18153 = chunk__18102;
var G__18154 = count__18103;
var G__18155 = (i__18104 + (1));
seq__18099 = G__18152;
chunk__18102 = G__18153;
count__18103 = G__18154;
i__18104 = G__18155;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18099);
if(temp__5804__auto__){
var seq__18099__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18099__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18099__$1);
var G__18156 = cljs.core.chunk_rest(seq__18099__$1);
var G__18157 = c__5525__auto__;
var G__18158 = cljs.core.count(c__5525__auto__);
var G__18159 = (0);
seq__18099 = G__18156;
chunk__18102 = G__18157;
count__18103 = G__18158;
i__18104 = G__18159;
continue;
} else {
var ext = cljs.core.first(seq__18099__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18160 = cljs.core.next(seq__18099__$1);
var G__18161 = null;
var G__18162 = (0);
var G__18163 = (0);
seq__18099 = G__18160;
chunk__18102 = G__18161;
count__18103 = G__18162;
i__18104 = G__18163;
continue;
} else {
var G__18164 = cljs.core.next(seq__18099__$1);
var G__18165 = null;
var G__18166 = (0);
var G__18167 = (0);
seq__18099 = G__18164;
chunk__18102 = G__18165;
count__18103 = G__18166;
i__18104 = G__18167;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18094){
var G__18095 = cljs.core.first(seq18094);
var seq18094__$1 = cljs.core.next(seq18094);
var G__18096 = cljs.core.first(seq18094__$1);
var seq18094__$2 = cljs.core.next(seq18094__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18095,G__18096,seq18094__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18107,p__18108){
var map__18109 = p__18107;
var map__18109__$1 = cljs.core.__destructure_map(map__18109);
var runtime = map__18109__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18109__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18110 = p__18108;
var map__18110__$1 = cljs.core.__destructure_map(map__18110);
var msg = map__18110__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18110__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18111 = cljs.core.deref(state_ref);
var map__18111__$1 = cljs.core.__destructure_map(map__18111);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18111__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18111__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18112,msg){
var map__18113 = p__18112;
var map__18113__$1 = cljs.core.__destructure_map(map__18113);
var runtime = map__18113__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18113__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18114,key,p__18115){
var map__18116 = p__18114;
var map__18116__$1 = cljs.core.__destructure_map(map__18116);
var state = map__18116__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18116__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18117 = p__18115;
var map__18117__$1 = cljs.core.__destructure_map(map__18117);
var spec = map__18117__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18117__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18117__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18118,key,spec){
var map__18119 = p__18118;
var map__18119__$1 = cljs.core.__destructure_map(map__18119);
var runtime = map__18119__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___18168 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___18168 == null)){
} else {
var on_welcome_18169 = temp__5808__auto___18168;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18169.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18169.cljs$core$IFn$_invoke$arity$0() : on_welcome_18169.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18120_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18120_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18121_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18121_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18122_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18122_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18123_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18123_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18124_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18124_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18125,key){
var map__18126 = p__18125;
var map__18126__$1 = cljs.core.__destructure_map(map__18126);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18126__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18127,msg){
var map__18128 = p__18127;
var map__18128__$1 = cljs.core.__destructure_map(map__18128);
var runtime = map__18128__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18128__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18129,p__18130){
var map__18131 = p__18129;
var map__18131__$1 = cljs.core.__destructure_map(map__18131);
var runtime = map__18131__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18131__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18132 = p__18130;
var map__18132__$1 = cljs.core.__destructure_map(map__18132);
var msg = map__18132__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18132__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18132__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18133 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18135 = null;
var count__18136 = (0);
var i__18137 = (0);
while(true){
if((i__18137 < count__18136)){
var map__18141 = chunk__18135.cljs$core$IIndexed$_nth$arity$2(null, i__18137);
var map__18141__$1 = cljs.core.__destructure_map(map__18141);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18170 = seq__18133;
var G__18171 = chunk__18135;
var G__18172 = count__18136;
var G__18173 = (i__18137 + (1));
seq__18133 = G__18170;
chunk__18135 = G__18171;
count__18136 = G__18172;
i__18137 = G__18173;
continue;
} else {
var G__18174 = seq__18133;
var G__18175 = chunk__18135;
var G__18176 = count__18136;
var G__18177 = (i__18137 + (1));
seq__18133 = G__18174;
chunk__18135 = G__18175;
count__18136 = G__18176;
i__18137 = G__18177;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18133);
if(temp__5804__auto__){
var seq__18133__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18133__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18133__$1);
var G__18178 = cljs.core.chunk_rest(seq__18133__$1);
var G__18179 = c__5525__auto__;
var G__18180 = cljs.core.count(c__5525__auto__);
var G__18181 = (0);
seq__18133 = G__18178;
chunk__18135 = G__18179;
count__18136 = G__18180;
i__18137 = G__18181;
continue;
} else {
var map__18142 = cljs.core.first(seq__18133__$1);
var map__18142__$1 = cljs.core.__destructure_map(map__18142);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18182 = cljs.core.next(seq__18133__$1);
var G__18183 = null;
var G__18184 = (0);
var G__18185 = (0);
seq__18133 = G__18182;
chunk__18135 = G__18183;
count__18136 = G__18184;
i__18137 = G__18185;
continue;
} else {
var G__18186 = cljs.core.next(seq__18133__$1);
var G__18187 = null;
var G__18188 = (0);
var G__18189 = (0);
seq__18133 = G__18186;
chunk__18135 = G__18187;
count__18136 = G__18188;
i__18137 = G__18189;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
