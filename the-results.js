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
                <the-button>Sign Up</the-button>
              </div>
    `;
  }

}

window.customElements.define('the-results', TheResults);
