import { LitElement, html, css } from 'lit-element';
import './the-checkbox';
import './the-question';
import './the-answer';
import './the-results';
import './the-button';
import './the-spinner';


/**
 * Answer a few questions about your company and we will tell you all tax credits, grants, incentives and funding sources that your company is eligible for. You can then learn more about each program and — if you decide — we can help you apply for any or all of them.
 */
export class SingaporeIncentivesMatch extends LitElement {
  static get styles() {
    return css`
      :host {
        --main-bg-color: brown;
        --heading-font-color: rgb(77, 161, 255);
        --heading-font-weight: normal;
        --heading-font-margin: 48px 0 24px -20px;
        --heading-font-padding: 8px 20px;
        --heading-font-font-size: 1.6em;
        --heading-font-weight: 300;
        --heading-font-family: "Roboto", sans-serif;
        --heading-font-background-color: rgba(0, 106, 177, 0.05);


        --desciption-color: rgb(0, 0, 0);
        --desciption-font-family: "Roboto Regular", RobotoDraft, Roboto, sans-serif;
        --desciption-font-size: 16px;
        --desciption-font-weight: 100;
        --desciption-line-height: 24px;
        --desciption-padding: var(--heading-font-padding);

        --hint-color: rgba(0, 0, 0, 0.87);
        --hint-font-family: "Roboto Regular", RobotoDraft, Roboto, sans-serif;
        --hint-font-size: 16px;
        --hint-font-weight: 700;
        --hint-line-height: 24px;
      }


      .heading {
        color: var(--heading-font-color);
        font-weight: var(--heading-font-weight);
        padding: var(--heading-font-padding);
        font-size: var(--heading-font-font-size);
        font-weight: var(--heading-font-weight);
        font-family: var(--heading-font-family);
        background-color: var(--heading-font-background-color);
      }

      .description {
        color: var(--desciption-color);
        font-family: var(--desciption-font-family);
        font-size: var(--desciption-font-size);
        font-weight: var(--desciption-font-weight);
        line-height: var(--desciption-line-height);
        padding: var(--desciption-padding);
      }



      .into-text-wrapper {
        margin: 1em;
      }

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

        min-height: 80vh;
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
        background-color: rgb(255,255,255);

        border-width: 1px;
        border-style: solid;
        border-color: rgb(220,220,220);
        border-radius: 10px;

        display: flex;
        flex-direction: column;

        width: 100%;

      }

      .content-flex {
        flex: 1;
      }

      .buttons-bottom-bar {
        display: block;
        display: flex;
        padding: 1em;
        border-top: 1px solid lightgrey;
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
        display: flex;
        flex-direction: column;
      }

      .progress-bar {
        display: block;
        width: 100px;
        height: 20px;
        background-color: blue;
      }

      .top-part-container {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      
      @media all and (max-width: 768px) {
          
          .content-container {
            max-width: 100%;
          }
      }

      .inner-content-container {
        padding: 1em;
        display: flex;
        height: 100%;
      }

      .content-free-space {
        justify-content: center;
        align-items: center;
        display: flex;
        flex: 1;
      }

      .content-free-space the-button {
        transform: scale(2);
      }


      


      .animate {
        -webkit-animation-duration: .3s;
        animation-duration: .3s;
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
       answers: Object,
       isButtonDisabled: Boolean,
    };
  }

  constructor() {
    super();

    Array.prototype.remove = function(elem) {
      var indexElement = this.findIndex(el => el === elem);
      if (indexElement != -1)
        this.splice(indexElement, 1);
      return this;
    };  

    this._configResponseRetrieved = false;
    this.answers = {};
    this.isButtonDisabled = true;
    this.requestUpdate();

    fetch('https://mithun-dot-avocado-backend-v1.appspot.com/v1/programmes/INCENTIVES')
    .then(response => response.json())
    .then(data => this._parseResponse(data));
  }

  _parseResponse(data) {
    
    this._configResponseRetrieved = true;
    this.config = data;
    this.config.Steps.sort( (a, b) => {
      return a.SortOrder - b.SortOrder;
    });
    
    this.requestUpdate();


    this.currentStepIndex = 0;
    this.currentStep = this.config.Steps[this.currentStepIndex];

    this.currentQuestionIndex = 0;
    if(this.currentStep.Questions) {
      this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];
    }

    this.addEventListener('next-question', this._nextQuestionListener);
    this.addEventListener('proceed-to-the-platform', this._proceedToThePlatform);
    this.addEventListener('answer-selected', this._answerSelected);


    let that = this;
    setTimeout(()=> {
      // TODO that.shadowRoot.querySelector('#information-description').innerHTML = this.currentStep.Description;
    });

  }

  render() {
    return html` 
    
    ${this._configResponseRetrieved ?
      html`
      
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
                <div class="main-container">
                  
                  <div class="content-container">
                    <div class="animate__animated top-part-container" id="animate-container">
                      <div class="inner-content-container">

                          ${this.currentStep.Type === 'QUESTION_ANSWER'  ?
                            html`

                              <the-question .index="${this.currentQuestionIndex}" .item="${this.currentQuestion}" .AllowMultipleAnswers="${this.currentQuestion.AllowMultipleAnswers}"></the-question>
                          
                          ` : html``}

                          ${this.currentStep.Type === 'RESULTS'  ?
                            html`
                            
                              <the-results></the-results>
                            
                          ` : html``}

                          ${this.currentStep.Type === 'INFORMATION'  ?
                            html`


                              <div class="intro-container">
                                  <h1 class="heading">${this.currentStep.Name}</h1>

                                  <div class="into-text-wrapper">
                                    <span id="information-description" class="intro-description description">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </span>
                                  </div>


                                  <div class="content-free-space">

                                    ${this.currentStep.Type === 'INFORMATION'  ?
                                      html`

                                        <the-button accent @click="${this.nextStepClicked}">Get Started</the-button>

                                    ` : html``}   

                                  </div>


                              </div>

                              
                            ` : html``}

                      </div>




                      <div class="buttons-bottom-bar">
                      <div class="content-flex"></div>
                      <div class="buttons-right-container">
                        ${this.currentStep.Type === 'INFORMATION'  ?
                            html`
                              
                              <the-button accent @click="${this.nextStepClicked}">Get Started</the-button>
                            ` : html`` 
                        }

                        ${this.currentStep.Type === 'QUESTION_ANSWER'  ?
                            html`
                              <the-button @click="${this.backClicked}">Back</the-button>
                              <the-button accent ?disabled="${this.isButtonDisabled}" @click="${this._nextQuestion}">Next</the-button>
                            ` : html`` 
                        }

                        ${this.currentStep.Type === 'RESULTS'  ?
                            html`
                              <the-button @click="${this.backClicked}">Back</the-button>
                              <the-button accent @click="${this._proceedToThePlatform}">Sign Up</the-button>
                            ` : html`` 
                        }
                        
                      </div>
                    </div>
                    </div>

                  </div>
                </div>
      ` : html `` }

    `;

  }


  _answerSelected(ev) {
    const question = ev.detail.question;
    const answer = ev.detail.answer;
    const isSelected = ev.detail.selected;

    const isAnswerArrayInitialized = !!this.answers[question._Key];
    if(!isAnswerArrayInitialized) this.answers[question._Key] = [];

    if(!isSelected) { 
      this.answers[question._Key].push(answer.Code);
    } else {
      this.answers[question._Key].remove(answer.Code);
    }

    this.isButtonDisabled = this.answers[question._Key].length === 0;
    this.requestUpdate();

    console.log('_answerSelected', this.answers[question._Key], this.answers, this.isButtonDisabled);
  }

  backClicked() {
    const numberOfSteps = `step ${this.currentStepIndex} of ${this.config.Steps.length}`;
    const numberOfQuestions = `question ${this.currentQuestionIndex} of ${this.currentStep.Questions.length}`;
    
    console.log(numberOfSteps);
    console.log(numberOfQuestions);

    if(this.currentQuestionIndex === 0) {
      this.currentStepIndex = this.currentStepIndex - 1;
      this.currentStep = this.config.Steps[this.currentStepIndex];
      this.currentQuestionIndex = this.currentStep.Questions.length - 1;
      this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];
      if(this.answers[this.currentQuestion._Key] ) {
        this.answers[this.currentQuestion._Key] = [];
      }
      this.backAnimationTransition();
      return
    } 
    
    
    this.currentQuestionIndex = this.currentQuestionIndex - 1;
    this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];
    this.answers[this.currentQuestion._Key] = [];
    this.backAnimationTransition();


  }

  backAnimationTransition() {
    const animationContainer = this.shadowRoot.querySelector('#animate-container');
    animationContainer.classList.add('animate__slideOutRight');

    const that = this;
    setTimeout(() => {
      animationContainer.classList.remove('animate__slideOutRight');
      that.requestUpdate();
      animationContainer.classList.add('animate__slideInLeft');


      if(this.currentStep.Type === 'QUESTION_ANSWER') {
        that._updateDescription();
      }
    }, 300)
  }

  nextStepClicked() {
    console.log('nextStepClicked');

    this.isButtonDisabled = true;
    this.requestUpdate();

    this.currentStepIndex = this.currentStepIndex + 1;
    this.currentStep = this.config.Steps[this.currentStepIndex];


    if(this.currentStep.Type === 'QUESTION_ANSWER') {
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];
    }

    if(this.currentStep.Type === 'RESULTS') {
      let payload = [];


      for (const [key, value] of Object.entries(this.answers)) {
        console.log(`${key}: ${value}`);
        payload.push({
          questionKey: key,
          answers: value
        });
      }
      fetch(
        'https://mithun-dot-avocado-backend-v1.appspot.com/v1/programmes/INCENTIVES/teaser-search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        }
      )
      .then(response => response.json())
      .then(data => {
        const theResultsView = this.shadowRoot.querySelector('the-results');
        this.teaserSearchResponse = data;
        theResultsView.teaserSearchResponse = this.teaserSearchResponse;
        theResultsView.isLoaded = true;
        theResultsView.requestUpdate();

        console.log('teaserSearchResponse', data);
      });
    }

    const animationContainer = this.shadowRoot.querySelector('#animate-container');
    animationContainer.classList.add('animate__slideOutLeft');

    const that = this;
    setTimeout(() => {
      animationContainer.classList.remove('animate__slideOutLeft');
      that.requestUpdate();
      animationContainer.classList.add('animate__slideInRight');


      if(this.currentStep.Type === 'QUESTION_ANSWER') {
        that._updateDescription();
      }
    }, 300)
    
  }

  _updateDescription(description){
    let that = this;
    setTimeout(()=> {
      that.shadowRoot.querySelector('the-question')._updateDescription();
    });
  }

  _nextQuestion(ev) { // invoked explicitly by button press
    console.log('_nextQuestion');
    if(this.isButtonDisabled) return;
    this._nextQuestionListener();
  }

  _nextQuestionListener(ev) { // invoked if single selection and option selected
    console.log('_nextQuestionListener');

    const theQuestion = this.shadowRoot.querySelector('the-question');
    theQuestion._clearSelection();

    this._nextQuestionTransition();
    this.isButtonDisabled = true;
  }

  _nextQuestionTransition() {
    this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];

    const isLastQuestion = this.currentQuestionIndex + 1 === this.currentStep.Questions.length;
    if(isLastQuestion) {
      this.currentQuestionIndex = 0;
      this.nextStepClicked();
      return;
    }

    const that = this;

    const animationContainer = this.shadowRoot.querySelector('#animate-container');
    animationContainer.classList.add('animate__slideOutLeft');
    setTimeout(() => {
      animationContainer.classList.remove('animate__slideOutLeft');
      that.requestUpdate();

      that.currentQuestionIndex = this.currentQuestionIndex + 1;
      that.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];
      that.requestUpdate();

      animationContainer.classList.add('animate__slideInRight');
      that.scrollTo({top: 0, behavior: 'smooth'});

      if(this.currentStep.Type === 'QUESTION_ANSWER') {
        that._updateDescription();
      }
      that.requestUpdate();
    }, 300)
  }

  _proceedToThePlatform(ev) {
    if(location.hostname === 'localhost') {
      location.href = `http://localhost:3000/matchme?AnonymousUserId=${this.teaserSearchResponse.AnonymousUserId}`
    } else {
      location.href = `https://avocado-platform-qa.web.app/matchme?AnonymousUserId=${this.teaserSearchResponse.AnonymousUserId}`
    }
  }


  

  

}

window.customElements.define('singapore-incentives-match', SingaporeIncentivesMatch);
