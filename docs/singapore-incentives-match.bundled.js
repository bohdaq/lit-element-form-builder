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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${i}`);class o{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],c=document.createTreeWalker(e.content,133,null,!1);let h=0,d=-1,u=0;const{strings:p,values:{length:v}}=t;for(;u<v;){const t=c.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)r(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[u],s=l.exec(e)[2],i=s.toLowerCase()+"$lit$",o=t.getAttribute(i);t.removeAttribute(i);const r=o.split(n);this.parts.push({type:"attribute",index:d,name:s,strings:r}),u+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),c.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,o=e.split(n),c=o.length-1;for(let e=0;e<c;e++){let i,n=o[e];if(""===n)i=a();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++d})}""===o[c]?(s.insertBefore(a(),t),i.push(t)):t.data=o[c],u+=c}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&d!==h||(d++,e.insertBefore(a(),t)),h=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else c.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const r=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,a=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let o=u(i),r=i[o],c=-1,a=0;const l=[];let h=null;for(;n.nextNode();){c++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&a++;void 0!==r&&r.index===c;)r.index=null!==h?-1:r.index-a,o=u(i,o),r=i[o]}l.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},u=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(c(e))return s}return-1};
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
const p=new WeakMap,v=t=>"function"==typeof t&&p.has(t),f={},m={};
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
class w{constructor(t,e,s){this.t=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.t)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,r=0,a=0,l=n.nextNode();for(;r<i.length;)if(o=i[r],c(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(s.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=s.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const g=` ${s} `;class y{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const c=l.exec(t);e+=null===c?t+(n?g:i):t.substr(0,c.index)+c[1]+c[2]+"$lit$"+c[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(b(t)||!x(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||b(t)&&t===this.value||(this.value=t,v(t)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(a()),this.endNode=t.appendChild(a())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=a()),t.i(this.endNode=a())}insertAfterPart(t){t.i(this.startNode=a()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;v(this.s);){const t=this.s;this.s=f,t(this)}const t=this.s;t!==f&&(b(t)?t!==this.value&&this.o(t):t instanceof y?this.l(t):t instanceof Node?this.h(t):x(t)?this.u(t):t===m?(this.value=m,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.h(document.createTextNode(s)),this.value=t}l(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const s=new w(e,t.processor,this.options),i=s._clone();s.update(t.values),this.h(i),this.value=s}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new _(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,s){if(this.value=void 0,this.s=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.s=t}commit(){for(;v(this.s);){const t=this.s;this.s=f,t(this)}if(this.s===f)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=f}}class M extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends k{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class q{constructor(t,e,s){this.value=void 0,this.s=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.p=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;v(this.s);){const t=this.s;this.s=f,t(this)}if(this.s===f)return;const t=this.s,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.p,this.v),i&&(this.v=$(t),this.element.addEventListener(this.eventName,this.p,this.v)),this.value=t,this.s=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const $=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function j(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new o(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const E=new Map,T=new WeakMap;
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
 */const U=new
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
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new M(t,e.slice(1),s).parts}return"@"===n?[new q(t,e.slice(1),i.eventContext)]:"?"===n?[new P(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new _(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const z=(t,...e)=>new y(t,e,"html",U)
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
 */,O=(t,e)=>`${t}--${e}`;let N=!0;void 0===window.ShadyCSS?N=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),N=!1);const I=t=>e=>{const i=O(e.type,t);let n=E.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},E.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const c=e.strings.join(s);if(r=n.keyString.get(c),void 0===r){const s=e.getTemplateElement();N&&window.ShadyCSS.prepareTemplateDom(s,t),r=new o(e,s),n.keyString.set(c,r)}return n.stringsArray.set(e.strings,r),r},V=["html","svg"],F=new Set,R=(t,e,s)=>{F.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{V.forEach(e=>{const s=E.get(O(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),h(t,s)})})})(t);const c=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let r=u(n),c=0,a=-1;for(;o.nextNode();){for(a++,o.currentNode===s&&(c=d(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===a;){if(c>0){for(;-1!==r;)n[r].index+=c,r=u(n,r);return}r=u(n,r)}}}(s,r,c.firstChild):c.insertBefore(r,c.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const a=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else if(s){c.insertBefore(r,c.firstChild);const t=new Set;t.add(r),h(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),L={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:J};class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=L){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||L}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=J){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||H,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||H.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=L){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
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
const B="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol();class K{constructor(t,e){if(e!==D)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(B?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new K(s,D)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Q={};class X extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?B?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Q}}X.finalized=!0,X.render=(t,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=T.has(s),r=N&&11===s.nodeType&&!!s.host,c=r&&!F.has(n),a=c?document.createDocumentFragment():s;if(((t,s,i)=>{let n=T.get(s);void 0===n&&(e(s,s.firstChild),T.set(s,n=new _(Object.assign({templateFactory:j},i))),n.appendInto(s)),n.setValue(t),n.commit()})(t,a,Object.assign({templateFactory:I(n)},i)),c){const t=T.get(a);T.delete(a);const i=t.value instanceof w?t.value.template:void 0;R(n,a,i),e(s,s.firstChild),s.appendChild(a),T.set(s,t)}!o&&r&&window.ShadyCSS.styleElement(s.host)};class Y extends X{static get styles(){return G`
      :host {
        display: flex;
      }

      .main-container {
        width: 850px;

        border-width: 1px;
        border-style: solid;
        border-color: rgb(220,220,220);
        border-radius: 10px;
        font-size: 1em;
        background-color: rgb(255,255,255);
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
      }


      .line {
        background-color: lightgray;
        height: 1px;
        width: 50px;
      }

      .active {
        background-color: rgb(92,219,149);
        color: white;
      }

      .red {
        color: red;
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

      .content-container {
        margin: 1.5em 2em;
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
        display: flex;
      }

      .answers-container {
        padding: 30px;
      }

      .answer-container {
        box-shadow: 0em 0em 0.65em 0em rgb(0 0 0 / 25%);
        width: 100px;
        padding: 10px;

        flex-direction: column;
        display: flex;
        align-items: center;
        text-align: center;

        margin-right: 2em;
      }

      .check-mark-container {
        border: 1px solid lightgray;
        border-radius: 20px;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
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
        justify-content: center;
        align-items: center;
      }

      .selected {
        background-color: rgb(92,219,149);
      }

      .buttons-container {
        display: flex;
        padding: 10px 5px 10px 20px;
        font-size: 14px;
        border-top: 1px solid rgb(220,220,220);
        flex-direction: row-reverse;
      }

      .button {
        margin: 0em 20px 0em 20px;
        border-radius: 5px;
        font-size: 1em;
        color: white;
        padding: 10px;
        background-color: rgb(92,219,149);
      }
    `}static get properties(){return{}}constructor(){super()}render(){return z`
      <div class="main-container">
        <div class="progress-bar-container">


          <div class="number-in-circle">1</div>
          <div class="step-name">Company Info</div>
          <div class="line-separator">
            <div class="line"></div>
          </div>

          <div class="number-in-circle active">2</div>
          <div class="step-name">Industry</div>
          <div class="line-separator">
            <div class="line"></div>
          </div>

          <div class="number-in-circle">3</div>
          <div class="step-name">Key Features</div>
          <div class="line-separator">
            <div class="line"></div>
          </div>

          <div class="number-in-circle">4</div>
          <div class="step-name"><span class="red">18&nbsp;</span> Matches</div>
          <div class="line-separator">
            <div class="line"></div>
          </div>

          <div class="number-in-circle">5</div>
          <div class="step-name">Applications</div>

        </div>

        <div class="content-container">


          <div class="question-container">
            <div class="question-title">How old is your company?</div>
            <div class="question-description">Many incentive programs are available only to startups or companies in their first two years. Please select the option that best describes the age of your company.</div>
            <div class="answers-container">
              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">Not yet incorporated</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white selected">&#10003;</div>
                <div class="answer-label">0 - 2 years</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">More than 2 years</div>
              </div>

            </div>
          </div>

          <div class="question-container">
            <div class="question-title">What percentage of your company is owned by Singapore residents?</div>
            <div class="question-description">Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.</div>
            <div class="answers-container">
              <div class="answer-container">
                <div class="check-mark-container white selected">&#10003;</div>
                <div class="answer-label">0%</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">Less than 30%</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">30% to 50%</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">More than 50%</div>
              </div>

            </div>
          </div>



          <div class="question-container">
            <div class="question-title">How many employees do you have in Singapore?</div>
            <div class="question-description">Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.</div>
            <div class="answers-container">
              <div class="answer-container">
                <div class="check-mark-container white selected">&#10003;</div>
                <div class="answer-label">0 - 10</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">11 - 50</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">51 - 200</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">More than 200</div>
              </div>

            </div>
          </div>


        </div>


        <div class="buttons-container">
          <div class="button">Check Incentives ></div>

        </div>


      </div>
    `}}window.customElements.define("singapore-incentives-match",Y);export{Y as SingaporeIncentivesMatch};
