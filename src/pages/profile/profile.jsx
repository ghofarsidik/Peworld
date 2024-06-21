import Navbaral from "../../components/base/Navbaral";
import Footer from "../../components/base/Footer";
import ProfileCard from "../../components/module/profileCard";
import { useEffect, useState } from "react";
import api from "../../configs/api";
import Portofolio from "./portofolio";
import Experience from "./experience";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("portofolio"); // Default tab portofolio

  

  useEffect(() => {
    const getProfile = async () => {
      try {
        console.log("idnya: ", id);
        const response = await api.get(`workers/${id}`);
        const data = response.data.data;
        console.log("data profile: ", data);
  
        setProfile(data);
      } catch (err) {
        console.log("Error get profile data: ", err);
      }
    }
    getProfile();
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>; // Loading indicator
  }

  return (
    <div className="max-w-[1440px] mx-auto bg-gradient-to-b from-ungu-pj to-white">
      <Navbaral />
      <div className="flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0">
        <ProfileCard
          image={profile.photo}
          name={profile.name}
          job_desk={profile.job_desk}
          domicile={profile.domicile}
          workPlace={profile.workPlace}
          description={profile.description}
          skills={profile.skills}
          email={profile.email}
        />

        <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto">
          <div className="flex space-x-8 mb-6">
            <button
              className={`text-[22px] font-semibold py-1 ${activeTab === "portofolio" ? "border-b-4 border-ungu-pj" : "text-abu-pj"}`}
              onClick={() => setActiveTab("portofolio")}
              disabled={activeTab === "portofolio"}
            >
              Portofolio
            </button>
            <button
              className={`text-[22px] font-semibold py-1 ${activeTab === "experience" ? "border-b-4 border-ungu-pj" : "text-abu-pj"}`}
              onClick={() => setActiveTab("experience")}
              disabled={activeTab === "experience"}
            >
              Pengalaman Kerja
            </button>
          </div>
          
          {activeTab === "portofolio" && <Portofolio id={id} />}
          {activeTab === "experience" && <Experience id={id} />}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
