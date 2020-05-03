import {FILE_ICON} from "./icons.js";

function largeRender(files) {
	return `
		<ul class="file-list">
			${files.map((file) => `   
				<li class="file-list__item">
					${file.icon}
					<h3 class="file-list__item__heading">${file.name}</h3>
				</li>  
			`).join('')}
		</ul>
	`
}

function smallRender(files) {
	return `
		<ul class="file-list">
			${files.map((file) => `   
				<li class="file-list__item file-list__item--small">
					${file.icon}
				</li>  
			`).join('')}
		</ul>
	`
}

function tableRender(files) {
	return `
		<ul class="file-table-list">
			${files.map((file) => `   
				<li class="file-table-list__item">
					<span class="file-table-list__item__icon">${FILE_ICON}</span>
					<span class="file-table-list__item__name">${file.name}</span>  
					<span class="file-table-list__item__type">${file.type}</span>
				</li>  
			`).join('')}
		</ul>
	`
}

export const FILES_LAYOUT_MAP = {
	'large': largeRender,
	'small': smallRender,
	'table': tableRender,
};
