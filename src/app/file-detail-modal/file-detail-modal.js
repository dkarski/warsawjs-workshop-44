import store, { VIEW_STATE } from "../../store/store.js";
import { convertStringToHTMLElement } from "../../utils/covert-string-to-html-element.js";

export class FileDetailModal {
  constructor(element) {
    this.element = element;
  }

  handleButtonSecondClick() {
    store.update({ fileIndex: undefined, viewState: VIEW_STATE.INIT });
  }

  handleButtonPrimaryClick() {
    store.update({ fileIndex: undefined, viewState: VIEW_STATE.INIT });
  }

  handleFileFormTagClick(id) {
    return () => {};
  }

  generateHTMLString({ tags }) {
    return `
			<div class="modal">
				<div class="modal__content">
					<header class="modal__heading">
							<h2>Match a tag</h2>
							<span class="modal__heading__close-icon">&#x2715;</span>
					</header>
					<form class="modal__form">
						<ul class="modal__form__tags">
							${tags
                .map((tag) => {
                  const { icon, name, id } = tag;

                  return `   
									<li class="modal__form__tags__item modal__form__tags__item--with-name" data-id="${id}">
										${icon}
										<span>${name}</span>
									</li>  
								`;
                })
                .join("")}
						</ul>
					</form>
					<footer class="modal__footer">
						<button class="button button--second">Cancel</button>
						<button class="button button--primary">Add</button>
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
      .querySelector(".button--second")
      .addEventListener("click", () => {
        this.handleButtonSecondClick();
      });

    this.element
      .querySelectorAll(".modal__form__tags__item")
      .forEach((note) => {
        const id = note.getAttribute("data-id");
        note.addEventListener("click", this.handleFileFormTagClick(id));
      });

    this.element
      .querySelector(".button--primary")
      .addEventListener("click", () => {
        this.handleButtonPrimaryClick();
      });
  }
}
