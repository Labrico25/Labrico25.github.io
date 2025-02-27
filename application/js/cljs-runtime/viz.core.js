goog.provide('viz.core');
viz.core.query = (function viz$core$query(v,pred_fn,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16738_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((pred_fn.cljs$core$IFn$_invoke$arity$1 ? pred_fn.cljs$core$IFn$_invoke$arity$1(p1__16738_SHARP_) : pred_fn.call(null, p1__16738_SHARP_)),v);
}),coll);
});
viz.core.read_text_file = (function viz$core$read_text_file(file){
var rawfile = (new XMLHttpRequest());
rawfile.open("GET",file,false);

(rawfile.onreadystatechange = (function (){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rawfile.status,(200))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rawfile.status,(0))))){
var alltext = rawfile.responseText;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alltext], 0));
} else {
return null;
}
}));

return rawfile.send();
});
viz.core.enhanced_titanic = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16739_16827 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16740_16828 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16741_16829 = true;
var _STAR_print_fn_STAR__temp_val__16742_16830 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16741_16829);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16742_16830);

try{viz.core.read_text_file("datasets/titanic-enhanced-data.txt");
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16740_16828);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16739_16827);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
viz.core.male_passengers = viz.core.query("male",(function (p1__16743_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16743_SHARP_,"Sex");
}),viz.core.enhanced_titanic);
viz.core.female_passengers = viz.core.query("female",(function (p1__16744_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16744_SHARP_,"Sex");
}),viz.core.enhanced_titanic);
viz.core.read_n_STAR_ = (function viz$core$read_n_STAR_(n){
if(cljs.core.int_QMARK_(n)){
return n;
} else {
if(cljs.core.float_QMARK_(n)){
return n;
} else {
if(cljs.core.double_QMARK_(n)){
return n;
} else {
if(typeof n === 'string'){
if(cljs.core.truth_((function (){var G__16745 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(n);
return (viz.core.read_n_STAR_.cljs$core$IFn$_invoke$arity$1 ? viz.core.read_n_STAR_.cljs$core$IFn$_invoke$arity$1(G__16745) : viz.core.read_n_STAR_.call(null, G__16745));
})())){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(n);
} else {
return n;
}
} else {
return null;
}
}
}
}
});
viz.core.get_n = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(viz.core.read_n_STAR_,cljs.core.get);
viz.core.query_data = (function viz$core$query_data(var_args){
var G__16747 = arguments.length;
switch (G__16747) {
case 2:
return viz.core.query_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return viz.core.query_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(viz.core.query_data.cljs$core$IFn$_invoke$arity$2 = (function (p__16748,coll){
var vec__16749 = p__16748;
var seq__16750 = cljs.core.seq(vec__16749);
var first__16751 = cljs.core.first(seq__16750);
var seq__16750__$1 = cljs.core.next(seq__16750);
var query = first__16751;
var queries = seq__16750__$1;
if(cljs.core.truth_(query)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(query,viz.core.query_data.cljs$core$IFn$_invoke$arity$2(queries,coll));
} else {
return coll;
}
}));

(viz.core.query_data.cljs$core$IFn$_invoke$arity$3 = (function (query,coll,do_after){
var G__16752 = viz.core.query_data.cljs$core$IFn$_invoke$arity$2(query,coll);
return (do_after.cljs$core$IFn$_invoke$arity$1 ? do_after.cljs$core$IFn$_invoke$arity$1(G__16752) : do_after.call(null, G__16752));
}));

(viz.core.query_data.cljs$lang$maxFixedArity = 3);

viz.core.survived_count_by_sex = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar","Survivor count by sex","Sex","Survivors",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["female","male"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter)(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(viz.core.read_n_STAR_,(function (p1__16753_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16753_SHARP_,"Survived");
})),viz.core.female_passengers)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter)(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(viz.core.read_n_STAR_,(function (p1__16754_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16754_SHARP_,"Survived");
})),viz.core.male_passengers))], null)], null);
viz.core.survival_rate_of_passengers_per_family_members_on_board = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"line",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(null,viz.core.enhanced_titanic,(function (data){
var by_fam = cljs.core.group_by((function (p1__16755_SHARP_){
return (viz.core.get_n(p1__16755_SHARP_,"Parch") + viz.core.get_n(p1__16755_SHARP_,"SibSp"));
}),data);
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,by_fam);
return (function (per){
var title = "Survival rate of passengers per family members on board";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Family members","Survival rate",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,per),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,per)], null);
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (vc,p__16758){
var vec__16759 = p__16758;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16759,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16759,(1),null);
var surv_p = viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16756_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16756_SHARP_,"Survived"));
})], null),v,(function (p1__16757_SHARP_){
return ((100) * (cljs.core.count(p1__16757_SHARP_) / cljs.core.count(v)));
}));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,surv_p], null));
}),cljs.core.PersistentVector.EMPTY,sorted));
})));
viz.core.percent_of_total_survived_by_family_members = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"line",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16762_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16762_SHARP_,"Survived"));
})], null),viz.core.enhanced_titanic,(function (data){
var by_fam = cljs.core.group_by((function (p1__16763_SHARP_){
return (viz.core.get_n(p1__16763_SHARP_,"Parch") + viz.core.get_n(p1__16763_SHARP_,"SibSp"));
}),data);
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,by_fam);
return (function (per){
var title = "Percent of total survived by family members";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Family mem.","% Total survived",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,per),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,per)], null);
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (vc,p__16764){
var vec__16765 = p__16764;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(1),null);
var percent = ((100) * (cljs.core.count(v) / cljs.core.count(data)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,percent], null));
}),cljs.core.PersistentVector.EMPTY,sorted));
})));
viz.core.total__PERCENT__of_survivors_by_parch = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"bar",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16768_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16768_SHARP_,"Survived"));
})], null),viz.core.enhanced_titanic,(function (data){
var by_parch = cljs.core.group_by((function (p1__16769_SHARP_){
return viz.core.get_n(p1__16769_SHARP_,"Parch");
}),data);
var sort_parch = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,by_parch);
return (function (parch_per){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total % of survivors by Parch","Parch Number","Survivors (%)",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,parch_per),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,parch_per)], null);
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__16770){
var vec__16771 = p__16770;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16771,(1),null);
var percent = ((100) * (cljs.core.count(v) / cljs.core.count(data)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,percent], null));
}),cljs.core.PersistentVector.EMPTY,sort_parch));
})));
viz.core.total__PERCENT__of_survivors_by_sibsp = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"bar",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16774_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16774_SHARP_,"Survived"));
})], null),viz.core.enhanced_titanic,(function (data){
var by_sibsp = cljs.core.group_by((function (p1__16775_SHARP_){
return viz.core.get_n(p1__16775_SHARP_,"SibSp");
}),data);
var sort_sibsp = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,by_sibsp);
return (function (sibsp_per){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total % of survivors by SibSp","SibSp count","Survivors (%)",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,sibsp_per),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,sibsp_per)], null);
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__16776){
var vec__16777 = p__16776;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777,(1),null);
var percent = ((100) * (cljs.core.count(v) / cljs.core.count(data)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,percent], null));
}),cljs.core.PersistentVector.EMPTY,sort_sibsp));
})));
viz.core.percent_of_passengers_per_family_members_on_board = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"bar",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(null,viz.core.enhanced_titanic,(function (data){
var grouped = cljs.core.group_by((function (p1__16780_SHARP_){
return (viz.core.get_n(p1__16780_SHARP_,"Parch") + (viz.core.get_n(p1__16780_SHARP_,"SibSp")));
}),data);
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,grouped);
return (function (per){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Percent of passengers per family members on board","Family mems. board","% pass.",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,per),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,per)], null);
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__16781){
var vec__16782 = p__16781;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16782,(1),null);
var percent = ((100) * (cljs.core.count(v) / cljs.core.count(data)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,percent], null));
}),cljs.core.PersistentVector.EMPTY,sorted));
})));
viz.core.most_common_ages_amongst_survivors_m = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"bar",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16785_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16785_SHARP_,"Survived"));
})], null),viz.core.male_passengers,(function (data){
var age = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.int$,cljs.reader.read_string,(function (p1__16786_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16786_SHARP_,"Age");
})),data);
var group = cljs.core.group_by(cljs.core.identity,age);
var size_age = cljs.core.count(age);
var xs = cljs.core.keys(group);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16787_SHARP_){
return ((100) * (cljs.core.count(p1__16787_SHARP_) / size_age));
}),cljs.core.vals(group));
var title = "Most common ages amongst the male survivors of the titanic";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Ages","Survivors",xs,ys], null);
})));
viz.core.survivors_per_pclass_m = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"bar",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16788_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16788_SHARP_,"Survived"));
})], null),viz.core.male_passengers,(function (data){
var pclass = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16789_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16789_SHARP_,"Pclass");
}),data);
var group = cljs.core.group_by(cljs.core.identity,pclass);
var size_pclass = cljs.core.count(pclass);
var xs = cljs.core.keys(group);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16790_SHARP_){
return ((100) * (cljs.core.count(p1__16790_SHARP_) / size_pclass));
}),cljs.core.vals(group));
var title = "Survivors per Pclass";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Pclass","Survivors",xs,ys], null);
})));
viz.core.survival_rate_per_port = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"bar",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16791_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16791_SHARP_,"Survived"));
})], null),viz.core.male_passengers,(function (data){
var embarked = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16792_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16792_SHARP_,"Embarked");
}),data);
var group = cljs.core.group_by(cljs.core.identity,embarked);
var size_embarked = cljs.core.count(embarked);
var xs = cljs.core.keys(group);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16793_SHARP_){
return ((100) * (cljs.core.count(p1__16793_SHARP_) / size_embarked));
}),cljs.core.vals(group));
var title = "Survival rate per port Embarked";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Port","Survival (%)",xs,ys], null);
})));
viz.core._PERCENT__of_survivors_by_family_number_m = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"scatter",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16794_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16794_SHARP_,"Survived"));
})], null),viz.core.male_passengers,(function (data){
var family = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16795_SHARP_){
return (viz.core.get_n(p1__16795_SHARP_,"Parch") + viz.core.get_n(p1__16795_SHARP_,"SibSp"));
}),data);
var group = cljs.core.group_by(cljs.core.identity,family);
var size_fam = cljs.core.count(family);
var xs = cljs.core.keys(group);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16796_SHARP_){
return ((100) * (cljs.core.count(p1__16796_SHARP_) / size_fam));
}),cljs.core.vals(group));
var title = "Distribution of % of total survived by family number";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Family number","Percent surv.",xs,ys], null);
})));
viz.core.survival_rate_per_age_f = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"line",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16797_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16797_SHARP_,"Survived"));
})], null),viz.core.female_passengers,(function (data){
var age = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.int$,cljs.reader.read_string,(function (p1__16798_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16798_SHARP_,"Age");
})),data);
var group = cljs.core.group_by(cljs.core.identity,age);
var size_age = cljs.core.count(age);
var xs = cljs.core.keys(group);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16799_SHARP_){
return ((100) * (cljs.core.count(p1__16799_SHARP_) / size_age));
}),cljs.core.vals(group));
var title = "Survival rate per age";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Age","Surv. (%)",xs,ys], null);
})));
viz.core.survival_rate_per_port_embarked_f = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"bar",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16800_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16800_SHARP_,"Survived"));
})], null),viz.core.female_passengers,(function (data){
var embarked = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16801_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16801_SHARP_,"Embarked");
}),data);
var group = cljs.core.group_by(cljs.core.identity,embarked);
var size_embarked = cljs.core.count(embarked);
var xs = cljs.core.keys(group);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16802_SHARP_){
return ((100) * (cljs.core.count(p1__16802_SHARP_) / size_embarked));
}),cljs.core.vals(group));
var title = "Survival rate per port embarked";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Port embarked","Surv. rate",xs,ys], null);
})));
viz.core.survival_per_family_members_on_board_f = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"line",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16803_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16803_SHARP_,"Survived"));
})], null),viz.core.female_passengers,(function (data){
var family = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16804_SHARP_){
return (viz.core.get_n(p1__16804_SHARP_,"Parch") + viz.core.get_n(p1__16804_SHARP_,"SibSp"));
}),data);
var group = cljs.core.group_by(cljs.core.identity,family);
var size_family = cljs.core.count(family);
var xs = cljs.core.keys(group);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16805_SHARP_){
return ((100) * (cljs.core.count(p1__16805_SHARP_) / size_family));
}),cljs.core.vals(group));
var title = "% of survival per family members on board (female)";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Members on board","Surv.",xs,ys], null);
})));
viz.core.survival__PERCENT__per_pclass_f = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,"bar",viz.core.query_data.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__16806_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),viz.core.get_n(p1__16806_SHARP_,"Survived"));
})], null),viz.core.female_passengers,(function (data){
var pclass = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16807_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16807_SHARP_,"Pclass");
}),data);
var group = cljs.core.group_by(cljs.core.identity,pclass);
var size_pclass = cljs.core.count(pclass);
var xs = cljs.core.keys(group);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16808_SHARP_){
return ((100) * (cljs.core.count(p1__16808_SHARP_) / size_pclass));
}),cljs.core.vals(group));
var title = "Female passengers per Pclass (Survival %)";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,"Pclass","Survival",xs,ys], null);
})));
viz.core.change_if = (function viz$core$change_if(value,fn){
var v = value.target.value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)){
return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null, ));
} else {
return (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(v) : fn.call(null, v));
}
});
viz.core.plot_new_v = (function viz$core$plot_new_v(kind,title,xaxes,yaxes,xs,ys,index){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var context = document.getElementById(["a-plot",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')).getContext("2d");
var plot_template = (function (data){
return (new Chart(context,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),kind,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),false], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xAxes","xAxes",-143900543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scaleLabel","scaleLabel",-1624318409),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"labelString","labelString",130202187),xaxes], null)], null)], null),new cljs.core.Keyword(null,"yAxes","yAxes",1991590889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ticks","ticks",-406190313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beginAtZero","beginAtZero",-291981386),true], null),new cljs.core.Keyword(null,"scaleLabel","scaleLabel",-1624318409),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"labelString","labelString",130202187),yaxes], null)], null)], null)], null)], null)], null))));
});
var for_bar = (function (data_kword_v){
var size = cljs.core.count(ys);
var backcolors = cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.cycle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","green","black"], null)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),backcolors,new cljs.core.Keyword(null,"data","data",-232669377),data_kword_v], null)], null);
});
var G__16809 = kind;
switch (G__16809) {
case "bar":
return plot_template(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),xs,new cljs.core.Keyword(null,"datasets","datasets",1896364419),for_bar(ys)], null));

