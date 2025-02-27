
shadow.cljs.devtools.client.env.module_loaded('main');

try { viz.core.init(); } catch (e) { console.error("An error occurred when calling (viz.core/init)"); console.error(e); }