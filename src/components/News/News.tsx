import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import SingleNotification from "../SingeNotification/SingleNotification";
const News = () => {
  const getUser = localStorage.getItem("userType");

  const navigate = useNavigate();

  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-between items-center mb-6 mt-6">
        <h2 className="text-2xl text-gray-700">Obavijesti:</h2>
        {getUser === "employee" && (
          <Button
            label="Upravljanje obavijestima"
            onClick={() => navigate("/dashboard/employee/create-news")}
          />
        )}
      </div>
      <div className="flex gap-10 justify-between items-center flex-wrap">
        <SingleNotification
          title={"Otkrijte Novu Dimenziju Fitnessa - Dobrodošli u Naš Svijet"}
        >
          S uzbuđenjem vam predstavljamo novo poglavlje u našoj fitness
          zajednici. Otvaramo vrata novog prostora koji je osmišljen kako bismo
          unaprijedili vaše fitness iskustvo. Donosimo vam modernu opremu,
          inovativne programe treninga i motivirajuću atmosferu koja će
          potaknuti vaš napredak.
        </SingleNotification>
        <SingleNotification
          title={"Uskoro: Fitness Revolution u Našoj Teretani!"}
        >
          Pripremite se za revoluciju! Naša teretana uskoro će doživjeti
          transformaciju s novim i inovativnim sadržajima. Moderna oprema,
          dinamični treninzi i podrška stručnih trenera čekaju vas. Budite
          spremni na bolje, budite spremni na nas!
        </SingleNotification>
        <SingleNotification
          title={
            "Proljeće Je Vrijeme Za Novi Početak - Pozivamo Vas u Teretanu"
          }
        >
          S dolaskom proljeća, pozivamo vas da započnete svoj fitness put u
          našoj teretani. Očekuju vas nove mogućnosti, motivirajući programi i
          zajednica koja podržava vaše ciljeve. Neka ovo bude vaš novi početak
          ka zdravijem i aktivnijem životu!
        </SingleNotification>
        <SingleNotification
          title={"Fit & Fun: Otkrijte Radost Vježbanja u Našoj Teretani!"}
        >
          Vježbajte s osmijehom! U našoj teretani, fitness postaje zabava. Novi
          programi, izazovni treninzi i pozitivna atmosfera čekaju vas svaki
          dan. Dođite, istražite radost vježbanja i ostvarite svoje fitness
          ciljeve s osmijehom na licu!
        </SingleNotification>
      </div>
    </div>
  );
};

export default News;
