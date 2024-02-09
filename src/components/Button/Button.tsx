import clsx from "clsx";
import React from "react";

type ButtonProps = {
  label?: string | null;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "informative"
    | "danger"
    | "text";
  contrast?: string;
  size?: string;
  iconPosition?: string;
  icon?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label = "",
  variant = "primary",
  contrast = "default",
  size = "lg",
  iconPosition = "left",
  icon = null,
  fullWidth = false,
  disabled,
  onClick,
}) => {
  const buttonclsx = clsx(
    `bg-gray-50 border-gray-300 border inline-block w-fit h-fit text-center rounded text-white font-semibold shadow-button text-sm`,
    {
      "py-[0.375rem] px-[0.625rem] text-xs": size === "xs",
      "py-2 px-3 text-xs": size === "sm",
      "py-2 px-3": size === "md",
      "py-[0.625rem] px-4": size === "lg",
      "!bg-blue-600 !border-transparent hover:!bg-blue-700 disabled:!bg-blue-300":
        variant === "primary",
      "!text-gray-900 hover:!bg-gray-100 disabled:!bg-gray-100 disabled:!text-gray-500":
        variant === "secondary",
      "!text-blue-500 hover:!text-blue-600 hover:!bg-gray-100 disabled:!bg-gray-100 disabled:!text-blue-400":
        variant === "informative",
      "!text-red-600 hover:!bg-gray-100 disabled:!bg-gray-100 disabled:!text-red-200":
        variant === "danger",
      "!p-0 !text-blue-500 hover:!text-blue-600 disabled:!text-blue-400 !bg-transparent !shadow-none !border-transparent !font-medium":
        variant === "text",
      "!w-full flex justify-center items-center": fullWidth,
      "!bg-transparent": contrast === "light",
    }
  );

  const textClassName = clsx("flex items-center whitespace-nowrap", {
    "gap-2": icon !== null && label,
  });

  return (
    <button className={buttonclsx} disabled={disabled} onClick={onClick}>
      <span
        className={textClassName}
        style={{ fillOpacity: label !== "" && variant !== "text" ? 0.5 : 1 }}
      >
        {iconPosition === "left" && icon}
        {label}
        {iconPosition === "right" && icon}
      </span>
    </button>
  );
};

export default Button;
