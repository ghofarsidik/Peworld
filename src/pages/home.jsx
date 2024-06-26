import Navbar from "../components/base/Navbar";
import Tjbar from "../components/base/Tjbar";
import Footer from "../components/base/Footer";
import isearch from "../components/images/logo/search.png";
import { useEffect, useState } from "react";
import api from "../configs/api";
import Card from "../components/base/Card";
import PaginationButton from "../components/base/PaginationButton";

const sortOptions = [
    { label: "Name A-Z", value: "name", sortBy: "ASC" },
    { label: "Name Z-A", value: "name", sortBy: "DESC" },
    { label: "Domicile", value: "domicile", sortBy: "ASC" }
];

function Home() {
    const [profile, setProfile] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchInput, setSearchInput] = useState("");
    const [sort, setSort] = useState("");
    const [sortBy, setSortBy] = useState("ASC");
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

    const getProfile = async (page) => {
        try {
            const response = await api.get(`workers/?search=${searchInput}&sort=${sort}&sortBy=${sortBy}&page=${page}`);
            const data = response.data.data;
            const pagination = response.data.pagination;
            console.log("data pagination: ", data);

            setProfile(data);
            setTotalPages(pagination.totalPage);
        } catch (err) {
            console.log("Error get profile data: ", err);
        }
    };

    useEffect(() => {
        getProfile(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="max-w-[1440px] mx-auto h-[1440px]">
            <Navbar />
            <Tjbar />
            <div className="">
                <div className="m-9 max-w-[1140px] h-[70px] font-Osans flex items-center justify-end px-1 py-[7px] bg-white mx-auto shadow-xl">
                    <input
                        className="px-[18px] h-[54px] flex-grow"
                        type="text"
                        placeholder="Pencarian"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <div className="flex justify-end mr-9 max-w-[1140px] mx-auto">
                    <div className="relative">
                        <button
                            className="w-32 h-14 text-base font-semibold text-center text-abu-pj border-abu-pj border-l-2"
                            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                        >
                            Sort
                        </button>
                        {isSortDropdownOpen && (
                            <ul className="absolute bg-white border border-gray-300 mt-1 w-32 z-10">
                                {sortOptions.map((sortOption) => (
                                    <li
                                        key={sortOption.label}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                        onClick={() => {
                                            handleSortChange(sortOption.value, sortOption.sortBy);
                                            setIsSortDropdownOpen(false);
                                        }}
                                    >
                                        {sortOption.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                    <div className="flex items-center">
                        <button
                            className="w-14 h-14 flex items-center justify-center"
                            onClick={handleSearch}
                        >
                            <img className="w-6 h-6" src={isearch} alt="search" />
                        </button>
                        <button
                            className="w-[120px] h-[54px] mx-1 text-base font-semibold text-center text-white bg-ungu-pj rounded"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                

                <div className="max-w-[1140px] h-fit mt-[50px] bg-gray-500 mx-auto flex flex-col font-Osans">
                    {profile.length > 0 ? (
                        profile.map((item, index) => (
                            <Card key={index} id={item.id} image={item.photo} name={item.name} job={item.job_desk} domicile={item.domicile} skills={item.skills} />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-56 text-white">
                            Hasil pencarian untuk {searchInput} tidak ditemukan.
                        </div>
                    )}
                </div>
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
