// import { Link } from 'react-router-dom';
// import bannerImg from '../../../assets/banner.png'
// import { TypeAnimation } from 'react-type-animation';
// const Banner = () => {
//     return (
//         <div className="min-h-[600px] w-full bg-slate-700 relative">
//             <div className="container h-full relative  mx-auto flex flex-col md:flex-row justify-between items-center">
//                 <div className="w-full md:w-1/2 h-[600px] md:h-auto">
//                     <div className='relative z-10 h-full p-3 flex justify-center items-center'>
//                         <div className='w-full'>
//                             <p className=' inline-block bg-orange-500 fontMainTitle py-2 px-7 text-slate-600 text-xl'>Discover Your Dream Look at</p>
//                             <h2 className='font-bold text-7xl text-white uppercase fontMainTitle'>
//                                 Dream Trim
//                             </h2>
                            
//                             <TypeAnimation
//                                 sequence={[
//                                     'Where Your Hair Dreams Come True',
//                                     1000,
//                                     'Where Your Hair Dreams Find Their Perfect Match',
//                                     1000,
//                                     'Where Your Hair Dreams Unfold with Precision',
//                                     1000
//                                 ]}
//                                 wrapper="span"
//                                 speed={50}
                                
//                                 repeat={Infinity}
//                                 className='text-2xl font-semibold text-orange-500 fontSubTitle'
//                             />

//                             <p className='py-3 text-slate-400'>
//                                 At Dream Trim, we're dedicated to making your hair dreams a reality. Our expert stylists are here to transform your look and boost your confidence
//                             </p>
//                             <Link to={'/'}>
//                                 <button className='bg-orange-500 py-2 px-4 rounded-md text-slate-300 font-semibold duration-200 hover:text-slate-100 hover:bg-orange-600 shadow-black shadow hover:shadow-none'>
//                                     Booking Now
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                     {/* <img src={name} alt="" /> */}
//                 </div>
//                 <div className="w-full absolute left-0 top-0 md:relative h-full md:w-1/2 ">
//                     <div className='w-full h-full'>
//                         <div className='md:hidden absolute top-0 left-0 h-full w-full bg-black/50'></div>
//                         <img className="md:h-[600px] h-full w-full md:w-auto object-cover" src={bannerImg} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;