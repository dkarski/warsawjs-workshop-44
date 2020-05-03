import { FILE_ICON } from "../../../utils/icons.js";

function renderLargeLayout(files) {
  return `
		<ul class="file-list">
			${files
        .map(
          (file) => `   
				<li class="file-list__item">
					${file.icon}
					<h3 class="file-list__item__heading">${file.name}</h3>
				</li>  
			`
        )
        .join("")}
		</ul>
	`;
}

function renderSmallLayout(files) {
  return `
		<ul class="file-list">
			${files
        .map(
          (file) => `   
				<li class="file-list__item file-list__item--small">
					${file.icon}
				</li>  
			`
        )
        .join("")}
		</ul>
	`;
}

function renderTableLayout(files) {
  return `
		<ul class="file-table-list">
			${files
        .map(
          (file) => `   
				<li class="file-table-list__item">
					<span class="file-table-list__item__icon">${FILE_ICON}</span>
					<span class="file-table-list__item__type">${file.type}</span>
					<span class="file-table-list__item__name">${file.name}</span>  
				</li>  
			`
        )
        .join("")}
		</ul>
	`;
}

export const LAYOUT_FILE_MAP = {
  large: renderLargeLayout,
  small: renderSmallLayout,
  table: renderTableLayout,
};
