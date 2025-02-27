goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21265 = arguments.length;
var i__5727__auto___21266 = (0);
while(true){
if((i__5727__auto___21266 < len__5726__auto___21265)){
args__5732__auto__.push((arguments[i__5727__auto___21266]));

var G__21267 = (i__5727__auto___21266 + (1));
i__5727__auto___21266 = G__21267;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20984){
var G__20985 = cljs.core.first(seq20984);
var seq20984__$1 = cljs.core.next(seq20984);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20985,seq20984__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20986 = cljs.core.seq(sources);
var chunk__20987 = null;
var count__20988 = (0);
var i__20989 = (0);
while(true){
if((i__20989 < count__20988)){
var map__20994 = chunk__20987.cljs$core$IIndexed$_nth$arity$2(null, i__20989);
var map__20994__$1 = cljs.core.__destructure_map(map__20994);
var src = map__20994__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20995){var e_21268 = e20995;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21268);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21268.message)].join('')));
}

var G__21269 = seq__20986;
var G__21270 = chunk__20987;
var G__21271 = count__20988;
var G__21272 = (i__20989 + (1));
seq__20986 = G__21269;
chunk__20987 = G__21270;
count__20988 = G__21271;
i__20989 = G__21272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20986);
if(temp__5804__auto__){
var seq__20986__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20986__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20986__$1);
var G__21273 = cljs.core.chunk_rest(seq__20986__$1);
var G__21274 = c__5525__auto__;
var G__21275 = cljs.core.count(c__5525__auto__);
var G__21276 = (0);
seq__20986 = G__21273;
chunk__20987 = G__21274;
count__20988 = G__21275;
i__20989 = G__21276;
continue;
} else {
var map__20996 = cljs.core.first(seq__20986__$1);
var map__20996__$1 = cljs.core.__destructure_map(map__20996);
var src = map__20996__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20997){var e_21277 = e20997;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21277);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21277.message)].join('')));
}

var G__21278 = cljs.core.next(seq__20986__$1);
var G__21279 = null;
var G__21280 = (0);
var G__21281 = (0);
seq__20986 = G__21278;
chunk__20987 = G__21279;
count__20988 = G__21280;
i__20989 = G__21281;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20998 = cljs.core.seq(js_requires);
var chunk__20999 = null;
var count__21000 = (0);
var i__21001 = (0);
while(true){
if((i__21001 < count__21000)){
var js_ns = chunk__20999.cljs$core$IIndexed$_nth$arity$2(null, i__21001);
var require_str_21282 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21282);


var G__21283 = seq__20998;
var G__21284 = chunk__20999;
var G__21285 = count__21000;
var G__21286 = (i__21001 + (1));
seq__20998 = G__21283;
chunk__20999 = G__21284;
count__21000 = G__21285;
i__21001 = G__21286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20998);
if(temp__5804__auto__){
var seq__20998__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20998__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20998__$1);
var G__21287 = cljs.core.chunk_rest(seq__20998__$1);
var G__21288 = c__5525__auto__;
var G__21289 = cljs.core.count(c__5525__auto__);
var G__21290 = (0);
seq__20998 = G__21287;
chunk__20999 = G__21288;
count__21000 = G__21289;
i__21001 = G__21290;
continue;
} else {
var js_ns = cljs.core.first(seq__20998__$1);
var require_str_21291 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21291);


