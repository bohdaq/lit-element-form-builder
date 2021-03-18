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
        display: flex;
        padding: 30px;
        flex-flow: wrap
      }
      
    `;
  }

  static get properties() {
    return {
        item: Object
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

                     

                    </div>
                  </div>
    `;
  }

  _answerSelected(ev) {
      console.log('answer-selected', ev.detail.uuid);
      this.shadowRoot.querySelectorAll('the-answer').forEach((item) => {
        if(item.item.uuid === ev.detail.uuid) {
          if(item.selected) {
            item.deselect();
          } else {
            item.select();
          }
        } else {
          item.deselect();
        }
      });
  }


}

window.customElements.define('the-question', TheQuestion);
