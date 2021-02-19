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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${s}`);class o{constructor(t,e){this.parts=[],this.element=e;const s=[],o=[],h=document.createTreeWalker(e.content,133,null,!1);let c=0,l=-1,u=0;const{strings:p,values:{length:f}}=t;for(;u<f;){const t=h.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)n(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],i=d.exec(e)[2],s=i.toLowerCase()+"$lit$",o=t.getAttribute(s);t.removeAttribute(s);const n=o.split(r);this.parts.push({type:"attribute",index:l,name:i,strings:n}),u+=n.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),h.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,o=e.split(r),h=o.length-1;for(let e=0;e<h;e++){let s,r=o[e];if(""===r)s=a();else{const t=d.exec(r);null!==t&&n(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++l})}""===o[h]?(i.insertBefore(a(),t),s.push(t)):t.data=o[h],u+=h}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&l!==c||(l++,e.insertBefore(a(),t)),c=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(s.push(t),l--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),u++}}else h.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const n=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},h=t=>-1!==t.index,a=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,e){const{element:{content:i},parts:s}=t,r=document.createTreeWalker(i,133,null,!1);let o=u(s),n=s[o],h=-1,a=0;const d=[];let c=null;for(;r.nextNode();){h++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&a++;void 0!==n&&n.index===h;)n.index=null!==c?-1:n.index-a,o=u(s,o),n=s[o]}d.forEach(t=>t.parentNode.removeChild(t))}const l=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(h(e))return i}return-1};
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
const p=new WeakMap,f=t=>"function"==typeof t&&p.has(t),m={},g={};
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
class w{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o,n=0,a=0,d=r.nextNode();for(;n<s.length;)if(o=s[n],h(o)){for(;a<o.index;)a++,"TEMPLATE"===d.nodeName&&(i.push(d),r.currentNode=d.content),null===(d=r.nextNode())&&(r.currentNode=i.pop(),d=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(d,o.name,o.strings,this.options));n++}else this.t.push(void 0),n++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const b=` ${i} `;class v{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let o=0;o<t;o++){const t=this.strings[o],n=t.lastIndexOf("\x3c!--");r=(n>-1||r)&&-1===t.indexOf("--\x3e",n+1);const h=d.exec(t);e+=null===h?t+(r?b:s):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ${constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(x(t)||!y(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(a()),this.endNode=t.appendChild(a())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=a()),t.s(this.endNode=a())}insertAfterPart(t){t.s(this.startNode=a()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.i);){const t=this.i;this.i=m,t(this)}const t=this.i;t!==m&&(x(t)?t!==this.value&&this.o(t):t instanceof v?this.h(t):t instanceof Node?this.l(t):y(t)?this.u(t):t===g?(this.value=g,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const i=new w(e,t.processor,this.options),s=i._clone();i.update(t.values),this.l(s),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const r of t)i=e[s],void 0===i&&(i=new S(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(r),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=m}}class E extends ${constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends _{}let D=!1;(()=>{try{const t={get capture(){return D=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.p,this.m),s&&(this.m=A(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(D?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function P(t){let e=k.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},k.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const r=t.strings.join(i);return s=e.keyString.get(r),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(r,s)),e.stringsArray.set(t.strings,s),s}const k=new Map,I=new WeakMap;
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
 */const M=new
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
class{handleAttributeExpressions(t,e,i,s){const r=e[0];if("."===r){return new E(t,e.slice(1),i).parts}return"@"===r?[new T(t,e.slice(1),s.eventContext)]:"?"===r?[new C(t,e.slice(1),i)]:new $(t,e,i).parts}handleTextExpression(t){return new S(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const F=(t,...e)=>new v(t,e,"html",M)
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
 */,B=(t,e)=>`${t}--${e}`;let N=!0;void 0===window.ShadyCSS?N=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),N=!1);const U=t=>e=>{const s=B(e.type,t);let r=k.get(s);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},k.set(s,r));let n=r.stringsArray.get(e.strings);if(void 0!==n)return n;const h=e.strings.join(i);if(n=r.keyString.get(h),void 0===n){const i=e.getTemplateElement();N&&window.ShadyCSS.prepareTemplateDom(i,t),n=new o(e,i),r.keyString.set(h,n)}return r.stringsArray.set(e.strings,n),n},j=["html","svg"],L=new Set,z=(t,e,i)=>{L.add(t);const s=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const n=document.createElement("style");for(let t=0;t<o;t++){const e=r[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}(t=>{j.forEach(e=>{const i=k.get(B(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),c(t,i)})})})(t);const h=s.content;i?function(t,e,i=null){const{element:{content:s},parts:r}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let n=u(r),h=0,a=-1;for(;o.nextNode();){for(a++,o.currentNode===i&&(h=l(e),i.parentNode.insertBefore(e,i));-1!==n&&r[n].index===a;){if(h>0){for(;-1!==n;)r[n].index+=h,n=u(r,n);return}n=u(r,n)}}}(i,n,h.firstChild):h.insertBefore(n,h.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const a=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else if(i){h.insertBefore(n,h.firstChild);const t=new Set;t.add(n),c(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const V={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},R=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:R};class q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=R){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||V,r="function"==typeof s?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||V.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=H){const s=this.constructor,r=s._attributeNameForProperty(t,i);if(void 0!==r){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,r=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}q.finalized=!0;
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
const J="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol();class X{constructor(t,e){if(e!==W)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new X(i,W)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const K={};class Q extends q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?J?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==K&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return K}}Q.finalized=!0,Q.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,o=I.has(i),n=N&&11===i.nodeType&&!!i.host,h=n&&!L.has(r),a=h?document.createDocumentFragment():i;if(((t,i,s)=>{let r=I.get(i);void 0===r&&(e(i,i.firstChild),I.set(i,r=new S(Object.assign({templateFactory:P},s))),r.appendInto(i)),r.setValue(t),r.commit()})(t,a,Object.assign({templateFactory:U(r)},s)),h){const t=I.get(a);I.delete(a);const s=t.value instanceof w?t.value.template:void 0;z(r,a,s),e(i,i.firstChild),i.appendChild(a),I.set(i,t)}!o&&n&&window.ShadyCSS.styleElement(i.host)};window.customElements.define("draggable-entity",class extends Q{static get styles(){return G`
      :host {
        background-color: white;
        display: flex;
        border: solid 1px gray;
        padding: 1em;
        height: 1em;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #d6d6d6;
        max-width: var(--right-side-width);
        display: flex;
        position: relative;
      }

      ::slotted(*) {
        padding-left: 1em;
        font-size: var(--choice-item-font-size, 1em);
        line-height: var(--choice-item-line-height, 1em);
        font-weight: var(--choice-item-font-weight, 100);
        flex: 7;
        color: var(--choice-item-text-color, black);
        display: flex;
        align-items: center;
      }
      
      :host([selected="true"]) {
        border: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to right, #f49336, #eea81b, #e0bf00, #cad500, #a8eb12);
      }
    `}static get properties(){return{control:{type:String}}}constructor(){super()}render(){return F`
      <slot></slot>
    `}});window.customElements.define("form-item",class extends Q{static get styles(){return G`
      :host {
        border-radius: 5px;
      }

      .container {
        background-color: white;
        display: flex;
        padding: 1em;
        height: 1em;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #d6d6d6;
        max-width: var(--right-side-width);
        display: flex;
        position: relative;
      }

      ::slotted(*) {
        padding-left: 1em;
        font-size: var(--choice-item-font-size, 1em);
        line-height: var(--choice-item-line-height, 1em);
        font-weight: var(--choice-item-font-weight, 100);
        flex: 7;
        color: var(--choice-item-text-color, black);
        display: flex;
        align-items: center;
      }
      
      [selected="true"] {
        border-radius: 0;
        border: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to right, #f49336, #eea81b, #e0bf00, #cad500, #a8eb12);
      }

      [hidden="true"] {
        display: none
      }

      .spot {
        background-image: linear-gradient(to right, #f49336, #eea81b, #e0bf00, #cad500, #a8eb12);
        padding: 1em 0;
      }

      .top-offset {
        margin-top: 1em;
      }

      .bottom-offset {
        margin-bottom: 1em;
      }
    `}static get properties(){return{selected:{type:Boolean,converter:(t,e)=>"true"===t},isDraggedOver:{type:Boolean},isFromTopToBottom:{type:Boolean}}}constructor(){super(),this.isDraggedOver=!1,this.fromTopToBottom=!0}render(){return F`
      <div class="container spot bottom-offset" hidden="${!this._isTopSpotShown(this.isDraggedOver,this.isFromTopToBottom)}"></div>
      <div class="container" selected=${this.selected}>
        <slot></slot> 
      </div>
      <div class="container spot top-offset" hidden="${!this._isBottomSpotShown(this.isDraggedOver,this.isFromTopToBottom)}"></div>
    `}onDraggedOver(){this.isDraggedOver=!0}onDraggedOverEnd(){this.isDraggedOver=!1}_isTopSpotShown(t,e){return t&&!e}_isBottomSpotShown(t,e){return t&&e}});window.customElements.define("item-separator",class extends Q{static get styles(){return G`
      :host {
        display: block;
        min-height: 1em;
        border-radius: 5px;
      }

      .container {
        background-color: white;
        display: flex;
        padding: 1em;
        height: 1em;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #d6d6d6;
        max-width: var(--right-side-width);
        display: flex;
        position: relative;
      }

      [hidden="true"] {
        display: none;
      }

      .spot {
        background-image: linear-gradient(to right, #f49336, #eea81b, #e0bf00, #cad500, #a8eb12);
        padding: 1em 0;
        margin: 1em 0;
      }
    `}static get properties(){return{index:{type:Number},isDraggedOver:{type:Boolean}}}constructor(){super()}render(){return F`
      <div class="container spot" hidden="${!this.isDraggedOver}"></div>
      <slot></slot>
    `}onDraggedOver(){this.isDraggedOver=!0}onDraggedOverEnd(){this.isDraggedOver=!1}});window.customElements.define("item-spot-placeholder",class extends Q{static get styles(){return G`
      :host {
        display: block;
        height: 4em;
      }

      .container {
        background-color: white;
        display: flex;
        padding: 1em;
        height: 1em;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #d6d6d6;
        max-width: var(--right-side-width);
        display: flex;
        position: relative;
      }

      [hidden="true"] {
        display: none;
      }

      .spot {
        background-image: linear-gradient(to right, #f49336, #eea81b, #e0bf00, #cad500, #a8eb12);
        padding: 1em 0;
        margin-top: 1em;
      }
    `}static get properties(){return{index:{type:Number},isDraggedOver:{type:Boolean}}}constructor(){super()}render(){return F`
      <div class="container spot" hidden="${!this.isDraggedOver}"></div>
      <slot></slot>
    `}onDraggedOver(){this.isDraggedOver=!0}onDraggedOverEnd(){this.isDraggedOver=!1}});class Y extends Q{static get styles(){return G`
      :host {
        display: flex;
        font-family: 'Patrick Hand';
      }
      
      .left-pane {
        flex: auto;
        width: 50%;
        padding: 16px;
    
      }
      .right-pane {
        flex: auto;
        width: 50%;
        padding: 16px;
      }

      .right-pane-inner-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        background-color: #fafafa;
      }

      [card-dragover="true"] {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }

      [hidden="true"] {
        display: none;
      }

      [hidden="false"] {
        display: unset;
      }

      h4 {
        font-size: 1.5em;
      }
    `}static get properties(){return{controlList:{attribute:!1},formItemList:{attribute:!1},isDndInsideForm:{attribute:!1},selectedIndex:{attribute:!1},selectedInFormIndex:{attribute:!1},isDragOverFormPanelFromControlPanel:{attribute:!1},isFromTopToBottom:{attribute:!1},inFormHoveredOverItemIndex:{attribute:!1},NOT_SELECTED_INDEX:{attribute:!1}}}constructor(){super(),this.NOT_SELECTED_INDEX=999999,this.isDragOverFormPanelFromControlPanel=!1,this.selectedIndex=this.NOT_SELECTED_INDEX,this.selectedInFormIndex=this.NOT_SELECTED_INDEX,this.inFormHoveredOverItemIndex=this.NOT_SELECTED_INDEX,this.formItemList=[],this.controlList=[{control:"textbox"},{control:"number"},{control:"combobox"}],this.isDndInsideForm=!1,this.isFromTopToBottom=!1,this.addEventListener("add-control",this._addControl),this.addEventListener("add-control-before-index",this._addControlBeforeIndex),this.addEventListener("add-control-after-index",this._addControlAfterIndex),this.addEventListener("move-control-before-index",this._moveControlBeforeIndex),this.addEventListener("move-control-after-index",this._moveControlAfterIndex)}render(){return F`
    <div class="left-pane">
      ${this.controlList.map((t,e)=>F`
        <item-separator></item-separator>
        <draggable-entity .index=${e} 
                          .control="${t.control}" 
                          selected=${this._isSelected(e,this.selectedIndex)} 
                          draggable="true" 
                          @dragend="${this._onDragEnd}"
                          @dragstart="${this._onDragStart}"><span>${t.control}</span></draggable-entity>
      `)}

    </div>
    <div @dragover="${this._onDragOver}" @drop="${this._onDrop}" class="right-pane card" card-dragover=${this._isDraggingOntoForm(this.isDndInsideForm,this.selectedIndex)}>
      <div id="dropContainer" class="right-pane-inner-container">
            ${this.formItemList.map((t,e)=>F`
                  
                    <item-separator 
                          @dragstart="${this._onFormDragStart}"  
                          @dragover="${this.onFormDragOver}" 
                          @drop="${this._onFormDrop}"
                          @dragenter="${this._onDragEnter}"
                          @dragleave="${this._onDragLeave}"
                          .index="${e}"></item-separator>
                    <form-item 
                          @dragstart="${this._onFormDragStart}"  
                          @dragover="${this.onFormDragOver}" 
                          @drop="${this._onFormDrop}"
                          @dragenter="${this._onDragEnter}"
                          @dragleave="${this._onDragLeave}"
                          .control="${t.control}" 
                          .index="${e}" 
                          .isFromTopToBottom="${this.isFromTopToBottom}"
                          selected=${this._isSelected(e,this.selectedInFormIndex)} 
                          draggable="true">${t.control}</form-item>
                  
                `)}
        <p hidden=${!this.isEmptyTextShown(this.formItemList,this.selectedIndex,this.isDndInsideForm)}>Currently, there are no items on the form. Drag them from Controls section and drop here...</p>        
        <item-spot-placeholder 
                  hidden="${this.isDndInsideForm}"
                  @dragstart="${this._onFormDragStart}"  
                  @dragover="${this.onFormDragOver}" 
                  @drop="${this._onFormDrop}"
                  @dragenter="${this._onDragEnter}"
                  @dragleave="${this._onDragLeave}"></item-spot-placeholder>
      </div>
    </div>
    `}_isDraggingOntoForm(t,e){return this.isDragOverFormPanelFromControlPanel=this.selectedIndex!==this.NOT_SELECTED_INDEX&&!t,this.selectedIndex!==this.NOT_SELECTED_INDEX&&!t}_onDragStart(t){this.isDndInsideForm=!1;const e=t.target,i=e.control;t.dataTransfer.setData("control",i),this.selectedIndex=e.index}_onDragOver(t){this.isDndInsideForm||t.preventDefault()}_onDragEnd(t){this.selectedIndex=this.NOT_SELECTED_INDEX}_onDrop(t){if(this.isDndInsideForm)return;this.isDndInsideForm=!0,"ITEM-SPOT-PLACEHOLDER"===t.target.tagName&&t.target.onDraggedOverEnd();const e=t.dataTransfer.getData("control");if(t.target.control)this.fire("add-control-after-index",{control:e,insertAfter:t.target.index}),t.target.onDraggedOverEnd();else{if(void 0===t.target.index&&0===this.formItemList.length)return void this.fire("add-control",{control:e});if(void 0===t.target.index&&0!==this.formItemList.length)return void this.fire("add-control",{control:e});if(void 0!==t.target.index)return this.fire("add-control-before-index",{control:e,insertBefore:t.target.index}),void t.target.onDraggedOverEnd()}}_onFormDragStart(t){this.isDndInsideForm=!0;const e=t.target,i=e.control,s=e.index;this.selectedInFormIndex=s,t.dataTransfer.setData("control",i),t.dataTransfer.setData("index",s)}onFormDragOver(t){t.preventDefault()}_onDragEnter(t){if(this.isFromTopToBottom=!1,this.isDndInsideForm){if(t.target.control&&t.target.index===this.selectedInFormIndex)return;if(!t.target.control&&t.target.index===this.selectedInFormIndex)return;if(!t.target.control&&t.target.index===this.selectedInFormIndex+1)return;this.isFromTopToBottom=this.selectedInFormIndex<=t.target.index}this.inFormHoveredOverItemIndex=t.target.index,t.target.onDraggedOver()}_onDragLeave(t){t.target.onDraggedOverEnd()}_onFormDrop(t){if(!this.isDndInsideForm)return;const e=Number(t.dataTransfer.getData("index")),i=t.target.index;if(this.selectedInFormIndex=this.NOT_SELECTED_INDEX,this.inFormHoveredOverItemIndex=this.NOT_SELECTED_INDEX,e!==i){if("ITEM-SPOT-PLACEHOLDER"===t.target.tagName)return this.fire("move-control-after-index",{index:e,insertAfter:this.formItemList.length}),void t.target.onDraggedOverEnd();e>i?this.fire("move-control-before-index",{index:e,insertBefore:i}):e<i&&this.fire("move-control-after-index",{index:e,insertAfter:i}),t.target.onDraggedOverEnd()}else t.target.onDraggedOverEnd()}_addControl(t){const e=t.detail;this.formItemList=[...this.formItemList,{control:e.control}],this.fire("form-builder-updated",this.formItemList,!0)}_addControlBeforeIndex(t){const e=t.detail;this.formItemList.splice(e.insertBefore,0,{control:e.control}),this.formItemList=[...this.formItemList],this.fire("form-builder-updated",this.formItemList,!0)}_addControlAfterIndex(t){const e=t.detail;this.formItemList.splice(e.insertAfter,0,{control:e.control}),this.formItemList=[...this.formItemList],this.fire("form-builder-updated",this.formItemList,!0)}_moveControlBeforeIndex(t){const e=t.detail;this.formItemList.splice(e.insertBefore,0,this.formItemList[e.index]),this.formItemList.splice(e.index+1,1),this.formItemList=[...this.formItemList],this.fire("form-builder-updated",this.formItemList,!0)}_moveControlAfterIndex(t){const e=t.detail;this.formItemList.splice(e.insertAfter,0,this.formItemList.splice(e.index,1)[0]),this.formItemList=[...this.formItemList],this.fire("form-builder-updated",this.formItemList,!0)}fire(t,e,i=!1){let s=new CustomEvent(t,{detail:e,bubbles:i,composed:i});this.dispatchEvent(s)}_isSelected(t,e){return t===e}isEmptyTextShown(t,e,i){return e===this.NOT_SELECTED_INDEX&&0===t.length}}window.customElements.define("form-builder",Y);export{Y as FormBuilder};
