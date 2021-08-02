import { LitElement, html, css } from 'lit-element';
import './the-button';

export class TheQuestion extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
      }

      .question-container {
        font-size: 1.2rem;
        padding: var(--desciption-padding);
      }


      @media screen and (max-width: 375px) {
        .question-container {
            padding: 0;
          }
      }

      .question-title {
        font-family: "Poppins",sans-serif;
        font-size: 2em;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-right: calc(0em * -1);
        text-transform: none;
        color: rgba(0,0,0,1);
      }

      .answers-container {
        padding: var(--desciption-padding);
        padding-bottom: 0;
        
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

      .description {
        color: var(--desciption-color);
        font-family: var(--desciption-font-family);
        font-size: var(--desciption-font-size);
        font-weight: var(--desciption-font-weight);
        line-height: var(--desciption-line-height);
        padding: var(--desciption-padding);
      }

      .hint {
        color: var(--hint-color);
        font-family: var(--hint-font-family);
        font-size: var(--hint-font-size);
        font-weight: var(--hint-font-weight);
        line-height: var(--hint-line-height);
        padding: var(--desciption-padding);
        padding-top: 1.7em;
      }

    `;
  }

  static get properties() {
    return {
        item: Object,
        index: Number,
        allowMultipleAnswers: Boolean,
    };
  }

  constructor() {
    super();
    this.answers = new Set();
    this.addEventListener('answer-selected', this._answerSelected);
  }

  render() {
    return html`
                  <div class="question-container">
                    <div id="information-description" class="question-description description"></div>
                    <div class="hint">
                      ${!this.item.AllowMultipleAnswers  ?
                        html`Please select one` : html`Please select one or more and click next`
                      }
                    </div>
                    <div class="answers-container">


                      ${this.item.AnswerOptions.map((answer, index) => 
                        html`
                          <the-answer .question="${this.item}" Code="${answer.Code}" .item="${answer}"></the-answer>
                        `)}
                      
                    </div>

                  </div>
    `;
  }

  _answerSelected(ev) {
    const answerCode = ev.detail.answer.Code;

    this.shadowRoot.querySelectorAll('the-answer').forEach((item) => {
        if(item.item.Code === answerCode) {
          if(item.selected) {
            console.log('answer-deselected', answerCode);
            // this.answers.delete(answerCode);
            item.deselect();
          } else {
            console.log('answer-selected', answerCode);
            // this.answers.add(answerCode);
            item.select();
          }
        } else {
          if(!this.item.AllowMultipleAnswers) {
            item.deselect();
          }
        }
      });


      if(!this.AllowMultipleAnswers) {
        const that = this;
        setTimeout(() => {
          that._nextQuestionClicked();
        }, 300)
      }
  }

  _nextQuestionClicked(ev) {
    this._clearSelection();


    const questionKey = this.item._Key;

    const detail = {
      questionKey: questionKey,
      answers: [...this.answers]
    }

    let event = new CustomEvent('next-question', {
      detail: detail,
      bubbles: true, 
      composed: true
    });

    this.answers = new Set();
    this.dispatchEvent(event);
  }

  _updateDescription(){
    let that = this;
    setTimeout(()=> {
      that.shadowRoot.querySelector('#information-description').innerHTML = this.item.Description;
    });
  }

  _clearSelection() {
    this.shadowRoot.querySelectorAll('the-answer').forEach((item) => {
      item.deselect();
    });
  }


}

window.customElements.define('the-question', TheQuestion);
