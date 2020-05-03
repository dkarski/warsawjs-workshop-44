import {
  BADGE_TAG_ICON,
  BRIEFCASE_TAG_ICON,
  BULB_TAG_ICON,
  BULHORN_TAG_ICON,
  CALCULATOR_TAG_ICON,
  CALENDAR_TAG_ICON,
  CHAT_TAG_ICON,
  CLOUD_TAG_ICON,
  COOKIE_TAG_ICON,
  CUP_TAG_ICON,
} from "../../utils/icons.js";

export class Tag {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
    this.type = "";
    this.icon = "";
  }
}

class BadgeTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "badge";
    this.icon = BADGE_TAG_ICON;
  }
}

class BriefcaseTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "briefcase";
    this.icon = BRIEFCASE_TAG_ICON;
  }
}

class BulbTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "bulb";
    this.icon = BULB_TAG_ICON;
  }
}

class BulhornTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "bulhorn";
    this.icon = BULHORN_TAG_ICON;
  }
}

class CalculatorTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "calculator";
    this.icon = CALCULATOR_TAG_ICON;
  }
}

class CalendarTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "calendar";
    this.icon = CALENDAR_TAG_ICON;
  }
}

class ChatTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "chat";
    this.icon = CHAT_TAG_ICON;
  }
}

class CloudTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "cloud";
    this.icon = CLOUD_TAG_ICON;
  }
}

class CookieTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "cookie";
    this.icon = COOKIE_TAG_ICON;
  }
}

class CupTag extends Tag {
  constructor(option) {
    super(option);
    this.type = "cup";
    this.icon = CUP_TAG_ICON;
  }
}

export class TagFactory {
  static create(type, option) {
    try {
      const tag = TAG_MAP[type];
      return new tag(option);
    } catch (err) {
      console.log("Caught Error", err);
    }
  }
}

export const TAG_MAP = {
  badge: BadgeTag,
  briefcase: BriefcaseTag,
  bulb: BulbTag,
  bulhorn: BulhornTag,
  calculator: CalculatorTag,
  calendar: CalendarTag,
  chat: ChatTag,
  cloud: CloudTag,
  cookie: CookieTag,
  cup: CupTag,
};
