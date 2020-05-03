import {OptionHeader} from "./option-header.js";
import {FileList} from "./file-list.js";
import {UploadFile} from "./upload-file.js";

export class FileManager {

  constructor(selector) {
    this.selector = selector;
    this.optionHeaderInstance = undefined;
    this.fileListInstance = undefined;
    this.uploadFileInstance = undefined;
  }

  render() {
    const element = document.querySelector(this.selector);

    element.innerHTML = `
      <div class="option-header"></div>
      <div class="file-list-container"></div>
      <div class="upload-file-container"></div>
    `;

    this.optionHeaderInstance = this.optionHeaderInstance || new OptionHeader('.option-header');
    this.fileListInstance = this.fileListInstance || new FileList('.file-list-container');
    this.uploadFileInstance = this.uploadFileInstance || new UploadFile('.upload-file-container');

    this.optionHeaderInstance.render();
    this.fileListInstance.render();
    this.uploadFileInstance.render();
  }
}
