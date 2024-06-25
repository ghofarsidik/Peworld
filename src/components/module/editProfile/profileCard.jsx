/* eslint-disable react/prop-types */
import noPhoto from "../../images/logo/user.svg";
import Skillblock from "../../base/Skillblock";

const ProfileCard = ({ user, onSave, skills }) => {
  const handleSave = () => {
    onSave();
  };

  return (
    <div className="w-full md:max-w-[350px] h-fit bg-white rounded shadow-md p-[30px] mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={user?.photo || noPhoto}
          alt="User"
          className="w-[150px] h-[150px] rounded-full mb-[20px]"
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
