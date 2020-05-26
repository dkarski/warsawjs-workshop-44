function sortFileByName(files) {
  return [...files].sort((fileA, fileB) => {
    return fileA.name.toUpperCase() > fileB.name.toUpperCase() ? 1 : -1;
  });
}

function sortFileByType(files) {
  return [...files].sort((fileA, fileB) => {
    return fileA.type.toUpperCase() > fileB.type.toUpperCase() ? 1 : -1;
  });
}

function defaultStrategy(files){
  return files;
}

export class SortFileStrategy {
  static getSortStrategy(type) {
    return SORT_FILE_MAP[type] ? SORT_FILE_MAP[type] : defaultStrategy;
  }
}

export const SORT_FILE_MAP = {
  name: sortFileByName,
  type: sortFileByType,
  undefined: defaultStrategy
};
