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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${s}`);class o{constructor(t,e){this.parts=[],this.element=e;const s=[],o=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,d=-1,p=0;const{strings:f,values:{length:u}}=t;for(;p<u;){const t=a.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)r(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=f[p],i=h.exec(e)[2],s=i.toLowerCase()+"$lit$",o=t.getAttribute(s);t.removeAttribute(s);const r=o.split(n);this.parts.push({type:"attribute",index:d,name:i,strings:r}),p+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,o=e.split(n),a=o.length-1;for(let e=0;e<a;e++){let s,n=o[e];if(""===n)s=c();else{const t=h.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++d})}""===o[a]?(i.insertBefore(c(),t),s.push(t)):t.data=o[a],p+=a}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&d!==l||(d++,e.insertBefore(c(),t)),l=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(s.push(t),d--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},a=t=>-1!==t.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let o=p(s),r=s[o],a=-1,c=0;const h=[];let l=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(h.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==r&&r.index===a;)r.index=null!==l?-1:r.index-c,o=p(s,o),r=s[o]}h.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(a(e))return i}return-1};
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
const f=new WeakMap,u=t=>"function"==typeof t&&f.has(t),m={},g={};
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
class b{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,r=0,c=0,h=n.nextNode();for(;r<s.length;)if(o=s[r],a(o)){for(;c<o.index;)c++,"TEMPLATE"===h.nodeName&&(i.push(h),n.currentNode=h.content),null===(h=n.nextNode())&&(n.currentNode=i.pop(),h=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(h,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const x=` ${i} `;class w{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const a=h.exec(t);e+=null===a?t+(n?x:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(v(t)||!y(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||v(t)&&t===this.value||(this.value=t,u(t)||(this.committer.dirty=!0))}commit(){for(;u(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=c()),t.s(this.endNode=c())}insertAfterPart(t){t.s(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;u(this.i);){const t=this.i;this.i=m,t(this)}const t=this.i;t!==m&&(v(t)?t!==this.value&&this.o(t):t instanceof w?this.h(t):t instanceof Node?this.l(t):y(t)?this.p(t):t===g?(this.value=g,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const i=new b(e,t.processor,this.options),s=i._clone();i.update(t.values),this.l(s),this.value=i}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new S(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class j{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;u(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=m}}class $ extends k{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class q extends _{}let C=!1;(()=>{try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class z{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.u=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;u(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.u,this.m),s&&(this.m=T(t),this.element.addEventListener(this.eventName,this.u,this.m)),this.value=t,this.i=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function E(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const R=new Map,A=new WeakMap;
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
 */const O=new
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
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new $(t,e.slice(1),i).parts}return"@"===n?[new z(t,e.slice(1),s.eventContext)]:"?"===n?[new j(t,e.slice(1),i)]:new k(t,e,i).parts}handleTextExpression(t){return new S(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const N=(t,...e)=>new w(t,e,"html",O)
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
 */,P=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const M=t=>e=>{const s=P(e.type,t);let n=R.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(s,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(i);if(r=n.keyString.get(a),void 0===r){const i=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o(e,i),n.keyString.set(a,r)}return n.stringsArray.set(e.strings,r),r},U=["html","svg"],L=new Set,B=(t,e,i)=>{L.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{U.forEach(e=>{const i=R.get(P(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),l(t,i)})})})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let r=p(n),a=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===i&&(a=d(e),i.parentNode.insertBefore(e,i));-1!==r&&n[r].index===c;){if(a>0){for(;-1!==r;)n[r].index+=a,r=p(n,r);return}r=p(n,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),l(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const D={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Q=(t,e)=>e!==t&&(e==e||t==t),V={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Q};class F extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=V){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||V}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Q){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||D,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||D.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=V){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,n=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}F.finalized=!0;
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
const W="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class H{constructor(t,e){if(e!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(W?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof H)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new H(i,J)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Z={};class G extends F{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?W?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Z}}G.finalized=!0,G.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=A.has(i),r=I&&11===i.nodeType&&!!i.host,a=r&&!L.has(n),c=a?document.createDocumentFragment():i;if(((t,i,s)=>{let n=A.get(i);void 0===n&&(e(i,i.firstChild),A.set(i,n=new S(Object.assign({templateFactory:E},s))),n.appendInto(i)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:M(n)},s)),a){const t=A.get(c);A.delete(c);const s=t.value instanceof b?t.value.template:void 0;B(n,c,s),e(i,i.firstChild),i.appendChild(c),A.set(i,t)}!o&&r&&window.ShadyCSS.styleElement(i.host)};window.customElements.define("the-checkbox",class extends G{static get styles(){return Y`
      svg {
        display: none;
      }
      
      svg[checked] {
        display: block;
        fill: #15861b
      }
    `}static get properties(){return{selected:Boolean}}constructor(){super()}render(){return N`
      <svg ?checked="${this.selected}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
    `}});window.customElements.define("the-button",class extends G{static get styles(){return Y`
      :host {
        display: inline-block;
        --button-background-color-accent: rgb(245, 147, 54);
        --button-background-color: rgba(255,255,255,1);
        --button-text-color: rgb(77, 161, 255);
      }

      a.button {
        background-color: var(--button-background-color);
        border-radius: 3px;
        height: 33px;
        display:flex;
        align-items: center;
        padding: 0.3em 1.2em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto',sans-serif;
        font-weight: 300;
        font-size: 13px;
        color: var(--button-text-color);
        text-align: center;
        transition: all 0.2s;
        text-transform: uppercase;
      }
      
      :host([accent]) a.button {
        background-color: var(--button-background-color-accent);
        color: white;
      }

      :host([disabled]) a.button {
        background-color: rgba(0, 0, 0, 0.07);
        color: rgba(0, 0, 0, 0.40);
      }

      a.button:hover {
        opacity: 0.8;
      }

      :host([disabled]) a.button:hover {
        opacity: 1;
        cursor: default;
      }



      @media all and (max-width:30em){
       a.button {
        display: block;
        margin: 0.2em auto;
      }
    `}static get properties(){return{disabled:{reflect:!0}}}constructor(){super()}render(){return N`
      <a href="#" class="button"><slot></slot></a>
    `}});window.customElements.define("the-question",class extends G{static get styles(){return Y`
      :host {
        display: flex;
      }

      .question-container {
        font-size: 1.2rem;
        padding: var(--desciption-padding);
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

      .answers-container {
        padding: var(--desciption-padding);
        padding-bottom: 0;
        
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

      .description {
        color: var(--desciption-color);
        font-family: var(--desciption-font-family);
        font-size: var(--desciption-font-size);
        font-weight: var(--desciption-font-weight);
        line-height: var(--desciption-line-height);
        padding: var(--desciption-padding);
      }

      .hint {
        color: var(--hint-color);
        font-family: var(--hint-font-family);
        font-size: var(--hint-font-size);
        font-weight: var(--hint-font-weight);
        line-height: var(--hint-line-height);
        padding: var(--desciption-padding);
        padding-top: 1.7em;
      }

    `}static get properties(){return{item:Object,index:Number,allowMultipleAnswers:Boolean}}constructor(){super(),this.answers=new Set,this.addEventListener("answer-selected",this._answerSelected)}render(){return N`
                  <div class="question-container">
                    <div id="information-description" class="question-description description"></div>
                    <div class="hint">
                      ${this.item.AllowMultipleAnswers?N`Please select one or more and click next`:N`Please select one`}
                    </div>
                    <div class="answers-container">


                      ${this.item.AnswerOptions.map((t,e)=>N`
                          <the-answer .question="${this.item}" Code="${t.Code}" .item="${t}"></the-answer>
                        `)}
                      
                    </div>

                  </div>
    `}_answerSelected(t){const e=t.detail.answer.Code;if(this.shadowRoot.querySelectorAll("the-answer").forEach(t=>{t.item.Code===e?t.selected?(console.log("answer-deselected",e),t.deselect()):(console.log("answer-selected",e),t.select()):this.item.AllowMultipleAnswers||t.deselect()}),!this.AllowMultipleAnswers){const t=this;setTimeout(()=>{t._nextQuestionClicked()},300)}}_nextQuestionClicked(t){this._clearSelection();const e={questionKey:this.item._Key,answers:[...this.answers]};let i=new CustomEvent("next-question",{detail:e,bubbles:!0,composed:!0});this.answers=new Set,this.dispatchEvent(i)}_updateDescription(){let t=this;setTimeout(()=>{t.shadowRoot.querySelector("#information-description").innerHTML=this.item.Description})}_clearSelection(){this.shadowRoot.querySelectorAll("the-answer").forEach(t=>{t.deselect()})}});window.customElements.define("the-answer",class extends G{static get styles(){return Y`
      :host {
        display: inline-block;
        font-size: 1.5em;
      }

      .answer-container {
        transition: background-color 1s ease;
        background-color: transparent;
        color: rgb(2, 0, 35);
        margin: .6em 1.2em .6em 0;
        cursor: pointer;
        padding: 1em;
        min-width: 300px;
        max-width: 300px;
        border: 1px solid lightgrey;
        border-radius: 5px;
      }

      .answer-container:not(.selected):hover {
        background-color: rgb(192 214 255 / 20%);
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

      [selected="true"] {
        background-color: rgb(118 154 220 / 20%);
        color: rgb(2, 0, 35);
      }

      .spacing {
        flex: 1;
      }

      .inner-option-text-container {
        width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      
    `}static get properties(){return{selected:Boolean,item:Boolean,question:Object}}constructor(){super(),this.selected=!1,this.disabled=!0}render(){return N`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

        <div id="answer-container" class="answer-container animate__animated" selected="${this.selected}" @click="${this._selectAnswerEvent}">
            <div class="answer-label">
              <div class="inner-option-text-container" title="${this.item.AnswerText}">${this.item.AnswerText}</div><the-checkbox .selected="${this.selected}" .disabled="${this.disabled}"></the-checkbox>
              <div class="spacing"></div>
            </div>
        </div>
    `}_selectAnswerEvent(){const t=this.shadowRoot.querySelector("#answer-container");t.classList.remove("animate__pulse"),this.selected||setTimeout(()=>{t.classList.add("animate__pulse")}),this.answerSelectedEvent()}answerSelectedEvent(){let t=new CustomEvent("answer-selected",{detail:{question:this.question,answer:this.item,selected:this.selected},bubbles:!0,composed:!0});this.dispatchEvent(t)}select(){this.selected=!0,this.requestUpdate()}deselect(){this.selected=!1,this.requestUpdate()}});window.customElements.define("the-results",class extends G{static get styles(){return Y`
      :host {
        justify-content: center;
        align-items: center;
        display: flex;
        flex: 1;
      }

      .matches-heading {
        text-align: center;
        margin-bottom: 3em;
      }

      .button-container {
        display: flex;
        justify-content: center;
      }

      the-button {
        transform: scale(2);
      }

      .description {
        color: var(--desciption-color);
        font-family: var(--desciption-font-family);
        font-size: var(--desciption-font-size);
        font-weight: var(--desciption-font-weight);
        line-height: var(--desciption-line-height);
        padding: var(--desciption-padding);
      }

      [hidden] {
        display: none;
      }

      
    `}static get properties(){return{selected:Boolean,item:Boolean,teaserSearchResponse:Object,isLoaded:Boolean}}constructor(){super(),this.selected=!1,this.teaserSearchResponse={Result:""},this.isLoaded=!1}render(){return N`

            <div class="description" ?hidden="${!this.isLoaded}">
              <p class="matches-heading">${this.teaserSearchResponse.Result}</p>
              <div class="button-container">
                <the-button accent @click="${this.navigateToPlatform}">Sign Up</the-button>
              </div>
            </div>

            <the-spinner ?hidden="${this.isLoaded}"></the-spinner>


    `}navigateToPlatform(){console.log("navigateToPlatform");let t=new CustomEvent("proceed-to-the-platform",{detail:this.item,bubbles:!0,composed:!0});this.dispatchEvent(t)}});window.customElements.define("the-spinner",class extends G{static get styles(){return Y`
      :host {
        justify-content: center;
        align-items: center;
        display: flex;
        flex: 1;

      }

      svg {
        height: 5em;
        width: 5em;
      }
  
    `}static get properties(){return{}}constructor(){super()}render(){return N`
      <svg id="ejcxqkbnfhk1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 69.616000 69.616000" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><style><![CDATA[#ejcxqkbnfhk4_ts {animation: ejcxqkbnfhk4_ts__ts 900ms linear infinite alternate forwards}@keyframes ejcxqkbnfhk4_ts__ts { 0% {transform: translate(535.758000px,446.031046px) scale(1,1);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)} 88.888889% {transform: translate(535.758000px,446.031046px) scale(2,2)} 100% {transform: translate(535.758000px,446.031046px) scale(2,2)} }#ejcxqkbnfhk8_tr {animation: ejcxqkbnfhk8_tr__tr 900ms linear infinite alternate forwards}@keyframes ejcxqkbnfhk8_tr__tr { 0% {transform: translate(541px,452.999835px) rotate(46.055270deg);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)} 88.888889% {transform: translate(541px,452.999835px) rotate(-136.088346deg)} 100% {transform: translate(541px,452.999835px) rotate(-136.088346deg)} }#ejcxqkbnfhk8_ts {animation: ejcxqkbnfhk8_ts__ts 900ms linear infinite alternate forwards}@keyframes ejcxqkbnfhk8_ts__ts { 0% {transform: scale(0.500000,0.500000);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)} 88.888889% {transform: scale(1,1)} 100% {transform: scale(1,1)} }#ejcxqkbnfhk9_tr {animation: ejcxqkbnfhk9_tr__tr 900ms linear infinite alternate forwards}@keyframes ejcxqkbnfhk9_tr__tr { 0% {transform: translate(541px,453.000046px) rotate(225deg);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)} 88.888889% {transform: translate(541px,453.000046px) rotate(404.101875deg)} 100% {transform: translate(541px,453.000046px) rotate(404.101875deg)} }#ejcxqkbnfhk9_ts {animation: ejcxqkbnfhk9_ts__ts 900ms linear infinite alternate forwards}@keyframes ejcxqkbnfhk9_ts__ts { 0% {transform: scale(0.500000,0.500000);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)} 88.888889% {transform: scale(1,1)} 100% {transform: scale(1,1)} }]]></style><g id="ejcxqkbnfhk2" transform="matrix(1 0 0 1 -506.19200000000001 -418.19200000000001)"><g id="ejcxqkbnfhk3" transform="matrix(0.50000000000000 0 0 0.50000000000000 273.12101306000000 229.98451818750002)"><g id="ejcxqkbnfhk4_ts" transform="translate(535.758000,446.031046) scale(1,1)"><g id="ejcxqkbnfhk4" transform="translate(-535.449982,-445.694550)"><path id="ejcxqkbnfhk5" d="M121.257483,424.587000L111.290517,424.587000C110.332378,424.589199,109.556200,425.365146,109.554000,426.323000C109.556105,426.780390,109.740570,427.218058,110.066525,427.539035C110.392480,427.860012,110.833011,428.037797,111.290517,428.033000L121.257483,428.033000C121.714989,428.037797,122.155520,427.860012,122.481475,427.539035C122.807430,427.218058,122.991895,426.780390,122.994000,426.323000C122.991800,425.365146,122.215622,424.589199,121.257483,424.587000Z" transform="matrix(1 0 0 1 419.17800000000000 12.17500000000001)" fill="rgb(77,161,255)" stroke="none" stroke-width="1"/><path id="ejcxqkbnfhk6" d="M121.257483,485.907000L111.290517,485.907000C110.332378,485.909199,109.556200,486.685146,109.554000,487.643000C109.556105,488.100390,109.740570,488.538058,110.066525,488.859035C110.392480,489.180012,110.833011,489.357797,111.290517,489.353000L121.257483,489.353000C121.714989,489.357797,122.155520,489.180012,122.481475,488.859035C122.807430,488.538058,122.991895,488.100390,122.994000,487.643000C122.991800,486.685146,122.215622,485.909199,121.257483,485.907000Z" transform="matrix(1 0 0 1 419.17800000000000 -41.93599999999998)" fill="rgb(77,161,255)" stroke="none" stroke-width="1"/><path id="ejcxqkbnfhk7" d="M121.257483,547.226000L111.290517,547.226000C110.332378,547.228199,109.556200,548.004146,109.554000,548.962000C109.555840,549.419563,109.740188,549.857489,110.066171,550.178682C110.392155,550.499876,110.832839,550.677798,111.290517,550.673000L121.257483,550.673000C121.715161,550.677798,122.155845,550.499876,122.481829,550.178682C122.807812,549.857489,122.992160,549.419563,122.994000,548.962000C122.991800,548.004146,122.215622,547.228199,121.257483,547.226000Z" transform="matrix(1 0 0 1 419.17800000000000 -96.04599999999999)" fill="rgb(245,147,54)" stroke="none" stroke-width="1"/></g></g></g><g id="ejcxqkbnfhk8_tr" transform="translate(541,452.999835) rotate(46.055270)"><g id="ejcxqkbnfhk8_ts" transform="scale(0.500000,0.500000)"><path id="ejcxqkbnfhk8" d="M23.620030,0C36.665012,0,47.240060,10.571900,47.240060,23.613000C47.240060,36.654100,36.665012,47.226000,23.620030,47.226000C10.575048,47.226000,0,36.654100,0,23.613000" transform="translate(-23.613000,-23.613000)" fill="none" stroke="rgb(77,161,255)" stroke-width="2" stroke-linecap="round"/></g></g><g id="ejcxqkbnfhk9_tr" transform="translate(541,453.000046) rotate(225)"><g id="ejcxqkbnfhk9_ts" transform="scale(0.500000,0.500000)"><path id="ejcxqkbnfhk9" d="M18.575528,0C28.834510,0,37.151057,8.314072,37.151057,18.570000C37.151057,28.825928,28.834510,37.140000,18.575528,37.140000C8.316547,37.140000,0,28.825928,0,18.570000" transform="translate(-18.570000,-18.570000)" fill="none" stroke="rgb(245,147,54)" stroke-width="2" stroke-linecap="round"/></g></g></g></svg>
    `}});class K extends G{static get styles(){return Y`
      :host {
        --main-bg-color: brown;
        --heading-font-color: rgb(77, 161, 255);
        --heading-font-weight: normal;
        --heading-font-margin: 48px 0 24px -20px;
        --heading-font-padding: 8px 20px;
        --heading-font-font-size: 1.6em;
        --heading-font-weight: 300;
        --heading-font-family: "Roboto", sans-serif;
        --heading-font-background-color: rgba(0, 106, 177, 0.05);


        --desciption-color: rgb(0, 0, 0);
        --desciption-font-family: "Roboto Regular", RobotoDraft, Roboto, sans-serif;
        --desciption-font-size: 16px;
        --desciption-font-weight: 100;
        --desciption-line-height: 24px;
        --desciption-padding: var(--heading-font-padding);

        --hint-color: rgba(0, 0, 0, 0.87);
        --hint-font-family: "Roboto Regular", RobotoDraft, Roboto, sans-serif;
        --hint-font-size: 16px;
        --hint-font-weight: 700;
        --hint-line-height: 24px;
      }


      .heading {
        color: var(--heading-font-color);
        font-weight: var(--heading-font-weight);
        padding: var(--heading-font-padding);
        font-size: var(--heading-font-font-size);
        font-weight: var(--heading-font-weight);
        font-family: var(--heading-font-family);
        background-color: var(--heading-font-background-color);
      }

      .description {
        color: var(--desciption-color);
        font-family: var(--desciption-font-family);
        font-size: var(--desciption-font-size);
        font-weight: var(--desciption-font-weight);
        line-height: var(--desciption-line-height);
        padding: var(--desciption-padding);
      }



      .into-text-wrapper {
        margin: 1em;
      }

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

        min-height: 80vh;
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
        background-color: rgb(255,255,255);

        border-width: 1px;
        border-style: solid;
        border-color: rgb(220,220,220);
        border-radius: 10px;

        display: flex;
        flex-direction: column;

        width: 100%;

      }

      .content-flex {
        flex: 1;
      }

      .buttons-bottom-bar {
        display: block;
        display: flex;
        padding: 1em;
        border-top: 1px solid lightgrey;
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
        display: flex;
        flex-direction: column;
      }

      .intro-description {

      }

      .progress-bar {
        display: block;
        width: 100px;
        height: 20px;
        background-color: blue;
      }

      .top-part-container {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      
      @media all and (max-width: 768px) {
          
          .content-container {
            max-width: 100%;
          }
      }

      .inner-content-container {
        padding: 1em;
        display: flex;
        height: 100%;
      }

      .content-free-space {
        justify-content: center;
        align-items: center;
        display: flex;
        flex: 1;
      }

      .content-free-space the-button {
        transform: scale(2);
      }


      


      .animate {
        -webkit-animation-duration: .3s;
        animation-duration: .3s;
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
    `}static get properties(){return{answers:Object,isButtonDisabled:Boolean}}constructor(){super(),Array.prototype.remove=function(t){var e=this.findIndex(e=>e===t);return-1!=e&&this.splice(e,1),this},this._configResponseRetrieved=!1,this.answers={},this.isButtonDisabled=!0,this.requestUpdate(),fetch("https://mithun-dot-avocado-backend-v1.appspot.com/v1/programmes/INCENTIVES").then(t=>t.json()).then(t=>this._parseResponse(t))}_parseResponse(t){this._configResponseRetrieved=!0,this.config=t,this.config.Steps.sort((t,e)=>t.SortOrder-e.SortOrder),this.requestUpdate(),this.currentStepIndex=0,this.currentStep=this.config.Steps[this.currentStepIndex],this.currentQuestionIndex=0,this.currentStep.Questions&&(this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex]),this.addEventListener("next-question",this._nextQuestionListener),this.addEventListener("proceed-to-the-platform",this._proceedToThePlatform),this.addEventListener("answer-selected",this._answerSelected),setTimeout(()=>{})}render(){return N` 
    
    ${this._configResponseRetrieved?N`
      
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
                <div class="main-container">
                  
                  <div class="content-container">
                    <div class="animate__animated top-part-container" id="animate-container">
                      <div class="inner-content-container">

                          ${"QUESTION_ANSWER"===this.currentStep.Type?N`

                              <the-question .index="${this.currentQuestionIndex}" .item="${this.currentQuestion}" .AllowMultipleAnswers="${this.currentQuestion.AllowMultipleAnswers}"></the-question>
                          
                          `:N``}

                          ${"RESULTS"===this.currentStep.Type?N`
                            
                              <the-results></the-results>
                            
                          `:N``}

                          ${"INFORMATION"===this.currentStep.Type?N`


                              <div class="intro-container">
                                  <h1 class="heading">${this.currentStep.Name}</h1>

                                  <div class="into-text-wrapper">
                                    <span id="information-description" class="intro-description description">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </span>
                                  </div>


                                  <div class="content-free-space">

                                    ${"INFORMATION"===this.currentStep.Type?N`

                                        <the-button accent @click="${this.nextStepClicked}">Get Started</the-button>

                                    `:N``}   

                                  </div>


                              </div>

                              
                            `:N``}

                      </div>




                      <div class="buttons-bottom-bar">
                      <div class="content-flex"></div>
                      <div class="buttons-right-container">
                        ${"INFORMATION"===this.currentStep.Type?N`
                              
                              <the-button accent @click="${this.nextStepClicked}">Get Started</the-button>
                            `:N``}

                        ${"QUESTION_ANSWER"===this.currentStep.Type?N`
                              <the-button @click="${this.backClicked}">Back</the-button>
                              <the-button accent ?disabled="${this.isButtonDisabled}" @click="${this._nextQuestion}">Next</the-button>
                            `:N``}

                        ${"RESULTS"===this.currentStep.Type?N`
                              <the-button @click="${this.backClicked}">Back</the-button>
                              <the-button accent @click="${this._proceedToThePlatform}">Sign Up</the-button>
                            `:N``}
                        
                      </div>
                    </div>
                    </div>

                  </div>
                </div>
      `:N``}

    `}_answerSelected(t){const e=t.detail.question,i=t.detail.answer,s=t.detail.selected;!!this.answers[e._Key]||(this.answers[e._Key]=[]),s?this.answers[e._Key].remove(i.Code):this.answers[e._Key].push(i.Code),this.isButtonDisabled=0===this.answers[e._Key].length,this.requestUpdate(),console.log("_answerSelected",this.answers[e._Key],this.answers,this.isButtonDisabled)}backClicked(){const t=`step ${this.currentStepIndex} of ${this.config.Steps.length}`,e=`question ${this.currentQuestionIndex} of ${this.currentStep.Questions.length}`;if(console.log(t),console.log(e),0===this.currentQuestionIndex)return this.currentStepIndex=this.currentStepIndex-1,this.currentStep=this.config.Steps[this.currentStepIndex],this.currentQuestionIndex=this.currentStep.Questions.length-1,this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex],this.answers[this.currentQuestion._Key]=[],void this.backAnimationTransition();this.currentQuestionIndex=this.currentQuestionIndex-1,this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex],this.answers[this.currentQuestion._Key]=[],this.backAnimationTransition()}backAnimationTransition(){const t=this.shadowRoot.querySelector("#animate-container");t.classList.add("animate__slideOutRight");const e=this;setTimeout(()=>{t.classList.remove("animate__slideOutRight"),e.requestUpdate(),t.classList.add("animate__slideInLeft"),"QUESTION_ANSWER"===this.currentStep.Type&&e._updateDescription()},300)}nextStepClicked(){if(console.log("nextStepClicked"),this.isButtonDisabled=!0,this.requestUpdate(),this.currentStepIndex=this.currentStepIndex+1,this.currentStep=this.config.Steps[this.currentStepIndex],"QUESTION_ANSWER"===this.currentStep.Type&&(this.currentQuestionIndex=0,this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex]),"RESULTS"===this.currentStep.Type){let t=[];for(const[e,i]of Object.entries(this.answers))console.log(`${e}: ${i}`),t.push({questionKey:e,answers:i});fetch("https://mithun-dot-avocado-backend-v1.appspot.com/v1/programmes/INCENTIVES/teaser-search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>{const e=this.shadowRoot.querySelector("the-results");this.teaserSearchResponse=t,e.teaserSearchResponse=this.teaserSearchResponse,e.isLoaded=!0,e.requestUpdate(),console.log("teaserSearchResponse",t)})}const t=this.shadowRoot.querySelector("#animate-container");t.classList.add("animate__slideOutLeft");const e=this;setTimeout(()=>{t.classList.remove("animate__slideOutLeft"),e.requestUpdate(),t.classList.add("animate__slideInRight"),"QUESTION_ANSWER"===this.currentStep.Type&&e._updateDescription()},300)}_updateDescription(t){let e=this;setTimeout(()=>{e.shadowRoot.querySelector("the-question")._updateDescription()})}_nextQuestion(t){console.log("_nextQuestion"),this.isButtonDisabled||this._nextQuestionListener()}_nextQuestionListener(t){console.log("_nextQuestionListener"),this.shadowRoot.querySelector("the-question")._clearSelection(),this._nextQuestionTransition(),this.isButtonDisabled=!0}_nextQuestionTransition(){if(this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex],this.currentQuestionIndex+1===this.currentStep.Questions.length)return this.currentQuestionIndex=0,void this.nextStepClicked();this.currentQuestionIndex=this.currentQuestionIndex+1,this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex];const t=this.shadowRoot.querySelector("#animate-container");t.classList.add("animate__slideOutLeft");const e=this;setTimeout(()=>{t.classList.remove("animate__slideOutLeft"),e.requestUpdate(),t.classList.add("animate__slideInRight"),e.scrollTo({top:0,behavior:"smooth"}),"QUESTION_ANSWER"===this.currentStep.Type&&e._updateDescription()},300)}_proceedToThePlatform(t){"localhost"===location.hostname?location.href="http://localhost:3000/matchme?AnonymousUserId="+this.teaserSearchResponse.AnonymousUserId:location.href="https://avocado-platform-qa.web.app/matchme?AnonymousUserId="+this.teaserSearchResponse.AnonymousUserId}}window.customElements.define("singapore-incentives-match",K);export{K as SingaporeIncentivesMatch};
