import Logo from "../../components/images/logo/whitelogo.png";
import Photo from "../../components/images/background/orang2.png";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="max-w-[1440px] h-[900px] flex mx-auto ">
        <div className="hidden w-1/2 relative h-100% lg:flex flex-col border bg-slate-400 " >
            <img className="relatif h-full w-full object-cover z-1" src={Photo} />
            <div className="absolute h-full w-full bg-ungu-pj bg-opacity-80 z-2"></div>
            <img className="absolute z-3 pl-[60px] pt-[40px]" src={Logo} />
            <h1 className="absolute leading-[80px] flex font-Osans text-[54px] font-bold z-3 top-1/2 transform -translate-y-1/2 text-white px-[70px]">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
        </div>
        
        <div className="lg:w-1/2 w-full flex flex-col font-Osans p-[70px]">
            <p className="text-[32px] font-semibold mt-[80px]">Halo, Pewpeople,</p>
            <p className="text-[18px] mt-[16px]  text-[#46505C]">Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
          <Link to="./company"> <button className="text-white bg-[#FBB017] rounded h-[50px] mt-[24px] w-full">Perusahaan</button> </Link>
          <Link to="./worker"> <button className="text-white bg-[#FBB017] rounded h-[50px] mt-[24px] w-full">Pekerja</button> </Link>
        </div>
    </div>
  )
}

export default Register