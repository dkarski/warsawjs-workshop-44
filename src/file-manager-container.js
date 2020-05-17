import {OptionHeader} from "./option-header.js";
import {FileList} from "./file-list.js";
import {UploadFile} from "./upload-file.js";
import {parseFromStringToHTML} from "./parse-from-string-to-HTML.js";

export class FileManager {

  constructor(element) {
    this.element = element;
  }

  render() {
    const html = parseFromStringToHTML(`<div class="file-manager-container"></div>`);
    this.element.appendChild(html);

    const optionHeader = new OptionHeader(html);
    const fileList = new FileList(html);
    const uploadFile = new UploadFile(html);

    optionHeader.render();
    fileList.render();
    uploadFile.render();
  }
}
