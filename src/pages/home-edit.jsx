import Navbaral from "../components/base/Navbaral"
import Tjbar from "../components/base/Tjbar"
import Footer from "../components/base/Footer"
import isearch from "../components/images/logo/search.png"
import imap from "../components/images/logo/map-pin.png"
import Louis from "../components/images/people/louis.png"

import Skillblock from "../components/base/Skillblock"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.users)

    const [workers, setWorkers] = useState([""]);

    const getWorkers = () => {
        api.get('/workers')
            .then((res) => {
                const workers = res.data.data
                setWorkers(workers)
            })
    }

    useEffect(() => {
        getWorkers()
    }, [])

    const [form, setForm] = useState({
        id: "",
        name: "",
        job_desk: "",
        domicile: "",
        skill: "",
    })


    
    return (
        <div className="max-w-[1440px] mx-auto h-[1440px]  bg-abu-bg" >
            <Navbaral />
            <Tjbar />
            <div className="">
                <div className="m-9 max-w-[1140px] h-[70px] font-Osans flex items-center justify-end px-1 py-[7px] bg-white mx-auto ">
                    <input className=" px-[18px]  h-[54px] flex-grow" type="text" name="" id="" placeholder="Search for any skill" />
                    <nav className="flex items-center">
                        <button className="w-14 h-14 flex items-center justify-center"><img className="w-6 h-6" src={isearch} alt="" /></button>
                        <button className="w-32 h-14 text-base font-semibold text-center text-abu-pj border-abu-pj border-l-2">Kategori</button>
                        <button className="w-[120px] h-[54px] mx-1 text-base font-semibold text-center text-white bg-ungu-pj rounded">Search</button>
                    </nav>
                </div>

                {setWorkers.map((item) => (

                    <div key={item.id} className="max-w-[1140px] h-[857px] mt-[50px] bg-gray-500 mx-auto flex flex-col font-Osans">
                        <div className="bg-white h-56 flex items-center">
                            <div><img className="h-[100px] w-[100px] mx-5" src={Louis} alt="" /></div>
                            <div className="leading-8 flex-grow">
                                <p className="font-semibold text-[22px]">{item.name}</p>
                                <p className="text-[14px] text-abu-pj">{item.job_desk}</p>
                                <p className="text-[14px] text-abu-pj flex items-center mb-2"><img className="w-4 h-4 mr-2" src={imap} alt="" />{item.domicile}</p>
                                <div className="flex space-x-3 flex-wrap ">
                                    <Skillblock>PHP</Skillblock>
                                    <Skillblock>Javascript</Skillblock>
                                    <Skillblock>HTML</Skillblock>
                                </div>
                            </div>
                            <Link to="/porto" > <div className="border rounded bg-ungu-pj text-white p-5 w-[148] h-14 mr-20 flex items-center">
                                Lihat Profile
                            </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 max-w-[1140px] mx-auto flex  space-x-[14px] items-center justify-center">
                <div className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"> &lt; </div>
                <div className="w-[58px] h-[58px] text-white bg-ungu-pj border border-abu-pj rounded flex items-center justify-center text-lg font-bold"> 1 </div>
                <div className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"> 2 </div>
                <div className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"> 3 </div>
                <div className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"> 4 </div>
                <div className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"> 5 </div>
                <div className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"> 6 </div>
                <div className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"> &gt; </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home