import store, {VIEW_STATES} from "./store.js";

export class FileDetailModal {

	constructor(selector) {
		this.selector = selector;
	}

	handleButtonSecondClick() {
		store.update({fileIndex: undefined, viewState: VIEW_STATES[0]});
	}

	handleButtonPrimaryClick() {
		store.update({fileIndex: undefined, viewState: VIEW_STATES[0]});
	}

	handleFileFormTagClick(id) {
		return () => {};
	}

	render() {
		const {state} = store;
		const element = document.querySelector(this.selector);

		element.innerHTML = `
			<div class="modal">
				<div class="modal__content">
					<header class="modal__heading">
							<h2>Match a tag</h2>
							<span class="modal__heading__close-icon">&#x2715;</span>
					</header>
					<form class="modal__form">
						<ul class="modal__form__tags">
							${state.tags.map((tag) => {
								const {icon, id} = tag;
					
								return `   
									<li class="modal__form__tags__item" data-id="${id}">
										${icon}
									</li>  
								`;
							}).join('')}
						</ul>
					</form>
					<footer class="modal__footer">
						<button class="button button--second">Cancel</button>
						<button class="button button--primary">Add</button>
					</footer>
				</div>
			</div>
		`;

		element.querySelector(".button--second").addEventListener("click", () => {
			this.handleButtonSecondClick();
		});

		element.querySelectorAll(".modal__form__tags__item").forEach((note) => {
			const id = note.getAttribute("data-id");
			note.addEventListener("click", this.handleFileFormTagClick(id));
		});

		element.querySelector(".button--primary").addEventListener("click", () => {
			this.handleButtonPrimaryClick();
		});
	}
}

