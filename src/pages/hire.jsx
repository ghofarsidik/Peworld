import Footer from '../components/base/Footer'
import Navbaral from '../components/base/Navbaral'
import Louis from '../components/images/people/louis.png'
import imap from '../components/images/logo/map-pin.png'
import Skillblock from '../components/base/Skillblock'
import Input from '../components/base/Input'
import Button from '../components/base/Button'

function Hire() {
  return (
    <div className="relative max-w-[1440px] mx-auto bg-abu-bg -z-20">
            <Navbaral className="shadow-xl"/>
            <div className="relative flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0">

                <div className="w-full md:w-[357px] h-fit bg-white rounded flex flex-col px-[30px] pb-8 font-Osans space-y-2">
                    <img className="w-[150px] h-[150px] mt-[30px] mx-auto" src={Louis} alt="" />
                    <p className="text-[22px] font-semibold">Louis Tomlinson</p>
                    <p className="text-sm">Web Developer</p>
                    <p className="text-sm text-abu-pj flex"><img className="w-[14px] h-[14px] mr-3" src={imap} alt="" />Purwokerto, Jawa Tengah</p>
                    <p className="text-sm text-abu-pj">Freelancer</p>
                    <p className="text-sm text-abu-pj">Passionate and enthuasiastic computer science graduate with a passion for developing scalable web applications and working across the full stack.</p>
                    <button className="text-base font-bold h-[50px] x-auto bg-ungu-pj text-white rounded my-10">Hire</button>
                    <p>Skill</p>
                    <div className="flex flex-wrap space-x-2 items-center mt-4 mb-8">
                        <Skillblock >Phyton</Skillblock>
                        <Skillblock>Laravel</Skillblock>
                        <Skillblock>Golang</Skillblock>
                        <Skillblock>Javascript</Skillblock>
                        <Skillblock>PHP</Skillblock>
                        <Skillblock>HTML</Skillblock>
                        <Skillblock>C++</Skillblock>
                        <Skillblock>Kotlin</Skillblock>
                        <Skillblock>Swift</Skillblock>
                    </div>
                    
                </div>

                <div className="w-full md:max-w-[754px] h-fit rounded  flex flex-col p-[30px] mx-auto">
                    <p className='text-[32px] font-semibold'>Hubungi Lous Tomlinson</p>
                    <p className='text-[18px] text-[#46505C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <Input label="Tujuan tentang pesan ini" type="text" name="" placeholder="Projek"></Input>
                    <Input label="Nama lengkap" type="text" name="name" placeholder="Masukkan nama lengkap"></Input>
                    <Input label="Email" type="email" name="email" placeholder="Masukkan email"></Input>
                    <Input label="No handphone" type="text" name="phone" placeholder="Masukkan no handphone"></Input>
                    <Input label="Deskripsi" type="text" name="description" placeholder="Deskripsikan/jelaskan lebih detail tujuan anda"></Input>
                    <Button label="hire" className="" />
                </div>


            </div>
            <Footer />

        </div>
  )
}


export default Hire