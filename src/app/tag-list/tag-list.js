import store, { VIEW_STATE } from "../../store/store.js";
import { PLUS_ICON } from "../../utils/icons.js";
import { convertStringToHTMLElement } from "../../utils/covert-string-to-html-element.js";

export class TagList {
  constructor(element) {
    this.element = element;
  }

  handleAddButtonClick() {
    store.update({ viewState: VIEW_STATE.CREATE_TAG });
  }

  generateHTMLString({ tags }) {
    return `
      <div class="tag-list-container">
        <div class="tag-list">
          <button class="tag-list__add-button">${PLUS_ICON}</button>
          ${tags
            .map(
              (tag) => `         
            <div class="tag-list__item">
              ${tag.icon}
              <div class="tag-list__item__name">${tag.name}</div>
            </div>  
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  render() {
    const { state } = store;

    const htmlString = this.generateHTMLString(state);
    const childElement = convertStringToHTMLElement(htmlString);

    this.element.appendChild(childElement);

    this.element
      .querySelector(".tag-list__add-button")
      .addEventListener("click", () => {
        this.handleAddButtonClick();
      });
  }
}
