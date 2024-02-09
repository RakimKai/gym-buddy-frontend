import cn from "clsx";
import React from "react";

type tableDataProps = {
  children: React.ReactNode;
  padding?: string;
  className?: string;
};

const TableData: React.FC<tableDataProps> = ({
  children,
  padding,
  className,
}) => {
  return (
    <td
      className={cn("text-left", className, {
        "py-[10px]": !padding,
        "py-5": padding,
      })}
    >
      {children}
    </td>
  );
};

export default TableData;
