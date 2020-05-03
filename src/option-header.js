import {TEMPLATE_GRID_1_ICON, TEMPLATE_GRID_2_ICON, TEMPLATE_GRID_ICON} from "./icons.js";
import store from "./store.js";

export class OptionHeader {

	constructor(selector) {
		this.selector = selector;
	}

	handleSelectOptionChange({target: {value}}) {
		store.update({optionSelectState: value});
	}

	handleLayoutClick(type) {
		return () => store.update({layoutSelectState: type});

	}

	render() {
		const {state} = store;
		const element = document.querySelector(this.selector);

		element.innerHTML = `
      <div class="option-header__selects">
        <select class="option-header__selects__option">
          <option value="name" ${state.optionSelectState === 'name' ? 'selected' : ''}>Name</option>
          <option value="type" ${state.optionSelectState === 'type' ? 'selected' : ''}>Type</option>
          <option value="createdAt" ${state.optionSelectState === 'createdAt' ? 'selected' : ''}>Created At</option>
        </select>
        <select class="option-header__selects__direction">
          <option value="desc" selected>&#8595;</option>
          <option value="asc">&#8593;</option>
        </select>
      </div>
      <div class="option-header__layout">
        <div class="option-header__layout__icon" data-type="large">${TEMPLATE_GRID_ICON}</div>
        <div class="option-header__layout__icon" data-type="small">${TEMPLATE_GRID_1_ICON}</div>
        <div class="option-header__layout__icon" data-type="table">${TEMPLATE_GRID_2_ICON}</div>
      </div>
    `;

		element.querySelector(".option-header__selects__option").addEventListener('change', (event) => {
			this.handleSelectOptionChange(event);
		});

		element.querySelectorAll(".option-header__layout__icon").forEach(element => {
			const type = element.getAttribute("data-type");
			element.addEventListener('click', this.handleLayoutClick(type));
		})
	}
}
