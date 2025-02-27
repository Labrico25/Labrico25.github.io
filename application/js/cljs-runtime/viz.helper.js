goog.provide('viz.helper');
if((typeof viz !== 'undefined') && (typeof viz.helper !== 'undefined') && (typeof viz.helper.enhanced_titanic !== 'undefined')){
} else {
viz.helper.enhanced_titanic = (function (){var G__11745 = (viz.helper.slurp.cljs$core$IFn$_invoke$arity$1 ? viz.helper.slurp.cljs$core$IFn$_invoke$arity$1("./titanic-enhanced.txt") : viz.helper.slurp.call(null, "./titanic-enhanced.txt"));
return (viz.helper.read_string.cljs$core$IFn$_invoke$arity$1 ? viz.helper.read_string.cljs$core$IFn$_invoke$arity$1(G__11745) : viz.helper.read_string.call(null, G__11745));
})();
}

//# sourceMappingURL=viz.helper.js.map
