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
  SkillIds.html,
  SkillIds.css,
  SkillIds.js,
  SkillIds.react,
  SkillIds.redux,
  SkillIds.mobx,
  SkillIds.mui,
  SkillIds.bootstrap,
  SkillIds.sc,
  SkillIds.jwt,
  SkillIds.node,
  SkillIds.handlebars,
  SkillIds.mysql,
  SkillIds.sequelize,
  SkillIds.axios,
  SkillIds.gitlab,
  SkillIds.jira,
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
