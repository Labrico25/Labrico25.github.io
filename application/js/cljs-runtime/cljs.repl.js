goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20443){
var map__20444 = p__20443;
var map__20444__$1 = cljs.core.__destructure_map(map__20444);
var m = map__20444__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20445_20535 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20446_20536 = null;
var count__20447_20537 = (0);
var i__20448_20538 = (0);
while(true){
if((i__20448_20538 < count__20447_20537)){
var f_20539 = chunk__20446_20536.cljs$core$IIndexed$_nth$arity$2(null, i__20448_20538);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20539], 0));


var G__20540 = seq__20445_20535;
var G__20541 = chunk__20446_20536;
var G__20542 = count__20447_20537;
var G__20543 = (i__20448_20538 + (1));
seq__20445_20535 = G__20540;
chunk__20446_20536 = G__20541;
count__20447_20537 = G__20542;
i__20448_20538 = G__20543;
continue;
} else {
var temp__5804__auto___20544 = cljs.core.seq(seq__20445_20535);
if(temp__5804__auto___20544){
var seq__20445_20545__$1 = temp__5804__auto___20544;
if(cljs.core.chunked_seq_QMARK_(seq__20445_20545__$1)){
var c__5525__auto___20546 = cljs.core.chunk_first(seq__20445_20545__$1);
var G__20547 = cljs.core.chunk_rest(seq__20445_20545__$1);
var G__20548 = c__5525__auto___20546;
var G__20549 = cljs.core.count(c__5525__auto___20546);
var G__20550 = (0);
seq__20445_20535 = G__20547;
chunk__20446_20536 = G__20548;
count__20447_20537 = G__20549;
i__20448_20538 = G__20550;
continue;
} else {
var f_20551 = cljs.core.first(seq__20445_20545__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20551], 0));


var G__20552 = cljs.core.next(seq__20445_20545__$1);
var G__20553 = null;
var G__20554 = (0);
var G__20555 = (0);
seq__20445_20535 = G__20552;
chunk__20446_20536 = G__20553;
count__20447_20537 = G__20554;
i__20448_20538 = G__20555;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20556 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20556], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20556)))?cljs.core.second(arglists_20556):arglists_20556)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20449_20557 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20450_20558 = null;
var count__20451_20559 = (0);
var i__20452_20560 = (0);
while(true){
if((i__20452_20560 < count__20451_20559)){
var vec__20461_20561 = chunk__20450_20558.cljs$core$IIndexed$_nth$arity$2(null, i__20452_20560);
var name_20562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461_20561,(0),null);
var map__20464_20563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461_20561,(1),null);
var map__20464_20564__$1 = cljs.core.__destructure_map(map__20464_20563);
var doc_20565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20464_20564__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20464_20564__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20562], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20566], 0));

if(cljs.core.truth_(doc_20565)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20565], 0));
} else {
}


var G__20567 = seq__20449_20557;
var G__20568 = chunk__20450_20558;
var G__20569 = count__20451_20559;
var G__20570 = (i__20452_20560 + (1));
seq__20449_20557 = G__20567;
chunk__20450_20558 = G__20568;
count__20451_20559 = G__20569;
i__20452_20560 = G__20570;
continue;
} else {
var temp__5804__auto___20571 = cljs.core.seq(seq__20449_20557);
if(temp__5804__auto___20571){
var seq__20449_20572__$1 = temp__5804__auto___20571;
if(cljs.core.chunked_seq_QMARK_(seq__20449_20572__$1)){
var c__5525__auto___20573 = cljs.core.chunk_first(seq__20449_20572__$1);
var G__20574 = cljs.core.chunk_rest(seq__20449_20572__$1);
var G__20575 = c__5525__auto___20573;
var G__20576 = cljs.core.count(c__5525__auto___20573);
var G__20577 = (0);
seq__20449_20557 = G__20574;
chunk__20450_20558 = G__20575;
count__20451_20559 = G__20576;
i__20452_20560 = G__20577;
continue;
} else {
var vec__20465_20578 = cljs.core.first(seq__20449_20572__$1);
var name_20579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465_20578,(0),null);
var map__20468_20580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465_20578,(1),null);
var map__20468_20581__$1 = cljs.core.__destructure_map(map__20468_20580);
var doc_20582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20468_20581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20468_20581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20579], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20583], 0));

if(cljs.core.truth_(doc_20582)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20582], 0));
} else {
}


var G__20584 = cljs.core.next(seq__20449_20572__$1);
var G__20585 = null;
var G__20586 = (0);
var G__20587 = (0);
seq__20449_20557 = G__20584;
chunk__20450_20558 = G__20585;
count__20451_20559 = G__20586;
i__20452_20560 = G__20587;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20469 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20470 = null;
var count__20471 = (0);
var i__20472 = (0);
while(true){
if((i__20472 < count__20471)){
var role = chunk__20470.cljs$core$IIndexed$_nth$arity$2(null, i__20472);
var temp__5804__auto___20588__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20588__$1)){
var spec_20589 = temp__5804__auto___20588__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20589)], 0));
} else {
}


