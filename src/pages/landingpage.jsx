import Container from "../components/base/Container"
import Navbar from "../components/base/Navbar.jsx"
import Footer from "../components/base/Footer"
import Images1 from "../components/images/gambar/index1.png"
import Images2 from "../components/images/gambar/index2.png"
import Images3 from "../components/images/gambar/index3.png"
import Pcheck from "../components/images/logo/ceklistpurple.png"
import Ycheck from "../components/images/logo/ceklistyellow.png"
import { Link } from "react-router-dom"
import Iharry from "../components/images/people/harry.png"
import Iniall from "../components/images/people/niall.png"
import Ilouis from "../components/images/people/louis.png"


function Landingpage() {
    return (
        <Container className="bg-white font-Osans">
            <Navbar />
            <div className="mx-auto max-w-[1140px]">
                <div className="flex flex-col space-y-12 mx-auto">
                    <div className="flex items-center mx-auto">
                        <div className="max-w-[692.175px] lg:w-1/2 ">
                            <h1 className="text-[44px] font-semibold">Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                            <h2 className="text-[18px] text-[#46505C]">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h2>
                            <Link to="/home"> <button className="text-base text-white bg-ungu-pj p-[15px] rounded mt-[30px]">Mulai Dari Sekarang</button></Link>
                        </div>
                        <img className="hidden lg:block" src={Images1} alt="" />
                    </div>


                    <div className="flex items-center mx-auto">
                        <img className="hidden lg:block" src={Images2} alt="" />
                        <div className="flex flex-col space-y-5">
                            <h1 className="font-semibold text-4xl">Kenapa harus mencari tallent di peworld</h1>
                            <p className="flex"><img className="mr-3 w-6 h-6" src={Pcheck} alt="" />Keahlian yang Tepat </p>
                            <p className="flex"><img className="mr-3 w-6 h-6" src={Pcheck} alt="" />Jaringan Profesional</p>
                            <p className="flex"><img className="mr-3 w-6 h-6" src={Pcheck} alt="" />Pencarian yang Efisien</p>
                            <p className="flex"><img className="mr-3 w-6 h-6" src={Pcheck} alt="" />Keamanan dan Keandalan</p>
                        </div>
                    </div>

                    <div className="flex items-center mx-auto">
                        <div className="max-w-[692.175px] lg:w-1/2">
                            <h1 className="text-4xl font-semibold">Skill Tallent</h1>
                            <h2 className="text-lg">Skill dan kemampuan tallent di PeWorld sangat beragam, mencakup berbagai bahasa pemrograman seperti</h2>
                            <div className="flex flex-wrap">
                                <div className="flex flex-col flex-1 space-y-6 mt-6">
                                    <p className="flex"><img className="mr-3 w-6 h-6" src={Ycheck} alt="" /> Java</p>
                                    <p className="flex"><img className="mr-3 w-6 h-6" src={Ycheck} alt="" /> Golang</p>
                                    <p className="flex"><img className="mr-3 w-6 h-6" src={Ycheck} alt="" /> Kotlin</p>
                                    <p className="flex"><img className="mr-3 w-6 h-6" src={Ycheck} alt="" /> C++</p>
                                </div>
                                <div className="flex flex-col flex-1 space-y-6 mt-6">
                                    <p className="flex"><img className="mr-3 w-6 h-6" src={Ycheck} alt="" /> PHP</p>
                                    <p className="flex"><img className="mr-3 w-6 h-6" src={Ycheck} alt="" /> Ruby</p>
                                    <p className="flex"><img className="mr-3 w-6 h-6" src={Ycheck} alt="" /> JavaScript</p>
                                    <p className="flex"><img className="mr-3 w-6 h-6" src={Ycheck} alt="" /> 10+ Bahasa lainnya</p>
                                </div>
                            </div>
                        </div>
                        <img className="hidden lg:block" src={Images3} alt="" />
                    </div>
                </div>

                <p className="font-semibold text-4xl text-center">Their opinion about peworld</p>
                <div className="flex flex-wrap justify-evenly mt-10">
                    <div className="shadow-lg hover:shadow-xl h-[437px] w-[339px] flex flex-col items-center p-8 text-center">
                        <img className="w-[120px] h-[120px]  border-[#FBB0175E] border-8 rounded-full" src={Iharry} alt="" />
                        <p className="font-Osans font-semibold text-[30px]">Harry Styles</p>
                        <p className="font-Osans text-lg text-abu-pj">Web developer</p>
                        <p className="font-Osans text-lg">Pengalaman menggunakan PeWorld sangat efisien dalam mencari talenta IT dengan fitur pencarian yang canggih dan filter yang dapat disesuaikan.</p>
                    </div>
                    <div className="shadow-lg hover:shadow-xl h-[437px] w-[339px] flex flex-col items-center p-8 text-center">
                        <img className="w-[120px] h-[120px]  border-[#FBB0175E] border-8 rounded-full" src={Iniall} alt="" />
                        <p className="font-Osans font-semibold text-[30px]">Niall Horan</p>
                        <p className="font-Osans text-lg text-abu-pj">Web developer</p>
                        <p className="font-Osans text-lg">Saya terkesan dengan diversitas dan kualitas talenta yang dapat saya temukan di PeWorld, dari berbagai latar belakang dan keahlian yang berbeda-beda.</p>
                    </div>
                    <div className="shadow-lg hover:shadow-xl h-[437px] w-[339px] flex flex-col items-center p-8 text-center">
                        <img className="w-[120px] h-[120px]  border-[#FBB0175E] border-8 rounded-full" src={Ilouis} alt="" />
                        <p className="font-Osans font-semibold text-[30px]">Louis Tomlinson</p>
                        <p className="font-Osans text-lg text-abu-pj">Web developer</p>
                        <p className="font-Osans text-lg">Antarmuka PeWorld mudah digunakan dan memberikan pengalaman pengguna yang menyenangkan dalam menjelajahi profil talenta serta mengelola proses rekrutmen.</p>
                    </div>
                </div>

                <div className="bg-ungu-pj flex h-[227px] items-center justify-between px-[70px] rounded-lg rounded-tl-[40px] rounded-br-[40px] mt-14">
                    <p className="text-4xl font-semibold font-Osans text-white max-w-[293px]">Segera temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
                    <div className="text-lg font-bold font-Osans p-5 bg-white border border-ungu-pj rounded h-fit w-fit text-ungu-pj">Mulai dari sekarang</div>
                </div>
            </div>


            <Footer />
        </Container>
    )
}

export default Landingpage