import SlideFromLeft from "@/components/animations/slide-from-left";
import SlideFromBottom from "@/components/animations/slide-from-bottom";
import PageTitle from "work/components/page-title";

import { Tabs, TabsContent } from "work/components/ui/tabs";
import WorkList from "work/components/work-tabs/work-list";
import WorkContent from "work/components/work-tabs/work-content";

export default function Work() {
  return (
    <div className="relative h-full">
      <PageTitle className="left-[5rem]" delay={2}>
        Experience
      </PageTitle>

      <Tabs>
        <SlideFromLeft
          scale={false}
          className="h-full overflow-hidden"
          delay={1.2}
        >
          <WorkList />
        </SlideFromLeft>

        <SlideFromBottom scale={false} className="overflow-hidden" delay={1.2}>
          <TabsContent>
            <WorkContent />
          </TabsContent>
        </SlideFromBottom>
      </Tabs>
    </div>
  );
}
