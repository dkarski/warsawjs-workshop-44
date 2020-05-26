import { TAG_MAP, TagFactory } from "../app/create-tag-modal/tag-factory.js";
import httpClient from "./http-client.js";

const apiUrl = "https://5ec269768ebdcc0016a59cd7.mockapi.io/api/tag";

const getRandomType = () => {
  const tagKeys = Object.keys(TAG_MAP);
  const randomIndex = Math.floor(Math.random() * tagKeys.length);
  return tagKeys[randomIndex];
};

function mapToTags(tags) {
  return tags.map((tag) =>
    TagFactory.create(getRandomType(), {
      id: tag.id,
      name: tag.name,
    })
  );
}

class TagService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getAll() {
    return this.httpClient.get(apiUrl).then(mapToTags);
  }
}

export default new TagService(httpClient);