break;
case "line":
return plot_template(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),xs,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"red",new cljs.core.Keyword(null,"data","data",-232669377),ys,new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),"red"], null)], null)], null));

break;
case "scatter":
return (new Chart(context,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),xs,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"red",new cljs.core.Keyword(null,"data","data",-232669377),ys,new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"showLine","showLine",157295694),false], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),false], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xAxes","xAxes",-143900543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scaleLabel","scaleLabel",-1624318409),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"labelString","labelString",130202187),xaxes], null)], null)], null),new cljs.core.Keyword(null,"yAxes","yAxes",1991590889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ticks","ticks",-406190313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beginAtZero","beginAtZero",-291981386),true], null),new cljs.core.Keyword(null,"scaleLabel","scaleLabel",-1624318409),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"labelString","labelString",130202187),yaxes], null)], null)], null)], null)], null)], null))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16809)].join('')));

}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["a-plot",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)], null);
})], null));
});
viz.core.do_if = (function viz$core$do_if(ATOM,fn){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ATOM,"")){
return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null, ));
} else {
return (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(ATOM) : fn.call(null, ATOM));
}
});
viz.core.make_style = (function viz$core$make_style(index){
var vec__16810 = (((index === (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(100)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null):((cljs.core.odd_QMARK_(index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),((index - (1)) * (300))], null):((cljs.core.even_QMARK_(index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(index * (300))], null):null))));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16810,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16810,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null);
});
if((typeof viz !== 'undefined') && (typeof viz.core !== 'undefined') && (typeof viz.core.plots !== 'undefined')){
} else {
viz.core.plots = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof viz !== 'undefined') && (typeof viz.core !== 'undefined') && (typeof viz.core.p_c_states !== 'undefined')){
} else {
viz.core.p_c_states = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
viz.core.dis_vc = (function viz$core$dis_vc(vc,index){
var updated = cljs.core.update.cljs$core$IFn$_invoke$arity$3(vc,index,cljs.core.constantly(new cljs.core.Keyword(null,"nil","nil",99600501)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16814_SHARP_,p2__16813_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__16813_SHARP_,new cljs.core.Keyword(null,"nil","nil",99600501))){
return p1__16814_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16814_SHARP_,p2__16813_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,updated);
});
viz.core.clear = (function viz$core$clear(this$,index){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(viz.core.plots,viz.core.dis_vc,index);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(viz.core.p_c_states,(function (states){
var veced = cljs.core.vec(states);
var remd = viz.core.dis_vc(veced,index);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(remd));
var new_thisses = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16815_SHARP_){
return ["plot-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16815_SHARP_)].join('');
}),idxs);
return cljs.core.zipmap(new_thisses,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,remd));
}));
});
viz.core.plot_data = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(13),(6),(3),(12),(2),(11),(9),(5),(10),(8)],[viz.core.survived_count_by_sex,viz.core.survivors_per_pclass_m,viz.core.survival_rate_of_passengers_per_family_members_on_board,viz.core.total__PERCENT__of_survivors_by_sibsp,viz.core.survival__PERCENT__per_pclass_f,viz.core.most_common_ages_amongst_survivors_m,viz.core.total__PERCENT__of_survivors_by_parch,viz.core.survival_per_family_members_on_board_f,viz.core.percent_of_total_survived_by_family_members,viz.core.survival_rate_per_port_embarked_f,viz.core._PERCENT__of_survivors_by_family_number_m,viz.core.percent_of_passengers_per_family_members_on_board,viz.core.survival_rate_per_age_f,viz.core.survival_rate_per_port]);
viz.core.indexi_key = (function viz$core$indexi_key(SEQ){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (element){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
if(cljs.core.map_QMARK_(item)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
} else {
return item;
}
}),element);
}),SEQ);
});
viz.core.make_it = (function viz$core$make_it(this$,value,callback,plot_if,index){
var style = viz.core.make_style(index);
var get_title = new cljs.core.PersistentArrayMap(null, 3, ["enhanced-titanic","all passengers","male","male passengers","female","female passengers"], null);
var template = (function() { 
var G__16833__delegate = function (SEQ){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["plot-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),(get_title.cljs$core$IFn$_invoke$arity$1 ? get_title.cljs$core$IFn$_invoke$arity$1(value) : get_title.call(null, value))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["select-cont-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(viz.core.p_c_states),this$),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16816_SHARP_){
return viz.core.change_if(p1__16816_SHARP_,callback);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),viz.core.indexi_key(SEQ)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return viz.core.clear(this$,index);
})], null),"X"], null),(function (){var G__16817 = cljs.core.deref(viz.core.p_c_states);
return (plot_if.cljs$core$IFn$_invoke$arity$1 ? plot_if.cljs$core$IFn$_invoke$arity$1(G__16817) : plot_if.call(null, G__16817));
})()], null);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
};
var G__16833 = function (var_args){
var SEQ = null;
if (arguments.length > 0) {
var G__16834__i = 0, G__16834__a = new Array(arguments.length -  0);
while (G__16834__i < G__16834__a.length) {G__16834__a[G__16834__i] = arguments[G__16834__i + 0]; ++G__16834__i;}
  SEQ = new cljs.core.IndexedSeq(G__16834__a,0,null);
} 
return G__16833__delegate.call(this,SEQ);};
G__16833.cljs$lang$maxFixedArity = 0;
G__16833.cljs$lang$applyTo = (function (arglist__16835){
var SEQ = cljs.core.seq(arglist__16835);
return G__16833__delegate(SEQ);
});
G__16833.cljs$core$IFn$_invoke$arity$variadic = G__16833__delegate;
return G__16833;
})()
;
var G__16818 = value;
switch (G__16818) {
case "enhanced-titanic":
return template(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"NIL"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null),"Survival count (Sex)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null),"Survival % passengers (family)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(2)], null),"% total survived (family)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(3)], null),"% survivors by Parch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(4)], null),"% survivors by SibSp"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5)], null),"% passengers by family num."], null));

