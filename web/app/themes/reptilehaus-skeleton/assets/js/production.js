/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
;/*!
 * Masonry PACKAGED v4.2.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});;/**!
 * MixItUp v3.2.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build ea75207d-1036-4d1b-af10-9800590d2906
 *
 * @copyright Copyright 2014-2017 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(t){"use strict";var e=null,n=null;!function(){var e=["webkit","moz","o","ms"],n=t.document.createElement("div"),a=-1;for(a=0;a<e.length&&!t.requestAnimationFrame;a++)t.requestAnimationFrame=t[e[a]+"RequestAnimationFrame"];"undefined"==typeof n.nextElementSibling&&Object.defineProperty(t.Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t;){if(1===t.nodeType)return t;t=t.nextSibling}return null}}),function(t){t.matches=t.matches||t.machesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector||function(t){return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t),this)>-1}}(t.Element.prototype),Object.keys||(Object.keys=function(){var t=Object.prototype.hasOwnProperty,e=!1,n=[],a=-1;return e=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=n.length,function(i){var o=[],r="",s=-1;if("object"!=typeof i&&("function"!=typeof i||null===i))throw new TypeError("Object.keys called on non-object");for(r in i)t.call(i,r)&&o.push(r);if(e)for(s=0;s<a;s++)t.call(i,n[s])&&o.push(n[s]);return o}}()),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),"function"!=typeof Object.create&&(Object.create=function(t){var e=function(){};return function(n,a){if(n!==Object(n)&&null!==n)throw TypeError("Argument must be an object, or null");e.prototype=n||{};var i=new e;return e.prototype=null,a!==t&&Object.defineProperties(i,a),null===n&&(i.__proto__=null),i}}()),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e,n,a,i;if(null===this)throw new TypeError;if(a=Object(this),i=a.length>>>0,0===i)return-1;if(e=0,arguments.length>1&&(e=Number(arguments[1]),e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e)))),e>=i)return-1;for(n=e>=0?e:Math.max(i-Math.abs(e),0);n<i;n++)if(n in a&&a[n]===t)return n;return-1}),Function.prototype.bind||(Function.prototype.bind=function(t){var e,n,a,i;if("function"!=typeof this)throw new TypeError;return e=Array.prototype.slice.call(arguments,1),n=this,a=function(){},i=function(){return n.apply(this instanceof a?this:t,e.concat(Array.prototype.slice.call(arguments)))},this.prototype&&(a.prototype=this.prototype),i.prototype=new a,i}),t.Element.prototype.dispatchEvent||(t.Element.prototype.dispatchEvent=function(t){try{return this.fireEvent("on"+t.type,t)}catch(e){}})}(),e=function(a,i,o){var r=null,s=!1,l=null,c=null,u=null,f=null,h=[],d="",m=[],g=-1;if(u=o||t.document,(s=arguments[3])&&(s="boolean"==typeof s),"string"==typeof a)m=u.querySelectorAll(a);else if(a&&"object"==typeof a&&n.isElement(a,u))m=[a];else{if(!a||"object"!=typeof a||!a.length)throw new Error(e.messages.errorFactoryInvalidContainer());m=a}if(m.length<1)throw new Error(e.messages.errorFactoryContainerNotFound());for(g=0;(r=m[g])&&(!(g>0)||s);g++)r.id?d=r.id:(d="MixItUp"+n.randomHex(),r.id=d),e.instances[d]instanceof e.Mixer?(l=e.instances[d],(!i||i&&i.debug&&i.debug.showWarnings!==!1)&&console.warn(e.messages.warningFactoryPreexistingInstance())):(l=new e.Mixer,l.attach(r,u,d,i),e.instances[d]=l),c=new e.Facade(l),i&&i.debug&&i.debug.enable?h.push(l):h.push(c);return f=s?new e.Collection(h):h[0]},e.use=function(t){e.Base.prototype.callActions.call(e,"beforeUse",arguments),"function"==typeof t&&"mixitup-extension"===t.TYPE?"undefined"==typeof e.extensions[t.NAME]&&(t(e),e.extensions[t.NAME]=t):t.fn&&t.fn.jquery&&(e.libraries.$=t),e.Base.prototype.callActions.call(e,"afterUse",arguments)},e.instances={},e.extensions={},e.libraries={},n={hasClass:function(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},addClass:function(t,e){this.hasClass(t,e)||(t.className+=t.className?" "+e:e)},removeClass:function(t,e){if(this.hasClass(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ").trim()}},extend:function(t,e,n,a){var i=[],o="",r=-1;n=n||!1,a=a||!1;try{if(Array.isArray(e))for(r=0;r<e.length;r++)i.push(r);else e&&(i=Object.keys(e));for(r=0;r<i.length;r++)o=i[r],!n||"object"!=typeof e[o]||this.isElement(e[o])?t[o]=e[o]:Array.isArray(e[o])?(t[o]||(t[o]=[]),this.extend(t[o],e[o],n,a)):(t[o]||(t[o]={}),this.extend(t[o],e[o],n,a))}catch(s){if(!a)throw s;this.handleExtendError(s,t)}return t},handleExtendError:function(t,n){var a=/property "?(\w*)"?[,:] object/i,i=null,o="",r="",s="",l="",c="",u=-1,f=-1;if(t instanceof TypeError&&(i=a.exec(t.message))){o=i[1];for(c in n){for(f=0;f<o.length&&o.charAt(f)===c.charAt(f);)f++;f>u&&(u=f,l=c)}throw u>1&&(s=e.messages.errorConfigInvalidPropertySuggestion({probableMatch:l})),r=e.messages.errorConfigInvalidProperty({erroneous:o,suggestion:s}),new TypeError(r)}throw t},template:function(t){for(var e=/\${([\w]*)}/g,n={},a=null;a=e.exec(t);)n[a[1]]=new RegExp("\\${"+a[1]+"}","g");return function(e){var a="",i=t;e=e||{};for(a in n)i=i.replace(n[a],"undefined"!=typeof e[a]?e[a]:"");return i}},on:function(e,n,a,i){e&&(e.addEventListener?e.addEventListener(n,a,i):e.attachEvent&&(e["e"+n+a]=a,e[n+a]=function(){e["e"+n+a](t.event)},e.attachEvent("on"+n,e[n+a])))},off:function(t,e,n){t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent&&(t.detachEvent("on"+e,t[e+n]),t[e+n]=null))},getCustomEvent:function(e,n,a){var i=null;return a=a||t.document,"function"==typeof t.CustomEvent?i=new t.CustomEvent(e,{detail:n,bubbles:!0,cancelable:!0}):"function"==typeof a.createEvent?(i=a.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,n)):(i=a.createEventObject(),i.type=e,i.returnValue=!1,i.cancelBubble=!1,i.detail=n),i},getOriginalEvent:function(t){return t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t},index:function(t,e){for(var n=0;null!==(t=t.previousElementSibling);)e&&!t.matches(e)||++n;return n},camelCase:function(t){return t.toLowerCase().replace(/([_-][a-z])/g,function(t){return t.toUpperCase().replace(/[_-]/,"")})},pascalCase:function(t){return(t=this.camelCase(t)).charAt(0).toUpperCase()+t.slice(1)},dashCase:function(t){return t.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()},isElement:function(e,n){return n=n||t.document,!!(t.HTMLElement&&e instanceof t.HTMLElement)||(!!(n.defaultView&&n.defaultView.HTMLElement&&e instanceof n.defaultView.HTMLElement)||null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)},createElement:function(e,n){var a=null,i=null;for(n=n||t.document,a=n.createDocumentFragment(),i=n.createElement("div"),i.innerHTML=e;i.firstChild;)a.appendChild(i.firstChild);return a},removeWhitespace:function(t){for(var e;t&&"#text"===t.nodeName;)e=t,t=t.previousSibling,e.parentElement&&e.parentElement.removeChild(e)},isEqualArray:function(t,e){var n=t.length;if(n!==e.length)return!1;for(;n--;)if(t[n]!==e[n])return!1;return!0},deepEquals:function(t,e){var n;if("object"==typeof t&&t&&"object"==typeof e&&e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(n in t)if(!e.hasOwnProperty(n)||!this.deepEquals(t[n],e[n]))return!1}else if(t!==e)return!1;return!0},arrayShuffle:function(t){for(var e=t.slice(),n=e.length,a=n,i=-1,o=[];a--;)i=~~(Math.random()*n),o=e[a],e[a]=e[i],e[i]=o;return e},arrayFromList:function(t){var e,n;try{return Array.prototype.slice.call(t)}catch(a){for(e=[],n=0;n<t.length;n++)e.push(t[n]);return e}},debounce:function(t,e,n){var a;return function(){var i=this,o=arguments,r=n&&!a,s=null;s=function(){a=null,n||t.apply(i,o)},clearTimeout(a),a=setTimeout(s,e),r&&t.apply(i,o)}},position:function(t){for(var e=0,n=0,a=t;t;)e-=t.scrollLeft,n-=t.scrollTop,t===a&&(e+=t.offsetLeft,n+=t.offsetTop,a=t.offsetParent),t=t.parentElement;return{x:e,y:n}},getHypotenuse:function(t,e){var n=t.x-e.x,a=t.y-e.y;return n=n<0?n*-1:n,a=a<0?a*-1:a,Math.sqrt(Math.pow(n,2)+Math.pow(a,2))},getIntersectionRatio:function(t,e){var n=t.width*t.height,a=-1,i=-1,o=-1,r=-1;return a=Math.max(0,Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left)),i=Math.max(0,Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top)),o=i*a,r=o/n},closestParent:function(e,n,a,i){var o=e.parentNode;if(i=i||t.document,a&&e.matches(n))return e;for(;o&&o!=i.body;){if(o.matches&&o.matches(n))return o;if(!o.parentNode)return null;o=o.parentNode}return null},children:function(e,n,a){var i=[],o="";return a=a||t.doc,e&&(e.id||(o="Temp"+this.randomHexKey(),e.id=o),i=a.querySelectorAll("#"+e.id+" > "+n),o&&e.removeAttribute("id")),i},clean:function(t){var e=[],n=-1;for(n=0;n<t.length;n++)""!==t[n]&&e.push(t[n]);return e},defer:function(n){var a=null,i=null,o=null;return i=new this.Deferred,e.features.has.promises?i.promise=new Promise(function(t,e){i.resolve=t,i.reject=e}):(o=t.jQuery||n.$)&&"function"==typeof o.Deferred?(a=o.Deferred(),i.promise=a.promise(),i.resolve=a.resolve,i.reject=a.reject):t.console&&console.warn(e.messages.warningNoPromiseImplementation()),i},all:function(n,a){var i=null;return e.features.has.promises?Promise.all(n):(i=t.jQuery||a.$)&&"function"==typeof i.when?i.when.apply(i,n).done(function(){return arguments}):(t.console&&console.warn(e.messages.warningNoPromiseImplementation()),[])},getPrefix:function(t,e,a){var i=-1,o="";if(n.dashCase(e)in t.style)return"";for(i=0;o=a[i];i++)if(o+e in t.style)return o.toLowerCase();return"unsupported"},randomHex:function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()},getDocumentState:function(e){return e="object"==typeof e.body?e:t.document,{scrollTop:t.pageYOffset,scrollLeft:t.pageXOffset,docHeight:e.documentElement.scrollHeight,docWidth:e.documentElement.scrollWidth,viewportHeight:e.documentElement.clientHeight,viewportWidth:e.documentElement.clientWidth}},bind:function(t,e){return function(){return e.apply(t,arguments)}},isVisible:function(e){var n=null;return!!e.offsetParent||(n=t.getComputedStyle(e),"fixed"===n.position&&"hidden"!==n.visibility&&"0"!==n.opacity)},seal:function(t){"function"==typeof Object.seal&&Object.seal(t)},freeze:function(t){"function"==typeof Object.freeze&&Object.freeze(t)},compareVersions:function(t,e){var n=t.split("."),a=e.split("."),i=-1,o=-1,r=-1;for(r=0;r<n.length;r++){if(i=parseInt(n[r].replace(/[^\d.]/g,"")),o=parseInt(a[r].replace(/[^\d.]/g,"")||0),o<i)return!1;if(o>i)return!0}return!0},Deferred:function(){this.promise=null,this.resolve=null,this.reject=null,this.id=n.randomHex()},isEmptyObject:function(t){var e="";if("function"==typeof Object.keys)return 0===Object.keys(t).length;for(e in t)if(t.hasOwnProperty(e))return!1;return!0},getClassname:function(t,e,n){var a="";return a+=t.block,a.length&&(a+=t.delineatorElement),a+=t["element"+this.pascalCase(e)],n?(a.length&&(a+=t.delineatorModifier),a+=n):a},getProperty:function(t,e){var n=e.split("."),a=null,i="",o=0;if(!e)return t;for(a=function(t){return t?t[i]:null};o<n.length;)i=n[o],t=a(t),o++;return"undefined"!=typeof t?t:null}},e.h=n,e.Base=function(){},e.Base.prototype={constructor:e.Base,callActions:function(t,e){var a=this,i=a.constructor.actions[t],o="";if(i&&!n.isEmptyObject(i))for(o in i)i[o].apply(a,e)},callFilters:function(t,e,a){var i=this,o=i.constructor.filters[t],r=e,s="";if(!o||n.isEmptyObject(o))return r;a=a||[];for(s in o)a=n.arrayFromList(a),a.unshift(r),r=o[s].apply(i,a);return r}},e.BaseStatic=function(){this.actions={},this.filters={},this.extend=function(t){n.extend(this.prototype,t)},this.registerAction=function(t,e,n){(this.actions[t]=this.actions[t]||{})[e]=n},this.registerFilter=function(t,e,n){(this.filters[t]=this.filters[t]||{})[e]=n}},e.Features=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.boxSizingPrefix="",this.transformPrefix="",this.transitionPrefix="",this.boxSizingPrefix="",this.transformProp="",this.transformRule="",this.transitionProp="",this.perspectiveProp="",this.perspectiveOriginProp="",this.has=new e.Has,this.canary=null,this.BOX_SIZING_PROP="boxSizing",this.TRANSITION_PROP="transition",this.TRANSFORM_PROP="transform",this.PERSPECTIVE_PROP="perspective",this.PERSPECTIVE_ORIGIN_PROP="perspectiveOrigin",this.VENDORS=["Webkit","moz","O","ms"],this.TWEENABLE=["opacity","width","height","marginRight","marginBottom","x","y","scale","translateX","translateY","translateZ","rotateX","rotateY","rotateZ"],this.callActions("afterConstruct")},e.BaseStatic.call(e.Features),e.Features.prototype=Object.create(e.Base.prototype),n.extend(e.Features.prototype,{constructor:e.Features,init:function(){var t=this;t.callActions("beforeInit",arguments),t.canary=document.createElement("div"),t.setPrefixes(),t.runTests(),t.callActions("beforeInit",arguments)},runTests:function(){var e=this;e.callActions("beforeRunTests",arguments),e.has.promises="function"==typeof t.Promise,e.has.transitions="unsupported"!==e.transitionPrefix,e.callActions("afterRunTests",arguments),n.freeze(e.has)},setPrefixes:function(){var t=this;t.callActions("beforeSetPrefixes",arguments),t.transitionPrefix=n.getPrefix(t.canary,"Transition",t.VENDORS),t.transformPrefix=n.getPrefix(t.canary,"Transform",t.VENDORS),t.boxSizingPrefix=n.getPrefix(t.canary,"BoxSizing",t.VENDORS),t.boxSizingProp=t.boxSizingPrefix?t.boxSizingPrefix+n.pascalCase(t.BOX_SIZING_PROP):t.BOX_SIZING_PROP,t.transitionProp=t.transitionPrefix?t.transitionPrefix+n.pascalCase(t.TRANSITION_PROP):t.TRANSITION_PROP,t.transformProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.TRANSFORM_PROP):t.TRANSFORM_PROP,t.transformRule=t.transformPrefix?"-"+t.transformPrefix+"-"+t.TRANSFORM_PROP:t.TRANSFORM_PROP,t.perspectiveProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.PERSPECTIVE_PROP):t.PERSPECTIVE_PROP,t.perspectiveOriginProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP):t.PERSPECTIVE_ORIGIN_PROP,t.callActions("afterSetPrefixes",arguments)}}),e.Has=function(){this.transitions=!1,this.promises=!1,n.seal(this)},e.features=new e.Features,e.features.init(),e.ConfigAnimation=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!0,this.effects="fade scale",this.effectsIn="",this.effectsOut="",this.duration=600,this.easing="ease",this.applyPerspective=!0,this.perspectiveDistance="3000px",this.perspectiveOrigin="50% 50%",this.queue=!0,this.queueLimit=3,this.animateResizeContainer=!0,this.animateResizeTargets=!1,this.staggerSequence=null,this.reverseOut=!1,this.nudge=!0,this.clampHeight=!0,this.clampWidth=!0,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigAnimation),e.ConfigAnimation.prototype=Object.create(e.Base.prototype),e.ConfigAnimation.prototype.constructor=e.ConfigAnimation,e.ConfigBehavior=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.liveSort=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigBehavior),e.ConfigBehavior.prototype=Object.create(e.Base.prototype),e.ConfigBehavior.prototype.constructor=e.ConfigBehavior,e.ConfigCallbacks=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.onMixStart=null,this.onMixBusy=null,this.onMixEnd=null,this.onMixFail=null,this.onMixClick=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigCallbacks),e.ConfigCallbacks.prototype=Object.create(e.Base.prototype),e.ConfigCallbacks.prototype.constructor=e.ConfigCallbacks,e.ConfigControls=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!0,this.live=!1,this.scope="global",this.toggleLogic="or",this.toggleDefault="all",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigControls),e.ConfigControls.prototype=Object.create(e.Base.prototype),e.ConfigControls.prototype.constructor=e.ConfigControls,e.ConfigClassNames=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.block="mixitup",this.elementContainer="container",this.elementFilter="control",this.elementSort="control",this.elementMultimix="control",this.elementToggle="control",this.modifierActive="active",this.modifierDisabled="disabled",this.modifierFailed="failed",this.delineatorElement="-",this.delineatorModifier="-",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigClassNames),e.ConfigClassNames.prototype=Object.create(e.Base.prototype),e.ConfigClassNames.prototype.constructor=e.ConfigClassNames,e.ConfigData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.uidKey="",this.dirtyCheck=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigData),e.ConfigData.prototype=Object.create(e.Base.prototype),e.ConfigData.prototype.constructor=e.ConfigData,e.ConfigDebug=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!1,this.showWarnings=!0,this.fauxAsync=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigDebug),e.ConfigDebug.prototype=Object.create(e.Base.prototype),e.ConfigDebug.prototype.constructor=e.ConfigDebug,e.ConfigLayout=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.allowNestedTargets=!0,this.containerClassName="",this.siblingBefore=null,this.siblingAfter=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigLayout),e.ConfigLayout.prototype=Object.create(e.Base.prototype),e.ConfigLayout.prototype.constructor=e.ConfigLayout,e.ConfigLoad=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.filter="all",this.sort="default:asc",this.dataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigLoad),e.ConfigLoad.prototype=Object.create(e.Base.prototype),e.ConfigLoad.prototype.constructor=e.ConfigLoad,e.ConfigSelectors=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.target=".mix",this.control="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigSelectors),e.ConfigSelectors.prototype=Object.create(e.Base.prototype),e.ConfigSelectors.prototype.constructor=e.ConfigSelectors,e.ConfigRender=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.target=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigRender),e.ConfigRender.prototype=Object.create(e.Base.prototype),e.ConfigRender.prototype.constructor=e.ConfigRender,e.ConfigTemplates=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigTemplates),e.ConfigTemplates.prototype=Object.create(e.Base.prototype),e.ConfigTemplates.prototype.constructor=e.ConfigTemplates,e.Config=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.animation=new e.ConfigAnimation,this.behavior=new e.ConfigBehavior,this.callbacks=new e.ConfigCallbacks,this.controls=new e.ConfigControls,this.classNames=new e.ConfigClassNames,this.data=new e.ConfigData,this.debug=new e.ConfigDebug,this.layout=new e.ConfigLayout,this.load=new e.ConfigLoad,this.selectors=new e.ConfigSelectors,this.render=new e.ConfigRender,this.templates=new e.ConfigTemplates,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Config),e.Config.prototype=Object.create(e.Base.prototype),e.Config.prototype.constructor=e.Config,e.MixerDom=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.document=null,this.body=null,this.container=null,this.parent=null,this.targets=[],this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.MixerDom),e.MixerDom.prototype=Object.create(e.Base.prototype),e.MixerDom.prototype.constructor=e.MixerDom,e.UiClassNames=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.base="",this.active="",this.disabled="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.UiClassNames),e.UiClassNames.prototype=Object.create(e.Base.prototype),e.UiClassNames.prototype.constructor=e.UiClassNames,e.CommandDataset=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.dataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandDataset),e.CommandDataset.prototype=Object.create(e.Base.prototype),e.CommandDataset.prototype.constructor=e.CommandDataset,e.CommandMultimix=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.filter=null,this.sort=null,this.insert=null,this.remove=null,this.changeLayout=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandMultimix),e.CommandMultimix.prototype=Object.create(e.Base.prototype),e.CommandMultimix.prototype.constructor=e.CommandMultimix,e.CommandFilter=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.selector="",this.collection=null,this.action="show",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandFilter),e.CommandFilter.prototype=Object.create(e.Base.prototype),e.CommandFilter.prototype.constructor=e.CommandFilter,e.CommandSort=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.sortString="",this.attribute="",this.order="asc",this.collection=null,this.next=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandSort),e.CommandSort.prototype=Object.create(e.Base.prototype),e.CommandSort.prototype.constructor=e.CommandSort,e.CommandInsert=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.index=0,this.collection=[],this.position="before",this.sibling=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandInsert),e.CommandInsert.prototype=Object.create(e.Base.prototype),e.CommandInsert.prototype.constructor=e.CommandInsert,e.CommandRemove=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.targets=[],this.collection=[],this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandRemove),e.CommandRemove.prototype=Object.create(e.Base.prototype),e.CommandRemove.prototype.constructor=e.CommandRemove,e.CommandChangeLayout=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.containerClassName="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandChangeLayout),e.CommandChangeLayout.prototype=Object.create(e.Base.prototype),e.CommandChangeLayout.prototype.constructor=e.CommandChangeLayout,e.ControlDefinition=function(t,a,i,o){e.Base.call(this),this.callActions("beforeConstruct"),this.type=t,this.selector=a,this.live=i||!1,this.parent=o||"",this.callActions("afterConstruct"),n.freeze(this),n.seal(this)},e.BaseStatic.call(e.ControlDefinition),e.ControlDefinition.prototype=Object.create(e.Base.prototype),e.ControlDefinition.prototype.constructor=e.ControlDefinition,e.controlDefinitions=[],e.controlDefinitions.push(new e.ControlDefinition("multimix","[data-filter][data-sort]")),e.controlDefinitions.push(new e.ControlDefinition("filter","[data-filter]")),e.controlDefinitions.push(new e.ControlDefinition("sort","[data-sort]")),e.controlDefinitions.push(new e.ControlDefinition("toggle","[data-toggle]")),e.Control=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.el=null,this.selector="",this.bound=[],this.pending=-1,this.type="",this.status="inactive",this.filter="",this.sort="",this.canDisable=!1,this.handler=null,this.classNames=new e.UiClassNames,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Control),e.Control.prototype=Object.create(e.Base.prototype),n.extend(e.Control.prototype,{constructor:e.Control,init:function(t,n,a){var i=this;if(this.callActions("beforeInit",arguments),i.el=t,i.type=n,i.selector=a,i.selector)i.status="live";else switch(i.canDisable="boolean"==typeof i.el.disable,i.type){case"filter":i.filter=i.el.getAttribute("data-filter");break;case"toggle":i.filter=i.el.getAttribute("data-toggle");break;case"sort":i.sort=i.el.getAttribute("data-sort");break;case"multimix":i.filter=i.el.getAttribute("data-filter"),i.sort=i.el.getAttribute("data-sort")}i.bindClick(),e.controls.push(i),this.callActions("afterInit",arguments)},isBound:function(t){var e=this,n=!1;return this.callActions("beforeIsBound",arguments),n=e.bound.indexOf(t)>-1,e.callFilters("afterIsBound",n,arguments)},addBinding:function(t){var e=this;this.callActions("beforeAddBinding",arguments),e.isBound()||e.bound.push(t),this.callActions("afterAddBinding",arguments)},removeBinding:function(t){var n=this,a=-1;this.callActions("beforeRemoveBinding",arguments),(a=n.bound.indexOf(t))>-1&&n.bound.splice(a,1),n.bound.length<1&&(n.unbindClick(),a=e.controls.indexOf(n),e.controls.splice(a,1),"active"===n.status&&n.renderStatus(n.el,"inactive")),this.callActions("afterRemoveBinding",arguments)},bindClick:function(){var t=this;this.callActions("beforeBindClick",arguments),t.handler=function(e){t.handleClick(e)},n.on(t.el,"click",t.handler),this.callActions("afterBindClick",arguments)},unbindClick:function(){var t=this;this.callActions("beforeUnbindClick",arguments),n.off(t.el,"click",t.handler),t.handler=null,this.callActions("afterUnbindClick",arguments)},handleClick:function(t){var a=this,i=null,o=null,r=!1,s=void 0,l={},c=null,u=[],f=-1;if(this.callActions("beforeHandleClick",arguments),this.pending=0,o=a.bound[0],i=a.selector?n.closestParent(t.target,o.config.selectors.control+a.selector,!0,o.dom.document):a.el,!i)return void a.callActions("afterHandleClick",arguments);switch(a.type){case"filter":l.filter=a.filter||i.getAttribute("data-filter");break;case"sort":l.sort=a.sort||i.getAttribute("data-sort");break;case"multimix":l.filter=a.filter||i.getAttribute("data-filter"),l.sort=a.sort||i.getAttribute("data-sort");break;case"toggle":l.filter=a.filter||i.getAttribute("data-toggle"),r="live"===a.status?n.hasClass(i,a.classNames.active):"active"===a.status}for(f=0;f<a.bound.length;f++)c=new e.CommandMultimix,n.extend(c,l),u.push(c);for(u=a.callFilters("commandsHandleClick",u,arguments),a.pending=a.bound.length,f=0;o=a.bound[f];f++)l=u[f],l&&(o.lastClicked||(o.lastClicked=i),e.events.fire("mixClick",o.dom.container,{state:o.state,instance:o,originalEvent:t,control:o.lastClicked},o.dom.document),"function"==typeof o.config.callbacks.onMixClick&&(s=o.config.callbacks.onMixClick.call(o.lastClicked,o.state,t,o),s===!1)||("toggle"===a.type?r?o.toggleOff(l.filter):o.toggleOn(l.filter):o.multimix(l)));this.callActions("afterHandleClick",arguments)},update:function(t,n){var a=this,i=new e.CommandMultimix;a.callActions("beforeUpdate",arguments),a.pending--,a.pending=Math.max(0,a.pending),a.pending>0||("live"===a.status?a.updateLive(t,n):(i.sort=a.sort,i.filter=a.filter,a.callFilters("actionsUpdate",i,arguments),a.parseStatusChange(a.el,t,i,n)),a.callActions("afterUpdate",arguments))},updateLive:function(t,n){var a=this,i=null,o=null,r=null,s=-1;if(a.callActions("beforeUpdateLive",arguments),a.el){for(i=a.el.querySelectorAll(a.selector),s=0;r=i[s];s++){switch(o=new e.CommandMultimix,a.type){case"filter":o.filter=r.getAttribute("data-filter");break;case"sort":o.sort=r.getAttribute("data-sort");break;case"multimix":o.filter=r.getAttribute("data-filter"),o.sort=r.getAttribute("data-sort");break;case"toggle":o.filter=r.getAttribute("data-toggle")}o=a.callFilters("actionsUpdateLive",o,arguments),a.parseStatusChange(r,t,o,n)}a.callActions("afterUpdateLive",arguments)}},parseStatusChange:function(t,e,n,a){var i=this,o="",r="",s=-1;switch(i.callActions("beforeParseStatusChange",arguments),i.type){case"filter":e.filter===n.filter?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"multimix":e.sort===n.sort&&e.filter===n.filter?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"sort":e.sort.match(/:asc/g)&&(o=e.sort.replace(/:asc/g,"")),e.sort===n.sort||o===n.sort?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"toggle":for(a.length<1&&i.renderStatus(t,"inactive"),e.filter===n.filter&&i.renderStatus(t,"active"),s=0;s<a.length;s++){if(r=a[s],r===n.filter){i.renderStatus(t,"active");break}i.renderStatus(t,"inactive")}}i.callActions("afterParseStatusChange",arguments)},renderStatus:function(t,e){var a=this;switch(a.callActions("beforeRenderStatus",arguments),e){case"active":n.addClass(t,a.classNames.active),n.removeClass(t,a.classNames.disabled),a.canDisable&&(a.el.disabled=!1);break;case"inactive":n.removeClass(t,a.classNames.active),n.removeClass(t,a.classNames.disabled),a.canDisable&&(a.el.disabled=!1);break;case"disabled":a.canDisable&&(a.el.disabled=!0),n.addClass(t,a.classNames.disabled),n.removeClass(t,a.classNames.active)}"live"!==a.status&&(a.status=e),a.callActions("afterRenderStatus",arguments)}}),e.controls=[],e.StyleData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.x=0,this.y=0,this.top=0,this.right=0,this.bottom=0,this.left=0,this.width=0,this.height=0,this.marginRight=0,this.marginBottom=0,this.opacity=0,this.scale=new e.TransformData,this.translateX=new e.TransformData,this.translateY=new e.TransformData,this.translateZ=new e.TransformData,this.rotateX=new e.TransformData,this.rotateY=new e.TransformData,this.rotateZ=new e.TransformData,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.StyleData),e.StyleData.prototype=Object.create(e.Base.prototype),e.StyleData.prototype.constructor=e.StyleData,e.TransformData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.value=0,this.unit="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TransformData),e.TransformData.prototype=Object.create(e.Base.prototype),e.TransformData.prototype.constructor=e.TransformData,e.TransformDefaults=function(){e.StyleData.apply(this),this.callActions("beforeConstruct"),this.scale.value=.01,this.scale.unit="",this.translateX.value=20,this.translateX.unit="px",this.translateY.value=20,this.translateY.unit="px",this.translateZ.value=20,this.translateZ.unit="px",this.rotateX.value=90,this.rotateX.unit="deg",this.rotateY.value=90,this.rotateY.unit="deg",this.rotateX.value=90,this.rotateX.unit="deg",this.rotateZ.value=180,this.rotateZ.unit="deg",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TransformDefaults),e.TransformDefaults.prototype=Object.create(e.StyleData.prototype),e.TransformDefaults.prototype.constructor=e.TransformDefaults,e.transformDefaults=new e.TransformDefaults,e.EventDetail=function(){this.state=null,this.futureState=null,this.instance=null,this.originalEvent=null},e.Events=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.mixStart=null,this.mixBusy=null,this.mixEnd=null,this.mixFail=null,this.mixClick=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Events),e.Events.prototype=Object.create(e.Base.prototype),e.Events.prototype.constructor=e.Events,e.Events.prototype.fire=function(t,a,i,o){var r=this,s=null,l=new e.EventDetail;if(r.callActions("beforeFire",arguments),"undefined"==typeof r[t])throw new Error('Event type "'+t+'" not found.');l.state=new e.State,n.extend(l.state,i.state),i.futureState&&(l.futureState=new e.State,n.extend(l.futureState,i.futureState)),l.instance=i.instance,i.originalEvent&&(l.originalEvent=i.originalEvent),s=n.getCustomEvent(t,l,o),r.callFilters("eventFire",s,arguments),a.dispatchEvent(s)},e.events=new e.Events,e.QueueItem=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.args=[],this.instruction=null,this.triggerElement=null,this.deferred=null,this.isToggling=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.QueueItem),e.QueueItem.prototype=Object.create(e.Base.prototype),e.QueueItem.prototype.constructor=e.QueueItem,e.Mixer=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.config=new e.Config,this.id="",this.isBusy=!1,this.isToggling=!1,this.incPadding=!0,this.controls=[],this.targets=[],this.origOrder=[],this.cache={},this.toggleArray=[],this.targetsMoved=0,this.targetsImmovable=0,this.targetsBound=0,this.targetsDone=0,this.staggerDuration=0,this.effectsIn=null,this.effectsOut=null,this.transformIn=[],this.transformOut=[],this.queue=[],this.state=null,this.lastOperation=null,
this.lastClicked=null,this.userCallback=null,this.userDeferred=null,this.dom=new e.MixerDom,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Mixer),e.Mixer.prototype=Object.create(e.Base.prototype),n.extend(e.Mixer.prototype,{constructor:e.Mixer,attach:function(a,i,o,r){var s=this,l=null,c=-1;for(s.callActions("beforeAttach",arguments),s.id=o,r&&n.extend(s.config,r,!0,!0),s.sanitizeConfig(),s.cacheDom(a,i),s.config.layout.containerClassName&&n.addClass(s.dom.container,s.config.layout.containerClassName),e.features.has.transitions||(s.config.animation.enable=!1),"undefined"==typeof t.console&&(s.config.debug.showWarnings=!1),s.config.data.uidKey&&(s.config.controls.enable=!1),s.indexTargets(),s.state=s.getInitialState(),c=0;l=s.lastOperation.toHide[c];c++)l.hide();s.config.controls.enable&&(s.initControls(),s.updateControls({filter:s.state.activeFilter,sort:s.state.activeSort}),s.buildToggleArray(null,s.state)),s.parseEffects(),s.callActions("afterAttach",arguments)},sanitizeConfig:function(){var t=this;t.callActions("beforeSanitizeConfig",arguments),t.config.controls.scope=t.config.controls.scope.toLowerCase().trim(),t.config.controls.toggleLogic=t.config.controls.toggleLogic.toLowerCase().trim(),t.config.controls.toggleDefault=t.config.controls.toggleDefault.toLowerCase().trim(),t.config.animation.effects=t.config.animation.effects.trim(),t.callActions("afterSanitizeConfig",arguments)},getInitialState:function(){var t=this,n=new e.State,a=new e.Operation;if(t.callActions("beforeGetInitialState",arguments),n.activeContainerClassName=t.config.layout.containerClassName,t.config.load.dataset){if(!t.config.data.uidKey||"string"!=typeof t.config.data.uidKey)throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());a.startDataset=a.newDataset=n.activeDataset=t.config.load.dataset.slice(),a.startContainerClassName=a.newContainerClassName=n.activeContainerClassName,a.show=t.targets.slice(),n=t.callFilters("stateGetInitialState",n,arguments)}else n.activeFilter=t.parseFilterArgs([t.config.load.filter]).command,n.activeSort=t.parseSortArgs([t.config.load.sort]).command,n.totalTargets=t.targets.length,n=t.callFilters("stateGetInitialState",n,arguments),n.activeSort.collection||n.activeSort.attribute||"random"===n.activeSort.order||"desc"===n.activeSort.order?(a.newSort=n.activeSort,t.sortOperation(a),t.printSort(!1,a),t.targets=a.newOrder):a.startOrder=a.newOrder=t.targets,a.startFilter=a.newFilter=n.activeFilter,a.startSort=a.newSort=n.activeSort,a.startContainerClassName=a.newContainerClassName=n.activeContainerClassName,"all"===a.newFilter.selector?a.newFilter.selector=t.config.selectors.target:"none"===a.newFilter.selector&&(a.newFilter.selector="");return a=t.callFilters("operationGetInitialState",a,[n]),t.lastOperation=a,a.newFilter&&t.filterOperation(a),n=t.buildState(a)},cacheDom:function(t,e){var n=this;n.callActions("beforeCacheDom",arguments),n.dom.document=e,n.dom.body=n.dom.document.querySelector("body"),n.dom.container=t,n.dom.parent=t,n.callActions("afterCacheDom",arguments)},indexTargets:function(){var t=this,a=null,i=null,o=null,r=-1;if(t.callActions("beforeIndexTargets",arguments),t.dom.targets=t.config.layout.allowNestedTargets?t.dom.container.querySelectorAll(t.config.selectors.target):n.children(t.dom.container,t.config.selectors.target,t.dom.document),t.dom.targets=n.arrayFromList(t.dom.targets),t.targets=[],(o=t.config.load.dataset)&&o.length!==t.dom.targets.length)throw new Error(e.messages.errorDatasetPrerenderedMismatch());if(t.dom.targets.length){for(r=0;i=t.dom.targets[r];r++)a=new e.Target,a.init(i,t,o?o[r]:void 0),a.isInDom=!0,t.targets.push(a);t.dom.parent=t.dom.targets[0].parentElement===t.dom.container?t.dom.container:t.dom.targets[0].parentElement}t.origOrder=t.targets,t.callActions("afterIndexTargets",arguments)},initControls:function(){var t=this,n="",a=null,i=null,o=null,r=null,s=null,l=-1,c=-1;switch(t.callActions("beforeInitControls",arguments),t.config.controls.scope){case"local":o=t.dom.container;break;case"global":o=t.dom.document;break;default:throw new Error(e.messages.errorConfigInvalidControlsScope())}for(l=0;n=e.controlDefinitions[l];l++)if(t.config.controls.live||n.live){if(n.parent){if(r=t.dom[n.parent],!r||r.length<0)continue;"number"!=typeof r.length&&(r=[r])}else r=[o];for(c=0;i=r[c];c++)s=t.getControl(i,n.type,n.selector),t.controls.push(s)}else for(a=o.querySelectorAll(t.config.selectors.control+n.selector),c=0;i=a[c];c++)s=t.getControl(i,n.type,""),s&&t.controls.push(s);t.callActions("afterInitControls",arguments)},getControl:function(t,a,i){var o=this,r=null,s=-1;if(o.callActions("beforeGetControl",arguments),!i)for(s=0;r=e.controls[s];s++){if(r.el===t&&r.isBound(o))return o.callFilters("controlGetControl",null,arguments);if(r.el===t&&r.type===a&&r.selector===i)return r.addBinding(o),o.callFilters("controlGetControl",r,arguments)}return r=new e.Control,r.init(t,a,i),r.classNames.base=n.getClassname(o.config.classNames,a),r.classNames.active=n.getClassname(o.config.classNames,a,o.config.classNames.modifierActive),r.classNames.disabled=n.getClassname(o.config.classNames,a,o.config.classNames.modifierDisabled),r.addBinding(o),o.callFilters("controlGetControl",r,arguments)},getToggleSelector:function(){var t=this,e="or"===t.config.controls.toggleLogic?", ":"",a="";return t.callActions("beforeGetToggleSelector",arguments),t.toggleArray=n.clean(t.toggleArray),a=t.toggleArray.join(e),""===a&&(a=t.config.controls.toggleDefault),t.callFilters("selectorGetToggleSelector",a,arguments)},buildToggleArray:function(t,e){var a=this,i="";if(a.callActions("beforeBuildToggleArray",arguments),t&&t.filter)i=t.filter.selector.replace(/\s/g,"");else{if(!e)return;i=e.activeFilter.selector.replace(/\s/g,"")}i!==a.config.selectors.target&&"all"!==i||(i=""),"or"===a.config.controls.toggleLogic?a.toggleArray=i.split(","):a.toggleArray=a.splitCompoundSelector(i),a.toggleArray=n.clean(a.toggleArray),a.callActions("afterBuildToggleArray",arguments)},splitCompoundSelector:function(t){var e=t.split(/([\.\[])/g),n=[],a="",i=-1;for(""===e[0]&&e.shift(),i=0;i<e.length;i++)i%2===0&&(a=""),a+=e[i],i%2!==0&&n.push(a);return n},updateControls:function(t){var a=this,i=null,o=new e.CommandMultimix,r=-1;for(a.callActions("beforeUpdateControls",arguments),t.filter?o.filter=t.filter.selector:o.filter=a.state.activeFilter.selector,t.sort?o.sort=a.buildSortString(t.sort):o.sort=a.buildSortString(a.state.activeSort),o.filter===a.config.selectors.target&&(o.filter="all"),""===o.filter&&(o.filter="none"),n.freeze(o),r=0;i=a.controls[r];r++)i.update(o,a.toggleArray);a.callActions("afterUpdateControls",arguments)},buildSortString:function(t){var e=this,n="";return n+=t.sortString,t.next&&(n+=" "+e.buildSortString(t.next)),n},insertTargets:function(t,a){var i=this,o=null,r=-1,s=null,l=null,c=null,u=-1;if(i.callActions("beforeInsertTargets",arguments),"undefined"==typeof t.index&&(t.index=0),o=i.getNextSibling(t.index,t.sibling,t.position),s=i.dom.document.createDocumentFragment(),r=o?n.index(o,i.config.selectors.target):i.targets.length,t.collection){for(u=0;c=t.collection[u];u++){if(i.dom.targets.indexOf(c)>-1)throw new Error(e.messages.errorInsertPreexistingElement());c.style.display="none",s.appendChild(c),s.appendChild(i.dom.document.createTextNode(" ")),n.isElement(c,i.dom.document)&&c.matches(i.config.selectors.target)&&(l=new e.Target,l.init(c,i),l.isInDom=!0,i.targets.splice(r,0,l),r++)}i.dom.parent.insertBefore(s,o)}a.startOrder=i.origOrder=i.targets,i.callActions("afterInsertTargets",arguments)},getNextSibling:function(t,e,n){var a=this,i=null;return t=Math.max(t,0),e&&"before"===n?i=e:e&&"after"===n?i=e.nextElementSibling||null:a.targets.length>0&&"undefined"!=typeof t?i=t<a.targets.length||!a.targets.length?a.targets[t].dom.el:a.targets[a.targets.length-1].dom.el.nextElementSibling:0===a.targets.length&&a.dom.parent.children.length>0&&(a.config.layout.siblingAfter?i=a.config.layout.siblingAfter:a.config.layout.siblingBefore?i=a.config.layout.siblingBefore.nextElementSibling:a.dom.parent.children[0]),a.callFilters("elementGetNextSibling",i,arguments)},filterOperation:function(t){var e=this,n=!1,a=-1,i="",o=null,r=-1;for(e.callActions("beforeFilterOperation",arguments),i=t.newFilter.action,r=0;o=t.newOrder[r];r++)n=t.newFilter.collection?t.newFilter.collection.indexOf(o.dom.el)>-1:""!==t.newFilter.selector&&o.dom.el.matches(t.newFilter.selector),e.evaluateHideShow(n,o,i,t);if(t.toRemove.length)for(r=0;o=t.show[r];r++)t.toRemove.indexOf(o)>-1&&(t.show.splice(r,1),(a=t.toShow.indexOf(o))>-1&&t.toShow.splice(a,1),t.toHide.push(o),t.hide.push(o),r--);t.matching=t.show.slice(),0===t.show.length&&""!==t.newFilter.selector&&0!==e.targets.length&&(t.hasFailed=!0),e.callActions("afterFilterOperation",arguments)},evaluateHideShow:function(t,e,n,a){var i=this;i.callActions("beforeEvaluateHideShow",arguments),t===!0&&"show"===n||t===!1&&"hide"===n?(a.show.push(e),!e.isShown&&a.toShow.push(e)):(a.hide.push(e),e.isShown&&a.toHide.push(e)),i.callActions("afterEvaluateHideShow",arguments)},sortOperation:function(t){var e=this;e.callActions("beforeSortOperation",arguments),t.startOrder=e.targets,t.newSort.collection?t.newOrder=t.newSort.collection:"random"===t.newSort.order?t.newOrder=n.arrayShuffle(t.startOrder):""===t.newSort.attribute?(t.newOrder=e.origOrder.slice(),"desc"===t.newSort.order&&t.newOrder.reverse()):(t.newOrder=t.startOrder.slice(),t.newOrder.sort(function(n,a){return e.compare(n,a,t.newSort)})),n.isEqualArray(t.newOrder,t.startOrder)&&(t.willSort=!1),e.callActions("afterSortOperation",arguments)},compare:function(t,e,n){var a=this,i=n.order,o=a.getAttributeValue(t,n.attribute),r=a.getAttributeValue(e,n.attribute);return isNaN(1*o)||isNaN(1*r)?(o=o.toLowerCase(),r=r.toLowerCase()):(o=1*o,r=1*r),o<r?"asc"===i?-1:1:o>r?"asc"===i?1:-1:o===r&&n.next?a.compare(t,e,n.next):0},getAttributeValue:function(t,n){var a=this,i="";return i=t.dom.el.getAttribute("data-"+n),null===i&&a.config.debug.showWarnings&&console.warn(e.messages.warningInconsistentSortingAttributes({attribute:"data-"+n})),a.callFilters("valueGetAttributeValue",i||0,arguments)},printSort:function(e,a){var i=this,o=e?a.newOrder:a.startOrder,r=e?a.startOrder:a.newOrder,s=o.length?o[o.length-1].dom.el.nextElementSibling:null,l=t.document.createDocumentFragment(),c=null,u=null,f=null,h=-1;for(i.callActions("beforePrintSort",arguments),h=0;u=o[h];h++)f=u.dom.el,"absolute"!==f.style.position&&(n.removeWhitespace(f.previousSibling),f.parentElement.removeChild(f));for(c=s?s.previousSibling:i.dom.parent.lastChild,c&&"#text"===c.nodeName&&n.removeWhitespace(c),h=0;u=r[h];h++)f=u.dom.el,n.isElement(l.lastChild)&&l.appendChild(t.document.createTextNode(" ")),l.appendChild(f);i.dom.parent.firstChild&&i.dom.parent.firstChild!==s&&l.insertBefore(t.document.createTextNode(" "),l.childNodes[0]),s?(l.appendChild(t.document.createTextNode(" ")),i.dom.parent.insertBefore(l,s)):i.dom.parent.appendChild(l),i.callActions("afterPrintSort",arguments)},parseSortString:function(t,a){var i=this,o=t.split(" "),r=a,s=[],l=-1;for(l=0;l<o.length;l++){switch(s=o[l].split(":"),r.sortString=o[l],r.attribute=n.dashCase(s[0]),r.order=s[1]||"asc",r.attribute){case"default":r.attribute="";break;case"random":r.attribute="",r.order="random"}if(!r.attribute||"random"===r.order)break;l<o.length-1&&(r.next=new e.CommandSort,n.freeze(r),r=r.next)}return i.callFilters("commandsParseSort",a,arguments)},parseEffects:function(){var t=this,n="",a=t.config.animation.effectsIn||t.config.animation.effects,i=t.config.animation.effectsOut||t.config.animation.effects;t.callActions("beforeParseEffects",arguments),t.effectsIn=new e.StyleData,t.effectsOut=new e.StyleData,t.transformIn=[],t.transformOut=[],t.effectsIn.opacity=t.effectsOut.opacity=1,t.parseEffect("fade",a,t.effectsIn,t.transformIn),t.parseEffect("fade",i,t.effectsOut,t.transformOut,!0);for(n in e.transformDefaults)e.transformDefaults[n]instanceof e.TransformData&&(t.parseEffect(n,a,t.effectsIn,t.transformIn),t.parseEffect(n,i,t.effectsOut,t.transformOut,!0));t.parseEffect("stagger",a,t.effectsIn,t.transformIn),t.parseEffect("stagger",i,t.effectsOut,t.transformOut,!0),t.callActions("afterParseEffects",arguments)},parseEffect:function(t,n,a,i,o){var r=this,s=/\(([^)]+)\)/,l=-1,c="",u=[],f="",h=["%","px","em","rem","vh","vw","deg"],d="",m=-1;if(r.callActions("beforeParseEffect",arguments),"string"!=typeof n)throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());if(n.indexOf(t)<0)return void("stagger"===t&&(r.staggerDuration=0));switch(l=n.indexOf(t+"("),l>-1&&(c=n.substring(l),u=s.exec(c),f=u[1]),t){case"fade":a.opacity=f?parseFloat(f):0;break;case"stagger":r.staggerDuration=f?parseFloat(f):100;break;default:if(o&&r.config.animation.reverseOut&&"scale"!==t?a[t].value=(f?parseFloat(f):e.transformDefaults[t].value)*-1:a[t].value=f?parseFloat(f):e.transformDefaults[t].value,f){for(m=0;d=h[m];m++)if(f.indexOf(d)>-1){a[t].unit=d;break}}else a[t].unit=e.transformDefaults[t].unit;i.push(t+"("+a[t].value+a[t].unit+")")}r.callActions("afterParseEffect",arguments)},buildState:function(t){var n=this,a=new e.State,i=null,o=-1;for(n.callActions("beforeBuildState",arguments),o=0;i=n.targets[o];o++)(!t.toRemove.length||t.toRemove.indexOf(i)<0)&&a.targets.push(i.dom.el);for(o=0;i=t.matching[o];o++)a.matching.push(i.dom.el);for(o=0;i=t.show[o];o++)a.show.push(i.dom.el);for(o=0;i=t.hide[o];o++)(!t.toRemove.length||t.toRemove.indexOf(i)<0)&&a.hide.push(i.dom.el);return a.id=n.id,a.container=n.dom.container,a.activeFilter=t.newFilter,a.activeSort=t.newSort,a.activeDataset=t.newDataset,a.activeContainerClassName=t.newContainerClassName,a.hasFailed=t.hasFailed,a.totalTargets=n.targets.length,a.totalShow=t.show.length,a.totalHide=t.hide.length,a.totalMatching=t.matching.length,a.triggerElement=t.triggerElement,n.callFilters("stateBuildState",a,arguments)},goMix:function(a,i){var o=this,r=null;return o.callActions("beforeGoMix",arguments),o.config.animation.duration&&o.config.animation.effects&&n.isVisible(o.dom.container)||(a=!1),i.toShow.length||i.toHide.length||i.willSort||i.willChangeLayout||(a=!1),i.startState.show.length||i.show.length||(a=!1),e.events.fire("mixStart",o.dom.container,{state:i.startState,futureState:i.newState,instance:o},o.dom.document),"function"==typeof o.config.callbacks.onMixStart&&o.config.callbacks.onMixStart.call(o.dom.container,i.startState,i.newState,o),n.removeClass(o.dom.container,n.getClassname(o.config.classNames,"container",o.config.classNames.modifierFailed)),r=o.userDeferred?o.userDeferred:o.userDeferred=n.defer(e.libraries),o.isBusy=!0,a&&e.features.has.transitions?(t.pageYOffset!==i.docState.scrollTop&&t.scrollTo(i.docState.scrollLeft,i.docState.scrollTop),o.config.animation.applyPerspective&&(o.dom.parent.style[e.features.perspectiveProp]=o.config.animation.perspectiveDistance,o.dom.parent.style[e.features.perspectiveOriginProp]=o.config.animation.perspectiveOrigin),o.config.animation.animateResizeContainer&&i.startHeight!==i.newHeight&&i.viewportDeltaY!==i.startHeight-i.newHeight&&(o.dom.parent.style.height=i.startHeight+"px"),o.config.animation.animateResizeContainer&&i.startWidth!==i.newWidth&&i.viewportDeltaX!==i.startWidth-i.newWidth&&(o.dom.parent.style.width=i.startWidth+"px"),i.startHeight===i.newHeight&&(o.dom.parent.style.height=i.startHeight+"px"),i.startWidth===i.newWidth&&(o.dom.parent.style.width=i.startWidth+"px"),i.startHeight===i.newHeight&&i.startWidth===i.newWidth&&(o.dom.parent.style.overflow="hidden"),requestAnimationFrame(function(){o.moveTargets(i)}),o.callFilters("promiseGoMix",r.promise,arguments)):(o.config.debug.fauxAsync?setTimeout(function(){o.cleanUp(i)},o.config.animation.duration):o.cleanUp(i),o.callFilters("promiseGoMix",r.promise,arguments))},getStartMixData:function(n){var a=this,i=t.getComputedStyle(a.dom.parent),o=a.dom.parent.getBoundingClientRect(),r=null,s={},l=-1,c=i[e.features.boxSizingProp];for(a.incPadding="border-box"===c,a.callActions("beforeGetStartMixData",arguments),l=0;r=n.show[l];l++)s=r.getPosData(),n.showPosData[l]={startPosData:s};for(l=0;r=n.toHide[l];l++)s=r.getPosData(),n.toHidePosData[l]={startPosData:s};n.startX=o.left,n.startY=o.top,n.startHeight=a.incPadding?o.height:o.height-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderTop)-parseFloat(i.borderBottom),n.startWidth=a.incPadding?o.width:o.width-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderLeft)-parseFloat(i.borderRight),a.callActions("afterGetStartMixData",arguments)},setInter:function(t){var e=this,a=null,i=-1;for(e.callActions("beforeSetInter",arguments),e.config.animation.clampHeight&&(e.dom.parent.style.height=t.startHeight+"px",e.dom.parent.style.overflow="hidden"),e.config.animation.clampWidth&&(e.dom.parent.style.width=t.startWidth+"px",e.dom.parent.style.overflow="hidden"),i=0;a=t.toShow[i];i++)a.show();t.willChangeLayout&&(n.removeClass(e.dom.container,t.startContainerClassName),n.addClass(e.dom.container,t.newContainerClassName)),e.callActions("afterSetInter",arguments)},getInterMixData:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeGetInterMixData",arguments),a=0;n=t.show[a];a++)t.showPosData[a].interPosData=n.getPosData();for(a=0;n=t.toHide[a];a++)t.toHidePosData[a].interPosData=n.getPosData();e.callActions("afterGetInterMixData",arguments)},setFinal:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeSetFinal",arguments),t.willSort&&e.printSort(!1,t),a=0;n=t.toHide[a];a++)n.hide();e.callActions("afterSetFinal",arguments)},getFinalMixData:function(e){var a=this,i=null,o=null,r=null,s=-1;for(a.callActions("beforeGetFinalMixData",arguments),s=0;r=e.show[s];s++)e.showPosData[s].finalPosData=r.getPosData();for(s=0;r=e.toHide[s];s++)e.toHidePosData[s].finalPosData=r.getPosData();for((a.config.animation.clampHeight||a.config.animation.clampWidth)&&(a.dom.parent.style.height=a.dom.parent.style.width=a.dom.parent.style.overflow=""),a.incPadding||(i=t.getComputedStyle(a.dom.parent)),o=a.dom.parent.getBoundingClientRect(),e.newX=o.left,e.newY=o.top,e.newHeight=a.incPadding?o.height:o.height-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderTop)-parseFloat(i.borderBottom),e.newWidth=a.incPadding?o.width:o.width-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderLeft)-parseFloat(i.borderRight),e.viewportDeltaX=e.docState.viewportWidth-this.dom.document.documentElement.clientWidth,e.viewportDeltaY=e.docState.viewportHeight-this.dom.document.documentElement.clientHeight,e.willSort&&a.printSort(!0,e),s=0;r=e.toShow[s];s++)r.hide();for(s=0;r=e.toHide[s];s++)r.show();e.willChangeLayout&&(n.removeClass(a.dom.container,e.newContainerClassName),n.addClass(a.dom.container,a.config.layout.containerClassName)),a.callActions("afterGetFinalMixData",arguments)},getTweenData:function(t){var n=this,a=null,i=null,o=Object.getOwnPropertyNames(n.effectsIn),r="",s=null,l=-1,c=-1,u=-1,f=-1;for(n.callActions("beforeGetTweenData",arguments),u=0;a=t.show[u];u++)for(i=t.showPosData[u],i.posIn=new e.StyleData,i.posOut=new e.StyleData,i.tweenData=new e.StyleData,a.isShown?(i.posIn.x=i.startPosData.x-i.interPosData.x,i.posIn.y=i.startPosData.y-i.interPosData.y):i.posIn.x=i.posIn.y=0,i.posOut.x=i.finalPosData.x-i.interPosData.x,i.posOut.y=i.finalPosData.y-i.interPosData.y,i.posIn.opacity=a.isShown?1:n.effectsIn.opacity,i.posOut.opacity=1,i.tweenData.opacity=i.posOut.opacity-i.posIn.opacity,a.isShown||n.config.animation.nudge||(i.posIn.x=i.posOut.x,i.posIn.y=i.posOut.y),i.tweenData.x=i.posOut.x-i.posIn.x,i.tweenData.y=i.posOut.y-i.posIn.y,n.config.animation.animateResizeTargets&&(i.posIn.width=i.startPosData.width,i.posIn.height=i.startPosData.height,l=(i.startPosData.width||i.finalPosData.width)-i.interPosData.width,i.posIn.marginRight=i.startPosData.marginRight-l,c=(i.startPosData.height||i.finalPosData.height)-i.interPosData.height,i.posIn.marginBottom=i.startPosData.marginBottom-c,i.posOut.width=i.finalPosData.width,i.posOut.height=i.finalPosData.height,l=(i.finalPosData.width||i.startPosData.width)-i.interPosData.width,i.posOut.marginRight=i.finalPosData.marginRight-l,c=(i.finalPosData.height||i.startPosData.height)-i.interPosData.height,i.posOut.marginBottom=i.finalPosData.marginBottom-c,i.tweenData.width=i.posOut.width-i.posIn.width,i.tweenData.height=i.posOut.height-i.posIn.height,i.tweenData.marginRight=i.posOut.marginRight-i.posIn.marginRight,i.tweenData.marginBottom=i.posOut.marginBottom-i.posIn.marginBottom),f=0;r=o[f];f++)s=n.effectsIn[r],s instanceof e.TransformData&&s.value&&(i.posIn[r].value=s.value,i.posOut[r].value=0,i.tweenData[r].value=i.posOut[r].value-i.posIn[r].value,i.posIn[r].unit=i.posOut[r].unit=i.tweenData[r].unit=s.unit);for(u=0;a=t.toHide[u];u++)for(i=t.toHidePosData[u],i.posIn=new e.StyleData,i.posOut=new e.StyleData,i.tweenData=new e.StyleData,i.posIn.x=a.isShown?i.startPosData.x-i.interPosData.x:0,i.posIn.y=a.isShown?i.startPosData.y-i.interPosData.y:0,i.posOut.x=n.config.animation.nudge?0:i.posIn.x,i.posOut.y=n.config.animation.nudge?0:i.posIn.y,i.tweenData.x=i.posOut.x-i.posIn.x,i.tweenData.y=i.posOut.y-i.posIn.y,n.config.animation.animateResizeTargets&&(i.posIn.width=i.startPosData.width,i.posIn.height=i.startPosData.height,l=i.startPosData.width-i.interPosData.width,i.posIn.marginRight=i.startPosData.marginRight-l,c=i.startPosData.height-i.interPosData.height,i.posIn.marginBottom=i.startPosData.marginBottom-c),i.posIn.opacity=1,i.posOut.opacity=n.effectsOut.opacity,i.tweenData.opacity=i.posOut.opacity-i.posIn.opacity,f=0;r=o[f];f++)s=n.effectsOut[r],s instanceof e.TransformData&&s.value&&(i.posIn[r].value=0,i.posOut[r].value=s.value,i.tweenData[r].value=i.posOut[r].value-i.posIn[r].value,i.posIn[r].unit=i.posOut[r].unit=i.tweenData[r].unit=s.unit);n.callActions("afterGetTweenData",arguments)},moveTargets:function(t){var a=this,i=null,o=null,r=null,s="",l=!1,c=-1,u=-1,f=a.checkProgress.bind(a);for(a.callActions("beforeMoveTargets",arguments),u=0;i=t.show[u];u++)o=new e.IMoveData,r=t.showPosData[u],s=i.isShown?"none":"show",l=a.willTransition(s,t.hasEffect,r.posIn,r.posOut),l&&c++,i.show(),o.posIn=r.posIn,o.posOut=r.posOut,o.statusChange=s,o.staggerIndex=c,o.operation=t,o.callback=l?f:null,i.move(o);for(u=0;i=t.toHide[u];u++)r=t.toHidePosData[u],o=new e.IMoveData,s="hide",l=a.willTransition(s,r.posIn,r.posOut),o.posIn=r.posIn,o.posOut=r.posOut,o.statusChange=s,o.staggerIndex=u,o.operation=t,o.callback=l?f:null,i.move(o);a.config.animation.animateResizeContainer&&(a.dom.parent.style[e.features.transitionProp]="height "+a.config.animation.duration+"ms ease, width "+a.config.animation.duration+"ms ease ",requestAnimationFrame(function(){t.startHeight!==t.newHeight&&t.viewportDeltaY!==t.startHeight-t.newHeight&&(a.dom.parent.style.height=t.newHeight+"px"),t.startWidth!==t.newWidth&&t.viewportDeltaX!==t.startWidth-t.newWidth&&(a.dom.parent.style.width=t.newWidth+"px")})),t.willChangeLayout&&(n.removeClass(a.dom.container,a.config.layout.ContainerClassName),n.addClass(a.dom.container,t.newContainerClassName)),a.callActions("afterMoveTargets",arguments)},hasEffect:function(){var t=this,e=["scale","translateX","translateY","translateZ","rotateX","rotateY","rotateZ"],n="",a=null,i=!1,o=-1,r=-1;if(1!==t.effectsIn.opacity)return t.callFilters("resultHasEffect",!0,arguments);for(r=0;n=e[r];r++)if(a=t.effectsIn[n],o="undefined"!==a.value?a.value:a,0!==o){i=!0;break}return t.callFilters("resultHasEffect",i,arguments)},willTransition:function(t,e,a,i){var o=this,r=!1;return r=!!n.isVisible(o.dom.container)&&(!!("none"!==t&&e||a.x!==i.x||a.y!==i.y)||!!o.config.animation.animateResizeTargets&&(a.width!==i.width||a.height!==i.height||a.marginRight!==i.marginRight||a.marginTop!==i.marginTop)),o.callFilters("resultWillTransition",r,arguments)},checkProgress:function(t){var e=this;e.targetsDone++,e.targetsBound===e.targetsDone&&e.cleanUp(t)},cleanUp:function(t){var a=this,i=null,o=null,r=null,s=null,l=-1;for(a.callActions("beforeCleanUp",arguments),a.targetsMoved=a.targetsImmovable=a.targetsBound=a.targetsDone=0,l=0;i=t.show[l];l++)i.cleanUp(),i.show();for(l=0;i=t.toHide[l];l++)i.cleanUp(),i.hide();if(t.willSort&&a.printSort(!1,t),a.dom.parent.style[e.features.transitionProp]=a.dom.parent.style.height=a.dom.parent.style.width=a.dom.parent.style.overflow=a.dom.parent.style[e.features.perspectiveProp]=a.dom.parent.style[e.features.perspectiveOriginProp]="",t.willChangeLayout&&(n.removeClass(a.dom.container,t.startContainerClassName),n.addClass(a.dom.container,t.newContainerClassName)),t.toRemove.length){for(l=0;i=a.targets[l];l++)t.toRemove.indexOf(i)>-1&&((o=i.dom.el.previousSibling)&&"#text"===o.nodeName&&(r=i.dom.el.nextSibling)&&"#text"===r.nodeName&&n.removeWhitespace(o),t.willSort||a.dom.parent.removeChild(i.dom.el),a.targets.splice(l,1),i.isInDom=!1,l--);a.origOrder=a.targets}t.willSort&&(a.targets=t.newOrder),a.state=t.newState,a.lastOperation=t,a.dom.targets=a.state.targets,e.events.fire("mixEnd",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixEnd&&a.config.callbacks.onMixEnd.call(a.dom.container,a.state,a),t.hasFailed&&(e.events.fire("mixFail",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixFail&&a.config.callbacks.onMixFail.call(a.dom.container,a.state,a),n.addClass(a.dom.container,n.getClassname(a.config.classNames,"container",a.config.classNames.modifierFailed))),"function"==typeof a.userCallback&&a.userCallback.call(a.dom.container,a.state,a),"function"==typeof a.userDeferred.resolve&&a.userDeferred.resolve(a.state),a.userCallback=null,a.userDeferred=null,a.lastClicked=null,a.isToggling=!1,a.isBusy=!1,a.queue.length&&(a.callActions("beforeReadQueueCleanUp",arguments),s=a.queue.shift(),a.userDeferred=s.deferred,a.isToggling=s.isToggling,a.lastClicked=s.triggerElement,s.instruction.command instanceof e.CommandMultimix?a.multimix.apply(a,s.args):a.dataset.apply(a,s.args)),a.callActions("afterCleanUp",arguments)},parseMultimixArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandMultimix,r=0;r<t.length;r++)o=t[r],null!==o&&("object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o));return!i.command.insert||i.command.insert instanceof e.CommandInsert||(i.command.insert=a.parseInsertArgs([i.command.insert]).command),!i.command.remove||i.command.remove instanceof e.CommandRemove||(i.command.remove=a.parseRemoveArgs([i.command.remove]).command),!i.command.filter||i.command.filter instanceof e.CommandFilter||(i.command.filter=a.parseFilterArgs([i.command.filter]).command),!i.command.sort||i.command.sort instanceof e.CommandSort||(i.command.sort=a.parseSortArgs([i.command.sort]).command),!i.command.changeLayout||i.command.changeLayout instanceof e.CommandChangeLayout||(i.command.changeLayout=a.parseChangeLayoutArgs([i.command.changeLayout]).command),i=a.callFilters("instructionParseMultimixArgs",i,arguments),n.freeze(i),i},parseFilterArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandFilter,r=0;r<t.length;r++)o=t[r],"string"==typeof o?i.command.selector=o:null===o?i.command.collection=[]:"object"==typeof o&&n.isElement(o,a.dom.document)?i.command.collection=[o]:"object"==typeof o&&"undefined"!=typeof o.length?i.command.collection=n.arrayFromList(o):"object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o);if(i.command.selector&&i.command.collection)throw new Error(e.messages.errorFilterInvalidArguments());return i=a.callFilters("instructionParseFilterArgs",i,arguments),n.freeze(i),i},parseSortArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r="",s=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandSort,s=0;s<t.length;s++)if(o=t[s],null!==o)switch(typeof o){case"string":r=o;break;case"object":o.length&&(i.command.collection=n.arrayFromList(o));break;case"boolean":i.animate=o;break;case"function":i.callback=o}return r&&(i.command=a.parseSortString(r,i.command)),i=a.callFilters("instructionParseSortArgs",i,arguments),n.freeze(i),i},parseInsertArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandInsert,r=0;r<t.length;r++)o=t[r],null!==o&&("number"==typeof o?i.command.index=o:"string"==typeof o&&["before","after"].indexOf(o)>-1?i.command.position=o:"string"==typeof o?i.command.collection=n.arrayFromList(n.createElement(o).childNodes):"object"==typeof o&&n.isElement(o,a.dom.document)?i.command.collection.length?i.command.sibling=o:i.command.collection=[o]:"object"==typeof o&&o.length?i.command.collection.length?i.command.sibling=o[0]:i.command.collection=o:"object"==typeof o&&o.childNodes&&o.childNodes.length?i.command.collection.length?i.command.sibling=o.childNodes[0]:i.command.collection=n.arrayFromList(o.childNodes):"object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o));if(i.command.index&&i.command.sibling)throw new Error(e.messages.errorInsertInvalidArguments());return!i.command.collection.length&&a.config.debug.showWarnings&&console.warn(e.messages.warningInsertNoElements()),i=a.callFilters("instructionParseInsertArgs",i,arguments),n.freeze(i),i},parseRemoveArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=null,s=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandRemove,s=0;s<t.length;s++)if(r=t[s],null!==r)switch(typeof r){case"number":a.targets[r]&&(i.command.targets[0]=a.targets[r]);break;case"string":i.command.collection=n.arrayFromList(a.dom.parent.querySelectorAll(r));break;case"object":r&&r.length?i.command.collection=r:n.isElement(r,a.dom.document)?i.command.collection=[r]:n.extend(i.command,r);break;case"boolean":i.animate=r;break;case"function":i.callback=r}if(i.command.collection.length)for(s=0;o=a.targets[s];s++)i.command.collection.indexOf(o.dom.el)>-1&&i.command.targets.push(o);return!i.command.targets.length&&a.config.debug.showWarnings&&console.warn(e.messages.warningRemoveNoElements()),n.freeze(i),i},parseDatasetArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandDataset,r=0;r<t.length;r++)if(o=t[r],null!==o)switch(typeof o){case"object":Array.isArray(o)||"number"==typeof o.length?i.command.dataset=o:n.extend(i.command,o);break;case"boolean":i.animate=o;break;case"function":i.callback=o}return n.freeze(i),i},parseChangeLayoutArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandChangeLayout,r=0;r<t.length;r++)if(o=t[r],null!==o)switch(typeof o){case"string":i.command.containerClassName=o;break;case"object":n.extend(i.command,o);break;case"boolean":i.animate=o;break;case"function":i.callback=o}return n.freeze(i),i},queueMix:function(t){var a=this,i=null,o="";return a.callActions("beforeQueueMix",arguments),i=n.defer(e.libraries),a.config.animation.queue&&a.queue.length<a.config.animation.queueLimit?(t.deferred=i,a.queue.push(t),a.config.controls.enable&&(a.isToggling?(a.buildToggleArray(t.instruction.command),o=a.getToggleSelector(),a.updateControls({filter:{selector:o}})):a.updateControls(t.instruction.command))):(a.config.debug.showWarnings&&console.warn(e.messages.warningMultimixInstanceQueueFull()),i.resolve(a.state),e.events.fire("mixBusy",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixBusy&&a.config.callbacks.onMixBusy.call(a.dom.container,a.state,a)),a.callFilters("promiseQueueMix",i.promise,arguments)},getDataOperation:function(t){var a=this,i=new e.Operation,o=[];if(i=a.callFilters("operationUnmappedGetDataOperation",i,arguments),a.dom.targets.length&&!(o=a.state.activeDataset||[]).length)throw new Error(e.messages.errorDatasetNotSet());
return i.id=n.randomHex(),i.startState=a.state,i.startDataset=o,i.newDataset=t.slice(),a.diffDatasets(i),i.startOrder=a.targets,i.newOrder=i.show,a.config.animation.enable&&(a.getStartMixData(i),a.setInter(i),i.docState=n.getDocumentState(a.dom.document),a.getInterMixData(i),a.setFinal(i),a.getFinalMixData(i),a.parseEffects(),i.hasEffect=a.hasEffect(),a.getTweenData(i)),a.targets=i.show.slice(),i.newState=a.buildState(i),Array.prototype.push.apply(a.targets,i.toRemove),i=a.callFilters("operationMappedGetDataOperation",i,arguments)},diffDatasets:function(t){var a=this,i=[],o=[],r=[],s=null,l=null,c=null,u=null,f=null,h={},d="",m=-1;for(a.callActions("beforeDiffDatasets",arguments),m=0;s=t.newDataset[m];m++){if("undefined"==typeof(d=s[a.config.data.uidKey])||d.toString().length<1)throw new TypeError(e.messages.errorDatasetInvalidUidKey({uidKey:a.config.data.uidKey}));if(h[d])throw new Error(e.messages.errorDatasetDuplicateUid({uid:d}));h[d]=!0,(l=a.cache[d])instanceof e.Target?(a.config.data.dirtyCheck&&!n.deepEquals(s,l.data)&&(c=l.render(s),l.data=s,c!==l.dom.el&&(l.isInDom&&(l.unbindEvents(),a.dom.parent.replaceChild(c,l.dom.el)),l.isShown||(c.style.display="none"),l.dom.el=c,l.isInDom&&l.bindEvents())),c=l.dom.el):(l=new e.Target,l.init(null,a,s),l.hide()),l.isInDom?(f=l.dom.el.nextElementSibling,o.push(d),u&&(u.lastElementChild&&u.appendChild(a.dom.document.createTextNode(" ")),a.insertDatasetFrag(u,l.dom.el,r),u=null)):(u||(u=a.dom.document.createDocumentFragment()),u.lastElementChild&&u.appendChild(a.dom.document.createTextNode(" ")),u.appendChild(l.dom.el),l.isInDom=!0,l.unbindEvents(),l.bindEvents(),l.hide(),t.toShow.push(l),r.push(l)),t.show.push(l)}for(u&&(f=f||a.config.layout.siblingAfter,f&&u.appendChild(a.dom.document.createTextNode(" ")),a.insertDatasetFrag(u,f,r)),m=0;s=t.startDataset[m];m++)d=s[a.config.data.uidKey],l=a.cache[d],t.show.indexOf(l)<0?(t.hide.push(l),t.toHide.push(l),t.toRemove.push(l)):i.push(d);n.isEqualArray(i,o)||(t.willSort=!0),a.callActions("afterDiffDatasets",arguments)},insertDatasetFrag:function(t,e,n){var a=this,i=e?Array.from(a.dom.parent.children).indexOf(e):a.targets.length;for(a.dom.parent.insertBefore(t,e);n.length;)a.targets.splice(i,0,n.shift()),i++},willSort:function(t,e){var n=this,a=!1;return a=!!(n.config.behavior.liveSort||"random"===t.order||t.attribute!==e.attribute||t.order!==e.order||t.collection!==e.collection||null===t.next&&e.next||t.next&&null===e.next)||!(!t.next||!e.next)&&n.willSort(t.next,e.next),n.callFilters("resultWillSort",a,arguments)},show:function(){var t=this;return t.filter("all")},hide:function(){var t=this;return t.filter("none")},isMixing:function(){var t=this;return t.isBusy},filter:function(){var t=this,e=t.parseFilterArgs(arguments);return t.multimix({filter:e.command},e.animate,e.callback)},toggleOn:function(){var t=this,e=t.parseFilterArgs(arguments),n=e.command.selector,a="";return t.isToggling=!0,t.toggleArray.indexOf(n)<0&&t.toggleArray.push(n),a=t.getToggleSelector(),t.multimix({filter:a},e.animate,e.callback)},toggleOff:function(){var t=this,e=t.parseFilterArgs(arguments),n=e.command.selector,a="";return t.isToggling=!0,t.toggleArray.splice(t.toggleArray.indexOf(n),1),a=t.getToggleSelector(),t.multimix({filter:a},e.animate,e.callback)},sort:function(){var t=this,e=t.parseSortArgs(arguments);return t.multimix({sort:e.command},e.animate,e.callback)},changeLayout:function(){var t=this,e=t.parseChangeLayoutArgs(arguments);return t.multimix({changeLayout:e.command},e.animate,e.callback)},dataset:function(){var t=this,n=t.parseDatasetArgs(arguments),a=null,i=null,o=!1;return t.callActions("beforeDataset",arguments),t.isBusy?(i=new e.QueueItem,i.args=arguments,i.instruction=n,t.queueMix(i)):(n.callback&&(t.userCallback=n.callback),o=n.animate^t.config.animation.enable?n.animate:t.config.animation.enable,a=t.getDataOperation(n.command.dataset),t.goMix(o,a))},multimix:function(){var t=this,n=null,a=!1,i=null,o=t.parseMultimixArgs(arguments);return t.callActions("beforeMultimix",arguments),t.isBusy?(i=new e.QueueItem,i.args=arguments,i.instruction=o,i.triggerElement=t.lastClicked,i.isToggling=t.isToggling,t.queueMix(i)):(n=t.getOperation(o.command),t.config.controls.enable&&(o.command.filter&&!t.isToggling&&(t.toggleArray.length=0,t.buildToggleArray(n.command)),t.queue.length<1&&t.updateControls(n.command)),o.callback&&(t.userCallback=o.callback),a=o.animate^t.config.animation.enable?o.animate:t.config.animation.enable,t.callFilters("operationMultimix",n,arguments),t.goMix(a,n))},getOperation:function(t){var a=this,i=t.sort,o=t.filter,r=t.changeLayout,s=t.remove,l=t.insert,c=new e.Operation;return c=a.callFilters("operationUnmappedGetOperation",c,arguments),c.id=n.randomHex(),c.command=t,c.startState=a.state,c.triggerElement=a.lastClicked,a.isBusy?(a.config.debug.showWarnings&&console.warn(e.messages.warningGetOperationInstanceBusy()),null):(l&&a.insertTargets(l,c),s&&(c.toRemove=s.targets),c.startSort=c.newSort=c.startState.activeSort,c.startOrder=c.newOrder=a.targets,i&&(c.startSort=c.startState.activeSort,c.newSort=i,c.willSort=a.willSort(i,c.startState.activeSort),c.willSort&&a.sortOperation(c)),c.startFilter=c.startState.activeFilter,o?c.newFilter=o:c.newFilter=n.extend(new e.CommandFilter,c.startFilter),"all"===c.newFilter.selector?c.newFilter.selector=a.config.selectors.target:"none"===c.newFilter.selector&&(c.newFilter.selector=""),a.filterOperation(c),c.startContainerClassName=c.startState.activeContainerClassName,r?(c.newContainerClassName=r.containerClassName,c.newContainerClassName!==c.startContainerClassName&&(c.willChangeLayout=!0)):c.newContainerClassName=c.startContainerClassName,a.config.animation.enable&&(a.getStartMixData(c),a.setInter(c),c.docState=n.getDocumentState(a.dom.document),a.getInterMixData(c),a.setFinal(c),a.getFinalMixData(c),a.parseEffects(),c.hasEffect=a.hasEffect(),a.getTweenData(c)),c.willSort&&(a.targets=c.newOrder),c.newState=a.buildState(c),a.callFilters("operationMappedGetOperation",c,arguments))},tween:function(t,e){var n=null,a=null,i=-1,o=-1;for(e=Math.min(e,1),e=Math.max(e,0),o=0;n=t.show[o];o++)a=t.showPosData[o],n.applyTween(a,e);for(o=0;n=t.hide[o];o++)n.isShown&&n.hide(),(i=t.toHide.indexOf(n))>-1&&(a=t.toHidePosData[i],n.isShown||n.show(),n.applyTween(a,e))},insert:function(){var t=this,e=t.parseInsertArgs(arguments);return t.multimix({insert:e.command},e.animate,e.callback)},insertBefore:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(e.command.collection,"before",e.command.sibling,e.animate,e.callback)},insertAfter:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(e.command.collection,"after",e.command.sibling,e.animate,e.callback)},prepend:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(0,e.command.collection,e.animate,e.callback)},append:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(t.state.totalTargets,e.command.collection,e.animate,e.callback)},remove:function(){var t=this,e=t.parseRemoveArgs(arguments);return t.multimix({remove:e.command},e.animate,e.callback)},getConfig:function(t){var e=this,a=null;return a=t?n.getProperty(e.config,t):e.config,e.callFilters("valueGetConfig",a,arguments)},configure:function(t){var e=this;e.callActions("beforeConfigure",arguments),n.extend(e.config,t,!0,!0),e.callActions("afterConfigure",arguments)},getState:function(){var t=this,a=null;return a=new e.State,n.extend(a,t.state),n.freeze(a),t.callFilters("stateGetState",a,arguments)},forceRefresh:function(){var t=this;t.indexTargets()},forceRender:function(){var t=this,e=null,n=null,a="";for(a in t.cache)e=t.cache[a],n=e.render(e.data),n!==e.dom.el&&(e.isInDom&&(e.unbindEvents(),t.dom.parent.replaceChild(n,e.dom.el)),e.isShown||(n.style.display="none"),e.dom.el=n,e.isInDom&&e.bindEvents());t.state=t.buildState(t.lastOperation)},destroy:function(t){var n=this,a=null,i=null,o=0;for(n.callActions("beforeDestroy",arguments),o=0;a=n.controls[o];o++)a.removeBinding(n);for(o=0;i=n.targets[o];o++)t&&i.show(),i.unbindEvents();n.dom.container.id.match(/^MixItUp/)&&n.dom.container.removeAttribute("id"),delete e.instances[n.id],n.callActions("afterDestroy",arguments)}}),e.IMoveData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.posIn=null,this.posOut=null,this.operation=null,this.callback=null,this.statusChange="",this.duration=-1,this.staggerIndex=-1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.IMoveData),e.IMoveData.prototype=Object.create(e.Base.prototype),e.IMoveData.prototype.constructor=e.IMoveData,e.TargetDom=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.el=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TargetDom),e.TargetDom.prototype=Object.create(e.Base.prototype),e.TargetDom.prototype.constructor=e.TargetDom,e.Target=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.sortString="",this.mixer=null,this.callback=null,this.isShown=!1,this.isBound=!1,this.isExcluded=!1,this.isInDom=!1,this.handler=null,this.operation=null,this.data=null,this.dom=new e.TargetDom,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Target),e.Target.prototype=Object.create(e.Base.prototype),n.extend(e.Target.prototype,{constructor:e.Target,init:function(t,n,a){var i=this,o="";if(i.callActions("beforeInit",arguments),i.mixer=n,t||(t=i.render(a)),i.cacheDom(t),i.bindEvents(),"none"!==i.dom.el.style.display&&(i.isShown=!0),a&&n.config.data.uidKey){if("undefined"==typeof(o=a[n.config.data.uidKey])||o.toString().length<1)throw new TypeError(e.messages.errorDatasetInvalidUidKey({uidKey:n.config.data.uidKey}));i.id=o,i.data=a,n.cache[o]=i}i.callActions("afterInit",arguments)},render:function(t){var a=this,i=null,o=null,r=null,s="";if(a.callActions("beforeRender",arguments),i=a.callFilters("renderRender",a.mixer.config.render.target,arguments),"function"!=typeof i)throw new TypeError(e.messages.errorDatasetRendererNotSet());return s=i(t),s&&"object"==typeof s&&n.isElement(s)?o=s:"string"==typeof s&&(r=document.createElement("div"),r.innerHTML=s,o=r.firstElementChild),a.callFilters("elRender",o,arguments)},cacheDom:function(t){var e=this;e.callActions("beforeCacheDom",arguments),e.dom.el=t,e.callActions("afterCacheDom",arguments)},getSortString:function(t){var e=this,n=e.dom.el.getAttribute("data-"+t)||"";e.callActions("beforeGetSortString",arguments),n=isNaN(1*n)?n.toLowerCase():1*n,e.sortString=n,e.callActions("afterGetSortString",arguments)},show:function(){var t=this;t.callActions("beforeShow",arguments),t.isShown||(t.dom.el.style.display="",t.isShown=!0),t.callActions("afterShow",arguments)},hide:function(){var t=this;t.callActions("beforeHide",arguments),t.isShown&&(t.dom.el.style.display="none",t.isShown=!1),t.callActions("afterHide",arguments)},move:function(t){var e=this;e.callActions("beforeMove",arguments),e.isExcluded||e.mixer.targetsMoved++,e.applyStylesIn(t),requestAnimationFrame(function(){e.applyStylesOut(t)}),e.callActions("afterMove",arguments)},applyTween:function(t,n){var a=this,i="",o=null,r=t.posIn,s=[],l=new e.StyleData,c=-1;for(a.callActions("beforeApplyTween",arguments),l.x=r.x,l.y=r.y,0===n?a.hide():a.isShown||a.show(),c=0;i=e.features.TWEENABLE[c];c++)if(o=t.tweenData[i],"x"===i){if(!o)continue;l.x=r.x+o*n}else if("y"===i){if(!o)continue;l.y=r.y+o*n}else if(o instanceof e.TransformData){if(!o.value)continue;l[i].value=r[i].value+o.value*n,l[i].unit=o.unit,s.push(i+"("+l[i].value+o.unit+")")}else{if(!o)continue;l[i]=r[i]+o*n,a.dom.el.style[i]=l[i]}(l.x||l.y)&&s.unshift("translate("+l.x+"px, "+l.y+"px)"),s.length&&(a.dom.el.style[e.features.transformProp]=s.join(" ")),a.callActions("afterApplyTween",arguments)},applyStylesIn:function(t){var n=this,a=t.posIn,i=1!==n.mixer.effectsIn.opacity,o=[];n.callActions("beforeApplyStylesIn",arguments),o.push("translate("+a.x+"px, "+a.y+"px)"),n.mixer.config.animation.animateResizeTargets&&("show"!==t.statusChange&&(n.dom.el.style.width=a.width+"px",n.dom.el.style.height=a.height+"px"),n.dom.el.style.marginRight=a.marginRight+"px",n.dom.el.style.marginBottom=a.marginBottom+"px"),i&&(n.dom.el.style.opacity=a.opacity),"show"===t.statusChange&&(o=o.concat(n.mixer.transformIn)),n.dom.el.style[e.features.transformProp]=o.join(" "),n.callActions("afterApplyStylesIn",arguments)},applyStylesOut:function(t){var n=this,a=[],i=[],o=n.mixer.config.animation.animateResizeTargets,r="undefined"!=typeof n.mixer.effectsIn.opacity;if(n.callActions("beforeApplyStylesOut",arguments),a.push(n.writeTransitionRule(e.features.transformRule,t.staggerIndex)),"none"!==t.statusChange&&a.push(n.writeTransitionRule("opacity",t.staggerIndex,t.duration)),o&&(a.push(n.writeTransitionRule("width",t.staggerIndex,t.duration)),a.push(n.writeTransitionRule("height",t.staggerIndex,t.duration)),a.push(n.writeTransitionRule("margin",t.staggerIndex,t.duration))),!t.callback)return n.mixer.targetsImmovable++,void(n.mixer.targetsMoved===n.mixer.targetsImmovable&&n.mixer.cleanUp(t.operation));switch(n.operation=t.operation,n.callback=t.callback,!n.isExcluded&&n.mixer.targetsBound++,n.isBound=!0,n.applyTransition(a),o&&t.posOut.width>0&&t.posOut.height>0&&(n.dom.el.style.width=t.posOut.width+"px",n.dom.el.style.height=t.posOut.height+"px",n.dom.el.style.marginRight=t.posOut.marginRight+"px",n.dom.el.style.marginBottom=t.posOut.marginBottom+"px"),n.mixer.config.animation.nudge||"hide"!==t.statusChange||i.push("translate("+t.posOut.x+"px, "+t.posOut.y+"px)"),t.statusChange){case"hide":r&&(n.dom.el.style.opacity=n.mixer.effectsOut.opacity),i=i.concat(n.mixer.transformOut);break;case"show":r&&(n.dom.el.style.opacity=1)}(n.mixer.config.animation.nudge||!n.mixer.config.animation.nudge&&"hide"!==t.statusChange)&&i.push("translate("+t.posOut.x+"px, "+t.posOut.y+"px)"),n.dom.el.style[e.features.transformProp]=i.join(" "),n.callActions("afterApplyStylesOut",arguments)},writeTransitionRule:function(t,e,n){var a=this,i=a.getDelay(e),o="";return o=t+" "+(n>0?n:a.mixer.config.animation.duration)+"ms "+i+"ms "+("opacity"===t?"linear":a.mixer.config.animation.easing),a.callFilters("ruleWriteTransitionRule",o,arguments)},getDelay:function(t){var e=this,n=-1;return"function"==typeof e.mixer.config.animation.staggerSequence&&(t=e.mixer.config.animation.staggerSequence.call(e,t,e.state)),n=e.mixer.staggerDuration?t*e.mixer.staggerDuration:0,e.callFilters("delayGetDelay",n,arguments)},applyTransition:function(t){var n=this,a=t.join(", ");n.callActions("beforeApplyTransition",arguments),n.dom.el.style[e.features.transitionProp]=a,n.callActions("afterApplyTransition",arguments)},handleTransitionEnd:function(t){var e=this,n=t.propertyName,a=e.mixer.config.animation.animateResizeTargets;e.callActions("beforeHandleTransitionEnd",arguments),e.isBound&&t.target.matches(e.mixer.config.selectors.target)&&(n.indexOf("transform")>-1||n.indexOf("opacity")>-1||a&&n.indexOf("height")>-1||a&&n.indexOf("width")>-1||a&&n.indexOf("margin")>-1)&&(e.callback.call(e,e.operation),e.isBound=!1,e.callback=null,e.operation=null),e.callActions("afterHandleTransitionEnd",arguments)},eventBus:function(t){var e=this;switch(e.callActions("beforeEventBus",arguments),t.type){case"webkitTransitionEnd":case"transitionend":e.handleTransitionEnd(t)}e.callActions("afterEventBus",arguments)},unbindEvents:function(){var t=this;t.callActions("beforeUnbindEvents",arguments),n.off(t.dom.el,"webkitTransitionEnd",t.handler),n.off(t.dom.el,"transitionend",t.handler),t.callActions("afterUnbindEvents",arguments)},bindEvents:function(){var t=this,a="";t.callActions("beforeBindEvents",arguments),a="webkit"===e.features.transitionPrefix?"webkitTransitionEnd":"transitionend",t.handler=function(e){return t.eventBus(e)},n.on(t.dom.el,a,t.handler),t.callActions("afterBindEvents",arguments)},getPosData:function(n){var a=this,i={},o=null,r=new e.StyleData;return a.callActions("beforeGetPosData",arguments),r.x=a.dom.el.offsetLeft,r.y=a.dom.el.offsetTop,(a.mixer.config.animation.animateResizeTargets||n)&&(o=a.dom.el.getBoundingClientRect(),r.top=o.top,r.right=o.right,r.bottom=o.bottom,r.left=o.left,r.width=o.width,r.height=o.height),a.mixer.config.animation.animateResizeTargets&&(i=t.getComputedStyle(a.dom.el),r.marginBottom=parseFloat(i.marginBottom),r.marginRight=parseFloat(i.marginRight)),a.callFilters("posDataGetPosData",r,arguments)},cleanUp:function(){var t=this;t.callActions("beforeCleanUp",arguments),t.dom.el.style[e.features.transformProp]="",t.dom.el.style[e.features.transitionProp]="",t.dom.el.style.opacity="",t.mixer.config.animation.animateResizeTargets&&(t.dom.el.style.width="",t.dom.el.style.height="",t.dom.el.style.marginRight="",t.dom.el.style.marginBottom=""),t.callActions("afterCleanUp",arguments)}}),e.Collection=function(t){var e=null,a=-1;for(this.callActions("beforeConstruct"),a=0;e=t[a];a++)this[a]=e;this.length=t.length,this.callActions("afterConstruct"),n.freeze(this)},e.BaseStatic.call(e.Collection),e.Collection.prototype=Object.create(e.Base.prototype),n.extend(e.Collection.prototype,{constructor:e.Collection,mixitup:function(t){var a=this,i=null,o=Array.prototype.slice.call(arguments),r=[],s=-1;for(this.callActions("beforeMixitup"),o.shift(),s=0;i=a[s];s++)r.push(i[t].apply(i,o));return a.callFilters("promiseMixitup",n.all(r,e.libraries),arguments)}}),e.Operation=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.args=[],this.command=null,this.showPosData=[],this.toHidePosData=[],this.startState=null,this.newState=null,this.docState=null,this.willSort=!1,this.willChangeLayout=!1,this.hasEffect=!1,this.hasFailed=!1,this.triggerElement=null,this.show=[],this.hide=[],this.matching=[],this.toShow=[],this.toHide=[],this.toMove=[],this.toRemove=[],this.startOrder=[],this.newOrder=[],this.startSort=null,this.newSort=null,this.startFilter=null,this.newFilter=null,this.startDataset=null,this.newDataset=null,this.viewportDeltaX=0,this.viewportDeltaY=0,this.startX=0,this.startY=0,this.startHeight=0,this.startWidth=0,this.newX=0,this.newY=0,this.newHeight=0,this.newWidth=0,this.startContainerClassName="",this.startDisplay="",this.newContainerClassName="",this.newDisplay="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Operation),e.Operation.prototype=Object.create(e.Base.prototype),e.Operation.prototype.constructor=e.Operation,e.State=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.activeFilter=null,this.activeSort=null,this.activeContainerClassName="",this.container=null,this.targets=[],this.hide=[],this.show=[],this.matching=[],this.totalTargets=-1,this.totalShow=-1,this.totalHide=-1,this.totalMatching=-1,this.hasFailed=!1,this.triggerElement=null,this.activeDataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.State),e.State.prototype=Object.create(e.Base.prototype),e.State.prototype.constructor=e.State,e.UserInstruction=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.command={},this.animate=!1,this.callback=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.UserInstruction),e.UserInstruction.prototype=Object.create(e.Base.prototype),e.UserInstruction.prototype.constructor=e.UserInstruction,e.Messages=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.ERROR_FACTORY_INVALID_CONTAINER="[MixItUp] An invalid selector or element reference was passed to the mixitup factory function",this.ERROR_FACTORY_CONTAINER_NOT_FOUND="[MixItUp] The provided selector yielded no container element",this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS="[MixItUp] Invalid value for `animation.effects`",this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE="[MixItUp] Invalid value for `controls.scope`",this.ERROR_CONFIG_INVALID_PROPERTY='[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}',this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION='. Did you mean "${probableMatch}"?',this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET="[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`",this.ERROR_DATASET_INVALID_UID_KEY='[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items',this.ERROR_DATASET_DUPLICATE_UID='[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.',this.ERROR_INSERT_INVALID_ARGUMENTS="[MixItUp] Please provider either an index or a sibling and position to insert, not both",this.ERROR_INSERT_PREEXISTING_ELEMENT="[MixItUp] An element to be inserted already exists in the container",this.ERROR_FILTER_INVALID_ARGUMENTS="[MixItUp] Please provide either a selector or collection `.filter()`, not both",this.ERROR_DATASET_NOT_SET="[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`",this.ERROR_DATASET_PRERENDERED_MISMATCH="[MixItUp] `load.dataset` does not match pre-rendered targets",this.ERROR_DATASET_RENDERER_NOT_SET="[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`",this.WARNING_FACTORY_PREEXISTING_INSTANCE="[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.",this.WARNING_INSERT_NO_ELEMENTS="[MixItUp] WARNING: No valid elements were passed to `.insert()`",this.WARNING_REMOVE_NO_ELEMENTS="[MixItUp] WARNING: No valid elements were passed to `.remove()`",this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL="[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.",this.WARNING_GET_OPERATION_INSTANCE_BUSY="[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.",this.WARNING_NO_PROMISE_IMPLEMENTATION="[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.",this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES='[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output',this.callActions("afterConstruct"),this.compileTemplates(),n.seal(this)},e.BaseStatic.call(e.Messages),e.Messages.prototype=Object.create(e.Base.prototype),e.Messages.prototype.constructor=e.Messages,e.Messages.prototype.compileTemplates=function(){var t="",e="";for(t in this)"string"==typeof(e=this[t])&&(this[n.camelCase(t)]=n.template(e))},e.messages=new e.Messages,e.Facade=function(t){e.Base.call(this),this.callActions("beforeConstruct",arguments),this.configure=t.configure.bind(t),this.show=t.show.bind(t),this.hide=t.hide.bind(t),this.filter=t.filter.bind(t),this.toggleOn=t.toggleOn.bind(t),this.toggleOff=t.toggleOff.bind(t),this.sort=t.sort.bind(t),this.changeLayout=t.changeLayout.bind(t),this.multimix=t.multimix.bind(t),this.dataset=t.dataset.bind(t),this.tween=t.tween.bind(t),this.insert=t.insert.bind(t),this.insertBefore=t.insertBefore.bind(t),this.insertAfter=t.insertAfter.bind(t),this.prepend=t.prepend.bind(t),this.append=t.append.bind(t),this.remove=t.remove.bind(t),this.destroy=t.destroy.bind(t),this.forceRefresh=t.forceRefresh.bind(t),this.forceRender=t.forceRender.bind(t),this.isMixing=t.isMixing.bind(t),this.getOperation=t.getOperation.bind(t),this.getConfig=t.getConfig.bind(t),this.getState=t.getState.bind(t),this.callActions("afterConstruct",arguments),n.freeze(this),n.seal(this)},e.BaseStatic.call(e.Facade),e.Facade.prototype=Object.create(e.Base.prototype),e.Facade.prototype.constructor=e.Facade,"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof t.mixitup&&"function"==typeof t.mixitup||(t.mixitup=e),e.BaseStatic.call(e.constructor),e.NAME="mixitup",e.CORE_VERSION="3.2.1"}(window);;/*! Lity - v2.2.2 - 2017-07-17
* http://sorgalla.com/lity/
* Copyright (c) 2015-2017 Jan Sorgalla; Licensed MIT */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=b(a,require("jquery")):a.lity=b(a,a.jQuery||a.Zepto)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a){var b=B();return N&&a.length?(a.one(N,b.resolve),setTimeout(b.resolve,500)):b.resolve(),b.promise()}function d(a,c,d){if(1===arguments.length)return b.extend({},a);if("string"==typeof c){if(void 0===d)return void 0===a[c]?null:a[c];a[c]=d}else b.extend(a,c);return this}function e(a){for(var b,c=decodeURI(a.split("#")[0]).split("&"),d={},e=0,f=c.length;e<f;e++)c[e]&&(b=c[e].split("="),d[b[0]]=b[1]);return d}function f(a,c){return a+(a.indexOf("?")>-1?"&":"?")+b.param(c)}function g(a,b){var c=a.indexOf("#");return-1===c?b:(c>0&&(a=a.substr(c)),b+a)}function h(a){return b('<span class="lity-error"/>').append(a)}function i(a,c){var d=c.opener()&&c.opener().data("lity-desc")||"Image with no description",e=b('<img src="'+a+'" alt="'+d+'"/>'),f=B(),g=function(){f.reject(h("Failed loading image"))};return e.on("load",function(){if(0===this.naturalWidth)return g();f.resolve(e)}).on("error",g),f.promise()}function j(a,c){var d,e,f;try{d=b(a)}catch(a){return!1}return!!d.length&&(e=b('<i style="display:none !important"/>'),f=d.hasClass("lity-hide"),c.element().one("lity:remove",function(){e.before(d).remove(),f&&!d.closest(".lity-content").length&&d.addClass("lity-hide")}),d.removeClass("lity-hide").after(e))}function k(a){var c=J.exec(a);return!!c&&o(g(a,f("https://www.youtube"+(c[2]||"")+".com/embed/"+c[4],b.extend({autoplay:1},e(c[5]||"")))))}function l(a){var c=K.exec(a);return!!c&&o(g(a,f("https://player.vimeo.com/video/"+c[3],b.extend({autoplay:1},e(c[4]||"")))))}function m(a){var c=M.exec(a);return!!c&&(0!==a.indexOf("http")&&(a="https:"+a),o(g(a,f("https://www.facebook.com/plugins/video.php?href="+a,b.extend({autoplay:1},e(c[4]||""))))))}function n(a){var b=L.exec(a);return!!b&&o(g(a,f("https://www.google."+b[3]+"/maps?"+b[6],{output:b[6].indexOf("layer=c")>0?"svembed":"embed"})))}function o(a){return'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+a+'"/></div>'}function p(){return z.documentElement.clientHeight?z.documentElement.clientHeight:Math.round(A.height())}function q(a){var b=v();b&&(27===a.keyCode&&b.options("esc")&&b.close(),9===a.keyCode&&r(a,b))}function r(a,b){var c=b.element().find(G),d=c.index(z.activeElement);a.shiftKey&&d<=0?(c.get(c.length-1).focus(),a.preventDefault()):a.shiftKey||d!==c.length-1||(c.get(0).focus(),a.preventDefault())}function s(){b.each(D,function(a,b){b.resize()})}function t(a){1===D.unshift(a)&&(C.addClass("lity-active"),A.on({resize:s,keydown:q})),b("body > *").not(a.element()).addClass("lity-hidden").each(function(){var a=b(this);void 0===a.data(F)&&a.data(F,a.attr(E)||null)}).attr(E,"true")}function u(a){var c;a.element().attr(E,"true"),1===D.length&&(C.removeClass("lity-active"),A.off({resize:s,keydown:q})),D=b.grep(D,function(b){return a!==b}),c=D.length?D[0].element():b(".lity-hidden"),c.removeClass("lity-hidden").each(function(){var a=b(this),c=a.data(F);c?a.attr(E,c):a.removeAttr(E),a.removeData(F)})}function v(){return 0===D.length?null:D[0]}function w(a,c,d,e){var f,g="inline",h=b.extend({},d);return e&&h[e]?(f=h[e](a,c),g=e):(b.each(["inline","iframe"],function(a,b){delete h[b],h[b]=d[b]}),b.each(h,function(b,d){return!d||(!(!d.test||d.test(a,c))||(f=d(a,c),!1!==f?(g=b,!1):void 0))})),{handler:g,content:f||""}}function x(a,e,f,g){function h(a){k=b(a).css("max-height",p()+"px"),j.find(".lity-loader").each(function(){var a=b(this);c(a).always(function(){a.remove()})}),j.removeClass("lity-loading").find(".lity-content").empty().append(k),m=!0,k.trigger("lity:ready",[l])}var i,j,k,l=this,m=!1,n=!1;e=b.extend({},H,e),j=b(e.template),l.element=function(){return j},l.opener=function(){return f},l.options=b.proxy(d,l,e),l.handlers=b.proxy(d,l,e.handlers),l.resize=function(){m&&!n&&k.css("max-height",p()+"px").trigger("lity:resize",[l])},l.close=function(){if(m&&!n){n=!0,u(l);var a=B();if(g&&(z.activeElement===j[0]||b.contains(j[0],z.activeElement)))try{g.focus()}catch(a){}return k.trigger("lity:close",[l]),j.removeClass("lity-opened").addClass("lity-closed"),c(k.add(j)).always(function(){k.trigger("lity:remove",[l]),j.remove(),j=void 0,a.resolve()}),a.promise()}},i=w(a,l,e.handlers,e.handler),j.attr(E,"false").addClass("lity-loading lity-opened lity-"+i.handler).appendTo("body").focus().on("click","[data-lity-close]",function(a){b(a.target).is("[data-lity-close]")&&l.close()}).trigger("lity:open",[l]),t(l),b.when(i.content).always(h)}function y(a,c,d){a.preventDefault?(a.preventDefault(),d=b(this),a=d.data("lity-target")||d.attr("href")||d.attr("src")):d=b(d);var e=new x(a,b.extend({},d.data("lity-options")||d.data("lity"),c),d,z.activeElement);if(!a.preventDefault)return e}var z=a.document,A=b(a),B=b.Deferred,C=b("html"),D=[],E="aria-hidden",F="lity-"+E,G='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',H={esc:!0,handler:null,handlers:{image:i,inline:j,youtube:k,vimeo:l,googlemaps:n,facebookvideo:m,iframe:o},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'},I=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,J=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,K=/(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,L=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,M=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,N=function(){var a=z.createElement("div"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return b[c];return!1}();return i.test=function(a){return I.test(a)},y.version="2.2.2",y.options=b.proxy(d,y,H),y.handlers=b.proxy(d,y,H.handlers),y.current=v,b(z).on("click.lity","[data-lity]",y),y});;/*
 *  Remodal - v1.1.1
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&c.state!==u.CLOSED&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});;!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

