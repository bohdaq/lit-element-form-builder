import { LitElement, html, css } from 'lit-element';


export class TheButton extends LitElement {
  static get styles() {
    return css`
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
