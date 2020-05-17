import {Application} from "./application.js";
import store from "./store.js";

const application = new Application(document.querySelector("#app"));

window.addEventListener('DOMContentLoaded', () => application.render());

store.subscribe(() => application.render());
