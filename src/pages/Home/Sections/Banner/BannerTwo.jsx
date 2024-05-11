import { TypeAnimation } from 'react-type-animation';
import './BannerTwo.css'
import { Link } from 'react-router-dom';
const BannerTwo = () => {
    return (
        <div className="bannerTwo p-3">
            <div className="container mx-auto h-full flex items-end md:items-center py-8 ">
                <div className='w-full md:w-1/2'>
                    <p className=' inline-block bg-orange-500 fontMainTitle p-2 text-slate-600 md:text-xl'>Discover Your Dream Look at</p>
                    <h2 className='font-bold md:text-7xl text-4xl text-white uppercase fontMainTitle'>
                        Dream Trim
                    </h2>

                    <TypeAnimation
                        sequence={[
                            'Where Your Hair Dreams Come True',
                            1500,
                            'Where Your Hair Dreams Find Their Perfect Match',
                            1500,
                            'Where Your Hair Dreams Unfold with Precision',
                            1500
                        ]}
                        wrapper="span"
                        speed={50}

                        repeat={Infinity}
                        className='md:text-2xl text-xl font-semibold text-orange-500 fontSubTitle'
                    />

                    <p className='py-3 text-slate-400 md:text-xl text-xs'>
                        At Dream Trim, we're dedicated to making your hair dreams a reality. Our expert stylists are here to transform your look and boost your confidence
                    </p>
                    <Link to={'/'}>
                        <button className='bg-orange-500 py-2 px-4 rounded-md text-slate-300 font-semibold duration-200 hover:text-slate-100 hover:bg-orange-600 shadow-black shadow hover:shadow-none'>
                            Booking Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerTwo;