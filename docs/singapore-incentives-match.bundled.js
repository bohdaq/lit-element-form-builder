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
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${s}`);class n{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],a=document.createTreeWalker(t.content,133,null,!1);let d=0,h=-1,p=0;const{strings:u,values:{length:m}}=e;for(;p<m;){const e=a.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)r(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=u[p],i=l.exec(t)[2],s=i.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const r=n.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:r}),p+=r.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,n=t.split(o),a=n.length-1;for(let t=0;t<a;t++){let s,o=n[t];if(""===o)s=c();else{const e=l.exec(o);null!==e&&r(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(o)}i.insertBefore(s,e),this.parts.push({type:"node",index:++h})}""===n[a]?(i.insertBefore(c(),e),s.push(e)):e.data=n[a],p+=a}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&h!==d||(h++,t.insertBefore(c(),e)),d=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(s.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const r=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},a=e=>-1!==e.index,c=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:i},parts:s}=e,o=document.createTreeWalker(i,133,null,!1);let n=p(s),r=s[n],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-c,n=p(s,n),r=s[n]}l.forEach(e=>e.parentNode.removeChild(e))}const h=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(a(t))return i}return-1};
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
const u=new WeakMap,m=e=>"function"==typeof e&&u.has(e),b={},f={};
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
class g{constructor(e,t,i){this.t=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.t)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.t)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let n,r=0,c=0,l=o.nextNode();for(;r<s.length;)if(n=s[r],a(n)){for(;c<n.index;)c++,"TEMPLATE"===l.nodeName&&(i.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=i.pop(),l=o.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.t.push(e)}else this.t.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));r++}else this.t.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const v=` ${i} `;class x{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let n=0;n<e;n++){const e=this.strings[n],r=e.lastIndexOf("\x3c!--");o=(r>-1||o)&&-1===e.indexOf("--\x3e",r+1);const a=l.exec(e);t+=null===a?e+(o?v:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),y=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(w(e)||!y(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===b||w(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=b,e(this)}this.value!==b&&this.committer.commit()}}class ${constructor(e){this.value=void 0,this.i=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.s(this.startNode=c()),e.s(this.endNode=c())}insertAfterPart(e){e.s(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.i=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.i);){const e=this.i;this.i=b,e(this)}const e=this.i;e!==b&&(w(e)?e!==this.value&&this.o(e):e instanceof x?this.l(e):e instanceof Node?this.h(e):y(e)?this.p(e):e===f?(this.value=f,this.clear()):this.o(e))}s(e){this.endNode.parentNode.insertBefore(e,this.endNode)}h(e){this.value!==e&&(this.clear(),this.s(e),this.value=e)}o(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.h(document.createTextNode(i)),this.value=e}l(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const i=new g(t,e.processor,this.options),s=i._clone();i.update(e.values),this.h(s),this.value=i}}p(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const o of e)i=t[s],void 0===i&&(i=new $(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(o),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.i=e}commit(){for(;m(this.i);){const e=this.i;this.i=b,e(this)}if(this.i===b)return;const e=!!this.i;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.i=b}}class _ extends k{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new z(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class z extends S{}let P=!1;(()=>{try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class E{constructor(e,t,i){this.value=void 0,this.i=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.u=e=>this.handleEvent(e)}setValue(e){this.i=e}commit(){for(;m(this.i);){const e=this.i;this.i=b,e(this)}if(this.i===b)return;const e=this.i,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.u,this.m),s&&(this.m=q(e),this.element.addEventListener(this.eventName,this.u,this.m)),this.value=e,this.i=b}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const q=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function M(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(i);return s=t.keyString.get(o),void 0===s&&(s=new n(e,e.getTemplateElement()),t.keyString.set(o,s)),t.stringsArray.set(e.strings,s),s}const I=new Map,A=new WeakMap;
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
class{handleAttributeExpressions(e,t,i,s){const o=t[0];if("."===o){return new _(e,t.slice(1),i).parts}return"@"===o?[new E(e,t.slice(1),s.eventContext)]:"?"===o?[new C(e,t.slice(1),i)]:new k(e,t,i).parts}handleTextExpression(e){return new $(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const T=(e,...t)=>new x(e,t,"html",N)
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
 */,R=(e,t)=>`${e}--${t}`;let j=!0;void 0===window.ShadyCSS?j=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),j=!1);const O=e=>t=>{const s=R(t.type,e);let o=I.get(s);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},I.set(s,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(i);if(r=o.keyString.get(a),void 0===r){const i=t.getTemplateElement();j&&window.ShadyCSS.prepareTemplateDom(i,e),r=new n(t,i),o.keyString.set(a,r)}return o.stringsArray.set(t.strings,r),r},U=["html","svg"],L=new Set,F=(e,t,i)=>{L.add(e);const s=i?i.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const r=document.createElement("style");for(let e=0;e<n;e++){const t=o[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{U.forEach(t=>{const i=I.get(R(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),d(e,i)})})})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:o}=e;if(null==i)return void s.appendChild(t);const n=document.createTreeWalker(s,133,null,!1);let r=p(o),a=0,c=-1;for(;n.nextNode();){for(c++,n.currentNode===i&&(a=h(t),i.parentNode.insertBefore(t,i));-1!==r&&o[r].index===c;){if(a>0){for(;-1!==r;)o[r].index+=a,r=p(o,r);return}r=p(o,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),d(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const V={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),H={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:W};class X extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=H){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this._requestUpdate(e,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||H}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=W){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||V,o="function"==typeof s?s:s.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||V.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=H){const s=this.constructor,o=s._attributeNameForProperty(e,i);if(void 0!==o){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const s=this.constructor,o=s.getPropertyOptions(e);s._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}X.finalized=!0;
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
const D="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol();class Q{constructor(e,t){if(t!==B)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(D?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new Q(i,B)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const J={};class Y extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),s=[];i.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?D?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==J&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return J}}Y.finalized=!0,Y.render=(e,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const o=s.scopeName,n=A.has(i),r=j&&11===i.nodeType&&!!i.host,a=r&&!L.has(o),c=a?document.createDocumentFragment():i;if(((e,i,s)=>{let o=A.get(i);void 0===o&&(t(i,i.firstChild),A.set(i,o=new $(Object.assign({templateFactory:M},s))),o.appendInto(i)),o.setValue(e),o.commit()})(e,c,Object.assign({templateFactory:O(o)},s)),a){const e=A.get(c);A.delete(c);const s=e.value instanceof g?e.value.template:void 0;F(o,c,s),t(i,i.firstChild),i.appendChild(c),A.set(i,e)}!n&&r&&window.ShadyCSS.styleElement(i.host)};window.customElements.define("the-checkbox",class extends Y{static get styles(){return G`
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

      
    `}static get properties(){return{}}constructor(){super()}render(){return T`
      <label class="pure-material-checkbox">
        <input type="checkbox">
        <span></span>
      </label>
    `}});window.customElements.define("the-question",class extends Y{static get styles(){return G`
      :host {
        display: flex;
      }

      .question-title {
        font-family: "Poppins",sans-serif;
        font-size: 1.2em;
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
      }


      .answers-container {
      }

      .ok-next {
        cursor: pointer;
        outline: none;
        border: 1px solid transparent;
        margin: 0px;
        box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
        padding: 6px 14px;
        background-color: rgb(0, 175, 255);
        color: rgb(255, 255, 255);
        border-radius: 4px;
        margin-top: 1em;
      }

      .ok-next:hover {
        background-color: rgb(38, 187, 255);
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

      /* iPhone X and Xs Max */
      @media only screen 
          and (min-device-width: 375px) 
          and (min-device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3)
          and (orientation: portrait) { 
          /* styles */
          .question-title {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 1em;
            margin-bottom: 1em;
            padding: .25em .5em;
            border-radius: 14px;
            font-size: 4em;
          }

          
      }

      /* iPhone XR */
      @media only screen 
          and (min-device-width: 414px) 
          and (min-device-height: 896px) 
          and (-webkit-device-pixel-ratio: 2) 
          and (orientation: portrait) { 
          /* styles */
          .question-title {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 1em;
            margin-bottom: 1em;
            padding: .25em .5em;
            border-radius: 14px;
            font-size: 4em;
          }

      }
    `}static get properties(){return{item:Object,index:Number}}constructor(){super(),this.addEventListener("answer-selected",this._answerSelected)}render(){return T`
                  <div class="question-container">
                    <div class="question-title">${this.item.question}</div>
                    <div class="question-description">${this.item.description}</div>
                    <div class="answers-container">


                    ${this.item.answerList.map((e,t)=>T`
                        <the-answer uuid="${e.uuid}" .item="${e}">${e.label}</the-answer>
                      
                      `)}
                      

                      <div class="buttons-container">
                        <div class="ok-next" @click="${this._nextQuestionClicked}">
                          <span class="next">Next</span>
                        </div>
                        <div class="flex"></div>
                      </div>

                    </div>

                  </div>
    `}_answerSelected(e){this.shadowRoot.querySelectorAll("the-answer").forEach(t=>{t.item.uuid===e.detail.uuid?t.selected?(console.log("answer-deselected",e.detail.uuid),t.deselect()):(console.log("answer-selected",e.detail.uuid),t.select()):this.item.multipleSelection||t.deselect()}),this._nextQuestionClicked()}_nextQuestionClicked(e){let t=new CustomEvent("next-question",{detail:this.item,bubbles:!0,composed:!0});this.dispatchEvent(t)}});window.customElements.define("the-answer",class extends Y{static get styles(){return G`
      :host {
        display: flex;
      }


      .answer-container {
        background-color: rgba(2, 0, 35, 0.1);
        color: rgb(2, 0, 35);
        margin: 1em 1em 1em 0;
        cursor: pointer;
        padding: .2em .5em;
        width: 10em;
      }



      .white {
        color: white;
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
        background-color: rgba(2, 0, 35, 0.3);
        box-shadow: rgb(2 0 35 / 80%) 0px 0px 0px 2px inset;
        color: rgb(2, 0, 35);
      }

      .spacing {
        flex: 1;
      }

      /* iPhone X and Xs Max */
      @media only screen 
          and (min-device-width: 375px) 
          and (min-device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3)
          and (orientation: portrait) { 
          /* styles */
          .answer-container {
            width: 80%;
          }

          .answer-label {
            height: unset;
            font-size: 3em;
            padding-left: 1em;
            padding-right: 1em;
            padding-top: .5em;
            padding-bottom: .5em;
          }

          
      }

      /* iPhone XR */
      @media only screen 
          and (min-device-width: 414px) 
          and (min-device-height: 896px) 
          and (-webkit-device-pixel-ratio: 2) 
          and (orientation: portrait) { 
          /* styles */
          .answer-container {
            width: 80%;
          }

          .answer-label {
            height: unset;
            font-size: 3em;
            padding-left: 1em;
            padding-right: 1em;
            padding-top: .5em;
            padding-bottom: .5em;
          }

      }

      
    `}static get properties(){return{selected:Boolean,item:Boolean}}constructor(){super(),this.selected=!1}render(){return T`



        ${this.selected?T`
            <div class="answer-container selected"  @click="${this._selectAnswerEvent}">
                <div class="answer-label">
                  <slot></slot>
                  <div class="spacing"></div>
                  <span class="fill-white">
                    <svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg>
                  </span>
                </div>
            </div>
        `:T`
            <div class="answer-container"  @click="${this._selectAnswerEvent}">
                <div class="answer-label"><slot></slot></div>
            </div>
        `}
    `}_selectAnswerEvent(){this.answerSelectedEvent(),this.deselect()}answerSelectedEvent(){let e=new CustomEvent("answer-selected",{detail:this.item,bubbles:!0,composed:!0});this.dispatchEvent(e)}select(){this.selected=!0,this.requestUpdate()}deselect(){this.selected=!1,this.requestUpdate()}});class K extends Y{static get styles(){return G`
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

      .ok-next {
        cursor: pointer;
        outline: none;
        border: 1px solid transparent;
        margin: 0px;
        box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
        padding: 6px 14px;
        background-color: rgb(0, 175, 255);
        color: rgb(255, 255, 255);
        border-radius: 4px;
        margin-top: 1em;
        min-width: 35px;
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
        font-size: 1.2em;
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

      .intro-description {
        margin-top: 0.35em;
        font-family: Poppins, sans-serif;
        font-size: 1em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em);
        text-transform: none;
        color: rgb(117, 117, 117);
      }

      
      @media all and (max-width: 768px) {
          
          .content-container {
            max-width: 100%;
          }
      }

      /* iPhone X and Xs Max */
      @media only screen 
          and (min-device-width: 375px) 
          and (min-device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3)
          and (orientation: portrait) { 
          /* styles */
          span.next {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 3em;
            margin-bottom: 3em;
            padding: 1em 2em;
            border-radius: 14px;
          }

          h4 {
            font-size: 4em;
          }

          
      }

      /* iPhone XR */
      @media only screen 
          and (min-device-width: 414px) 
          and (min-device-height: 896px) 
          and (-webkit-device-pixel-ratio: 2) 
          and (orientation: portrait) { 
          /* styles */
          span.next {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 3em;
            margin-bottom: 3em;
            padding: 1em 2em;
            border-radius: 14px;
          }

          h4 {
            font-size: 4em;
          }

      }
    `}static get properties(){return{}}constructor(){super(),this.config={steps:[{number:0,name:"Intro",type:"INTRO",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec urna vitae arcu feugiat pulvinar vitae eget magna. Nulla lobortis nulla ut fringilla eleifend. Vestibulum vel pretium ex. Curabitur a erat in enim sollicitudin aliquam. In hac habitasse platea dictumst. Cras diam dolor, venenatis sit amet turpis sed, pharetra viverra odio. Cras euismod ac libero sit amet sagittis. Nulla id placerat libero. Curabitur aliquet fringilla aliquet. Vivamus ac dolor pharetra, semper dui ac, malesuada mi. Duis pellentesque arcu sed libero ullamcorper, et vulputate ipsum accumsan. Mauris a nibh nec magna convallis mollis. Ut porttitor justo arcu, posuere interdum sapien dapibus ut."},{number:1,name:"Industry",type:"QUESTIONNAIRE",questionList:[{uuid:"7f655c89-99cb-4acd-8211-a77329483b30",question:"How old is your company?",description:"Many incentive programs are available only to startups or companies in their first two years. Please select the option that best describes the age of your company.",answerList:[{uuid:"d0792019-d321-4aa6-82e6-9fda0bd4014f",label:"Not yet incorporated"},{uuid:"313c0c71-cb1b-4f2d-9cfe-5691df666d3d",label:"0 - 2 years"},{uuid:"b35d0885-427f-4408-9823-7e19f8c777d3",label:"More than 2 years"}]},{uuid:"ed552cf1-0be8-46f2-8efd-5f009f2f61aa",question:"What percentage of your company is owned by Singapore residents?",description:"Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.",answerList:[{uuid:"71bab4c1-8190-4efd-b819-79de3b489695",label:"0%"},{uuid:"742f6e85-9985-465d-91c1-38408804df02",label:"Less than 30%"},{uuid:"7a487b63-0563-4f1e-9274-7d60a1831207",label:"30 to 50%"},{uuid:"c06f0d5e-7cf3-45fd-ab04-e2fb87f3722e",label:"More than 50%"}]},{uuid:"6e7f42a7-66f1-4e9b-8e94-b6947d4cad58",question:"How many employees do you have in Singapore?",description:"Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.",answerList:[{uuid:"fc3b6091-ea4c-4b1b-b3af-4ab9442d13f2",label:"0 - 10"},{uuid:"e63daf39-64fb-4008-9d03-48107e923ca5",label:"11 - 50"},{uuid:"b33be8f8-7783-41ed-bc5e-b1a9f4a3e154",label:"51 - 200"},{uuid:"740fdeae-f298-4f4e-80ac-64f08e5a5a32",label:"More than 200"}]},{uuid:"0199247e-43c7-4d7f-b04f-31920ea8f4cb",multipleSelection:!0,question:"Select the attributes applicable to your company?",description:"Many programs are available only to companies that demonstrate specific attributes (such as use of novel innovative technology, hiring of local staff, etc.). To see a description of each attribute hover the mouse over it.",answerList:[{uuid:"ded67768-42c9-4b2e-80bd-c76268905ee0",label:"Low use of energy"},{uuid:"cc26b090-9650-49b6-a376-b04b9ecc9465",label:"Foreign exports"},{uuid:"dda467d5-f947-4789-9aea-034bd4f85a06",label:"Trade financing"},{uuid:"b7a31474-1e5f-429d-830d-18a14ee56521",label:"IP rights licensing"},{uuid:"e055fa05-7fb0-4f9b-b2b3-9294fbe56e43",label:"Innovative technology"},{uuid:"0d64e546-2fb1-41f4-8218-4ee539cea053",label:"Hiring local staff"},{uuid:"05432a32-c78d-4f23-a698-fb2f14c8a037",label:"Patents owned"},{uuid:"bbfaf14c-1b85-4ba9-b631-ee6e58aa09e9",label:"New product"},{uuid:"42697e39-a6be-46d4-81f6-c7885c877f59",label:"Innovative Technology"}]}]},{number:2,name:"Matches",type:"MATCHES",heading:"You may qualify for the following programs",matchList:[{label:"Enterprise Development Grant",description:"Early-stage funding to fast-track commercialization of the technology solutions.",link:"https://google.com"},{label:"IRS Co-creation Grants",description:"Supports software developers in the development of innovative solutions for tax filing preparation or tax management.",link:"https://google.com"}],description:'We can conduct a preliminary evaluation of your company\'s suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process. We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation.'}]},this.currentStepIndex=0,this.currentStep=this.config.steps[this.currentStepIndex],this.currentQuestionIndex=0,this.currentStep.questionList&&(this.currentQuestion=this.currentStep.questionList[this.currentQuestionIndex]),this.addEventListener("next-question",this._nextQuestion)}render(){return T`
      <div class="main-container">
        
        <div class="content-container">

        ${"QUESTIONNAIRE"===this.currentStep.type?T`

                  <the-question .index="${this.currentQuestionIndex}" .item="${this.currentQuestion}"></the-question>
               
               `:T``}

        ${"MATCHES"===this.currentStep.type?T`
                
                    <p class="matches-heading">${this.currentStep.heading}</p>

                    <div class="blocks-container">
                      
                      <div class="tax-incentives block">
                        <div class="title">Tax Incentives</div>

                        <div class="numbers-block">
                          <div class="numbers-block-left-part">
                            <div class="numbers-block-heading">
                              Number of tax incentives
                            </div>
                            <div class="number-of-tax-incentives">
                              10
                            </div>
                          </div>
                          <div class="numbers-block-right-part">
                            <div class="numbers-block-heading">
                            Total value of tax incentives available
                              </div>
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
                            <div class="number-of-tax-incentives">
                              4
                            </div>
                          </div>
                          <div class="numbers-block-right-part">
                            <div class="numbers-block-heading">
                              Total value of grants available
                              </div>
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
                            <div class="number-of-tax-incentives">
                              4
                            </div>
                          </div>
                          <div class="numbers-block-right-part">
                            <div class="numbers-block-heading">
                            Total value of equity programs available
                              </div>
                              <div class="total-value-of-tax-incentives">
                                <div class="currency-container">S$</div>255k
                              </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div class="description-label">Description of the 18 program found</div>

                    <div class="program-row program-row-top-border">
                      <div class="program-row-number">1</div>
                      <div class="program-row-label">Enterprise Development Grant</div>
                      <div class="program-row-description">Early-stage funding to fast-track commercialization of the technology solutions.</div>
                      <div class="flex"></div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">2</div>
                      <div class="program-row-label">Double tax deduction for IP licensing costs</div>
                      <div class="program-row-description">Supports companies licensing IP in Singapore and allows a deduction of double the costs incurred in securing IP.</div>
                      <div class="flex"></div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">3</div>
                      <div class="program-row-label">IRS Co-creation Grants</div>
                      <div class="program-row-description">Supports software developers in the development of innovative solutions for tax filing preparation or tax management.</div>
                      <div class="flex"></div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">4</div>
                      <div class="program-row-label">Financial Sector Technology Scheme</div>
                      <div class="program-row-description">Supports Financial Institutions (FI) in setting up innovation Centres of Excellence (COE) or labs in Singapore to test-bed innovative ideas and roll out market solutions.</div>
                      <div class="flex"></div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="explanation-text">
                      We can conduct a preliminary evaluation of your company's suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process. We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation. Check the programs you want to evaluate and click the button below.
                    </div>
                    
                
                `:T``}

        ${"INTRO"===this.currentStep.type?T`
                
                  <h4>${this.currentStep.name}</h4>

                  <span class="intro-description">${this.currentStep.description}</span>

                  <!-- <div class="button accent" @click=${this.nextStepClicked}>Next ></div> -->

                  <div class="buttons-container">
                    <div class="ok-next" @click="${this.nextStepClicked}">
                      <span class="next">Next</span>
                    </div>
                    <div class="flex"></div>
                  </div>
                  
                `:T``}



        </div>


        <!-- <div class="buttons-container">
          ${0===this.currentStepIndex?T``:T`<div class="button" @click=${this.previousClicked}>< Previous</div>`}
          <div class="flex"></div>
          ${this.currentStepIndex===this.config.steps.length-1?T``:T`<div class="button accent" @click=${this.nextStepClicked}>Next ></div>`}
          


        </div> -->


      </div>
    `}nextStepClicked(){console.log("nextStepClicked"),this.currentStepIndex=this.currentStepIndex+1,this.currentStep=this.config.steps[this.currentStepIndex],"QUESTIONNAIRE"===this.currentStep.type&&(this.currentQuestionIndex=0,this.currentQuestion=this.currentStep.questionList[this.currentQuestionIndex]),this.requestUpdate()}previousClicked(){console.log("previousClicked"),this.currentStepIndex=this.currentStepIndex-1,this.currentStep=this.config.steps[this.currentStepIndex],this.requestUpdate()}_nextQuestion(e){if(console.log("_nextQuestion",e),this.currentQuestionIndex+1===this.currentStep.questionList.length)return this.currentQuestionIndex=0,void this.nextStepClicked();this.currentQuestionIndex=this.currentQuestionIndex+1,this.currentQuestion=this.currentStep.questionList[this.currentQuestionIndex],this.requestUpdate()}}window.customElements.define("singapore-incentives-match",K);export{K as SingaporeIncentivesMatch};
