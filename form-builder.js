import { LitElement, html, css } from 'lit-element';
import './draggable-entity.js';
import './form-item.js';
import './item-separator.js';
import './item-spot-placeholder.js';


/**
 * Form Builder using Drag'n'Drop written in LitElement
 */
export class FormBuilder extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        font-family: 'Patrick Hand';
      }
      
      .left-pane {
        flex: auto;
        width: 50%;
        padding: 16px;
    
      }
      .right-pane {
        flex: auto;
        width: 50%;
        padding: 16px;
      }

      .right-pane-inner-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        background-color: #fafafa;
      }

      [card-dragover="true"] {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }

      [hidden="true"] {
        display: none;
      }

      [hidden="false"] {
        display: unset;
      }

      h4 {
        font-size: 1.5em;
      }

      .controls-label {
        margin: 0em 2em;
        text-align: center;
      }

      .form-label {
        margin: 0;
      }
    `;
  }

  static get properties() {
    return {
       /**
       * List of available controls to be dragged onto form.
       */
      controlList: {
        type: Array
      },
       /**
       * List of controls on the form.
       */
      formItemList: {
        type: Array,
      },
       /**
       * Property to determine whether Drag'n'Drop is being done from controls panel to form panel, or just inside form panel
       */
      isDndInsideForm: {
        type: Boolean
      },
      /**
       * Index of the selected item from control panel
       */
      selectedIndex: {
        type: Number
      },
      /**
       * Index of the selected item from form panel
       */
      selectedInFormIndex: {
        type: Number
      },
      /**
       * Property to determine whether drag over is being done over form panel using item from control panel
       */
      isDragOverFormPanelFromControlPanel: {
        type: Boolean
      },
      /**
       * Applicable only to reordering inside the form panel. Property to determine whether drag'n'drop performed from top to bottom or vice versa
       */
      isFromTopToBottom: {
        type: Boolean
      },
      /**
       * Applicable only to reordering inside the form panel. Property to determine index of hovered over control
       */
      inFormHoveredOverItemIndex: {
        type: Boolean
      },
      /**
       * Value for not selected index 
       */
      NOT_SELECTED_INDEX: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.NOT_SELECTED_INDEX = 999999;
    this.isDragOverFormPanelFromControlPanel = false;

    this.selectedIndex = this.NOT_SELECTED_INDEX;
    this.selectedInFormIndex = this.NOT_SELECTED_INDEX;
    this.inFormHoveredOverItemIndex = this.NOT_SELECTED_INDEX;

    this.formItemList = [];
    this.controlList = [
      { control: 'textbox' },
      { control: 'number' },
      { control: 'combobox' }
    ];
    this.isDndInsideForm = false;
    this.isFromTopToBottom = false;

    this.addEventListener('add-control', this._addControl);
    this.addEventListener('add-control-before-index', this._addControlBeforeIndex);
    this.addEventListener('add-control-after-index', this._addControlAfterIndex);
    this.addEventListener('move-control-before-index', this._moveControlBeforeIndex);
    this.addEventListener('move-control-after-index', this._moveControlAfterIndex);
  }

  render() {
    return html`
    <div class="left-pane">
      <h4 class="controls-label">Controls</h4>
      ${this.controlList.map((item, index) =>
      html`
        <item-separator></item-separator>
        <draggable-entity .index=${index} 
                          .control="${item.control}" 
                          selected=${this._isSelected(index, this.selectedIndex)} 
                          draggable="true" 
                          @dragend="${this._onDragEnd}"
                          @dragstart="${this._onDragStart}"><span>${item.control}</span></draggable-entity>
      `)}

    </div>
    <div @dragover="${this._onDragOver}" @drop="${this._onDrop}" class="right-pane card" card-dragover=${this._isDraggingOntoForm(this.isDndInsideForm, this.selectedIndex)}>
      <h4 class="form-label">Form</h4>
      <div id="dropContainer" class="right-pane-inner-container">
            ${this.formItemList.map((item, index) =>
        html`
                  
                    <item-separator 
                          @dragstart="${this._onFormDragStart}"  
                          @dragover="${this.onFormDragOver}" 
                          @drop="${this._onFormDrop}"
                          @dragenter="${this._onDragEnter}"
                          @dragleave="${this._onDragLeave}"
                          .index="${index}"></item-separator>
                    <form-item 
                          @dragstart="${this._onFormDragStart}"  
                          @dragover="${this.onFormDragOver}" 
                          @drop="${this._onFormDrop}"
                          @dragenter="${this._onDragEnter}"
                          @dragleave="${this._onDragLeave}"
                          .control="${item.control}" 
                          .index="${index}" 
                          .isFromTopToBottom="${this.isFromTopToBottom}"
                          selected=${this._isSelected(index, this.selectedInFormIndex)} 
                          draggable="true">${item.control}</form-item>
                  
                `)}
        <p hidden=${!this.isEmptyTextShown(this.formItemList, this.selectedIndex, this.isDndInsideForm)}>Currently, there are no items on the form. Drag them from Controls section and drop here...</p>        
        <item-spot-placeholder 
                  hidden="${!this.isItemSpotPlaceholderShown(this.isDndInsideForm, this.inFormHoveredOverItemIndex)}"
                  @dragstart="${this._onFormDragStart}"  
                  @dragover="${this.onFormDragOver}" 
                  @drop="${this._onFormDrop}"
                  @dragenter="${this._onDragEnter}"
                  @dragleave="${this._onDragLeave}"></item-spot-placeholder>
      </div>
    </div>
    `;
  }

  _isDraggingOntoForm(isDndInsideForm, selectedIndex) {
    this.isDragOverFormPanelFromControlPanel = (this.selectedIndex !== this.NOT_SELECTED_INDEX) && !isDndInsideForm;
    return (this.selectedIndex !== this.NOT_SELECTED_INDEX) && !isDndInsideForm;
  }


  //DRAG TO FORM
  _onDragStart(event) {
    this.isDndInsideForm = false;
    const _draggableEntity = event.target;
    const _control = _draggableEntity.control;
    event.dataTransfer.setData('control', _control)

    this.selectedIndex = _draggableEntity.index;
  }

  _onDragOver(event) {
    if (this.isDndInsideForm) return;
    event.preventDefault();
  }

  _onDragEnd(event) {
    this.selectedIndex = this.NOT_SELECTED_INDEX;
  }

  _onDrop(event) {
    if (this.isDndInsideForm) return;
    this.isDndInsideForm = true;

    //item-spot-placeholder
    if (event.target.tagName === 'ITEM-SPOT-PLACEHOLDER') {
      event.target.onDraggedOverEnd();
    }

    const _control = event.dataTransfer.getData('control');

    if (event.target.control) {
      this.fire('add-control-after-index', {
        control: _control,
        insertAfter: event.target.index,
      })
      event.target.onDraggedOverEnd();
    } else {
      //this branch handles logic if control dropped from list of controls to the separator..


      //first element to be added on the form
      if (event.target.index === undefined && this.formItemList.length === 0) {
        this.fire('add-control', {
          control: _control
        });
        return;
      }

      //not first element added to the form
      if (event.target.index === undefined && this.formItemList.length !== 0) {
        this.fire('add-control', {
          control: _control
        });
        return;
      }

      //insert before
      if (event.target.index !== undefined) {
        this.fire('add-control-before-index', {
          control: _control,
          insertBefore: event.target.index,
        })
        event.target.onDraggedOverEnd();
        return;
      }

    }

  }


  _onFormDragStart(event) {
    this.isDndInsideForm = true;

    const _draggableEntity = event.target;
    const _control = _draggableEntity.control;
    const _index = _draggableEntity.index;

    this.selectedInFormIndex = _index;

    event.dataTransfer.setData('control', _control)
    event.dataTransfer.setData('index', _index)
  }

  onFormDragOver(event) {
    event.preventDefault();
  }

  _onDragEnter(event) {
    this.isFromTopToBottom = false;

    if (this.isDndInsideForm) {
      //do not highlight selected item
      if (event.target.control && event.target.index === this.selectedInFormIndex) return;
      //do not highlight separator on top
      if (!event.target.control && event.target.index === this.selectedInFormIndex) return;
      //do not highlight separator on the bottom
      if (!event.target.control && event.target.index === (this.selectedInFormIndex + 1)) return;

      this.isFromTopToBottom = this.selectedInFormIndex <= event.target.index;
    }

    this.inFormHoveredOverItemIndex = event.target.index;
    event.target.onDraggedOver();
  }

  _onDragLeave(event) {
    event.target.onDraggedOverEnd();
  }

  _onFormDrop(event) {
    if (!this.isDndInsideForm) return;

    const _index = Number(event.dataTransfer.getData('index'));
    const _targetIndex = event.target.index;

    this.selectedInFormIndex = this.NOT_SELECTED_INDEX;
    this.inFormHoveredOverItemIndex = this.NOT_SELECTED_INDEX;

    if (_index === _targetIndex) {
      event.target.onDraggedOverEnd();
      return;
    };

    //item-spot-placeholder
    if (event.target.tagName === 'ITEM-SPOT-PLACEHOLDER') {
      this.fire('move-control-after-index', {
        index: _index,
        insertAfter: this.formItemList.length,
      })
      event.target.onDraggedOverEnd();
      return;
    }

    if (_index > _targetIndex) {
      this.fire('move-control-before-index', {
        index: _index,
        insertBefore: _targetIndex,
      })
    } else if (_index < _targetIndex) {
      this.fire('move-control-after-index', {
        index: _index,
        insertAfter: _targetIndex,
      })
    }

    event.target.onDraggedOverEnd();
  }

  _addControl(event) {
    const _config = event.detail;
    this.formItemList = [...this.formItemList, { control: _config.control }];
    this.fire('form-builder-updated', this.formItemList);
  }

  _addControlBeforeIndex(event) {
    const _config = event.detail;
    this.formItemList.splice(_config.insertBefore, 0, { control: _config.control });
    this.formItemList = [...this.formItemList];
    this.fire('form-builder-updated', this.formItemList);
  }

  _addControlAfterIndex(event) {
    const _config = event.detail;
    this.formItemList.splice(_config.insertAfter, 0, { control: _config.control });
    this.formItemList = [...this.formItemList];
    this.fire('form-builder-updated', this.formItemList);
  }


  _moveControlBeforeIndex(event) {
    const _config = event.detail;

    this.formItemList.splice(_config.insertBefore, 0, this.formItemList[_config.index]);
    this.formItemList.splice(_config.index + 1, 1);

    this.formItemList = [... this.formItemList];
    this.fire('form-builder-updated', this.formItemList);
  }

  _moveControlAfterIndex(event) {
    const _config = event.detail;
    this.formItemList.splice(_config.insertAfter, 0, this.formItemList.splice(_config.index, 1)[0]);
    this.formItemList = [... this.formItemList];
    this.fire('form-builder-updated', this.formItemList);
  }


  fire(eventName, params) {
    let _event = new CustomEvent(eventName, {
      detail: params
    });
    this.dispatchEvent(_event);
  }

  _isSelected(index, selectedIndex) {
    return index === selectedIndex;
  }

  isEmptyTextShown(formItemList, selectedIndex, isDndInsideForm) {
    if (selectedIndex !== this.NOT_SELECTED_INDEX) return false;
    if (formItemList.length !== 0) return false;

    return true;
  }

  isItemSpotPlaceholderShown(isDndInsideForm) {
    if(isDndInsideForm) {
      return false;
    } else {
      if(this.inFormHoveredOverItemIndex +1 === this.formItemList.length){
        return false;
      }
    }
    return true;
  }

}

window.customElements.define('form-builder', FormBuilder);
