import { TTeamList } from "work/lib/work.types";
import DetailsTemplate from "work/components/ui/details-template";
import {
  TeamList,
  TeamListItem,
  TeamListItemContent,
  TeamListItemCount,
} from "work/components/team-list";

const data: TTeamList[] = [
  { id: 1, title: "Team Lead", min: 1 },
  { id: 2, title: "Fullstack Developers", min: 1 },
];

export default function Description() {
  return (
    <DetailsTemplate title="Team">
      <TeamList>
        {data.map((person) => {
          return (
            <TeamListItem key={person.id}>
              <TeamListItemContent>{person.title}</TeamListItemContent>
              <TeamListItemCount>
                {person.min}
                {person.max ? `-${person.max}` : null}
              </TeamListItemCount>
            </TeamListItem>
          );
        })}
      </TeamList>
    </DetailsTemplate>
  );
}
