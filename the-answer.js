import { LitElement, html, css } from 'lit-element';


export class TheAnswer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
      }


      .answer-container {
        box-shadow: 0em 0em 0.65em 0em rgb(0 0 0 / 25%);
        width: 100px;
        padding: 10px;

        flex-direction: column;
        display: flex;
        align-items: center;
        text-align: center;

        margin: 1em;

        cursor: pointer;
      }

      .check-mark-container {
        border: 1px solid lightgray;
        border-radius: 32px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
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
        justify-content: center;
        align-items: center;
      }

      .selected {
        background-color: rgb(92,219,149);
      }

      
    `;
  }

  static get properties() {
    return {
        selected: Boolean
    };
  }

  constructor() {
    super();

  }

  render() {
    return html`



        ${this.selected ? html`
            <div class="answer-container"  @click="${this.selectAnswer}">
                <div class="check-mark-container white selected">&#10003;</div>
                <div class="answer-label"><slot></slot></div>
            </div>
        ` : html`
            <div class="answer-container"  @click="${this.selectAnswer}">
                <div class="check-mark-container white">&#10003;</div>
                <div class="answer-label"><slot></slot></div>
            </div>
        `}
    `;
  }

  selectAnswer() {
      this.selected = !this.selected;
      console.log('selectAnswer', this.selected);
  }


}

window.customElements.define('the-answer', TheAnswer);
