import { FileFactory } from "../app/file-manager/upload-file/file-factory.js";
import httpClient from "./http-client.js";

const apiUrl = "https://5ec269768ebdcc0016a59cd7.mockapi.io/api/file";

const FILE_TYPE_MAP = {
  pdf: "application/pdf",
  jpg: "image/jpeg",
  png: "image/png",
};

function mapToFiles(files) {
  return files.map((file) =>
    FileFactory.create(FILE_TYPE_MAP[file.type], {
      name: file.name,
      tagIds: file.tagIds,
    })
  );
}

class FileService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getAll() {
    return this.httpClient.get(apiUrl).then(mapToFiles);
  }
}

export default new FileService(httpClient);
