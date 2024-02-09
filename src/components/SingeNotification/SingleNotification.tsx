import React from "react";

type notificationProps = { title: string; children: any };

const SingleNotification: React.FC<notificationProps> = ({
  title,
  children,
}) => {
  return (
    <div className="bg-primary h-52 text-gray-200 p-4 rounded w-[48%]">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="line-clamp-3 overflow-hidden text-base mt-5 mb-3">
        {children}
      </p>
      <a className="cursor-pointer flex justify-end"> Pročitaj više</a>
    </div>
  );
};

export default SingleNotification;
