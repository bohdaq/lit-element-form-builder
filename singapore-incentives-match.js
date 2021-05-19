import { LitElement, html, css } from 'lit-element';
import './the-checkbox';
import './the-question';
import './the-answer';
import './the-results';
import './the-button';


/**
 * Answer a few questions about your company and we will tell you all tax credits, grants, incentives and funding sources that your company is eligible for. You can then learn more about each program and — if you decide — we can help you apply for any or all of them.
 */
export class SingaporeIncentivesMatch extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 17px;
      }
      @media (max-width: 900px) {
        :host { font-size: 15px; }
        .buttons-container {
          font-size: 1.2rem;
        }
      }
      @media (max-width: 400px) {
        :host { font-size: 13px; }
        .buttons-container {
          font-size: 5rem;
        }
      }

      :host {
        display: flex;
        justify-items: center;
        align-items: center;
      }

      .main-container {
        font-size: 1em;
        
        width: 100%;
        display: flex;
        justify-content: center;
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
        padding: 1.5em 2em;
        background-color: rgb(255,255,255);

        border-width: 1px;
        border-style: solid;
        border-color: rgb(220,220,220);
        border-radius: 10px;

      }


      .buttons-container {
        display: flex;
        margin-top: 1em;
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

      .ok-next {
        cursor: pointer;
        outline: none;
        border: 1px solid transparent;
        margin: 0px;
        box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
        padding: .6rem 1rem;
        background-color: rgb(0, 175, 255);
        color: rgb(255, 255, 255);
        border-radius: 4px;
        min-width: 35px;
        font-family: "Poppins",sans-serif
      }

      @media only screen 
        and (max-device-width : 1080px) { 
          /* styles */
          .ok-next {
            font-size: 2rem;
          }
      }


      @media only screen 
        and (max-device-width : 667px) { 
          /* styles */
          .ok-next {
            font-size: 1.2em;
            padding: 8px 15px;
          }
      }


      .ok-next:hover {
        background-color: rgb(38, 187, 255);
      }

      .fill-white {
        fill: white;
        margin-left: .7em;
      }

      h4 {
        font-family: Poppins, sans-serif;
        font-size: 2em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em);
        text-transform: none;
        color: rgb(0, 0, 0);
        margin-top: 0;
        margin-bottom: .2em;
      }

      .intro-container {
        font-size: 1.2rem;
      }

      .intro-description {
        margin-top: 0.35em;
        font-family: Poppins, sans-serif;
        font-size: .8em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em);
        text-transform: none;
        color: rgb(117, 117, 117);

        animation: bounce; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 2s; /* don't forget to set a duration! */
      }

      .progress-bar {
        display: block;
        width: 100px;
        height: 20px;
        background-color: blue;
      }

      
      @media all and (max-width: 768px) {
          
          .content-container {
            max-width: 100%;
          }
      }


      


      .animate {
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }

      @-webkit-keyframes fadeInDown {
            0% {
               opacity: 0;
               -webkit-transform: translateY(-50px);
            }
            100% {
               opacity: 1;
               -webkit-transform: translateY(0);
            }
         }
         
         @keyframes fadeInDown {
            0% {
               opacity: 0;
               transform: translateY(-50px);
            }
            100% {
               opacity: 1;
               transform: translateY(0);
            }
         }

         .fadeInDown {
            -webkit-animation-name: fadeInDown;
            animation-name: fadeInDown;
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
      Steps: [
        {
          Name: 'Intro',
          Type: "INTRO",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec urna vitae arcu feugiat pulvinar vitae eget magna. Nulla lobortis nulla ut fringilla eleifend. Vestibulum vel pretium ex. Curabitur a erat in enim sollicitudin aliquam. In hac habitasse platea dictumst. Cras diam dolor, venenatis sit amet turpis sed, pharetra viverra odio. Cras euismod ac libero sit amet sagittis. Nulla id placerat libero. Curabitur aliquet fringilla aliquet. Vivamus ac dolor pharetra, semper dui ac, malesuada mi. Duis pellentesque arcu sed libero ullamcorper, et vulputate ipsum accumsan. Mauris a nibh nec magna convallis mollis. Ut porttitor justo arcu, posuere interdum sapien dapibus ut.",
        },
        {
          Name: 'Industry',
          Type: 'QUESTIONNAIRE',
          Questions: [
            {
              Code: '7f655c89-99cb-4acd-8211-a77329483b30',
              question: 'How old is your company?',
              Description: 'Many incentive programs are available only to startups or companies in their first two years. Please select the option that best describes the age of your company.',
              AnswerOptions: [
                {
                  Code: 'd0792019-d321-4aa6-82e6-9fda0bd4014f',
                  AnswerText: 'Not yet incorporated'
                },
                {
                  Code: '313c0c71-cb1b-4f2d-9cfe-5691df666d3d',
                  AnswerText: '0 - 2 years'
                },
                {
                  Code: 'b35d0885-427f-4408-9823-7e19f8c777d3',
                  AnswerText: 'More than 2 years'
                }
              ]
            },
            {
              Code: 'ed552cf1-0be8-46f2-8efd-5f009f2f61aa',
              question: 'What percentage of your company is owned by Singapore residents?',
              Description: 'Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.',
              AnswerOptions: [
                {
                  Code: '71bab4c1-8190-4efd-b819-79de3b489695',
                  AnswerText: '0%'
                },
                {
                  Code: '742f6e85-9985-465d-91c1-38408804df02',
                  AnswerText: 'Less than 30%'
                },
                {
                  Code: '7a487b63-0563-4f1e-9274-7d60a1831207',
                  AnswerText: '30 to 50%'
                },
                {
                  Code: 'c06f0d5e-7cf3-45fd-ab04-e2fb87f3722e',
                  AnswerText: 'More than 50%'
                }
              ]
            },
            {
              Code: '6e7f42a7-66f1-4e9b-8e94-b6947d4cad58',
              question: 'How many employees do you have in Singapore?',
              Description: 'Some programs require a minimum level of shareholding by Singapore residents. Please select the option that best describes the percentage held of your company owned by Singapore residents.',
              AnswerOptions: [
                {
                  Code: 'fc3b6091-ea4c-4b1b-b3af-4ab9442d13f2',
                  AnswerText: '0 - 10'
                },
                {
                  Code: 'e63daf39-64fb-4008-9d03-48107e923ca5',
                  AnswerText: '11 - 50'
                },
                {
                  Code: 'b33be8f8-7783-41ed-bc5e-b1a9f4a3e154',
                  AnswerText: '51 - 200'
                },
                {
                  Code: '740fdeae-f298-4f4e-80ac-64f08e5a5a32',
                  AnswerText: 'More than 200'
                }
              ]
            },
            {
              Code: '0199247e-43c7-4d7f-b04f-31920ea8f4cb',
              multipleSelection: true,
              question: 'Select the attributes applicable to your company?',
              Description: 'Many programs are available only to companies that demonstrate specific attributes (such as use of novel innovative technology, hiring of local staff, etc.). To see a description of each attribute hover the mouse over it.',
              AnswerOptions: [
                {
                  Code: 'ded67768-42c9-4b2e-80bd-c76268905ee0',
                  AnswerText: 'Low use of energy'
                },
                {
                  Code: 'cc26b090-9650-49b6-a376-b04b9ecc9465',
                  AnswerText: 'Foreign exports'
                },
                {
                  Code: 'dda467d5-f947-4789-9aea-034bd4f85a06',
                  AnswerText: 'Trade financing'
                },
                {
                  Code: 'b7a31474-1e5f-429d-830d-18a14ee56521',
                  AnswerText: 'IP rights licensing'
                },
                {
                  Code: 'e055fa05-7fb0-4f9b-b2b3-9294fbe56e43',
                  AnswerText: 'Innovative technology'
                },
                {
                  Code: '0d64e546-2fb1-41f4-8218-4ee539cea053',
                  AnswerText: 'Hiring local staff'
                },
                {
                  Code: '05432a32-c78d-4f23-a698-fb2f14c8a037',
                  AnswerText: 'Patents owned'
                },
                {
                  Code: 'bbfaf14c-1b85-4ba9-b631-ee6e58aa09e9',
                  AnswerText: 'New product'
                },
                {
                  Code: '42697e39-a6be-46d4-81f6-c7885c877f59',
                  AnswerText: 'Innovative Technology'
                }
              ]
            }
          ]
        },
        {
          Name: 'Matches',
          Type: 'MATCHES',
          Heading: 'You may qualify for the following programs',
          Description: 'We can conduct a preliminary evaluation of your company\'s suitability for these programs and provide you a realistic assessment of your chances of success. After that, you can either apply for the programs on your own; or we can help you manage the complete application process. We offer a "no risk" fee structure — you pay our fees only if your application is approved; if the application is not approved, you pay no fees to us. We do charge a nominal fee for the initial evaluation.'
        }
      ]
    }





    this.currentStepIndex = 0;
    this.currentStep = this.config.Steps[this.currentStepIndex];

    this.currentQuestionIndex = 0;
    if(this.currentStep.Questions) {
      this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];
    }

    this.addEventListener('next-question', this._nextQuestion);

  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
      <div class="main-container">
        
        <div class="content-container animate__animated" id="animate-container">
          <div>

        ${this.currentStep.Type === 'QUESTIONNAIRE'  ?
                html`

                  <the-question .index="${this.currentQuestionIndex}" .item="${this.currentQuestion}" .multipleSelection="${this.currentQuestion.multipleSelection}"></the-question>
               
               ` :
                html``}

        ${this.currentStep.Type === 'MATCHES'  ?
                html`
                
                    <the-results></the-results>
                    
                
                ` :
                html``}

        ${this.currentStep.Type === 'INTRO'  ?
                html`


<!-- animate__fadeOutDown -->
                  <div class="intro-container">
                      <h4>${this.currentStep.Name}</h4>

                      <span class="intro-description">${this.currentStep.Description}</span>

                      <!-- <div class="button accent" @click=${this.nextStepClicked}>Next ></div> -->

                      <div class="buttons-container">
                        <the-button @click="${this.nextStepClicked}">Next</the-button>
                        <div class="flex"></div>
                        <!-- <div class="progress-bar"></div> -->
                      </div>
                  </div>

                  
                ` :
                html``}


          </div>
        </div>
      </div>
    `;
  }

  nextStepClicked() {
    console.log('nextStepClicked');

    this.currentStepIndex = this.currentStepIndex + 1;
    this.currentStep = this.config.Steps[this.currentStepIndex];


    if(this.currentStep.Type === 'QUESTIONNAIRE') {
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];

      
    }

    const animationContainer = this.shadowRoot.querySelector('#animate-container');
    animationContainer.classList.add('animate__fadeOutUp');

    const that = this;
    setTimeout(() => {
      animationContainer.classList.remove('animate__fadeOutUp');
      that.requestUpdate();
      animationContainer.classList.add('animate__fadeInUp');
    }, 1000)


    

  }

  previousClicked() {
    console.log('previousClicked');

    this.currentStepIndex = this.currentStepIndex - 1;
    this.currentStep = this.config.Steps[this.currentStepIndex];
    this.requestUpdate();
  }

  _nextQuestion(ev) {
    console.log('_nextQuestion', ev)
    const isLastQuestion = this.currentQuestionIndex + 1 === this.currentStep.Questions.length;
    if(isLastQuestion) {
      this.currentQuestionIndex = 0;
      this.nextStepClicked();
      return;
    }

    this.currentQuestionIndex = this.currentQuestionIndex + 1;
    this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];


    const animationContainer = this.shadowRoot.querySelector('#animate-container');
    animationContainer.classList.add('animate__fadeOutUp');
    const that = this;
    setTimeout(() => {
      animationContainer.classList.remove('animate__fadeOutUp');
      that.requestUpdate();
      animationContainer.classList.add('animate__fadeInUp');
      that.scrollTo({top: 0, behavior: 'smooth'});
    }, 1000)
  }

  

  

}

window.customElements.define('singapore-incentives-match', SingaporeIncentivesMatch);