var G__21292 = cljs.core.next(seq__20998__$1);
var G__21293 = null;
var G__21294 = (0);
var G__21295 = (0);
seq__20998 = G__21292;
chunk__20999 = G__21293;
count__21000 = G__21294;
i__21001 = G__21295;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21003){
var map__21004 = p__21003;
var map__21004__$1 = cljs.core.__destructure_map(map__21004);
var msg = map__21004__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21004__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21004__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005(s__21006){
return (new cljs.core.LazySeq(null,(function (){
var s__21006__$1 = s__21006;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21006__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21011 = cljs.core.first(xs__6360__auto__);
var map__21011__$1 = cljs.core.__destructure_map(map__21011);
var src = map__21011__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21011__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21006__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21004,map__21004__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005_$_iter__21007(s__21008){
return (new cljs.core.LazySeq(null,((function (s__21006__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21004,map__21004__$1,msg,info,reload_info){
return (function (){
var s__21008__$1 = s__21008;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21008__$1);
if(temp__5804__auto____$1){
var s__21008__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21008__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21008__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21010 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21009 = (0);
while(true){
if((i__21009 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21009);
cljs.core.chunk_append(b__21010,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21296 = (i__21009 + (1));
i__21009 = G__21296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21010),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005_$_iter__21007(cljs.core.chunk_rest(s__21008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21010),null);
}
} else {
var warning = cljs.core.first(s__21008__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005_$_iter__21007(cljs.core.rest(s__21008__$2)));
}
} else {
return null;
}
break;
}
});})(s__21006__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21004,map__21004__$1,msg,info,reload_info))
,null,null));
});})(s__21006__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21004,map__21004__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005(cljs.core.rest(s__21006__$1)));
} else {
var G__21297 = cljs.core.rest(s__21006__$1);
s__21006__$1 = G__21297;
continue;
}
} else {
var G__21298 = cljs.core.rest(s__21006__$1);
s__21006__$1 = G__21298;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21012_21299 = cljs.core.seq(warnings);
var chunk__21013_21300 = null;
var count__21014_21301 = (0);
var i__21015_21302 = (0);
while(true){
if((i__21015_21302 < count__21014_21301)){
var map__21018_21303 = chunk__21013_21300.cljs$core$IIndexed$_nth$arity$2(null, i__21015_21302);
var map__21018_21304__$1 = cljs.core.__destructure_map(map__21018_21303);
var w_21305 = map__21018_21304__$1;
var msg_21306__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018_21304__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018_21304__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018_21304__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018_21304__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21309)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21307),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21308),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21306__$1)].join(''));


var G__21310 = seq__21012_21299;
var G__21311 = chunk__21013_21300;
var G__21312 = count__21014_21301;
var G__21313 = (i__21015_21302 + (1));
seq__21012_21299 = G__21310;
chunk__21013_21300 = G__21311;
count__21014_21301 = G__21312;
i__21015_21302 = G__21313;
continue;
} else {
var temp__5804__auto___21314 = cljs.core.seq(seq__21012_21299);
if(temp__5804__auto___21314){
var seq__21012_21315__$1 = temp__5804__auto___21314;
if(cljs.core.chunked_seq_QMARK_(seq__21012_21315__$1)){
var c__5525__auto___21316 = cljs.core.chunk_first(seq__21012_21315__$1);
var G__21317 = cljs.core.chunk_rest(seq__21012_21315__$1);
var G__21318 = c__5525__auto___21316;
var G__21319 = cljs.core.count(c__5525__auto___21316);
var G__21320 = (0);
seq__21012_21299 = G__21317;
chunk__21013_21300 = G__21318;
count__21014_21301 = G__21319;
i__21015_21302 = G__21320;
continue;
} else {
var map__21019_21321 = cljs.core.first(seq__21012_21315__$1);
var map__21019_21322__$1 = cljs.core.__destructure_map(map__21019_21321);
var w_21323 = map__21019_21322__$1;
var msg_21324__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21322__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21322__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21322__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21322__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21327)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21325),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21326),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21324__$1)].join(''));


