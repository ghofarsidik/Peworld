import imap from "../../components/images/logo/map-pin.png";
import Skillblock from "../../components/base/Skillblock";
import imail from "../../components/images/logo/mail.png";

const profileCard = ({image, name, job_desk, domicile, workPlace, description, skills, email}) => {
  return (
    <div className="w-full md:w-[357px] h-fit bg-white rounded flex flex-col px-[30px] font-Osans space-y-2">
                    <img className="w-[150px] h-[150px] mt-[30px] mx-auto" src={image} alt={name} />
                    <p className="text-[22px] font-semibold">{name}</p>
                    <p className="text-sm">{job_desk}</p>
                    <p className="text-sm text-abu-pj flex"><img className="w-[14px] h-[14px] mr-3" src={imap} alt="" />{domicile}</p>
                    <p className="text-sm text-abu-pj">{workPlace}</p>
                    <p className="text-sm text-abu-pj">{description}</p>
                    <button className="text-base font-bold h-[50px] x-auto bg-ungu-pj text-white rounded my-10">Hire</button>
                    <p>Skill</p>
                    <div className="flex flex-wrap space-x-2 items-center mt-4 mb-8">
                        {skills.length > 0 ? skills.map((item, index)=>(
                        <Skillblock key={index}>{item}</Skillblock>
                        )) :  
                        <Skillblock> skill belum di input </Skillblock>}
                        
                    </div>
                    <div className="pt-3">
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={imail} alt="" />{email}</p>
                    </div>
                </div>
  )
}

profileCard.defaultProps = {
    skills: [],
  };

export default profileCard