import { Button, Logo } from "@/components";
import React from "react";

const Hero = () => {
  return (
    <div className="max-width">
      {/* navigation bar */}
      <nav className="flex-between p-4">
        <Logo />
      </nav>

      {/* fancy banner */}
      <span className="flex-center bg-black px-4 py-3 xl:text-sm text-xs text-center text-white">
        Introducing Teadent / <i>Teacher+ Student</i> / -- By Emmanuel Akhigbe
        💼
      </span>

      {/* hero */}
      <section className="hero max-width flex-1 xl:pt-36 pt-10 padding-x">
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
          <Button title="Submit your details in 2 minutes" />
        </div>
        {/* image */}
        <div></div>
      </section>
    </div>
  );
};

export default Hero;
