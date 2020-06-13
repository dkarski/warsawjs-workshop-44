class Store {
  constructor(state = {}) {
    this.state = state;
    this.observers = [];
  }

  update(state) {
    this.state = { ...this.state, ...state };
    this.notify({ ...this.state });
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
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
