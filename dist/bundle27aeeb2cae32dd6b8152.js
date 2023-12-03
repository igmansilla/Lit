/*! For license information please see bundle27aeeb2cae32dd6b8152.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,_=u.trustedTypes,f=_?_.emptyScript:"",g=u.reactiveElementPolyfillSupport,$=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},m=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??m)(i?r:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,g?.({ReactiveElement:A}),(u.reactiveElementVersions??=[]).push("2.0.2");const v=Symbol();class w{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,e)=>{this.i=t,this.o=e})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,s){this.u=0,this.status=0,(this.p=t).addController(this);const i="object"==typeof e?e:{task:e,args:s};this._=i.task,this.v=i.args,this.j=i.argsEqual??E,this.m=i.onComplete,this.g=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.l=i.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,s;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const i=++this.u;this.T=new AbortController;let r=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){r=!0,s=t}if(this.u===i){if(e===v)this.status=0;else{if(!1===r){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(s)}catch{}this.status=3,this.o?.(s)}this.l=e,this.h=s}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const E=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!m(t,e[s]))),S=globalThis,x=S.trustedTypes,C=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,P="?"+U,T=`<${P}>`,O=document,R=()=>O.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,L=/>/g,B=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,V=/^(?:script|style|textarea|title)$/i,W=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),q=W(1),J=(W(2),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),Z=new WeakMap,F=O.createTreeWalker(O,129);function G(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Q=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":"",n=z;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,c=0;for(;c<s.length&&(n.lastIndex=c,h=n.exec(s),null!==h);)c=n.lastIndex,n===z?"!--"===h[1]?n=j:void 0!==h[1]?n=L:void 0!==h[2]?(V.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=B):void 0!==h[3]&&(n=B):n===B?">"===h[0]?(n=r??z,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?B:'"'===h[3]?I:D):n===I||n===D?n=B:n===j||n===L?n=z:(n=B,r=void 0);const d=n===B&&t[e+1].startsWith("/>")?" ":"";o+=n===z?s+T:l>=0?(i.push(a),s.slice(0,l)+k+s.slice(l)+U+d):s+U+(-2===l?e:d)}return[G(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class X{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,l]=Q(t,e);if(this.el=X.createElement(h,s),F.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(k)){const e=l[o++],s=i.getAttribute(t).split(U),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?it:"?"===n[1]?rt:"@"===n[1]?ot:st}),i.removeAttribute(t)}else t.startsWith(U)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(V.test(i.tagName)){const t=i.textContent.split(U),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],R()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(U,t+1));)a.push({type:7,index:r}),t+=U.length-1}r++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===J)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=M(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=F.nextNode(),o++)}return F.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),M(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==K&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new X(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new et(this.k(R()),this.k(R()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=Y(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==J,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,i[s+n],e,n),a===J&&(a=this._$AH[n]),o||=!M(a)||a!==this._$AH[n],a===K?t=K:t!==K&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.O(t)}O(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends st{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===K?void 0:t}}class rt extends st{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class ot extends st{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??K)===J)return;const s=this._$AH,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at=S.litHtmlPolyfillSupport;at?.(X,et),(S.litHtmlVersions??=[]).push("3.1.0");class ht extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new et(e.insertBefore(R(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}ht._$litElement$=!0,ht.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ht});const lt=globalThis.litElementPolyfillSupport;lt?.({LitElement:ht}),(globalThis.litElementVersions??=[]).push("4.0.2");class ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const dt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ct{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.it)t in e||(s.remove(t),this.it.delete(t));for(const t in e){const i=!!e[t];i===this.it.has(t)||this.st?.has(t)||(i?(s.add(t),this.it.add(t)):(s.remove(t),this.it.delete(t)))}return J}}),pt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(i,t,s)})`
  :root {
    --color__red--100: #ff8da3;
    --color__red--200: #fe718e;
    --color__red--300: #fd566c;
    --color__red--400: #fc273f;
    --color__red--500: #d31b3d;
    --color__red--600: #aa1834;
    --color__red--800: #641432;
    --color__blue--100: #acc2dd;
    --color__blue--500: #42638c;
    --color__blue--600: #2e4869;
    --color__blue--650: #042b43;
    --color__blue--680: #04273c;
    --color__blue--700: #172f48;
    --color__blue--800: #031f30;
    --color__blue--900: #011523;
    --color__purple--100: #c2b4fc;
    --color__purple--400: #8d5fff;
    --color__purple--600: #55419e;
    --color__purple--800: #26224c;
    --color__white: #fff;
    --color__grey--input: #f3f3f3;
    --color__grey--100: #f7f7f7;
    --color__grey--200: #f8f8f8;
    --color__grey--300: #e5e5e5;
    --color__grey--400: #d7d8d6;
    --color__grey--500: #babcbc;
    --color__grey--600: #9c9ea0;
    --color__grey--800: #53565a;
    --color__success: #8dbf3d;
    --color__warning: #f6c348;
    --color__danger: #fc273f;
  }

  .container {
    display: flex;
    position: relative;
    width: 100%;
  }

  .lit-select-container {
    display: flex;
    cursor: pointer;
    flex: 1;
  }

  .lit-select-container > span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: var(--color__grey--input);
    border: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .lit-select-container.disabled > span {
    background-color: rgb(181 181 181 / 77%);
    color: rgb(0 0 0 / 42%);
  }

  .lit-select-code {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0.5rem 0.8rem 1rem;
    font-size: 13px !important;
    font-family: "securitas bold";
    text-align: center;
    color: var(--color__red--400);
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }

  .lit-select-description {
    flex-grow: 1;
    justify-content: center;
    display: flex;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    align-items: center;
    max-width: 75%;
    padding: 0.8rem 0rem;
    color: var(--color__blue--680);
  }

  .lit-select-icon {
    flex: 1;
    display: flex;
    width: 5%;
    max-width: 5%;
    transition: transform 0.3s linear;
    padding: 0.8rem 1rem 0.8rem 0.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    background: url("caret-down.svg") no-repeat center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 16px 12px;
  }

  input {
    border: 0px;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: inherit;
    margin-bottom: 0.7rem;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  input:focus {
    outline: none;
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 10px;
    background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 43%,
        #000 45%,
        #000 55%,
        rgba(0, 0, 0, 0) 57%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        135deg,
        transparent 0%,
        transparent 43%,
        #000 45%,
        #000 55%,
        transparent 57%,
        transparent 100%
      );
  }

  .body {
    display: none;
    opacity: 0;
    overflow-y: overlay;
    padding: 1rem 0rem;
    margin-top: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 1rem;
    transition: max-height 0.3s linear, opacity 0.3s linear;
  }

  .body.open {
    margin-top: 3.5rem;
    display: block;
    position: absolute;
    z-index: 1000;
    max-height: 15rem;
    width: 100%;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    opacity: 1;
  }

  .body.closed {
    max-height: 0;
    opacity: 0;
  }

  .option {
    color: var(--color__blue--680);
    position: relative;
    padding: 0.2rem 1rem;
    display: flex;
    align-items: center;
    transition: color 0.1s linear;
    opacity: 1;
    cursor: pointer;
  }

  .option::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .option:hover {
    color: var(--color__red--400);
  }

  .container-inputs {
    display: flex;
  }
  .checkbox-wrapper input[type="checkbox"] {
    width: 4rem;
    height: 1rem;
  }
  lit-label {
    margin: 0px;
  }

  /*CUSTOM SCROLLBAR*/
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f3f3f3;
    border-radius: 25px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #babcbc;
  }
