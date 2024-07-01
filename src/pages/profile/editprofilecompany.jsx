import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/base/Navbar";
import Footer from "../../components/base/Footer";
import noPhoto from "../../components/images/logo/user.svg";
import imap from "../../components/images/logo/map-pin.png";
import Input from "../../components/base/Input";
import api from "../../configs/api";

const EditProfileCompany = () => {
  const [recruiter, setRecruiter] = useState({});
  const [form, setForm] = useState({
    company: '',
    position: '',
    city: '',
    description: '',
    email: '',
    instagram: '',
    phone: '',
    linkedin: ''
  });
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const getRecruiterData = async () => {
      try {
        const response = await api.get('/recruiters/profile');
        const data = response.data.data;
        console.log("recruiter data: ", data);
        setRecruiter(data);
        setForm({
          company: data.company || '',
          position: data.position || '',
          city: data.city || '',
          description: data.description || '',
          email: data.email || '',
          instagram: data.instagram || '',
          phone: data.phone || '',
          linkedin: data.linkedin || ''
        });
      } catch (error) {
        console.error("Error getting recruiter data: ", error);
      }
    };

    getRecruiterData();
  }, []);

  const handleEdit = async () => {
    try {
      const response = await api.put('/recruiters/profile', {
        company: form.company,
        position: form.position,
        city: form.city,
        description: form.description,
        email: form.email,
        instagram: form.instagram,
        phone: form.phone,
        linkedin: form.linkedin,
        photo: recruiter.photo
      });

      console.log(response.data);
      alert('Selamat berhasil mengedit profil');
      navigate(`/profilecompany`);
    } catch (error) {
      console.error('Error editing profile:', error);
      alert('Anda gagal mengedit profil');
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('photo', file);

      try {
        const response = await api.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const photoUrl = response.data.data.photoUrl;
        setRecruiter((prevRecruiter) => ({
          ...prevRecruiter,
          photo: photoUrl
        }));
        alert('Foto berhasil diunggah');
      } catch (error) {
        console.error('Error uploading photo:', error);
        alert('Anda gagal mengunggah foto');
      }
    }
  };

  return (
    <div className="w-screen mx-auto bg-abu-bg -z-20">
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0">
        <div className="w-full md:w-[357px] h-fit bg-white rounded flex flex-col px-[30px] pb-[30px] font-Osans space-y-2">
          <img className="w-[150px] h-[150px] mt-[30px] mx-auto" src={recruiter.photo || noPhoto} alt={recruiter.name} />
          <button 
          onClick={() => fileInputRef.current.click()}
          className="text-base font-bold h-[40px] rounded mb-[20px] px-4"
        >
          Edit Foto
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePhotoChange}
          className="hidden"
        />
          <p className="text-[22px] font-semibold">{recruiter.company}</p>
          <p className="text-sm">{recruiter.position}</p>
          <p className="text-sm text-abu-pj flex"><img className="w-[14px] h-[14px] mr-3" src={imap} alt="" />{recruiter.city}</p>
          <p className="text-sm text-abu-pj max-w-[614px]">{recruiter.description}</p>
          <button onClick={handleEdit} className="text-base font-bold h-[50px] x-auto bg-ungu-pj text-white rounded my-10">Simpan</button>
          <button onClick={() => navigate('/profilecompany')} className="text-base font-bold h-[50px] x-auto bg-white text-ungu-pj rounded border border-ungu-pj my-10">Batal</button>
        </div>

        <div className="w-full md:max-w-[754px] h-fit mx-auto">
          <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto">
            <div className="flex space-x-8 mb-3 border-b border-abu-pj">
              <div className="text-[22px] font-semibold py-1">Data diri</div>
            </div>
            <div className="flex flex-col">
              <Input label="Nama perusahaan" name="company" onChange={handleChange} type="text" value={form.company} placeholder="Masukkan nama perusahaan" />
              <Input label="Jabatan" name="position" onChange={handleChange} type="text" value={form.position} placeholder="Masukkan jabatan" />
              <Input label="Kota" name="city" onChange={handleChange} type="text" value={form.city} placeholder="Masukkan kota" />
              <label className="mb-2 font-semibold">Deskripsi singkat</label>
              <textarea
                name="description"
                onChange={handleChange}
                value={form.description}
                placeholder="Masukkan deskripsi singkat"
                className="border rounded p-2 mb-4 border-abu-pj"
                rows="4"
              />
              <Input label="Email" name="email" onChange={handleChange} type="email" value={form.email} placeholder="Masukkan email" />
              <Input label="Instagram" name="instagram" onChange={handleChange} type="text" value={form.instagram} placeholder="Masukkan nama Instagram" />
              <Input label="No. telepon" name="phone" onChange={handleChange} type="text" value={form.phone} placeholder="Masukkan nomor telepon yang dapat dihubungi" />
              <Input label="LinkedIn" name="linkedin" onChange={handleChange} type="text" value={form.linkedin} placeholder="Masukkan nama LinkedIn" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfileCompany;
