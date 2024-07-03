import { Link } from "react-router-dom";
import imap from "../images/logo/map-pin.png";
import Skillblock from "./Skillblock";
import noUser from "../images/logo/user.svg";

// eslint-disable-next-line react/prop-types
const Card = ({ index, id, image, name, job, domicile, skills }) => {
  // eslint-disable-next-line react/prop-types
  const displaySkills = skills ? skills.slice(0, 3) : [];

  return (
    <div key={index} className="bg-white h-auto md:h-56 flex flex-col md:flex-row items-center border p-4 md:p-0">
      <div className="flex-shrink-0">
        <img
          className="h-[100px] w-[100px] md:mx-5 object-cover"
          src={image || noUser}
          alt=""
        />
      </div>
      <div className="leading-8 flex-grow text-center md:text-left mt-4 md:mt-0">
        <p className="font-semibold text-[22px]">{name}</p>
        <p className="text-[14px] text-abu-pj">
          {job || "job desk belum di input"}
        </p>
        <p className="text-[14px] text-abu-pj flex items-center justify-center md:justify-start mb-2">
          <img className="w-4 h-4 mr-2" src={imap} alt="" />
          {domicile || "asal belum di input"}
        </p>
        <div className="flex space-x-3 flex-wrap justify-center md:justify-start">
          {displaySkills.length > 0 ? (
            displaySkills.map((skill, index) => (
              <Skillblock key={index}>{skill}</Skillblock>
            ))
          ) : (
            <Skillblock>Skill belum di input</Skillblock>
          )}
        </div>
      </div>
      <Link to={`/profile/${id}`}>
        <div className="border rounded bg-ungu-pj text-white p-5 w-full md:w-[148px] h-14 mt-4 md:mt-0 md:mr-20 flex items-center justify-center">
          Lihat Profile
        </div>
      </Link>
    </div>
  );
};

export default Card;
