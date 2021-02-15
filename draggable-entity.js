import { LitElement, html, css } from 'lit-element';

export class DraggableEntity extends LitElement {
  static get styles() {
    return css`
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
    `;
  }

  static get properties() {
    return {
      control: {
        type: String
      }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }


}

window.customElements.define('draggable-entity', DraggableEntity);