break;
case "male":
return template(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"NIL"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(6)], null),"Most common ages (male surv.)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(7)], null),"Survivors(%) per Pclass"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(8)], null),"Survival rate per port"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(9)], null),"% survival by family num."], null));

break;
case "female":
return template(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"NIL"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10)], null),"Survival % per Age"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(11)], null),"% per port Embarked (%)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(12)], null),"Survival % by family num."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(13)], null),"Rate of survival by pclass"], null));

break;
default:
return null;

}
});
viz.core.update_if = (function viz$core$update_if(index){
var this$ = ["plot-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('');
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(viz.core.p_c_states),this$))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz.core.p_c_states,cljs.core.assoc,this$,"");
}
});
viz.core.create_plot = (function viz$core$create_plot(new_val,size){
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$1(size);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (index){
var callback = (function() {
var G__16837 = null;
var G__16837__0 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz.core.p_c_states,cljs.core.assoc,["plot-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),"");
});
var G__16837__1 = (function (new_v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz.core.p_c_states,cljs.core.assoc,["plot-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new_v);
});
G__16837 = function(new_v){
switch(arguments.length){
case 0:
return G__16837__0.call(this);
case 1:
return G__16837__1.call(this,new_v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16837.cljs$core$IFn$_invoke$arity$0 = G__16837__0;
G__16837.cljs$core$IFn$_invoke$arity$1 = G__16837__1;
return G__16837;
})()
;
var plot_if = (function (states){
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(states),index);
return viz.core.do_if(state,(function() {
var G__16838 = null;
var G__16838__0 = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
var G__16838__1 = (function (state__$1){
var vec__16819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(viz.core.plot_data,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(state__$1));
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(1),null);
var xaxes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(2),null);
var yaxes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(3),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(4),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(5),null);
var all = vec__16819;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),title], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [viz.core.plot_new_v,kind,title,xaxes,yaxes,xs,ys,index], null)], null);
});
G__16838 = function(state__$1){
switch(arguments.length){
case 0:
return G__16838__0.call(this);
case 1:
return G__16838__1.call(this,state__$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16838.cljs$core$IFn$_invoke$arity$0 = G__16838__0;
G__16838.cljs$core$IFn$_invoke$arity$1 = G__16838__1;
return G__16838;
})()
);
});
viz.core.update_if(index);

