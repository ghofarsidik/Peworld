import Logo from "../images/logo/whitelogo.png";

function Footer() {
    return (
        <div className='mt-[70px] w-screen h-[401px] px-[30px] lg:px-[150px] mx-auto bg-ungu-pj font-Osans text-white flex flex-col'>
            <img className="w-[178px] h-[50px] mt-[69px]" src={Logo} alt="" />
            <p className="h-[181px] w-full max-w-[381px] flex items-center text-lg ">Peworld dioperasikan oleh Peworld Foundation, sebuah organisasi yang membantu dalam menyalurkan tenaga IT terbaik</p>
            <div className="h-[100px] border-t border-white flex justify-between items-center text-lg flex-col md:flex-row">
                <p>2020 Pewworld. All right reserved</p>
                <div className="flex space-x-[79px]">
                    <a href="https://wa.me/6283804648095"><p>Telepon</p></a>
                    <a href="mailto:peworld.id@gmail.com"><p>Email</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer