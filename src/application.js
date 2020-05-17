import {TagList} from "./tag-list.js";
import {FileManager} from "./file-manager-container.js";
import {CreateTagModal} from "./create-tag-modal.js";
import {FileDetailModal} from "./file-detail-modal.js";
import store, {VIEW_STATES} from "./store.js";
import {parseFromStringToHTML} from "./parse-from-string-to-HTML.js";

export class Application {

  constructor(element) {
    this.element = element;
  }

  render() {
    const {state} = store;

    const html = parseFromStringToHTML(`
      <div class="container"></div>
    `);

    this.element.removeChild(this.element.firstChild);
    this.element.appendChild(html);

    const tagList = new TagList(html);
    const fileManager = new FileManager(html);
    const createTagModal = new CreateTagModal(html);
    const fileDetailModal = new FileDetailModal(html);

    tagList.render();
    fileManager.render();

    if(state.viewState === VIEW_STATES[1] ){
      createTagModal.render();
    } else if(state.viewState === VIEW_STATES[2]){
      fileDetailModal.render();
    }
  }
}



