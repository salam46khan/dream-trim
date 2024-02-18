import { Link } from 'react-router-dom';
import man from '../../assets/img/man-cut.jpg'
import woman from '../../assets/img/women-hair.jpg'
import MyButton from '../../Components/MyButton';
const AboutSec = () => {
    return (
        <div className="py-16 px-2">
            <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-5">
                <div className="w-full md:w-1/2">
                    <div className=' w-full relative'>
                        <img className='w-full pb-20 pr-20' src={man} alt="" />
                        <img className='absolute bottom-0 right-0 w-4/12 border-8 rounded border-red-400' src={woman} alt="" />
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex'>
                    <div className='self-center space-y-3'>
                        <p className='font-bold text-red-400 text-xl'>About us</p>
                        <h3 className='font-extrabold text-4xl w-4/5'>We are Dream Trim, a premier destination for exceptional haircuts and styling experiences.</h3>
                        <p className='pb-3'>At Dream Trim, we believe in the transformative power of a great haircut. With a team of skilled stylists dedicated to excellence, we strive to make every visit an unforgettable experience. From precision cuts to personalized consultations, we are here to bring your hair dreams to life. Step into our salon and discover a world of creativity, passion, and unparalleled expertise. Welcome to Dream Trim, where every visit promises perfection.</p>
                        <Link to={'/about'}>
                            <MyButton action={'Learn More'}></MyButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;