import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";

type inputProps = {
  id?: string;
  name?: string;
  label?: string;
  description?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  icon?: any;
  readOnly?: boolean;
  type?: string;
  className?: string;
  inputRef?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  hidden?: boolean;
};

// eslint-disable-next-line react/display-name
const Input: React.FC<inputProps> = ({
  id,
  name,
  label,
  description,
  placeholder,
  error,
  disabled = false,
  icon = null,
  readOnly = false,
  type = "text",
  className,
  inputRef,
  onChange,
  hidden,
  ...props
}) => {
  const [inputType] = useState(type);

  const InputClassName = clsx(
    "!w-full h-11 pl-3 pr-8 text-xs text-gray-900 placeholder:!text-gray-500 rounded outline-none transition-all duration-150 border",
    {
      "!border-red-500": Boolean(error) && !disabled,
      "!border-gray-300 focus:!border-blue-500 focus:shadow-input focus:!shadow-blue-200 focus:border":
        error == null && !disabled,
      "bg-gray-100 text-gray-500": disabled,
    },
    className
  );

  const subTextClassName = clsx("text-xxs mt-2", {
    "text-red-500": error,
    "text-gray-500": description,
  });

  return (
    <div className="relative flex w-full flex-col">
      {label && (
        <label className="mb-2 text-xs font-medium text-gray-800" htmlFor={id}>
          {label}
        </label>
      )}

      <div className="relative">
        {(icon !== null || type === "password") && (
          <div className="absolute flex justify-center items-center gap-x-2 right-3 top-0 bottom-0 z-10 fill-current">
            {icon !== null && (
              <span className="fill-gray-500 stroke-gray-500">{icon}</span>
            )}
          </div>
        )}
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className={InputClassName}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete="off"
          ref={inputRef}
          hidden={hidden}
          onChange={onChange}
          {...props}
        />
      </div>
      {(description ?? error) && (
        <span className={subTextClassName}>
          <span className="flex gap-1">
            <span>{error ?? description}</span>
          </span>
        </span>
      )}
    </div>
  );
};

export default Input;
