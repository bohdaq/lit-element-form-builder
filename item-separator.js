import { LitElement, html, css } from 'lit-element';

export class ItemSeparator extends LitElement {
  static get styles() {
    return css`
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
    `;
  }

  static get properties() {
    return {
      index: {
        type: Number
      },
      isDraggedOver: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container spot" hidden=${!this.isDraggedOver}></div>
      <slot></slot>
    `;
  }

  onDraggedOver() {
    this.isDraggedOver = true;
  }

  onDraggedOverEnd() {
    this.isDraggedOver = false;
  }


}

window.customElements.define('item-separator', ItemSeparator);
