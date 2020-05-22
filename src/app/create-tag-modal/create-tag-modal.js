import { TAG_MAP } from "./tag-factory.js";
import store, { VIEW_STATE } from "../../store/store.js";
import { convertStringToHTMLElement } from "../../utils/covert-string-to-html-element.js";
import { generateUuid } from "../../utils/generate-uuid.js";
import {
  BADGE_TAG_ICON,
  BRIEFCASE_TAG_ICON,
  BULB_TAG_ICON,
  BULHORN_TAG_ICON,
  CALCULATOR_TAG_ICON,
  CALENDAR_TAG_ICON,
  CHAT_TAG_ICON,
  CLOUD_TAG_ICON,
  COOKIE_TAG_ICON,
  CUP_TAG_ICON,
} from "../../utils/icons.js";

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
    const { state } = store;

    let tag;
    switch (this.tagIconType) {
      case "badge": {
        tag = {
          id: generateUuid(),
          type: "badge",
          name: this.tagName,
          icon: BADGE_TAG_ICON,
        };
        break;
      }
      case "briefcase": {
        tag = {
          id: generateUuid(),
          type: "briefcase",
          name: this.tagName,
          icon: BRIEFCASE_TAG_ICON,
        };
        break;
      }
      case "bulb": {
        tag = {
          id: generateUuid(),
          type: "bulb",
          name: this.tagName,
          icon: BULB_TAG_ICON,
        };
        break;
      }
      case "bulhorn": {
        tag = {
          id: generateUuid(),
          type: "bulhorn",
          name: this.tagName,
          icon: BULHORN_TAG_ICON,
        };
        break;
      }
      case "calculator": {
        tag = {
          id: generateUuid(),
          type: "calculator",
          name: this.tagName,
          icon: CALCULATOR_TAG_ICON,
        };
        break;
      }
      case "calendar": {
        tag = {
          id: generateUuid(),
          type: "calendar",
          name: this.tagName,
          icon: CALENDAR_TAG_ICON,
        };
        break;
      }
      case "chat": {
        tag = {
          id: generateUuid(),
          type: "chat",
          name: this.tagName,
          icon: CHAT_TAG_ICON,
        };
        break;
      }
      case "cloud": {
        tag = {
          id: generateUuid(),
          type: "cloud",
          name: this.tagName,
          icon: CLOUD_TAG_ICON,
        };
        break;
      }
      case "cookie": {
        tag = {
          id: generateUuid(),
          type: "cookie",
          name: this.tagName,
          icon: COOKIE_TAG_ICON,
        };
        break;
      }
      case "cup": {
        tag = {
          id: generateUuid(),
          type: "cup",
          name: this.tagName,
          icon: CUP_TAG_ICON,
        };
        break;
      }
    }

    store.update({ tags: [...state.tags, tag], viewState: VIEW_STATE.INIT });
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
