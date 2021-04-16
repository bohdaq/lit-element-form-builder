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
        border: 1px solid transparent;
      }

      .answer-container:hover {
      }

      .blink {
        background-color: rgba(2, 0, 35, 0.3);
        border: 1px solid black;
        animation: blinker 1s linear infinite;
      }

      @keyframes blinker {
        50% {
          opacity: .6;
        }
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

      /* iPhone X and Xs Max */
      @media only screen 
          and (min-device-width: 375px) 
          and (min-device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3)
          and (orientation: portrait) { 
          /* styles */
          .answer-container {
            width: 80%;
          }

          .answer-label {
            height: unset;
            font-size: 3em;
            padding-left: 1em;
            padding-right: 1em;
            padding-top: .5em;
            padding-bottom: .5em;
          }

          
      }

      /* iPhone XR */
      @media only screen 
          and (min-device-width: 414px) 
          and (min-device-height: 896px) 
          and (-webkit-device-pixel-ratio: 2) 
          and (orientation: portrait) { 
          /* styles */
          .answer-container {
            width: 80%;
          }

          .answer-label {
            height: unset;
            font-size: 3em;
            padding-left: 1em;
            padding-right: 1em;
            padding-top: .5em;
            padding-bottom: .5em;
          }

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
    const that = this;
    this.shadowRoot.querySelector('.answer-container').classList.add('blink');
    setTimeout(() => {
      that.shadowRoot.querySelector('.answer-container').classList.remove('blink');
      that.answerSelectedEvent();
    }, 400)
    
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
