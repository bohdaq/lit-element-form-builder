/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${o}`);class s{constructor(e,t){this.parts=[],this.element=t;const o=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let d=0,p=-1,h=0;const{strings:m,values:{length:u}}=e;for(;h<u;){const e=a.nextNode();if(null!==e){if(p++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)r(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=m[h],i=c.exec(t)[2],o=i.toLowerCase()+"$lit$",s=e.getAttribute(o);e.removeAttribute(o);const r=s.split(n);this.parts.push({type:"attribute",index:p,name:i,strings:r}),h+=r.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,s=t.split(n),a=s.length-1;for(let t=0;t<a;t++){let o,n=s[t];if(""===n)o=l();else{const e=c.exec(n);null!==e&&r(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),o=document.createTextNode(n)}i.insertBefore(o,e),this.parts.push({type:"node",index:++p})}""===s[a]?(i.insertBefore(l(),e),o.push(e)):e.data=s[a],h+=a}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&p!==d||(p++,t.insertBefore(l(),e)),d=p,this.parts.push({type:"node",index:p}),null===e.nextSibling?e.data="":(o.push(e),p--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),h++}}else a.currentNode=s.pop()}for(const e of o)e.parentNode.removeChild(e)}}const r=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},a=e=>-1!==e.index,l=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:i},parts:o}=e,n=document.createTreeWalker(i,133,null,!1);let s=h(o),r=o[s],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,s=h(o,s),r=o[s]}c.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},h=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(a(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,u=e=>"function"==typeof e&&m.has(e),f={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,i){this.t=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.t)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.t)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],o=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let s,r=0,l=0,c=n.nextNode();for(;r<o.length;)if(s=o[r],a(s)){for(;l<s.index;)l++,"TEMPLATE"===c.nodeName&&(i.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=i.pop(),c=n.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.t.push(e)}else this.t.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));r++}else this.t.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=` ${i} `;class v{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],r=e.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===e.indexOf("--\x3e",r+1);const a=c.exec(e);t+=null===a?e+(n?x:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),y=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new z(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let o=0;o<t;o++){i+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(w(e)||!y(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class z{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||w(e)&&e===this.value||(this.value=e,u(e)||(this.committer.dirty=!0))}commit(){for(;u(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class S{constructor(e){this.value=void 0,this.i=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.o(this.startNode=l()),e.o(this.endNode=l())}insertAfterPart(e){e.o(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.i=e}commit(){if(null===this.startNode.parentNode)return;for(;u(this.i);){const e=this.i;this.i=f,e(this)}const e=this.i;e!==f&&(w(e)?e!==this.value&&this.s(e):e instanceof v?this.l(e):e instanceof Node?this.p(e):y(e)?this.h(e):e===b?(this.value=b,this.clear()):this.s(e))}o(e){this.endNode.parentNode.insertBefore(e,this.endNode)}p(e){this.value!==e&&(this.clear(),this.o(e),this.value=e)}s(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.p(document.createTextNode(i)),this.value=e}l(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const i=new g(t,e.processor,this.options),o=i._clone();i.update(e.values),this.p(o),this.value=i}}h(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const n of e)i=t[o],void 0===i&&(i=new S(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(n),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class _{constructor(e,t,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.i=e}commit(){for(;u(this.i);){const e=this.i;this.i=f,e(this)}if(this.i===f)return;const e=!!this.i;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.i=f}}class E extends k{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends z{}let P=!1;(()=>{try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class ${constructor(e,t,i){this.value=void 0,this.i=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.m=e=>this.handleEvent(e)}setValue(e){this.i=e}commit(){for(;u(this.i);){const e=this.i;this.i=f,e(this)}if(this.i===f)return;const e=this.i,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.m,this.u),o&&(this.u=A(e),this.element.addEventListener(this.eventName,this.m,this.u)),this.value=e,this.i=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function I(e){let t=T.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},T.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const n=e.strings.join(i);return o=t.keyString.get(n),void 0===o&&(o=new s(e,e.getTemplateElement()),t.keyString.set(n,o)),t.stringsArray.set(e.strings,o),o}const T=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,o){const n=t[0];if("."===n){return new E(e,t.slice(1),i).parts}return"@"===n?[new $(e,t.slice(1),o.eventContext)]:"?"===n?[new _(e,t.slice(1),i)]:new k(e,t,i).parts}handleTextExpression(e){return new S(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const F=(e,...t)=>new v(e,t,"html",R)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,N=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const M=e=>t=>{const o=N(t.type,e);let n=T.get(o);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},T.set(o,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(i);if(r=n.keyString.get(a),void 0===r){const i=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(i,e),r=new s(t,i),n.keyString.set(a,r)}return n.stringsArray.set(t.strings,r),r},j=["html","svg"],q=new Set,D=(e,t,i)=>{q.add(e);const o=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(o,e);const r=document.createElement("style");for(let e=0;e<s;e++){const t=n[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{j.forEach(t=>{const i=T.get(N(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),d(e,i)})})})(e);const a=o.content;i?function(e,t,i=null){const{element:{content:o},parts:n}=e;if(null==i)return void o.appendChild(t);const s=document.createTreeWalker(o,133,null,!1);let r=h(n),a=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===i&&(a=p(t),i.parentNode.insertBefore(t,i));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=h(n,r);return}r=h(n,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),d(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},H=(e,t)=>t!==e&&(t==t||e==e),B={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:H};class V extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=B){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this._requestUpdate(e,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||B}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=H){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||W,n="function"==typeof o?o:o.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||W.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=B){const o=this.constructor,n=o._attributeNameForProperty(e,i);if(void 0!==n){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const o=this.constructor,n=o.getPropertyOptions(e);o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}V.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol();class Y{constructor(e,t){if(t!==L)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(e,...t)=>{const i=t.reduce((t,i,o)=>t+(e=>{if(e instanceof Y)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1],e[0]);return new Y(i,L)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const X={};class J extends V{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),o=[];i.forEach(e=>o.unshift(e)),this._styles=o}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==X&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return X}}J.finalized=!0,J.render=(e,i,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const n=o.scopeName,s=O.has(i),r=U&&11===i.nodeType&&!!i.host,a=r&&!q.has(n),l=a?document.createDocumentFragment():i;if(((e,i,o)=>{let n=O.get(i);void 0===n&&(t(i,i.firstChild),O.set(i,n=new S(Object.assign({templateFactory:I},o))),n.appendInto(i)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:M(n)},o)),a){const e=O.get(l);O.delete(l);const o=e.value instanceof g?e.value.template:void 0;D(n,l,o),t(i,i.firstChild),i.appendChild(l),O.set(i,e)}!s&&r&&window.ShadyCSS.styleElement(i.host)};window.customElements.define("the-checkbox",class extends J{static get styles(){return Q`
      :host {
        display: flex;
      }


      .pure-material-checkbox {
          z-index: 0;
          position: relative;
          display: inline-block;
          color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
          font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
          font-size: 16px;
          line-height: 1.5;
      }

      /* Input */
      .pure-material-checkbox > input {
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          z-index: -1;
          position: absolute;
          left: -10px;
          top: -8px;
          display: block;
          margin: 0;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
          box-shadow: none;
          outline: none;
          opacity: 0;
          transform: scale(1);
          pointer-events: none;
          transition: opacity 0.3s, transform 0.2s;
      }

      /* Span */
      .pure-material-checkbox > span {
          display: inline-block;
          width: 100%;
          cursor: pointer;
      }

      /* Box */
      .pure-material-checkbox > span::before {
          content: "";
          display: inline-block;
          box-sizing: border-box;
          margin: 3px 11px 3px 1px;
          border: solid 2px; /* Safari */
          border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
          border-radius: 2px;
          width: 18px;
          height: 18px;
          vertical-align: top;
          transition: border-color 0.2s, background-color 0.2s;
      }

      /* Checkmark */
      .pure-material-checkbox > span::after {
          content: "";
          display: block;
          position: absolute;
          top: 3px;
          left: 1px;
          width: 10px;
          height: 5px;
          border: solid 2px transparent;
          border-right: none;
          border-top: none;
          transform: translate(3px, 4px) rotate(-45deg);
      }

      /* Checked, Indeterminate */
      .pure-material-checkbox > input:checked,
      .pure-material-checkbox > input:indeterminate {
          background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
      }

      .pure-material-checkbox > input:checked + span::before,
      .pure-material-checkbox > input:indeterminate + span::before {
          border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
          background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
      }

      .pure-material-checkbox > input:checked + span::after,
      .pure-material-checkbox > input:indeterminate + span::after {
          border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
      }

      .pure-material-checkbox > input:indeterminate + span::after {
          border-left: none;
          transform: translate(4px, 3px);
      }

      /* Hover, Focus */
      .pure-material-checkbox:hover > input {
          opacity: 0.04;
      }

      .pure-material-checkbox > input:focus {
          opacity: 0.12;
      }

      .pure-material-checkbox:hover > input:focus {
          opacity: 0.16;
      }

      /* Active */
      .pure-material-checkbox > input:active {
          opacity: 1;
          transform: scale(0);
          transition: transform 0s, opacity 0s;
      }

      .pure-material-checkbox > input:active + span::before {
          border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
      }

      .pure-material-checkbox > input:checked:active + span::before {
          border-color: transparent;
          background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
      }

      /* Disabled */
      .pure-material-checkbox > input:disabled {
          opacity: 0;
      }

      .pure-material-checkbox > input:disabled + span {
          color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
          cursor: initial;
      }

      .pure-material-checkbox > input:disabled + span::before {
          border-color: currentColor;
      }

      .pure-material-checkbox > input:checked:disabled + span::before,
      .pure-material-checkbox > input:indeterminate:disabled + span::before {
          border-color: transparent;
          background-color: currentColor;
      }

      /* iPhone X and Xs Max */
      @media only screen 
          and (min-device-width: 375px) 
          and (min-device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3)
          and (orientation: portrait) { 
          /* styles */
          .pure-material-checkbox > span::before {
          content: "";
            width: 50px;
            height: 50px;
        }

        /* Checkmark */
        .pure-material-checkbox > span::after {
            content: "";
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 50px;
            height: 20px;
            border: solid 5px transparent;
            border-right: none;
            border-top: none;
            transform: translate(3px, 4px) rotate(-45deg);
        }

        .pure-material-checkbox > input {
            left: 0px;
            top: 0px;
            width: 50px;
            height: 50px;
        }

          
      }

      /* iPhone XR */
      @media only screen 
          and (min-device-width: 414px) 
          and (min-device-height: 896px) 
          and (-webkit-device-pixel-ratio: 2) 
          and (orientation: portrait) { 
          /* styles */
          .pure-material-checkbox > span::before {
          content: "";
            width: 50px;
            height: 50px;
        }

        /* Checkmark */
        .pure-material-checkbox > span::after {
            content: "";
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 50px;
            height: 20px;
            border: solid 5px transparent;
            border-right: none;
            border-top: none;
            transform: translate(3px, 4px) rotate(-45deg);
        }

        .pure-material-checkbox > input {
            left: 0px;
            top: 0px;
            width: 50px;
            height: 50px;
        }

      }


      /* iPhone 6,7 */
      @media only screen 
        and (min-device-width : 375px) 
        and (max-device-width : 667px) { 
          /* styles */
          .pure-material-checkbox > span::before {
          content: "";
            width: 50px;
            height: 50px;
        }

        /* Checkmark */
        .pure-material-checkbox > span::after {
            content: "";
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 50px;
            height: 20px;
            border: solid 5px transparent;
            border-right: none;
            border-top: none;
            transform: translate(3px, 4px) rotate(-45deg);
        }

        .pure-material-checkbox > input {
            left: 0px;
            top: 0px;
            width: 50px;
            height: 50px;
        }


      }

      /* iPhone 6+,7+ */
      @media only screen 
        and (min-device-width : 414px) 
        and (max-device-width : 736px) { 
        /* styles */
        .pure-material-checkbox > span::before {
          content: "";
            width: 50px;
            height: 50px;
        }

        /* Checkmark */
        .pure-material-checkbox > span::after {
            content: "";
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 50px;
            height: 20px;
            border: solid 5px transparent;
            border-right: none;
            border-top: none;
            transform: translate(3px, 4px) rotate(-45deg);
        }

        .pure-material-checkbox > input {
            left: 0px;
            top: 0px;
            width: 50px;
            height: 50px;
        }

      }

      /* iPhone 5, SE (portrait & landscape)----------- */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 568px) {
        /* STYLES GO HERE */

        .pure-material-checkbox > span::before {
          content: "";
            width: 50px;
            height: 50px;
        }

        /* Checkmark */
        .pure-material-checkbox > span::after {
            content: "";
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 50px;
            height: 20px;
            border: solid 5px transparent;
            border-right: none;
            border-top: none;
            transform: translate(3px, 4px) rotate(-45deg);
        }

        .pure-material-checkbox > input {
            left: 0px;
            top: 0px;
            width: 50px;
            height: 50px;
        }
      }

      
    `}static get properties(){return{}}constructor(){super()}render(){return F`
      <label class="pure-material-checkbox">
        <input type="checkbox">
        <span></span>
      </label>
    `}});window.customElements.define("the-button",class extends J{static get styles(){return Q`
      :host {
        display: inline-block;
      }

      a.button {
        display:inline-block;
        padding: 0.3em 1.2em;
        margin:0 0.3em 0.3em 0;
        border-radius: .5em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto',sans-serif;
        font-weight: 300;
        color: #FFFFFF;
        background-color: #4eb5f1;
        text-align: center;
        transition: all 0.2s;
      }
      
      a.button:hover {
        background-color: #4095c6;
      }
      @media all and (max-width:30em){
       a.button {
        display: block;
        margin: 0.2em auto;
      }
    `}static get properties(){return{}}constructor(){super()}render(){return F`
      <a href="#" class="button"><slot></slot></a>
    `}});window.customElements.define("the-question",class extends J{static get styles(){return Q`
      :host {
        display: flex;
      }

      .question-container {
        font-size: 1.2rem;
      }

      .question-title {
        font-family: "Poppins",sans-serif;
        font-size: 2em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em * -1);
        text-transform: none;
        color: rgba(0,0,0,1);
      }

      .question-description {
        margin-top: 0.35em;
        font-family: "Poppins",sans-serif;
        font-size: 1em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em * -1);
        text-transform: none;
        color: rgb(117,117,117);
        margin-bottom: 1em;
      }


      .fill-white {
        fill: white;
        margin-left: .7em;
      }

      .buttons-container {
        display: flex;
      }

      .flex {
        flex: 1;
      }

    `}static get properties(){return{item:Object,index:Number,allowMultipleAnswers:Boolean}}constructor(){super(),this.addEventListener("answer-selected",this._answerSelected)}render(){return F`
                  <div class="question-container">
                    <div class="question-title">${this.item.Name}</div>
                    <div id="information-description" class="question-description"></div>
                    <div class="answers-container">


                    ${this.item.AnswerOptions.map((e,t)=>F`
                        <the-answer Code="${e.Code}" .item="${e}">${e.AnswerText}</the-answer>
                      
                      `)}
                      

                      <div class="buttons-container">
                        <the-button @click="${this._nextQuestionClicked}">Next</the-button>
                        <div class="flex"></div>
                      </div>

                    </div>

                  </div>
    `}_answerSelected(e){if(this.shadowRoot.querySelectorAll("the-answer").forEach(t=>{t.item.Code===e.detail.Code?t.selected?(console.log("answer-deselected",e.detail.Code),t.deselect()):(console.log("answer-selected",e.detail.Code),t.select()):this.item.AllowMultipleAnswers||t.deselect()}),!this.AllowMultipleAnswers){const e=this;setTimeout(()=>{e._nextQuestionClicked()},1e3)}}_nextQuestionClicked(e){this.shadowRoot.querySelectorAll("the-answer").forEach(e=>{e.deselect()});let t=new CustomEvent("next-question",{detail:this.item,bubbles:!0,composed:!0});this.dispatchEvent(t)}_updateDescription(e){let t=this;setTimeout(()=>{t.shadowRoot.querySelector("#information-description").innerHTML=e})}});window.customElements.define("the-answer",class extends J{static get styles(){return Q`
      :host {
        display: inline-block;
      }

      .answer-container {
        color: rgb(2, 0, 35);
        margin: 1.2em 1.2em 1.2em 0;
        cursor: pointer;
        padding: .2em .5em;
        width: 10em;
        border: 1px solid black;
        border-radius: 10px;
      }


      .answer-label {
        font-family: "Poppins",sans-serif;
        font-size: .8em;
        font-style: normal;
        font-weight: 200;
        line-height: 1.4;
        letter-spacing: 0em;

        height: 35px;
        display: flex;
        align-items: center;

        padding-left: 6px;
        padding-right: 6px;
      }

      .selected {
        background-color: rgb(118 154 220 / 20%);
        color: rgb(2, 0, 35);
      }

      .spacing {
        flex: 1;
      }

      
    `}static get properties(){return{selected:Boolean,item:Boolean}}constructor(){super(),this.selected=!1}render(){return F`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">


        ${this.selected?F`
            <div class="answer-container selected animate__animated animate__pulse"  @click="${this._selectAnswerEvent}">
                <div class="answer-label">
                  <slot></slot>
                  <div class="spacing"></div>
                </div>
            </div>
        `:F`
            <div class="answer-container"  @click="${this._selectAnswerEvent}">
                <div class="answer-label"><slot></slot></div>
            </div>
        `}
    `}_selectAnswerEvent(){this.answerSelectedEvent()}answerSelectedEvent(){let e=new CustomEvent("answer-selected",{detail:this.item,bubbles:!0,composed:!0});this.dispatchEvent(e)}select(){this.selected=!0,this.requestUpdate()}deselect(){this.selected=!1,this.requestUpdate()}});window.customElements.define("the-results",class extends J{static get styles(){return Q`
      :host {
        display: block;
      }

      .matches-heading {
        text-align: center;
        font-size: 1.7em;
        font-weight: 200;
        font-family: "Poppins",sans-serif;
      }

      .blocks-container {
        display: flex;
      }

      .block {
        flex: 1;
        background-color: rgb(41,152,244);
        margin: 1em;
        padding: 2em;
      }

      .block .title {
        color: rgb(255,188,0);
        text-transform: uppercase;
        font-size: .7em;
      }

      .numbers-block {
        margin-top: 3em;
        display: flex;
      }

      .numbers-block-heading {
        font-size: .65em;
        color: white;
      }

      .numbers-block-left-part {
        margin-right: .7em;
      }

      .number-of-tax-incentives, .total-value-of-tax-incentives {
        color: white;
        font-size: 1.5em;
        display: flex;
      }

      .currency-container {
        font-size: .7em;
      }

      .description-label {
        font-family: "Roboto",sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0em;
        text-transform: none;
        color: rgb(66,66,66);
      }

      .selected-step {
        color: black; 
      }


      .program-row {
        display: flex;

        border-bottom: 1px solid lightgrey;

        padding: .7em;
      }

      .program-row-top-border {
        border-top: 1px solid lightgrey;
      }

      .program-row-number {
        font-family: "Roboto",sans-serif;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0em;
        text-transform: none;
        color: #000;
        padding-right: 16px;
      }

      .program-row-label {
        font-family: "Roboto",sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0em;
        text-transform: none;
        color: #000;
        background-color: transparent;
        min-width: 240px;
        max-width: 240px;
      }


      .program-row-see-details {
        white-space: nowrap;
        color: rgb(77,161,255);
        margin-left: 1em;
      }
      
      .program-row-see-details:hover {
        color: rgb(245,147,54);
        cursor: pointer;
      }

      .program-row-checkbox {
        margin-left: 1em;
      }

      .explanation-text {
        font-family: "Roboto",sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0em;
        text-align: left;
        text-transform: none;
        color: rgb(66,66,66);

        margin-top: 1em;
      }

      .flex {
        flex: 1;
      }

      .inner-container {
        display: flex;
      }

      .mobile-screen {
        display: none;
      }

      


      /* iPhone X and Xs Max */
      @media only screen 
          and (min-device-width: 375px) 
          and (min-device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3)
          and (orientation: portrait) { 
          /* styles */
      
            .blocks-container {
              flex-direction: column;
            }

            .block .title {
              font-size: 3em;
            }

            .numbers-block-heading {
              font-size: 3em;
            }

            .number-of-tax-incentives {
              font-size: 3em;
            }

            .total-value-of-tax-incentives {
              font-size: 3em;
            }

            .currency-container {
              font-size: .5em;
            }

            .numbers-block {
              flex-direction: column;
            }

            .numbers-block-left-part {
              display: flex;
            }

            .numbers-block-right-part {
              display: flex;
            }

            .inner-container {
              display: block;
              width: 100%;
            }

            .program-row-label {
              max-width: unset;
              min-width: unset;
              font-size: 3em;
            }

            .program-separator {
              display: none;
            }

            .program-row-see-details {
              margin-left: 0;
              font-size: 2.5em;
              font-family: 'Helvetica', 'Arial', sans-serif;
            }

            .description-label {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            .program-row {
              padding: 2em;
            }

            .mobile-screen-number {
              margin-bottom: .3em;
              font-size: 2em;
              font-weight: 300;
            }
            

            .mobile-screen {
              display: flex;
            }

            .desktop-screen {
              display: none;
            }

            .program-description {
              font-size: 2.5em;
              padding: .5em 0;
            }

            .matches-heading {
              font-size: 5em;
            }

            .description-label {
              font-size: 3em;
              font-weight: 100;
            }

            .explanation-text {
              font-size: 3em;
            }
          
      }

      /* iPhone XR */
      @media only screen 
          and (min-device-width: 414px) 
          and (min-device-height: 896px) 
          and (-webkit-device-pixel-ratio: 2) 
          and (orientation: portrait) { 
          /* styles */

          .blocks-container {
              flex-direction: column;
            }

            .block .title {
              font-size: 3em;
            }

            .numbers-block-heading {
              font-size: 3em;
            }

            .number-of-tax-incentives {
              font-size: 3em;
            }

            .total-value-of-tax-incentives {
              font-size: 3em;
            }

            .currency-container {
              font-size: .5em;
            }

            .numbers-block {
              flex-direction: column;
            }

            .numbers-block-left-part {
              display: flex;
            }

            .numbers-block-right-part {
              display: flex;
            }

            .inner-container {
              display: block;
              width: 100%;
            }

            .program-row-label {
              max-width: unset;
              min-width: unset;
              font-size: 3em;
            }

            .program-separator {
              display: none;
            }

            .program-row-see-details {
              margin-left: 0;
              font-size: 2.5em;
              font-family: 'Helvetica', 'Arial', sans-serif;
            }

            .description-label {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            .program-row {
              padding: 2em;
            }

            .mobile-screen-number {
              margin-bottom: .3em;
              font-size: 2em;
              font-weight: 300;
            }
            

            .mobile-screen {
              display: flex;
            }

            .desktop-screen {
              display: none;
            }

            .program-description {
              font-size: 2.5em;
              padding: .5em 0;
            }

            .matches-heading {
              font-size: 5em;
            }

            .description-label {
              font-size: 3em;
              font-weight: 100;
            }

            .explanation-text {
              font-size: 3em;
            }
          
      }

      /* iPhone 6,7 */
      @media only screen 
        and (min-device-width : 375px) 
        and (max-device-width : 667px) { 
          /* styles */

          .blocks-container {
              flex-direction: column;
            }

            .block .title {
              font-size: 3em;
            }

            .numbers-block-heading {
              font-size: 3em;
            }

            .number-of-tax-incentives {
              font-size: 3em;
            }

            .total-value-of-tax-incentives {
              font-size: 3em;
            }

            .currency-container {
              font-size: .5em;
            }

            .numbers-block {
              flex-direction: column;
            }

            .numbers-block-left-part {
              display: flex;
            }

            .numbers-block-right-part {
              display: flex;
            }

            .inner-container {
              display: block;
              width: 100%;
            }

            .program-row-label {
              max-width: unset;
              min-width: unset;
              font-size: 3em;
            }

            .program-separator {
              display: none;
            }

            .program-row-see-details {
              margin-left: 0;
              font-size: 2.5em;
              font-family: 'Helvetica', 'Arial', sans-serif;
            }

            .description-label {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            .program-row {
              padding: 2em;
            }

            .mobile-screen-number {
              margin-bottom: .3em;
              font-size: 2em;
              font-weight: 300;
            }
            

            .mobile-screen {
              display: flex;
            }

            .desktop-screen {
              display: none;
            }

            .program-description {
              font-size: 2.5em;
              padding: .5em 0;
            }

            .matches-heading {
              font-size: 5em;
            }

            .description-label {
              font-size: 3em;
              font-weight: 100;
            }

            .explanation-text {
              font-size: 3em;
            }

      }

      /* iPhone 6+,7+ */
      @media only screen 
        and (min-device-width : 414px) 
        and (max-device-width : 736px) { 
        /* styles */

            .blocks-container {
              flex-direction: column;
            }

            .block .title {
              font-size: 3em;
            }

            .numbers-block-heading {
              font-size: 3em;
            }

            .number-of-tax-incentives {
              font-size: 3em;
            }

            .total-value-of-tax-incentives {
              font-size: 3em;
            }

            .currency-container {
              font-size: .5em;
            }

            .numbers-block {
              flex-direction: column;
            }

            .numbers-block-left-part {
              display: flex;
            }

            .numbers-block-right-part {
              display: flex;
            }

            .inner-container {
              display: block;
              width: 100%;
            }

            .program-row-label {
              max-width: unset;
              min-width: unset;
              font-size: 3em;
            }

            .program-separator {
              display: none;
            }

            .program-row-see-details {
              margin-left: 0;
              font-size: 2.5em;
              font-family: 'Helvetica', 'Arial', sans-serif;
            }

            .description-label {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            .program-row {
              padding: 2em;
            }

            .mobile-screen-number {
              margin-bottom: .3em;
              font-size: 2em;
              font-weight: 300;
            }
            

            .mobile-screen {
              display: flex;
            }

            .desktop-screen {
              display: none;
            }

            .program-description {
              font-size: 2.5em;
              padding: .5em 0;
            }

            .matches-heading {
              font-size: 5em;
            }

            .description-label {
              font-size: 3em;
              font-weight: 100;
            }

            .explanation-text {
              font-size: 4em;
            }

      }


      /* iPhone 5, SE (portrait & landscape)----------- */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 568px) {
        /* STYLES GO HERE */

        .blocks-container {
          flex-direction: column;
        }

        .block .title {
          font-size: 3em;
        }

        .numbers-block-heading {
          font-size: 3em;
        }

        .number-of-tax-incentives {
          font-size: 3em;
        }

        .total-value-of-tax-incentives {
          font-size: 3em;
        }

        .currency-container {
          font-size: .5em;
        }

        .numbers-block {
          flex-direction: column;
        }

        .numbers-block-left-part {
          display: flex;
        }

        .numbers-block-right-part {
          display: flex;
        }

        .inner-container {
          display: block;
          width: 100%;
        }

        .program-row-label {
          max-width: unset;
          min-width: unset;
          font-size: 3em;
        }

        .program-separator {
          display: none;
        }

        .program-row-see-details {
          margin-left: 0;
          font-size: 2.5em;
          font-family: 'Helvetica', 'Arial', sans-serif;
        }

        .description-label {
          margin-top: 1em;
          margin-bottom: 1em;
        }
        .program-row {
          padding: 2em;
        }

        .mobile-screen-number {
          margin-bottom: .3em;
          font-size: 2em;
          font-weight: 300;
        }
        

        .mobile-screen {
          display: flex;
        }

        .desktop-screen {
          display: none;
        }

        .program-description {
          font-size: 2.5em;
          padding: .5em 0;
        }

        .matches-heading {
          font-size: 5em;
        }

        .description-label {
          font-size: 3em;
          font-weight: 100;
        }

        .explanation-text {
          font-size: 4em;
        }
      }

      
    `}static get properties(){return{selected:Boolean,item:Boolean}}constructor(){super(),this.selected=!1}render(){return F`

              <p class="matches-heading">You may qualify for the following programs</p>

              <div class="blocks-container">
                
                <div class="tax-incentives block">
                  <div class="title">Tax Incentives</div>

                  <div class="numbers-block">
                    <div class="numbers-block-left-part">
                      <div class="numbers-block-heading">
                        Number of tax incentives
                      </div>
                      <div class="flex"></div>
                      <div class="number-of-tax-incentives">
                        10
                      </div>
                    </div>
                    <div class="numbers-block-right-part">
                      <div class="numbers-block-heading">
                        Tax incentives available
                      </div>
                      <div class="flex"></div>
                      <div class="total-value-of-tax-incentives">
                        <div class="currency-container">S$</div>22k
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tax-incentives block">
                  <div class="title">Grants</div>

                  <div class="numbers-block">
                    <div class="numbers-block-left-part">
                      <div class="numbers-block-heading">
                        Number of grants available
                      </div>
                      <div class="flex"></div>
                      <div class="number-of-tax-incentives">
                        4
                      </div>
                    </div>
                    <div class="numbers-block-right-part">
                      <div class="numbers-block-heading">
                          Grants available
                        </div>
                        <div class="flex"></div>
                        <div class="total-value-of-tax-incentives">
                          <div class="currency-container">S$</div>37k
                        </div>
                    </div>
                  </div>
                </div>
                
                <div class="tax-incentives block">
                  <div class="title">Funding Sources</div>

                  <div class="numbers-block">
                    <div class="numbers-block-left-part">
                      <div class="numbers-block-heading">
                        Equity programs
                      </div>
                      <div class="flex"></div>
                      <div class="number-of-tax-incentives">
                        4
                      </div>
                    </div>
                    <div class="numbers-block-right-part">
                      <div class="numbers-block-heading">
                          Equity programs available
                        </div>
                        <div class="flex"></div>
                        <div class="total-value-of-tax-incentives">
                          <div class="currency-container">S$</div>255k
                        </div>
                    </div>
                  </div>
                </div>

              </div>


              <div class="description-label">Description of the 18 program found</div>


              <!-- mobile -->

              <div class="program-row program-row-top-border mobile-screen">
                <div class="program-row-number">
                  <div class="mobile-screen-number">1</div>
                  <the-checkbox></the-checkbox>
                </div>
                <div class="inner-container">
                  <div class="program-row-label">Enterprise Development Grant</div>
                  <div class="program-row-description">
                    <div class="program-description">Early-stage funding to fast-track commercialization of the technology solutions.</div>
                    <span class="program-row-see-details">See details &#x1F517;</span>
                  </div>
                  
                </div>
                <div class="flex program-separator"></div>
                <div class="program-row-checkbox"></div>
              </div>

              <div class="program-row program-row-top-border mobile-screen">
                <div class="program-row-number">
                  <div class="mobile-screen-number">2</div>
                  <the-checkbox></the-checkbox>
                </div>
                <div class="inner-container">
                  <div class="program-row-label">Double tax deduction for IP licensing costs</div>
                  <div class="program-row-description">
                    <div class="program-description">Supports companies licensing IP in Singapore and allows a deduction of double the costs incurred in securing IP.</div>
                    <span class="program-row-see-details">See details &#x1F517;</span>
                  </div>
                  
                </div>
                <div class="flex program-separator"></div>
                <div class="program-row-checkbox"></div>
              </div>

              <div class="program-row program-row-top-border mobile-screen">
                <div class="program-row-number">
                  <div class="mobile-screen-number">3</div>
                  <the-checkbox></the-checkbox>
                </div>
                <div class="inner-container">
                  <div class="program-row-label">IRS Co-creation Grants</div>
                  <div class="program-row-description">
                    <div class="program-description">Supports software developers in the development of innovative solutions for tax filing preparation or tax management.</div>
                    <span class="program-row-see-details">See details &#x1F517;</span>
                  </div>
                  
                </div>
                <div class="flex program-separator"></div>
                <div class="program-row-checkbox"></div>
              </div>


              <div class="program-row program-row-top-border mobile-screen">
                <div class="program-row-number">
                  <div class="mobile-screen-number">4</div>
                  <the-checkbox></the-checkbox>
                </div>
                <div class="inner-container">
                  <div class="program-row-label">Financial Sector Technology Scheme</div>
                  <div class="program-row-description">
                    <div class="program-description">Supports Financial Institutions (FI) in setting up innovation Centres of Excellence (COE) or labs in Singapore to test-bed innovative ideas and roll out market solutions.</div>
                    <span class="program-row-see-details">See details &#x1F517;</span>
                  </div>
                  
                </div>
                <div class="flex program-separator"></div>
                <div class="program-row-checkbox"></div>
              </div>

              <div class="explanation-text mobile-screen">
                We can conduct a preliminary evaluation of your company's suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process.
                <br /> <br /> We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation. 
                <br /> <br /> Check the programs you want to evaluate and click the button below.
              </div>


              <!-- desktop -->

              <div class="program-row program-row-top-border desktop-screen">
                <div class="program-row-number">1</div>
                <div class="program-row-label">Enterprise Development Grant</div>
                <div class="program-row-description">Early-stage funding to fast-track commercialization of the technology solutions.</div>
                <div class="flex"></div>
                <div class="program-row-see-details">See details</div>
                <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
              </div>

              <div class="program-row desktop-screen">
                <div class="program-row-number">2</div>
                <div class="program-row-label">Double tax deduction for IP licensing costs</div>
                <div class="program-row-description">Supports companies licensing IP in Singapore and allows a deduction of double the costs incurred in securing IP.</div>
                <div class="flex"></div>
                <div class="program-row-see-details">See details</div>
                <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
              </div>

              <div class="program-row desktop-screen">
                <div class="program-row-number">3</div>
                <div class="program-row-label">IRS Co-creation Grants</div>
                <div class="program-row-description">Supports software developers in the development of innovative solutions for tax filing preparation or tax management.</div>
                <div class="flex"></div>
                <div class="program-row-see-details">See details</div>
                <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
              </div>

              <div class="program-row desktop-screen">
                <div class="program-row-number">4</div>
                <div class="program-row-label">Financial Sector Technology Scheme</div>
                <div class="program-row-description">Supports Financial Institutions (FI) in setting up innovation Centres of Excellence (COE) or labs in Singapore to test-bed innovative ideas and roll out market solutions.</div>
                <div class="flex"></div>
                <div class="program-row-see-details">See details</div>
                <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
              </div>

              <div class="explanation-text desktop-screen">
                We can conduct a preliminary evaluation of your company's suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process. We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation. Check the programs you want to evaluate and click the button below.
              </div>

    `}});class K extends J{static get styles(){return Q`
      :host {
        font-size: 17px;
      }
      @media (max-width: 900px) {
        :host { font-size: 15px; }
        .buttons-container {
          font-size: 1.2rem;
        }
      }
      @media (max-width: 400px) {
        :host { font-size: 13px; }
        .buttons-container {
          font-size: 5rem;
        }
      }

      :host {
        display: flex;
        justify-items: center;
        align-items: center;
      }

      .main-container {
        font-size: 1em;
        
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .progress-bar-container {
        display: flex;
        height: 20px;
        padding: 10px 5px 10px 20px;
        font-size: 14px;
        border-bottom: 1px solid rgb(220,220,220);
      }

      .number-in-circle {
        background-color: rgb(220,220,220);
        border-radius: 20px;
        width: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        border: 2px solid rgb(92,219,149);
        color: rgb(117,117,117);
      }

      .step-name {
        color: rgb(117,117,117);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 10px;
      }

      .line-separator {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        flex: 1;
      }


      .line {
        background-color: lightgray;
        height: 1px;
        width: 100%;
      }

      .active {
        background-color: rgb(92,219,149);
        color: white;
      }

      .red {
        color: red;
      }


      .content-container {
        padding: 1.5em 2em;
        background-color: rgb(255,255,255);

        border-width: 1px;
        border-style: solid;
        border-color: rgb(220,220,220);
        border-radius: 10px;

      }


      .buttons-container {
        display: flex;
        margin-top: 1em;
      }

      .button {
        margin: 0em 20px 0em 20px;
        border-radius: 5px;
        font-size: 1em;
        padding: 10px;
        background-color: rgb(220,220,220);
        color: rgb(66,66,66);
      }

      .accent {
        background-color: rgb(92,219,149);
        color: white;
      }

      .flex {
        flex: 1;
      }

      .matches-heading {
        text-align: center;
        font-size: 1.7em;
        font-weight: 200;
        font-family: "Poppins",sans-serif;
      }

      .blocks-container {
        display: flex;
      }

      .block {
        flex: 1;
        background-color: rgb(41,152,244);
        margin: 1em;
        padding: 2em;
      }

      .block .title {
        color: rgb(255,188,0);
        text-transform: uppercase;
        font-size: .7em;
      }

      .numbers-block {
        margin-top: 3em;
        display: flex;
      }

      .numbers-block-heading {
        font-size: .65em;
        color: white;
      }

      .numbers-block-left-part {
        margin-right: .7em;
      }

      .number-of-tax-incentives, .total-value-of-tax-incentives {
        color: white;
        font-size: 1.5em;
        display: flex;
      }

      .currency-container {
        font-size: .7em;
      }

      .description-label {
        font-family: "Roboto",sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0em;
        text-transform: none;
        color: rgb(66,66,66);
      }

      .selected-step {
        color: black; 
      }

      .description-label {
        padding-left: 16px;
        margin-top: .1em;
        margin-bottom: .5em;
      }

      .program-row {
        display: flex;

        border-bottom: 1px solid lightgrey;

        padding: .7em;
      }

      .program-row-top-border {
        border-top: 1px solid lightgrey;
      }

      .program-row-number {
        font-family: "Roboto",sans-serif;
        font-size: 30px;
        font-style: normal;
        line-height: 1;
        letter-spacing: 0em;
        text-transform: none;
        color: #000;
        padding-right: 16px;
      }

      .program-row-label {
        font-family: "Roboto",sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0em;
        text-transform: none;
        color: #000;
        background-color: transparent;
        min-width: 240px;
        max-width: 240px;
      }


      .program-row-see-details {
        white-space: nowrap;
        color: rgb(77,161,255);
        margin-left: 1em;
      }
      
      .program-row-see-details:hover {
        color: rgb(245,147,54);
        cursor: pointer;
      }

      .program-row-checkbox {
        margin-left: 1em;
      }

      .explanation-text {
        font-family: "Roboto",sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0em;
        text-align: left;
        text-transform: none;
        color: rgb(66,66,66);

        margin-top: 1em;
      }

      .ok-next {
        cursor: pointer;
        outline: none;
        border: 1px solid transparent;
        margin: 0px;
        box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
        padding: .6rem 1rem;
        background-color: rgb(0, 175, 255);
        color: rgb(255, 255, 255);
        border-radius: 4px;
        min-width: 35px;
        font-family: "Poppins",sans-serif
      }

      @media only screen 
        and (max-device-width : 1080px) { 
          /* styles */
          .ok-next {
            font-size: 2rem;
          }
      }


      @media only screen 
        and (max-device-width : 667px) { 
          /* styles */
          .ok-next {
            font-size: 1.2em;
            padding: 8px 15px;
          }
      }


      .ok-next:hover {
        background-color: rgb(38, 187, 255);
      }

      .fill-white {
        fill: white;
        margin-left: .7em;
      }

      h4 {
        font-family: Poppins, sans-serif;
        font-size: 2em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em);
        text-transform: none;
        color: rgb(0, 0, 0);
        margin-top: 0;
        margin-bottom: .2em;
      }

      .intro-container {
        font-size: 1.2rem;
      }

      .intro-description {
        margin-top: 0.35em;
        font-family: Poppins, sans-serif;
        font-size: .8em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em);
        text-transform: none;
        color: rgb(117, 117, 117);

        animation: bounce; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 2s; /* don't forget to set a duration! */
      }

      .progress-bar {
        display: block;
        width: 100px;
        height: 20px;
        background-color: blue;
      }

      
      @media all and (max-width: 768px) {
          
          .content-container {
            max-width: 100%;
          }
      }


      


      .animate {
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }

      @-webkit-keyframes fadeInDown {
            0% {
               opacity: 0;
               -webkit-transform: translateY(-50px);
            }
            100% {
               opacity: 1;
               -webkit-transform: translateY(0);
            }
         }
         
         @keyframes fadeInDown {
            0% {
               opacity: 0;
               transform: translateY(-50px);
            }
            100% {
               opacity: 1;
               transform: translateY(0);
            }
         }

         .fadeInDown {
            -webkit-animation-name: fadeInDown;
            animation-name: fadeInDown;
         }
    `}static get properties(){return{}}constructor(){super(),this._configResponseRetrieved=!1,fetch("https://mithun-dot-avocado-backend-v1.appspot.com/v1/programmes/INCENTIVES").then(e=>e.json()).then(e=>this._parseResponse(e))}_parseResponse(e){this._configResponseRetrieved=!0,this.config=e,this.config.Steps.sort((e,t)=>e.SortOrder-t.SortOrder),this.requestUpdate(),this.currentStepIndex=0,this.currentStep=this.config.Steps[this.currentStepIndex],this.currentQuestionIndex=0,this.currentStep.Questions&&(this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex]),this.addEventListener("next-question",this._nextQuestion);let t=this;setTimeout(()=>{t.shadowRoot.querySelector("#information-description").innerHTML=this.currentStep.Description})}render(){return F` 
    
    ${this._configResponseRetrieved?F`
      
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
                <div class="main-container">
                  
                  <div class="content-container animate__animated" id="animate-container">
                    <div>

                  ${"QUESTION_ANSWER"===this.currentStep.Type?F`

                            <the-question .index="${this.currentQuestionIndex}" .item="${this.currentQuestion}" .AllowMultipleAnswers="${this.currentQuestion.AllowMultipleAnswers}"></the-question>
                        
                        `:F``}

                  ${"RESULTS"===this.currentStep.Type?F`
                          
                              <the-results></the-results>
                              
                          
                          `:F``}

                  ${"INFORMATION"===this.currentStep.Type?F`


              <!-- animate__fadeOutDown -->
                            <div class="intro-container">
                                <h4>${this.currentStep.Name}</h4>

                                <span id="information-description" class="intro-description"></span>

                                <div class="buttons-container">
                                  <the-button @click="${this.nextStepClicked}">Next</the-button>
                                  <div class="flex"></div>
                                </div>
                            </div>

                            
                          `:F``}


                    </div>
                  </div>
                </div>
      `:F``}

    `}nextStepClicked(){console.log("nextStepClicked"),this.currentStepIndex=this.currentStepIndex+1,this.currentStep=this.config.Steps[this.currentStepIndex],"QUESTION_ANSWER"===this.currentStep.Type&&(this.currentQuestionIndex=0,this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex]);const e=this.shadowRoot.querySelector("#animate-container");e.classList.add("animate__fadeOutUp");const t=this;setTimeout(()=>{e.classList.remove("animate__fadeOutUp"),t.requestUpdate(),e.classList.add("animate__fadeInUp"),"QUESTION_ANSWER"===this.currentStep.Type&&t._updateDescription(t.currentStep.Description)},1e3)}_updateDescription(e){let t=this;setTimeout(()=>{t.shadowRoot.querySelector("the-question")._updateDescription(e)})}_nextQuestion(e){if(console.log("_nextQuestion",e),this.currentQuestionIndex+1===this.currentStep.Questions.length)return this.currentQuestionIndex=0,void this.nextStepClicked();this.currentQuestionIndex=this.currentQuestionIndex+1,this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex];const t=this.shadowRoot.querySelector("#animate-container");t.classList.add("animate__fadeOutUp");const i=this;setTimeout(()=>{t.classList.remove("animate__fadeOutUp"),i.requestUpdate(),t.classList.add("animate__fadeInUp"),i.scrollTo({top:0,behavior:"smooth"})},1e3)}}window.customElements.define("singapore-incentives-match",K);export{K as SingaporeIncentivesMatch};
