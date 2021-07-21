import { LitElement, html, css } from 'lit-element';
import './the-checkbox';


export class TheAnswer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-size: 1.5em;
      }

      .answer-container {
        transition: background-color 1s ease;
        background-color: transparent;
        color: rgb(2, 0, 35);
        margin: .6em 1.2em .6em 0;
        cursor: pointer;
        padding: 1em;
        min-width: 300px;
        max-width: 300px;
        border: 1px solid lightgrey;
        border-radius: 5px;
      }

      .answer-container:not(.selected):hover {
        background-color: rgb(192 214 255 / 20%);
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
        align-items: center;

        padding-left: 6px;
        padding-right: 6px;
      }

      [selected="true"] {
        background-color: rgb(118 154 220 / 20%);
        color: rgb(2, 0, 35);
      }

      .spacing {
        flex: 1;
      }

      .inner-option-text-container {
        width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      
    `;
  }

  static get properties() {
    return {
        selected: Boolean,
        item: Boolean,
        question: Object,
    };
  }

  constructor() {
    super();
    this.selected = false;
    this.disabled = true;
  }

  render() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

        <div id="answer-container" class="answer-container animate__animated" selected="${this.selected}" @click="${this._selectAnswerEvent}">
            <div class="answer-label">
              <div class="inner-option-text-container" title="${this.item.AnswerText}">${this.item.AnswerText}</div><the-checkbox .selected="${this.selected}" .disabled="${this.disabled}"></the-checkbox>
              <div class="spacing"></div>
            </div>
        </div>
    `;
  }

  _selectAnswerEvent() {
    const answerContainer = this.shadowRoot.querySelector('#answer-container');
    answerContainer.classList.remove('animate__pulse');


    if(!this.selected) {
      setTimeout(()=> {
        answerContainer.classList.add('animate__pulse');
      });
  
    } 
    
    this.answerSelectedEvent();
  }

  answerSelectedEvent() {
    let event = new CustomEvent('answer-selected', {
      detail: {
        question: this.question,
        answer: this.item
      },
      bubbles: true, 
      composed: true
    });
    this.dispatchEvent(event);
  }

  select() {
      this.selected = true;
      this.requestUpdate();
  }

  deselect() {
      this.selected = false;
      this.requestUpdate();
  }


}

window.customElements.define('the-answer', TheAnswer);
