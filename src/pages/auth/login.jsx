import Logo from "../../components/images/logo/whitelogo.png";
import Photo from "../../components/images/background/orang2.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../configs/api";
import Input from "../../components/base/Input";

const Login = () => {

  const navigate = useNavigate();
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const handleLogin = (e) => {
    e.preventDefault()
    api({
      method: 'POST',
      url: `/auth/login`,
      data: {
        email: form.email,
        password: form.password
      }
    })
      .then((res) => {
        const { token, refreshToken } = res.data.data
        localStorage.setItem('token', token)
        localStorage.setItem('resfreshToken', refreshToken)
        navigate('/home')
      })
      .catch((err) => {
        console.log(err.response);
      })
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="max-w-[1440px] h-[900px] flex mx-auto ">
      <div className="hidden w-1/2 relative h-100% lg:flex flex-col border bg-slate-400 " >
        <img className="relatif h-full w-full object-cover z-1" src={Photo} />
        <div className="absolute h-full w-full bg-ungu-pj bg-opacity-80 z-2"></div>
        <img className="absolute z-3 pl-[60px] pt-[40px]" src={Logo} />
        <h1 className="absolute leading-[80px] flex font-Osans text-[54px] font-bold z-3 top-1/2 transform -translate-y-1/2 text-white px-[70px]">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
      </div>


      <div className="lg:w-1/2 w-full flex flex-col font-Osans p-[70px]">
        <p className="text-[32px] font-semibold mt-[80px]">Halo, Pewpeople</p>
        <p className="text-[18px] mt-[16px] text-[#46505C]">Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>

        <Input label="email" name="email" onChange={handleChange} type="email" value={form.email} placeholder="Masukkan email" />
        <Input label="Kata sandi" name="password" onChange={handleChange} type="password" value={form.password} placeholder="Masukkan kata sandi" />

        <p className="text-[16px] mt-[24px] text-right"><Link to="/resetpassword">Lupa kata sandi? </Link></p>
        <button className="text-white bg-[#FBB017] rounded h-[50px] mt-[24px]" onClick={handleLogin}>Masuk</button>
        <p className="text-[16px] mt-[28px] text-center">Anda belum punya akun? <Link className="text-yellow-400" to="/register"> Daftar disini</Link></p>
      </div>
    </div>
  )
}

export default Login