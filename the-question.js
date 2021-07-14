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
        margin: 1em 0;
        height: 3em;
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
                    <div id="information-description" class="question-description"></div>
                    <div class="hint">
                      ${!this.item.AllowMultipleAnswers  ?
                        html`Please select one` : html`Please select one or more and click next`
                      }
                    </div>
                    <div class="answers-container">


                      ${this.item.AnswerOptions.map((answer, index) => 
                        html`
                          <the-answer Code="${answer.Code}" .item="${answer}">${answer.AnswerText}</the-answer>
                        `)}
                      
                    </div>

                  </div>
    `;
  }

  _answerSelected(ev) {
      this.shadowRoot.querySelectorAll('the-answer').forEach((item) => {
        if(item.item.Code === ev.detail.Code) {
          if(item.selected) {
            console.log('answer-deselected', ev.detail.Code);
            this.answers.delete(ev.detail.Code);
            item.deselect();
          } else {
            console.log('answer-selected', ev.detail.Code);
            this.answers.add(ev.detail.Code);
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
    this.shadowRoot.querySelectorAll('the-answer').forEach((item) => {
      item.deselect();
    });


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


}

window.customElements.define('the-question', TheQuestion);