return (new cljs.core.List(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [viz.core.make_it,["plot-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),(function (){var fexpr__16822 = cljs.core.deref(viz.core.plots);
return (fexpr__16822.cljs$core$IFn$_invoke$arity$1 ? fexpr__16822.cljs$core$IFn$_invoke$arity$1(index) : fexpr__16822.call(null, index));
})(),callback,plot_if,index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)),null,(1),null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idxs], 0));
});
viz.core.initialize = (function viz$core$initialize(var_args){
var G__16826 = arguments.length;
switch (G__16826) {
case 0:
return viz.core.initialize.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return viz.core.initialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(viz.core.initialize.cljs$core$IFn$_invoke$arity$0 = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(viz.core.p_c_states,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(viz.core.plots,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"passenger-list"], null),"Choose a passenger list"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16823_SHARP_){
return viz.core.change_if(p1__16823_SHARP_,viz.core.initialize);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"None"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"enhanced-titanic"], null),"All passengers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"male"], null),"male passengers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"female"], null),"female passengers"], null)], null)], null);
})], null),document.getElementById("application"));
}));

(viz.core.initialize.cljs$core$IFn$_invoke$arity$1 = (function (new_val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(viz.core.plots,cljs.core.conj,new_val);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"passenger-list"], null),"Choose a passenger list"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16824_SHARP_){
return viz.core.change_if(p1__16824_SHARP_,viz.core.initialize);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"None"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"enhanced-titanic"], null),"All passengers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"male"], null),"male passengers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"female"], null),"female passengers"], null)], null),viz.core.create_plot(new_val,cljs.core.count(cljs.core.deref(viz.core.plots)))], null);
})], null),document.getElementById("application"));
}));

(viz.core.initialize.cljs$lang$maxFixedArity = 1);

viz.core.init = (function viz$core$init(){
return viz.core.initialize.cljs$core$IFn$_invoke$arity$0();
});

//# sourceMappingURL=viz.core.js.map
