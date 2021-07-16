import { LitElement, html, css } from 'lit-element';


export class TheButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        --button-background-color-accent: rgb(245, 147, 54);
      }


      a.button {
        background-color: var(--button-background-color-accent);
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
        color: #FFFFFF;
        text-align: center;
        transition: all 0.2s;
        text-transform: uppercase;
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
