import store, {VIEW_STATES} from "./store.js";
import {PLUS_ICON} from "./icons.js";
import {parseFromStringToHTML} from "./parse-from-string-to-HTML.js";

export class TagList {

  constructor(element) {
    this.element = element;
  }

  handleAddButtonClick() {
    store.update({viewState: VIEW_STATES[1]})
  }

  render() {
    const {state} = store;

    const html = parseFromStringToHTML(`
      <div class="tag-list-container">
        <div class="tag-list">
          <button class="tag-list__add-button">${PLUS_ICON}</button>
          ${state.tags.map((tag) => `         
            <div class="tag-list__item">
              ${tag.icon}
              <div class="tag-list__item__name">${tag.name}</div>
            </div>  
          `).join('')}
        </div>
      </div>
    `);
    this.element.appendChild(html);

    this.element.querySelector(".tag-list__add-button").addEventListener("click", () => {
      this.handleAddButtonClick();
    });
  }
}
