import clsx from "clsx";
import IconCheckmark from "../Icons/IconCheckmark";
import React from "react";

type checkboxProps = {
  id?: string;
  name?: string;
  label?: string;
  handleChange?: () => void;
  checked?: boolean;
  disabled?: boolean;
};

const Checkbox: React.FC<checkboxProps> = ({
  id,
  name,
  label,
  handleChange,
  checked = false,
  disabled = false,
}) => {
  const checkboxClassName = clsx(
    "flex justify-center items-center relative w-4 h-4 rounded",
    {
      "!bg-blue-600": checked,
      "border-2 border-gray-400": !checked,
      "opacity-50": disabled,
    }
  );
  return (
    <div className="flex items-center justify-center">
      <div className={checkboxClassName}>
        <input
          type="checkbox"
          id={id}
          name={name}
          onChange={handleChange}
          checked={checked}
          className="absolute left-0 right-0 top-0 bottom-0 cursor-pointer opacity-0"
        />
        {checked && (
          <span className="h-3 w-3 fill-white">
            <IconCheckmark />
          </span>
        )}
      </div>
      {label && (
        <label
          htmlFor={id}
          className={clsx("ml-2 text-xs text-gray-950", {
            "opacity-50": disabled,
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
