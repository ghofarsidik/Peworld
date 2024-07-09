import { useEffect, useState } from "react";
import Input from "../../base/Input";
import Button from "../../base/Button";
import api from "../../../configs/api";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmDialog from "../../base/ConfirmDialog"; // Import ConfirmDialog

const ProfilePortfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [expandedPortfolio, setExpandedPortfolio] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [PortofolioData, setPortofolioData] = useState({
    id: null,
    application: "",
    application_name: "",
    image: "",
    link_repository: "",
  });
  const [showConfirmDialog, setShowConfirmDialog] = useState(false); // State untuk menampilkan dialog konfirmasi
  const [deleteIndex, setDeleteIndex] = useState(null); // State untuk menyimpan index yang akan dihapus

  useEffect(() => {
    const getPortofolios = async () => {
      try {
        const response = await api.get("/portfolio");
        console.log(response.data.data);
        setPortfolios(response.data.data);
      } catch (error) {
        console.error("Error get portofolios:", error);
      }
    };

    getPortofolios();
  }, []);

  const handleToggleExpand = (index) => {
    setExpandedPortfolio(expandedPortfolio === index ? null : index);
  };

  const handleOptionChange = (event) => {
    setPortofolioData({
      ...PortofolioData,
      application: event.target.value,
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/upload", formData);
      const uploadedImageUrl = response.data.data.file_url;
      console.log("upload response: ", response);
      setPortofolioData({
        ...PortofolioData,
        image: uploadedImageUrl,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Gagal mengunggah file");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPortofolioData({
      ...PortofolioData,
      [name]: value,
    });
  };

  const handleAddPortofolio = async () => {
    try {
      const response = await api.post("/portfolio", {
        application: PortofolioData.application,
        application_name: PortofolioData.application_name,
        image: PortofolioData.image,
        link_repository: PortofolioData.link_repository,
      });
      console.log("Portofolio added:", response.data.data);
      alert("Portofolio berhasil ditambahkan");
      setPortfolios([...portfolios, response.data.data]);
      setPortofolioData({
        id: null,
        application: "",
        application_name: "",
        image: "",
        link_repository: "",
      });
    } catch (error) {
      console.error("Error adding portofolio:", error);
      alert("Gagal menambahkan portofolio");
    }
  };

  const handleEditPortofolio = async () => {
    try {
      const response = await api.put(`/portfolio/${PortofolioData.id}`, {
        application: PortofolioData.application,
        application_name: PortofolioData.application_name,
        image: PortofolioData.image,
        link_repository: PortofolioData.link_repository,
      });
      console.log("Portofolio updated:", response.data.data);
      alert("Portofolio berhasil diperbarui");
      const updatedPortfolios = portfolios.map((portfolio) =>
        portfolio.id === PortofolioData.id ? response.data.data : portfolio
      );
      setPortfolios(updatedPortfolios);
      setPortofolioData({
        id: null,
        application: "",
        application_name: "",
        image: "",
        link_repository: "",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating portofolio:", error);
      alert("Gagal memperbarui portofolio");
    }
  };

  const handleDeletePortfolio = async () => {
    try {
      const deletedPortfolio = portfolios[deleteIndex];
      await api.delete(`/portfolio/${deletedPortfolio.id}`);
      const updatedPortfolio = portfolios.filter((portfolio, i) => i !== deleteIndex);
      setPortfolios(updatedPortfolio);
      setShowConfirmDialog(false); // Tutup dialog konfirmasi setelah menghapus
    } catch (error) {
      console.error("Error deleting portfolio:", error);
      alert("Gagal menghapus portofolio");
    }
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowConfirmDialog(true); // Tampilkan dialog konfirmasi
  };

  const handleEditClick = (portfolio) => {
    setPortofolioData({
      id: portfolio.id,
      application: portfolio.application,
      application_name: portfolio.application_name,
      image: portfolio.image,
      link_repository: portfolio.link_repository,
    });
    setIsEditing(true);
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
          onChange={handleChange}
          type="text"
          value={PortofolioData.application_name}
          placeholder="Masukkan nama aplikasi"
        />
        <Input
          label="Link repository"
          name="link_repository"
          onChange={handleChange}
          type="text"
          value={PortofolioData.link_repository}
          placeholder="Masukkan link repository"
        />

        <p className="text-[12px] mt-9 text-[#9EA0A5]">Tipe portofolio</p>
        <div className="flex">
          <label className="flex items-center mb-2 p-4 shadow-lg hover:shadow-xl rounded">
            <input
              type="radio"
              name="application"
              value="Aplikasi Mobile"
              checked={PortofolioData.application === "Aplikasi Mobile"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span>Aplikasi mobile</span>
          </label>

          <label className="flex items-center mb-2 p-4 shadow-lg hover:shadow-xl rounded">
            <input
              type="radio"
              name="application"
              value="Aplikasi Web"
              checked={PortofolioData.application === "Aplikasi Web"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span>Aplikasi web</span>
          </label>
        </div>

        <p className="text-[12px] mt-9 text-[#9EA0A5]">Upload gambar</p>
        <div className="w-full h-[200px] border border-dashed border-gray-400 flex items-center justify-center">
          {PortofolioData.image ? (
            <img
              src={PortofolioData.image}
              alt="Uploaded"
              className="max-h-full max-w-full"
            />
          ) : (
            <input
              type="file"
              onChange={handleFileUpload}
              className="cursor-pointer"
            />
          )}
        </div>
        <Button
          onClick={isEditing ? handleEditPortofolio : handleAddPortofolio}
          className="mt-4"
          label ={isEditing ? "Edit Portofolio" : "Tambah Portofolio"}
        />
      </div>

      {/* List Portofolio */}
      <div className="mt-8">
        {portfolios.map((portfolio, index) => (
          <div
            key={index}
            className="p-2 border-b border-abu-pj cursor-pointer"
          >
            <div
              className="font-bold flex"
              onClick={() => handleToggleExpand(index)}
            >
              <p className="flex-grow">
                Nama Aplikasi: {portfolio.application_name}
              </p>
              <FontAwesomeIcon
                icon={expandedPortfolio === index ? faAngleDown : faAngleRight}
                className="ml-auto text-gray-500"
              />
            </div>
            {expandedPortfolio === index && (
              <div className="mt-2">
                <div>
                  <div className="flex">
                    <div className="flex-grow">
                      <p className="flex">
                        <span>Link Repository:</span>{" "}
                        {portfolio.link_repository}
                      </p>
                      <p className="flex">
                        <span>Tipe: </span> {portfolio.application}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <button
                        className="text-ungu-pj"
                        onClick={() => handleEditClick(portfolio)}
                      >
                        Ubah
                      </button>
                      <button
                        className="text-red-600"
                        onClick={() => handleDeleteClick(index)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                  {portfolio.image && (
                    <img
                      src={portfolio.image}
                      alt="Portfolio"
                      className="max-h-full max-w-full mt-2"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showConfirmDialog && (
        <ConfirmDialog
          message="Yakin ingin menghapus portofolio ini?"
          onConfirm={handleDeletePortfolio}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}
    </div>
  );
};

export default ProfilePortfolio;
