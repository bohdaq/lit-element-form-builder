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

      .blocks-container {
        display: flex;
      }

      .block {
        flex: 1;
        background-color: rgb(41,152,244);
        margin: 1em;
        padding: 2em;
      }

      .block .title {
        color: rgb(255,188,0);
        text-transform: uppercase;
        font-size: .7em;
      }

      .numbers-block {
        margin-top: 3em;
        display: flex;
      }

      .numbers-block-heading {
        font-size: .65em;
        color: white;
      }

      .numbers-block-left-part {
        margin-right: .7em;
      }

      .number-of-tax-incentives, .total-value-of-tax-incentives {
        color: white;
        font-size: 1.5em;
        display: flex;
      }

      .currency-container {
        font-size: .7em;
      }

      .description-label {
        font-family: "Roboto",sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0em;
        text-transform: none;
        color: rgb(66,66,66);
      }

      .selected-step {
        color: black; 
      }


      .program-row {
        display: flex;

        border-bottom: 1px solid lightgrey;

        padding: .7em;
      }

      .program-row-top-border {
        border-top: 1px solid lightgrey;
      }

      .program-row-number {
        font-family: "Roboto",sans-serif;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0em;
        text-transform: none;
        color: #000;
        padding-right: 16px;
      }

      .program-row-label {
        font-family: "Roboto",sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0em;
        text-transform: none;
        color: #000;
        background-color: transparent;
        min-width: 240px;
        max-width: 240px;
      }


      .program-row-see-details {
        white-space: nowrap;
        color: rgb(77,161,255);
        margin-left: 1em;
      }
      
      .program-row-see-details:hover {
        color: rgb(245,147,54);
        cursor: pointer;
      }

      .program-row-checkbox {
        margin-left: 1em;
      }

      .explanation-text {
        font-family: "Roboto",sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0em;
        text-align: left;
        text-transform: none;
        color: rgb(66,66,66);

        margin-top: 1em;
      }

      .flex {
        flex: 1;
      }

      .inner-container {
        display: flex;
      }

      .mobile-screen {
        display: none;
      }

      


      /* iPhone X and Xs Max */
      @media only screen 
          and (min-device-width: 375px) 
          and (min-device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3)
          and (orientation: portrait) { 
          /* styles */
      
            .blocks-container {
              flex-direction: column;
            }

            .block .title {
              font-size: 3em;
            }

            .numbers-block-heading {
              font-size: 3em;
            }

            .number-of-tax-incentives {
              font-size: 3em;
            }

            .total-value-of-tax-incentives {
              font-size: 3em;
            }

            .currency-container {
              font-size: .5em;
            }

            .numbers-block {
              flex-direction: column;
            }

            .numbers-block-left-part {
              display: flex;
            }

            .numbers-block-right-part {
              display: flex;
            }

            .inner-container {
              display: block;
              width: 100%;
            }

            .program-row-label {
              max-width: unset;
              min-width: unset;
              font-size: 3em;
            }

            .program-separator {
              display: none;
            }

            .program-row-see-details {
              margin-left: 0;
              font-size: 2.5em;
              font-family: 'Helvetica', 'Arial', sans-serif;
            }

            .description-label {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            .program-row {
              padding: 2em;
            }

            .mobile-screen-number {
              margin-bottom: .3em;
              font-size: 2em;
              font-weight: 300;
            }
            

            .mobile-screen {
              display: flex;
            }

            .desktop-screen {
              display: none;
            }

            .program-description {
              font-size: 2.5em;
              padding: .5em 0;
            }

            .matches-heading {
              font-size: 5em;
            }

            .description-label {
              font-size: 3em;
              font-weight: 100;
            }

            .explanation-text {
              font-size: 3em;
            }
          
      }

      /* iPhone XR */
      @media only screen 
          and (min-device-width: 414px) 
          and (min-device-height: 896px) 
          and (-webkit-device-pixel-ratio: 2) 
          and (orientation: portrait) { 
          /* styles */

          .blocks-container {
              flex-direction: column;
            }

            .block .title {
              font-size: 3em;
            }

            .numbers-block-heading {
              font-size: 3em;
            }

            .number-of-tax-incentives {
              font-size: 3em;
            }

            .total-value-of-tax-incentives {
              font-size: 3em;
            }

            .currency-container {
              font-size: .5em;
            }

            .numbers-block {
              flex-direction: column;
            }

            .numbers-block-left-part {
              display: flex;
            }

            .numbers-block-right-part {
              display: flex;
            }

            .inner-container {
              display: block;
              width: 100%;
            }

            .program-row-label {
              max-width: unset;
              min-width: unset;
              font-size: 3em;
            }

            .program-separator {
              display: none;
            }

            .program-row-see-details {
              margin-left: 0;
              font-size: 2.5em;
              font-family: 'Helvetica', 'Arial', sans-serif;
            }

            .description-label {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            .program-row {
              padding: 2em;
            }

            .mobile-screen-number {
              margin-bottom: .3em;
              font-size: 2em;
              font-weight: 300;
            }
            

            .mobile-screen {
              display: flex;
            }

            .desktop-screen {
              display: none;
            }

            .program-description {
              font-size: 2.5em;
              padding: .5em 0;
            }

            .matches-heading {
              font-size: 5em;
            }

            .description-label {
              font-size: 3em;
              font-weight: 100;
            }

            .explanation-text {
              font-size: 3em;
            }
          
      }

      /* iPhone 6,7 */
      @media only screen 
        and (min-device-width : 375px) 
        and (max-device-width : 667px) { 
          /* styles */

          .blocks-container {
              flex-direction: column;
            }

            .block .title {
              font-size: 3em;
            }

            .numbers-block-heading {
              font-size: 3em;
            }

            .number-of-tax-incentives {
              font-size: 3em;
            }

            .total-value-of-tax-incentives {
              font-size: 3em;
            }

            .currency-container {
              font-size: .5em;
            }

            .numbers-block {
              flex-direction: column;
            }

            .numbers-block-left-part {
              display: flex;
            }

            .numbers-block-right-part {
              display: flex;
            }

            .inner-container {
              display: block;
              width: 100%;
            }

            .program-row-label {
              max-width: unset;
              min-width: unset;
              font-size: 3em;
            }

            .program-separator {
              display: none;
            }

            .program-row-see-details {
              margin-left: 0;
              font-size: 2.5em;
              font-family: 'Helvetica', 'Arial', sans-serif;
            }

            .description-label {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            .program-row {
              padding: 2em;
            }

            .mobile-screen-number {
              margin-bottom: .3em;
              font-size: 2em;
              font-weight: 300;
            }
            

            .mobile-screen {
              display: flex;
            }

            .desktop-screen {
              display: none;
            }

            .program-description {
              font-size: 2.5em;
              padding: .5em 0;
            }

            .matches-heading {
              font-size: 5em;
            }

            .description-label {
              font-size: 3em;
              font-weight: 100;
            }

            .explanation-text {
              font-size: 3em;
            }

      }

      /* iPhone 6+,7+ */
      @media only screen 
        and (min-device-width : 414px) 
        and (max-device-width : 736px) { 
        /* styles */

            .blocks-container {
              flex-direction: column;
            }

            .block .title {
              font-size: 3em;
            }

            .numbers-block-heading {
              font-size: 3em;
            }

            .number-of-tax-incentives {
              font-size: 3em;
            }

            .total-value-of-tax-incentives {
              font-size: 3em;
            }

            .currency-container {
              font-size: .5em;
            }

            .numbers-block {
              flex-direction: column;
            }

            .numbers-block-left-part {
              display: flex;
            }

            .numbers-block-right-part {
              display: flex;
            }

            .inner-container {
              display: block;
              width: 100%;
            }

            .program-row-label {
              max-width: unset;
              min-width: unset;
              font-size: 3em;
            }

            .program-separator {
              display: none;
            }

            .program-row-see-details {
              margin-left: 0;
              font-size: 2.5em;
              font-family: 'Helvetica', 'Arial', sans-serif;
            }

            .description-label {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            .program-row {
              padding: 2em;
            }

            .mobile-screen-number {
              margin-bottom: .3em;
              font-size: 2em;
              font-weight: 300;
            }
            

            .mobile-screen {
              display: flex;
            }

            .desktop-screen {
              display: none;
            }

            .program-description {
              font-size: 2.5em;
              padding: .5em 0;
            }

            .matches-heading {
              font-size: 5em;
            }

            .description-label {
              font-size: 3em;
              font-weight: 100;
            }

            .explanation-text {
              font-size: 4em;
            }

      }


      /* iPhone 5, SE (portrait & landscape)----------- */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 568px) {
        /* STYLES GO HERE */

        .blocks-container {
          flex-direction: column;
        }

        .block .title {
          font-size: 3em;
        }

        .numbers-block-heading {
          font-size: 3em;
        }

        .number-of-tax-incentives {
          font-size: 3em;
        }

        .total-value-of-tax-incentives {
          font-size: 3em;
        }

        .currency-container {
          font-size: .5em;
        }

        .numbers-block {
          flex-direction: column;
        }

        .numbers-block-left-part {
          display: flex;
        }

        .numbers-block-right-part {
          display: flex;
        }

        .inner-container {
          display: block;
          width: 100%;
        }

        .program-row-label {
          max-width: unset;
          min-width: unset;
          font-size: 3em;
        }

        .program-separator {
          display: none;
        }

        .program-row-see-details {
          margin-left: 0;
          font-size: 2.5em;
          font-family: 'Helvetica', 'Arial', sans-serif;
        }

        .description-label {
          margin-top: 1em;
          margin-bottom: 1em;
        }
        .program-row {
          padding: 2em;
        }

        .mobile-screen-number {
          margin-bottom: .3em;
          font-size: 2em;
          font-weight: 300;
        }
        

        .mobile-screen {
          display: flex;
        }

        .desktop-screen {
          display: none;
        }

        .program-description {
          font-size: 2.5em;
          padding: .5em 0;
        }

        .matches-heading {
          font-size: 5em;
        }

        .description-label {
          font-size: 3em;
          font-weight: 100;
        }

        .explanation-text {
          font-size: 4em;
        }
      }

      
    `;
  }

  static get properties() {
    return {
        selected: Boolean,
        item: Boolean,
    };
  }

  constructor() {
    super();
    this.selected = false;

  }

  render() {
    return html`

              <p class="matches-heading">You may qualify for the following programs</p>

              <div class="blocks-container">
                
                <div class="tax-incentives block">
                  <div class="title">Tax Incentives</div>

                  <div class="numbers-block">
                    <div class="numbers-block-left-part">
                      <div class="numbers-block-heading">
                        Number of tax incentives
                      </div>
                      <div class="flex"></div>
                      <div class="number-of-tax-incentives">
                        10
                      </div>
                    </div>
                    <div class="numbers-block-right-part">
                      <div class="numbers-block-heading">
                        Tax incentives available
                      </div>
                      <div class="flex"></div>
                      <div class="total-value-of-tax-incentives">
                        <div class="currency-container">S$</div>22k
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tax-incentives block">
                  <div class="title">Grants</div>

                  <div class="numbers-block">
                    <div class="numbers-block-left-part">
                      <div class="numbers-block-heading">
                        Number of grants available
                      </div>
                      <div class="flex"></div>
                      <div class="number-of-tax-incentives">
                        4
                      </div>
                    </div>
                    <div class="numbers-block-right-part">
                      <div class="numbers-block-heading">
                          Grants available
                        </div>
                        <div class="flex"></div>
                        <div class="total-value-of-tax-incentives">
                          <div class="currency-container">S$</div>37k
                        </div>
                    </div>
                  </div>
                </div>
                
                <div class="tax-incentives block">
                  <div class="title">Funding Sources</div>

                  <div class="numbers-block">
                    <div class="numbers-block-left-part">
                      <div class="numbers-block-heading">
                        Equity programs
                      </div>
                      <div class="flex"></div>
                      <div class="number-of-tax-incentives">
                        4
                      </div>
                    </div>
                    <div class="numbers-block-right-part">
                      <div class="numbers-block-heading">
                          Equity programs available
                        </div>
                        <div class="flex"></div>
                        <div class="total-value-of-tax-incentives">
                          <div class="currency-container">S$</div>255k
                        </div>
                    </div>
                  </div>
                </div>

              </div>


              <div class="description-label">Description of the 18 program found</div>


              <!-- mobile -->

              <div class="program-row program-row-top-border mobile-screen">
                <div class="program-row-number">
                  <div class="mobile-screen-number">1</div>
                  <the-checkbox></the-checkbox>
                </div>
                <div class="inner-container">
                  <div class="program-row-label">Enterprise Development Grant</div>
                  <div class="program-row-description">
                    <div class="program-description">Early-stage funding to fast-track commercialization of the technology solutions.</div>
                    <span class="program-row-see-details">See details &#x1F517;</span>
                  </div>
                  
                </div>
                <div class="flex program-separator"></div>
                <div class="program-row-checkbox"></div>
              </div>

              <div class="program-row program-row-top-border mobile-screen">
                <div class="program-row-number">
                  <div class="mobile-screen-number">2</div>
                  <the-checkbox></the-checkbox>
                </div>
                <div class="inner-container">
                  <div class="program-row-label">Double tax deduction for IP licensing costs</div>
                  <div class="program-row-description">
                    <div class="program-description">Supports companies licensing IP in Singapore and allows a deduction of double the costs incurred in securing IP.</div>
                    <span class="program-row-see-details">See details &#x1F517;</span>
                  </div>
                  
                </div>
                <div class="flex program-separator"></div>
                <div class="program-row-checkbox"></div>
              </div>

              <div class="program-row program-row-top-border mobile-screen">
                <div class="program-row-number">
                  <div class="mobile-screen-number">3</div>
                  <the-checkbox></the-checkbox>
                </div>
                <div class="inner-container">
                  <div class="program-row-label">IRS Co-creation Grants</div>
                  <div class="program-row-description">
                    <div class="program-description">Supports software developers in the development of innovative solutions for tax filing preparation or tax management.</div>
                    <span class="program-row-see-details">See details &#x1F517;</span>
                  </div>
                  
                </div>
                <div class="flex program-separator"></div>
                <div class="program-row-checkbox"></div>
              </div>


              <div class="program-row program-row-top-border mobile-screen">
                <div class="program-row-number">
                  <div class="mobile-screen-number">4</div>
                  <the-checkbox></the-checkbox>
                </div>
                <div class="inner-container">
                  <div class="program-row-label">Financial Sector Technology Scheme</div>
                  <div class="program-row-description">
                    <div class="program-description">Supports Financial Institutions (FI) in setting up innovation Centres of Excellence (COE) or labs in Singapore to test-bed innovative ideas and roll out market solutions.</div>
                    <span class="program-row-see-details">See details &#x1F517;</span>
                  </div>
                  
                </div>
                <div class="flex program-separator"></div>
                <div class="program-row-checkbox"></div>
              </div>

              <div class="explanation-text mobile-screen">
                We can conduct a preliminary evaluation of your company's suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process.
                <br /> <br /> We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation. 
                <br /> <br /> Check the programs you want to evaluate and click the button below.
              </div>


              <!-- desktop -->

              <div class="program-row program-row-top-border desktop-screen">
                <div class="program-row-number">1</div>
                <div class="program-row-label">Enterprise Development Grant</div>
                <div class="program-row-description">Early-stage funding to fast-track commercialization of the technology solutions.</div>
                <div class="flex"></div>
                <div class="program-row-see-details">See details</div>
                <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
              </div>

              <div class="program-row desktop-screen">
                <div class="program-row-number">2</div>
                <div class="program-row-label">Double tax deduction for IP licensing costs</div>
                <div class="program-row-description">Supports companies licensing IP in Singapore and allows a deduction of double the costs incurred in securing IP.</div>
                <div class="flex"></div>
                <div class="program-row-see-details">See details</div>
                <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
              </div>

              <div class="program-row desktop-screen">
                <div class="program-row-number">3</div>
                <div class="program-row-label">IRS Co-creation Grants</div>
                <div class="program-row-description">Supports software developers in the development of innovative solutions for tax filing preparation or tax management.</div>
                <div class="flex"></div>
                <div class="program-row-see-details">See details</div>
                <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
              </div>

              <div class="program-row desktop-screen">
                <div class="program-row-number">4</div>
                <div class="program-row-label">Financial Sector Technology Scheme</div>
                <div class="program-row-description">Supports Financial Institutions (FI) in setting up innovation Centres of Excellence (COE) or labs in Singapore to test-bed innovative ideas and roll out market solutions.</div>
                <div class="flex"></div>
                <div class="program-row-see-details">See details</div>
                <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
              </div>

              <div class="explanation-text desktop-screen">
                We can conduct a preliminary evaluation of your company's suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process. We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation. Check the programs you want to evaluate and click the button below.
              </div>

    `;
  }

}

window.customElements.define('the-results', TheResults);
