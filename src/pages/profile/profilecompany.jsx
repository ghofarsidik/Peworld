import Navbar from '../../components/base/Navbar'
import Footer from '../../components/base/Footer'
import Container from '../../components/base/Container'
import noPhoto from '../../components/images/logo/user.svg'
import imap from '../../components/images/logo/map-pin.png'
import imail from '../../components/images/logo/mail.png'
import instagram from '../../components/images/logo/instagram.png'
import iphone from '../../components/images/logo/phone.png'
import ilinkedin from '../../components/images/logo/linkedin.png'
import { useEffect, useState } from 'react'
import api from '../../configs/api'
import { useNavigate } from 'react-router-dom'

function Profilecompany() {
  const [recruiter, setRecruiter] = useState([])
  const navigate = useNavigate()

  useEffect(()=> {
    const getRecruiterData = async () => {
      try {
        const response = await api.get('/recruiters/profile');
        const data = response.data.data;
        console.log("recruiter data: ", data);

        setRecruiter(data);
      } catch (error) {
        console.error("Error getting recruiter data: ", error)
      }
    }

    getRecruiterData();
  }, [])

  const handleButtonEdit = () => {
    navigate('/editprofilecompany')
  }

  return (
    <Container>
    <Navbar />

    <div className="h-fit bg-white rounded flex flex-col px-[30px]  pb-8 font-Osans space-y-4 mx-[150px] mt-8 text-center items-center">
                    <img className="w-[150px] h-[150px] mt-[30px] mx-auto" src={recruiter.photo || noPhoto} alt={recruiter.name} />
                    <p className="text-[22px] font-semibold">{recruiter.company}</p>
                    <p className="text-sm">{recruiter.position}</p>
                    <p className="text-sm text-abu-pj flex"><img className="w-[14px] h-[14px] mr-3" src={imap} alt="" />{recruiter.city}</p>
                    <p className="text-sm text-abu-pj max-w-[614px]">{recruiter.description}</p>
                    <button onClick={handleButtonEdit} className="text-base font-bold h-[50px] x-auto bg-ungu-pj text-white rounded my-10 w-[297px]">Edit profile</button>
      
                    <div className="pt-3">
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={imail} alt="" />{recruiter.email} </p>
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={instagram} alt="" />{recruiter.instagram}</p>
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={iphone} alt="" />{recruiter.phone}</p>
                        <p className="flex text-sm text-abu-pj mb-24"><img className="mr-5" src={ilinkedin} alt="" />{recruiter.linkedin} </p>
                    </div>
                    
                </div>

    <Footer />
    </Container>
  )
}

export default Profilecompany