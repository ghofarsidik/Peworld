import Navbaral from "../../components/base/Navbaral";
import Footer from "../../components/base/Footer";
import Louis from "../../components/images/people/louis.png";
import imap from "../../components/images/logo/map-pin.png";
import iupload from "../../components/images/logo/upload.png";
import Input from "../../components/base/Input";
import { useEffect, useState } from "react";
import api from "../../configs/api";
import Button from "../../components/base/Button";

function EditProfile() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const [userId, setUserId] = useState(null); 

//   useEffect(() => {
    
//     const token = localStorage.getItem("token"); 

//     if (token) {
//       const decodedToken = jwt_decode(token);
//       console.log("Decoded token:", decodedToken);
//       const { userId } = decodedToken;
//       setUserId(userId); 
//     }
//   }, []);

  const handleEdit = () => {
    api
      .put("/workers/profile", {
        email: form.email,
        password: form.password,
        name: form.name,
        phone: form.phone,
      })
      .then((res) => {
        console.log(res);
        alert("selamat berhasil mengedit profile");
      })
      .catch((err) => {
        console.log(err.response);
        alert("anda gagal mengedit profile");
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=" max-w-[1440px] mx-auto bg-abu-bg -z-20">
      <Navbaral />
      <div className=" flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0 ">
        <div className="w-full md:w-[357px] h-fit bg-white rounded flex flex-col px-[30px] pb-[30px] font-Osans space-y-2">
          <img
            className="w-[150px] h-[150px] mt-[30px] mx-auto"
            src={Louis}
            alt=""
          />
          <p className="text-[22px] font-semibold">Louis Tomlinson</p>
          <p className="text-sm">Web Developer</p>
          <p className="text-sm text-abu-pj flex">
            <img className="w-[14px] h-[14px] mr-3" src={imap} alt="" />
            Purwokerto, Jawa Tengah
          </p>
          <p className="text-sm text-abu-pj">Freelancer</p>
          <button
            onClick={handleEdit}
            className="text-base font-bold h-[50px] x-auto bg-ungu-pj text-white rounded my-10"
          >
            Simpan
          </button>
          <button className="text-base font-bold h-[50px] x-auto bg-white text-ungu-pj rounded border border-ungu-pj my-10">
            Batal
          </button>
        </div>

        <div className="w-full md:max-w-[754px] h-fit mx-auto">
          <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto">
            <div className="flex space-x-8 mb-3 border-b border-abu-pj">
              <div className=" text-[22px] font-semibold py-1">Data diri</div>
            </div>
            <div className="flex flex-col">
              <Input
                labelClassName="mt-0"
                label="Nama"
                name="name"
                onChange={handleChange}
                type="text"
                value={form.name}
                placeholder="Masukkan nama lengkap"
              />
              <Input
                label="Job desk"
                name="job_desk"
                onChange={handleChange}
                type="text"
                value={form.job}
                placeholder="Masukkan job desk"
              />
              <Input
                label="Domisili"
                name="domicile"
                onChange={handleChange}
                type="text"
                value={form.job_desk}
                placeholder="Masukkan domisili"
              />
              <Input
                label="Tempat kerja"
                name="workplace"
                onChange={handleChange}
                type="text"
                value={form.workplace}
                placeholder="Masukkan tempat kerja"
              />
              <Input
                label="Deskripsi singkat"
                name="description"
                onChange={handleChange}
                type="text"
                value={form.description}
                placeholder="Masukkan deskripsi singkat"
              />
            </div>
          </div>

          <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto mt-8">
            <div className="flex space-x-8 mb-3 border-b border-abu-pj">
              <div className=" text-[22px] font-semibold py-1">Skill</div>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                divClassName="flex-grow"
                labelClassName="mt-0"
                label=""
                name="skill"
                onChange=""
                type="text"
                value=""
                placeholder="Masukkan skill"
              />
              <Button className="px-4 mt-0" label="Simpan"></Button>
            </div>
          </div>

          <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto mt-8">
            <div className="flex space-x-8 mb-3 border-b border-abu-pj">
              <div className=" text-[22px] font-semibold py-1">
                Pengalaman kerja
              </div>
            </div>
            <div className="flex flex-col">
              <Input
                labelClassName="mt-0"
                label="Posisi"
                name="position"
                onChange=""
                type="text"
                value=""
                placeholder="Masukkan posisi"
              />
              <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
                <Input
                  divClassName="flex-1"
                  label="Nama perusahaan"
                  name="company"
                  onChange=""
                  type="text"
                  value=""
                  placeholder="Masukkan nama perusahaan"
                />
                <Input
                  divClassName="flex-1"
                  label="Bulan/tahun"
                  name="time"
                  onChange=""
                  type="text"
                  value=""
                  placeholder="Masukkan bulan dan tahun"
                />
              </div>
              <Input
                label="Deskripsi singkat"
                name="job_description"
                onChange=""
                type="text"
                value=""
                placeholder="Masukkan deskripsi pekerjaan anda"
              />
              <Button
                label="Tambah pengalaman kerja"
                className="border-orange-pj border bg-white text-orange-pj"
              ></Button>
            </div>
          </div>

          <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto mt-8">
            <div className="flex space-x-8 mb-3 border-b border-abu-pj">
              <div className=" text-[22px] font-semibold py-1">Portofolio</div>
            </div>
            <div className="flex flex-col">
              <Input
                labelClassName="mt-0"
                label="Nama aplikasi"
                name="application_name"
                onChange=""
                type="text"
                value=""
                placeholder="Masukkan nama aplikasi"
              />
              <Input
                label="Link repository"
                name="link_repository"
                onChange=""
                type="text"
                value=""
                placeholder="Masukkan deskripsi pekerjaan anda"
              />
              <Button
                label="Tambah pengalaman kerja"
                className="border-orange-pj border bg-white text-orange-pj"
              ></Button>
              <p className="text-[12px] mt-9 text-[#9EA0A5]">Tipe portofolio</p>
              <div className="flex">
                <label className="flex items-center mb-2 p-4 shadow-lg hover:shadow-xl rounded">
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  <span>Aplikasi mobile</span>
                </label>

                <label className="flex items-center mb-2 p-4 shadow-lg hover:shadow-xl rounded">
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  <span>Aplikasi web</span>
                </label>
              </div>

              <p className="text-[12px] mt-9 text-[#9EA0A5]">Upload gambar</p>
              <img src={iupload} alt="" />
              <Button
                label="Tambah portofolio"
                className="border-orange-pj border bg-white text-orange-pj"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
