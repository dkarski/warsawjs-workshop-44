import store, {VIEW_STATES} from "./store.js";
import {SORT_MAP} from "./files-sort-strategy.js";
import {FILES_LAYOUT_MAP} from "./files-layout-strategy.js";
// import {FILE_ICON} from "./icons.js";

export class FileList {

  constructor(selector) {
    this.selector = selector;
  }

  handleItemClick(index) {
    return function () {
      store.update({fileIndex: index, viewState: VIEW_STATES[2]});
    };
  }

  render() {
    const {state} = store;
    const element = document.querySelector(this.selector);

    // TODO: show strategy pattern
    // let files = []
    // switch (state.optionSelectState) {
		// 	case "name": {
		// 		files = [...state.files].sort((fileA, fileB) => {
		// 			return fileA.name.toUpperCase() > fileB.name.toUpperCase() ? 1 : -1
		// 		})
		// 		break;
		// 	}
		// 	case "type": {
		// 		files = [...state.files].sort((fileA, fileB) => {
		// 			return fileA.type.toUpperCase() > fileB.type.toUpperCase() ? 1 : -1
		// 		})
		// 		break;
		// 	}
		// }

		const sort = SORT_MAP[state.optionSelectState];
    const files = sort(state.files);

    // TODO: show strategy pattern
		// let innerHTML = ``
		// switch (state.layoutSelectState) {
		// 	case "large": {
		// 		innerHTML = `
		// 			<ul class="file-list">
		// 				${files.map((file) => `
		// 					<li class="file-list__item">
		// 						${file.icon}
		// 						<h3 class="file-list__item__heading">${file.name}</h3>
		// 					</li>
		// 				`).join('')}
		// 			</ul>
		// 		`;
		// 		break;
		// 	}
		// 	case "small": {
		// 		innerHTML = `
		// 			<ul class="file-list">
		// 				${files.map((file) => `
		// 					<li class="file-list__item file-list__item--small">
		// 						${file.icon}
		// 					</li>
		// 				`).join('')}
		// 			</ul>
		// 		`;
		// 		break;
		// 	}
		// 	case "table": {
		// 		innerHTML = `
		// 			<ul class="file-table-list">
		// 				${files.map((file) => `
		// 					<li class="file-table-list__item">
		// 						<span class="file-table-list__item__icon">${FILE_ICON}</span>
		// 						<span class="file-table-list__item__name">${file.name}</span>
		// 						<span class="file-table-list__item__type">${file.type}</span>
		// 					</li>
		// 				`).join('')}
		// 			</ul>
		// 		`;
		// 		break;
		// 	}
		// }
		// element.innerHTML = innerHTML;
		const render = FILES_LAYOUT_MAP[state.layoutSelectState];
		element.innerHTML = render(files);

    element.querySelectorAll(".file-list__item, .file-table-list__item").forEach((note, index) => {
      note.addEventListener("click", this.handleItemClick(index));
    });

  }
}
