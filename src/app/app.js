import { TagList } from "./tag-list/tag-list.js";
import { FileManager } from "./file-manager/file-manager.js";
import { CreateTagModal } from "./create-tag-modal/create-tag-modal.js";
import { FileDetailModal } from "./file-detail-modal/file-detail-modal.js";
import store, { VIEW_STATE } from "../store/store.js";
import { convertStringToHTMLElement } from "../utils/covert-string-to-html-element.js";

export class App {
  constructor(element) {
    this.element = element;
  }

  render() {
    const { state } = store;

    const childElement = convertStringToHTMLElement(
      `<div class="container"></div>`
    );

    this.element.removeChild(this.element.firstElementChild);
    this.element.appendChild(childElement);

    const tagList = new TagList(childElement);
    const fileManager = new FileManager(childElement);
    const createTagModal = new CreateTagModal(childElement);
    const fileDetailModal = new FileDetailModal(childElement);

    tagList.render();
    fileManager.render();

    if (state.viewState === VIEW_STATE.CREATE_TAG) {
      createTagModal.render();
    } else if (state.viewState === VIEW_STATE.FILE_DETAIL) {
      fileDetailModal.render();
    }
  }
}
