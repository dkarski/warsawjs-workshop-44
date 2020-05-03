import {CSV_FILE_ICON, JPG_FILE_ICON, MP3_FILE_ICON, PDF_FILE_ICON, SVG_FILE_ICON} from "./icons.js";

class File {
  constructor(name) {
    this.name = name;
    this.type = '';
    this.icon = '';
    this.tagIds = [];
  }
}

class ImageFile extends File {
  constructor(name) {
    super(name);
    this.type = "image/jpeg";
    this.icon = JPG_FILE_ICON;
  }
}

class SVGImageFile extends File {
  constructor(name) {
    super(name);
    this.type = "image/svg+xml";
    this.icon = SVG_FILE_ICON;
  }
}

class PDFFile extends File {
  constructor(name) {
    super(name);
    this.type = "application/pdf";
    this.icon = PDF_FILE_ICON;
  }
}

class AudioFile extends File {
  constructor(name) {
    super(name);
    this.type = "audio/x-m4a";
    this.icon = MP3_FILE_ICON;
  }
}
class CSVFile extends File {
  constructor(name) {
    super(name);
    this.type = "text/csv";
    this.icon = CSV_FILE_ICON ;
  }
}

export class FileFactory {
  static create(type, name) {
    try {
      const file = FILE_MAP[type];
      return new file(name)
    } catch (err) {
      console.log('Caught Error', err);
    }
  }
}

export const FILE_MAP = {
  'image/jpeg': ImageFile,
  'image/svg+xml': SVGImageFile,
  'application/pdf': PDFFile,
  'audio/x-m4a': AudioFile,
  'text/csv': CSVFile,
};
