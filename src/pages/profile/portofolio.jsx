import { useEffect, useState } from "react";
import api from "../../configs/api";
import PortofolioCard from "../../components/module/portofolioCard";

// eslint-disable-next-line react/prop-types
const Portofolio = ({ id }) => {
  const [portofolio, setPortofolio] = useState([]);

  useEffect(() => {
    const getPortofolio = async () => {
      try {
        const response = await api.get(`/portfolio/${id}`);
        const data = response.data.data;
        console.log("data portofolio: ", data);

        setPortofolio(data);
      } catch (error) {
        console.log("Error getting portofolio: ", error);
      }
    };

    getPortofolio();
    
  }, [id]);

  return (
  <div className="flex flex-wrap justify-around ">
    {portofolio.length > 0 ?
    portofolio.map((item, index) => (
      <PortofolioCard key={index} name={item.application_name} image={item.image} />
    )) :
    "belum ada portofio di input"}
  </div>
  );
};

export default Portofolio;