var G__21328 = cljs.core.next(seq__21012_21315__$1);
var G__21329 = null;
var G__21330 = (0);
var G__21331 = (0);
seq__21012_21299 = G__21328;
chunk__21013_21300 = G__21329;
count__21014_21301 = G__21330;
i__21015_21302 = G__21331;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21002_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21002_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21020){
var map__21021 = p__21020;
var map__21021__$1 = cljs.core.__destructure_map(map__21021);
var msg = map__21021__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21022 = cljs.core.seq(updates);
var chunk__21024 = null;
var count__21025 = (0);
var i__21026 = (0);
while(true){
if((i__21026 < count__21025)){
var path = chunk__21024.cljs$core$IIndexed$_nth$arity$2(null, i__21026);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21139_21332 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21143_21333 = null;
var count__21144_21334 = (0);
var i__21145_21335 = (0);
while(true){
if((i__21145_21335 < count__21144_21334)){
var node_21336 = chunk__21143_21333.cljs$core$IIndexed$_nth$arity$2(null, i__21145_21335);
if(cljs.core.not(node_21336.shadow$old)){
var path_match_21337 = shadow.cljs.devtools.client.browser.match_paths(node_21336.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21337)){
var new_link_21338 = (function (){var G__21171 = node_21336.cloneNode(true);
G__21171.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21337),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21171;
})();
(node_21336.shadow$old = true);

(new_link_21338.onload = ((function (seq__21139_21332,chunk__21143_21333,count__21144_21334,i__21145_21335,seq__21022,chunk__21024,count__21025,i__21026,new_link_21338,path_match_21337,node_21336,path,map__21021,map__21021__$1,msg,updates,reload_info){
return (function (e){
var seq__21172_21339 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21174_21340 = null;
var count__21175_21341 = (0);
var i__21176_21342 = (0);
while(true){
if((i__21176_21342 < count__21175_21341)){
var map__21180_21343 = chunk__21174_21340.cljs$core$IIndexed$_nth$arity$2(null, i__21176_21342);
var map__21180_21344__$1 = cljs.core.__destructure_map(map__21180_21343);
var task_21345 = map__21180_21344__$1;
var fn_str_21346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180_21344__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180_21344__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21348 = goog.getObjectByName(fn_str_21346,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21347)].join(''));

(fn_obj_21348.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21348.cljs$core$IFn$_invoke$arity$2(path,new_link_21338) : fn_obj_21348.call(null, path,new_link_21338));


var G__21349 = seq__21172_21339;
var G__21350 = chunk__21174_21340;
var G__21351 = count__21175_21341;
var G__21352 = (i__21176_21342 + (1));
seq__21172_21339 = G__21349;
chunk__21174_21340 = G__21350;
count__21175_21341 = G__21351;
i__21176_21342 = G__21352;
continue;
} else {
var temp__5804__auto___21353 = cljs.core.seq(seq__21172_21339);
if(temp__5804__auto___21353){
var seq__21172_21354__$1 = temp__5804__auto___21353;
if(cljs.core.chunked_seq_QMARK_(seq__21172_21354__$1)){
var c__5525__auto___21355 = cljs.core.chunk_first(seq__21172_21354__$1);
var G__21356 = cljs.core.chunk_rest(seq__21172_21354__$1);
var G__21357 = c__5525__auto___21355;
var G__21358 = cljs.core.count(c__5525__auto___21355);
var G__21359 = (0);
seq__21172_21339 = G__21356;
chunk__21174_21340 = G__21357;
count__21175_21341 = G__21358;
i__21176_21342 = G__21359;
continue;
} else {
var map__21181_21360 = cljs.core.first(seq__21172_21354__$1);
var map__21181_21361__$1 = cljs.core.__destructure_map(map__21181_21360);
var task_21362 = map__21181_21361__$1;
var fn_str_21363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181_21361__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181_21361__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21365 = goog.getObjectByName(fn_str_21363,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21364)].join(''));

(fn_obj_21365.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21365.cljs$core$IFn$_invoke$arity$2(path,new_link_21338) : fn_obj_21365.call(null, path,new_link_21338));


var G__21366 = cljs.core.next(seq__21172_21354__$1);
var G__21367 = null;
var G__21368 = (0);
var G__21369 = (0);
seq__21172_21339 = G__21366;
chunk__21174_21340 = G__21367;
count__21175_21341 = G__21368;
i__21176_21342 = G__21369;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21336);
});})(seq__21139_21332,chunk__21143_21333,count__21144_21334,i__21145_21335,seq__21022,chunk__21024,count__21025,i__21026,new_link_21338,path_match_21337,node_21336,path,map__21021,map__21021__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21337], 0));

goog.dom.insertSiblingAfter(new_link_21338,node_21336);


var G__21370 = seq__21139_21332;
var G__21371 = chunk__21143_21333;
var G__21372 = count__21144_21334;
var G__21373 = (i__21145_21335 + (1));
seq__21139_21332 = G__21370;
chunk__21143_21333 = G__21371;
count__21144_21334 = G__21372;
i__21145_21335 = G__21373;
continue;
} else {
var G__21374 = seq__21139_21332;
var G__21375 = chunk__21143_21333;
var G__21376 = count__21144_21334;
var G__21377 = (i__21145_21335 + (1));
seq__21139_21332 = G__21374;
chunk__21143_21333 = G__21375;
count__21144_21334 = G__21376;
i__21145_21335 = G__21377;
continue;
}
} else {
var G__21378 = seq__21139_21332;
var G__21379 = chunk__21143_21333;
var G__21380 = count__21144_21334;
var G__21381 = (i__21145_21335 + (1));
seq__21139_21332 = G__21378;
chunk__21143_21333 = G__21379;
count__21144_21334 = G__21380;
i__21145_21335 = G__21381;
continue;
}
} else {
var temp__5804__auto___21382 = cljs.core.seq(seq__21139_21332);
if(temp__5804__auto___21382){
var seq__21139_21383__$1 = temp__5804__auto___21382;
if(cljs.core.chunked_seq_QMARK_(seq__21139_21383__$1)){
var c__5525__auto___21384 = cljs.core.chunk_first(seq__21139_21383__$1);
var G__21385 = cljs.core.chunk_rest(seq__21139_21383__$1);
var G__21386 = c__5525__auto___21384;
var G__21387 = cljs.core.count(c__5525__auto___21384);
var G__21388 = (0);
seq__21139_21332 = G__21385;
chunk__21143_21333 = G__21386;
count__21144_21334 = G__21387;
i__21145_21335 = G__21388;
continue;
} else {
var node_21389 = cljs.core.first(seq__21139_21383__$1);
if(cljs.core.not(node_21389.shadow$old)){
var path_match_21390 = shadow.cljs.devtools.client.browser.match_paths(node_21389.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21390)){
var new_link_21391 = (function (){var G__21182 = node_21389.cloneNode(true);
G__21182.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21390),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21182;
})();
(node_21389.shadow$old = true);

(new_link_21391.onload = ((function (seq__21139_21332,chunk__21143_21333,count__21144_21334,i__21145_21335,seq__21022,chunk__21024,count__21025,i__21026,new_link_21391,path_match_21390,node_21389,seq__21139_21383__$1,temp__5804__auto___21382,path,map__21021,map__21021__$1,msg,updates,reload_info){
return (function (e){
var seq__21183_21392 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21185_21393 = null;
var count__21186_21394 = (0);
var i__21187_21395 = (0);
while(true){
if((i__21187_21395 < count__21186_21394)){
var map__21191_21396 = chunk__21185_21393.cljs$core$IIndexed$_nth$arity$2(null, i__21187_21395);
var map__21191_21397__$1 = cljs.core.__destructure_map(map__21191_21396);
var task_21398 = map__21191_21397__$1;
var fn_str_21399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191_21397__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191_21397__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21401 = goog.getObjectByName(fn_str_21399,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21400)].join(''));

(fn_obj_21401.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21401.cljs$core$IFn$_invoke$arity$2(path,new_link_21391) : fn_obj_21401.call(null, path,new_link_21391));


var G__21402 = seq__21183_21392;
var G__21403 = chunk__21185_21393;
var G__21404 = count__21186_21394;
var G__21405 = (i__21187_21395 + (1));
seq__21183_21392 = G__21402;
chunk__21185_21393 = G__21403;
count__21186_21394 = G__21404;
i__21187_21395 = G__21405;
continue;
} else {
var temp__5804__auto___21406__$1 = cljs.core.seq(seq__21183_21392);
if(temp__5804__auto___21406__$1){
var seq__21183_21407__$1 = temp__5804__auto___21406__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21183_21407__$1)){
var c__5525__auto___21408 = cljs.core.chunk_first(seq__21183_21407__$1);
var G__21409 = cljs.core.chunk_rest(seq__21183_21407__$1);
var G__21410 = c__5525__auto___21408;
var G__21411 = cljs.core.count(c__5525__auto___21408);
var G__21412 = (0);
seq__21183_21392 = G__21409;
chunk__21185_21393 = G__21410;
count__21186_21394 = G__21411;
i__21187_21395 = G__21412;
continue;
} else {
var map__21192_21413 = cljs.core.first(seq__21183_21407__$1);
var map__21192_21414__$1 = cljs.core.__destructure_map(map__21192_21413);
var task_21415 = map__21192_21414__$1;
var fn_str_21416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192_21414__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192_21414__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21418 = goog.getObjectByName(fn_str_21416,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21417)].join(''));

(fn_obj_21418.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21418.cljs$core$IFn$_invoke$arity$2(path,new_link_21391) : fn_obj_21418.call(null, path,new_link_21391));


var G__21419 = cljs.core.next(seq__21183_21407__$1);
var G__21420 = null;
var G__21421 = (0);
var G__21422 = (0);
seq__21183_21392 = G__21419;
chunk__21185_21393 = G__21420;
count__21186_21394 = G__21421;
i__21187_21395 = G__21422;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21389);
});})(seq__21139_21332,chunk__21143_21333,count__21144_21334,i__21145_21335,seq__21022,chunk__21024,count__21025,i__21026,new_link_21391,path_match_21390,node_21389,seq__21139_21383__$1,temp__5804__auto___21382,path,map__21021,map__21021__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21390], 0));

goog.dom.insertSiblingAfter(new_link_21391,node_21389);


var G__21423 = cljs.core.next(seq__21139_21383__$1);
var G__21424 = null;
var G__21425 = (0);
var G__21426 = (0);
seq__21139_21332 = G__21423;
chunk__21143_21333 = G__21424;
count__21144_21334 = G__21425;
i__21145_21335 = G__21426;
continue;
} else {
var G__21427 = cljs.core.next(seq__21139_21383__$1);
var G__21428 = null;
var G__21429 = (0);
var G__21430 = (0);
seq__21139_21332 = G__21427;
chunk__21143_21333 = G__21428;
count__21144_21334 = G__21429;
i__21145_21335 = G__21430;
continue;
}
} else {
var G__21431 = cljs.core.next(seq__21139_21383__$1);
var G__21432 = null;
var G__21433 = (0);
var G__21434 = (0);
seq__21139_21332 = G__21431;
chunk__21143_21333 = G__21432;
count__21144_21334 = G__21433;
i__21145_21335 = G__21434;
continue;
}
}
} else {
}
}
break;
}


