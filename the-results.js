import { LitElement, html, css } from 'lit-element';


export class TheResults extends LitElement {
  static get styles() {
    return css`
      :host {
        justify-content: center;
        align-items: center;
        display: flex;
        flex: 1;
      }

      .matches-heading {
        text-align: center;
        margin-bottom: 3em;
      }

      .button-container {
        display: flex;
        justify-content: center;
      }

      the-button {
        transform: scale(2);
      }

      .description {
        color: var(--desciption-color);
        font-family: var(--desciption-font-family);
        font-size: var(--desciption-font-size);
        font-weight: var(--desciption-font-weight);
        line-height: var(--desciption-line-height);
        padding: var(--desciption-padding);
      }

      [hidden] {
        display: none;
      }

      
    `;
  }

  static get properties() {
    return {
        selected: Boolean,
        item: Boolean,
        teaserSearchResponse: Object,
        isLoaded: Boolean,
    };
  }

  constructor() {
    super();
    this.selected = false;
    this.teaserSearchResponse = { Result: '' };

    this.isLoaded = false;
  }

  render() {
    return html`

            <div class="description" ?hidden="${!this.isLoaded}">
              <p class="matches-heading">${this.teaserSearchResponse.Result}</p>
              <div class="button-container">
                <the-button accent @click="${this.navigateToPlatform}">Sign Up</the-button>
              </div>
            </div>

            <the-spinner ?hidden="${this.isLoaded}"></the-spinner>


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