;(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
				loading  : '<div id="fancybox-loading"><div></div></div>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : $('<div/>').text( element.data('fancybox-title') || element.attr('title') || '' ).html(),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (coming && false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (!coming) {
				return;
			}

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.originalEvent && e.originalEvent.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}

			F.trigger('onLoading');
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked && locked.length) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (obj) {
				if ($.isFunction( obj[event] )) {
					ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
				}

				if (ret === false) {
					return false;
				}

				if (obj.helpers) {
					$.each(obj.helpers, function (helper, opts) {
						if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
							F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
						}
					});
				}
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace(/\{href\}/g, href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {

				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play(true);
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			var parent;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			parent = F.coming ? F.coming.parent : opts.parent;

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( parent && parent.length ? parent : 'body' );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				this.el.removeClass('fancybox-lock');

				W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			if (obj.locked && !this.el.hasClass('fancybox-lock')) {
				if (this.fixPosition !== false) {
					$('*:not(object)').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');
				}

				this.el.addClass('fancybox-margin');

				this.scrollV = W.scrollTop();
				this.scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));
;/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
;(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = $.fancybox,
		format = function( url, rez, params ) {
			params = params || '';

			if ( $.type( params ) === "object" ) {
				params = $.param(params, true);
			}

			$.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});

			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : 1,
					autohide    : 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					enablejsapi : 1,
                    			ps: 'docs',
                    			controls: 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			},
			vimeo : {
				matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params  : {
					autoplay      : 1,
					hd            : 1,
					show_title    : 1,
					show_byline   : 1,
					show_portrait : 0,
					fullscreen    : 1
				},
				type : 'iframe',
				url  : '//player.vimeo.com/video/$1'
			},
			metacafe : {
				matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params  : {
					autoPlay : 'yes'
				},
				type : 'swf',
				url  : function( rez, params, obj ) {
					obj.swf.flashVars = 'playerVars=' + $.param( params, true );

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion : {
				matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
				params  : {
					additionalInfos : 0,
					autoStart : 1
				},
				type : 'swf',
				url  : '//www.dailymotion.com/swf/video/$1'
			},
			twitvid : {
				matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params  : {
					autoplay : 0
				},
				type : 'iframe',
				url  : '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic : {
				matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type : 'image',
				url  : '//twitpic.com/show/full/$1/'
			},
			instagram : {
				matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type : 'image',
				url  : '//$1/p/$2/media/?size=l'
			},
			google_maps : {
				matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type : 'iframe',
				url  : function( rez ) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[ what ];
					rez  = url.match( item.matcher );

					if (rez) {
						type   = item.type;
						params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

						url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));
