import store, {VIEW_STATES} from "./store.js";
import {PLUS_ICON} from "./icons.js";

export class TagList {

  constructor(selector) {
    this.selector = selector;
  }

  handleAddButtonClick() {
    store.update({viewState: VIEW_STATES[1]})
  }

  render() {
    const {state} = store;
    const element = document.querySelector(this.selector);

    element.innerHTML = `
      <div class="tag-list">
        <button class="tag-list__add-button">${PLUS_ICON}</button>
        ${state.tags.map((tag) => `         
          <div class="tag-list__item">
            ${tag.icon}
            <div class="tag-list__item__name">${tag.name}</div>
          </div>  
        `).join('')}
      </div>
    `;

    element.querySelector(".tag-list__add-button").addEventListener("click", () => {
      this.handleAddButtonClick();
    });
  }
}
