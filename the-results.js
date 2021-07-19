import { LitElement, html, css } from 'lit-element';


export class TheResults extends LitElement {
  static get styles() {
    return css`
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

      the-button {
        transform: scale(2);
      }

      
    `;
  }

  static get properties() {
    return {
        selected: Boolean,
        item: Boolean,
        teaserSearchResponse: Object
    };
  }

  constructor() {
    super();
    this.selected = false;
    this.teaserSearchResponse = { Result: '' };
  }

  render() {
    return html`

              <p class="matches-heading">${this.teaserSearchResponse.Result}</p>
              <div class="button-container">
                <the-button accent @click="${this.navigateToPlatform}">Sign Up</the-button>
              </div>
    `;
  }

  navigateToPlatform() {

    console.log('navigateToPlatform');

    let event = new CustomEvent('proceed-to-the-platform', {
      detail: this.item,
      bubbles: true, 
      composed: true
    });
    this.dispatchEvent(event);


  }

}

window.customElements.define('the-results', TheResults);
