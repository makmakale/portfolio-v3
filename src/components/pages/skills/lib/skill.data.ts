import { SkillIds } from "@/components/pages/skills/lib/skill.constants";
import SkillFactory from "@/components/pages/skills/lib/skill.factory";

export type SkillLevel = 0 | 1 | 2 | 3 | 4;

export type SkillType = {
  id: SkillIds;
  title: string;
  image: string;
  level: SkillLevel;
};

const generateSkills = () => {
  const data: (SkillType | null)[] = [];

  Object.keys(SkillIds).forEach((key) => {
    if (!isNaN(Number(key)) && Number(key) > 0) {
      data.push(new SkillFactory(Number(key)).getData());
    }
  });

  const DEFAULT_COLUMNS = 6;
  const notEnoughCols = DEFAULT_COLUMNS - (data.length % DEFAULT_COLUMNS);
  const size = data.length + notEnoughCols;
  const emptyArray = new Array(size).fill(null);

  return emptyArray.map((_, index) => {
    return data[index] || null;
  });
};

export const skillData: (SkillType | null)[] = generateSkills();
