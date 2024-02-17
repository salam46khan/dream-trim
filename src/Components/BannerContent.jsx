import { Link } from "react-router-dom";

const BannerContent = ({feture}) => {
    return (
        <div>
            <div className='container mx-auto flex justify-center items-center h-full w-full text-white'>
                <div className=" my-auto text-center max-w-[700px] space-y-2 px-2">
                    <p className="text-xl font-normal">Welcome to</p>
                    <h1 className="text-5xl fontKanit text-red-500">Dream<span className="text-cyan-300">Trim</span></h1>
                    <h3 className="text-2xl font-semibold">{feture}...</h3>
                    <p className="text-base-200">
                    Transforming visions into stunning realities, Dream Trim is your gateway to impeccable style. Experience the magic of expert cuts and personalized elegance today.
                    </p>
                    <Link to={'/'}>
                        <button className="btn">Booking</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;