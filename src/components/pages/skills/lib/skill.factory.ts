import { SkillIds } from "@/components/pages/skills/lib/skill.constants";
import { SkillType } from "@/components/pages/skills/lib/skill.data";

import { skillNames } from "@/components/pages/skills/lib/skill.names";
import { skillImages } from "@/components/pages/skills/lib/skill.images";

import noImage from "@/assets/images/skills/no-image.jpg";
import { skillLevels } from "@/components/pages/skills/lib/skill.levels";

export default class SkillFactory {
  private data: SkillType = {
    id: SkillIds.empty,
    title: "empty",
    image: noImage.src,
    level: 0,
  };

  constructor(id: SkillIds) {
    this.data.id = id;
    this.setTitle();
    this.setImage();
    this.setLevel();
  }

  setTitle(title?: string) {
    if (!title) {
      title = skillNames.get(this.data.id) || "empty";
    }
    this.data.title = title;
    return this;
  }

  setImage(image?: string) {
    if (!image) {
      image = skillImages.get(this.data.id) || noImage.src;
    }
    this.data.image = image;
  }

  setLevel() {
    this.data.level = skillLevels.get(this.data.id) || 2;
  }

  getData(): SkillType {
    return this.data;
  }
}
