import { SkillIds } from "@/components/pages/skills/lib/skill.constants";
import { SkillLevel } from "@/components/pages/skills/lib/skill.data";

export const skillLevels = new Map<SkillIds, SkillLevel>()
  .set(SkillIds.html, 3)
  .set(SkillIds.css, 3)
  .set(SkillIds.js, 3)
  .set(SkillIds.react, 3)
  .set(SkillIds.redux, 3)
  .set(SkillIds.reduxForm, 3)
  .set(SkillIds.shadcn, 3)
  .set(SkillIds.mui, 3)
  .set(SkillIds.sc, 3)
  .set(SkillIds.jwt, 1)
  .set(SkillIds.mongodb, 1)
  .set(SkillIds.mongoose, 1)
  .set(SkillIds.handlebars, 2)
  .set(SkillIds.vite, 1)
  .set(SkillIds.webpack, 1);
