import { OptionHeader } from "./option-header/option-header.js";
import { FileList } from "./file-list/file-list.js";
import { UploadFile } from "./upload-file/upload-file.js";
import { convertStringToHTMLElement } from "../../utils/covert-string-to-html-element.js";

export class FileManager {
  constructor(element) {
    this.element = element;
  }

  render() {
    const childElement = convertStringToHTMLElement(
      `<div class="file-manager-container"></div>`
    );
    this.element.appendChild(childElement);

    const optionHeader = new OptionHeader(childElement, this.renderApplication);
    const fileList = new FileList(childElement, this.renderApplication);
    const uploadFile = new UploadFile(childElement, this.renderApplication);

    optionHeader.render();
    fileList.render();
    uploadFile.render();
  }
}
