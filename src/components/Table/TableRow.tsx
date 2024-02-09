import clsx from "clsx";
import React from "react";

type tableRowProps = {
  children: React.ReactNode;
  hover?: boolean;
  bold?: boolean;
  noBorder?: boolean;
};

const TableRow: React.FC<tableRowProps> = ({
  children,
  hover = false,
  bold = false,
  noBorder = false,
  ...rest
}) => {
  return (
    <tr
      className={clsx("rounded-md border-b border-b-black text-black", {
        "cursor-pointer hover:bg-gray-200": hover,
        "font-semibold": bold,
        "border-b-0": noBorder,
      })}
      {...rest}
    >
      {children}
    </tr>
  );
};

export default TableRow;
