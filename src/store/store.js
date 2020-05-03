class Store {
  constructor(state = {}) {
    this.state = state;
  }

  update(state) {
    this.state = { ...this.state, ...state };
  }
}

export const VIEW_STATE = {
  INIT: "INIT",
  CREATE_TAG: "CREATE_TAG",
  FILE_DETAIL: "FILE_DETAIL",
};

const INIT_STATE = {
  files: [],
  tags: [],
  viewState: VIEW_STATE.INIT,
  fileIndex: undefined,
  optionSelectState: "name",
  layoutSelectState: "large",
};

export default new Store(INIT_STATE);
