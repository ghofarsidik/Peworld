import Navbar from "../../components/base/Navbar";
import Footer from "../../components/base/Footer";
import ProfileCard from "../../components/module/profileCard";
import { useEffect, useState } from "react";
import api from "../../configs/api";
import Portofolio from "./portofolio";
import Experience from "./experience";
import { useParams } from "react-router-dom";
import noUser from "../../components/images/logo/user.svg";
import Loading from "../../components/base/Loading"; // Import Loading component

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [activeTab, setActiveTab] = useState("portofolio");

  useEffect(() => {
    const getProfile = async () => {
      if (id) {
        try {
          console.log("idnya: ", id);
          const response = await api.get(`workers/${id}`);
          const data = response.data.data;
          console.log("data profile: ", data);

          setProfile(data);
        } catch (err) {
          console.log("Error get profile data: ", err);
        }
      } else if (!id) {
        try {
          const response = await api.get("/workers/profile");
          const data = response.data.data;
          console.log("data profile: ", data);
          setProfile(data);
        } catch (err) {
          console.log("Error get profile data: ", err);
        }
      }
    };
    
    const getSkills = async () => {
      try {
        const skillLink = id ? `skills/${id}` : '/skills';
        const response = await api.get(skillLink);
        setSkills(response.data.data);
        console.log('skill :', response.data.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    getProfile();
    getSkills();
  }, [id]);

  if (!profile) {
    return <Loading />; // Use Loading component
  }

  return (
    <div className="w-screen mx-auto ">
      <Navbar />
      <div className="absolute h-[500px] w-full bg-ungu-pj -z-10"> </div>
      <div className="flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0">
        <ProfileCard
          id={id}
          profileID = {profile.id}
          image={profile.photo || noUser}
          name={profile.name}
          job_desk={profile.job_desk || "job desk belum di input"}
          domicile={profile.domicile || "domisili belum di input"}
          workPlace={profile.workPlace || "Belum Bekerja"}
          description={profile.description || "Deskripsi belum di input"}
          skills={skills}
          email={profile.email || "email belum di input"}
        />

        <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto">
          <div className="flex space-x-8 mb-6">
            <button
              className={`text-[22px] font-semibold py-1 ${
                activeTab === "portofolio"
                  ? "border-b-4 border-ungu-pj"
                  : "text-abu-pj"
              }`}
              onClick={() => setActiveTab("portofolio")}
              disabled={activeTab === "portofolio"}
            >
              Portofolio
            </button>
            <button
              className={`text-[22px] font-semibold py-1 ${
                activeTab === "experience"
                  ? "border-b-4 border-ungu-pj"
                  : "text-abu-pj"
              }`}
              onClick={() => setActiveTab("experience")}
              disabled={activeTab === "experience"}
            >
              Pengalaman Kerja
            </button>
          </div>

          {activeTab === "portofolio" && <Portofolio id={id || profile.id} />}
          {activeTab === "experience" && <Experience id={id || profile.id} />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
