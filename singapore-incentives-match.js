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
        
        width: 80vh;
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
        animation-duration: .3s; /* don't forget to set a duration! */
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

      .inner-content-container {
        padding: 1em;
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
       
    };
  }

  constructor() {
    super();

    this.searchPayload = [];
    this._configResponseRetrieved = false;

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

    this.addEventListener('next-question', this._nextQuestion);
    this.addEventListener('proceed-to-the-platform', this._proceedToThePlatform);


    let that = this;
    setTimeout(()=> {
      that.shadowRoot.querySelector('#information-description').innerHTML = this.currentStep.Description;
    });

  }

  render() {
    return html` 
    
    ${this._configResponseRetrieved ?
      html`
      
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
                <div class="main-container">
                  
                  <div class="content-container animate__animated" id="animate-container">
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
                                <h4>${this.currentStep.Name}</h4>

                                <span id="information-description" class="intro-description"></span>
                            </div>

                            
                          ` : html``}

                    </div>

                    <div class="content-flex"></div>
                    <div class="buttons-bottom-bar">
                      <div class="content-flex"></div>
                      <div class="buttons-right-container">
                        ${this.currentStep.Type === 'INFORMATION'  ?
                            html`
                              <the-button @click="${this.nextStepClicked}">Get Started</the-button>
                            ` : html`` 
                        }

                        ${this.currentStep.Type === 'QUESTION_ANSWER'  ?
                            html`
                              <the-button @click="${this._nextQuestion}">Next</the-button>
                            ` : html`` 
                        }

                        ${this.currentStep.Type === 'RESULTS'  ?
                            html`
                              <the-button @click="${this._proceedToThePlatform}">Sign Up</the-button>
                            ` : html`` 
                        }
                        
                      </div>
                    </div>



                  </div>
                </div>
      ` : html `` }

    `;
    

    
    
    
  }

  nextStepClicked() {
    console.log('nextStepClicked');

    this.currentStepIndex = this.currentStepIndex + 1;
    this.currentStep = this.config.Steps[this.currentStepIndex];


    if(this.currentStep.Type === 'QUESTION_ANSWER') {
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.currentStep.Questions[this.currentQuestionIndex];
    }

    if(this.currentStep.Type === 'RESULTS') {
      fetch(
        'https://mithun-dot-avocado-backend-v1.appspot.com/v1/programmes/INCENTIVES/teaser-search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.searchPayload)
        }
      )
      .then(response => response.json())
      .then(data => {
        const theResultsView = this.shadowRoot.querySelector('the-results');
        this.teaserSearchResponse = data;
        theResultsView.teaserSearchResponse = this.teaserSearchResponse;
        theResultsView.requestUpdate();

        console.log('teaserSearchResponse', data);
      });
    }

    const animationContainer = this.shadowRoot.querySelector('#animate-container');
    animationContainer.classList.add('animate__fadeOutUp');

    const that = this;
    setTimeout(() => {
      animationContainer.classList.remove('animate__fadeOutUp');
      that.requestUpdate();
      animationContainer.classList.add('animate__fadeInUp');


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

  _nextQuestion(ev) {
    this.searchPayload.push(ev.detail);
    console.log('_nextQuestion', this.searchPayload);
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

      if(this.currentStep.Type === 'QUESTION_ANSWER') {
        that._updateDescription();
      }
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
