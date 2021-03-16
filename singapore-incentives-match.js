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
      }

      .answers-container {
        padding: 30px;
      }

      .answer-container {
        box-shadow: 0em 0em 0.65em 0em rgb(0 0 0 / 25%);
        width: 100px;
        padding: 10px;

        flex-direction: column;
        display: flex;
        align-items: center;
        text-align: center;

        margin-right: 2em;
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
        padding: 10px 5px 10px 20px;
        font-size: 14px;
        border-top: 1px solid rgb(220,220,220);
        flex-direction: row-reverse;
      }

      .button {
        margin: 0em 20px 0em 20px;
        border-radius: 5px;
        font-size: 1em;
        color: white;
        padding: 10px;
        background-color: rgb(92,219,149);
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
          number: 0,
          name: 'Company Info',
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
        }
        
      ]
    }
  }

  render() {
    return html`
      <div class="main-container">
        <div class="progress-bar-container">


          <div class="number-in-circle">1</div>
          <div class="step-name">Company Info</div>
          <div class="line-separator">
            <div class="line"></div>
          </div>

          <div class="number-in-circle active">2</div>
          <div class="step-name">Industry</div>
          <div class="line-separator">
            <div class="line"></div>
          </div>

          <div class="number-in-circle">3</div>
          <div class="step-name">Key Features</div>
          <div class="line-separator">
            <div class="line"></div>
          </div>

          <div class="number-in-circle">4</div>
          <div class="step-name"><span class="red">18&nbsp;</span> Matches</div>
          <div class="line-separator">
            <div class="line"></div>
          </div>

          <div class="number-in-circle">5</div>
          <div class="step-name">Applications</div>

        </div>

        <div class="content-container">


          <div class="question-container">
            <div class="question-title">How old is your company?</div>
            <div class="question-description">Many incentive programs are available only to startups or companies in their first two years. Please select the option that best describes the age of your company.</div>
            <div class="answers-container">
              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">Not yet incorporated</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white selected">&#10003;</div>
                <div class="answer-label">0 - 2 years</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">More than 2 years</div>
              </div>

            </div>
          </div>

          <div class="question-container">
            <div class="question-title">What percentage of your company is owned by Singapore residents?</div>
            <div class="question-description">Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.</div>
            <div class="answers-container">
              <div class="answer-container">
                <div class="check-mark-container white selected">&#10003;</div>
                <div class="answer-label">0%</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">Less than 30%</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">30% to 50%</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">More than 50%</div>
              </div>

            </div>
          </div>



          <div class="question-container">
            <div class="question-title">How many employees do you have in Singapore?</div>
            <div class="question-description">Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.</div>
            <div class="answers-container">
              <div class="answer-container">
                <div class="check-mark-container white selected">&#10003;</div>
                <div class="answer-label">0 - 10</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">11 - 50</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">51 - 200</div>
              </div>

              <div class="answer-container">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label">More than 200</div>
              </div>

            </div>
          </div>


        </div>


        <div class="buttons-container">
          <div class="button">Check Incentives ></div>

        </div>


      </div>
    `;
  }

  

}

window.customElements.define('singapore-incentives-match', SingaporeIncentivesMatch);
