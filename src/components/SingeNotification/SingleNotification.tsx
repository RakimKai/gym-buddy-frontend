import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

type NewsProps = {
  title: string;
  content: string;
  date: string;
};

const SingleNotification: React.FC<NewsProps> = ({ title, content, date }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="h-52 p-4 rounded w-[48%]">
      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md animate-fade-in">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-base line-clamp-2 text-gray-600 mb-4">{content}</p>
        <a
          onClick={() => setShow(true)}
          className="text-blue-500 font-bold hover:underline cursor-pointer"
        >
          Pročitaj više
        </a>
      </div>
      {show && (
        <Modal onClose={() => setShow(false)} open={true}>
          <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-base  text-gray-600 mb-4">{content}</p>
          <div className="flex gap-2 justify-between pt-6">
            <p className="text-base text-gray-600 font-semibold ">{date}</p>
            <Button label="Zatvori" onClick={() => setShow(false)} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SingleNotification;
