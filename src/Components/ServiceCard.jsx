import { Link } from 'react-router-dom';
import mod from '../assets/img/women-hair.jpg';
import MyButton from './MyButton';
import { FaEye, FaUsers } from "react-icons/fa6";
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
    const { price, view, beneficiary } = service
    return (
        <div className="max-w-sm rounded overflow-hidden bg-[#ffffff52] shadow-lg">
            <div className='max-h-[280px] overflow-hidden'>

                <img className="w-full min-h-max" src={mod} />
            </div>
            <div className="px-5 py-4 text-center relative">
                <div className='flex justify-between absolute w-full top-0 left-0 py-2 px-5'>
                    <div className='flex items-center gap-2'>
                        <FaEye className='inline-block'></FaEye>
                        <p>{view}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaUsers className='inline-block'></FaUsers>
                        <p>{beneficiary}</p>
                    </div>
                </div>
                <div className="font-bold text-xl mb-2"> name </div>
                <p className="text-gray-700 text-base">
                    Price: {price} BDT
                </p>
            </div>
            <div className='flex justify-between p-2'>
                <Link to={'/'}>
                    <MyButton action={'Details'}></MyButton>
                </Link>
                <Link to={'/'}>
                    <MyButton action={'Purchase'}></MyButton>
                </Link>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
};
export default ServiceCard;