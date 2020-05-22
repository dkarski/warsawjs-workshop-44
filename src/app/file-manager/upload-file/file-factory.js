import {
	CSV_FILE_ICON,
	FILE_ICON,
	JPG_FILE_ICON,
	MP3_FILE_ICON,
	PDF_FILE_ICON, PNG_FILE_ICON,
	SVG_FILE_ICON
} from "../../../utils/icons.js";

class File {
	constructor({name, tagIds = []}) {
		this.name = name;
		this.type = '';
		this.icon = '';
		this.tagIds = tagIds;
	}
}

class ImageFile extends File {
	constructor(option) {
		super(option);
		this.type = "image/jpeg";
		this.icon = JPG_FILE_ICON;
	}
}

class SVGImageFile extends File {
	constructor(option) {
		super(option);
		this.type = "image/svg+xml";
		this.icon = SVG_FILE_ICON;
	}
}

class PNGImageFile extends File {
	constructor(option) {
		super(option);
		this.type = "image/png";
		this.icon = PNG_FILE_ICON;
	}
}

class PDFFile extends File {
	constructor(option) {
		super(option);
		this.type = "application/pdf";
		this.icon = PDF_FILE_ICON;
	}
}

class AudioFile extends File {
	constructor(option) {
		super(option);
		this.type = "audio/x-m4a";
		this.icon = MP3_FILE_ICON;
	}
}

class CSVFile extends File {
	constructor(option) {
		super(option);
		this.type = "text/csv";
		this.icon = CSV_FILE_ICON;
	}
}

class DefaultFile extends File {
	constructor(option) {
		super(option);
		this.type = "default";
		this.icon = FILE_ICON;
	}
}

export class FileFactory {
	static create(type, option) {
		const file = FILE_MAP[type] ? FILE_MAP[type] : DefaultFile;
		return new file(option);
	}
}

export const FILE_MAP = {
	'image/jpeg': ImageFile,
	'image/svg+xml': SVGImageFile,
	'image/png': PNGImageFile,
	'application/pdf': PDFFile,
	'audio/x-m4a': AudioFile,
	'text/csv': CSVFile,
};
