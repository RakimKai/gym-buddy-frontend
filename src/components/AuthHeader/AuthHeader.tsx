import React from "react";

type authHeaderProps = { title: string; paragraph: string };

const AuthHeader: React.FC<authHeaderProps> = ({ title, paragraph }) => {
  return (
    <>
      <h1 className="mb-2 text-5xl font-semibold text-gray-900">{title}</h1>
      <p className="mb-6 text-md text-gray-500">{paragraph}</p>
    </>
  );
};

export default AuthHeader;
