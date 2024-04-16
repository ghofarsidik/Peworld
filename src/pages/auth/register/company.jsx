import Logo from "../../../components/images/logo/whitelogo.png";
import Photo from "../../../components/images/background/orang2.png";
import { Link } from "react-router-dom";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";

function Company() {
  return (
    <div className="max-w-[1440px] h-fit flex mx-auto ">
            <div className="hidden w-1/2 relative h-[822px] lg:flex flex-col border bg-slate-400 " >
                <img className="relatif h-full w-full object-cover z-1" src={Photo} />
                <div className="absolute h-full w-full bg-ungu-pj bg-opacity-80 z-2"></div>
                <img className="absolute z-3 pl-[60px] pt-[40px]" src={Logo} />
                <h1 className="absolute leading-[80px] flex font-Osans text-[54px] font-bold z-3 top-1/2 transform -translate-y-1/2 text-white px-[70px]">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
            </div>


            <div className="lg:w-1/2 w-80% flex flex-col font-Osans p-[60px]">
                <p className="text-[32px] font-semibold mt-[30px]">Halo, Pewpeople</p>
                <p className="text-[18px] text-[#46505C] mt-[16px]">Daftar dan segera temukan developer terbaik</p>
                <Input label="Nama" name="name" type="text" placeholder="Masukkan nama" />
                <Input label="email" name="email" type="email" placeholder="Masukkan email" />
                <Input label="Perusahaan" type="text" placeholder="Masukkan nama perusahaan" />
                <Input label="Jabatan" type="text" placeholder="Masukkan posisi di perusahaan anda" />
                <Input label="No. handphone" type="text" placeholder="Masukkan no. handphone" />
                <Input label="Kata sandi" type="password" placeholder="Masukkan kata sandi" />
                <Input label="Konfirmasi kata sandi" type="password" placeholder="Masukkan konfirmasi kata sandi" />
                
                <Button label="Daftar" className="mt-10" />
                <p className="text-[16px] mt-[28px] text-center mb-8">Sudah punya akun? <Link className="text-yellow-400" to="/login"> Masuk disini</Link></p>
            </div>
        </div>
  )
}

export default Company