import React from "react";

type notificationProps = { title: string; children: any };

const SingleNotification: React.FC<notificationProps> = ({
  title,
  children,
}) => {
  return (
    <div className=" h-52 p-4 rounded w-[48%]">
      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md animate-fade-in">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-base line-clamp-2 text-gray-600 mb-4">{children}</p>
        <a href="#" className="text-blue-500 font-bold hover:underline">
          Pročitaj više
        </a>
      </div>
    </div>
  );
};

export default SingleNotification;