var G__21435 = seq__21022;
var G__21436 = chunk__21024;
var G__21437 = count__21025;
var G__21438 = (i__21026 + (1));
seq__21022 = G__21435;
chunk__21024 = G__21436;
count__21025 = G__21437;
i__21026 = G__21438;
continue;
} else {
var G__21439 = seq__21022;
var G__21440 = chunk__21024;
var G__21441 = count__21025;
var G__21442 = (i__21026 + (1));
seq__21022 = G__21439;
chunk__21024 = G__21440;
count__21025 = G__21441;
i__21026 = G__21442;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21022);
if(temp__5804__auto__){
var seq__21022__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21022__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21022__$1);
var G__21443 = cljs.core.chunk_rest(seq__21022__$1);
var G__21444 = c__5525__auto__;
var G__21445 = cljs.core.count(c__5525__auto__);
var G__21446 = (0);
seq__21022 = G__21443;
chunk__21024 = G__21444;
count__21025 = G__21445;
i__21026 = G__21446;
continue;
} else {
var path = cljs.core.first(seq__21022__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21193_21447 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21197_21448 = null;
var count__21198_21449 = (0);
var i__21199_21450 = (0);
while(true){
if((i__21199_21450 < count__21198_21449)){
var node_21451 = chunk__21197_21448.cljs$core$IIndexed$_nth$arity$2(null, i__21199_21450);
if(cljs.core.not(node_21451.shadow$old)){
var path_match_21452 = shadow.cljs.devtools.client.browser.match_paths(node_21451.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21452)){
var new_link_21453 = (function (){var G__21225 = node_21451.cloneNode(true);
G__21225.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21452),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21225;
})();
(node_21451.shadow$old = true);

(new_link_21453.onload = ((function (seq__21193_21447,chunk__21197_21448,count__21198_21449,i__21199_21450,seq__21022,chunk__21024,count__21025,i__21026,new_link_21453,path_match_21452,node_21451,path,seq__21022__$1,temp__5804__auto__,map__21021,map__21021__$1,msg,updates,reload_info){
return (function (e){
var seq__21226_21454 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21228_21455 = null;
var count__21229_21456 = (0);
var i__21230_21457 = (0);
while(true){
if((i__21230_21457 < count__21229_21456)){
var map__21234_21458 = chunk__21228_21455.cljs$core$IIndexed$_nth$arity$2(null, i__21230_21457);
var map__21234_21459__$1 = cljs.core.__destructure_map(map__21234_21458);
var task_21460 = map__21234_21459__$1;
var fn_str_21461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21234_21459__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21234_21459__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21463 = goog.getObjectByName(fn_str_21461,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21462)].join(''));

(fn_obj_21463.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21463.cljs$core$IFn$_invoke$arity$2(path,new_link_21453) : fn_obj_21463.call(null, path,new_link_21453));


var G__21464 = seq__21226_21454;
var G__21465 = chunk__21228_21455;
var G__21466 = count__21229_21456;
var G__21467 = (i__21230_21457 + (1));
seq__21226_21454 = G__21464;
chunk__21228_21455 = G__21465;
count__21229_21456 = G__21466;
i__21230_21457 = G__21467;
continue;
} else {
var temp__5804__auto___21468__$1 = cljs.core.seq(seq__21226_21454);
if(temp__5804__auto___21468__$1){
var seq__21226_21469__$1 = temp__5804__auto___21468__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21226_21469__$1)){
var c__5525__auto___21470 = cljs.core.chunk_first(seq__21226_21469__$1);
var G__21471 = cljs.core.chunk_rest(seq__21226_21469__$1);
var G__21472 = c__5525__auto___21470;
var G__21473 = cljs.core.count(c__5525__auto___21470);
var G__21474 = (0);
seq__21226_21454 = G__21471;
chunk__21228_21455 = G__21472;
count__21229_21456 = G__21473;
i__21230_21457 = G__21474;
continue;
} else {
var map__21235_21475 = cljs.core.first(seq__21226_21469__$1);
var map__21235_21476__$1 = cljs.core.__destructure_map(map__21235_21475);
var task_21477 = map__21235_21476__$1;
var fn_str_21478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235_21476__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235_21476__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21480 = goog.getObjectByName(fn_str_21478,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21479)].join(''));

(fn_obj_21480.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21480.cljs$core$IFn$_invoke$arity$2(path,new_link_21453) : fn_obj_21480.call(null, path,new_link_21453));


var G__21481 = cljs.core.next(seq__21226_21469__$1);
var G__21482 = null;
var G__21483 = (0);
var G__21484 = (0);
seq__21226_21454 = G__21481;
chunk__21228_21455 = G__21482;
count__21229_21456 = G__21483;
i__21230_21457 = G__21484;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21451);
});})(seq__21193_21447,chunk__21197_21448,count__21198_21449,i__21199_21450,seq__21022,chunk__21024,count__21025,i__21026,new_link_21453,path_match_21452,node_21451,path,seq__21022__$1,temp__5804__auto__,map__21021,map__21021__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21452], 0));

goog.dom.insertSiblingAfter(new_link_21453,node_21451);


var G__21485 = seq__21193_21447;
var G__21486 = chunk__21197_21448;
var G__21487 = count__21198_21449;
var G__21488 = (i__21199_21450 + (1));
seq__21193_21447 = G__21485;
chunk__21197_21448 = G__21486;
count__21198_21449 = G__21487;
i__21199_21450 = G__21488;
continue;
} else {
var G__21489 = seq__21193_21447;
var G__21490 = chunk__21197_21448;
var G__21491 = count__21198_21449;
var G__21492 = (i__21199_21450 + (1));
seq__21193_21447 = G__21489;
chunk__21197_21448 = G__21490;
count__21198_21449 = G__21491;
i__21199_21450 = G__21492;
continue;
}
} else {
var G__21493 = seq__21193_21447;
var G__21494 = chunk__21197_21448;
var G__21495 = count__21198_21449;
var G__21496 = (i__21199_21450 + (1));
seq__21193_21447 = G__21493;
chunk__21197_21448 = G__21494;
count__21198_21449 = G__21495;
i__21199_21450 = G__21496;
continue;
}
} else {
var temp__5804__auto___21497__$1 = cljs.core.seq(seq__21193_21447);
if(temp__5804__auto___21497__$1){
var seq__21193_21498__$1 = temp__5804__auto___21497__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21193_21498__$1)){
var c__5525__auto___21499 = cljs.core.chunk_first(seq__21193_21498__$1);
var G__21500 = cljs.core.chunk_rest(seq__21193_21498__$1);
var G__21501 = c__5525__auto___21499;
var G__21502 = cljs.core.count(c__5525__auto___21499);
var G__21503 = (0);
seq__21193_21447 = G__21500;
chunk__21197_21448 = G__21501;
count__21198_21449 = G__21502;
i__21199_21450 = G__21503;
continue;
} else {
var node_21504 = cljs.core.first(seq__21193_21498__$1);
if(cljs.core.not(node_21504.shadow$old)){
var path_match_21505 = shadow.cljs.devtools.client.browser.match_paths(node_21504.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21505)){
var new_link_21506 = (function (){var G__21236 = node_21504.cloneNode(true);
G__21236.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21505),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21236;
})();
(node_21504.shadow$old = true);

(new_link_21506.onload = ((function (seq__21193_21447,chunk__21197_21448,count__21198_21449,i__21199_21450,seq__21022,chunk__21024,count__21025,i__21026,new_link_21506,path_match_21505,node_21504,seq__21193_21498__$1,temp__5804__auto___21497__$1,path,seq__21022__$1,temp__5804__auto__,map__21021,map__21021__$1,msg,updates,reload_info){
return (function (e){
var seq__21237_21507 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21239_21508 = null;
var count__21240_21509 = (0);
var i__21241_21510 = (0);
while(true){
if((i__21241_21510 < count__21240_21509)){
var map__21245_21511 = chunk__21239_21508.cljs$core$IIndexed$_nth$arity$2(null, i__21241_21510);
var map__21245_21512__$1 = cljs.core.__destructure_map(map__21245_21511);
var task_21513 = map__21245_21512__$1;
var fn_str_21514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245_21512__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245_21512__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21516 = goog.getObjectByName(fn_str_21514,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21515)].join(''));

(fn_obj_21516.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21516.cljs$core$IFn$_invoke$arity$2(path,new_link_21506) : fn_obj_21516.call(null, path,new_link_21506));


var G__21517 = seq__21237_21507;
var G__21518 = chunk__21239_21508;
var G__21519 = count__21240_21509;
var G__21520 = (i__21241_21510 + (1));
seq__21237_21507 = G__21517;
chunk__21239_21508 = G__21518;
count__21240_21509 = G__21519;
i__21241_21510 = G__21520;
continue;
} else {
var temp__5804__auto___21521__$2 = cljs.core.seq(seq__21237_21507);
if(temp__5804__auto___21521__$2){
var seq__21237_21522__$1 = temp__5804__auto___21521__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21237_21522__$1)){
var c__5525__auto___21523 = cljs.core.chunk_first(seq__21237_21522__$1);
var G__21524 = cljs.core.chunk_rest(seq__21237_21522__$1);
var G__21525 = c__5525__auto___21523;
var G__21526 = cljs.core.count(c__5525__auto___21523);
var G__21527 = (0);
seq__21237_21507 = G__21524;
chunk__21239_21508 = G__21525;
count__21240_21509 = G__21526;
i__21241_21510 = G__21527;
continue;
} else {
var map__21246_21528 = cljs.core.first(seq__21237_21522__$1);
var map__21246_21529__$1 = cljs.core.__destructure_map(map__21246_21528);
var task_21530 = map__21246_21529__$1;
var fn_str_21531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21246_21529__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21246_21529__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21533 = goog.getObjectByName(fn_str_21531,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21532)].join(''));

(fn_obj_21533.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21533.cljs$core$IFn$_invoke$arity$2(path,new_link_21506) : fn_obj_21533.call(null, path,new_link_21506));


var G__21534 = cljs.core.next(seq__21237_21522__$1);
var G__21535 = null;
var G__21536 = (0);
var G__21537 = (0);
seq__21237_21507 = G__21534;
chunk__21239_21508 = G__21535;
count__21240_21509 = G__21536;
i__21241_21510 = G__21537;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21504);
});})(seq__21193_21447,chunk__21197_21448,count__21198_21449,i__21199_21450,seq__21022,chunk__21024,count__21025,i__21026,new_link_21506,path_match_21505,node_21504,seq__21193_21498__$1,temp__5804__auto___21497__$1,path,seq__21022__$1,temp__5804__auto__,map__21021,map__21021__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21505], 0));

