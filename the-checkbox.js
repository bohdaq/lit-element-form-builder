import { LitElement, html, css } from 'lit-element';


export class TheCheckbox extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
      }

      .content {
        background-color: #FFFFFF;
        max-width: 80%;
        padding: 8px 16px;
        margin-top: -56px;
        margin-right: auto;
        margin-left: auto;
        border-radius: 2px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
      }

      .checkbox {
        font-family: 'Roboto', sans-serif;
        margin-top: 8px;
        margin-bottom: 8px;
      }

      .checkbox__input {
        position: absolute;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0;
      }

      .checkbox__label {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.87);
        position: relative;
        cursor: pointer;
        line-height: 24px;
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 28px;
      }

      .checkbox__label:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        margin: 3px;
        border: 2px rgba(0, 0, 0, 0.54) solid;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: 3px;
        border-radius: 3px;
      }

      .checkbox__input:checked ~ .checkbox__label:before {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K");
        background-color: #2196F3;
        border-color: #2196F3;
        -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjx0aXRsZT51bnRpdGxlZDwvdGl0bGU+PHBhdGggZD0iTTAsMFYxSDFWMEgwWk0wLjQ1LDAuNzRsLTAuMDguMDhMMC4yOCwwLjc0LDAuMTQsMC42bDAuMDgtLjA4TDAuMzYsMC42NWwwLjQxLS40MUwwLjg2LDAuMzJaIi8+PC9zdmc+");
        mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjx0aXRsZT51bnRpdGxlZDwvdGl0bGU+PHBhdGggZD0iTTAsMFYxSDFWMEgwWk0wLjQ1LDAuNzRsLTAuMDguMDhMMC4yOCwwLjc0LDAuMTQsMC42bDAuMDgtLjA4TDAuMzYsMC42NWwwLjQxLS40MUwwLjg2LDAuMzJaIi8+PC9zdmc+");
      }

      .checkbox__input:disabled ~ .checkbox__label {
        color: rgba(0, 0, 0, 0.38);
      }

      .checkbox__input:disabled ~ .checkbox__label:before {
        border-color: rgba(0, 0, 0, 0.26);
      }

      .checkbox__input:checked:disabled ~ .checkbox__label:before {
        background-color: rgba(0, 0, 0, 0.26);
        background-clip: padding-box;
      }

      .checkbox__description {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.54);
        margin-left: 28px;
      }

      .checkbox__input ~ .checkbox__label:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        -webkit-border-radius: 50%;
        border-radius: 50%;
      }

      .checkbox__input:focus ~ .checkbox__label:after {
        -webkit-animation: click-wave .5s;
        animation: click-wave .5s;
      }

      .checkbox__input:checked ~ .checkbox__label:after {
        background-color: #2196F3;
      }

      .checkbox__input:not(:checked) ~ .checkbox__label:after {
        background-color: #000;
      }

      @-webkit-keyframes click-wave {
        0% {
          width: 24px;
          height: 24px;
          opacity: 0.5;
        }
        100% {
          width: 48px;
          height: 48px;
          margin-left: -12px;
          margin-top: -12px;
          opacity: 0.0;
        }
      }

      @keyframes click-wave {
        0% {
          width: 24px;
          height: 24px;
          opacity: 0.5;
        }
        100% {
          width: 48px;
          height: 48px;
          margin-left: -12px;
          margin-top: -12px;
          opacity: 0.0;
        }
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
          <div class="checkbox">
            <input type="checkbox" id="checkbox-1" ?checked="${this.selected}" class="checkbox__input">
            <label for="checkbox-1" class="checkbox__label">${this.selected}</label>
          </div>

          <!-- <div class="checkbox">
            <input type="checkbox" id="checkbox-2" class="checkbox__input">
            <label for="checkbox-2" class="checkbox__label">Checkbox 2</label>
          </div>

          <div class="checkbox">
            <input type="checkbox" id="checkbox-3" checked="checked" class="checkbox__input" disabled>
            <label for="checkbox-3" class="checkbox__label">Checkbox 3</label>
          </div>

          <div class="checkbox">
            <input type="checkbox" id="checkbox-4" class="checkbox__input" disabled>
            <label for="checkbox-4" class="checkbox__label">Checkbox 4</label>
          </div> -->

    `;
  }


}

window.customElements.define('the-checkbox', TheCheckbox);
