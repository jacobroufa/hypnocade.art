var Fe,v,ar,ae,cn,or,vt,Wt,yt,bt,ir,Te={},sr=[],ha=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Qe=Array.isArray;function B(e,t){for(var n in t)e[n]=t[n];return e}function cr(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function I(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Fe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return Se(e,i,r,a,null)}function Se(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:a??++ar,__i:-1,__u:0};return a==null&&v.vnode!=null&&v.vnode(o),o}function ga(){return{current:null}}function H(e){return e.children}function j(e,t){this.props=e,this.context=t}function me(e,t){if(t==null)return e.__?me(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?me(e):null}function lr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return lr(e)}}function xt(e){(!e.__d&&(e.__d=!0)&&ae.push(e)&&!Xe.__r++||cn!==v.debounceRendering)&&((cn=v.debounceRendering)||or)(Xe)}function Xe(){var e,t,n,r,a,o,i,s;for(ae.sort(vt);e=ae.shift();)e.__d&&(t=ae.length,r=void 0,o=(a=(n=e).__v).__e,i=[],s=[],n.__P&&((r=B({},a)).__v=a.__v+1,v.vnode&&v.vnode(r),Yt(n.__P,r,a,n.__n,n.__P.namespaceURI,32&a.__u?[o]:null,i,o??me(a),!!(32&a.__u),s),r.__v=a.__v,r.__.__k[r.__i]=r,dr(i,r,s),r.__e!=o&&lr(r)),ae.length>t&&ae.sort(vt));Xe.__r=0}function fr(e,t,n,r,a,o,i,s,c,l,u){var f,d,_,b,k,y=r&&r.__k||sr,h=t.length;for(n.__d=c,va(n,t,y),c=n.__d,f=0;f<h;f++)(_=n.__k[f])!=null&&(d=_.__i===-1?Te:y[_.__i]||Te,_.__i=f,Yt(e,_,d,a,o,i,s,c,l,u),b=_.__e,_.ref&&d.ref!=_.ref&&(d.ref&&Bt(d.ref,null,_),u.push(_.ref,_.__c||b,_)),k==null&&b!=null&&(k=b),65536&_.__u||d.__k===_.__k?c=ur(_,c,e):typeof _.type=="function"&&_.__d!==void 0?c=_.__d:b&&(c=b.nextSibling),_.__d=void 0,_.__u&=-196609);n.__d=c,n.__e=k}function va(e,t,n){var r,a,o,i,s,c=t.length,l=n.length,u=l,f=0;for(e.__k=[],r=0;r<c;r++)(a=t[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(i=r+f,(a=e.__k[r]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Se(null,a,null,null,null):Qe(a)?Se(H,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?Se(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,o=null,(s=a.__i=ya(a,n,i,u))!==-1&&(u--,(o=n[s])&&(o.__u|=131072)),o==null||o.__v===null?(s==-1&&f--,typeof a.type!="function"&&(a.__u|=65536)):s!==i&&(s==i-1?f--:s==i+1?f++:(s>i?f--:f++,a.__u|=65536))):a=e.__k[r]=null;if(u)for(r=0;r<l;r++)(o=n[r])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=me(o)),_r(o,o))}function ur(e,t,n){var r,a;if(typeof e.type=="function"){for(r=e.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=e,t=ur(r[a],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=me(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function U(e,t){return t=t||[],e==null||typeof e=="boolean"||(Qe(e)?e.some(function(n){U(n,t)}):t.push(e)),t}function ya(e,t,n,r){var a=e.key,o=e.type,i=n-1,s=n+1,c=t[n];if(c===null||c&&a==c.key&&o===c.type&&!(131072&c.__u))return n;if(r>(c!=null&&!(131072&c.__u)?1:0))for(;i>=0||s<t.length;){if(i>=0){if((c=t[i])&&!(131072&c.__u)&&a==c.key&&o===c.type)return i;i--}if(s<t.length){if((c=t[s])&&!(131072&c.__u)&&a==c.key&&o===c.type)return s;s++}}return-1}function ln(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ha.test(t)?n:n+"px"}function je(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ln(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ln(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=Wt,e.addEventListener(t,o?bt:yt,o)):e.removeEventListener(t,o?bt:yt,o);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function fn(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Wt++;else if(t.t<n.u)return;return n(v.event?v.event(t):t)}}}function Yt(e,t,n,r,a,o,i,s,c,l){var u,f,d,_,b,k,y,h,g,A,C,O,Y,q,K,N,T=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),o=[s=t.__e=n.__e]),(u=v.__b)&&u(t);e:if(typeof T=="function")try{if(h=t.props,g="prototype"in T&&T.prototype.render,A=(u=T.contextType)&&r[u.__c],C=u?A?A.props.value:u.__:r,n.__c?y=(f=t.__c=n.__c).__=f.__E:(g?t.__c=f=new T(h,C):(t.__c=f=new j(h,C),f.constructor=T,f.render=xa),A&&A.sub(f),f.props=h,f.state||(f.state={}),f.context=C,f.__n=r,d=f.__d=!0,f.__h=[],f._sb=[]),g&&f.__s==null&&(f.__s=f.state),g&&T.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=B({},f.__s)),B(f.__s,T.getDerivedStateFromProps(h,f.__s))),_=f.props,b=f.state,f.__v=t,d)g&&T.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),g&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(g&&T.getDerivedStateFromProps==null&&h!==_&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(h,C),!f.__e&&(f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(h,f.__s,C)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(f.props=h,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(ue){ue&&(ue.__=t)}),O=0;O<f._sb.length;O++)f.__h.push(f._sb[O]);f._sb=[],f.__h.length&&i.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(h,f.__s,C),g&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(_,b,k)})}if(f.context=C,f.props=h,f.__P=e,f.__e=!1,Y=v.__r,q=0,g){for(f.state=f.__s,f.__d=!1,Y&&Y(t),u=f.render(f.props,f.state,f.context),K=0;K<f._sb.length;K++)f.__h.push(f._sb[K]);f._sb=[]}else do f.__d=!1,Y&&Y(t),u=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++q<25);f.state=f.__s,f.getChildContext!=null&&(r=B(B({},r),f.getChildContext())),g&&!d&&f.getSnapshotBeforeUpdate!=null&&(k=f.getSnapshotBeforeUpdate(_,b)),fr(e,Qe(N=u!=null&&u.type===H&&u.key==null?u.props.children:u)?N:[N],t,n,r,a,o,i,s,c,l),f.base=t.__e,t.__u&=-161,f.__h.length&&i.push(f),y&&(f.__E=f.__=null)}catch(ue){if(t.__v=null,c||o!=null){for(t.__u|=c?160:128;s&&s.nodeType===8&&s.nextSibling;)s=s.nextSibling;o[o.indexOf(s)]=null,t.__e=s}else t.__e=n.__e,t.__k=n.__k;v.__e(ue,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ba(n.__e,t,n,r,a,o,i,c,l);(u=v.diffed)&&u(t)}function dr(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Bt(n[r],n[++r],n[++r]);v.__c&&v.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){v.__e(o,a.__v)}})}function ba(e,t,n,r,a,o,i,s,c){var l,u,f,d,_,b,k,y=n.props,h=t.props,g=t.type;if(g==="svg"?a="http://www.w3.org/2000/svg":g==="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((_=o[l])&&"setAttribute"in _==!!g&&(g?_.localName===g:_.nodeType===3)){e=_,o[l]=null;break}}if(e==null){if(g===null)return document.createTextNode(h);e=document.createElementNS(a,g,h.is&&h),s&&(v.__m&&v.__m(t,o),s=!1),o=null}if(g===null)y===h||s&&e.data===h||(e.data=h);else{if(o=o&&Fe.call(e.childNodes),y=n.props||Te,!s&&o!=null)for(y={},l=0;l<e.attributes.length;l++)y[(_=e.attributes[l]).name]=_.value;for(l in y)if(_=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")f=_;else if(!(l in h)){if(l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h)continue;je(e,l,null,_,a)}}for(l in h)_=h[l],l=="children"?d=_:l=="dangerouslySetInnerHTML"?u=_:l=="value"?b=_:l=="checked"?k=_:s&&typeof _!="function"||y[l]===_||je(e,l,_,y[l],a);if(u)s||f&&(u.__html===f.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(f&&(e.innerHTML=""),fr(e,Qe(d)?d:[d],t,n,r,g==="foreignObject"?"http://www.w3.org/1999/xhtml":a,o,i,o?o[0]:n.__k&&me(n,0),s,c),o!=null)for(l=o.length;l--;)cr(o[l]);s||(l="value",g==="progress"&&b==null?e.removeAttribute("value"):b!==void 0&&(b!==e[l]||g==="progress"&&!b||g==="option"&&b!==y[l])&&je(e,l,b,y[l],a),l="checked",k!==void 0&&k!==e[l]&&je(e,l,k,y[l],a))}return e}function Bt(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(a){v.__e(a,n)}}function _r(e,t,n){var r,a;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Bt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){v.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&_r(r[a],t,n||typeof e.type!="function");n||cr(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function xa(e,t,n){return this.constructor(e,n)}function he(e,t,n){var r,a,o,i;v.__&&v.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],Yt(t,e=(!r&&n||t).__k=I(H,null,[e]),a||Te,Te,t.namespaceURI,!r&&n?[n]:a?null:t.firstChild?Fe.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r,i),dr(o,e,i)}function Vt(e,t){he(e,t,Vt)}function kt(e,t,n){var r,a,o,i,s=B({},e.props);for(o in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?a=t[o]:s[o]=t[o]===void 0&&i!==void 0?i[o]:t[o];return arguments.length>2&&(s.children=arguments.length>3?Fe.call(arguments,2):n),Se(e.type,s,r||e.key,a||e.ref,null)}function Gt(e,t){var n={__c:t="__cC"+ir++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=new Set,(o={})[t]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){a=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.forEach(function(s){s.__e=!0,xt(s)})},this.sub=function(i){a.add(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){a&&a.delete(i),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Fe=sr.slice,v={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},ar=0,j.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=B({},this.state),typeof e=="function"&&(e=e(B({},n),this.props)),e&&B(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),xt(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),xt(this))},j.prototype.render=H,ae=[],or=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,vt=function(e,t){return e.__v.__b-t.__v.__b},Xe.__r=0,Wt=0,yt=fn(!1),bt=fn(!0),ir=0;var ka=0;function p(e,t,n,r,a,o){t||(t={});var i,s,c=t;"ref"in t&&(i=t.ref,delete t.ref);var l={type:e,props:c,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ka,__i:-1,__u:0,__source:a,__self:o};if(typeof e=="function"&&(i=e.defaultProps))for(s in i)c[s]===void 0&&(c[s]=i[s]);return v.vnode&&v.vnode(l),l}const wa={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ea={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},un=()=>{};let Xt={},pr={},mr=null,hr={mark:un,measure:un};try{typeof window<"u"&&(Xt=window),typeof document<"u"&&(pr=document),typeof MutationObserver<"u"&&(mr=MutationObserver),typeof performance<"u"&&(hr=performance)}catch{}const{userAgent:dn=""}=Xt.navigator||{},Q=Xt,E=pr,_n=mr,Ue=hr;Q.document;const X=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",gr=~dn.indexOf("MSIE")||~dn.indexOf("Trident/");var P="classic",vr="duotone",L="sharp",M="sharp-duotone",Aa=[P,vr,L,M],Pa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},pn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ca=["kit"],Sa=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Oa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Na={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ta={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Ia={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},La={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Ma={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Fa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},yr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Ra=["solid","regular","light","thin","duotone","brands"],br=[1,2,3,4,5,6,7,8,9,10],Da=br.concat([11,12,13,14,15,16,17,18,19,20]),Ee={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$a=[...Object.keys(La),...Ra,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ee.GROUP,Ee.SWAP_OPACITY,Ee.PRIMARY,Ee.SECONDARY].concat(br.map(e=>"".concat(e,"x"))).concat(Da.map(e=>"w-".concat(e))),za={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ja={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ua={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},mn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const V="___FONT_AWESOME___",wt=16,xr="fa",kr="svg-inline--fa",ce="data-fa-i2svg",Et="data-fa-pseudo-element",Ha="data-fa-pseudo-element-pending",qt="data-prefix",Kt="data-icon",hn="fontawesome-i2svg",Wa="async",Ya=["HTML","HEAD","STYLE","SCRIPT"],wr=(()=>{try{return!0}catch{return!1}})(),Er=[P,L,M];function Re(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[P]}})}const Ar={...yr};Ar[P]={...yr[P],...pn.kit,...pn["kit-duotone"]};const ie=Re(Ar),At={...Fa};At[P]={...At[P],...mn.kit,...mn["kit-duotone"]};const Ie=Re(At),Pt={...Ma};Pt[P]={...Pt[P],...Ua.kit};const se=Re(Pt),Ct={...Ia};Ct[P]={...Ct[P],...ja.kit};const Ba=Re(Ct),Va=Sa,Pr="fa-layers-text",Ga=Oa,Xa={...Pa};Re(Xa);const qa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct=Ee,ge=new Set;Object.keys(Ie[P]).map(ge.add.bind(ge));Object.keys(Ie[L]).map(ge.add.bind(ge));Object.keys(Ie[M]).map(ge.add.bind(ge));const Ka=[...Ca,...$a],Oe=Q.FontAwesomeConfig||{};function Za(e){var t=E.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ja(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}E&&typeof E.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=Ja(Za(n));a!=null&&(Oe[r]=a)});const Cr={styleDefault:"solid",familyDefault:"classic",cssPrefix:xr,replacementClass:kr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oe.familyPrefix&&(Oe.cssPrefix=Oe.familyPrefix);const ve={...Cr,...Oe};ve.autoReplaceSvg||(ve.observeMutations=!1);const m={};Object.keys(Cr).forEach(e=>{Object.defineProperty(m,e,{enumerable:!0,set:function(t){ve[e]=t,Ne.forEach(n=>n(m))},get:function(){return ve[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){ve.cssPrefix=e,Ne.forEach(t=>t(m))},get:function(){return ve.cssPrefix}});Q.FontAwesomeConfig=m;const Ne=[];function Qa(e){return Ne.push(e),()=>{Ne.splice(Ne.indexOf(e),1)}}const Z=wt,$={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eo(e){if(!e||!X)return;const t=E.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=E.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return E.head.insertBefore(t,r),e}const to="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Le(){let e=12,t="";for(;e-- >0;)t+=to[Math.random()*62|0];return t}function be(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Zt(e){return e.classList?be(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Sr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function no(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Sr(e[n]),'" '),"").trim()}function et(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Jt(e){return e.size!==$.size||e.x!==$.x||e.y!==$.y||e.rotate!==$.rotate||e.flipX||e.flipY}function ro(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function ao(e){let{transform:t,width:n=wt,height:r=wt,startCentered:a=!1}=e,o="";return a&&gr?o+="translate(".concat(t.x/Z-n/2,"em, ").concat(t.y/Z-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Z,"em), calc(-50% + ").concat(t.y/Z,"em)) "):o+="translate(".concat(t.x/Z,"em, ").concat(t.y/Z,"em) "),o+="scale(".concat(t.size/Z*(t.flipX?-1:1),", ").concat(t.size/Z*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var oo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Or(){const e=xr,t=kr,n=m.cssPrefix,r=m.replacementClass;let a=oo;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let gn=!1;function lt(){m.autoAddCss&&!gn&&(eo(Or()),gn=!0)}var io={mixout(){return{dom:{css:Or,insertCss:lt}}},hooks(){return{beforeDOMElementCreation(){lt()},beforeI2svg(){lt()}}}};const G=Q||{};G[V]||(G[V]={});G[V].styles||(G[V].styles={});G[V].hooks||(G[V].hooks={});G[V].shims||(G[V].shims=[]);var z=G[V];const Nr=[],Tr=function(){E.removeEventListener("DOMContentLoaded",Tr),qe=1,Nr.map(e=>e())};let qe=!1;X&&(qe=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),qe||E.addEventListener("DOMContentLoaded",Tr));function so(e){X&&(qe?setTimeout(e,0):Nr.push(e))}function De(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Sr(e):"<".concat(t," ").concat(no(n),">").concat(r.map(De).join(""),"</").concat(t,">")}function vn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ft=function(t,n,r,a){var o=Object.keys(t),i=o.length,s=n,c,l,u;for(r===void 0?(c=1,u=t[o[0]]):(c=0,u=r);c<i;c++)l=o[c],u=s(u,t[l],l,t);return u};function co(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function St(e){const t=co(e);return t.length===1?t[0].toString(16):null}function lo(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yn(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ot(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=yn(t);typeof z.hooks.addPack=="function"&&!r?z.hooks.addPack(e,yn(t)):z.styles[e]={...z.styles[e]||{},...a},e==="fas"&&Ot("fa",t)}const{styles:oe,shims:fo}=z,uo={[P]:Object.values(se[P]),[L]:Object.values(se[L]),[M]:Object.values(se[M])};let Qt=null,Ir={},Lr={},Mr={},Fr={},Rr={};const _o={[P]:Object.keys(ie[P]),[L]:Object.keys(ie[L]),[M]:Object.keys(ie[M])};function po(e){return~Ka.indexOf(e)}function mo(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!po(a)?a:null}const Dr=()=>{const e=r=>ft(oe,(a,o,i)=>(a[i]=ft(o,r,{}),a),{});Ir=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),Lr=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),Rr=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(s=>{r[s]=o}),r});const t="far"in oe||m.autoFetchSvg,n=ft(fo,(r,a)=>{const o=a[0];let i=a[1];const s=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:s}),r},{names:{},unicodes:{}});Mr=n.names,Fr=n.unicodes,Qt=tt(m.styleDefault,{family:m.familyDefault})};Qa(e=>{Qt=tt(e.styleDefault,{family:m.familyDefault})});Dr();function en(e,t){return(Ir[e]||{})[t]}function ho(e,t){return(Lr[e]||{})[t]}function J(e,t){return(Rr[e]||{})[t]}function $r(e){return Mr[e]||{prefix:null,iconName:null}}function go(e){const t=Fr[e],n=en("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return Qt}const tn=()=>({prefix:null,iconName:null,rest:[]});function tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=P}=t,r=ie[n][e],a=Ie[n][e]||Ie[n][r],o=e in z.styles?e:null;return a||o||null}const vo={[P]:Object.keys(se[P]),[L]:Object.keys(se[L]),[M]:Object.keys(se[M])};function nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[P]:"".concat(m.cssPrefix,"-").concat(P),[L]:"".concat(m.cssPrefix,"-").concat(L),[M]:"".concat(m.cssPrefix,"-").concat(M)};let a=null,o=P;const i=Aa.filter(c=>c!==vr);i.forEach(c=>{(e.includes(r[c])||e.some(l=>vo[c].includes(l)))&&(o=c)});const s=e.reduce((c,l)=>{const u=mo(m.cssPrefix,l);if(oe[l]?(l=uo[o].includes(l)?Ba[o][l]:l,a=l,c.prefix=l):_o[o].indexOf(l)>-1?(a=l,c.prefix=tt(l,{family:o})):u?c.iconName=u:l!==m.replacementClass&&!i.some(f=>l===r[f])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const f=a==="fa"?$r(c.iconName):{},d=J(c.prefix,c.iconName);f.prefix&&(a=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!oe.far&&oe.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},tn());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===L&&(oe.fass||m.autoFetchSvg)&&(s.prefix="fass",s.iconName=J(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===M&&(oe.fasds||m.autoFetchSvg)&&(s.prefix="fasds",s.iconName=J(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=ee()||"fas"),s}class yo{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...a[o]},Ot(o,a[o]);const i=se[P][o];i&&Ot(i,a[o]),Dr()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:s}=r[a],c=s[2];t[o]||(t[o]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[o][l]=s)}),t[o][i]=s}),t}}let bn=[],de={};const pe={},bo=Object.keys(pe);function xo(e,t){let{mixoutsTo:n}=t;return bn=e,de={},Object.keys(pe).forEach(r=>{bo.indexOf(r)===-1&&delete pe[r]}),bn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{de[i]||(de[i]=[]),de[i].push(o[i])})}r.provides&&r.provides(pe)}),n}function Nt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(de[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function le(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(de[e]||[]).forEach(o=>{o.apply(null,n)})}function te(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return pe[e]?pe[e].apply(null,t):void 0}function Tt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ee();if(t)return t=J(n,t)||t,vn(zr.definitions,n,t)||vn(z.styles,n,t)}const zr=new yo,ko=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,le("noAuto")},wo={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(le("beforeI2svg",e),te("pseudoElements2svg",e),te("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,so(()=>{Ao({autoReplaceSvgRoot:t}),le("watch",e)})}},Eo={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:J(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=tt(e[0]);return{prefix:n,iconName:J(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Va))){const t=nt(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ee(),iconName:J(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ee();return{prefix:t,iconName:J(t,e)||e}}}},F={noAuto:ko,config:m,dom:wo,parse:Eo,library:zr,findIconDefinition:Tt,toHtml:De},Ao=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=E}=e;(Object.keys(z.styles).length>0||m.autoFetchSvg)&&X&&m.autoReplaceSvg&&F.dom.i2svg({node:t})};function rt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>De(n))}}),Object.defineProperty(e,"node",{get:function(){if(!X)return;const n=E.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Po(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(Jt(i)&&n.found&&!r.found){const{width:s,height:c}=n,l={x:s/c/2,y:.5};a.style=et({...o,"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function Co(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:i},children:r}]}]}function nn(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:s,maskId:c,titleId:l,extra:u,watchable:f=!1}=e,{width:d,height:_}=n.found?n:t,b=r==="fak",k=[m.replacementClass,a?"".concat(m.cssPrefix,"-").concat(a):""].filter(O=>u.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(u.classes).join(" ");let y={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":a,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(_)}};const h=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/_*16*.0625,"em")}:{};f&&(y.attributes[ce]=""),s&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(l||Le())},children:[s]}),delete y.attributes.title);const g={...y,prefix:r,iconName:a,main:t,mask:n,maskId:c,transform:o,symbol:i,styles:{...h,...u.styles}},{children:A,attributes:C}=n.found&&t.found?te("generateAbstractMask",g)||{children:[],attributes:{}}:te("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=A,g.attributes=C,i?Co(g):Po(g)}function xn(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:s=!1}=e,c={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};s&&(c[ce]="");const l={...i.styles};Jt(a)&&(l.transform=ao({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const u=et(l);u.length>0&&(c.style=u);const f=[];return f.push({tag:"span",attributes:c,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function So(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=et(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:ut}=z;function It(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Oo={found:!1,width:512,height:512};function No(e,t){!wr&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lt(e,t){let n=t;return t==="fa"&&m.styleDefault!==null&&(t=ee()),new Promise((r,a)=>{if(n==="fa"){const o=$r(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ut[t]&&ut[t][e]){const o=ut[t][e];return r(It(o))}No(e,t),r({...Oo,icon:m.showMissingIcons&&e?te("missingIconAbstract")||{}:{}})})}const kn=()=>{},Mt=m.measurePerformance&&Ue&&Ue.mark&&Ue.measure?Ue:{mark:kn,measure:kn},Ae='FA "6.6.0"',To=e=>(Mt.mark("".concat(Ae," ").concat(e," begins")),()=>jr(e)),jr=e=>{Mt.mark("".concat(Ae," ").concat(e," ends")),Mt.measure("".concat(Ae," ").concat(e),"".concat(Ae," ").concat(e," begins"),"".concat(Ae," ").concat(e," ends"))};var rn={begin:To,end:jr};const Ye=()=>{};function wn(e){return typeof(e.getAttribute?e.getAttribute(ce):null)=="string"}function Io(e){const t=e.getAttribute?e.getAttribute(qt):null,n=e.getAttribute?e.getAttribute(Kt):null;return t&&n}function Lo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Mo(){return m.autoReplaceSvg===!0?Be.replace:Be[m.autoReplaceSvg]||Be.replace}function Fo(e){return E.createElementNS("http://www.w3.org/2000/svg",e)}function Ro(e){return E.createElement(e)}function Ur(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Fo:Ro}=t;if(typeof e=="string")return E.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Ur(o,{ceFn:n}))}),r}function Do(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Be={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ur(n),t)}),t.getAttribute(ce)===null&&m.keepOriginalSource){let n=E.createComment(Do(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Zt(t).indexOf(m.replacementClass))return Be.replace(e);const r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===m.replacementClass||s.match(r)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>De(o)).join(`
`);t.setAttribute(ce,""),t.innerHTML=a}};function En(e){e()}function Hr(e,t){const n=typeof t=="function"?t:Ye;if(e.length===0)n();else{let r=En;m.mutateApproach===Wa&&(r=Q.requestAnimationFrame||En),r(()=>{const a=Mo(),o=rn.begin("mutate");e.map(a),o(),n()})}}let an=!1;function Wr(){an=!0}function Ft(){an=!1}let Ke=null;function An(e){if(!_n||!m.observeMutations)return;const{treeCallback:t=Ye,nodeCallback:n=Ye,pseudoElementsCallback:r=Ye,observeMutationsRoot:a=E}=e;Ke=new _n(o=>{if(an)return;const i=ee();be(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!wn(s.addedNodes[0])&&(m.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&m.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&wn(s.target)&&~qa.indexOf(s.attributeName))if(s.attributeName==="class"&&Io(s.target)){const{prefix:c,iconName:l}=nt(Zt(s.target));s.target.setAttribute(qt,c||i),l&&s.target.setAttribute(Kt,l)}else Lo(s.target)&&n(s.target)})}),X&&Ke.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function $o(){Ke&&Ke.disconnect()}function zo(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function jo(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=nt(Zt(e));return a.prefix||(a.prefix=ee()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ho(a.prefix,e.innerText)||en(a.prefix,St(e.innerText))),!a.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Uo(e){const t=be(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||Le()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ho(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=jo(e),o=Uo(e),i=Nt("parseNodeAttributes",{},e);let s=t.styleParser?zo(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:$,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o},...i}}const{styles:Wo}=z;function Yr(e){const t=m.autoReplaceSvg==="nest"?Pn(e,{styleParser:!1}):Pn(e);return~t.extra.classes.indexOf(Pr)?te("generateLayersText",e,t):te("generateSvgReplacementMutation",e,t)}let W=new Set;Er.map(e=>{W.add("fa-".concat(e))});Object.keys(ie[P]).map(W.add.bind(W));Object.keys(ie[L]).map(W.add.bind(W));Object.keys(ie[M]).map(W.add.bind(W));W=[...W];function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();const n=E.documentElement.classList,r=u=>n.add("".concat(hn,"-").concat(u)),a=u=>n.remove("".concat(hn,"-").concat(u)),o=m.autoFetchSvg?W:Er.map(u=>"fa-".concat(u)).concat(Object.keys(Wo));o.includes("fa")||o.push("fa");const i=[".".concat(Pr,":not([").concat(ce,"])")].concat(o.map(u=>".".concat(u,":not([").concat(ce,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=be(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const c=rn.begin("onTree"),l=s.reduce((u,f)=>{try{const d=Yr(f);d&&u.push(d)}catch(d){wr||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(l).then(d=>{Hr(d,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(d=>{c(),f(d)})})}function Yo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yr(e).then(n=>{n&&Hr([n],t)})}function Bo(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Tt(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Tt(a||{})),e(r,{...n,mask:a})}}const Vo=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=$,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;const{prefix:f,iconName:d,icon:_}=e;return rt({type:"icon",...e},()=>(le("beforeDOMElementCreation",{iconDefinition:e,params:t}),m.autoA11y&&(i?l["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(s||Le()):(l["aria-hidden"]="true",l.focusable="false")),nn({icons:{main:It(_),mask:a?It(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...$,...n},symbol:r,title:i,maskId:o,titleId:s,extra:{attributes:l,styles:u,classes:c}})))};var Go={mixout(){return{icon:Bo(Vo)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Cn,e.nodeCallback=Yo,e}}},provides(e){e.i2svg=function(t){const{node:n=E,callback:r=()=>{}}=t;return Cn(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:s,symbol:c,mask:l,maskId:u,extra:f}=n;return new Promise((d,_)=>{Promise.all([Lt(r,i),l.iconName?Lt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[k,y]=b;d([t,nn({icons:{main:k,mask:y},prefix:i,iconName:r,transform:s,symbol:c,maskId:u,title:a,titleId:o,extra:f,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const s=et(i);s.length>0&&(r.style=s);let c;return Jt(o)&&(c=te("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},Xo={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return rt({type:"layer"},()=>{le("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},qo={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return rt({type:"counter",content:e},()=>(le("beforeDOMElementCreation",{content:e,params:t}),So({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(m.cssPrefix,"-layers-counter"),...r]}})))}}}},Ko={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=$,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return rt({type:"text",content:e},()=>(le("beforeDOMElementCreation",{content:e,params:t}),xn({content:e,transform:{...$,...n},title:r,extra:{attributes:o,styles:i,classes:["".concat(m.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,s=null;if(gr){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();i=l.width/c,s=l.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,xn({content:t.innerHTML,width:i,height:s,transform:a,title:r,extra:o,watchable:!0})])}}};const Zo=new RegExp('"',"ug"),Sn=[1105920,1112319],On={FontAwesome:{normal:"fas",400:"fas"},...Ta,...Na,...za},Rt=Object.keys(On).reduce((e,t)=>(e[t.toLowerCase()]=On[t],e),{}),Jo=Object.keys(Rt).reduce((e,t)=>{const n=Rt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Qo(e){const t=e.replace(Zo,""),n=lo(t,0),r=n>=Sn[0]&&n<=Sn[1],a=t.length===2?t[0]===t[1]:!1;return{value:St(a?t[0]:t),isSecondary:r||a}}function ei(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Rt[n]||{})[a]||Jo[n]}function Nn(e,t){const n="".concat(Ha).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=be(e.children).filter(d=>d.getAttribute(Et)===t)[0],s=Q.getComputedStyle(e,t),c=s.getPropertyValue("font-family"),l=c.match(Ga),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),r();if(l&&f!=="none"&&f!==""){const d=s.getPropertyValue("content");let _=ei(c,u);const{value:b,isSecondary:k}=Qo(d),y=l[0].startsWith("FontAwesome");let h=en(_,b),g=h;if(y){const A=go(b);A.iconName&&A.prefix&&(h=A.iconName,_=A.prefix)}if(h&&!k&&(!i||i.getAttribute(qt)!==_||i.getAttribute(Kt)!==g)){e.setAttribute(n,g),i&&e.removeChild(i);const A=Ho(),{extra:C}=A;C.attributes[Et]=t,Lt(h,_).then(O=>{const Y=nn({...A,icons:{main:O,mask:tn()},prefix:_,iconName:g,extra:C,watchable:!0}),q=E.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=Y.map(K=>De(K)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ti(e){return Promise.all([Nn(e,"::before"),Nn(e,"::after")])}function ni(e){return e.parentNode!==document.head&&!~Ya.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Et)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Tn(e){if(X)return new Promise((t,n)=>{const r=be(e.querySelectorAll("*")).filter(ni).map(ti),a=rn.begin("searchPseudoElements");Wr(),Promise.all(r).then(()=>{a(),Ft(),t()}).catch(()=>{a(),Ft(),n()})})}var ri={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Tn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=E}=t;m.searchPseudoElements&&Tn(n)}}};let In=!1;var ai={mixout(){return{dom:{unwatch(){Wr(),In=!0}}}},hooks(){return{bootstrap(){An(Nt("mutationObserverCallbacks",{}))},noAuto(){$o()},watch(e){const{observeMutationsRoot:t}=e;In?Ft():An(Nt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Ln=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var oi={mixout(){return{parse:{transform:e=>Ln(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Ln(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(l)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:i,inner:u,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const dt={x:0,y:0,width:"100%",height:"100%"};function Mn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ii(e){return e.tag==="g"?e.children:[e]}var si={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?nt(n.split(" ").map(a=>a.trim())):tn();return r.prefix||(r.prefix=ee()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:s}=t;const{width:c,icon:l}=a,{width:u,icon:f}=o,d=ro({transform:s,containerWidth:u,iconWidth:c}),_={tag:"rect",attributes:{...dt,fill:"white"}},b=l.children?{children:l.children.map(Mn)}:{},k={tag:"g",attributes:{...d.inner},children:[Mn({tag:l.tag,attributes:{...l.attributes,...d.path},...b})]},y={tag:"g",attributes:{...d.outer},children:[k]},h="mask-".concat(i||Le()),g="clip-".concat(i||Le()),A={tag:"mask",attributes:{...dt,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[_,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:ii(f)},A]};return n.push(C,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")"),...dt}}),{children:n,attributes:r}}}},ci={provides(e){let t=!1;Q.matchMedia&&(t=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},li={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},fi=[io,Go,Xo,qo,Ko,ri,ai,oi,si,ci,li];xo(fi,{mixoutsTo:F});F.noAuto;F.config;F.library;F.dom;const Dt=F.parse;F.findIconDefinition;F.toHtml;const ui=F.icon;F.layer;F.text;F.counter;function di(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Br={exports:{}},_i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pi=_i,mi=pi;function Vr(){}function Gr(){}Gr.resetWarningCache=Vr;var hi=function(){function e(r,a,o,i,s,c){if(c!==mi){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gr,resetWarningCache:Vr};return n.PropTypes=n,n};Br.exports=hi();var gi=Br.exports;const x=di(gi);var ne,w,_t,Fn,ye=0,Xr=[],S=v,Rn=S.__b,Dn=S.__r,$n=S.diffed,zn=S.__c,jn=S.unmount,Un=S.__;function xe(e,t){S.__h&&S.__h(w,e,ye||t),ye=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function at(e){return ye=1,$e(Qr,e)}function $e(e,t,n){var r=xe(ne++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Qr(void 0,t),function(s){var c=r.__N?r.__N[0]:r.__[0],l=r.t(c,s);c!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var a=function(s,c,l){if(!r.__c.__H)return!0;var u=r.__c.__H.__.filter(function(d){return!!d.__c});if(u.every(function(d){return!d.__N}))return!o||o.call(this,s,c,l);var f=!1;return u.forEach(function(d){if(d.__N){var _=d.__[0];d.__=d.__N,d.__N=void 0,_!==d.__[0]&&(f=!0)}}),!(!f&&r.__c.props===s)&&(!o||o.call(this,s,c,l))};w.u=!0;var o=w.shouldComponentUpdate,i=w.componentWillUpdate;w.componentWillUpdate=function(s,c,l){if(this.__e){var u=o;o=void 0,a(s,c,l),o=u}i&&i.call(this,s,c,l)},w.shouldComponentUpdate=a}return r.__N||r.__}function ot(e,t){var n=xe(ne++,3);!S.__s&&on(n.__H,t)&&(n.__=e,n.i=t,w.__H.__h.push(n))}function fe(e,t){var n=xe(ne++,4);!S.__s&&on(n.__H,t)&&(n.__=e,n.i=t,w.__h.push(n))}function R(e){return ye=5,ke(function(){return{current:e}},[])}function qr(e,t,n){ye=6,fe(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function ke(e,t){var n=xe(ne++,7);return on(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Kr(e,t){return ye=8,ke(function(){return e},t)}function it(e){var t=w.context[e.__c],n=xe(ne++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(w)),t.props.value):e.__}function Zr(e,t){S.useDebugValue&&S.useDebugValue(t?t(e):e)}function Jr(){var e=xe(ne++,11);if(!e.__){for(var t=w.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function vi(){for(var e;e=Xr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ve),e.__H.__h.forEach($t),e.__H.__h=[]}catch(t){e.__H.__h=[],S.__e(t,e.__v)}}S.__b=function(e){w=null,Rn&&Rn(e)},S.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Un&&Un(e,t)},S.__r=function(e){Dn&&Dn(e),ne=0;var t=(w=e.__c).__H;t&&(_t===w?(t.__h=[],w.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(Ve),t.__h.forEach($t),t.__h=[],ne=0)),_t=w},S.diffed=function(e){$n&&$n(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Xr.push(t)!==1&&Fn===S.requestAnimationFrame||((Fn=S.requestAnimationFrame)||yi)(vi)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),_t=w=null},S.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ve),n.__h=n.__h.filter(function(r){return!r.__||$t(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],S.__e(r,n.__v)}}),zn&&zn(e,t)},S.unmount=function(e){jn&&jn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Ve(r)}catch(a){t=a}}),n.__H=void 0,t&&S.__e(t,n.__v))};var Hn=typeof requestAnimationFrame=="function";function yi(e){var t,n=function(){clearTimeout(r),Hn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Hn&&(t=requestAnimationFrame(n))}function Ve(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function $t(e){var t=w;e.__c=e.__(),w=t}function on(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Qr(e,t){return typeof t=="function"?t(e):t}function zt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function jt(e,t){this.props=e,this.context=t}function bi(e,t){function n(a){var o=this.props.ref,i=o==a.ref;return!i&&o&&(o.call?o(null):o.current=null),t?!t(this.props,a)||!i:zt(this.props,a)}function r(a){return this.shouldComponentUpdate=n,I(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(jt.prototype=new j).isPureReactComponent=!0,jt.prototype.shouldComponentUpdate=function(e,t){return zt(this.props,e)||zt(this.state,t)};var Wn=v.__b;v.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Wn&&Wn(e)};var xi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ki(e){function t(n){if(!("ref"in n))return e(n,null);var r=n.ref;delete n.ref;var a=e(n,r);return n.ref=r,a}return t.$$typeof=xi,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Yn=function(e,t){return e==null?null:U(U(e).map(t))},wi={map:Yn,forEach:Yn,count:function(e){return e?U(e).length:0},only:function(e){var t=U(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:U},Ei=v.__e;v.__e=function(e,t,n,r){if(e.then){for(var a,o=t;o=o.__;)if((a=o.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}Ei(e,t,n,r)};var Bn=v.unmount;function ea(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=function(r,a){for(var o in a)r[o]=a[o];return r}({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return ea(r,t,n)})),e}function ta(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return ta(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Ge(){this.__u=0,this.t=null,this.__b=null}function na(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Ai(e){var t,n,r;function a(o){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return I(n,o)}return a.displayName="Lazy",a.__f=!0,a}function Pe(){this.u=null,this.o=null}v.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Bn&&Bn(e)},(Ge.prototype=new j).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var a=na(r.__v),o=!1,i=function(){o||(o=!0,n.__R=null,a?a(s):s())};n.__R=i;var s=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=ta(c,c.__c.__P,c.__c.__O)}var l;for(r.setState({__a:r.__b=null});l=r.t.pop();)l.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},Ge.prototype.componentWillUnmount=function(){this.t=[]},Ge.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ea(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__a&&I(H,null,e.fallback);return a&&(a.__u&=-33),[I(H,null,t.__a?null:e.children),a]};var Vn=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Pi(e){return this.getChildContext=function(){return e.context},e.children}function Ci(e){var t=this,n=e.i;t.componentWillUnmount=function(){he(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),he(I(Pi,{context:t.context},e.__v),t.l)}function Si(e,t){var n=I(Ci,{__v:e,i:t});return n.containerInfo=t,n}(Pe.prototype=new j).__a=function(e){var t=this,n=na(t.__v),r=t.o.get(e);return r[0]++,function(a){var o=function(){t.props.revealOrder?(r.push(a),Vn(t,e,r)):a()};n?n(o):o()}},Pe.prototype.render=function(e){this.u=null,this.o=new Map;var t=U(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Pe.prototype.componentDidUpdate=Pe.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Vn(e,n,t)})};var ra=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Oi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ni=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ti=/[A-Z0-9]/g,Ii=typeof document<"u",Li=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Mi(e,t,n){return t.__k==null&&(t.textContent=""),he(e,t),typeof n=="function"&&n(),e?e.__c:null}function Fi(e,t,n){return Vt(e,t),typeof n=="function"&&n(),e?e.__c:null}j.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(j.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Gn=v.event;function Ri(){}function Di(){return this.cancelBubble}function $i(){return this.defaultPrevented}v.event=function(e){return Gn&&(e=Gn(e)),e.persist=Ri,e.isPropagationStopped=Di,e.isDefaultPrevented=$i,e.nativeEvent=e};var sn,zi={enumerable:!1,configurable:!0,get:function(){return this.class}},Xn=v.vnode;v.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,a={},o=r.indexOf("-")===-1;for(var i in n){var s=n[i];if(!(i==="value"&&"defaultValue"in n&&s==null||Ii&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var c=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&s===!0?s="":c==="translate"&&s==="no"?s=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?i="ondblclick":c!=="onchange"||r!=="input"&&r!=="textarea"||Li(n.type)?c==="onfocus"?i="onfocusin":c==="onblur"?i="onfocusout":Ni.test(i)&&(i=c):c=i="oninput":o&&Oi.test(i)?i=i.replace(Ti,"-$&").toLowerCase():s===null&&(s=void 0),c==="oninput"&&a[i=c]&&(i="oninputCapture"),a[i]=s}}r=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=U(n.children).forEach(function(l){l.props.selected=a.value.indexOf(l.props.value)!=-1})),r=="select"&&a.defaultValue!=null&&(a.value=U(n.children).forEach(function(l){l.props.selected=a.multiple?a.defaultValue.indexOf(l.props.value)!=-1:a.defaultValue==l.props.value})),n.class&&!n.className?(a.class=n.class,Object.defineProperty(a,"className",zi)):(n.className&&!n.class||n.class&&n.className)&&(a.class=a.className=n.className),t.props=a}(e),e.$$typeof=ra,Xn&&Xn(e)};var qn=v.__r;v.__r=function(e){qn&&qn(e),sn=e.__c};var Kn=v.diffed;v.diffed=function(e){Kn&&Kn(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),sn=null};var ji={ReactCurrentDispatcher:{current:{readContext:function(e){return sn.__n[e.__c].props.value},useCallback:Kr,useContext:it,useDebugValue:Zr,useDeferredValue:oa,useEffect:ot,useId:Jr,useImperativeHandle:qr,useInsertionEffect:sa,useLayoutEffect:fe,useMemo:ke,useReducer:$e,useRef:R,useState:at,useSyncExternalStore:ca,useTransition:ia}}};function Ui(e){return I.bind(null,e)}function st(e){return!!e&&e.$$typeof===ra}function Hi(e){return st(e)&&e.type===H}function Wi(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function Yi(e){return st(e)?kt.apply(null,arguments):e}function Bi(e){return!!e.__k&&(he(null,e),!0)}function Vi(e){return e&&(e.base||e.nodeType===1&&e)||null}var Gi=function(e,t){return e(t)},Xi=function(e,t){return e(t)},qi=H;function aa(e){e()}function oa(e){return e}function ia(){return[!1,aa]}var sa=fe,Ki=st;function ca(e,t){var n=t(),r=at({h:{__:n,v:t}}),a=r[0].h,o=r[1];return fe(function(){a.__=n,a.v=t,pt(a)&&o({h:a})},[e,n,t]),ot(function(){return pt(a)&&o({h:a}),e(function(){pt(a)&&o({h:a})})},[e]),n}function pt(e){var t,n,r=e.v,a=e.__;try{var o=r();return!((t=a)===(n=o)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var la={useState:at,useId:Jr,useReducer:$e,useEffect:ot,useLayoutEffect:fe,useInsertionEffect:sa,useTransition:ia,useDeferredValue:oa,useSyncExternalStore:ca,startTransition:aa,useRef:R,useImperativeHandle:qr,useMemo:ke,useCallback:Kr,useContext:it,useDebugValue:Zr,version:"18.3.1",Children:wi,render:Mi,hydrate:Fi,unmountComponentAtNode:Bi,createPortal:Si,createElement:I,createContext:Gt,createFactory:Ui,cloneElement:Yi,createRef:ga,Fragment:H,isValidElement:st,isElement:Ki,isFragment:Hi,isMemo:Wi,findDOMNode:Vi,Component:j,PureComponent:jt,memo:bi,forwardRef:ki,flushSync:Xi,unstable_batchedUpdates:Gi,StrictMode:qi,Suspense:Ge,SuspenseList:Pe,lazy:Ai,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ji};function Zn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zn(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ze(e){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ze(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zi(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ji(e,t){if(e==null)return{};var n=Zi(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ut(e){return Qi(e)||es(e)||ts(e)||ns()}function Qi(e){if(Array.isArray(e))return Ht(e)}function es(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ts(e,t){if(e){if(typeof e=="string")return Ht(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ht(e,t)}}function Ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ns(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rs(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,f=e.pulse,d=e.fixedWidth,_=e.inverse,b=e.border,k=e.listItem,y=e.flip,h=e.size,g=e.rotation,A=e.pull,C=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":f,"fa-fw":d,"fa-inverse":_,"fa-border":b,"fa-li":k,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},_e(t,"fa-".concat(h),typeof h<"u"&&h!==null),_e(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),_e(t,"fa-pull-".concat(A),typeof A<"u"&&A!==null),_e(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map(function(O){return C[O]?O:null}).filter(function(O){return O})}function as(e){return e=e-0,e===e}function fa(e){return as(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var os=["style"];function is(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ss(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=fa(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[is(a)]=o:t[a]=o,t},{})}function ua(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return ua(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=ss(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[fa(l)]=u}return c},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=Ji(n,os);return a.attrs.style=D(D({},a.attrs.style),i),e.apply(void 0,[t.tag,D(D({},a.attrs),s)].concat(Ut(r)))}var da=!1;try{da=!0}catch{}function cs(){if(!da&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jn(e){if(e&&Ze(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dt.icon)return Dt.icon(e);if(e===null)return null;if(e&&Ze(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function mt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}var Qn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Je=la.forwardRef(function(e,t){var n=D(D({},Qn),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,s=n.title,c=n.titleId,l=n.maskId,u=Jn(r),f=mt("classes",[].concat(Ut(rs(n)),Ut((i||"").split(" ")))),d=mt("transform",typeof n.transform=="string"?Dt.transform(n.transform):n.transform),_=mt("mask",Jn(a)),b=ui(u,D(D(D(D({},f),d),_),{},{symbol:o,title:s,titleId:c,maskId:l}));if(!b)return cs("Could not find icon",u),null;var k=b.abstract,y={ref:t};return Object.keys(n).forEach(function(h){Qn.hasOwnProperty(h)||(y[h]=n[h])}),ls(k[0],y)});Je.displayName="FontAwesomeIcon";Je.propTypes={beat:x.bool,border:x.bool,beatFade:x.bool,bounce:x.bool,className:x.string,fade:x.bool,flash:x.bool,mask:x.oneOfType([x.object,x.array,x.string]),maskId:x.string,fixedWidth:x.bool,inverse:x.bool,flip:x.oneOf([!0,!1,"horizontal","vertical","both"]),icon:x.oneOfType([x.object,x.array,x.string]),listItem:x.bool,pull:x.oneOf(["right","left"]),pulse:x.bool,rotation:x.oneOf([0,90,180,270]),shake:x.bool,size:x.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:x.bool,spinPulse:x.bool,spinReverse:x.bool,symbol:x.oneOfType([x.bool,x.string]),title:x.string,titleId:x.string,transform:x.oneOfType([x.string,x.object]),swapOpacity:x.bool};var ls=ua.bind(null,la.createElement);const fs="modulepreload",us=function(e){return"/"+e},er={},ds=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0&&typeof window<"u"){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(n.map(c=>{if(c=us(c),c in er)return;er[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":fs,l||(f.as="script"),f.crossOrigin="",f.href=c,s&&f.setAttribute("nonce",s),document.head.appendChild(f),l)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return a.then(i=>{for(const s of i||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})};let re,Ce;const _s=(e,t)=>{if(re=void 0,t&&t.type==="click"){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button!==0)return e;const n=t.target.closest("a[href]"),r=n&&n.getAttribute("href");if(!n||n.origin!=location.origin||/^#/.test(r)||!/^(_?self)?$/i.test(n.target)||Ce&&(typeof Ce=="string"?!r.startsWith(Ce):!Ce.test(r)))return e;re=!0,t.preventDefault(),t=n.href.replace(location.origin,"")}else typeof t=="string"?re=!0:t&&t.url?(re=!t.replace,t=t.url):t=location.pathname+location.search;return re===!0?history.pushState(null,"",t):re===!1&&history.replaceState(null,"",t),t},ps=(e,t,n)=>{e=e.split("/").filter(Boolean),t=(t||"").split("/").filter(Boolean);for(let r=0,a,o;r<Math.max(e.length,t.length);r++){let[,i,s,c]=(t[r]||"").match(/^(:?)(.*?)([+*?]?)$/);if(a=e[r],!(!i&&s==a)){if(!i&&a&&c=="*"){n.rest="/"+e.slice(r).map(decodeURIComponent).join("/");break}if(!i||!a&&c!="?"&&c!="*")return;if(o=c=="+"||c=="*",o?a=e.slice(r).map(decodeURIComponent).join("/")||void 0:a&&(a=decodeURIComponent(a)),n.params[s]=a,s in n||(n[s]=a),o)break}}return n};function ze(e){const[t,n]=$e(_s,e.url||location.pathname+location.search);e.scope&&(Ce=e.scope);const r=re===!0,a=ke(()=>{const o=new URL(t,location.origin),i=o.pathname.replace(/\/+$/g,"")||"/";return{url:t,path:i,query:Object.fromEntries(o.searchParams),route:(s,c)=>n({url:s,replace:c}),wasPush:r}},[t]);return fe(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),I(ze.ctx.Provider,{value:a},e.children)}const ms=Promise.resolve();function _a(e){const[t,n]=$e(N=>N+1,0),{url:r,query:a,wasPush:o,path:i}=Me(),{rest:s=i,params:c={}}=it(tr),l=R(!1),u=R(i),f=R(0),d=R(),_=R(),b=R(),k=R(!1),y=R();y.current=!1;const h=R(!1);let g,A,C;U(e.children).some(N=>{if(ps(s,N.props.path,C={...N.props,path:s,query:a,params:c,rest:""}))return g=kt(N,C);N.props.default&&(A=kt(N,C))});let O=g||A;ke(()=>{_.current=d.current;const N=_.current&&_.current.props.children;!N||!O||O.type!==N.type||O.props.component!==N.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),f.current++,h.current=!0):h.current=!1},[r]);const Y=d.current&&d.current.__u&He&&d.current.__u&We,q=d.current&&d.current.__h;d.current=I(tr.Provider,{value:C},O),Y?(d.current.__u|=He,d.current.__u|=We):q&&(d.current.__h=!0);const K=_.current;return _.current=null,this.__c=(N,T)=>{y.current=!0,_.current=K,e.onLoadStart&&e.onLoadStart(r),l.current=!0;let ue=f.current;N.then(()=>{ue===f.current&&(_.current=null,d.current&&(T.__h&&(d.current.__h=T.__h),T.__u&We&&(d.current.__u|=We),T.__u&He&&(d.current.__u|=He)),ms.then(n))})},fe(()=>{const N=this.__v&&this.__v.__e;if(y.current){!k.current&&!b.current&&(b.current=N);return}!k.current&&b.current&&(b.current!==N&&b.current.remove(),b.current=null),k.current=!0,u.current!==i&&(o&&scrollTo(0,0),e.onRouteChange&&e.onRouteChange(r),u.current=i),e.onLoadEnd&&l.current&&e.onLoadEnd(r),l.current=!1},[i,o,t]),h.current?[I(ht,{r:d}),I(ht,{r:_})]:I(ht,{r:d})}const He=32,We=128,ht=({r:e})=>e.current;_a.Provider=ze;ze.ctx=Gt({});const tr=Gt({}),we=e=>I(e.component,e),Me=()=>it(ze.ctx),nr=v.__e;v.__e=(e,t,n)=>{if(e&&e.then){let r=t;for(;r=r.__;)if(r.__c&&r.__c.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),t.__k||(t.__k=[]),r.__c.__c(e,t)}nr&&nr(e,t,n)};let rr;function hs(e,t){if(typeof window>"u")return;let n=document.querySelector("script[type=isodata]");t=t||n&&n.parentNode||document.body,!rr&&n?Vt(e,t):he(e,t),rr=!0}function gs(e,t){return ds(()=>import("./prerender-BNqFGi42.js"),[]).then(n=>n.default(e,t))}function vs(){return p("svg",{width:"158px",height:"34px",viewBox:"0 0 482.59987 104.54852",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:p("g",{transform:"translate(135.43868,27.566678)",children:p("path",{d:"m 100.77362,-25.438609 c 1.34428,-7.003526 -6.371155,5.90342 -7.367764,1.473645 C 77.264292,-11.508248 45.579543,48.416346 52.735407,19.813634 58.573551,-40.732214 -9.8261699,76.278983 -1.2555791,70.259797 -3.2026815,72.176637 8.9069039,56.742583 9.1308885,63.080538 20.456197,56.544315 29.416892,36.172124 38.999369,24.057777 40.060292,30.709118 38.600031,42.754704 37.942238,51.572219 38.49353,77.391938 60.75043,37.949692 65.844735,30.904607 73.755782,18.824573 82.883916,7.7103572 91.688738,-5.6378393 114.06837,-38.09481 94.958107,-15.074231 100.77362,-25.438609 Z m -120.1485,6.883273 c -10.083929,10.7265563 -15.969404,23.9514661 -25.065637,35.492 -2.326592,-5.179238 -0.334324,-23.002786 -4.112558,-17.5363607 -1.058365,-8.2878928 -0.751148,0.46323629 -5.691567,-2.7677249 -4.541232,5.8359462 -4.868531,10.7663768 -4.716953,19.6082496 4.294751,10.576037 2.414253,24.926737 -2.551392,26.506376 0.0014,0.0078 7.81e-4,0.01539 0,0.0223 0.0048,-0.01119 -0.0024,0.01266 -0.0089,0.03122 -3.54e-4,0.0014 3.19e-4,0.0045 0,0.0045 0,0.0087 -5.2e-5,0.01209 0,0.01338 -0.0017,-0.003 -0.0089,-0.008 -0.02007,0.0067 v 0.0023 c -0.0039,-0.0041 -0.0087,0.0014 -0.01338,0.0045 -0.0023,0.0039 -0.0043,0.0055 -0.0045,0.0089 0.0015,5.52e-4 5.71e-4,0.0045 0.0023,0.0045 0.0056,-0.004 0.0126,-0.0077 0.01561,-0.01119 5.99e-4,0.0034 0.0019,0.0063 0,0.0089 -0.0015,0.0019 -0.0055,0.0015 -0.0089,0.0067 1.832872,0.744022 -8.128371,15.461619 -7.28027,19.691718 3.762696,-0.413164 -2.851587,3.083305 -1.062102,4.749925 5.156466,-2.62763 4.204738,4.768344 8.772808,-3.421651 4.678259,-9.485317 14.657767,-23.987948 21.685447,-19.105395 -4.16371,1.673594 8.365914,-0.242025 2.20745,7.016744 l -14.844445,23.768357 c 9.051519,-2.516213 5.30981,5.690242 11.529082,-1.814853 2.644396,-3.450299 14.419896,-23.816793 13.764772,-18.630846 2.938123,-1.174403 4.868042,-12.674532 13.594935,-13.951847 C 0.36186045,38.733567 15.159152,31.205552 23.823191,21.688679 30.485065,3.2411178 13.455635,2.96857 4.582929,-4.7775525 4.7520738,-5.1352798 -19.109265,-2.6718877 -13.33034,-1.3385256 -21.702846,-2.6714247 -25.229342,9.5293336 -17.576713,7.5623533 1.3431989,5.8014339 -39.921948,34.964311 -15.052081,28.493134 -2.8691281,26.150684 -0.19778719,-2.8400475 11.358398,17.622952 5.5681674,25.891399 -0.92500598,23.863723 0.14030114,26.568435 -6.0319235,26.977959 -13.302456,31.871516 -24.39232,32.313529 c -6.418573,2.0639 -25.071272,7.79044 -15.051874,-3.445718 l 20.050847,-31.6327186 c 3.10215,-6.3648896 8.865168,-9.1253584 8.206513,-12.6825584 3.7994918,-3.068294 9.8175959,-10.641378 2.7609463,-7.131922 -2.0574773,-11.642079 -11.6293153,13.4103743 -10.9489923,4.024052 z m -42.147028,61.35603 c -4e-6,-0.0015 -0.0013,-0.0061 0.0023,-0.01338 -0.0026,0.0048 -0.0046,0.0095 -0.0089,0.01338 0.0056,0 0.0071,0.0015 0.0067,0 z m 7.203669,-59.511664 c -14.894314,7.9818257 -28.008545,49.560102 -46.788161,40.271404 2.798351,-4.756422 13.842576,-18.2862312 6.610427,-16.2405924 10.851897,-23.7979856 -22.168497,25.7876534 -35.964817,25.4314014 -2.05535,1.67286 -3.45625,2.749296 0.87426,2.214653 13.49289,0.636106 -7.58608,16.046748 -4.03004,17.572044 -1.61562,6.279719 -3.79605,9.836522 1.68383,9.135053 5.49937,-3.920326 15.66437,-17.737617 18.3437,-19.260332 4.92311,-10.207414 26.680082,-8.752545 12.20609,4.161623 -3.27657,5.527058 -0.28084,13.368152 4.674583,8.644402 7.154258,-7.39169 8.070439,-10.365328 13.381427,-16.840526 2.452927,-7.945347 17.098959,-7.782904 21.564169,-12.48041 0.905193,-5.252955 -12.670102,-4.162323 -7.888351,-7.738925 3.486899,-6.207593 7.44317,-12.1120033 11.432357,-18.0046874 0.767421,-1.738789 8.460921,-17.2829226 4.195077,-14.6281296 z M 214.31612,-6.5366247 c -5.45633,0.2331369 -16.25394,7.41343298 -23.77879,15.6250458 -9.70361,8.3383479 -17.12322,19.8449769 -27.62818,26.7740029 -10.53108,8.529137 -2.11557,-5.688089 -2.68521,-6.266967 9.87414,-25.3349616 -18.01142,24.574735 -26.92566,15.529146 -4.14641,-8.852712 3.77889,-19.816426 8.73584,-27.692863 6.05036,-7.049393 19.94185,-18.6441474 14.79441,-3.450937 10.70224,-3.535647 15.38051,-26.459245 -0.13132,-17.6109104 -6.25125,3.83912697 0.22864,-3.7761998 -13.26286,7.314815 -6.92665,8.1622354 -6.35818,7.2407644 -15.97955,22.2144544 -6.41035,13.574249 -10.45666,24.566441 2.17853,31.198272 h 0.002 c 0.009,0.0039 0.007,0.0039 0.0156,0.0067 h 0.002 c -0.005,-0.0035 0.001,-0.0077 -0.009,-0.01119 10.42949,1.501706 16.83535,-11.996973 26.39485,-12.19048 -0.66022,5.417512 -19.29376,24.914619 -13.10782,21.716344 l 4.89633,-0.561698 c 5.02372,-4.215182 18.03752,-22.557957 31.73159,-27.910037 7.99993,0.4187 19.61057,-8.714096 14.32928,-13.528621 -18.65043,8.638446 16.05383,-21.9952229 4.10809,-1.59239 l -4.81083,16.940886 c -1.34124,5.803002 -3.0563,11.056588 -1.83473,14.986393 0.79795,-2.443336 3.83564,-7.756252 2.01495,0.933412 -1.85269,11.447979 6.4368,-4.996387 11.37298,-17.946833 1.46125,-3.684176 4.61301,-6.3143 8.17259,-7.799404 6.66637,0.67647 11.63382,-4.638135 11.31176,-5.597897 3.3631,-1.687941 -4.86801,-2.481867 -5.17861,-3.392191 0.009,-0.0024 0.0206,-0.0086 0.0335,-0.01119 -0.009,-0.0011 -0.0227,-8.17e-4 -0.0313,-0.0023 0.001,0.0048 -0.009,0.009 -0.009,0.01338 -10.22867,2.43664 -5.19962,-9.422401 -4.71862,-11.3619451 9.23202,-0.5584053 37.238,-5.6457135 20.79194,8.8306251 -6.16922,8.461751 -9.46624,15.127737 -14.81547,21.684601 -2.36668,4.979413 12.33025,-0.560739 19.103,-9.630786 5.66611,-13.920945 21.78171,-29.97136272 25.17838,-10.291926 -16.9448,17.370479 -38.93175,26.20382 -60.53478,30.552582 0.68958,3.526734 -13.17586,14.147953 -0.45331,7.145126 4.13097,1.413439 15.7928,-9.085029 9.75456,1.762698 6.3891,-3.258525 -1.30191,11.645107 12.34448,-5.654966 5.68796,-2.724309 10.77561,-4.486833 9.26802,-2.55803 64.34627,-31.104841 42.23331,-45.0521724 33.99775,-48.5812685 -13.05563,-5.8534981 -30.37545,-5.7474446 -46.02765,-3.96090219 -8.13368,-0.0422953 -6.84162,7.34682479 -8.24205,2.96225469 z M 86.411988,8.9434547 c -3.88065,3.2705373 -12.138979,11.9342313 -5.528751,7.9485673 -15.126968,21.875006 27.046653,-30.228861 34.801273,-3.22392 2.98573,7.082138 -3.06832,14.190928 -15.08533,24.803528 -5.225852,4.122218 -18.133204,19.15823 -21.519557,5.778546 0.03277,-10.138409 20.752855,-28.75191 16.407858,-27.56797 13.322749,-11.3736931 -11.303647,1.974967 -15.466696,9.275559 -4.339105,1.294239 -8.648532,9.947996 -8.042239,5.468544 -5.15346,8.614765 -9.18597,16.951455 -6.516753,22.110576 10.413666,12.936097 28.871471,-0.141274 39.239727,-7.827289 6.4814,-5.632791 13.15719,-10.24876 16.4337,-17.084466 5.91957,-6.320648 14.4584,-29.6766801 -6.61973,-32.0253282 -5.0272,-0.4073884 -17.5315,3.45534636 -28.103502,12.3436529 z M 312.83737,1.5712527 c -4.97452,4.6658338 -2.81536,0.034153 -11.37828,4.7393542 -14.54733,0.849037 -8.13301,3.55943 -16.84141,4.0089051 -1.40448,2.524577 -4.13971,5.693723 5.28567,5.238828 0.50331,-1.380739 -1.1828,3.823066 -0.97016,4.908753 -6.09775,4.655454 -10.88269,5.178249 -13.04243,9.346927 6.51025,-1.140088 2.16849,7.926586 -2.12096,14.032656 -0.0824,-0.26447 -3.56881,7.408912 -4.42256,6.891434 -6.09192,0.686208 -4.87483,2.366904 -2.7365,2.15887 -10.99343,3.991297 16.54507,5.080033 24.94076,1.11512 4.4694,-1.123991 21.09649,-0.561331 24.15333,-2.947964 -2.73897,-4.755061 13.19129,-3.323398 2.43472,-6.759842 -13.12327,-6.41949 -33.22309,4.475603 -29.19194,-2.676849 l 7.41768,-10.000306 c 7.65242,-0.863814 11.51584,-1.995716 20.44235,-7.275036 -8.87892,-0.588696 -1.51789,-1.787666 -12.74581,-1.021448 -7.01248,-6.415536 18.07028,-13.5752612 26.67588,-12.241775 12.01613,-1.1936811 16.42256,-4.6264744 16.42348,-7.1813662 -1.36327,-4.4660387 -19.30157,0.30174 -16.44578,-1.6392249 z"})})})}const pa=(e,t)=>e.split(" ").filter(n=>n!==t).join(" "),ys=(e,t)=>pa(e,t)+" "+t;function bs(){const{url:e}=Me(),[t,n]=at("logo");return ot(()=>{n(e==="/"?ys(t,"active"):pa(t,"active"))},[e]),p("header",{children:p("nav",{children:[p("a",{href:"/",class:t,children:p(vs,{})}),p("span",{class:"spacer",children:" "}),p("a",{href:"/machines",class:e.includes("machine")&&"active",children:"Machines"}),p("a",{href:"/contact",class:e=="/contact"&&"active",children:"Contact"})]})})}const xs="/assets/hypnocade-Dg6qVg83.jpg";function ks(){return p("div",{class:"home",children:[p("div",{class:"hypnocade",children:p("img",{src:xs})}),p("section",{children:[p("h2",{children:"Interact, Play, Create!"}),p("p",{children:"Hypnocade is a project designed to bring the element of play with visual art to a friendly and approachable form."})]}),p("section",{children:[p("h2",{children:"Opportunities"}),p("p",{children:["Want a Hypnocade machine for your event? Interested in your own machine? ",p("a",{href:"/contact",children:"Contact us"})," — we would love to work with you!"]})]})]})}const ws="/assets/hypno_card-LCH6ljn1.jpg",Es="/assets/enso_card-CxgK779k.jpg",As="/assets/future_card-BBEaUjZB.jpg";function Ps(){return p("div",{class:"machines",children:[p("h1",{children:"Machines"}),p("p",{children:"The idea for Hypnocade was born out of a session of video synthesizer play with a group of friends. It was suggested “what if we had big controls here that anybody could walk up to and use?” That simply had to happen. Combining art and engineering, we discussed what concepts to expose to players and passersby, how to deliver that in a usable form-factor, and arrived at an arcade cabinet."}),p("p",{children:["Our first unit is the ",p("a",{href:"/machines/hypno",children:"Hypno"}),", based on the synthesizer that started the original conversation. ",p("a",{href:"/machines/enso",children:"Enso"})," is our second unit currently in development. There are multiple units planned for the future as well, all based around different concepts of video art."]}),p("p",{children:["We are exploring other interactive pieces as well, that can be used in settings with existing displays and other hardware designs. ",p("a",{href:"/contact",children:"Contact us"})," if you are interested to learn more or bring a Hypnocade unit to your next event!"]}),p("section",{children:[p(gt,{name:"Hypno",image:ws,href:"hypno",description:"The Original"}),p(gt,{name:"Enso",image:Es,href:"enso",description:"Pure Feedback"}),p(gt,{name:"Future",image:As,href:"future",description:"What's Next?"})]})]})}function gt(e){const{name:t,image:n,href:r,description:a}=e;return p("a",{href:`/machines/${r}`,class:"machine",children:[p("h2",{children:t}),p("div",{class:"rollover",children:[p("img",{src:n}),p("div",{children:p("span",{children:a})})]})]})}function Cs(){const{url:e}=Me(),[t,n,r]=e.split("/");switch(console.log(r),r){case"hypno":return"Hypno";case"enso":return"Enso";case"future":return"Future";default:return Me().route("/machines",!0)}}function Ss(){return p("div",{class:"contact",children:[p("h1",{children:"Contact Us"}),p("section",{children:[p("div",{class:"info",children:["Contact us to discuss bringing a Hypnocade unit to your next event! Email us at ",p("a",{href:"mailto:info@hypnocade.art",children:"info@hypnocade.art"})]}),p("p",{children:["You can also find us on social media:",p("ul",{children:[p("li",{children:p("a",{href:"https://www.instagram.com/hypnocade",target:"_blank",children:"Instagram"})}),p("li",{children:p("a",{href:"https://www.facebook.com/hypnocade",target:"_blank",children:"Facebook"})})]})]})]})]})}function Os(){return Me().route("/",!0),null}function ma(){return p(H,{children:[p(ze,{children:[p(bs,{}),p("main",{children:p(_a,{children:[p(we,{path:"/",component:ks}),p(we,{path:"/machines",component:Ps}),p(we,{path:"/machines/:id",component:Cs}),p(we,{path:"/contact",component:Ss}),p(we,{default:!0,component:Os})]})})]}),p("footer",{children:[p("span",{class:"founded",children:["© 2024 ",p("a",{href:"https://jacobroufa.com",target:"_blank",children:"Jacob Roufa"})]}),p("span",{class:"spacer",children:" "}),p("a",{href:"https://www.instagram.com/hypnocade",target:"_blank",children:p(Je,{icon:wa})}),p("a",{href:"https://www.facebook.com/hypnocade",target:"_blank",children:p(Je,{icon:Ea})})]})]})}typeof window<"u"&&hs(p(ma,{}),document.getElementById("app"));async function Ns(e){return await gs(p(ma,{...e}))}export{ma as App,kt as E,I as _,H as b,v as l,Ns as prerender};
