/* eslint-disable react/prop-types */

import { useState } from 'react';
import Input from '../../base/Input';
import Button from '../../base/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setYear, setMonth, getYear, getMonth } from 'date-fns';
import api from '../../../configs/api';

const ProfileExperience = ({ onExperienceAdded }) => {
  const [experience, setExperience] = useState({
    position: '',
    company: '',
    work_month: '',
    work_year: '',
    description: '',
  });

  const [experiences, setExperiences] = useState([]);
  const [expandedExperience, setExpandedExperience] = useState(null);


  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setExperience({
      ...experience,
      work_month: getMonth(date) + 1, // +1 karena index pertama 0
      work_year: getYear(date),
    });
  };

  const handleAddExperience = async () => {
    try {
      const response = await api.post('/experience', experience);
      console.log('Experience added:', response.data.data);
      alert('Pengalaman kerja berhasil ditambahkan');
      setExperiences([...experiences, response.data.data]);
      setExperience({
        position: '',
        company: '',
        work_month: '',
        work_year: '',
        description: '',
      });
      if (onExperienceAdded) {
        onExperienceAdded(response.data.data);
      }
    } catch (error) {
      console.error('Error adding experience:', error);
      alert('Gagal menambahkan pengalaman kerja');
    }
  };

  const handleToggleExpand = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto mt-8">
      <div className="flex space-x-8 mb-3 border-b border-abu-pj">
        <div className="text-[22px] font-semibold py-1">Pengalaman kerja</div>
      </div>
      <div className="flex flex-col space-y-4">
        <Input
          labelClassName="mt-0"
          label="Posisi"
          name="position"
          onChange={handleChange}
          type="text"
          value={experience.position}
          placeholder="Masukkan posisi"
        />
        <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
          <Input
            divClassName="flex-1"
            label="Nama perusahaan"
            name="company"
            onChange={handleChange}
            type="text"
            value={experience.company}
            placeholder="Masukkan nama perusahaan"
          />
          <div className="flex flex-col">
            <label className="text-[12px] mt-9 text-[#9EA0A5]">Bulan/Tahun</label>
            <DatePicker
              selected={
                experience.work_month && experience.work_year
                  ? setYear(setMonth(new Date(), experience.work_month - 1), experience.work_year)
                  : null
              }
              onChange={handleDateChange}
              showMonthYearPicker
              dateFormat="MM/yyyy"
              placeholderText="Pilih Bulan/Tahun"
              className="text-[14px] mt-[4px] h-[50px] rounded border border-[#9EA0A5] p-[14px]"
            />
          </div>
        </div>
        <Input
          label="Deskripsi singkat"
          name="description"
          onChange={handleChange}
          type="text"
          value={experience.description}
          placeholder="Masukkan deskripsi pekerjaan anda"
        />
        <Button
          label="Tambah pengalaman kerja"
          className="border-orange-pj border "
          onClick={handleAddExperience}
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Daftar Pengalaman Kerja</h3>
        {experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <div
              key={index}
              className="p-2 border-b border-abu-pj cursor-pointer"
              onClick={() => handleToggleExpand(index)}
            >
              <p><strong>Posisi:</strong> {exp.position}</p>
              {expandedExperience === index && (
                <>
                  <p><strong>Perusahaan:</strong> {exp.company}</p>
                  <p><strong>Bulan/Tahun:</strong> {exp.work_month} / {exp.work_year}</p>
                  <p><strong>Deskripsi:</strong> {exp.description}</p>
                </>
              )}
            </div>
          ))
        ) : (
          <p>Belum ada pengalaman kerja.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileExperience;
