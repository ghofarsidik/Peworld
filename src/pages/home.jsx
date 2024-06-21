import Navbaral from "../components/base/Navbaral"
import Tjbar from "../components/base/Tjbar"
import Footer from "../components/base/Footer"
import isearch from "../components/images/logo/search.png"
import { useEffect, useState } from "react"
import api from "../configs/api"
import Card from "../components/base/Card"
import PaginationButton from "../components/base/PaginationButton"

function Home() {
    const [profile, setProfile] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const getProfile = async (page) => {
        try {
            const response = await api.get(`workers/?page=${page}`)
            const data = response.data.data
            const pagination = response.data.pagination
            console.log("data pagination: ", data);
            
            setProfile(data)
            setTotalPages(pagination.totalPage)
        } catch (err) {
            console.log("Error get profile data: ", err)
        }
    }

    useEffect(() => {
        getProfile(currentPage)
    }, [currentPage])

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    return (
        <div className="max-w-[1440px] mx-auto h-[1440px] bg-abu-bg">
            <Navbaral />
            <Tjbar />
            <div className="">
                <div className="m-9 max-w-[1140px] h-[70px] font-Osans flex items-center justify-end px-1 py-[7px] bg-white mx-auto ">
                    <input className="px-[18px] h-[54px] flex-grow" type="text" placeholder="Search for any skill" />
                    <nav className="flex items-center">
                        <button className="w-14 h-14 flex items-center justify-center"><img className="w-6 h-6" src={isearch} alt="" /></button>
                        <button className="w-32 h-14 text-base font-semibold text-center text-abu-pj border-abu-pj border-l-2">Kategori</button>
                        <button className="w-[120px] h-[54px] mx-1 text-base font-semibold text-center text-white bg-ungu-pj rounded">Search</button>
                    </nav>
                </div>

                <div className="max-w-[1140px] h-[857px] mt-[50px] bg-gray-500 mx-auto flex flex-col font-Osans">
                  {profile.map((item, index) => (
                    <Card key={index} id={item.id} image={item.photo} name={item.name} job={item.job_desk} domicile={item.domicile} skills={item.skills} />
                  ))}
                </div>
            </div>

            <PaginationButton 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
            />

            <Footer />
        </div>
    )
}


export default Home