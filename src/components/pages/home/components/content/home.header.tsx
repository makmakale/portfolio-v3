import { format } from "date-fns";
import { PROFILE } from "@/components/pages/home/home.constants";

import { CardInputField } from "@/components/pages/home/components/ui/card";
import { FaFireAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsCake2 } from "react-icons/bs";

export default function HomeHeader() {
  return (
    <div className="grid grid-cols-3 gap-2 text-[0.16rem]">
      <CardInputField className="justify-center">
        <FaFireAlt className="inline mr-0.5" />
        {PROFILE.yearsOfExperience}+ years
      </CardInputField>

      <CardInputField className="justify-center">
        <FaMapMarkerAlt className="inline mr-0.5" />
        {PROFILE.location}
      </CardInputField>

      <CardInputField className="justify-center">
        <BsCake2 className="inline mr-0.5" />
        {format(PROFILE.date, "MMM dd, yyyy")}
      </CardInputField>
    </div>
  );
}