var G__20590 = seq__20469;
var G__20591 = chunk__20470;
var G__20592 = count__20471;
var G__20593 = (i__20472 + (1));
seq__20469 = G__20590;
chunk__20470 = G__20591;
count__20471 = G__20592;
i__20472 = G__20593;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20469);
if(temp__5804__auto____$1){
var seq__20469__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20469__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20469__$1);
var G__20594 = cljs.core.chunk_rest(seq__20469__$1);
var G__20595 = c__5525__auto__;
var G__20596 = cljs.core.count(c__5525__auto__);
var G__20597 = (0);
seq__20469 = G__20594;
chunk__20470 = G__20595;
count__20471 = G__20596;
i__20472 = G__20597;
continue;
} else {
var role = cljs.core.first(seq__20469__$1);
var temp__5804__auto___20598__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20598__$2)){
var spec_20599 = temp__5804__auto___20598__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20599)], 0));
} else {
}


var G__20600 = cljs.core.next(seq__20469__$1);
var G__20601 = null;
var G__20602 = (0);
var G__20603 = (0);
seq__20469 = G__20600;
chunk__20470 = G__20601;
count__20471 = G__20602;
i__20472 = G__20603;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20475 = datafied_throwable;
var map__20475__$1 = cljs.core.__destructure_map(map__20475);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20475__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20476 = cljs.core.last(via);
var map__20476__$1 = cljs.core.__destructure_map(map__20476);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20477 = data;
var map__20477__$1 = cljs.core.__destructure_map(map__20477);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20478 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20478__$1 = cljs.core.__destructure_map(map__20478);
var top_data = map__20478__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20479 = phase;
var G__20479__$1 = (((G__20479 instanceof cljs.core.Keyword))?G__20479.fqn:null);
switch (G__20479__$1) {
case "read-source":
var map__20480 = data;
var map__20480__$1 = cljs.core.__destructure_map(map__20480);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20480__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20480__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20481 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20481__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20481,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20481);
var G__20481__$2 = (cljs.core.truth_((function (){var fexpr__20482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20482.cljs$core$IFn$_invoke$arity$1 ? fexpr__20482.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20482.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20481__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20481__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20481__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20481__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20483 = top_data;
var G__20483__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20483,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20483);
var G__20483__$2 = (cljs.core.truth_((function (){var fexpr__20484 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20484.cljs$core$IFn$_invoke$arity$1 ? fexpr__20484.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20484.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20483__$1);
var G__20483__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20483__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20483__$2);
var G__20483__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20483__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20483__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20483__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20483__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20485 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20485,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20485,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20485,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20485,(3),null);
var G__20488 = top_data;
var G__20488__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20488,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20488);
var G__20488__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20488__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20488__$1);
var G__20488__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20488__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20488__$2);
var G__20488__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20488__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20488__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20488__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20488__$4;
}

break;
case "execution":
var vec__20489 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20489,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20489,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20489,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20489,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20474_SHARP_){
var or__5002__auto__ = (p1__20474_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__20492 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20492.cljs$core$IFn$_invoke$arity$1 ? fexpr__20492.cljs$core$IFn$_invoke$arity$1(p1__20474_SHARP_) : fexpr__20492.call(null, p1__20474_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__20493 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20493__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20493,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20493);
var G__20493__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20493__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20493__$1);
var G__20493__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20493__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20493__$2);
var G__20493__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20493__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20493__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20493__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20493__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20479__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20496){
var map__20497 = p__20496;
var map__20497__$1 = cljs.core.__destructure_map(map__20497);
var triage_data = map__20497__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20497__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20497__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20497__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20497__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20497__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20497__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20497__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20497__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20498 = phase;
var G__20498__$1 = (((G__20498 instanceof cljs.core.Keyword))?G__20498.fqn:null);
switch (G__20498__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20499 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20500 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20501 = loc;
var G__20502 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20503_20606 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20504_20607 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20505_20608 = true;
var _STAR_print_fn_STAR__temp_val__20506_20609 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20505_20608);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20506_20609);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20494_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20494_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20504_20607);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20503_20606);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20499,G__20500,G__20501,G__20502) : format.call(null, G__20499,G__20500,G__20501,G__20502));

break;
case "macroexpansion":
var G__20507 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20508 = cause_type;
var G__20509 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20510 = loc;
var G__20511 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20507,G__20508,G__20509,G__20510,G__20511) : format.call(null, G__20507,G__20508,G__20509,G__20510,G__20511));

break;
case "compile-syntax-check":
var G__20512 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20513 = cause_type;
var G__20514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20515 = loc;
var G__20516 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20512,G__20513,G__20514,G__20515,G__20516) : format.call(null, G__20512,G__20513,G__20514,G__20515,G__20516));

break;
case "compilation":
var G__20517 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20518 = cause_type;
var G__20519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20520 = loc;
var G__20521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20517,G__20518,G__20519,G__20520,G__20521) : format.call(null, G__20517,G__20518,G__20519,G__20520,G__20521));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20522 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20523 = symbol;
var G__20524 = loc;
var G__20525 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20526_20610 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20527_20611 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20528_20612 = true;
var _STAR_print_fn_STAR__temp_val__20529_20613 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20528_20612);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20529_20613);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20495_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20495_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20527_20611);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20526_20610);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20522,G__20523,G__20524,G__20525) : format.call(null, G__20522,G__20523,G__20524,G__20525));
} else {
var G__20530 = "Execution error%s at %s(%s).\n%s\n";
var G__20531 = cause_type;
var G__20532 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20533 = loc;
var G__20534 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20530,G__20531,G__20532,G__20533,G__20534) : format.call(null, G__20530,G__20531,G__20532,G__20533,G__20534));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20498__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
