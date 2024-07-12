import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login.jsx';
import Home from './pages/home.jsx';
// import Portofolio from './pages/profile/portofolio.jsx';
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
import Profile from './pages/profile/profile.jsx';
import HireList from './pages/hireList.jsx';
import PublicRoute from './pages/routerhelper/PublicRouter.jsx';
import PrivateRoute from './pages/routerhelper/PrivateRoute.jsx';
import Unauthorized from './pages/routerhelper/UnauthorizedRoute.jsx';

// import Home2 from './pages/home-coba.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<PublicRoute restricted={true} component={Login} />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/home" element={<PrivateRoute component={Home} role={['worker', 'recruiter']} />} />
        <Route path="/edit" element={<PrivateRoute component={EditProfile} role={['worker']} />} />
        {/* <Route path="/porto" element={<PrivateRoute component={Portofolio} role={['worker']} />} /> */}
        <Route path="/register" element={<PublicRoute restricted={true} component={Register} />} />
        <Route path="/register/worker" element={<Worker />} />
        <Route path="/register/company" element={<Company />} />
        <Route path="/resetpassword" element={<PublicRoute restricted={true} component={Resetpassword} />} />
        <Route path="/hire" element={<PrivateRoute component={Hire} role={['recruiter']} />} />
        <Route path="/profilecompany" element={<PrivateRoute component={ProfileCompany} role={['recruiter']} />} />
        <Route path="/editprofilecompany" element={<PrivateRoute component={EditProfileCompany} role={['recruiter']} />} />
        {/* <Route path="/profile/:id" element={<Profile />} /> */}
        <Route path="/profile/:id" element={<PrivateRoute component={Profile} role={['worker', 'recruiter']} />} />
        <Route path="/profile" element={<PrivateRoute component={Profile} role={['worker', 'recruiter']} />} />
        <Route path="/hire/:id" element={<PrivateRoute component={Hire} role={['recruiter']} />} />
        <Route path="/hirelist" element={<PrivateRoute component={HireList} role={['worker', 'recruiter']} />} />
        {/* <Route path="/home2" element={<Home2 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
