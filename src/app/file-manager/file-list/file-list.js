import store, { VIEW_STATE } from "../../../store/store.js";
import { convertStringToHTMLElement } from "../../../utils/covert-string-to-html-element.js";
import { FILE_ICON } from "../../../utils/icons.js";

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
    let htmlString = ``;

    switch (layoutSelectState) {
      case "large": {
        htmlString = `
					<ul class="file-list">
						${files
              .map(
                (file) => `
							<li class="file-list__item">
								${file.icon}
								<h3 class="file-list__item__heading">${file.name}</h3>
							</li>
						`
              )
              .join("")}
					</ul>
				`;
        break;
      }
      case "small": {
        htmlString = `
					<ul class="file-list">
						${files
              .map(
                (file) => `
							<li class="file-list__item file-list__item--small">
								${file.icon}
							</li>
						`
              )
              .join("")}
					</ul>
				`;
        break;
      }
      case "table": {
        htmlString = `
					<ul class="file-table-list">
						${files
              .map(
                (file) => `
							<li class="file-table-list__item">
								<span class="file-table-list__item__icon">${FILE_ICON}</span>
								<span class="file-table-list__item__type">${file.type}</span>
								<span class="file-table-list__item__name">${file.name}</span>
							</li>
						`
              )
              .join("")}
					</ul>
				`;
        break;
      }
    }

    return `<div class="file-list-container">${htmlString}</div>`;
  }

  render() {
    const { state } = store;

    let files = [];
    switch (state.optionSelectState) {
      case "name": {
        files = [...state.files].sort((fileA, fileB) => {
          return fileA.name.toUpperCase() > fileB.name.toUpperCase() ? 1 : -1;
        });
        break;
      }
      case "type": {
        files = [...state.files].sort((fileA, fileB) => {
          return fileA.type.toUpperCase() > fileB.type.toUpperCase() ? 1 : -1;
        });
        break;
      }
      default: {
        files = [...state.files];
      }
    }

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
