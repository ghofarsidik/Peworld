import Footer from '../components/base/Footer';
import Navbar from '../components/base/Navbar';
import Input from '../components/base/Input';
import Button from '../components/base/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../configs/api';
import HireCard from '../components/module/hireCard';

function Hire() {
    const { id } = useParams();
    const [worker, setWorker] = useState([]);
    const [skills, setSkills] = useState([]);
    const [formData, setFormData] = useState({
        message_purpose: '',
        name: '',
        email: '',
        phone: '',
        desciption: ''
    });

    useEffect(() => {
        const getWorkerData = async () => {
            try {
                const response = await api.get(`/workers/${id}`);
                const data = response.data.data;
                console.log(data);
                setWorker(data);
            } catch (error) {
                console.error("Failed to get worker data :", error);
            }
        };

        const getWorkerSkill = async () => {
            try {
                const response = await api.get(`/skills/${id}`);
                const data = response.data.data;
                console.log("skill worker: ", data);
                setSkills(data);
            } catch (error) {
                console.error("Error get worker skill: ", error);
            }
        };

        getWorkerData();
        getWorkerSkill();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await api.post('/hire', {
                ...formData,
                worker_id: worker.id
            });
            console.log("Hire response: ", response);
        } catch (error) {
            console.error("Failed to hire worker: ", error);
        }
    };

    return (
        <div className="relative w-screen mx-auto bg-abu-bg">
            <Navbar />
            <div className="relative flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0">
                <HireCard image={worker.photo} name={worker.name} job_desk={worker.job_desk} domicile={worker.domicile} workPlace={worker.workPlace} description={worker.description} skills={skills} email={worker.email} />

                <div className="w-full md:max-w-[754px] h-fit rounded flex flex-col p-[30px] mx-auto">
                    <p className='text-[32px] font-semibold'>Hubungi {worker.name}</p>
                    <p className='text-[18px] text-[#46505C]'> dan dapatkan Tenaga IT terbaik untuk anda.</p>
                    <Input label="Tujuan tentang pesan ini" type="text" name="message_purpose" placeholder="Projek" value={formData.tujuan} onChange={handleChange} />
                    <Input label="Nama lengkap" type="text" name="name" placeholder="Masukkan nama lengkap" value={formData.name} onChange={handleChange} />
                    <Input label="Email" type="email" name="email" placeholder="Masukkan email" value={formData.email} onChange={handleChange} />
                    <Input label="No handphone" type="text" name="phone" placeholder="Masukkan no handphone" value={formData.phone} onChange={handleChange} />
                    <Input label="Deskripsi" type="text" name="desciption" placeholder="Deskripsikan/jelaskan lebih detail tujuan anda" value={formData.description} onChange={handleChange} />
                    <Button label="hire" className="" onClick={handleSubmit} />
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Hire