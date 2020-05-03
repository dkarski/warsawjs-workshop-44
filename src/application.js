import {TagList} from "./tag-list.js";
import {FileManager} from "./file-manager-container.js";
import {CreateTagModal} from "./create-tag-modal.js";
import {FileDetailModal} from "./file-detail-modal.js";
import store, {VIEW_STATES} from "./store.js";


// TODO: make version without instance
export class Application {

  constructor(selector) {
    this.selector = selector;
    this.tagListInstance = undefined;
    this.fileManagerInstance = undefined;
    this.createTagModalInstance = undefined;
    this.fileDetailModalInstance = undefined;
    store.subscribe(() => this.render());
  }

  render() {
    const {state} = store;
    const element = document.querySelector(this.selector);

    element.innerHTML = `
      <div class="container">
        <div class="tag-list-container"></div>
        <div class="file-manager-container"></div>
      </div>
      <div class="modal-container"></div>
    `;

    this.tagListInstance = this.tagListInstance || new TagList('.tag-list-container');
    this.fileManagerInstance = this.fileManagerInstance || new FileManager('.file-manager-container');
    this.createTagModalInstance = this.createTagModalInstance || new CreateTagModal('.modal-container');
    this.fileDetailModalInstance = this.fileDetailModalInstance || new FileDetailModal('.modal-container');

    this.tagListInstance.render();
    this.fileManagerInstance.render();

    if(state.viewState === VIEW_STATES[1] ){
      this.createTagModalInstance.render();
    } else if(state.viewState === VIEW_STATES[2]){
      this.fileDetailModalInstance.render();
    }
  }
}



