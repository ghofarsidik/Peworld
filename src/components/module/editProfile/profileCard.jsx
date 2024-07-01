/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import noPhoto from "../../images/logo/user.svg";
import Skillblock from "../../base/Skillblock";
import api from '../../../configs/api';

const ProfileCard = ({ user, onSave, skills }) => {
  const [photo, setPhoto] = useState(user?.photo);
  const fileInputRef = useRef(null);

  const handleSave = () => {
    onSave();
  };

  const handleChangePhoto = async (event) => {
    const file = event.target.files[0];
      const formData = new FormData();
      formData.append("photo", file);

      try {
        const response = await api.put("/workers/profile/photo", formData);
        console.log("response upload: ",response);
        if (response.status === 200) {
          const data = response.data.data;
          setPhoto(data.photo); 
        } else {
          console.error("Failed to upload photo");
        }
      } catch (error) {
        console.error("Error uploading photo:", error);
      }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full md:max-w-[350px] h-fit bg-white rounded shadow-md p-[30px] mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={photo || noPhoto}
          alt="User"
          className="w-[150px] h-[150px] rounded-full mb-[20px] object-cover"
        />
        <button onClick={handleButtonClick}
          className="text-base font-bold h-[40px] rounded mb-[20px] px-4"
        >
          Edit Foto
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleChangePhoto}
          ref={fileInputRef}
          className="hidden"
        />
        <div className="text-xl font-semibold mb-2">{user?.name}</div>
        <div className="text-sm text-gray-500 mb-2">{user?.job_desk}</div>
        <div className="text-sm text-gray-500 mb-2">{user?.domicile}</div>
        <div className="text-sm text-gray-500 mb-4">{user?.workplace}</div>

        <div className="flex flex-wrap gap-2">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <Skillblock key={index}>{skill.skill_name}</Skillblock>
            ))
          ) : (
            <Skillblock>Belum ada skill</Skillblock>
          )}
        </div>

        <button
          onClick={handleSave}
          className="text-base font-bold h-[50px] x-auto bg-ungu-pj text-white rounded my-2 px-6 hover:bg-opacity-80"
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;



