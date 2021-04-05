import { LitElement, html, css } from 'lit-element';


export class TheAnswer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
      }


      .answer-container {
        background-color: rgba(2, 0, 35, 0.1);
        color: rgb(2, 0, 35);
        margin: 1em 1em 1em 0;
        cursor: pointer;
        padding: .2em .5em;
        width: 10em;
      }



      .white {
        color: white;
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
        background-color: rgba(2, 0, 35, 0.3);
        box-shadow: rgb(2 0 35 / 80%) 0px 0px 0px 2px inset;
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



        ${this.selected ? html`
            <div class="answer-container selected"  @click="${this._selectAnswerEvent}">
                <div class="answer-label">
                  <slot></slot>
                  <div class="spacing"></div>
                  <span class="fill-white">
                    <svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg>
                  </span>
                </div>
            </div>
        ` : html`
            <div class="answer-container"  @click="${this._selectAnswerEvent}">
                <div class="answer-label"><slot></slot></div>
            </div>
        `}
    `;
  }

  _selectAnswerEvent() {
    this.answerSelectedEvent();
    this.deselect();
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
