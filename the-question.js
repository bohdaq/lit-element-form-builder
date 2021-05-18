import { LitElement, html, css } from 'lit-element';


export class TheQuestion extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
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
        margin-bottom: 1em;
      }



      .ok-next {
        cursor: pointer;
        outline: none;
        border: 1px solid transparent;
        margin: 0px;
        box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
        padding: 6px 14px;
        background-color: rgb(0, 175, 255);
        color: rgb(255, 255, 255);
        border-radius: 4px;
        margin-top: 1em;
        font-family: "Poppins",sans-serif
      }

      .ok-next:hover {
        background-color: rgb(38, 187, 255);
      }

      .fill-white {
        fill: white;
        margin-left: .7em;
      }

      .buttons-container {
        display: flex;
      }

      .flex {
        flex: 1;
      }

      /* iPhone X and Xs Max */
      @media only screen 
          and (min-device-width: 375px) 
          and (min-device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3)
          and (orientation: portrait) { 
          /* styles */
          .question-title {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 1em;
            margin-bottom: 1em;
            padding: .25em .5em;
            border-radius: 14px;
            font-size: 4em;
          }

          .question-description {
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
          .question-title {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 1em;
            margin-bottom: 1em;
            padding: .25em .5em;
            border-radius: 14px;
            font-size: 4em;
          }

          .question-description {
            font-size: 3em;
          }

      }

      /* iPhone 6,7 */
      @media only screen 
        and (min-device-width : 375px) 
        and (max-device-width : 667px) { 
          /* styles */
          .question-title {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 1em;
            margin-bottom: 1em;
            padding: .25em .5em;
            border-radius: 14px;
            font-size: 4em;
          }

          .question-description {
            font-size: 3em;
          }

      }

      /* iPhone 6+,7+ */
      @media only screen 
        and (min-device-width : 414px) 
        and (max-device-width : 736px) { 
          /* styles */
          .question-title {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 1em;
            margin-bottom: 1em;
            padding: .25em .5em;
            border-radius: 14px;
            font-size: 4em;
          }

          .question-description {
            font-size: 3em;
          }

      }

      /* iPhone 5, SE (portrait & landscape)----------- */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 568px) {
        /* STYLES GO HERE */
        .question-title {
            font-size: 4em;
          }
          .ok-next {
            margin-top: 1em;
            margin-bottom: 1em;
            padding: .25em .5em;
            border-radius: 14px;
            font-size: 4em;
          }

          .question-description {
            font-size: 3em;
          }
      }
    `;
  }

  static get properties() {
    return {
        item: Object,
        index: Number,
        multipleSelection: Boolean
    };
  }

  constructor() {
    super();

    this.addEventListener('answer-selected', this._answerSelected);
  }

  render() {
    return html`
                  <div class="question-container">
                    <div class="question-title">${this.item.question}</div>
                    <div class="question-description">${this.item.description}</div>
                    <div class="answers-container">


                    ${this.item.AnswerOptions.map((answer, index) => 
                      html`
                        <the-answer Code="${answer.Code}" .item="${answer}">${answer.AnswerText}</the-answer>
                      
                      `)}
                      

                      <div class="buttons-container">
                        <div class="ok-next" @click="${this._nextQuestionClicked}">
                          <span class="next">Next</span>
                        </div>
                        <div class="flex"></div>
                      </div>

                    </div>

                  </div>
    `;
  }

  _answerSelected(ev) {
      this.shadowRoot.querySelectorAll('the-answer').forEach((item) => {
        if(item.item.Code === ev.detail.Code) {
          if(item.selected) {
            console.log('answer-deselected', ev.detail.Code);
            item.deselect();
          } else {
            console.log('answer-selected', ev.detail.Code);
            item.select();
          }
        } else {
          if(!this.item.multipleSelection) {
            item.deselect();
          }
        }
      });
      if(!this.multipleSelection) {
        const that = this;
        setTimeout(() => {
          that._nextQuestionClicked();
        }, 1000)
      }
  }

  _nextQuestionClicked(ev) {
    this.shadowRoot.querySelectorAll('the-answer').forEach((item) => {
      item.deselect();
    });


    let event = new CustomEvent('next-question', {
      detail: this.item,
      bubbles: true, 
      composed: true
    });
    this.dispatchEvent(event);
  }


}

window.customElements.define('the-question', TheQuestion);
