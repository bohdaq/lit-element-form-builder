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
      }


      .answers-container {
        padding: 30px;
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
        width: 4em;
        margin-left: 1em;
      }

      .ok-next:hover {
        background-color: rgb(38, 187, 255);
      }

      .fill-white {
        fill: white;
        margin-left: .7em;
      }
    `;
  }

  static get properties() {
    return {
        item: Object,
        index: Number,
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


                    ${this.item.answerList.map((answer, index) => 
                      html`
                        <the-answer uuid="${answer.uuid}" .item="${answer}">${answer.label}</the-answer>
                      
                      `)}
                      

                      <div>
                        <div class="ok-next" @click="${this._nextQuestionClicked}">
                          Next
                          <span class="fill-white">
                            <svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg>
                          </span>
                        </div>
                      </div>
                      

                     

                    </div>
                  </div>
    `;
  }

  _answerSelected(ev) {
      this.shadowRoot.querySelectorAll('the-answer').forEach((item) => {
        if(item.item.uuid === ev.detail.uuid) {
          if(item.selected) {
            console.log('answer-deselected', ev.detail.uuid);
            item.deselect();
          } else {
            console.log('answer-selected', ev.detail.uuid);
            item.select();
          }
        } else {
          if(!this.item.multipleSelection) {
            item.deselect();
          }
        }
      });
      this._nextQuestionClicked();
  }

  _nextQuestionClicked(ev) {
    let event = new CustomEvent('next-question', {
      detail: this.item,
      bubbles: true, 
      composed: true
    });
    this.dispatchEvent(event);
  }


}

window.customElements.define('the-question', TheQuestion);
