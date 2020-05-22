import store from "../../../store/store.js";
import { convertStringToHTMLElement } from "../../../utils/covert-string-to-html-element.js";
import { FileFactory } from "./file-factory.js";


export class UploadFile {
  constructor(element) {
    this.element = element;
  }

  addFile({ type, name }) {
    const file = FileFactory.create(type, { name });
    store.update({ files: [file, ...store.state.files] });
  }

  handleUploadFileChange(event) {
    const targetFile = event.target.files[0];

    if (targetFile) {
      this.addFile(targetFile);
    }
  }

  generateHTMLString() {
    return `
      <div class="upload-file-container">
        <div class="upload-file">
          <button class="upload-file__button">Upload a file</button>
          <input class="upload-file__input" type="file" name="myfile" />
        </div>
      </div>
    `;
  }

  render() {
    const { state } = store;

    const htmlString = this.generateHTMLString(state);
    const childElement = convertStringToHTMLElement(htmlString);

    this.element.appendChild(childElement);

    this.element
      .querySelector(".upload-file__input")
      .addEventListener("change", (event) => {
        this.handleUploadFileChange(event);
      });
  }
}
