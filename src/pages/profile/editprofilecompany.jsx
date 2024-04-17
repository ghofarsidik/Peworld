import Navbaral from "../../components/base/Navbaral";
import Footer from "../../components/base/Footer";
import Louis from "../../components/images/people/louis.png";
import imap from "../../components/images/logo/map-pin.png";
import Input from "../../components/base/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../configs/api";

function EditProfile() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        phone: ''
    })

    const handleEdit = () => {
        api.put('/workers/profile', {
            email: form.email,
            password: form.password,
            name: form.name,
            phone: form.phone
        })
            .then((res) => {
                alert('selamat berhasil mengedit profile')
                navigate('/profile')
            })
            .catch((err) => {
                console.log(err.response);
                alert('anda gagal mengedit profile')
            })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


//Onchangenya belom rapih, rapihin ges
    return (
        <div className=" max-w-[1440px] mx-auto bg-abu-bg -z-20">
            <Navbaral />

            <div className=" flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0 ">

                <div className="w-full md:w-[357px] h-fit bg-white rounded flex flex-col px-[30px] pb-[30px] font-Osans space-y-2">
                    <img className="w-[150px] h-[150px] mt-[30px] mx-auto" src={Louis} alt="" />
                    <p className="text-[22px] font-semibold">PT. Martabat Jaya Abadi</p>
                    <p className="text-sm">Financial</p>
                    <p className="text-sm text-abu-pj flex"><img className="w-[14px] h-[14px] mr-3" src={imap} alt="" />Purwokerto, Jawa Tengah</p>
                    <p className="text-sm text-abu-pj max-w-[614px]">Sebagai Profesional Keuangan di PT. Martabat Jaya Abadi, saya bertanggung jawab untuk mengelola aspek keuangan perusahaan dengan cermat dan berdedikasi.</p>
                    <button onClick={handleEdit} className="text-base font-bold h-[50px] x-auto bg-ungu-pj text-white rounded my-10">Simpan</button>
                    <button className="text-base font-bold h-[50px] x-auto bg-white text-ungu-pj rounded border border-ungu-pj my-10">Batal</button>
                </div>

                <div className="w-full md:max-w-[754px] h-fit mx-auto">
                    <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto">
                        <div className="flex space-x-8 mb-3 border-b border-abu-pj">
                            <div className=" text-[22px] font-semibold py-1">Data diri</div>
                        </div>
                        <div className="flex flex-col">
                            <Input labelClassName="mt-0" label="Nama perusahaan" name="name" onChange={handleChange} type="text" value={form.name} placeholder="Masukkan nama perusahaan" />
                            <Input label="Bidang" name="sector" onChange={handleChange} type="text" value={form.job} placeholder="Masukkan bidang perusahaan ex: Financial" />
                            <Input label="Kota" name="city" onChange={handleChange} type="text" value={form.job_desk} placeholder="Masukkan kota" />
                            <Input label="Deskripsi singkat" name="workplace" onChange={handleChange} type="text" value={form.workplace} placeholder="Masukkan tempat kerja" />
                            <Input label="Deskripsi singkat" name="description" onChange={handleChange} type="text" value={form.description} placeholder="Masukkan deskripsi singkat" />
                            <Input label="Email" name="email" type="email" onChange={handleChange} value="" placeholder="Masukkan email"/>
                            <Input label="Instagram" name="instagram" type="text" onChange={handleChange} value="" placeholder="Masukkan nama instagram anda" />
                            <Input label="No. telpon" name="phone" type="text" onChange={handleChange} value="" placeholder="Masukkan nomor telpon yang dapat di hubungi" />
                            <Input label="Linkedin" name="linkedin" type="text" onChange={handleChange} value="" placeholder="Masukkan nama Linkedin" />
                        </div>
                    </div>


                </div>
                </div>
                <Footer />
            </div>
        
    );
}

export default EditProfile