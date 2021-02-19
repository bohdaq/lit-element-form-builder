import { LitElement, html, css } from 'lit-element';


/**
 * Control from the form panel
 */
export class FormItem extends LitElement {
  static get styles() {
    return css`
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
    `;
  }

  static get properties() {
    return {
      /**
       * Is current control selected
       */
      selected: {
        type: Boolean,
        converter: (value, type) => {
          return value === 'true';
        }
      },
      /**
       * Is control being dragged over this element
       */
      isDraggedOver: {
        attribute: false
      },
      /**
       * Is drag'n'drop being done from top to bottom or vice versa
       */
      isFromTopToBottom: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.isDraggedOver = false;
    this.fromTopToBottom = true;
  }

  render() {
    return html`
      <div class="container spot bottom-offset" hidden="${!this._isTopSpotShown(this.isDraggedOver, this.isFromTopToBottom)}"></div>
      <div class="container" selected=${this.selected}>
        <slot></slot> 
      </div>
      <div class="container spot top-offset" hidden="${!this._isBottomSpotShown(this.isDraggedOver, this.isFromTopToBottom)}"></div>
    `;
  }

  onDraggedOver() {
    this.isDraggedOver = true;
  }

  onDraggedOverEnd() {
    this.isDraggedOver = false;
  }

  _isTopSpotShown(isDraggedOver, isFromTopToBottom) {
    return isDraggedOver && !isFromTopToBottom;
  }

  _isBottomSpotShown(isDraggedOver, isFromTopToBottom) {
    return isDraggedOver && isFromTopToBottom;
  }

}

window.customElements.define('form-item', FormItem);
