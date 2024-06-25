import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo/logo.png';
import imail from '../images/logo/mail.png';
import ibell from '../images/logo/bell.png';
import iprofil from '../images/logo/profil.png';
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react/prop-types
const Navbar = ({ className }) => {
  const [token, setToken] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Coba mengambil token dari localStorage saat komponen di-render
    const token = localStorage.getItem('token');
    if (typeof token === 'string') {
        setToken(token);
        console.log(jwtDecode(token));
    }
}, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Logika untuk menghapus token
    localStorage.removeItem('token');
    setToken(null);
    // Redirect ke halaman login setelah logout
    navigate('/');
  };

  return (
    <nav className={`flex max-w-[1440px] h-[100px] justify-between items-center mx-auto my-auto py-5 ${token ? 'px-[150px]' : 'px-[30px] md:px-[150px]'} bg-white ${className} shadow-lg`}>
      <NavLink to="/home"><img src={logo} alt="logo" className='w-32 h-9' /></NavLink>
      <ul className='flex items-center'>
        {token ? (
          <>
            <li><img className='m-5 h-6 w-6' src={ibell} alt="" /></li>
            <li><img className='m-5 h-6 w-6' src={imail} alt="" /></li>
            <li className='relative'>
              <img className='m-5 h-8 w-8 cursor-pointer' src={iprofil} alt="" onClick={toggleDropdown} />
              {isDropdownOpen && (
                <ul className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md'>
                  <li><Link to="/edit" className='block px-4 py-2 hover:bg-gray-200'>Profil</Link></li>
                  <li><button onClick={handleLogout} className='block w-full text-left px-4 py-2 hover:bg-gray-200'>Log Out</button></li>
                </ul>
              )}
            </li>
          </>
        ) : (
          <>
            <li><NavLink to="/login"><button className='text-ungu-pj ml-4 rounded border-ungu-pj border-[1px] font-osans px-2 py-1 text-[14px]'>Masuk</button></NavLink></li>
            <li><NavLink to="/register"><button className='text-white ml-4 rounded border-ungu-pj bg-ungu-pj font-osans px-2 py-1 text-[14px]'>Daftar</button></NavLink></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
