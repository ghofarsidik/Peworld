import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login.jsx';
import Home from './pages/home.jsx';
import Portofolio from './pages/profile/portofolio.jsx';
// import Experience from './pages/profile/experience.jsx';
import EditProfile from "./pages/profile/editprofile.jsx";
import Register from "./pages/auth/register.jsx";
import Worker from "./pages/auth/register/worker.jsx";
import Company from "./pages/auth/register/company.jsx";
import Resetpassword from './pages/auth/resetpassword.jsx';
import Landingpage from './pages/landingpage.jsx';
import Hire from './pages/hire.jsx';
import ProfileCompany from './pages/profile/profilecompany.jsx';
import EditProfileCompany from './pages/profile/editprofilecompany.jsx';
import Experience from './pages/profile/experience.jsx';


const App = () => {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Landingpage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/edit" element={<EditProfile />} />
    <Route path="/porto" element={<Portofolio />} />
    <Route path="/register" element={<Register />} />
      <Route path="/register/worker" element={<Worker />} /> 
      <Route path="/register/company" element={<Company />} />
      <Route path="/resetpassword" element={<Resetpassword />} /> 
      <Route path="/hire" element={<Hire/>} /> 
      <Route path="/profilecompany" element={<ProfileCompany />} />
      <Route path="/editprofilecompany" element={<EditProfileCompany />} />
      <Route path="/experience" element={<Experience />} />
      
    {/* </Route> */}
  </Routes>
</Router>
  );
}

export default App
