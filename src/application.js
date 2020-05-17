import {TagList} from "./tag-list.js";
import {FileManager} from "./file-manager-container.js";
import {CreateTagModal} from "./create-tag-modal.js";
import {FileDetailModal} from "./file-detail-modal.js";
import store, {VIEW_STATES} from "./store.js";

export class Application {

  constructor(selector) {
    this.selector = selector;
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

    const tagList = new TagList('.tag-list-container');
    const fileManager = new FileManager('.file-manager-container');
    const createTagModal = new CreateTagModal('.modal-container');
    const fileDetailModal = new FileDetailModal('.modal-container');

    tagList.render();
    fileManager.render();

    if(state.viewState === VIEW_STATES[1] ){
      createTagModal.render();
    } else if(state.viewState === VIEW_STATES[2]){
      fileDetailModal.render();
    }
  }
}



