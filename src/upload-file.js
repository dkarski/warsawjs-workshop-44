import {FileFactory} from "./file.js";
import store from "./store.js";
// import {CSV_FILE_ICON, JPG_FILE_ICON, MP3_FILE_ICON, PDF_FILE_ICON, SVG_FILE_ICON} from "./icons.js";

export class UploadFile {

  constructor(selector) {
    this.selector = selector;
  }

  handleUploadFileChange(event) {
    const files = event.target.files;
    const fileType = files[0] && files[0].type;

    if (fileType) {
      const {state} = store;

      // TODO: show simply factory pattern
      // let file;
      // switch (fileType) {
      //   case 'image/jpeg':{
      //     file = {
      //       name: files[0].name,
      //       type: 'image/jpeg',
      //       icon: JPG_FILE_ICON,
      //       tagIds: [],
      //     }
      //     break;
      //   }
      //   case 'image/svg+xml':{
      //     file = {
      //       name: files[0].name,
      //       type: 'image/svg+xml',
      //       icon: SVG_FILE_ICON,
      //       tagIds: [],
      //     }
      //     break;
      //   }
      //   case 'application/pdf':{
      //     file = {
      //       name: files[0].name,
      //       type: 'application/pdf',
      //       icon: PDF_FILE_ICON,
      //       tagIds: [],
      //     }
      //     break;
      //   }
      //   case 'audio/x-m4a':{
      //     file = {
      //       name: files[0].name,
      //       type: 'audio/x-m4a',
      //       icon: MP3_FILE_ICON,
      //       tagIds: [],
      //     }
      //     break;
      //   }
      //   case 'text/csv':{
      //     file = {
      //       name: files[0].name,
      //       type: 'text/csv',
      //       icon: CSV_FILE_ICON ,
      //       tagIds: [],
      //     }
      //     break;
      //   }
      // }
      const file = FileFactory.create(fileType, files[0].name);
      file && store.update({files: [file , ...state.files]})
    }
  }

  render() {
    const element = document.querySelector(this.selector);

    element.innerHTML = `
      <div class="upload-file">
        <button class="upload-file__button">Upload a file</button>
        <input class="upload-file__input" type="file" name="myfile" />
      </div>
    `;

    element.querySelector(".upload-file__input").addEventListener("change", (event) => {
      this.handleUploadFileChange(event);
    });
  }
}