goog.dom.insertSiblingAfter(new_link_21506,node_21504);


var G__21538 = cljs.core.next(seq__21193_21498__$1);
var G__21539 = null;
var G__21540 = (0);
var G__21541 = (0);
seq__21193_21447 = G__21538;
chunk__21197_21448 = G__21539;
count__21198_21449 = G__21540;
i__21199_21450 = G__21541;
continue;
} else {
var G__21542 = cljs.core.next(seq__21193_21498__$1);
var G__21543 = null;
var G__21544 = (0);
var G__21545 = (0);
seq__21193_21447 = G__21542;
chunk__21197_21448 = G__21543;
count__21198_21449 = G__21544;
i__21199_21450 = G__21545;
continue;
}
} else {
var G__21546 = cljs.core.next(seq__21193_21498__$1);
var G__21547 = null;
var G__21548 = (0);
var G__21549 = (0);
seq__21193_21447 = G__21546;
chunk__21197_21448 = G__21547;
count__21198_21449 = G__21548;
i__21199_21450 = G__21549;
continue;
}
}
} else {
}
}
break;
}


var G__21550 = cljs.core.next(seq__21022__$1);
var G__21551 = null;
var G__21552 = (0);
var G__21553 = (0);
seq__21022 = G__21550;
chunk__21024 = G__21551;
count__21025 = G__21552;
i__21026 = G__21553;
continue;
} else {
var G__21554 = cljs.core.next(seq__21022__$1);
var G__21555 = null;
var G__21556 = (0);
var G__21557 = (0);
seq__21022 = G__21554;
chunk__21024 = G__21555;
count__21025 = G__21556;
i__21026 = G__21557;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21247){
var map__21248 = p__21247;
var map__21248__$1 = cljs.core.__destructure_map(map__21248);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21248__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21249,done,error){
var map__21250 = p__21249;
var map__21250__$1 = cljs.core.__destructure_map(map__21250);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21250__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21251,done,error){
var map__21252 = p__21251;
var map__21252__$1 = cljs.core.__destructure_map(map__21252);
var msg = map__21252__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21252__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21252__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21252__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21253){
var map__21254 = p__21253;
var map__21254__$1 = cljs.core.__destructure_map(map__21254);
var src = map__21254__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21254__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21255 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21255) : done.call(null, G__21255));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21256){
var map__21257 = p__21256;
var map__21257__$1 = cljs.core.__destructure_map(map__21257);
var msg__$1 = map__21257__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21258){var ex = e21258;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21259){
var map__21260 = p__21259;
var map__21260__$1 = cljs.core.__destructure_map(map__21260);
var env = map__21260__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21260__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21261){
var map__21262 = p__21261;
var map__21262__$1 = cljs.core.__destructure_map(map__21262);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21262__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21262__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21263){
var map__21264 = p__21263;
var map__21264__$1 = cljs.core.__destructure_map(map__21264);
var svc = map__21264__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21264__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
