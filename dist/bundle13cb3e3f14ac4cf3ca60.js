/*! For license information please see bundle13cb3e3f14ac4cf3ca60.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,$=g.trustedTypes,_=$?$.emptyScript:"",f=g.reactiveElementPolyfillSupport,b=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!h(t,e),A={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(s?o:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[b("elementProperties")]=new Map,S[b("finalized")]=new Map,f?.({ReactiveElement:S}),(g.reactiveElementVersions??=[]).push("2.0.2");const E=globalThis,w=E.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,O="?"+k,P=`<${O}>`,U=document,T=()=>U.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,z=/>/g,L=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,I=/"/g,j=/^(?:script|style|textarea|title)$/i,W=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=W(1),V=(W(2),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),F=new WeakMap,K=U.createTreeWalker(U,129);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,l]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,h=r.exec(i),null!==h);)c=r.lastIndex,r===R?"!--"===h[1]?r=D:void 0!==h[1]?r=z:void 0!==h[2]?(j.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=L):void 0!==h[3]&&(r=L):r===L?">"===h[0]?(r=o??R,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?L:'"'===h[3]?I:B):r===I||r===B?r=L:r===D||r===z?r=R:(r=L,o=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";n+=r===R?i+P:l>=0?(s.push(a),i.slice(0,l)+C+i.slice(l)+k+d):i+k+(-2===l?e:d)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(t,e);if(this.el=G.createElement(h,i),K.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=l[n++],i=s.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),K.nextNode(),a.push({type:2,index:++o});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===V)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);K.currentNode=s;let o=K.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=K.nextNode(),n++)}return K.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==J&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new G(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Y(this.k(T()),this.k(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Q(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Q(this,s[i+r],e,r),a===V&&(a=this._$AH[r]),n||=!M(a)||a!==this._$AH[r],a===J?t=J:t!==J&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.O(t)}O(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===J?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??J)===V)return;const i=this._$AH,s=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==J&&(i===J||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const nt=E.litHtmlPolyfillSupport;nt?.(G,Y),(E.litHtmlVersions??=[]).push("3.1.0");class rt extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Y(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const at=globalThis.litElementPolyfillSupport;function ht(t,e,i){return t?e(t):i?.(t)}at?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.2"),v;const lt=new class{constructor(){this.subscribers={}}subscribe(t,e){this.subscribers[t]||(this.subscribers[t]=[]),this.subscribers[t].push(e)}publish(t,e){this.subscribers[t]&&this.subscribers[t].forEach((t=>{t(e)}))}publishWithId(t,e,i){this.subscribers[t]&&this.subscribers[t].forEach((t=>{t(e,i)}))}},ct=n`

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
	    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	}
	
	.lit-select-container.disabled > span{
        background-color: rgb(181 181 181 / 77%);
    	color: rgb(0 0 0 / 42%);
	}

    .lit-select-code {
    	display: flex;
    	align-items: center;
    	justify-content: center;
        padding: .8rem .5rem .8rem 1rem;
        font-size: 13px!important;
	    font-family: 'securitas bold';
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
        transition: transform .3s linear;       
	    padding: .8rem 1rem .8rem 0.5rem;
		border-top-right-radius: 1.5rem;
	    border-bottom-right-radius: 1.5rem;
        background: url('../../websgh/images/caret-down.svg') no-repeat center center;
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

    input:focus{
   	 	outline: none;
    }

	input[type="search"]::-webkit-search-cancel-button {
		-webkit-appearance: none;
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-left: 10px;
		background:
		linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#000 45%,#000 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%),
		linear-gradient(135deg, transparent 0%,transparent 43%,#000 45%,#000 55%,transparent 57%,transparent 100%);
			}
			
    .body { 
        display: none;
        opacity: 0;
        overflow-y: overlay;
        padding: 1rem 0rem;
        margin-top: 0.5rem;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
        border: none;
        border-radius: 1rem;
        transition: max-height .3s linear, opacity .3s linear;
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
        transition: color .10s linear;
        opacity: 1;
        cursor:pointer;
    }

    .option::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, .15);
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .option:hover {
        color: var(--color__red--400);
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
	  background: #F3F3F3;
	  border-radius: 25px;
	}
	
	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
	  background: #babcbc;
	}
`;customElements.define("lit-select",class extends rt{static get properties(){return{selected:{type:String},strictSelected:{type:Boolean},endpoint:{type:String},options:{type:Array},optionsDefaults:{type:Array},closed:{type:Boolean},disabled:{type:Boolean},showOnlySelected:{type:Boolean},type:{type:String},codigo:{type:String},withoutCodigo:{type:Boolean},filtroCheckbox:{type:Boolean},secondEndpoint:{type:String},id:{type:String},ref:{type:String}}}static get styles(){return[ct,n`
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
      `]}constructor(){super(),this.type="select",this.endpoint="",this.value={codigo:"0",descripcion:"Cargando..."},this.options=[],this.optionsDefault=[],this.closed=!0,this.disabled=!1,this.codigo="codigo",this.withoutCodigo=!1,this.showOnlySelected=!1,this.id=this.generateUniqueID()}generateUniqueID(){return(new Date).getTime().toString(16)+Math.random().toString(16).substr(2,8)}_handleParentChange=t=>{this.ref&&""!=this.ref&&this.ref===t?.detail?.refid&&t?.detail?.option?.codigo&&this._getOptions(t?.detail?.option?.codigo)};connectedCallback(){super.connectedCallback(),document.addEventListener("selectionChange",this._handleParentChange),lt.subscribe("select-open",this.handleOpen.bind(this))}handleOpen(t){this.id===t||this.closed||(this.closed=!0)}_toggleMenu(){this.disabled||(lt.publish("select-open",this.id),this.closed=!this.closed)}disconnectedCallback(){document.removeEventListener("selectionChange",this._handleParentChange),super.disconnectedCallback()}get _input(){return this.renderRoot?.querySelector("#input")??null}updated(t){(t.has("endpoint")||t.has("optionsDefault"))&&this._getOptions(),t.has("selected")&&""!=this.selected&&(this._setDefaultOption(),this.requestUpdate())}_getOptions(t){if(!this.endpoint)return 0===this.optionsDefault.length&&(this.optionsDefault=[{codigo:"-1",descripcion:"No fue posible acceder al servidor"}]),void this._processOptions(this.optionsDefault);fetch("/websgh"+[this.endpoint,t].join("")).then((t=>t.json())).then((t=>this._processOptions(t.data))).catch((t=>this._processError(t)))}_processOptions(t){0==t.length&&(t=[{codigo:"0",descripcion:"Sin opciones"}]),this.options=t.filter((t=>0!=t?.extraData?.habilitado)).map((t=>({...t,display:"block"}))),this._setDefaultOption()}_processError(t){console.error("Error: ",t),this.options=[{codigo:"-1",descripcion:"Error al obtener las opciones"}],this._setDefaultOption()}_setDefaultOption(){let t;t=this.strictSelected?{codigo:"",descripcion:"Seleccione una opción"}:(t=>{const e=new RegExp(t,"i");return this.options.find((t=>e.test(t?.descripcion)||e.test(t?.codigo?.toString())))})(this.selected)||this.options[0],this._handleMenuOption(t)}_handleMenuOption(t,e){this.value=t;const i=new CustomEvent("selectionChange",{bubbles:!0,composed:!0,detail:{option:this.value,...this.id&&{refid:this.id}}});this.dispatchEvent(i),e&&e()}_filterList=t=>{this.options=this.options.map((e=>-1!=e.descripcion.indexOf(t.toUpperCase())?{...e,display:"block"}:{...e,display:"none"}))};_onClickCheckbox=()=>{let t=this.endpoint;this.endpoint=this.secondEndpoint,this.secondEndpoint=t,this.requestUpdate()};render(){const t=this.options.find((t=>t.codigo===this.value.codigo));return q`
      <div class="container">
        <div
          class="lit-select-container ${this.disabled?"disabled":""}"
          @click=${this._toggleMenu}
        >
          ${ht(this.withoutCodigo,(()=>J),(()=>q`<span class="lit-select-code"
                >${function({...t}){return"codigo"!=t.codigo&&t.value?.extraData&&t.value?.extraData[t.codigo].toString().trim()||t.value?.codigo}({value:this.value,codigo:this.codigo})}</span
              >`))}
          <span class="lit-select-description">${this.value?.descripcion}</span>
          <span class="lit-select-icon toggle"></span>
        </div>
        <div class="body ${this.closed?"closed":"open"}">
          <div class="container-inputs">
            <input
              id="input"
              type="search"
              value=${this.searchText}
              @input=${t=>this._filterList(t.target.value)}
              placeholder="Buscar..."
            />
            ${ht(this.filtroCheckbox,(()=>q`
                <div class="checkbox-wrapper">
                  <lit-label .label=${"otros cc"}></lit-label>
                  <input
                    id="checkbox"
                    type="checkbox"
                    @click=${this._onClickCheckbox}
                  />
                </div>
              `))}
          </div>
          ${ht(this.showOnlySelected,(()=>q` <div
              class="option"
              style="display:block"
              value=${t?.codigo}
              @click="${()=>this._handleMenuOption(t,this._toggleMenu())}"
              data-extra="${JSON.stringify(t?.extraData)}"
            >
              ${t?.descripcion}
            </div>`),(()=>this.options.map((t=>q` <div
                    class="option"
                    style="display:${t?.display}"
                    value=${t?.codigo}
                    @click="${()=>this._handleMenuOption(t,this._toggleMenu())}"
                    data-extra="${JSON.stringify(t.extraData)}"
                  >
                    ${t?.descripcion}
                  </div>`))))}
        </div>
      </div>
    `}})})();