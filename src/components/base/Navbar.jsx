/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo/logo.png";
import imail from "../images/logo/mail.png";
import ibell from "../images/logo/bell.png";
import noPhoto from "../images/logo/user.svg";
import api from "../../configs/api";
import Notification from '../module/notification';

// eslint-disable-next-line react/prop-types
const Navbar = ({ className }) => {
  const [token, setToken] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isBellDropdownOpen, setBellDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [userPhoto, setUserPhoto] = useState(null);
  const [role, setRole] = useState(null);
  const [hire, setHire] = useState([]);

  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + " tahun yang lalu";
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " bulan yang lalu";
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + " hari yang lalu";
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " jam yang lalu";
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " menit yang lalu";
    return Math.floor(seconds) + " detik yang lalu";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (typeof token === "string") {
      setToken(token);
      // console.log(jwtDecode(token));
      setRole(role);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleBellDropdown = () => {
    setBellDropdownOpen(!isBellDropdownOpen);
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const url =
          role === "recruiter" ? "/recruiters/profile" : "/workers/profile";
        const response = await api.get(url);
        const data = response.data.data;
        setUserPhoto(data.photo);
        console.log("user data: ", data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    getProfile();
  }, [role]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    navigate("/");
  };

  useEffect(() => {
    const getHire = async () => {
      try {
        const url = role === "recruiter" ? "/hire/recruiters" : "/hire/workers";
        const response = await api.get(url);
        const data = response.data.data.slice(0, 3); //data di batasi 3 data
        console.log("hire data: ", data);

        setHire(data);
      } catch (error) {
        console.error("Error get hire data: ", error);
      }
    };
    getHire();
  }, [role]);

  return (
    <nav
      className={`flex w-full h-[100px] justify-between items-center mx-auto my-auto py-5 ${
        token ? "px-[30px] md:px-[150px]" : "px-[30px] md:px-[150px]"
      } bg-white ${className} shadow-lg`}
    >
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-32 h-9" />
      </NavLink>
      <ul className="flex items-center">
        {token ? (
          <>
            <li className="relative">
              <img
                className="m-2 md:m-5 h-6 w-6 cursor-pointer"
                src={ibell}
                alt=""
                onClick={toggleBellDropdown}
              />
              {isBellDropdownOpen && (
                <Notification hire={hire} role={role} timeSince={timeSince} />
              )}
            </li>
            <li>
              <img className="m-2 md:m-5 h-6 w-6" src={imail} alt="" />
            </li>
            <li className="relative">
              <img
                className="m-2 md:m-5 h-8 w-8 cursor-pointer object-cover rounded-full"
                src={userPhoto || noPhoto}
                alt=""
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <li>
                    <Link
                      to={
                        role === "recruiter"
                          ? "/profilecompany"
                          : `/profile`
                      }
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Profil
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">
                <button className="text-ungu-pj ml-4 rounded border-ungu-pj border-[1px] font-osans px-2 py-1 text-[14px]">
                  Masuk
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <button className="text-white ml-4 rounded border-ungu-pj bg-ungu-pj font-osans px-2 py-1 text-[14px]">
                  Daftar
                </button>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
