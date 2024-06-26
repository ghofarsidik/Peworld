import { useEffect, useState } from "react";
import Input from "../../base/Input";
import Button from "../../base/Button";
import api from "../../../configs/api";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfilePortfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [expandedPortfolio, setExpandedPortfolio] = useState(null);
  const [PortofolioData, setPortofolioData] = useState({
    application: "",
    application_name: "",
    image: "",
    link_repository: "",
  });

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
      const response = await api.post("/portfolio", PortofolioData);
      console.log("Portofolio added:", response.data.data);
      alert("Portofolio berhasil ditambahkan");
      setPortfolios([...portfolios, response.data.data]);
      setPortofolioData({
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

  const handleDeletePortfolio = async (index) => {
    try {
      const deletedPortfolio = portfolios[index];
      await api.delete(`/portfolio/${deletedPortfolio.id}`);
      const updatedPortfolio = portfolios.filter((portfolio, i) => i !== index);
      setPortfolios(updatedPortfolio);
    } catch (error) {
      console.error("Error deleting portfolio:", error);
      alert("Gagal menghapus portofolio");
    }
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
          label="Tambah portofolio"
          className="border-orange-pj border"
          onClick={handleAddPortofolio}
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
                  <p className="flex">
                    <span>Link Repository:</span> {portfolio.link_repository}
                  </p>
                  <p className="flex">
                    <span>Tipe: </span> {portfolio.application}
                  </p>
                  {portfolio.image && (
                    <img
                      src={portfolio.image}
                      alt="Portfolio"
                      className="max-h-full max-w-full mt-2"
                    />
                  )}
                  <button
                    className="text-red-600 text-[12px]"
                    onClick={() => handleDeletePortfolio(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePortfolio;
