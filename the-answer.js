import { LitElement, html, css } from 'lit-element';


export class TheAnswer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-size: 2em;
      }

      .answer-container {
        transition: background-color 1s ease;
        background-color: transparent;
        color: rgb(2, 0, 35);
        margin: .6em 1.2em .6em 0;
        cursor: pointer;
        padding: 1em;
        width: 10em;
        border: 1px solid lightgrey;
        border-radius: 5px;
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

      .selected {
        background-color: rgb(118 154 220 / 20%);
        color: rgb(2, 0, 35);
      }

      .spacing {
        flex: 1;
      }

      
    `;
  }

  static get properties() {
    return {
        selected: Boolean,
        item: Boolean,
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

  render() {
    return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

        <div id="answer-container" class="answer-container"  @click="${this._selectAnswerEvent}">
            <div class="answer-label">
              <slot></slot>
              <div class="spacing"></div>
            </div>
        </div>
    `;
  }

  _selectAnswerEvent() {
    const answerContainer = this.shadowRoot.querySelector('#answer-container');
    if(!this.selected) {
      answerContainer.classList.add('selected');
      answerContainer.classList.add('animate__animated');
      answerContainer.classList.add('animate__pulse');
    } else {
      answerContainer.classList.remove('selected');
      answerContainer.classList.remove('animate__animated');
      answerContainer.classList.remove('animate__pulse');
    }

    
    this.answerSelectedEvent();
  }

  answerSelectedEvent() {
    let event = new CustomEvent('answer-selected', {
      detail: this.item,
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
