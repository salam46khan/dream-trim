import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-teal-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to={'/'}>
                            <FaFacebook className="text-3xl"></FaFacebook>
                        </Link>
                        <Link to={'/'}>
                            <FaTwitter className="text-3xl"></FaTwitter>
                        </Link>
                        <Link to={'/'}>
                            <FaInstagram className="text-3xl"></FaInstagram>
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;