import { LitElement, html, css } from 'lit-element';
import './the-checkbox';
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

      .question-title {
        font-family: "Poppins",sans-serif;
        font-size: 1.2em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em * -1);
        text-transform: none;
        color: rgba(0,0,0,1);
      }

      .content-container {
        margin: 1.5em 2em;
        min-height: 786px;
      }

      .question-description {
        margin-top: 0.35em;
        font-family: "Poppins",sans-serif;
        font-size: 1em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em * -1);
        text-transform: none;
        color: rgb(117,117,117);
      }

      .answers-container {
        display: flex;
        padding: 30px;
        flex-flow: wrap
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
        color: white;
        padding: 10px;
        background-color: rgb(92,219,149);
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
              question: 'How old is your company?',
              description: 'Many incentive programs are available only to startups or companies in their first two years. Please select the option that best describes the age of your company.',
              answerList: [
                {
                  label: 'Not yet incorporated'
                },
                {
                  label: '0 - 2 years'
                },
                {
                  label: 'More than 2 years'
                }
              ]
            },
            {
              question: 'What percentage of your company is owned by Singapore residents?',
              description: 'Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.',
              answerList: [
                {
                  label: '0%'
                },
                {
                  label: 'Less than 30%'
                },
                {
                  label: '30 to 50%'
                },
                {
                  label: 'More than 50%'
                }
              ]
            },
            {
              question: 'How many employees do you have in Singapore?',
              description: 'Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.',
              answerList: [
                {
                  label: '0 - 10'
                },
                {
                  label: '11 - 50'
                },
                {
                  label: '51 - 200'
                },
                {
                  label: 'More than 200'
                }
              ]
            }
          ]
        },

        {
          number: 2,
          name: 'Key Features',
          type: 'QUESTIONNAIRE',
          questionList: [
            {
              question: 'Select the attributes applicable to your company?',
              description: 'Many programs are available only to companies that demonstrate specific attributes (such as use of novel innovative technology, hiring of local staff, etc.). To see a description of each attribute hover the mouse over it.',
              answerList: [
                {
                  label: 'Low use of energy'
                },
                {
                  label: 'Foreign exports'
                },
                {
                  label: 'Trade financing'
                },
                {
                  label: 'IP rights licensing'
                },
                {
                  label: 'Innovative technology'
                },
                {
                  label: 'Hiring local staff'
                },
                {
                  label: 'Patents owned'
                },
                {
                  label: 'New product'
                },
                {
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
        <div class="progress-bar-container">

          ${this.config.steps.map((item, index) => 
            html`

              ${this.currentStepIndex === index  ?
                html`<div class="number-in-circle active">${item.number}</div><div class="step-name selected-step"><b>${item.name}</b></div>` :
                html`<div class="number-in-circle">${item.number}</div><div class="step-name">${item.name}</div>`}


                


                ${this.config.steps.length !== index +1 ?
                  html`<div class="line-separator">
                      <div class="line"></div>
                    </div>` :
                  html``}

             
            `)}


        </div>

        <div class="content-container">

        ${this.currentStep.type === 'QUESTIONNAIRE'  ?
                html`


            ${this.currentStep.questionList.map((item, index) => 
              html`

                  <div class="question-container">
                    <div class="question-title">${item.question}</div>
                    <div class="question-description">${item.description}</div>
                    <div class="answers-container">


                    ${item.answerList.map((answer, index) => 
                      html`
                        <the-answer>${answer.label}</the-answer>
                      
                      `)}

                     

                    </div>
                  </div>

              
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
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">2</div>
                      <div class="program-row-label">Double tax deduction for IP licensing costs</div>
                      <div class="program-row-description">Supports companies licensing IP in Singapore and allows a deduction of double the costs incurred in securing IP.</div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">3</div>
                      <div class="program-row-label">IRS Co-creation Grants</div>
                      <div class="program-row-description">Supports software developers in the development of innovative solutions for tax filing preparation or tax management.</div>
                      <div class="program-row-see-details">See details</div>
                      <div class="program-row-checkbox"><the-checkbox></the-checkbox></div>
                    </div>

                    <div class="program-row">
                      <div class="program-row-number">4</div>
                      <div class="program-row-label">Financial Sector Technology Scheme</div>
                      <div class="program-row-description">Supports Financial Institutions (FI) in setting up innovation Centres of Excellence (COE) or labs in Singapore to test-bed innovative ideas and roll out market solutions.</div>
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
          <div class="button" @click=${this.previousClicked}>< Previous</div>
          <div class="flex"></div>
          <div class="button" @click=${this.nextClicked}>Next ></div>


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
