import { LitElement, html, css } from 'lit-element';


export class TheButton extends LitElement {
  static get styles() {
    return css`
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

      a.button:hover {
        opacity: 0.8;
      }
      @media all and (max-width:30em){
       a.button {
        display: block;
        margin: 0.2em auto;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <a href="#" class="button"><slot></slot></a>
    `;
  }



}

window.customElements.define('the-button', TheButton);
