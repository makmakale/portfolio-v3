import { Tabs } from "work/components/ui/tabs";

export default function WorkContent() {
  return (
    <Tabs className="grid grid-cols-[3rem_1fr] gap-1.5 pb-2 h-full overflow-hidden">
      <div>Details</div>
      <div>Content</div>
    </Tabs>
  );
}
