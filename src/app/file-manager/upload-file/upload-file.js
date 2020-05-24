import store from "../../../store/store.js";
import { convertStringToHTMLElement } from "../../../utils/covert-string-to-html-element.js";
import {
  CSV_FILE_ICON,
  FILE_ICON,
  JPG_FILE_ICON,
  MP3_FILE_ICON,
  PDF_FILE_ICON,
  PNG_FILE_ICON,
  SVG_FILE_ICON,
} from "../../../utils/icons.js";

export class UploadFile {
  constructor(element) {
    this.element = element;
  }

  addFile({ type, name }) {
    let file;
    switch (type) {
      case "image/jpeg": {
        file = {
          name,
          type: "image/jpeg",
          icon: JPG_FILE_ICON,
          tagIds: [],
        };
        break;
      }
      case "image/svg+xml": {
        file = {
          name,
          type: "image/svg+xml",
          icon: SVG_FILE_ICON,
          tagIds: [],
        };
        break;
      }
      case "image/png": {
        file = {
          name,
          type: "image/png",
          icon: PNG_FILE_ICON,
          tagIds: [],
        };
        break;
      }
      case "application/pdf": {
        file = {
          name,
          type: "application/pdf",
          icon: PDF_FILE_ICON,
          tagIds: [],
        };
        break;
      }
      case "audio/x-m4a": {
        file = {
          name,
          type: "audio/x-m4a",
          icon: MP3_FILE_ICON,
          tagIds: [],
        };
        break;
      }
      case "text/csv": {
        file = {
          name,
          type: "text/csv",
          icon: CSV_FILE_ICON,
          tagIds: [],
        };
        break;
      }
      default: {
        file = {
          name,
          type: "default",
          icon: FILE_ICON,
          tagIds: [],
        };
        break;
      }
    }

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
