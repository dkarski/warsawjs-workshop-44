import store, { VIEW_STATE } from "../../../store/store.js";
import { convertStringToHTMLElement } from "../../../utils/covert-string-to-html-element.js";
import { LAYOUT_FILE_MAP } from "./layout-file-strategy.js";
import { SortFileStrategy } from "./sort-file-strategy.js";

export class FileList {
  constructor(element) {
    this.element = element;
  }

  handleItemClick(index) {
    return () => {
      store.update({ fileIndex: index, viewState: VIEW_STATE.FILE_DETAIL });
    };
  }

  generateHTMLString({ files, layoutSelectState }) {
    const render = LAYOUT_FILE_MAP[layoutSelectState];
    const htmlString = render(files);

    return `<div class="file-list-container">${htmlString}</div>`;
  }

  render() {
    const { state } = store;

    const sort = SortFileStrategy.getSortStrategy(state.optionSelectState);
    const files =  sort(state.files);

    const htmlString = this.generateHTMLString({ ...state, files });
    const childElement = convertStringToHTMLElement(htmlString);

    this.element.appendChild(childElement);

    this.element
      .querySelectorAll(".file-list__item, .file-table-list__item")
      .forEach((note, index) => {
        note.addEventListener("click", this.handleItemClick(index));
      });
  }
}
