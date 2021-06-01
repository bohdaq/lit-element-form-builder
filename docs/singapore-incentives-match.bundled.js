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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${s}`);class o{constructor(t,e){this.parts=[],this.element=e;const s=[],o=[],a=document.createTreeWalker(e.content,133,null,!1);let h=0,p=-1,d=0;const{strings:u,values:{length:m}}=t;for(;d<m;){const t=a.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)r(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=u[d],i=l.exec(e)[2],s=i.toLowerCase()+"$lit$",o=t.getAttribute(s);t.removeAttribute(s);const r=o.split(n);this.parts.push({type:"attribute",index:p,name:i,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,o=e.split(n),a=o.length-1;for(let e=0;e<a;e++){let s,n=o[e];if(""===n)s=c();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++p})}""===o[a]?(i.insertBefore(c(),t),s.push(t)):t.data=o[a],d+=a}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&p!==h||(p++,e.insertBefore(c(),t)),h=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(s.push(t),p--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),d++}}else a.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},a=t=>-1!==t.index,c=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let o=d(s),r=s[o],a=-1,c=0;const l=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&c++;void 0!==r&&r.index===a;)r.index=null!==h?-1:r.index-c,o=d(s,o),r=s[o]}l.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},d=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(a(e))return i}return-1};
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
const u=new WeakMap,m=t=>"function"==typeof t&&u.has(t),f={},b={};
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
class x{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,r=0,c=0,l=n.nextNode();for(;r<s.length;)if(o=s[r],a(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(i.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=i.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const g=` ${i} `;class w{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const a=l.exec(t);e+=null===a?t+(n?g:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(y(t)||!v(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||y(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=c()),t.s(this.endNode=c())}insertAfterPart(t){t.s(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.i);){const t=this.i;this.i=f,t(this)}const t=this.i;t!==f&&(y(t)?t!==this.value&&this.o(t):t instanceof w?this.l(t):t instanceof Node?this.h(t):v(t)?this.p(t):t===b?(this.value=b,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.h(document.createTextNode(i)),this.value=t}l(t){const e=this.options.templateFactory(t);if(this.value instanceof x&&this.value.template===e)this.value.update(t.values);else{const i=new x(e,t.processor,this.options),s=i._clone();i.update(t.values),this.h(s),this.value=i}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new _(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class z{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=f,t(this)}if(this.i===f)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=f}}class C extends k{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new $(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class $ extends S{}let E=!1;(()=>{try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class P{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.u=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=f,t(this)}if(this.i===f)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.u,this.m),s&&(this.m=T(t),this.element.addEventListener(this.eventName,this.u,this.m)),this.value=t,this.i=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function A(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const O=new Map,U=new WeakMap;
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
 */const N=new
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
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new C(t,e.slice(1),i).parts}return"@"===n?[new P(t,e.slice(1),s.eventContext)]:"?"===n?[new z(t,e.slice(1),i)]:new k(t,e,i).parts}handleTextExpression(t){return new _(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const I=(t,...e)=>new w(t,e,"html",N)
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
 */,j=(t,e)=>`${t}--${e}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const M=t=>e=>{const s=j(e.type,t);let n=O.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(s,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(i);if(r=n.keyString.get(a),void 0===r){const i=e.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o(e,i),n.keyString.set(a,r)}return n.stringsArray.set(e.strings,r),r},q=["html","svg"],F=new Set,D=(t,e,i)=>{F.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{q.forEach(e=>{const i=O.get(j(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),h(t,i)})})})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let r=d(n),a=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===i&&(a=p(e),i.parentNode.insertBefore(e,i));-1!==r&&n[r].index===c;){if(a>0){for(;-1!==r;)n[r].index+=a,r=d(n,r);return}r=d(n,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const V={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:B};class L extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=B){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||V,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||V.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,n=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}L.finalized=!0;
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
const Q="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class H{constructor(t,e){if(e!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof H)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new H(i,J)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const X={};class G extends L{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==X&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return X}}G.finalized=!0,G.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=U.has(i),r=R&&11===i.nodeType&&!!i.host,a=r&&!F.has(n),c=a?document.createDocumentFragment():i;if(((t,i,s)=>{let n=U.get(i);void 0===n&&(e(i,i.firstChild),U.set(i,n=new _(Object.assign({templateFactory:A},s))),n.appendInto(i)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:M(n)},s)),a){const t=U.get(c);U.delete(c);const s=t.value instanceof x?t.value.template:void 0;D(n,c,s),e(i,i.firstChild),i.appendChild(c),U.set(i,t)}!o&&r&&window.ShadyCSS.styleElement(i.host)};window.customElements.define("the-checkbox",class extends G{static get styles(){return Y`
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

      
    `}static get properties(){return{}}constructor(){super()}render(){return I`
      <label class="pure-material-checkbox">
        <input type="checkbox">
        <span></span>
      </label>
    `}});window.customElements.define("the-button",class extends G{static get styles(){return Y`
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
    `}static get properties(){return{}}constructor(){super()}render(){return I`
      <a href="#" class="button"><slot></slot></a>
    `}});window.customElements.define("the-question",class extends G{static get styles(){return Y`
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

    `}static get properties(){return{item:Object,index:Number,allowMultipleAnswers:Boolean}}constructor(){super(),this.answers=new Set,this.addEventListener("answer-selected",this._answerSelected)}render(){return I`
                  <div class="question-container">
                    <div id="information-description" class="question-description"></div>
                    <div class="answers-container">


                    ${this.item.AnswerOptions.map((t,e)=>I`
                        <the-answer Code="${t.Code}" .item="${t}">${t.AnswerText}</the-answer>
                      
                      `)}
                      

                      <div class="buttons-container">
                        <the-button @click="${this._nextQuestionClicked}">Next</the-button>
                        <div class="flex"></div>
                      </div>

                    </div>

                  </div>
    `}_answerSelected(t){if(this.shadowRoot.querySelectorAll("the-answer").forEach(e=>{e.item.Code===t.detail.Code?e.selected?(console.log("answer-deselected",t.detail.Code),this.answers.delete(t.detail.Code),e.deselect()):(console.log("answer-selected",t.detail.Code),this.answers.add(t.detail.Code),e.select()):this.item.AllowMultipleAnswers||e.deselect()}),!this.AllowMultipleAnswers){const t=this;setTimeout(()=>{t._nextQuestionClicked()},1e3)}}_nextQuestionClicked(t){this.shadowRoot.querySelectorAll("the-answer").forEach(t=>{t.deselect()});const e={questionKey:this.item._Key,answers:[...this.answers]};let i=new CustomEvent("next-question",{detail:e,bubbles:!0,composed:!0});this.answers=new Set,this.dispatchEvent(i)}_updateDescription(){let t=this;setTimeout(()=>{t.shadowRoot.querySelector("#information-description").innerHTML=this.item.Description})}});window.customElements.define("the-answer",class extends G{static get styles(){return Y`
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

      
    `}static get properties(){return{selected:Boolean,item:Boolean}}constructor(){super(),this.selected=!1}render(){return I`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">


        ${this.selected?I`
            <div class="answer-container selected animate__animated animate__pulse"  @click="${this._selectAnswerEvent}">
                <div class="answer-label">
                  <slot></slot>
                  <div class="spacing"></div>
                </div>
            </div>
        `:I`
            <div class="answer-container"  @click="${this._selectAnswerEvent}">
                <div class="answer-label"><slot></slot></div>
            </div>
        `}
    `}_selectAnswerEvent(){this.answerSelectedEvent()}answerSelectedEvent(){let t=new CustomEvent("answer-selected",{detail:this.item,bubbles:!0,composed:!0});this.dispatchEvent(t)}select(){this.selected=!0,this.requestUpdate()}deselect(){this.selected=!1,this.requestUpdate()}});window.customElements.define("the-results",class extends G{static get styles(){return Y`
      :host {
        display: block;
      }

      .matches-heading {
        text-align: center;
        font-size: 1.7em;
        font-weight: 200;
        font-family: "Poppins",sans-serif;
      }

      .button-container {
        display: flex;
        justify-content: center;
      }

      
    `}static get properties(){return{selected:Boolean,item:Boolean,teaserSearchResponse:Object}}constructor(){super(),this.selected=!1,this.teaserSearchResponse={Result:""}}render(){return I`

              <p class="matches-heading">${this.teaserSearchResponse.Result}</p>
              <div class="button-container">
                <the-button @click="${this.navigateToPlatform}">Sign Up</the-button>
              </div>
    `}navigateToPlatform(){console.log("navigateToPlatform"),"localhost"===location.hostname&&(location.href="http://localhost:3000/matchme?AnonymousUserId="+this.teaserSearchResponse.AnonymousUserId)}});class K extends G{static get styles(){return Y`
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
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
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
    `}static get properties(){return{}}constructor(){super(),this.searchPayload=[],this._configResponseRetrieved=!1,fetch("https://mithun-dot-avocado-backend-v1.appspot.com/v1/programmes/INCENTIVES").then(t=>t.json()).then(t=>this._parseResponse(t))}_parseResponse(t){this._configResponseRetrieved=!0,this.config=t,this.config.Steps.sort((t,e)=>t.SortOrder-e.SortOrder),this.requestUpdate(),this.currentStepIndex=0,this.currentStep=this.config.Steps[this.currentStepIndex],this.currentQuestionIndex=0,this.currentStep.Questions&&(this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex]),this.addEventListener("next-question",this._nextQuestion);let e=this;setTimeout(()=>{e.shadowRoot.querySelector("#information-description").innerHTML=this.currentStep.Description})}render(){return I` 
    
    ${this._configResponseRetrieved?I`
      
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
                <div class="main-container">
                  
                  <div class="content-container animate__animated" id="animate-container">
                    <div>

                  ${"QUESTION_ANSWER"===this.currentStep.Type?I`

                            <the-question .index="${this.currentQuestionIndex}" .item="${this.currentQuestion}" .AllowMultipleAnswers="${this.currentQuestion.AllowMultipleAnswers}"></the-question>
                        
                        `:I``}

                  ${"RESULTS"===this.currentStep.Type?I`
                          
                              <the-results></the-results>
                              
                          
                          `:I``}

                  ${"INFORMATION"===this.currentStep.Type?I`


              <!-- animate__fadeOutDown -->
                            <div class="intro-container">
                                <h4>${this.currentStep.Name}</h4>

                                <span id="information-description" class="intro-description"></span>

                                <div class="buttons-container">
                                  <the-button @click="${this.nextStepClicked}">Next</the-button>
                                  <div class="flex"></div>
                                </div>
                            </div>

                            
                          `:I``}


                    </div>
                  </div>
                </div>
      `:I``}

    `}nextStepClicked(){console.log("nextStepClicked"),this.currentStepIndex=this.currentStepIndex+1,this.currentStep=this.config.Steps[this.currentStepIndex],"QUESTION_ANSWER"===this.currentStep.Type&&(this.currentQuestionIndex=0,this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex]),"RESULTS"===this.currentStep.Type&&fetch("https://mithun-dot-avocado-backend-v1.appspot.com/v1/programmes/INCENTIVES/teaser-search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.searchPayload)}).then(t=>t.json()).then(t=>{const e=this.shadowRoot.querySelector("the-results");this.teaserSearchResponse=t,e.teaserSearchResponse=this.teaserSearchResponse,e.requestUpdate(),console.log("teaserSearchResponse",t)});const t=this.shadowRoot.querySelector("#animate-container");t.classList.add("animate__fadeOutUp");const e=this;setTimeout(()=>{t.classList.remove("animate__fadeOutUp"),e.requestUpdate(),t.classList.add("animate__fadeInUp"),"QUESTION_ANSWER"===this.currentStep.Type&&e._updateDescription()},1e3)}_updateDescription(t){let e=this;setTimeout(()=>{e.shadowRoot.querySelector("the-question")._updateDescription()})}_nextQuestion(t){if(this.searchPayload.push(t.detail),console.log("_nextQuestion",this.searchPayload),this.currentQuestionIndex+1===this.currentStep.Questions.length)return this.currentQuestionIndex=0,void this.nextStepClicked();this.currentQuestionIndex=this.currentQuestionIndex+1,this.currentQuestion=this.currentStep.Questions[this.currentQuestionIndex];const e=this.shadowRoot.querySelector("#animate-container");e.classList.add("animate__fadeOutUp");const i=this;setTimeout(()=>{e.classList.remove("animate__fadeOutUp"),i.requestUpdate(),e.classList.add("animate__fadeInUp"),i.scrollTo({top:0,behavior:"smooth"}),"QUESTION_ANSWER"===this.currentStep.Type&&i._updateDescription()},1e3)}}window.customElements.define("singapore-incentives-match",K);export{K as SingaporeIncentivesMatch};
