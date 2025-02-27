goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_13018 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_13018(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_13019 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_13019(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__12448 = coll;
var G__12449 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__12448,G__12449) : shadow.dom.lazy_native_coll_seq.call(null, G__12448,G__12449));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__12452 = arguments.length;
switch (G__12452) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__12454 = arguments.length;
switch (G__12454) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__12456 = arguments.length;
switch (G__12456) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__12458 = arguments.length;
switch (G__12458) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__12460 = arguments.length;
switch (G__12460) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__12508 = arguments.length;
switch (G__12508) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e12509){if((e12509 instanceof Object)){
var e = e12509;
return console.log("didnt support attachEvent",el,e);
} else {
throw e12509;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__12510 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__12511 = null;
var count__12512 = (0);
var i__12513 = (0);
while(true){
if((i__12513 < count__12512)){
var el = chunk__12511.cljs$core$IIndexed$_nth$arity$2(null, i__12513);
var handler_13026__$1 = ((function (seq__12510,chunk__12511,count__12512,i__12513,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__12510,chunk__12511,count__12512,i__12513,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13026__$1);


var G__13027 = seq__12510;
var G__13028 = chunk__12511;
var G__13029 = count__12512;
var G__13030 = (i__12513 + (1));
seq__12510 = G__13027;
chunk__12511 = G__13028;
count__12512 = G__13029;
i__12513 = G__13030;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12510);
if(temp__5804__auto__){
var seq__12510__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12510__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12510__$1);
var G__13031 = cljs.core.chunk_rest(seq__12510__$1);
var G__13032 = c__5525__auto__;
var G__13033 = cljs.core.count(c__5525__auto__);
var G__13034 = (0);
seq__12510 = G__13031;
chunk__12511 = G__13032;
count__12512 = G__13033;
i__12513 = G__13034;
continue;
} else {
var el = cljs.core.first(seq__12510__$1);
var handler_13035__$1 = ((function (seq__12510,chunk__12511,count__12512,i__12513,el,seq__12510__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__12510,chunk__12511,count__12512,i__12513,el,seq__12510__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13035__$1);


var G__13036 = cljs.core.next(seq__12510__$1);
var G__13037 = null;
var G__13038 = (0);
var G__13039 = (0);
seq__12510 = G__13036;
chunk__12511 = G__13037;
count__12512 = G__13038;
i__12513 = G__13039;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__12567 = arguments.length;
switch (G__12567) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__12568 = cljs.core.seq(events);
var chunk__12569 = null;
var count__12570 = (0);
var i__12571 = (0);
while(true){
if((i__12571 < count__12570)){
var vec__12578 = chunk__12569.cljs$core$IIndexed$_nth$arity$2(null, i__12571);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13041 = seq__12568;
var G__13042 = chunk__12569;
var G__13043 = count__12570;
var G__13044 = (i__12571 + (1));
seq__12568 = G__13041;
chunk__12569 = G__13042;
count__12570 = G__13043;
i__12571 = G__13044;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12568);
if(temp__5804__auto__){
var seq__12568__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12568__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12568__$1);
var G__13045 = cljs.core.chunk_rest(seq__12568__$1);
var G__13046 = c__5525__auto__;
var G__13047 = cljs.core.count(c__5525__auto__);
var G__13048 = (0);
seq__12568 = G__13045;
chunk__12569 = G__13046;
count__12570 = G__13047;
i__12571 = G__13048;
continue;
} else {
var vec__12581 = cljs.core.first(seq__12568__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12581,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13049 = cljs.core.next(seq__12568__$1);
var G__13050 = null;
var G__13051 = (0);
var G__13052 = (0);
seq__12568 = G__13049;
chunk__12569 = G__13050;
count__12570 = G__13051;
i__12571 = G__13052;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__12584 = cljs.core.seq(styles);
var chunk__12585 = null;
var count__12586 = (0);
var i__12587 = (0);
while(true){
if((i__12587 < count__12586)){
var vec__12594 = chunk__12585.cljs$core$IIndexed$_nth$arity$2(null, i__12587);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13053 = seq__12584;
var G__13054 = chunk__12585;
var G__13055 = count__12586;
var G__13056 = (i__12587 + (1));
seq__12584 = G__13053;
chunk__12585 = G__13054;
count__12586 = G__13055;
i__12587 = G__13056;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12584);
if(temp__5804__auto__){
var seq__12584__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12584__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12584__$1);
var G__13057 = cljs.core.chunk_rest(seq__12584__$1);
var G__13058 = c__5525__auto__;
var G__13059 = cljs.core.count(c__5525__auto__);
var G__13060 = (0);
seq__12584 = G__13057;
chunk__12585 = G__13058;
count__12586 = G__13059;
i__12587 = G__13060;
continue;
} else {
var vec__12597 = cljs.core.first(seq__12584__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13061 = cljs.core.next(seq__12584__$1);
var G__13062 = null;
var G__13063 = (0);
var G__13064 = (0);
seq__12584 = G__13061;
chunk__12585 = G__13062;
count__12586 = G__13063;
i__12587 = G__13064;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12643_13065 = key;
var G__12643_13066__$1 = (((G__12643_13065 instanceof cljs.core.Keyword))?G__12643_13065.fqn:null);
switch (G__12643_13066__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_13068 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_13068,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_13068,"aria-");
}
})())){
el.setAttribute(ks_13068,value);
} else {
(el[ks_13068] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12644){
var map__12645 = p__12644;
var map__12645__$1 = cljs.core.__destructure_map(map__12645);
var props = map__12645__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12645__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12646 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12646,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12646,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12646,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12649 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12649,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12649;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12651 = arguments.length;
switch (G__12651) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12652){
var vec__12653 = p__12652;
var seq__12654 = cljs.core.seq(vec__12653);
var first__12655 = cljs.core.first(seq__12654);
var seq__12654__$1 = cljs.core.next(seq__12654);
var nn = first__12655;
var first__12655__$1 = cljs.core.first(seq__12654__$1);
var seq__12654__$2 = cljs.core.next(seq__12654__$1);
var np = first__12655__$1;
var nc = seq__12654__$2;
var node = vec__12653;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12656 = nn;
var G__12657 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12656,G__12657) : create_fn.call(null, G__12656,G__12657));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12658 = nn;
var G__12659 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12658,G__12659) : create_fn.call(null, G__12658,G__12659));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12660 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(1),null);
var seq__12663_13074 = cljs.core.seq(node_children);
var chunk__12664_13075 = null;
var count__12665_13076 = (0);
var i__12666_13077 = (0);
while(true){
if((i__12666_13077 < count__12665_13076)){
var child_struct_13078 = chunk__12664_13075.cljs$core$IIndexed$_nth$arity$2(null, i__12666_13077);
var children_13079 = shadow.dom.dom_node(child_struct_13078);
if(cljs.core.seq_QMARK_(children_13079)){
var seq__12711_13080 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13079));
var chunk__12713_13081 = null;
var count__12714_13082 = (0);
var i__12715_13083 = (0);
while(true){
if((i__12715_13083 < count__12714_13082)){
var child_13084 = chunk__12713_13081.cljs$core$IIndexed$_nth$arity$2(null, i__12715_13083);
if(cljs.core.truth_(child_13084)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13084);


var G__13085 = seq__12711_13080;
var G__13086 = chunk__12713_13081;
var G__13087 = count__12714_13082;
var G__13088 = (i__12715_13083 + (1));
seq__12711_13080 = G__13085;
chunk__12713_13081 = G__13086;
count__12714_13082 = G__13087;
i__12715_13083 = G__13088;
continue;
} else {
var G__13089 = seq__12711_13080;
var G__13090 = chunk__12713_13081;
var G__13091 = count__12714_13082;
var G__13092 = (i__12715_13083 + (1));
seq__12711_13080 = G__13089;
chunk__12713_13081 = G__13090;
count__12714_13082 = G__13091;
i__12715_13083 = G__13092;
continue;
}
} else {
var temp__5804__auto___13093 = cljs.core.seq(seq__12711_13080);
if(temp__5804__auto___13093){
var seq__12711_13094__$1 = temp__5804__auto___13093;
if(cljs.core.chunked_seq_QMARK_(seq__12711_13094__$1)){
var c__5525__auto___13095 = cljs.core.chunk_first(seq__12711_13094__$1);
var G__13096 = cljs.core.chunk_rest(seq__12711_13094__$1);
var G__13097 = c__5525__auto___13095;
var G__13098 = cljs.core.count(c__5525__auto___13095);
var G__13099 = (0);
seq__12711_13080 = G__13096;
chunk__12713_13081 = G__13097;
count__12714_13082 = G__13098;
i__12715_13083 = G__13099;
continue;
} else {
var child_13101 = cljs.core.first(seq__12711_13094__$1);
if(cljs.core.truth_(child_13101)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13101);


var G__13102 = cljs.core.next(seq__12711_13094__$1);
var G__13103 = null;
var G__13104 = (0);
var G__13105 = (0);
seq__12711_13080 = G__13102;
chunk__12713_13081 = G__13103;
count__12714_13082 = G__13104;
i__12715_13083 = G__13105;
continue;
} else {
var G__13106 = cljs.core.next(seq__12711_13094__$1);
var G__13107 = null;
var G__13108 = (0);
var G__13109 = (0);
seq__12711_13080 = G__13106;
chunk__12713_13081 = G__13107;
count__12714_13082 = G__13108;
i__12715_13083 = G__13109;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13079);
}


var G__13110 = seq__12663_13074;
var G__13111 = chunk__12664_13075;
var G__13112 = count__12665_13076;
var G__13113 = (i__12666_13077 + (1));
seq__12663_13074 = G__13110;
chunk__12664_13075 = G__13111;
count__12665_13076 = G__13112;
i__12666_13077 = G__13113;
continue;
} else {
var temp__5804__auto___13114 = cljs.core.seq(seq__12663_13074);
if(temp__5804__auto___13114){
var seq__12663_13115__$1 = temp__5804__auto___13114;
if(cljs.core.chunked_seq_QMARK_(seq__12663_13115__$1)){
var c__5525__auto___13116 = cljs.core.chunk_first(seq__12663_13115__$1);
var G__13117 = cljs.core.chunk_rest(seq__12663_13115__$1);
var G__13118 = c__5525__auto___13116;
var G__13119 = cljs.core.count(c__5525__auto___13116);
var G__13120 = (0);
seq__12663_13074 = G__13117;
chunk__12664_13075 = G__13118;
count__12665_13076 = G__13119;
i__12666_13077 = G__13120;
continue;
} else {
var child_struct_13121 = cljs.core.first(seq__12663_13115__$1);
var children_13122 = shadow.dom.dom_node(child_struct_13121);
if(cljs.core.seq_QMARK_(children_13122)){
var seq__12717_13123 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13122));
var chunk__12719_13124 = null;
var count__12720_13125 = (0);
var i__12721_13126 = (0);
while(true){
if((i__12721_13126 < count__12720_13125)){
var child_13127 = chunk__12719_13124.cljs$core$IIndexed$_nth$arity$2(null, i__12721_13126);
if(cljs.core.truth_(child_13127)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13127);


var G__13128 = seq__12717_13123;
var G__13129 = chunk__12719_13124;
var G__13130 = count__12720_13125;
var G__13131 = (i__12721_13126 + (1));
seq__12717_13123 = G__13128;
chunk__12719_13124 = G__13129;
count__12720_13125 = G__13130;
i__12721_13126 = G__13131;
continue;
} else {
var G__13132 = seq__12717_13123;
var G__13133 = chunk__12719_13124;
var G__13134 = count__12720_13125;
var G__13135 = (i__12721_13126 + (1));
seq__12717_13123 = G__13132;
chunk__12719_13124 = G__13133;
count__12720_13125 = G__13134;
i__12721_13126 = G__13135;
continue;
}
} else {
var temp__5804__auto___13136__$1 = cljs.core.seq(seq__12717_13123);
if(temp__5804__auto___13136__$1){
var seq__12717_13137__$1 = temp__5804__auto___13136__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12717_13137__$1)){
var c__5525__auto___13138 = cljs.core.chunk_first(seq__12717_13137__$1);
var G__13139 = cljs.core.chunk_rest(seq__12717_13137__$1);
var G__13140 = c__5525__auto___13138;
var G__13141 = cljs.core.count(c__5525__auto___13138);
var G__13142 = (0);
seq__12717_13123 = G__13139;
chunk__12719_13124 = G__13140;
count__12720_13125 = G__13141;
i__12721_13126 = G__13142;
continue;
} else {
var child_13143 = cljs.core.first(seq__12717_13137__$1);
if(cljs.core.truth_(child_13143)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13143);


var G__13144 = cljs.core.next(seq__12717_13137__$1);
var G__13145 = null;
var G__13146 = (0);
var G__13147 = (0);
seq__12717_13123 = G__13144;
chunk__12719_13124 = G__13145;
count__12720_13125 = G__13146;
i__12721_13126 = G__13147;
continue;
} else {
var G__13148 = cljs.core.next(seq__12717_13137__$1);
var G__13149 = null;
var G__13150 = (0);
var G__13151 = (0);
seq__12717_13123 = G__13148;
chunk__12719_13124 = G__13149;
count__12720_13125 = G__13150;
i__12721_13126 = G__13151;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13122);
}


var G__13152 = cljs.core.next(seq__12663_13115__$1);
var G__13153 = null;
var G__13154 = (0);
var G__13155 = (0);
seq__12663_13074 = G__13152;
chunk__12664_13075 = G__13153;
count__12665_13076 = G__13154;
i__12666_13077 = G__13155;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12724 = cljs.core.seq(node);
var chunk__12725 = null;
var count__12726 = (0);
var i__12727 = (0);
while(true){
if((i__12727 < count__12726)){
var n = chunk__12725.cljs$core$IIndexed$_nth$arity$2(null, i__12727);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13156 = seq__12724;
var G__13157 = chunk__12725;
var G__13158 = count__12726;
var G__13159 = (i__12727 + (1));
seq__12724 = G__13156;
chunk__12725 = G__13157;
count__12726 = G__13158;
i__12727 = G__13159;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12724);
if(temp__5804__auto__){
var seq__12724__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12724__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12724__$1);
var G__13160 = cljs.core.chunk_rest(seq__12724__$1);
var G__13161 = c__5525__auto__;
var G__13165 = cljs.core.count(c__5525__auto__);
var G__13166 = (0);
seq__12724 = G__13160;
chunk__12725 = G__13161;
count__12726 = G__13165;
i__12727 = G__13166;
continue;
} else {
var n = cljs.core.first(seq__12724__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13167 = cljs.core.next(seq__12724__$1);
var G__13168 = null;
var G__13169 = (0);
var G__13170 = (0);
seq__12724 = G__13167;
chunk__12725 = G__13168;
count__12726 = G__13169;
i__12727 = G__13170;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12729 = arguments.length;
switch (G__12729) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12731 = arguments.length;
switch (G__12731) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12733 = arguments.length;
switch (G__12733) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13193 = arguments.length;
var i__5727__auto___13194 = (0);
while(true){
if((i__5727__auto___13194 < len__5726__auto___13193)){
args__5732__auto__.push((arguments[i__5727__auto___13194]));

var G__13195 = (i__5727__auto___13194 + (1));
i__5727__auto___13194 = G__13195;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12752_13233 = cljs.core.seq(nodes);
var chunk__12753_13234 = null;
var count__12754_13235 = (0);
var i__12755_13236 = (0);
while(true){
if((i__12755_13236 < count__12754_13235)){
var node_13237 = chunk__12753_13234.cljs$core$IIndexed$_nth$arity$2(null, i__12755_13236);
fragment.appendChild(shadow.dom._to_dom(node_13237));


var G__13238 = seq__12752_13233;
var G__13239 = chunk__12753_13234;
var G__13240 = count__12754_13235;
var G__13241 = (i__12755_13236 + (1));
seq__12752_13233 = G__13238;
chunk__12753_13234 = G__13239;
count__12754_13235 = G__13240;
i__12755_13236 = G__13241;
continue;
} else {
var temp__5804__auto___13242 = cljs.core.seq(seq__12752_13233);
if(temp__5804__auto___13242){
var seq__12752_13243__$1 = temp__5804__auto___13242;
if(cljs.core.chunked_seq_QMARK_(seq__12752_13243__$1)){
var c__5525__auto___13244 = cljs.core.chunk_first(seq__12752_13243__$1);
var G__13245 = cljs.core.chunk_rest(seq__12752_13243__$1);
var G__13246 = c__5525__auto___13244;
var G__13247 = cljs.core.count(c__5525__auto___13244);
var G__13248 = (0);
seq__12752_13233 = G__13245;
chunk__12753_13234 = G__13246;
count__12754_13235 = G__13247;
i__12755_13236 = G__13248;
continue;
} else {
var node_13249 = cljs.core.first(seq__12752_13243__$1);
fragment.appendChild(shadow.dom._to_dom(node_13249));


var G__13250 = cljs.core.next(seq__12752_13243__$1);
var G__13251 = null;
var G__13252 = (0);
var G__13253 = (0);
seq__12752_13233 = G__13250;
chunk__12753_13234 = G__13251;
count__12754_13235 = G__13252;
i__12755_13236 = G__13253;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12751){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12751));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12756_13254 = cljs.core.seq(scripts);
var chunk__12757_13255 = null;
var count__12758_13256 = (0);
var i__12759_13257 = (0);
while(true){
if((i__12759_13257 < count__12758_13256)){
var vec__12766_13258 = chunk__12757_13255.cljs$core$IIndexed$_nth$arity$2(null, i__12759_13257);
var script_tag_13259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12766_13258,(0),null);
var script_body_13260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12766_13258,(1),null);
eval(script_body_13260);


var G__13261 = seq__12756_13254;
var G__13262 = chunk__12757_13255;
var G__13263 = count__12758_13256;
var G__13264 = (i__12759_13257 + (1));
seq__12756_13254 = G__13261;
chunk__12757_13255 = G__13262;
count__12758_13256 = G__13263;
i__12759_13257 = G__13264;
continue;
} else {
var temp__5804__auto___13265 = cljs.core.seq(seq__12756_13254);
if(temp__5804__auto___13265){
var seq__12756_13266__$1 = temp__5804__auto___13265;
if(cljs.core.chunked_seq_QMARK_(seq__12756_13266__$1)){
var c__5525__auto___13267 = cljs.core.chunk_first(seq__12756_13266__$1);
var G__13268 = cljs.core.chunk_rest(seq__12756_13266__$1);
var G__13269 = c__5525__auto___13267;
var G__13270 = cljs.core.count(c__5525__auto___13267);
var G__13271 = (0);
seq__12756_13254 = G__13268;
chunk__12757_13255 = G__13269;
count__12758_13256 = G__13270;
i__12759_13257 = G__13271;
continue;
} else {
var vec__12769_13272 = cljs.core.first(seq__12756_13266__$1);
var script_tag_13273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769_13272,(0),null);
var script_body_13274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769_13272,(1),null);
eval(script_body_13274);


var G__13275 = cljs.core.next(seq__12756_13266__$1);
var G__13276 = null;
var G__13277 = (0);
var G__13278 = (0);
seq__12756_13254 = G__13275;
chunk__12757_13255 = G__13276;
count__12758_13256 = G__13277;
i__12759_13257 = G__13278;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12772){
var vec__12773 = p__12772;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12773,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12773,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12777 = arguments.length;
switch (G__12777) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12780 = cljs.core.seq(style_keys);
var chunk__12781 = null;
var count__12782 = (0);
var i__12783 = (0);
while(true){
if((i__12783 < count__12782)){
var it = chunk__12781.cljs$core$IIndexed$_nth$arity$2(null, i__12783);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13280 = seq__12780;
var G__13281 = chunk__12781;
var G__13282 = count__12782;
var G__13283 = (i__12783 + (1));
seq__12780 = G__13280;
chunk__12781 = G__13281;
count__12782 = G__13282;
i__12783 = G__13283;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12780);
if(temp__5804__auto__){
var seq__12780__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12780__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12780__$1);
var G__13284 = cljs.core.chunk_rest(seq__12780__$1);
var G__13285 = c__5525__auto__;
var G__13286 = cljs.core.count(c__5525__auto__);
var G__13287 = (0);
seq__12780 = G__13284;
chunk__12781 = G__13285;
count__12782 = G__13286;
i__12783 = G__13287;
continue;
} else {
var it = cljs.core.first(seq__12780__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13288 = cljs.core.next(seq__12780__$1);
var G__13289 = null;
var G__13290 = (0);
var G__13291 = (0);
seq__12780 = G__13288;
chunk__12781 = G__13289;
count__12782 = G__13290;
i__12783 = G__13291;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12785,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12789 = k12785;
var G__12789__$1 = (((G__12789 instanceof cljs.core.Keyword))?G__12789.fqn:null);
switch (G__12789__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12785,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12790){
var vec__12791 = p__12790;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12784){
var self__ = this;
var G__12784__$1 = this;
return (new cljs.core.RecordIter((0),G__12784__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12786,other12787){
var self__ = this;
var this12786__$1 = this;
return (((!((other12787 == null)))) && ((((this12786__$1.constructor === other12787.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12786__$1.x,other12787.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12786__$1.y,other12787.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12786__$1.__extmap,other12787.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12785){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12794 = k12785;
var G__12794__$1 = (((G__12794 instanceof cljs.core.Keyword))?G__12794.fqn:null);
switch (G__12794__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12785);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12784){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12795 = cljs.core.keyword_identical_QMARK_;
var expr__12796 = k__5309__auto__;
if(cljs.core.truth_((pred__12795.cljs$core$IFn$_invoke$arity$2 ? pred__12795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12796) : pred__12795.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12796)))){
return (new shadow.dom.Coordinate(G__12784,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12795.cljs$core$IFn$_invoke$arity$2 ? pred__12795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12796) : pred__12795.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12796)))){
return (new shadow.dom.Coordinate(self__.x,G__12784,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12784),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12784){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12784,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12788){
var extmap__5342__auto__ = (function (){var G__12820 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12788,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12788)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12820);
} else {
return G__12820;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12788),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12788),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12822,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12826 = k12822;
var G__12826__$1 = (((G__12826 instanceof cljs.core.Keyword))?G__12826.fqn:null);
switch (G__12826__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12822,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12827){
var vec__12828 = p__12827;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12828,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12828,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12821){
var self__ = this;
var G__12821__$1 = this;
return (new cljs.core.RecordIter((0),G__12821__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12823,other12824){
var self__ = this;
var this12823__$1 = this;
return (((!((other12824 == null)))) && ((((this12823__$1.constructor === other12824.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12823__$1.w,other12824.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12823__$1.h,other12824.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12823__$1.__extmap,other12824.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12822){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12831 = k12822;
var G__12831__$1 = (((G__12831 instanceof cljs.core.Keyword))?G__12831.fqn:null);
switch (G__12831__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12822);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12821){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12832 = cljs.core.keyword_identical_QMARK_;
var expr__12833 = k__5309__auto__;
if(cljs.core.truth_((pred__12832.cljs$core$IFn$_invoke$arity$2 ? pred__12832.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12833) : pred__12832.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12833)))){
return (new shadow.dom.Size(G__12821,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12832.cljs$core$IFn$_invoke$arity$2 ? pred__12832.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12833) : pred__12832.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12833)))){
return (new shadow.dom.Size(self__.w,G__12821,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12821),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12821){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12821,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12825){
var extmap__5342__auto__ = (function (){var G__12835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12825,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12825)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12835);
} else {
return G__12835;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12825),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12825),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13355 = (i + (1));
var G__13356 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13355;
ret = G__13356;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12900){
var vec__12901 = p__12900;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12901,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12905 = arguments.length;
switch (G__12905) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13358 = ps;
var G__13359 = (i + (1));
el__$1 = G__13358;
i = G__13359;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12924 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12924,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12924,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12924,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12927_13360 = cljs.core.seq(props);
var chunk__12928_13361 = null;
var count__12929_13362 = (0);
var i__12930_13363 = (0);
while(true){
if((i__12930_13363 < count__12929_13362)){
var vec__12937_13364 = chunk__12928_13361.cljs$core$IIndexed$_nth$arity$2(null, i__12930_13363);
var k_13365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12937_13364,(0),null);
var v_13366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12937_13364,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13365);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13365),v_13366);


var G__13367 = seq__12927_13360;
var G__13368 = chunk__12928_13361;
var G__13369 = count__12929_13362;
var G__13370 = (i__12930_13363 + (1));
seq__12927_13360 = G__13367;
chunk__12928_13361 = G__13368;
count__12929_13362 = G__13369;
i__12930_13363 = G__13370;
continue;
} else {
var temp__5804__auto___13371 = cljs.core.seq(seq__12927_13360);
if(temp__5804__auto___13371){
var seq__12927_13372__$1 = temp__5804__auto___13371;
if(cljs.core.chunked_seq_QMARK_(seq__12927_13372__$1)){
var c__5525__auto___13373 = cljs.core.chunk_first(seq__12927_13372__$1);
var G__13374 = cljs.core.chunk_rest(seq__12927_13372__$1);
var G__13375 = c__5525__auto___13373;
var G__13376 = cljs.core.count(c__5525__auto___13373);
var G__13377 = (0);
seq__12927_13360 = G__13374;
chunk__12928_13361 = G__13375;
count__12929_13362 = G__13376;
i__12930_13363 = G__13377;
continue;
} else {
var vec__12940_13378 = cljs.core.first(seq__12927_13372__$1);
var k_13379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12940_13378,(0),null);
var v_13380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12940_13378,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13379);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13379),v_13380);


var G__13381 = cljs.core.next(seq__12927_13372__$1);
var G__13382 = null;
var G__13383 = (0);
var G__13384 = (0);
seq__12927_13360 = G__13381;
chunk__12928_13361 = G__13382;
count__12929_13362 = G__13383;
i__12930_13363 = G__13384;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12944 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12944,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12944,(1),null);
var seq__12947_13385 = cljs.core.seq(node_children);
var chunk__12949_13386 = null;
var count__12950_13387 = (0);
var i__12951_13388 = (0);
while(true){
if((i__12951_13388 < count__12950_13387)){
var child_struct_13389 = chunk__12949_13386.cljs$core$IIndexed$_nth$arity$2(null, i__12951_13388);
if((!((child_struct_13389 == null)))){
if(typeof child_struct_13389 === 'string'){
var text_13390 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13390),child_struct_13389].join(''));
} else {
var children_13391 = shadow.dom.svg_node(child_struct_13389);
if(cljs.core.seq_QMARK_(children_13391)){
var seq__12974_13392 = cljs.core.seq(children_13391);
var chunk__12976_13393 = null;
var count__12977_13394 = (0);
var i__12978_13395 = (0);
while(true){
if((i__12978_13395 < count__12977_13394)){
var child_13396 = chunk__12976_13393.cljs$core$IIndexed$_nth$arity$2(null, i__12978_13395);
if(cljs.core.truth_(child_13396)){
node.appendChild(child_13396);


var G__13397 = seq__12974_13392;
var G__13398 = chunk__12976_13393;
var G__13399 = count__12977_13394;
var G__13400 = (i__12978_13395 + (1));
seq__12974_13392 = G__13397;
chunk__12976_13393 = G__13398;
count__12977_13394 = G__13399;
i__12978_13395 = G__13400;
continue;
} else {
var G__13401 = seq__12974_13392;
var G__13402 = chunk__12976_13393;
var G__13403 = count__12977_13394;
var G__13404 = (i__12978_13395 + (1));
seq__12974_13392 = G__13401;
chunk__12976_13393 = G__13402;
count__12977_13394 = G__13403;
i__12978_13395 = G__13404;
continue;
}
} else {
var temp__5804__auto___13405 = cljs.core.seq(seq__12974_13392);
if(temp__5804__auto___13405){
var seq__12974_13406__$1 = temp__5804__auto___13405;
if(cljs.core.chunked_seq_QMARK_(seq__12974_13406__$1)){
var c__5525__auto___13407 = cljs.core.chunk_first(seq__12974_13406__$1);
var G__13408 = cljs.core.chunk_rest(seq__12974_13406__$1);
var G__13409 = c__5525__auto___13407;
var G__13410 = cljs.core.count(c__5525__auto___13407);
var G__13411 = (0);
seq__12974_13392 = G__13408;
chunk__12976_13393 = G__13409;
count__12977_13394 = G__13410;
i__12978_13395 = G__13411;
continue;
} else {
var child_13412 = cljs.core.first(seq__12974_13406__$1);
if(cljs.core.truth_(child_13412)){
node.appendChild(child_13412);


var G__13413 = cljs.core.next(seq__12974_13406__$1);
var G__13414 = null;
var G__13415 = (0);
var G__13416 = (0);
seq__12974_13392 = G__13413;
chunk__12976_13393 = G__13414;
count__12977_13394 = G__13415;
i__12978_13395 = G__13416;
continue;
} else {
var G__13417 = cljs.core.next(seq__12974_13406__$1);
var G__13418 = null;
var G__13419 = (0);
var G__13420 = (0);
seq__12974_13392 = G__13417;
chunk__12976_13393 = G__13418;
count__12977_13394 = G__13419;
i__12978_13395 = G__13420;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13391);
}
}


var G__13421 = seq__12947_13385;
var G__13422 = chunk__12949_13386;
var G__13423 = count__12950_13387;
var G__13424 = (i__12951_13388 + (1));
seq__12947_13385 = G__13421;
chunk__12949_13386 = G__13422;
count__12950_13387 = G__13423;
i__12951_13388 = G__13424;
continue;
} else {
var G__13425 = seq__12947_13385;
var G__13426 = chunk__12949_13386;
var G__13427 = count__12950_13387;
var G__13428 = (i__12951_13388 + (1));
seq__12947_13385 = G__13425;
chunk__12949_13386 = G__13426;
count__12950_13387 = G__13427;
i__12951_13388 = G__13428;
continue;
}
} else {
var temp__5804__auto___13429 = cljs.core.seq(seq__12947_13385);
if(temp__5804__auto___13429){
var seq__12947_13430__$1 = temp__5804__auto___13429;
if(cljs.core.chunked_seq_QMARK_(seq__12947_13430__$1)){
var c__5525__auto___13431 = cljs.core.chunk_first(seq__12947_13430__$1);
var G__13432 = cljs.core.chunk_rest(seq__12947_13430__$1);
var G__13433 = c__5525__auto___13431;
var G__13434 = cljs.core.count(c__5525__auto___13431);
var G__13435 = (0);
seq__12947_13385 = G__13432;
chunk__12949_13386 = G__13433;
count__12950_13387 = G__13434;
i__12951_13388 = G__13435;
continue;
} else {
var child_struct_13436 = cljs.core.first(seq__12947_13430__$1);
if((!((child_struct_13436 == null)))){
if(typeof child_struct_13436 === 'string'){
var text_13437 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13437),child_struct_13436].join(''));
} else {
var children_13438 = shadow.dom.svg_node(child_struct_13436);
if(cljs.core.seq_QMARK_(children_13438)){
var seq__12980_13439 = cljs.core.seq(children_13438);
var chunk__12982_13440 = null;
var count__12983_13441 = (0);
var i__12984_13442 = (0);
while(true){
if((i__12984_13442 < count__12983_13441)){
var child_13443 = chunk__12982_13440.cljs$core$IIndexed$_nth$arity$2(null, i__12984_13442);
if(cljs.core.truth_(child_13443)){
node.appendChild(child_13443);


var G__13444 = seq__12980_13439;
var G__13445 = chunk__12982_13440;
var G__13446 = count__12983_13441;
var G__13447 = (i__12984_13442 + (1));
seq__12980_13439 = G__13444;
chunk__12982_13440 = G__13445;
count__12983_13441 = G__13446;
i__12984_13442 = G__13447;
continue;
} else {
var G__13448 = seq__12980_13439;
var G__13449 = chunk__12982_13440;
var G__13450 = count__12983_13441;
var G__13451 = (i__12984_13442 + (1));
seq__12980_13439 = G__13448;
chunk__12982_13440 = G__13449;
count__12983_13441 = G__13450;
i__12984_13442 = G__13451;
continue;
}
} else {
var temp__5804__auto___13452__$1 = cljs.core.seq(seq__12980_13439);
if(temp__5804__auto___13452__$1){
var seq__12980_13453__$1 = temp__5804__auto___13452__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12980_13453__$1)){
var c__5525__auto___13454 = cljs.core.chunk_first(seq__12980_13453__$1);
var G__13455 = cljs.core.chunk_rest(seq__12980_13453__$1);
var G__13456 = c__5525__auto___13454;
var G__13457 = cljs.core.count(c__5525__auto___13454);
var G__13458 = (0);
seq__12980_13439 = G__13455;
chunk__12982_13440 = G__13456;
count__12983_13441 = G__13457;
i__12984_13442 = G__13458;
continue;
} else {
var child_13459 = cljs.core.first(seq__12980_13453__$1);
if(cljs.core.truth_(child_13459)){
node.appendChild(child_13459);


var G__13460 = cljs.core.next(seq__12980_13453__$1);
var G__13461 = null;
var G__13462 = (0);
var G__13463 = (0);
seq__12980_13439 = G__13460;
chunk__12982_13440 = G__13461;
count__12983_13441 = G__13462;
i__12984_13442 = G__13463;
continue;
} else {
var G__13464 = cljs.core.next(seq__12980_13453__$1);
var G__13465 = null;
var G__13466 = (0);
var G__13467 = (0);
seq__12980_13439 = G__13464;
chunk__12982_13440 = G__13465;
count__12983_13441 = G__13466;
i__12984_13442 = G__13467;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13438);
}
}


var G__13468 = cljs.core.next(seq__12947_13430__$1);
var G__13469 = null;
var G__13470 = (0);
var G__13471 = (0);
seq__12947_13385 = G__13468;
chunk__12949_13386 = G__13469;
count__12950_13387 = G__13470;
i__12951_13388 = G__13471;
continue;
} else {
var G__13472 = cljs.core.next(seq__12947_13430__$1);
var G__13473 = null;
var G__13474 = (0);
var G__13475 = (0);
seq__12947_13385 = G__13472;
chunk__12949_13386 = G__13473;
count__12950_13387 = G__13474;
i__12951_13388 = G__13475;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13476 = arguments.length;
var i__5727__auto___13477 = (0);
while(true){
if((i__5727__auto___13477 < len__5726__auto___13476)){
args__5732__auto__.push((arguments[i__5727__auto___13477]));

var G__13478 = (i__5727__auto___13477 + (1));
i__5727__auto___13477 = G__13478;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12986){
var G__12987 = cljs.core.first(seq12986);
var seq12986__$1 = cljs.core.next(seq12986);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12987,seq12986__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
