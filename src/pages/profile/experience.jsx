import { useEffect, useState } from "react";
import ExperienceCard from "../../components/module/experienceCard";
import api from "../../configs/api";

// eslint-disable-next-line react/prop-types
const Experience = ({id}) => {
const [experiences, setExperiences] = useState([])

useEffect(()=> {
    const getExperiences = async () => {
        try{
            const response = await api.get(`/experience/${id}`)
            const data = response.data.data;
            console.log("isi experience: ", data);

            setExperiences(data)
        } catch(err){
            console.log("Error get experience: ", err)
        }
    }

    getExperiences();
}, [id])

  return (
    <div className="flex flex-col  ">
        {experiences.length > 0 ? 
        (experiences.map((item, index)=>(
        <ExperienceCard 
        key={index} 
        image={item.image} 
        position={item.position} 
        company={item.company} 
        work_month={item.work_month} 
        work_year={item.work_year} 
        description={item.description} />))) 
        : 
        "belum ada input pengalaman" }
      
    </div>
  );
};

export default Experience;
