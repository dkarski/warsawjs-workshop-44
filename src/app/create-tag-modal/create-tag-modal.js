import { TAG_MAP, TagFactory } from "./tag-factory.js";
import store, { VIEW_STATE } from "../../store/store.js";
import { convertStringToHTMLElement } from "../../utils/covert-string-to-html-element.js";
import { generateUuid } from "../../utils/generate-uuid.js";


export class CreateTagModal {
  constructor(element) {
    this.element = element;
    this.tagIconType = undefined;
    this.tagName = "";
  }

  handleInputChange({ target }) {
    this.tagName = target.value;
  }

  handleButtonSecondClick() {
    store.update({ viewState: VIEW_STATE.INIT });
  }

  handleButtonPrimaryClick() {
    const tag = TagFactory.create(this.tagIconType, {
      name: this.tagName,
      id: generateUuid(),
    });

    store.update({
      tags: [...store.state.tags, tag],
      viewState: VIEW_STATE.INIT,
    });
  }

  handleFormTagClick(tagIconType) {
    return () => {
      this.tagIconType =
        this.tagIconType === tagIconType ? undefined : tagIconType;
      this.element.removeChild(this.element.lastChild);
      this.render();
    };
  }

  generateHTMLString() {
    return `
			<div class="modal">
        <div class="modal__content">
            <header class="modal__heading">
                <h2>Create Tag</h2>
                <span class="modal__heading__close-icon">&#x2715;</span>
            </header>
            <form class="modal__form">
                <input class="modal__form__input" type="text" value="${
                  this.tagName
                }">
                <ul class="modal__form__tags">
                  ${Object.keys(TAG_MAP)
                    .map((key) => {
                      const { icon, type } = new TAG_MAP[key]({
                        name: "",
                        id: "",
                      });
                      return `   
												<li class="modal__form__tags__item ${
                          this.tagIconType === type
                            ? "modal__form__tags__item--active"
                            : ""
                        }" data-type="${type}">
													${icon}
												</li>  
											`;
                    })
                    .join("")}
                </ul>
            </form>
            <footer class="modal__footer">
              <button class="button button--second">Cancel</button>
              <button class="button button--primary">Create</button>
            </footer>
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
      .querySelector(".modal__form__input")
      .addEventListener("change", (event) => {
        this.handleInputChange(event);
      });

    this.element
      .querySelector(".button--second")
      .addEventListener("click", () => {
        this.handleButtonSecondClick();
      });

    this.element
      .querySelector(".button--primary")
      .addEventListener("click", () => {
        this.handleButtonPrimaryClick();
      });

    this.element
      .querySelectorAll(".modal__form__tags__item")
      .forEach((note) => {
        const type = note.getAttribute("data-type");
        note.addEventListener("click", this.handleFormTagClick(type));
      });
  }
}
