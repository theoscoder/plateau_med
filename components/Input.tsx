import React, { ChangeEventHandler, FC } from "react";

interface InputProps {
  label: string;
  error?: string;
  type?: "number" | "text" | "date";
  isDisabled?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputRegister: any;
}
const Input: FC<InputProps> = ({
  label,
  error,
  type,
  isDisabled,
  value,
  onChange,
  placeholder,
  inputRegister,
}) => {
  return (
    <div className="w-full">
      <div className={"space-y-1 flex flex-col items-start"}>
        <p className="text-xs font-medium text-black-40">{label}</p>
        <div
          className={`relative ${
            error?.trim().length
              ? "border-2 border-red-400 rounded-[4px]"
              : "border-2 border-gray-border rounded-[4px]"
          } w-full text-sm font-medium flex `}
        >
          <input
            disabled={isDisabled}
            type={type}
            value={value}
            onKeyDown={(evt) => {
              if (type === "number")
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault();
            }}
            onChange={onChange}
            placeholder={placeholder}
            className={`outline-none w-full flex-grow bg-white rounded-[4px] py-2 px-3 text-xs grotesk font-normal`}
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            {...inputRegister}
          />
        </div>
      </div>
      {!!error?.trim().length && (
        <p className="text-xs text-left text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
