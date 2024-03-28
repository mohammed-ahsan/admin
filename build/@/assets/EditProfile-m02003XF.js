import{a as te,g as X,l as I,P as h,j as d,f as re,r as ne,A as oe,e as ae}from"./index-kaEKLpWB.js";import{u as ie}from"./useStaffSubmit-ooPo20qH.js";import{o as se}from"./index-KSgJsyo1.js";import{L as R}from"./LabelArea-0V6LeSph.js";import{U as le}from"./Uploader-cS0uZHKZ.js";import{I as F}from"./InputArea-6bVCC4zo.js";import{E as _}from"./index.esm-UHEZOc8y.js";import{S as ce}from"./SelectRole-QSyKg_jA.js";import"./Layout-XJLSbV9V.js";import"./iconBase-SdznC8D3.js";import"./useDispatch-bCGmUp1F.js";import"./toast-33DDocbW.js";import"./AdminServices-Qg-G-GcP.js";import"./tslib.es6-YYMLUA4o.js";import"./useAsync-9cJkpmkv.js";import"./index-B-QvMZsz.js";function ue(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var V=te(),fe=ue(V);function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pe(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var de=!!(typeof window<"u"&&window.document&&window.document.createElement);function me(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var c=[],i;function s(){i=t(c.map(function(u){return u.props})),l.canUseDOM?e(i):n&&(i=n(i))}var l=function(u){pe(p,u);function p(){return u.apply(this,arguments)||this}p.peek=function(){return i},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var E=i;return i=void 0,c=[],E};var m=p.prototype;return m.UNSAFE_componentWillMount=function(){c.push(this),s()},m.componentDidUpdate=function(){s()},m.componentWillUnmount=function(){var E=c.indexOf(this);c.splice(E,1),s()},m.render=function(){return fe.createElement(a,this.props)},p}(V.PureComponent);return $(l,"displayName","SideEffect("+r(a)+")"),$(l,"canUseDOM",de),l}}var Te=me;const he=X(Te);var ve=typeof Element<"u",ge=typeof Map=="function",Ee=typeof Set=="function",ye=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function M(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!M(t[r],e[r]))return!1;return!0}var a;if(ge&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!M(r.value[1],e.get(r.value[0])))return!1;return!0}if(Ee&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(ye&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(ve&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!M(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var Ae=function(e,n){try{return M(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const be=X(Ae);var P={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(f).map(function(t){return f[t]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Se=Object.keys(H).reduce(function(t,e){return t[H[e]]=e,t},{}),Ce=[f.NOSCRIPT,f.SCRIPT,f.STYLE],y="data-react-helmet",Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},xe=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},we=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},G=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Re=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},k=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},je=function(e){var n=x(e,f.TITLE),r=x(e,L.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=x(e,L.DEFAULT_TITLE);return n||o||void 0},Ne=function(e){return x(e,L.ON_CHANGE_CLIENT_STATE)||function(){}},D=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return g({},r,o)},{})},Ie=function(e,n){return n.filter(function(r){return typeof r[f.BASE]<"u"}).map(function(r){return r[f.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),c=0;c<a.length;c++){var i=a[c],s=i.toLowerCase();if(e.indexOf(s)!==-1&&o[s])return r.concat(o)}return r},[])},j=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&He("Helmet: "+e+' should be of type "Array". Instead found type "'+Pe(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,c){var i={};c.filter(function(m){for(var T=void 0,E=Object.keys(m),A=0;A<E.length;A++){var b=E[A],S=b.toLowerCase();n.indexOf(S)!==-1&&!(T===v.REL&&m[T].toLowerCase()==="canonical")&&!(S===v.REL&&m[S].toLowerCase()==="stylesheet")&&(T=S),n.indexOf(b)!==-1&&(b===v.INNER_HTML||b===v.CSS_TEXT||b===v.ITEM_PROP)&&(T=b)}if(!T||!m[T])return!1;var w=m[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][w]?!1:(i[T][w]=!0,!0)}).reverse().forEach(function(m){return a.push(m)});for(var s=Object.keys(i),l=0;l<s.length;l++){var u=s[l],p=se({},o[u],i[u]);o[u]=p}return a},[]).reverse()},x=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},Le=function(e){return{baseTag:Ie([v.HREF,v.TARGET],e),bodyAttributes:D(P.BODY,e),defer:x(e,L.DEFER),encode:x(e,L.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:D(P.HTML,e),linkTags:j(f.LINK,[v.REL,v.HREF],e),metaTags:j(f.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:j(f.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:Ne(e),scriptTags:j(f.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:j(f.STYLE,[v.CSS_TEXT],e),title:je(e),titleAttributes:D(P.TITLE,e)}},U=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){U(e)},0)}}(),W=function(e){return clearTimeout(e)},_e=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||U:global.requestAnimationFrame||U,Me=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||W:global.cancelAnimationFrame||W,He=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},N=null,Fe=function(e){N&&Me(N),e.defer?N=_e(function(){z(e,function(){N=null})}):(z(e),N=null)},z=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,p=e.styleTags,m=e.title,T=e.titleAttributes;B(f.BODY,o),B(f.HTML,a),De(m,T);var E={baseTag:O(f.BASE,r),linkTags:O(f.LINK,c),metaTags:O(f.META,i),noscriptTags:O(f.NOSCRIPT,s),scriptTags:O(f.SCRIPT,u),styleTags:O(f.STYLE,p)},A={},b={};Object.keys(E).forEach(function(S){var w=E[S],q=w.newTags,ee=w.oldTags;q.length&&(A[S]=q),ee.length&&(b[S]=E[S].oldTags)}),n&&n(),l(e,A,b)},Q=function(e){return Array.isArray(e)?e.join(""):e},De=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=Q(e)),B(f.TITLE,n)},B=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(y),a=o?o.split(","):[],c=[].concat(a),i=Object.keys(n),s=0;s<i.length;s++){var l=i[s],u=n[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),a.indexOf(l)===-1&&a.push(l);var p=c.indexOf(l);p!==-1&&c.splice(p,1)}for(var m=c.length-1;m>=0;m--)r.removeAttribute(c[m]);a.length===c.length?r.removeAttribute(y):r.getAttribute(y)!==i.join(",")&&r.setAttribute(y,i.join(","))}},O=function(e,n){var r=document.head||document.querySelector(f.HEAD),o=r.querySelectorAll(e+"["+y+"]"),a=Array.prototype.slice.call(o),c=[],i=void 0;return n&&n.length&&n.forEach(function(s){var l=document.createElement(e);for(var u in s)if(s.hasOwnProperty(u))if(u===v.INNER_HTML)l.innerHTML=s.innerHTML;else if(u===v.CSS_TEXT)l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText));else{var p=typeof s[u]>"u"?"":s[u];l.setAttribute(u,p)}l.setAttribute(y,"true"),a.some(function(m,T){return i=T,l.isEqualNode(m)})?a.splice(i,1):c.push(l)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),c.forEach(function(s){return r.appendChild(s)}),{oldTags:a,newTags:c}},J=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},ke=function(e,n,r,o){var a=J(r),c=Q(n);return a?"<"+e+" "+y+'="true" '+a+">"+k(c,o)+"</"+e+">":"<"+e+" "+y+'="true">'+k(c,o)+"</"+e+">"},Ue=function(e,n,r){return n.reduce(function(o,a){var c=Object.keys(a).filter(function(l){return!(l===v.INNER_HTML||l===v.CSS_TEXT)}).reduce(function(l,u){var p=typeof a[u]>"u"?u:u+'="'+k(a[u],r)+'"';return l?l+" "+p:p},""),i=a.innerHTML||a.cssText||"",s=Ce.indexOf(e)===-1;return o+"<"+e+" "+y+'="true" '+c+(s?"/>":">"+i+"</"+e+">")},"")},Z=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[H[o]||o]=e[o],r},n)},Be=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[Se[o]||o]=e[o],r},n)},Ye=function(e,n,r){var o,a=(o={key:n},o[y]=!0,o),c=Z(r,a);return[I.createElement(f.TITLE,c,n)]},qe=function(e,n){return n.map(function(r,o){var a,c=(a={key:o},a[y]=!0,a);return Object.keys(r).forEach(function(i){var s=H[i]||i;if(s===v.INNER_HTML||s===v.CSS_TEXT){var l=r.innerHTML||r.cssText;c.dangerouslySetInnerHTML={__html:l}}else c[s]=r[i]}),I.createElement(e,c)})},C=function(e,n,r){switch(e){case f.TITLE:return{toComponent:function(){return Ye(e,n.title,n.titleAttributes)},toString:function(){return ke(e,n.title,n.titleAttributes,r)}};case P.BODY:case P.HTML:return{toComponent:function(){return Z(n)},toString:function(){return J(n)}};default:return{toComponent:function(){return qe(e,n)},toString:function(){return Ue(e,n,r)}}}},K=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,p=e.title,m=p===void 0?"":p,T=e.titleAttributes;return{base:C(f.BASE,n,o),bodyAttributes:C(P.BODY,r,o),htmlAttributes:C(P.HTML,a,o),link:C(f.LINK,c,o),meta:C(f.META,i,o),noscript:C(f.NOSCRIPT,s,o),script:C(f.SCRIPT,l,o),style:C(f.STYLE,u,o),title:C(f.TITLE,{title:m,titleAttributes:T},o)}},$e=function(e){var n,r;return r=n=function(o){we(a,o);function a(){return Oe(this,a),Re(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!be(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,s){if(!s)return null;switch(i.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:s};case f.STYLE:return{cssText:s}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var s,l=i.child,u=i.arrayTypeChildren,p=i.newChildProps,m=i.nestedChildren;return g({},u,(s={},s[l.type]=[].concat(u[l.type]||[],[g({},p,this.mapNestedChildrenToProps(l,m))]),s))},a.prototype.mapObjectTypeChildren=function(i){var s,l,u=i.child,p=i.newProps,m=i.newChildProps,T=i.nestedChildren;switch(u.type){case f.TITLE:return g({},p,(s={},s[u.type]=T,s.titleAttributes=g({},m),s));case f.BODY:return g({},p,{bodyAttributes:g({},m)});case f.HTML:return g({},p,{htmlAttributes:g({},m)})}return g({},p,(l={},l[u.type]=g({},m),l))},a.prototype.mapArrayTypeChildrenToProps=function(i,s){var l=g({},s);return Object.keys(i).forEach(function(u){var p;l=g({},l,(p={},p[u]=i[u],p))}),l},a.prototype.warnOnInvalidChildren=function(i,s){return!0},a.prototype.mapChildrenToProps=function(i,s){var l=this,u={};return I.Children.forEach(i,function(p){if(!(!p||!p.props)){var m=p.props,T=m.children,E=G(m,["children"]),A=Be(E);switch(l.warnOnInvalidChildren(p,T),p.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:u=l.flattenArrayTypeChildren({child:p,arrayTypeChildren:u,newChildProps:A,nestedChildren:T});break;default:s=l.mapObjectTypeChildren({child:p,newProps:s,newChildProps:A,nestedChildren:T});break}}}),s=this.mapArrayTypeChildrenToProps(u,s),s},a.prototype.render=function(){var i=this.props,s=i.children,l=G(i,["children"]),u=g({},l);return s&&(u=this.mapChildrenToProps(s,u)),I.createElement(e,u)},xe(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(I.Component),n.propTypes={base:h.object,bodyAttributes:h.object,children:h.oneOfType([h.arrayOf(h.node),h.node]),defaultTitle:h.string,defer:h.bool,encodeSpecialCharacters:h.bool,htmlAttributes:h.object,link:h.arrayOf(h.object),meta:h.arrayOf(h.object),noscript:h.arrayOf(h.object),onChangeClientState:h.func,script:h.arrayOf(h.object),style:h.arrayOf(h.object),title:h.string,titleAttributes:h.object,titleTemplate:h.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=K({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},Ge=function(){return null},We=he(Le,Fe,K)(Ge),Y=$e(We);Y.renderStatic=Y.rewind;const ze=({title:t,description:e})=>d.jsxs(Y,{children:[d.jsxs("title",{children:[" ",t?` ${t} | Gigapixel : Point of Sale and E-Commerce Website all in one`:"Gigapixel : Point of Sale and E-Commerce Website all in one"]}),d.jsx("meta",{name:"description",content:e?` ${e} `:"Gigapixel : Point of Sale and E-Commerce Website all in one"})]}),ut=()=>{const{t}=re(),{state:{adminInfo:e}}=ne.useContext(oe),{register:n,handleSubmit:r,onSubmit:o,errors:a,imageUrl:c,setImageUrl:i}=ie(e._id);return d.jsxs(d.Fragment,{children:[d.jsxs(ze,{children:[" ",t("EditProfile")," "]}),d.jsx("div",{className:"container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg",children:d.jsxs("form",{onSubmit:r(o),children:[d.jsxs("div",{className:"p-6 flex-grow scrollbar-hide w-full max-h-full",children:[d.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[d.jsx(R,{label:t("ProfilePicture")}),d.jsx("div",{className:"col-span-8 sm:col-span-4",children:d.jsx(le,{imageUrl:c,setImageUrl:i,folder:"customer"})})]}),d.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[d.jsx(R,{label:t("ProfileName")}),d.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[d.jsx(F,{register:n,label:"Name",name:"name",type:"text",placeholder:"Your Name"}),d.jsx(_,{errorName:a.name})]})]}),d.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[d.jsx(R,{label:t("ProfileEmail")}),d.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[d.jsx(F,{register:n,label:"Email",name:"email",type:"text",placeholder:"Email"}),d.jsx(_,{errorName:a.email})]})]}),d.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[d.jsx(R,{label:t("ProfileContactNumber")}),d.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[d.jsx(F,{register:n,label:"Contact Number",name:"phone",type:"text",placeholder:"Contact Number"}),d.jsx(_,{errorName:a.phone})]})]}),d.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[d.jsx(R,{label:t("ProfileYourRole")}),d.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[d.jsx(ce,{register:n,label:"Role",name:"role"}),d.jsx(_,{errorName:a.role})]})]})]}),d.jsx("div",{className:"flex flex-row-reverse pr-6 pb-6",children:d.jsx(ae.Button,{type:"submit",className:"h-12 px-6",children:t("updateProfile")})})]})})]})};export{ut as default};
