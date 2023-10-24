"use client";

import { Logo, TDButton, TDInput, TDModal } from "@/components";
import React, { useState } from "react";
import RegisterTeacherModal from "./RegisterTeacherModal";
import RegisterStudentModal from "./RegisterStudentModal";

const Hero = () => {
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

  return (
    <div className="max-width">
      <div className="fixed w-full z-10 bg-white">
        {/* navigation bar */}
        <nav className="flex-between py-4 padding-x">
          <Logo />
        </nav>

        {/* fancy banner */}
        <span className="flex-center bg-black px-4 py-3 xl:text-sm text-xs text-center text-white">
          Introducing Teadent / <i>Teacher+ Student</i> / -- By Emmanuel Akhigbe
          💼
        </span>
      </div>

      {/* hero */}

      <RegisterTeacherModal
        isOpen={isTeacherModalOpen}
        onClose={() => {
          setIsTeacherModalOpen(false);
        }}
      />
      <RegisterStudentModal
        isOpen={isStudentModalOpen}
        onClose={() => {
          setIsStudentModalOpen(false);
        }}
      />

      <section className="hero max-width flex-between flex-col pt-10 padding-x h-[90vh]">
        <div className="max-w-xl space-y-8">
          <div className="space-y-3">
            <h1 className="hero__title">
              Register and view teachers and students seamlessly
            </h1>
            <p className="hero__subtitle">
              A dummy subtitle for the hero which may or may not be long so that
              it is more filling and aesthetic. Super fast ⚡
            </p>
          </div>
          <div className="flex-start space-x-3">
            <TDButton
              title="Register as a Teacher"
              onClick={() => {
                setIsTeacherModalOpen(true);
              }}
            />
            <TDButton
              variant="secondary"
              title="Register as a Student"
              onClick={() => {
                setIsStudentModalOpen(true);
              }}
            />
          </div>
        </div>
        {/* image */}
        <div className="w-32 h-32 bg-slate-400"></div>
      </section>
    </div>
  );
};

export default Hero;
