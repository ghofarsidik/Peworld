
import { useState } from 'react';
import Input from '../../base/Input';
import Button from '../../base/Button';
import iupload from '../../images/logo/upload.png';

const ProfilePortfolio = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto mt-8">
      <div className="flex space-x-8 mb-3 border-b border-abu-pj">
        <div className="text-[22px] font-semibold py-1">Portofolio</div>
      </div>
      <div className="flex flex-col space-y-4">
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

        <p className="text-[12px] mt-9 text-[#9EA0A5]">Tipe portofolio</p>
        <div className="flex">
          <label className="flex items-center mb-2 p-4 shadow-lg hover:shadow-xl rounded">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span>Aplikasi mobile</span>
          </label>

          <label className="flex items-center mb-2 p-4 shadow-lg hover:shadow-xl rounded">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
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
          className="border-orange-pj border"
        ></Button>
      </div>
    </div>
  );
};

export default ProfilePortfolio;
