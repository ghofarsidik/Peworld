import { useState, useEffect } from "react";
import api from "../../../configs/api";
import Input from "../../base/Input";
import Button from "../../base/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setYear, setMonth, getYear, getMonth, format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ConfirmDialog from "../../base/ConfirmDialog"; // Import ConfirmDialog

const ProfileExperience = () => {
  const [experience, setExperience] = useState({
    id: null,
    position: "",
    company: "",
    work_month: "",
    work_year: "",
    description: "",
  });
  const [experiences, setExperiences] = useState([]);
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State untuk melacak apakah sedang dalam mode edit
  const [showConfirmDialog, setShowConfirmDialog] = useState(false); // State untuk menampilkan dialog konfirmasi
  const [deleteIndex, setDeleteIndex] = useState(null); // State untuk menyimpan index yang akan dihapus

  useEffect(() => {
    getExperiences();
  }, []);

  const getExperiences = async () => {
    try {
      const response = await api.get("/experience");
      setExperiences(response.data.data);
    } catch (error) {
      console.error("Error get experiences data:", error);
    }
  };

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setExperience({
      ...experience,
      work_month: getMonth(date) + 1,
      work_year: getYear(date),
    });
  };

  const handleAddExperience = async () => {
    try {
      const response = await api.post("/experience", {
        position: experience.position,
        company: experience.company,
        work_month: String(experience.work_month),
        work_year: String(experience.work_year),
        description: experience.description,
      });
      console.log("Experience added:", response.data.data);
      alert("Pengalaman kerja berhasil ditambahkan");
      setExperiences([...experiences, response.data.data]);
      setExperience({
        id: null,
        position: "",
        company: "",
        work_month: "",
        work_year: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding experience:", error);
      alert("Gagal menambahkan pengalaman kerja");
    }
  };

  const handleEditExperience = async () => {
    try {
      const response = await api.put(`/experience/${experience.id}`, {
        position: experience.position,
        company: experience.company,
        work_month: String(experience.work_month),
        work_year: String(experience.work_year),
        description: experience.description,
      });
      console.log("Experience updated:", response.data.data);
      alert("Pengalaman kerja berhasil diperbarui");
      const updatedExperiences = experiences.map((exp) =>
        exp.id === experience.id ? response.data.data : exp
      );
      setExperiences(updatedExperiences);
      setExperience({
        id: null,
        position: "",
        company: "",
        work_month: "",
        work_year: "",
        description: "",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating experience:", error);
      alert("Gagal memperbarui pengalaman kerja");
    }
  };

  const handleDeleteExperience = async () => {
    try {
      const deletedExperience = experiences[deleteIndex];
      await api.delete(`/experience/${deletedExperience.id}`);
      const updatedExperiences = experiences.filter((exp, i) => i !== deleteIndex);
      setExperiences(updatedExperiences);
      setShowConfirmDialog(false); // Tutup dialog konfirmasi setelah menghapus
    } catch (error) {
      console.error("Error deleting experience:", error);
      alert("Gagal menghapus pengalaman");
    }
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowConfirmDialog(true); // Tampilkan dialog konfirmasi
  };

  const handleEditClick = (exp) => {
    setExperience({
      id: exp.id,
      position: exp.position,
      company: exp.company,
      work_month: exp.work_month,
      work_year: exp.work_year,
      description: exp.description,
    });
    setIsEditing(true);
  };

  const handleToggleExpand = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  const formatMonth = (month) => {
    const date = setMonth(new Date(), month - 1);
    return format(date, "MMMM");
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
            <label className="text-[12px] mt-9 text-[#9EA0A5]">
              Bulan/Tahun
            </label>
            <DatePicker
              selected={
                experience.work_month && experience.work_year
                  ? setYear(
                      setMonth(new Date(), experience.work_month - 1),
                      experience.work_year
                    )
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
          label={isEditing ? "Edit Pengalaman Kerja" : "Tambah Pengalaman Kerja"}
          className="border-orange-pj border "
          onClick={isEditing ? handleEditExperience : handleAddExperience}
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Daftar Pengalaman Kerja</h3>
        {experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <div key={index} className="flex">
              <div className="p-2 border-b border-abu-pj cursor-pointer flex-grow">
                <div
                  className="font-bold flex"
                  onClick={() => handleToggleExpand(index)}
                >
                  <p className="flex-grow">Posisi: {exp.position}</p>
                  <FontAwesomeIcon
                    icon={
                      expandedExperience === index ? faAngleDown : faAngleRight
                    }
                    className="ml-auto text-gray-500"
                  />
                </div>
                {expandedExperience === index && (
                  <div className="flex">
                    <div className="mt-2 flex-grow">
                      <p>
                        <strong>Perusahaan:</strong> {exp.company}
                      </p>
                      <p>
                        <strong>Bulan/Tahun:</strong>{" "}
                        {formatMonth(exp.work_month)} {exp.work_year}
                      </p>
                      <p>
                        <strong>Deskripsi:</strong> {exp.description}
                      </p>
                    </div>
                    <div>
                      <button
                        className="text-orange-pj text-[16px]"
                        onClick={() => handleEditClick(exp)}
                      >
                        Ubah
                      </button>
                      <button
                        className="text-red-600 text-[16px]"
                        onClick={() => handleDeleteClick(index)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Belum ada pengalaman kerja.</p>
        )}
      </div>

      {showConfirmDialog && (
        <ConfirmDialog
          message="Yakin ingin menghapus pengalaman kerja ini?"
          onConfirm={handleDeleteExperience}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}
    </div>
  );
};

export default ProfileExperience;

