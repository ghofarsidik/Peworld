/* eslint-disable react/prop-types */
import Input from "../../base/Input";

const EditProfileData = ({ form, handleChange }) => {
  return (
    <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto">
      <div className="flex space-x-8 mb-3 border-b border-abu-pj">
        <div className="text-[22px] font-semibold py-1">Data diri</div>
      </div>
      <div className="flex flex-col space-y-4">
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
          value={form.job_desk}
          placeholder="Masukkan job desk"
        />
        <Input
          label="Domisili"
          name="domicile"
          onChange={handleChange}
          type="text"
          value={form.domicile}
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
  );
};

export default EditProfileData;