"use client";

import { Tabs } from "@/components";
import MemberItem from "@/components/MemberItem";
import React, { useState } from "react";

export type TMemberTab = "teacher" | "student";
type TMemberTabItem = { id: TMemberTab; title: string; isActive: boolean };

const Members = () => {
  const [activeTab, setActiveTab] = useState<TMemberTab>("teacher");

  // TODO: Add grid and list
  const [isGrid, setIsGrid] = useState(true);

  const tabItems: TMemberTabItem[] = [
    { id: "teacher", title: "Teacher", isActive: activeTab === "teacher" },
    { id: "student", title: "Student", isActive: activeTab === "student" },
  ];

  return (
    <section className="max-width padding-x padding-y space-y-6">
      {/* section head */}
      <div className="flex-between">
        {/* title */}
        <div className="space-y-1">
          <h3>Registered Members</h3>
          <p className="text-lg text-black/50">
            Most recent teachers and students
          </p>
        </div>
        {/* grid-list toggle */}
        {/* <div></div> */}
      </div>

      {/* tab */}
      <Tabs<TMemberTabItem>
        items={tabItems}
        onSelect={(tab) => {
          setActiveTab(tab.id);
        }}
      />

      {/* grid or list */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <MemberItem
          isGrid={isGrid}
          name="James"
          surname="Patrick"
          title="Mr"
          role="student"
          memberNo={2}
        />
        <MemberItem
          isGrid={isGrid}
          name="James"
          surname="Patrick"
          title="Mr"
          role="teacher"
          memberNo={3}
        />
        <MemberItem
          isGrid={isGrid}
          name="James"
          surname="Patrick"
          title="Mr"
          role="teacher"
          memberNo={1}
        />
        <MemberItem
          isGrid={isGrid}
          name="James"
          surname="Patrick"
          title="Mr"
          role="teacher"
          memberNo={4}
        />
      </div>
    </section>
  );
};

export default Members;
