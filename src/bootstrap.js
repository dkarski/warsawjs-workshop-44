import {Application} from "./application.js";

window.addEventListener('DOMContentLoaded', function () {
  const applicationInstance =  new Application("#app");
  applicationInstance.render();
});
