import {TAG_MAP, TagFactory} from "./tag.js";
import store, {VIEW_STATES} from "./store.js";
// import {generateUuid} from "./generate-uuid.js";
// import {
// 	BADGE_TAG_ICON,
// 	BRIEFCASE_TAG_ICON,
// 	BULB_TAG_ICON,
// 	BULHORN_TAG_ICON,
// } from "./icons.js";

export class CreateTagModal {

	constructor(selector) {
		this.selector = selector;
		this.tagIconType = undefined;
		this.tagName = '';
	}

	handleInputChange({target}) {
		this.tagName = target.value;
	}

	handleButtonSecondClick() {
		this.tagIconType = undefined;
		this.tagName = '';
		store.update({viewState: VIEW_STATES[0]});
	}


	handleButtonPrimaryClick() {
		const {state} = store;

		// TODO: show simply factory pattern
		// let tag;
		// switch (this.tagIconType) {
		// 	case 'badge': {
		// 		tag = {
		// 			id: generateUuid(),
		// 			type: 'badge',
		// 			name: this.tagName,
		// 			icon: BADGE_TAG_ICON,
		// 		}
		// 		break;
		// 	}
		// 	case 'briefcase': {
		// 		tag = {
		// 			id: generateUuid(),
		// 			type: 'briefcase',
		// 			name: this.tagName,
		// 			icon: BRIEFCASE_TAG_ICON,
		// 		}
		// 		break;
		// 	}
		// 	case 'bulb': {
		// 		tag = {
		// 			id: generateUuid(),
		// 			type: 'bulb',
		// 			name: this.tagName,
		// 			icon: BULB_TAG_ICON,
		// 		}
		// 		break;
		// 	}
		// 	case 'bulhorn': {
		// 		tag = {
		// 			id: generateUuid(),
		// 			type: 'bulhorn',
		// 			name: this.tagName,
		// 			icon: BULHORN_TAG_ICON,
		// 		}
		// 		break;
		// 	}
		// }
		const tag = TagFactory.create(this.tagIconType, this.tagName);

		store.update({tags: [...state.tags, tag], viewState: VIEW_STATES[0]});
		this.tagIconType = undefined;
		this.tagName = '';
	}

	handleFormTagClick(tagIconType) {
		return () => {
			this.tagIconType = this.tagIconType === tagIconType ? undefined : tagIconType ;
			this.render()
		};
	}

	render() {
		const {state} = store;
		const element = document.querySelector(this.selector);

		element.innerHTML = `
			<div class="modal">
        <div class="modal__content">
            <header class="modal__heading">
                <h2>Create Tag</h2>
                <span class="modal__heading__close-icon">&#x2715;</span>
            </header>
            <form class="modal__form">
                <input class="modal__form__input" type="text" value="${this.tagName}">
                <ul class="modal__form__tags">
                  ${
										Object.keys(TAG_MAP).map((key) => {
											console.log(TAG_MAP)
											const {icon, type} = new TAG_MAP[key]();
											return `   
												<li class="modal__form__tags__item ${this.tagIconType === type ? 'modal__form__tags__item--active' : ''}" data-type="${type}">
													${icon}
												</li>  
											`;
										}).join('')
										}
                </ul>
            </form>
            <footer class="modal__footer">
              <button class="button button--second">Cancel</button>
              <button class="button button--primary">Create</button>
            </footer>
        </div>
    	</div>
		`;

		element.querySelector(".modal__form__input").addEventListener("change", (event) => {
			this.handleInputChange(event);
		});

		element.querySelector(".button--second").addEventListener("click", () => {
			this.handleButtonSecondClick();
		});

		element.querySelector(".button--primary").addEventListener("click", () => {
			this.handleButtonPrimaryClick();
		});

		element.querySelectorAll(".modal__form__tags__item").forEach((note) => {
			const type = note.getAttribute("data-type");
			note.addEventListener("click", this.handleFormTagClick(type));
		});
	}
}