`,ut=new class{constructor(){this.subscribers={}}subscribe(t,e){this.subscribers[t]||(this.subscribers[t]=[]),this.subscribers[t].push(e)}publish(t,e){this.subscribers[t]&&this.subscribers[t].forEach((t=>{t(e)}))}publishWithId(t,e,s){this.subscribers[t]&&this.subscribers[t].forEach((t=>{t(e,s)}))}};customElements.define("lit-select-nuevo",class extends ht{static get properties(){return{endpoint:{type:String},disabled:{type:Boolean},options:{type:Array},optionsRender:{type:Array},closed:{type:Boolean},id:{type:String}}}constructor(){super(),this.id=(new Date).getTime().toString(16)+Math.random().toString(16).substr(2,8)}static get styles(){return[pt]}connectedCallback(){super.connectedCallback(),ut.subscribe("select-open",this.handleOpen.bind(this))}_myTask=new w(this,{task:async([t],{signal:e})=>{if(void 0===t||""===t)return initialState;const s=await(i=t,new Promise(((t,e)=>{fetch(i).then((t=>t.json())).then((e=>t(e))).catch((t=>e(t)))})));var i;return this.optionsRender=s,this.value=s[0],s},args:()=>[this.endpoint]});_filterOptions=t=>{this.optionsRender=this.options.filter((e=>-1!=e.descripcion.indexOf(t.toUpperCase())))};_handleMenuOption(t,e){this.value=t;const s=new CustomEvent("selectionChange",{bubbles:!0,composed:!0,detail:{option:this.value,...this.id&&{refid:this.id}}});this.dispatchEvent(s),e&&e()}_toggleMenu(){this.disabled||(ut.publish("select-open",this.id),this.closed=!this.closed)}handleOpen(t){this.id===t||this.closed||(this.closed=!0)}render(){return q`
      <div class="container">
        <div
          class=${dt({"lit-select-container":!0,disabled:this.disabled})}
          @click=${this._toggleMenu}
        >
          ${this._myTask.render({initial:()=>q`<p>Esperando para comenzar</p>`,pending:()=>q`<span>Cargando...</span>`,complete:()=>q` <span class="lit-select-code"
                  >${this.value?.codigo}</span
                >
                <span class="lit-select-description"
                  >${this.value?.descripcion}</span
                >
                <span class="lit-select-icon toggle"></span>`,error:()=>q`<span>Error al intentar obtener las opciones</span>`})}
        </div>
        <div
          class=${dt({body:!0,closed:this.closed,open:!this.closed})}
        >
          <input
            id="input"
            type="search"
            value=${this.searchText}
            @input=${t=>this._filterOptions(t.target.value)}
            placeholder="Buscar..."
          />
          ${function*(t,e){if(void 0!==t){let s=0;for(const i of t)yield e(i,s++)}}(this.optionsRender,(t=>q` <div
              class="option"
              value=${t?.codigo}
              @click=${()=>this._handleMenuOption(t,this._toggleMenu())}
            >
              ${t?.descripcion}
            </div>`))}
        </div>
      </div>
    `}})})();