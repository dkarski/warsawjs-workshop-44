import { App } from "./app/app.js";

function bootstrap() {
  window.addEventListener("DOMContentLoaded", () => {
    const application = new App(document.querySelector("#app"));

    application.render();
  });
}

bootstrap();
