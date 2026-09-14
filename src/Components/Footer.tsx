
import Logo from '../assets/logo-text.png'


const Footer = () => {
    return (
        <footer className="border-t border-t-gray-300 mt-20">
            <div className='container mx-auto grid grid-cols-[2fr_1fr_1fr_1fr] px-5 py-14 '>
                
                <div  className='mt-6'>
                    <img src={Logo} alt="Logo" className='w-30' />
                    <p className='text-gray-400 mt-6 leading-6 w-120'> 
                        Curated tools, technologies, and resources for developers building modern software. </p>
                    <div className='flex gap-4 mt-5'>
                        <span>GitHub</span>
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold">Product</h3>
                    <ul className='mt-4 space-y-3 text-[18px] text-gray-500'>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold">Company</h3>
                    <ul className='mt-4 space-y-3 text-sm text-gray-500'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold">Legal</h3>
                    <ul className='mt-4 space-y-3 text-sm text-gray-500'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

            </div>

            <div className='border-t container mx-auto px-5 py-5
                            flex justify-between
                            text-sm text-gray-200'>
                <p className='text-[#aab1bf]'>© 2026 Dev Stack. All rights reserved.</p>
                
                <div className="flex gap-5">
                    <span className='text-[#aab1bf]'>Privacy</span>
                    <span className='text-[#aab1bf]'>Terms</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;