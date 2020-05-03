import { TAG_MAP, TagFactory } from "../app/create-tag-modal/tag-factory.js";

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
  getAll() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then(mapToTags);
  }
}

export default new TagService();
