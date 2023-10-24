import React, { FC } from "react";

interface MemberItemProps {
  name: string;
  role: "teacher" | "student";
  surname: string;
  title?: TTeacherTitle;
  isGrid?: boolean;
  memberNo?: number;
}
const MemberItem: FC<MemberItemProps> = ({
  isGrid = "true",
  role,
  name,
  surname,
  title,
  memberNo,
}) => {
  return (
    <div className="bg-white hover:bg-primary/10 p-3 flex flex-col space-y-2 rounded-md">
      <div className="bg-black/50 w-7 h-7 rounded-full"></div>
      <div className="text-black">
        <p className="text-sm font-semibold">
          {!!title && title} {name} {surname}
        </p>
        <p className="text-xs text-gray-400">
          {role === "teacher" && `Teacher Number:`}
          {role === "student" && `Student Number:`} {memberNo}
        </p>
      </div>
    </div>
  );
};

export default MemberItem;
