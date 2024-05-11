import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '/public/logo.png'
import { LuUser2 } from "react-icons/lu";
import './Navbar.css'
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
    </>

    return (
        <div className={`${scroll ? ' sticky top-0 left-0 shadow-lg bg-slate-50' : 'text-white'}  top-0 left-0 w-full absolute z-50 navbar`}>
            <div className="container mx-auto flex gap-3 items-center ">
                <div className="p-1">
                    <Link to={'/'}>
                        <img className="h-12 w-12" src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex-1 flex gap-3 justify-end items-center" id="nav">
                    <div className="hidden md:block">
                        <div className="menu menu-horizontal navItem" >
                            {navlinks}
                        </div>
                    </div>
                    <div>
                        <Link to={'/login'}>
                            <button className="h-12 w-12 flex justify-center items-center rounded-full bg-orange-500">
                                <LuUser2 className="text-2xl" />
                            </button>
                        </Link>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={()=>setNavOpen(!navOpen)} className="h-12 w-12 flex justify-center items-center rounded-full bg-orange-500">
                            <FaBarsStaggered className="text-2xl" />
                        </button>
                        <div className={`menu menu-vertical navItem absolute duration-300 w-full right-0 ${scroll ? 'bg-slate-50': 'text-white'} ${navOpen ? 'top-16' : '-top-[500px]'}`}>
                            {navlinks}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;