import { App } from "./app/app.js";
import store from "./store/store.js";

function bootstrap() {
  window.addEventListener("DOMContentLoaded", () => {
    const application = new App(document.querySelector("#app"));

    application.render();

    store.subscribe(() => application.render());
  });
}

bootstrap();
