function nameFilesSort(files) {
	return [...files].sort((fileA, fileB) => {
		return fileA.name.toUpperCase() > fileB.name.toUpperCase() ? 1 : -1
	})
}

function typeFilesSort(files) {
	return [...files].sort((fileA, fileB) => {
		return fileA.type.toUpperCase() > fileB.type.toUpperCase() ? 1 : -1
	})
}

export const SORT_MAP = {
	'name': nameFilesSort,
	'type': typeFilesSort,
};
