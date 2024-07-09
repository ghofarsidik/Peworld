import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import api from '../../configs/api';
import ProfileCard from '../../components/module/editProfile/profileCard';
import EditProfileData from '../../components/module/editProfile/profileData';
import ProfileSkillList from '../../components/module/editProfile/profileSkillList';
import ProfileExperience from '../../components/module/editProfile/profileExperience';
import Loading from '../../components/base/Loading';
import ProfilePortofolio from '../../components/module/editProfile/profilePortofolio';

const EditProfile = () => {
  const [user, setUser] = useState();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    job_desk: '',
    domicile: '',
    workplace: '',
    description: '',
  });
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true); // State untuk melacak status pemuatan
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get('/workers/profile');
        const data = response.data.data;
        setUser(data);
        console.log("user data: ", data);
        setForm({
          name: data.name || '',
          job_desk: data.job_desk || '',
          domicile: data.domicile || '',
          workplace: data.workplace || '',
          description: data.description || '',
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    const getSkills = async () => {
      try {
        const response = await api.get('/skills');
        setSkills(response.data.data);
        console.log('skill :', response.data.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    const loadData = async () => {
      await getProfile();
      await getSkills();
      setLoading(false); // Set loading ke false setelah data dimuat
    };

    loadData();
  }, []);

  const handleEdit = async () => {
    try {
      const response = await api.put("/workers/profile", {
        name: form.name,
        job_desk: form.job_desk,
        domicile: form.domicile,
        workplace: form.workplace,
        description: form.description,
      });

      console.log(response.data);
      alert('Selamat berhasil mengedit profil');
      navigate(`/profile`); 
    } catch (error) {
      console.error('Error editing profile:', error);
      alert('Anda gagal mengedit profil');
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSkill = async (newSkill) => {
    try {
        const response = await api.post("/skills", { skill_name: newSkill }); 
        console.log("Skill added:", response.data.data);
        alert("Keterampilan berhasil ditambahkan");
        setSkills([...skills, response.data.data.skill_name]);
    } catch (error) {
        console.error("Error adding skill:", error);
        alert("Gagal menambahkan keterampilan");
    }
  };

  const handleDeleteSkill = async (skill_id) => {
    try {
      await api.delete(`/skills/${skill_id}`);
      setSkills(skills.filter(skill => skill.id !== skill_id));
      console.log(`Skill with id ${skill_id} deleted successfully`);
      alert("Keterampilan berhasil dihapus");
    } catch (error) {
      console.error(`Failed to delete skill with id ${skill_id}:`, error);
      alert("Gagal menghapus keterampilan");
    }
  };

  if (loading) {
    return (
      <Loading loading={loading} />
    );
  }

  return (
    <div className="w-screen mx-auto bg-abu-bg -z-20">
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[70px] space-y-[30px] md:space-y-0 md:space-x-[30px] font-Osans p-[30px] md:p-0">
        <ProfileCard user={user} skills={skills} onSave={handleEdit} />

        <div className="w-full md:max-w-[754px] h-fit mx-auto">
          <EditProfileData form={form} handleChange={handleChange} />

          <ProfileSkillList skills={skills} onAddSkill={handleAddSkill} handleDelete={handleDeleteSkill} />

          <ProfileExperience />

          <ProfilePortofolio />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
