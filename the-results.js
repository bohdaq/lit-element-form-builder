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
                <the-button @click="${this.navigateToPlatform}">Sign Up</the-button>
              </div>
    `;
  }

  navigateToPlatform() {
    //TODO: show only remaining questions in the platform
    // proper redirect not inside the iframe
    // for option show tags inide the platform
    // clear the tags state

    console.log('navigateToPlatform');
    debugger;

    if(location.hostname === 'localhost') {
      location.href = `http://localhost:3000/matchme?AnonymousUserId=${this.teaserSearchResponse.AnonymousUserId}`
    } else {
      location.href = `https://avocado-platform-qa.web.app/matchme?AnonymousUserId=${this.teaserSearchResponse.AnonymousUserId}`
    }


  }

}

window.customElements.define('the-results', TheResults);
