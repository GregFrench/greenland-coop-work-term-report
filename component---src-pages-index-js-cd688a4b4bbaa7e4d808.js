(self.webpackChunkcast_coop_work_term_report=self.webpackChunkcast_coop_work_term_report||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!a(e[c[l]],i[c[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",s),d}}},5890:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return je}});var r,o,a,i,s=n(7294),l=n(5697),c=n.n(l),u=n(4839),d=n.n(u),p=n(2993),f=n.n(p),h=n(6494),m=n.n(h),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),A="cssText",T="href",E="http-equiv",I="innerHTML",k="itemprop",C="name",S="property",O="rel",B="src",P="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",x="defer",M="encodeSpecialCharacters",q="onChangeClientState",F="titleTemplate",D=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),R=[w.NOSCRIPT,w.SCRIPT,w.STYLE],N="data-react-helmet",Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=_(e,w.TITLE),n=_(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,L);return t||r||void 0},G=function(e){return _(e,q)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],l=s.toLowerCase();-1===t.indexOf(l)||n===O&&"canonical"===e[n].toLowerCase()||l===O&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==I&&s!==A&&s!==k||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var s=a[i],l=m()({},r[s],o[s]);r[s]=l}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;le(w.BODY,r),le(w.HTML,o),se(d,p);var f={baseTag:ce(w.BASE,n),linkTags:ce(w.LINK,a),metaTags:ce(w.META,i),noscriptTags:ce(w.NOSCRIPT,s),scriptTags:ce(w.SCRIPT,c),styleTags:ce(w.STYLE,u)},h={},m={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=f[e].oldTags)})),t&&t(),l(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(N),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(N):n.getAttribute(N)!==i.join(",")&&n.setAttribute(N,i.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===I)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(N,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[N]=!0,o=de(n,r),[s.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[N]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===I||n===A){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===I||e===A)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(g,n,r),htmlAttributes:pe(y,o,r),link:pe(w.LINK,a,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,s,r),script:pe(w.SCRIPT,l,r),style:pe(w.STYLE,c,r),title:pe(w.TITLE,{title:d,titleAttributes:p},r)}},he=d()((function(e){return{baseTag:K([T,P],e),bodyAttributes:J(g,e),defer:_(e,x),encode:_(e,M),htmlAttributes:J(y,e),linkTags:Z(w.LINK,[O,T],e),metaTags:Z(w.META,[C,v,E,S,k],e),noscriptTags:Z(w.NOSCRIPT,[I],e),onChangeClientState:G(e),scriptTags:Z(w.SCRIPT,[B,I],e),styleTags:Z(w.STYLE,[A],e),title:Y(e),titleAttributes:J(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),fe)((function(){return null})),me=(o=he,i=a=function(e){function t(){return H(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return W({},o,((t={})[r.type]=i,t.titleAttributes=W({},a),t));case w.BODY:return W({},o,{bodyAttributes:W({},a)});case w.HTML:return W({},o,{htmlAttributes:W({},a)})}return W({},o,((n={})[r.type]=W({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind;var ge=n.p+"static/cast-logo-82419bb8ab89996b84a6de35d8bb8d5e.jpg",ye=n.p+"static/jest-icon-37efbf74e1e0f8eb6ddb468b98d6f6e4.png",be=n.p+"static/react-icon-2c3be408b49f1b1be4bbfbbef73c3959.png",we=n.p+"static/communication-icon-ca03e9f848921327699614c486bdad56.png",ve=n.p+"static/postgres-icon-19f1ad4d8edf7fd0c63f3e485f5f4c00.png",Ae=n.p+"static/clean-code-icon-100b6bde0ff520c3df802f3b9338d062.png",Te={margin:"auto",width:"50%"},Ee={backgroundColor:"#eee",color:"#232129",paddingBottom:50,paddingTop:50,fontFamily:"-apple-system, Roboto, sans-serif, serif"},Ie={fontSize:"56px",marginTop:0,marginBottom:64,textAlign:"center"},ke={fontSize:"36px"},Ce={textAlign:"center"},Se={width:"50%"},Oe={paddingRight:"15px"},Be={maxHeight:"100px",maxWidth:"100px"},Pe={display:"flex"},je=function(){return s.createElement("main",{style:Ee},s.createElement(me,null,s.createElement("meta",{charSet:"utf-8"}),s.createElement("title",null,"Cast Co-op 2021 Work Term Report")),s.createElement("div",{style:Te},s.createElement("title",null,"Cast Co-op 2021 Work Term Report"),s.createElement("h1",{style:Ie},"Cast Co-op 2021 Work Term Report"),s.createElement("div",{style:Ce},s.createElement("img",{src:ge,style:Se,alt:"Cast Logo"})),s.createElement("h2",{style:ke},"Introduction"),s.createElement("p",null,"Hi, I'm Greg. I'm a Bachelor of Computing co-op student at the University of Guelph currently studying computer science. Over the past Summer and Fall of 2021, I've been working as a co-op student at a social media startup called Cast. The following contains a brief overview of my experience."),s.createElement("h2",{style:ke},"About Cast"),s.createElement("p",null,"Cast was a social media company founded in 2020 located in the heart of downtown Toronto. It was primarily a mobile application that ran on both Android and iOS. The app's main core concept was built around social voting that allowed people to share their opinions on various topics and have people vote on those topics anonymously. These topics could range anywhere from social issues to politics to sports and even dating. Whatever was on someone's mind, they could ask it and people around the world could vote on it. Since Cast was founded during the Covid-19 pandemic, the company was remote-first by default but had an office downtown Toronto where employees could meet, hang out, and discuss strategy. I ended up visiting the office twice. Once to meet with the engineering team to discuss preliminary plans for the development of Cast V2, a newer and sleeker version of the app, and another to meet with the entire team right before the official launch of V2 at the end of the summer. The company also held two early morning daily standups over Google Meet, one for the engineering team, and one for the marketing team. On top of that, there were also weekly one-on-one meetings with each member of the team, meaning that each person would meet with every other person on the team virtually at least one time per week. This allowed each team member to discuss in-depth details of what they were working on to keep everyone in the loop. Unfortunately, the company folded in November of 2021 due to budgetary reasons and concerns that the app was not growing as fast enough as the founders had hoped."),s.createElement("h2",{style:ke},"Job Description"),s.createElement("p",null,"I was originally hired on with the company to do software QA. This would entail both manually testing the app as well as writing automated unit tests. The job quickly transitioned into more of a software engineering role as I took on more and more software-related tasks on top of the testing work I was doing at the time. This entailed working on the frontend mobile application using React Native, working on the backend using Node.js in conjunction with both a Postgresql database as well as Google Firestore. Some of the projects I worked on at Cast include, but are not limited to, revamping user profiles for Cast V2, building out the re-cast feature for users to re-cast other peoples casts, building the expiring cast feature that enabled users to set a time on their casts when people are no longer allowed to vote, and building out admin dashboard tools for better reporting and analysis to improve user experience."),s.createElement("h2",{style:ke},"Goals"),s.createElement("p",null,"During my time at Cast, I developed 6 learning goals. Goals that I could strive for to help make me a better developer, and a better professional in the software industry. Here is a brief overview of those goals along with my progress in achieving them."),s.createElement("div",{style:Pe},s.createElement("div",{style:Oe},s.createElement("p",null,s.createElement("img",{src:ye,style:Be,alt:"Jest Icon"}))),s.createElement("div",null,s.createElement("p",null,s.createElement("strong",null,"Write automated unit tests that cover the entire Cast mobile application -")," the purpose of this goal was to improve my ability to write automated unit tests and gain more experience using frontend unit testing tools such as Jest and React Testing Library. While I wasn’t able to test the entire system due to my role switching more to a software engineering role, I was able to write automated tests for large parts of the application which helped to keep those components of the application consistent and bug-free."))),s.createElement("div",{style:Pe},s.createElement("div",{style:Oe},s.createElement("p",null,s.createElement("img",{src:be,style:Be,alt:"React Icon"}))),s.createElement("div",null,s.createElement("p",null,s.createElement("strong",null,"Achieve expertise in React -")," React is an incredibly valuable skill to know and since one of the core technologies used at Cast was React Native, I thought it would be worth my time to spend time digging deep into the core features of React to learn as much as possible about the technology. This would not only make me a valuable contributor to the engineering team at Cast but also any future company that I work with that uses React. Overall, I ended up seeing my React skills grow tremendously and was able to obtain a solid grasp of the core concepts. I now feel a lot more comfortable building out apps and features with it."))),s.createElement("div",{style:Pe},s.createElement("div",{style:Oe},s.createElement("p",null,s.createElement("img",{src:we,style:Be,alt:"Communication Icon"}))),s.createElement("div",null,s.createElement("p",null,s.createElement("strong",null,"Improve my communication skills -")," The purpose of this goal was to improve the way I communicate technical information to other people. When communicating technical concepts it’s very important to explain them in a way that the other person can understand based on their background and level of understanding. If the other person comes from a non-technical background, it’s important not to use too much unnecessary technical jargon that just ends up confusing them. It’s better to break something down into simpler terms that they can understand. This is certainly a skill that needs to be developed and one that I have felt develop throughout my time at Cast, both through the daily standups every morning, and my one-on-one meetings with coworkers."))),s.createElement("div",{style:Pe},s.createElement("div",{style:Oe},s.createElement("p",null,s.createElement("img",{src:ve,style:Be,alt:"Postgres Icon"}))),s.createElement("div",null,s.createElement("p",null,s.createElement("strong",null,"Improve my SQL query skills -")," This goal was intended to improve my ability to write SQL queries, both in terms of my ability to write high-quality queries in one-shot, but also make them very performant in how they execute when interacting with the database. For example, I went from having limited knowledge of how “join” queries work, to being able to write pretty advanced join queries by the end of my term. This allowed me to take queries that were being split up into chunks, combine them into a single query using joins, thus reducing the latency of the HTTP requests utilizing those requests, sometimes by an order of magnitude. I also learned a lot about how databases work under the hood to get a better understanding of what is going on when SQL queries are executed on a system."))),s.createElement("div",{style:Pe},s.createElement("div",{style:Oe},s.createElement("p",null,s.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAACj9JREFUeJzt3VuMXWUZh/FnZuwxBFsBLVIT1BpPQMFAFEWNiSiKnAQiHlIOQSEW5ZCoURMuDEFFiMELE/WCRCWgREBiJWgjVSFEsMKF8RAFgoIIEsAi0ALT8eKjHHbXemev47f29PklbxjWtGu/75r579nds/f3gSRJkiRJkiRJkiRJkiRJkqQ8pnI3MAGmgeOB44DVz/7/QvAksBn4LnBX5l40ofYEfgPMLeDaBpzZ1gXTrmMR8DvyfwP3VZ9o57JpV3Ee+b9p+6yHgRWtXLkFZCZ3AwN2ObAydxM9WgbcC9yWu5Eh8R/pxfYF7i44PgfMvuBj5vl43D9X9eOmf3+G4p8WV5OekJBCh1H8MOTrOZtq0WJgKzvP50+PEQvlKcu2vaTk+JO9dtGdp0gBGbWo70aGzoBIAQMiBQyIFDAgUsCASAEDIgUMiBQwIFLAgEgBAyIFDIgUMCBSwIBIAQMiBQyIFDAgUsCASAEDIgUMiBQwIFLAgEgBAyIFDIgUMCBSwIBIAQMiBQyIFDAgUsCASAEDIgXKlvnf1T1Vcnwvnt8iYKrkv9Hnxvlv0aZGRedu8vEMsLzgdrYVHJN2sg/59wzMUVe0cfEWEh9iFbsP+EvuJjK4IXcDmhxnkv8evc/6J2kjT2ks08BG8n/j9lFPA4e3c9m0K9kNuIr838Bd1n+AI9u6YAuN20CP563A0cBqutlbfinF2y/fA9zUwe0BPA5sBq4EtnR0G1IrVlF8735lzqbks1hSyIBIAQMiBQyIFDAgUsCASAEDIgUMiBQwIFLAgEgBAyIFhvxixY8B55De5jrkPtswQ3oh5KgnSK+2Xah2vJr4EuBHmXuZKMeQ/2XgVr/1QQZoqA+xTsvdgHp3au4Gigw1IC/N3YB6tzJ3A0WGGhBpECZtXaw7czfQkRlg34Lj/wMe6LeVXrw2dwPjmqSAzAJrcjfRkVXA/QXHNwAn9dxLH+ZyNzAuH2JJAQMiBQyIFDAgUsCASAEDIgUMiBQwIFLAgEgBAyIFDIgU6OK1WMtJb3h6O7AH9UL4poJj09Rb7XwOeAy4A/gJ7b/4byXwYeBgYAX13v24tOT4oVSfeQ54BLgNuBr4b41+InuTtmpYS9o/pa13e+5Hva/vduAh4GbgOuDJlvrpxDrSWyhzvzutrLYCF/L8TrVNTAGfI4Uv91xltQU4t4VZARYDF5F2ws09V1k9QHqr9iCdT/4LNG5toFlIpoDLBjDHuPWdBrNCCscvBjDHuPXFhvO27kjyX5SqdWGDeT8zgP6r1qcazHvJAPqvUtuB9zWYt3V/JP9FqVrbSI+nq1oOPDyA/qvWg8CSGvO+irTJZ+7+q9YdNWbdSRvPYq0F3tzCefq2mOJ9AedzBAN9//Q89qLeTrYnMllvrNthLcVP9lTSxuBrS45fAZwHPNPCbTR1CvCNguMH1jhX2d+5mPSP2Lka52zTNPAl4OyCzx0I/Kzi+crmPQe4vOK5urAI+BZwQsHnDgL+1G87O1tP8Y+4Y3M2NWJPinu8qsa5vllyrjph68rBFPdYdCcxn2tKzrWilU7bcQLFPa5veuI2HmJN8qqHdXp33snRuHd/ky4FDIgUMCBSwIBIAQMiBQyIFDAgUsCASAEDIgUMiBQwIFLAgEgBAyIFDIgUMCBSwIBIAQMiBQyIFDAgUsCASIE2AlK2zM2Q3uxf1kudJXqcN76NHNqc90XaWBerbPXwdaQVF59u4TaaOrXk+CM1zvVoyfFPktbG2l7jnG2apnyZ0TbnXQ/8sMb52rYYOLnkc3Xmbd0byb/MZN06o8a8HxpA33Xr/TXmPWsAfdet19eYtxObyX8xqtYTpAXlqlpCWmY/d/9V6z7qrWi/irRtRO7+q9atNWbtzHtIDy1yX5Qq9eUG8542gP6r1scbzPuVAfRfpWaBdzaYtxNnk//CjFtX0vwJiksHMMe4dVHDWWdIu3PlnmOc2k4LS4525WjgHvJfpLLaQtoVqq2nt09n2DtqPUhauLsNOxbFHvKOWneT9qppTRdP1S0iLbP/DtJj/JkObqOKOdIzbbeTVjZve8++ZaQvyiGkbRHqhG8ZxVuH3QXcWPFc20n7l9wKXE/7e/atAI4iLda9O/mf7p0l3UndBGxkGLsJqGWrKL5HrLOppVrkb9KlgAGRAgZEChgQKWBApEDup+gip5A2Ad2LYffZhmnSnKO20v7T0kMyR3qK9mLg+5l7mSjHk/+XTla/dTQDNNSHWCfnbkC9W5e7gSJDDcjuuRtQ74a0rfRzhhoQaRDaeEdhn/6au4GOzABrCo4/Bvyr5176MJg3Ms1nkgIyC7whdxMdWQXcX3D858BJPffSh7ncDYzLh1hSwIBIAQMiBQyIFDAgUsCASAEDIgUMiBQwIFLAgEgBAyIF+not1iuBE4G3MN5iY/sVHJsGrm3Yxzbg76QF5G5peK4XWgocC7wLeAXVF8tbUnL8MKrNPAv8G9gEXEeaty2HkRbIew3l/TZxAPPPOkd6h+UfgKsofv3aRFkEfA14ivzvWButTcCrW5jxONIrbnPPM1r3klZAbGoN8NsBzDNa24ALmKwX3L7IImAD+S9kVA+S9jepa/0AZohqO2ljn7r2Bx4awBxRXUv+5W1ruYD8F2+c+jNpl6Kq3kZaBzZ3//PV06SHtlUtA/42gP7HqfNrzJfVy5msTVfq7DT1qwH0PW5dX2O+zw6g73HrceBlNWbM5gzyX7Qq9euK861isjYMmgX2qDjjLQPou0qV7UPZSFf/wFlbcvzzwPc6us1x7Eu65185cvzAiuc5gOJn4m4gree1tWpjLVlGWl/qvSPHp0k931jhXEVfw4dJu4n9o1Z3zU2R7ny/WvC5ql/DrH5AccpX52zqWRsp7q2KsnW7zmqvzdrKNt08psI5ZkrOsbHVTutZTXFvl3VxY139onChr4Q4ifNV6Xmhzzc2f5MuBQyIFDAgUsCASAEDIgUMiBQwIFLAgEgBAyIFDIgUMCBSwIBIAQMiBQyIFDAgUsCASAEDIgUMiBQwIFKgq4BUXQRh0kzifFV6Xujzja2rgDxecvwo8i4I8BqKl7N5rOJ5yuY7nLT0Ti7LgSNKPldlxlmKly7an7R0Ui5TpEXCi1T9Gmb1afIvJFalbqo43z4D6LlKbSetdlnFrQPou0qdXnG+sXT1E+Qa0pqwk+LHFf/8fcDNXTTSkU2khbqrqHpNctoG/DR3E1VdQv57lXHqTuo9LHo3k7H86CxwaI35dgPuGUD/49SFNebLbglpqcvcFy+qR2m2ZOUXBjDDfHVug/kOAbYMYIaofknaamMiLQW+TboXy30hR+v3NNsbZId1pDVrc88zWg8BH21hvv2B2wcwz2g9A1xKN7tdPaevZ5ReR/piHQSs6PF2R20l7XmxgbTQ9FxL590d+AjpYdfe5NvQ5RnStmSbSP+GaOuZnSngA6Qt2NbQ8TdlYI70U38zcAXp4bEkSZIkSZIkSZIkSZIkSZKkBen/CDW2hABBHQMAAAAASUVORK5CYII=",style:Be,alt:"Data Structures and Algorithms Icon"}))),s.createElement("div",null,s.createElement("p",null,s.createElement("strong",null,"Continue to hone my data structures and algorithms skills -")," This was one of my favourites. One of my favourite aspects of programming is getting to work with algorithms and data structures. Throughout my term, I was able to work with many algorithms and data structures including but not limited to binary search, depth-first search, heaps, and hash tables. Being able to take theoretical concepts that I’ve learned in school and independently, and be able to apply those concepts to a real-world system to increase efficiency and make the overall system a lot faster was a great feeling and one that excites me going into the future."))),s.createElement("div",{style:Pe},s.createElement("div",{style:Oe},s.createElement("p",null,s.createElement("img",{src:Ae,style:Be,alt:"Clean COde Icon"}))),s.createElement("div",null,s.createElement("p",null,s.createElement("strong",null,"Improve my ability to write clean code -")," This goal was important as well. Being able to write clean, well-written code that is easy to understand is very important to me. This is also something that will be more and more important as I progress throughout my career. This includes being able to write code for other people and not just yourself so that other people can take your code, build upon it and refactor it. This is an invaluable skill to have and a skill I was able to improve upon during my term. Some examples include writing expressive variable names, writing concise functions that emphasized code-reuse throughout the application and using just the right amount of abstraction when writing components so that these same components could be used elsewhere in the application when the time arose. I look forward to continuing to improve this ability in the future."))),s.createElement("h2",{style:ke},"Conclusions"),s.createElement("p",null,"Working at a Cast was a wonderful opportunity to work with great people and great technology. Throughout my co-op term, I’ve been able to grow tremendously, both as a person and as a software developer. This is one co-op term that I will remember for a long time."),s.createElement("h2",{style:ke},"Acknowledgments"),s.createElement("p",null,"I would like to thank George Boutsalis, David Banwat, and Graydyn Young for originally hiring me on to the team and giving me the opportunity to work at Cast. I would also like to thank Chance Squires for helping to make me a better front-end developer, especially when it comes to React and React Native.")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cd688a4b4bbaa7e4d808.js.map