import { LitElement, html, css } from 'lit-element';


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
        width: 850px;

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
      }


      .line {
        background-color: lightgray;
        height: 1px;
        width: 50px;
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


      .answer-container {
        box-shadow: 0em 0em 0.65em 0em rgb(0 0 0 / 25%);
        width: 100px;
        padding: 10px;

        flex-direction: column;
        display: flex;
        align-items: center;
        text-align: center;

        margin: 1em;
      }

      .check-mark-container {
        border: 1px solid lightgray;
        border-radius: 20px;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
      }

      .white {
        color: white;
      }

      .answer-label {
        font-family: "Poppins",sans-serif;
        font-size: .8em;
        font-style: normal;
        font-weight: 200;
        line-height: 1.4;
        letter-spacing: 0em;

        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .selected {
        background-color: rgb(92,219,149);
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
        },


        {
          number: 4,
          name: 'Applications',
          type: 'APPLICATIONS'
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
                html`<div class="number-in-circle active">${item.number}</div>` :
                html`<div class="number-in-circle">${item.number}</div>`}


                <div class="step-name">${item.name}</div>


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
                        <div class="answer-container">
                          <div class="check-mark-container white">&#10003;</div>
                          <div class="answer-label">${answer.label}</div>
                        </div>
                      
                      `)}

                     

                    </div>
                  </div>

              
              `)}
                

                
                ` :
                html``}

        ${this.currentStep.type === 'MATCHES'  ?
                html`
                
                    <p class="matches-heading">${this.currentStep.heading}</p>
                    
                
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
