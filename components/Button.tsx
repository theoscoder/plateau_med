"use client";

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  forwardRef,
} from "react";

type CommonProps = {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
  title: string;
};

type ButtonProps = CommonProps &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", isLoading, disabled: isDisabled, title, ...rest },
    ref
  ) => {
    const isInaccessible = isLoading || isDisabled;
    return (
      <button
        ref={ref}
        disabled={isLoading || isDisabled}
        {...rest}
        className={`flex-1 w-fit flex-center px-5 py-3 rounded-md font-medium text-sm ${
          isInaccessible ? "cursor-not-allowed" : "bg-primary-blue"
        }`}
      >
        <span>{/* loading icon */}</span>
        <span>{/* prefix icon */}</span>
        <span className={`${isInaccessible ? "text-gray-300" : "text-white"}`}>
          {title}
        </span>
        <span>{/* sufix icon */}</span>
      </button>
    );
  }
);

export default Button;
