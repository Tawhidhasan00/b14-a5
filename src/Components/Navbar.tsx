
import Logo from '../assets/logo-text.png'


const Navbar = () => {
    return (
        <header className='sticky top-0 z-50 font-sans font-semibold bg-white border-b border-b-gray-200'>

                <nav className="container mx-auto flex justify-between px-5 py-4 ">

                        <div className='flex items-center gap-2'>
                            <img src={Logo} alt="" />
                        </div>
                        
                        <ul className='flex items-center gap-8'>
                                <a className="text-pink-500">Home</a>
                                <a>Technologies</a>
                                <a>Projects</a>
                                <a>About</a>
                                <a>Contact</a>
                        </ul>

                        <div className=' flex items-center gap-3'>
                            <button >Sign in</button>
                            <button className='text-white bg-[#D91B7E]
                                                px-5 py-2
                                                rounded-full'>Sign up</button>
                        </div>
                </nav>

        </header>
    );
};

export default Navbar;