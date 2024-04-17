import Navbaral from "../../components/base/Navbaral";
import Footer from "../../components/base/Footer";
// import Container from "../../components/base/Container";
import Louis from "../../components/images/people/louis.png";
import imap from "../../components/images/logo/map-pin.png";
import Skillblock from "../../components/base/Skillblock";
import imail from "../../components/images/logo/mail.png";
import istagram from "../../components/images/logo/instagram.png";
import igithub from "../../components/images/logo/github.png";
import igitlab from "../../components/images/logo/gitlab.png";
import itokped from "../../components/images/logo/tokped.png";
import { Link } from "react-router-dom";

function Experience() {
    return (
        <div className="relative max-w-[1440px] mx-auto bg-abu-bg -z-20">
            <Navbaral />
            <div className="absolute w-full h-[500px] bg-ungu-pj -z-10"></div>
            <div className="relative flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0">

                <div className="w-full md:w-[357px] h-fit bg-white rounded flex flex-col px-[30px] font-Osans space-y-2">
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
                    <div className="pt-3">
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={imail} alt="" />Louistommo@gmail.com </p>
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={istagram} alt="" /> @Louist91</p>
                        <p className="flex text-sm text-abu-pj mb-5"><img className="mr-5" src={igithub} alt="" />@Louistommo</p>
                        <p className="flex text-sm text-abu-pj mb-24"><img className="mr-5" src={igitlab} alt="" />@Louistommo91 </p>
                    </div>
                </div>

                <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto">
                    <div className="flex space-x-8 mb-6">
                    <Link to="/porto"><div className="text-[22px] font-semibold py-1 text-abu-pj">Portofolio</div> </Link>
                    <Link to="/experience"><div className="border-b-4 border-ungu-pj text-[22px] font-semibold py-1">Pengalaman Kerja</div></Link>
                    </div>
                    <div className="flex flex-col  ">
                        <div className="flex space-x-6 py-[30px]">
                            <img className="w-[74px] h-[74px]" src={itokped} alt="" />
                            <div>
                                <p className="text-xl font-semibold">Engineer</p>
                                <p className="text-lg">Tokopedia</p>
                                <div className="flex space-x-4 text-base text-abu-pj mb-4">
                                    <p>July 2019 - January 2020</p>
                                    <div>6 months</div>
                                </div>
                                <p>Sebagai Fullstack Web Developer di Tokopedia, saya bertanggung jawab untuk mengembangkan dan memelihara fitur-fitur kunci pada platform e-commerce yang berbasis web.</p>
                            </div>
                        </div>
                        <div className="flex space-x-6 py-[30px]">
                            <img className="w-[74px] h-[74px]" src={itokped} alt="" />
                            <div>
                            <p className="text-xl font-semibold">Engineer</p>
                                <p className="text-lg">Tokopedia</p>
                                <div className="flex space-x-4 text-base text-abu-pj mb-4">
                                    <p>July 2019 - January 2020</p>
                                    <div>6 months</div>
                                </div>
                                <p>Sebagai Fullstack Web Developer di Tokopedia, saya bertanggung jawab untuk mengembangkan dan memelihara fitur-fitur kunci pada platform e-commerce yang berbasis web.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <Footer />




        </div>
    )
}

export default Experience