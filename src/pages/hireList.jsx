import { useEffect, useState } from "react";
import Footer from "../components/base/Footer";
import Navbar from "../components/base/Navbar";
import api from "../configs/api";

const HireList = () => {
  const [role, setRole] = useState(null);
  const [hire, setHire] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (typeof token === "string") {
      setRole(role);
    }
  }, []);

  useEffect(() => {
    const getHire = async () => {
      try {
        const url = role === "recruiter" ? "/hire/recruiters" : "/hire/workers";
        const response = await api.get(url);
        const data = response.data.data;
        console.log("hire data: ", data);

        setHire(data);
      } catch (error) {
        console.error("Error get hire data: ", error);
      }
    };
    getHire();
  }, [role]);

  return (
    <div className="max-w-[1440px] mx-auto max-h-[1440px]">
      <Navbar />
      <div>
        {hire.length === 0 ? (
          <p>belum ada request</p>
        ) : (
          hire.map((item, index) => (
            <div
              key={index}
              className="m-9 max-w-[1140px] font-Osans flex items-center px-1 py-[7px] bg-white mx-auto shadow-xl"
            >
              <img
                className="h-[100px] w-[100px] mx-5 object-cover"
                src={item.recruiter_photo}
                alt={item.recruiter_name}
              />
              <div>
                <p>{item.recruiter_company}</p>
                <p>{item.recruiter_name}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HireList;
