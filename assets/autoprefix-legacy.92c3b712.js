System.register([],(function(e){"use strict";return{execute:function(){function t(e){return e.replace(/-\w/g,(function(e){return e[1].toUpperCase()}))}e("a",(function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"js",s=t(e),c=document.body.style;if(s in c)n={js:s,css:e};else for(var i=s.replace(/^\w/,(function(e){return e.toUpperCase()})),o=["ms","Moz","webkit"],u=o.length;u--;){var a=o[u],f=a+i;if(f in c){n={js:f,css:"-".concat(a,"-")+e};break}}return n&&n[r]}))}}}));
