
import Navbaral from '../../components/base/Navbaral'
import Footer from '../../components/base/Footer'
import Container from '../../components/base/Container'
import Louis from '../../components/images/people/louis.png'
import imap from '../../components/images/logo/map-pin.png'
import imail from '../../components/images/logo/mail.png'
import instagram from '../../components/images/logo/instagram.png'
import iphone from '../../components/images/logo/phone.png'
import ilinkedin from '../../components/images/logo/linkedin.png'

function Profilecompany() {
  return (
    <Container>
    <Navbaral className="shadow-lg" />

    <div className="h-fit bg-white rounded flex flex-col px-[30px]  pb-8 font-Osans space-y-4 mx-[150px] mt-8 text-center items-center">
                    <img className="w-[150px] h-[150px] mt-[30px] mx-auto" src={Louis} alt="" />
                    <p className="text-[22px] font-semibold">PT. Martabat Jaya Abadi</p>
                    <p className="text-sm">Financial</p>
                    <p className="text-sm text-abu-pj flex"><img className="w-[14px] h-[14px] mr-3" src={imap} alt="" />Purwokerto, Jawa Tengah</p>
                    <p className="text-sm text-abu-pj max-w-[614px]">Sebagai Profesional Keuangan di PT. Martabat Jaya Abadi, saya bertanggung jawab untuk mengelola aspek keuangan perusahaan dengan cermat dan berdedikasi.</p>
                    <button className="text-base font-bold h-[50px] x-auto bg-ungu-pj text-white rounded my-10 w-[297px]">Edit profile</button>
      
                    <div className="pt-3">
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={imail} alt="" />martabatjaya@gmail.com </p>
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={instagram} alt="" /> martabat_jaya</p>
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={iphone} alt="" />0821-8190-1821</p>
                        <p className="flex text-sm text-abu-pj mb-24"><img className="mr-5" src={ilinkedin} alt="" />Martabat Jaya Abadi </p>
                    </div>
                    
                </div>

    <Footer />
    </Container>
  )
}

export default Profilecompany