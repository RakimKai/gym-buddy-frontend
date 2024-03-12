import SingleNotification from "../SingeNotification/SingleNotification";
import { newsData } from "../../assets/mockData";
const News = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-between items-center mb-6 mt-6">
        <h2 className="text-2xl text-gray-700">Obavijesti:</h2>
      </div>
      <div className="flex gap-10 justify-between items-center flex-wrap">
        {newsData.map((el, index) => (
          <SingleNotification
            key={index}
            title={el.title}
            content={el.content}
            date={el.date}
          ></SingleNotification>
        ))}
      </div>
    </div>
  );
};

export default News;
