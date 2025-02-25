import { skillData } from "skills/lib/skill.data";
import Scrollable from "@/components/ui/scrollable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SkillList,
  SkillListEmptyItem,
  SkillListItem,
  SkillListItemContent,
  SkillListItemHoverContent,
  SkillListItemImage,
  SkillListItemLevel,
} from "skills/components/skills";

export default function Skills() {
  return (
    <div className="relative h-full grid grid-cols-[3.5rem_auto] gap-4">
      <div />

      <Card>
        <CardHeader>
          <CardTitle>Tech Skills</CardTitle>
        </CardHeader>
        <CardContent className="!p-0">
          <Scrollable>
            <SkillList>
              {skillData.map((skill, i) => {
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
          </Scrollable>
        </CardContent>
      </Card>
    </div>
  );
}
