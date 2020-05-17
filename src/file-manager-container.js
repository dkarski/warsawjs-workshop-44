import {OptionHeader} from "./option-header.js";
import {FileList} from "./file-list.js";
import {UploadFile} from "./upload-file.js";

export class FileManager {

  constructor(selector) {
    this.selector = selector;
  }

  render() {
    const element = document.querySelector(this.selector);

    element.innerHTML = `
      <div class="option-header"></div>
      <div class="file-list-container"></div>
      <div class="upload-file-container"></div>
    `;

    const optionHeader = new OptionHeader('.option-header');
    const fileList = new FileList('.file-list-container');
    const uploadFile = new UploadFile('.upload-file-container');

    optionHeader.render();
    fileList.render();
    uploadFile.render();
  }
}
