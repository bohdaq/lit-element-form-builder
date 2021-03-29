import { LitElement, html, css } from 'lit-element';
import './the-checkbox';
import './the-question';
import './the-answer';


/**
 * Answer a few questions about your company and we will tell you all tax credits, grants, incentives and funding sources that your company is eligible for. You can then learn more about each program and — if you decide — we can help you apply for any or all of them.
 */
export class SingaporeIncentivesMatch extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
      }

      .main-container {

        border-width: 1px;
        border-style: solid;
        border-color: rgb(220,220,220);
        border-radius: 10px;
        font-size: 1em;
        background-color: rgb(255,255,255);
        max-width: 880px;
      }

      .progress-bar-container {
        display: flex;
        height: 20px;
        padding: 10px 5px 10px 20px;
        font-size: 14px;
        border-bottom: 1px solid rgb(220,220,220);
      }

      .number-in-circle {
        background-color: rgb(220,220,220);
        border-radius: 20px;
        width: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        border: 2px solid rgb(92,219,149);
        color: rgb(117,117,117);
      }

      .step-name {
        color: rgb(117,117,117);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 10px;
      }

      .line-separator {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        flex: 1;
      }


      .line {
        background-color: lightgray;
        height: 1px;
        width: 100%;
      }

      .active {
        background-color: rgb(92,219,149);
        color: white;
      }

      .red {
        color: red;
      }


      .content-container {
        margin: 1.5em 2em;
        min-height: 786px;
      }


      .buttons-container {
        display: flex;
        padding: 10px 5px;
        font-size: 14px;
        border-top: 1px solid rgb(220,220,220);
      }

      .button {
        margin: 0em 20px 0em 20px;
        border-radius: 5px;
        font-size: 1em;
        padding: 10px;
        background-color: rgb(220,220,220);
        color: rgb(66,66,66);
      }

      .accent {
        background-color: rgb(92,219,149);
        color: white;
      }

      .flex {
        flex: 1;
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

      .description-label {
        padding-left: 16px;
        margin-top: .1em;
        margin-bottom: .5em;
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
    `;
  }

  static get properties() {
    return {
       
    };
  }

  constructor() {
    super();
    this.config = {
      steps: [
        {
          number: 1,
          name: 'Industry',
          type: 'QUESTIONNAIRE',
          questionList: [
            {
              uuid: '7f655c89-99cb-4acd-8211-a77329483b30',
              question: 'How old is your company?',
              description: 'Many incentive programs are available only to startups or companies in their first two years. Please select the option that best describes the age of your company.',
              answerList: [
                {
                  uuid: 'd0792019-d321-4aa6-82e6-9fda0bd4014f',
                  label: 'Not yet incorporated'
                },
                {
                  uuid: '313c0c71-cb1b-4f2d-9cfe-5691df666d3d',
                  label: '0 - 2 years'
                },
                {
                  uuid: 'b35d0885-427f-4408-9823-7e19f8c777d3',
                  label: 'More than 2 years'
                }
              ]
            },
            {
              uuid: 'ed552cf1-0be8-46f2-8efd-5f009f2f61aa',
              question: 'What percentage of your company is owned by Singapore residents?',
              description: 'Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.',
              answerList: [
                {
                  uuid: '71bab4c1-8190-4efd-b819-79de3b489695',
                  label: '0%'
                },
                {
                  uuid: '742f6e85-9985-465d-91c1-38408804df02',
                  label: 'Less than 30%'
                },
                {
                  uuid: '7a487b63-0563-4f1e-9274-7d60a1831207',
                  label: '30 to 50%'
                },
                {
                  uuid: 'c06f0d5e-7cf3-45fd-ab04-e2fb87f3722e',
                  label: 'More than 50%'
                }
              ]
            },
            {
              uuid: '6e7f42a7-66f1-4e9b-8e94-b6947d4cad58',
              question: 'How many employees do you have in Singapore?',
              description: 'Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.',
              answerList: [
                {
                  uuid: 'fc3b6091-ea4c-4b1b-b3af-4ab9442d13f2',
                  label: '0 - 10'
                },
                {
                  uuid: 'e63daf39-64fb-4008-9d03-48107e923ca5',
                  label: '11 - 50'
                },
                {
                  uuid: 'b33be8f8-7783-41ed-bc5e-b1a9f4a3e154',
                  label: '51 - 200'
                },
                {
                  uuid: '740fdeae-f298-4f4e-80ac-64f08e5a5a32',
                  label: 'More than 200'
                }
              ]
            },
            {
              uuid: '0199247e-43c7-4d7f-b04f-31920ea8f4cb',
              multipleSelection: true,
              question: 'Select the attributes applicable to your company?',
              description: 'Many programs are available only to companies that demonstrate specific attributes (such as use of novel innovative technology, hiring of local staff, etc.). To see a description of each attribute hover the mouse over it.',
              answerList: [
                {
                  uuid: 'ded67768-42c9-4b2e-80bd-c76268905ee0',
                  label: 'Low use of energy'
                },
                {
                  uuid: 'cc26b090-9650-49b6-a376-b04b9ecc9465',
                  label: 'Foreign exports'
                },
                {
                  uuid: 'dda467d5-f947-4789-9aea-034bd4f85a06',
                  label: 'Trade financing'
                },
                {
                  uuid: 'b7a31474-1e5f-429d-830d-18a14ee56521',
                  label: 'IP rights licensing'
                },
                {
                  uuid: 'e055fa05-7fb0-4f9b-b2b3-9294fbe56e43',
                  label: 'Innovative technology'
                },
                {
                  uuid: '0d64e546-2fb1-41f4-8218-4ee539cea053',
                  label: 'Hiring local staff'
                },
                {
                  uuid: '05432a32-c78d-4f23-a698-fb2f14c8a037',
                  label: 'Patents owned'
                },
                {
                  uuid: 'bbfaf14c-1b85-4ba9-b631-ee6e58aa09e9',
                  label: 'New product'
                },
                {
                  uuid: '42697e39-a6be-46d4-81f6-c7885c877f59',
                  label: 'Innovative Technology'
                }
              ]
            }
          ]
        },
        {
          number: 3,
          name: 'Matches',
          type: 'MATCHES',
          heading: 'You may qualify for the following programs',
          matchList: [
            {
              label: 'Enterprise Development Grant',
              description: 'Early-stage funding to fast-track commercialization of the technology solutions.',
              link: 'https://google.com'
            },
            {
              label: 'IRS Co-creation Grants',
              description: 'Supports software developers in the development of innovative solutions for tax filing preparation or tax management.',
              link: 'https://google.com'
            },
          ],
          description: 'We can conduct a preliminary evaluation of your company\'s suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process. We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation.'
        }


       
        
      ]
    }





    this.currentStepIndex = 0;
    this.currentStep = this.config.steps[this.currentStepIndex];

  }

  render() {
    return html`
      <div class="main-container">
        
        <div class="content-container">

        ${this.currentStep.type === 'QUESTIONNAIRE'  ?
                html`


            ${this.currentStep.questionList.map((item, index) => 
              html`
                  <the-question .index="${index}" .item="${item}"></the-question>
              `)}
               
               
               
               ` :
                html``}

        ${this.currentStep.type === 'MATCHES'  ?
                html`
                
                    <p class="matches-heading">${this.currentStep.heading}</p>

                    <div class="blocks-container">
                      
                      <div class="tax-incentives block">
                        <div class="title">Tax Incentives</div>

                        <div class="numbers-block">
                          <div class="numbers-block-left-part">
                            <div class="numbers-block-heading">
                              Number of tax incentives
                            </div>
                            <div class="number-of-tax-incentives">
                              10
                            </div>
                          </div>
                          <div class="numbers-block-right-part">
                            <div class="numbers-block-heading">
                            Total value of tax incentives available
                              </div>
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
                            <div class="number-of-tax-incentives">
                              4
                            </div>
                          </div>
                          <div class="numbers-block-right-part">
                            <div class="numbers-block-heading">
                              Total value of grants available
                              </div>
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
                            <div class="number-of-tax-incentives">
                              4
                            </div>
                          </div>
                          <div class="numbers-block-right-part">
                            <div class="numbers-block-heading">
                            Total value of equity programs available
                              </div>
                              <div class="total-value-of-tax-incentives">
                                <div class="currency-container">S$</div>255k
                              </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div class="description-label">Description of the 18 program found</div>

                    <div class="program-row program-row-top-border">
                      <div class="program-row-number">1</div>
                      <div class="program-row-label">Enterprise Development Grant</div>
                      <div class="program-row-description">Early-stage funding to fast-track commercialization of the technology solutions.</div>
                      <div class="flex"></div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">2</div>
                      <div class="program-row-label">Double tax deduction for IP licensing costs</div>
                      <div class="program-row-description">Supports companies licensing IP in Singapore and allows a deduction of double the costs incurred in securing IP.</div>
                      <div class="flex"></div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">3</div>
                      <div class="program-row-label">IRS Co-creation Grants</div>
                      <div class="program-row-description">Supports software developers in the development of innovative solutions for tax filing preparation or tax management.</div>
                      <div class="flex"></div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">4</div>
                      <div class="program-row-label">Financial Sector Technology Scheme</div>
                      <div class="program-row-description">Supports Financial Institutions (FI) in setting up innovation Centres of Excellence (COE) or labs in Singapore to test-bed innovative ideas and roll out market solutions.</div>
                      <div class="flex"></div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="explanation-text">
                      We can conduct a preliminary evaluation of your company's suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process. We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation. Check the programs you want to evaluate and click the button below.
                    </div>
                    
                
                ` :
                html``}

        ${this.currentStep.type === 'APPLICATIONS'  ?
                html`
                
                
                ` :
                html``}



        </div>


        <div class="buttons-container">
          ${this.currentStepIndex === 0 ? html`` : html`<div class="button" @click=${this.previousClicked}>< Previous</div>`}
          <div class="flex"></div>
          ${this.currentStepIndex === this.config.steps.length - 1 ? html`` : html`<div class="button accent" @click=${this.nextClicked}>Next ></div>`}
          


        </div>


      </div>
    `;
  }

  nextClicked() {
    console.log('nextClicked');

    this.currentStepIndex = this.currentStepIndex + 1;
    this.currentStep = this.config.steps[this.currentStepIndex];
    this.requestUpdate();

  }

  previousClicked() {
    console.log('previousClicked');

    this.currentStepIndex = this.currentStepIndex - 1;
    this.currentStep = this.config.steps[this.currentStepIndex];
    this.requestUpdate();
  }

  

}

window.customElements.define('singapore-incentives-match', SingaporeIncentivesMatch);
