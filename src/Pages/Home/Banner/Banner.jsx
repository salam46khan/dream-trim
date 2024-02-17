
import Slider from "react-slick";
import banner1 from '../../../assets/img/hair-banner-1.jpg'
import banner2 from '../../../assets/img/hair-banner-2.png'
import banner3 from '../../../assets/img/hair-banner-3.png'
import banner4 from '../../../assets/img/hair-banner-4.jpg'
import banner5 from '../../../assets/img/hair-banner-5.jpg'
import BannerContent from "../../../Components/BannerContent";

const Banner = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: false
    };
    return (
        <div className=" w-full md:h-[660px] overflow-hidden h-[500px] bg-red-200">
            <div className="slider-container">
                <Slider {...settings} className="">
                    <div className="relative">
                        <img className="md:w-full w-auto h-[500px] md:h-[730px]" src={banner1} alt="" />
                        <div className="absolute top-0 flex justify-center left-0 h-full w-full bg-gradient-to-r from-[#000000b2] to-[#000000a0]">
                            <BannerContent
                                feture={'where your hair dreams become reality'}
                            ></BannerContent>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <img className="md:w-full w-auto h-[500px] md:h-[730px]" src={banner2} alt="" />
                        <div className="absolute top-0 flex justify-center left-0 h-full w-full bg-gradient-to-r from-[#000000b2] to-[#000000a0]">
                            <BannerContent
                                feture={'Where Every Strand Finds its Perfect Shape'}
                            ></BannerContent>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <img className="md:w-full w-auto h-[500px] md:h-[730px]" src={banner3} alt="" />
                        <div className="absolute top-0 flex justify-center left-0 h-full w-full bg-gradient-to-r from-[#000000b2] to-[#000000a0]">
                            <BannerContent
                                feture={'Crafting Styles That Reflect Your Unique Vision'}
                            ></BannerContent>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <img className="md:w-full w-auto h-[500px] md:h-[730px]" src={banner4} alt="" />
                        <div className="absolute top-0 flex justify-center left-0 h-full w-full bg-gradient-to-r from-[#000000b2] to-[#000000a0]">
                            <BannerContent
                                feture={'Transforming Your Look into a Work of Art'}
                            ></BannerContent>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <img className="md:w-full w-auto h-[500px] md:h-[730px]" src={banner5} alt="" />
                        <div className="absolute top-0 flex justify-center left-0 h-full w-full bg-gradient-to-r from-[#000000b2] to-[#000000a0]">
                            <BannerContent
                                feture={'Your Destination for Flawless Cuts and Dreamy Styles'}
                            ></BannerContent>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Banner;