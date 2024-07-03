/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../components/base/Navbar";
import Tjbar from "../components/base/Tjbar";
import Footer from "../components/base/Footer";
import { useEffect, useState } from "react";
import api from "../configs/api";
import Card from "../components/base/Card";
import PaginationButton from "../components/base/PaginationButton";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../components/module/CardSkeleton";
import Search from "../components/module/search";

function Home() {
  const [profile, setProfile] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("");
  const [sortBy, setSortBy] = useState("ASC");
  const [loading, setLoading] = useState(true);

  const getProfile = async (page) => {
    try {
      setLoading(true);
      const response = await api.get(
        `workers/?search=${searchInput}&sort=${sort}&sortBy=${sortBy}&page=${page}`
      );
      const data = response.data.data;
      const pagination = response.data.pagination;
      console.log("data pagination: ", data);

      setProfile(data);
      setTotalPages(pagination.totalPage);
    } catch (err) {
      console.log("Error get profile data: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile(currentPage);
  }, [currentPage, searchInput, sort, sortBy]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearch = () => {
    setCurrentPage(1);
    getProfile(1);
  };

  const handleSortChange = (sortOption, sortDirection = "ASC") => {
    setSort(sortOption);
    setSortBy(sortDirection);
    setCurrentPage(1);
  };

  return (
    <div className="w-screen mx-auto h-[1440px]">
      <Navbar />
      <Tjbar />
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        handleSortChange={handleSortChange}
      />
      <div className="max-w-[1140px] h-fit mt-[50px] bg-gray-500 mx-auto flex flex-col font-Osans">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        ) : profile.length > 0 ? (
          profile.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              image={item.photo}
              name={item.name}
              job={item.job_desk}
              domicile={item.domicile}
              skills={item.skills}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-56 text-white">
            Hasil pencarian untuk {searchInput} tidak ditemukan.
          </div>
        )}
      </div>
      <PaginationButton
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}

export default Home;
