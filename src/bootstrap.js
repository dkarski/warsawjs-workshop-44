import { App } from "./app/app.js";
import store from "./store/store.js";
import fileService from "./services/file-service.js";
import tagService from "./services/tag-service.js";

function bootstrap() {
  window.addEventListener("DOMContentLoaded", () => {
    const application = new App(document.querySelector("#app"));

    Promise.all([
      fileService.getAll(),
      tagService.getAll(),
    ]).then(([files, tags]) => store.update({ files, tags }));

    store.subscribe(() => application.render());
  });
}

bootstrap();
