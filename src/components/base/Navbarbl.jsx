import { NavLink } from 'react-router-dom';
import logo from '../images/logo/logo.png';

const Navbarbl = () => {

  return (
      <nav className='flex max-w-[1440px] h-[100px] justify-between items-center mx-auto my-auto bg-white py-5'>
        <img src={logo} alt="logo" className=' mr-[30px] md:ml-[150px] w-32 h-9' />
        <ul className='flex items-center mr-[30px] md:mr-[150px]'>
        <li><NavLink to="/login"><button className='text-ungu-pj ml-4 rounded border-ungu-pj border-[1px] font-osans px-2 py-1 text-[14px]'>Masuk</button></NavLink></li> 
        <li><NavLink to="/register"><button className='text-white ml-4 rounded border-ungu-pj bg-ungu-pj font-osans px-2 py-1 text-[14px]'>Daftar</button></NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbarbl
