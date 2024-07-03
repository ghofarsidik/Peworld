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

    <div className="h-fit bg-white rounded flex flex-col px-4 md:px-[30px] pb-8 font-Osans space-y-4 mx-4 md:mx-[150px] mt-8 text-center items-center">
                    <img className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mt-[30px] mx-auto" src={recruiter.photo || noPhoto} alt={recruiter.name} />
                    <p className="text-[18px] md:text-[22px] font-semibold">{recruiter.company}</p>
                    <p className="text-sm">{recruiter.position}</p>
                    <p className="text-sm text-abu-pj flex justify-center items-center"><img className="w-[14px] h-[14px] mr-3" src={imap} alt="" />{recruiter.city}</p>
                    <p className="text-sm text-abu-pj max-w-full md:max-w-[614px]">{recruiter.description}</p>
                    <button onClick={handleButtonEdit} className="text-base font-bold h-[50px] mx-auto bg-ungu-pj text-white rounded my-10 w-full md:w-[297px]">Edit profile</button>
      
                    <div className="pt-3 w-full flex justify-center">
                        <table className="table-auto text-left">
                            <tbody>
                                <tr className="text-sm text-abu-pj mb-5 items-center">
                                    <td className="pr-5"><img className="mr-5" src={imail} alt="" /></td>
                                    <td>{recruiter.email}</td>
                                </tr>
                                <tr className="text-sm text-abu-pj mb-5 items-center">
                                    <td className="pr-5"><img className="mr-5" src={instagram} alt="" /></td>
                                    <td>{recruiter.instagram}</td>
                                </tr>
                                <tr className="text-sm text-abu-pj mb-5 items-center">
                                    <td className="pr-5"><img className="mr-5" src={iphone} alt="" /></td>
                                    <td>{recruiter.phone}</td>
                                </tr>
                                <tr className="text-sm text-abu-pj mb-24 items-center">
                                    <td className="pr-5"><img className="mr-5" src={ilinkedin} alt="" /></td>
                                    <td>{recruiter.linkedin}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>

    <Footer />
    </Container>
  )
}

export default Profilecompany