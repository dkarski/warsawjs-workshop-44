import {generateUuid} from "./generate-uuid.js";

export class Tag {
  constructor(name) {
    this.id = generateUuid();
    this.name = name;
    this.iconUrl = '';
  }
}

class PriceTag extends Tag {
  constructor(name) {
    super(name)
    this.iconUrl = 'price-tag.svg';
  }
}

class LocationTag extends Tag {
  constructor(name) {
    super(name)
    this.iconUrl = 'location.svg';
  }
}

class TagFactory {
  static createTag(name) {
    return new Tag(name);
  }
}

export class PriceTagFactory extends TagFactory {
  static createTag(name) {
    return new PriceTag(name);
  }
}

export class LocationTagFactory extends TagFactory {
  static createTag(name) {
    return new LocationTag(name);
  }
}

export const TAG_MAP = {
  "tag": PriceTagFactory.createTag,
  "location": LocationTagFactory.createTag,
  "1tag": PriceTagFactory.createTag,
  "2location": LocationTagFactory.createTag,
  "3tag": PriceTagFactory.createTag,
  "4location": LocationTagFactory.createTag,
  "5tag": PriceTagFactory.createTag,
  "6location": LocationTagFactory.createTag,
  "7tag": PriceTagFactory.createTag,
  "8location": LocationTagFactory.createTag,
  "9tag": PriceTagFactory.createTag,
  "1location": LocationTagFactory.createTag,
  "2tag": PriceTagFactory.createTag,
  "3location": LocationTagFactory.createTag,
  "4tag": PriceTagFactory.createTag,
  "5location": LocationTagFactory.createTag,
  "6tag": PriceTagFactory.createTag,
  "7location": LocationTagFactory.createTag,
  "8tag": PriceTagFactory.createTag,
  "9location": LocationTagFactory.createTag,
  "11tag": PriceTagFactory.createTag,
  "11location": LocationTagFactory.createTag,
  "22tag": PriceTagFactory.createTag,
  "22location": LocationTagFactory.createTag,
  "33tag": PriceTagFactory.createTag,
  "33location": LocationTagFactory.createTag,
};
