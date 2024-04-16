import logo from '../images/logo/logo.png';
import imail from '../images/logo/mail.png';
import ibell from '../images/logo/bell.png';
import iprofil from '../images/logo/profil.png'

const Navbaral = () => {

  return (
      <nav className='flex max-w-[1440px] h-[100px] justify-between items-center mx-auto my-auto  py-5 px-[150px] bg-white '>
        <img src={logo} alt="logo" className='w-32 h-9' />
        <ul className='flex items-center'>
        <li><img className='m-5 h-6 w-6' src={ibell} alt="" /></li>
        <li><img className='m-5 h-6 w-6' src={imail} alt="" /></li>
        <li><img className='m-5 h-8 w-8' src={iprofil} alt="" /></li>
        </ul>
      </nav>
  )
}

export default Navbaral