import React from "react";

type tableHeadingProps = {
  children: React.ReactNode;
  isSortable?: boolean;
  orderValue?: any;
  center?: any;
};

const TableHeading: React.FC<tableHeadingProps> = ({
  children,
  isSortable,
  orderValue,
  center,
  ...rest
}) => {
  return (
    <th
      className={`py-5 text-xxs font-bold  ${
        isSortable ? "cursor-pointer" : "pointer-events-none"
      }${center ? "text-center" : "text-left"}`}
      {...rest}
    >
      <div
        className={`${center ? "text-center" : "flex items-center"} gap-x-2`}
      >
        {children}
      </div>
    </th>
  );
};

export default TableHeading;
