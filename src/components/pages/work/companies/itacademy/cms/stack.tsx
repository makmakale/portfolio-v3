import DetailsTemplate from "work/components/ui/details-template";
import { generateSkills } from "skills/lib/skill.data";
import {
  SkillList,
  SkillListEmptyItem,
  SkillListItem,
  SkillListItemContent,
  SkillListItemHoverContent,
  SkillListItemImage,
  SkillListItemLevel,
} from "skills/components/skills";
import { SkillIds } from "skills/lib/skill.constants";

const columns = 4;
const skillIds = [
  SkillIds.react,
  SkillIds.html,
  SkillIds.css,
  SkillIds.axios,
  SkillIds.node,
  SkillIds.mongodb,
  SkillIds.mongoose,
  SkillIds.handlebars,
  SkillIds.jwt,
  SkillIds.github,
];
const skills = generateSkills(columns, skillIds);

export default function Description() {
  return (
    <DetailsTemplate title="Stack">
      <SkillList columns={columns}>
        {skills.map((skill, i) => {
          if (!skill) {
            return <SkillListEmptyItem key={`empty-${i}`} />;
          }

          return (
            <SkillListItem key={skill.id}>
              <SkillListItemContent>
                <SkillListItemImage src={skill.image} alt={skill.title} />

                <SkillListItemHoverContent>
                  {skill.title}
                </SkillListItemHoverContent>

                <SkillListItemLevel level={skill.level} />
              </SkillListItemContent>
            </SkillListItem>
          );
        })}
      </SkillList>
    </DetailsTemplate>
  );
}
