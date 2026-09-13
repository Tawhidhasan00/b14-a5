
import banner from '../assets/banner-stack.png'


const Hero = () => {
    return (
        <section className="container mx-auto  flex items-center justify-around">

            <div className='w-1/2 space-y-10 py-50'>
                <h1 className="text-6xl font-bold text-[#111827] "> 
                        Build Your Ideal
                    <br />
                    <span className='bg-clip-text'> Development Stack </span>
                </h1>
                <p className="mt-6 text-[18px] text-gray-500 w-120 max-w-lg leading-7"> 
                    Explore frontend, backend, database, and tooling options, compare them
                    side by side, and put together the stack that fits your next project.
                </p>

                <div className='flex gap-4 mt-8'>
                    <button className='border border-gray-500 px-6 py-3 rounded-[5px]'>
                        Explore Technologies
                    </button>
                    <button className='border border-gray-500 px-6 py-3 rounded-[5px]'>
                        Learn More
                    </button>
                </div>

            </div>


            <div >
                <img src={banner} alt="Banner" />
            </div>

        </section>
    );
};

export default Hero;