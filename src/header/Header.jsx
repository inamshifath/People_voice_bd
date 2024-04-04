import { NavLink } from "react-router-dom";
import './Header.css'
import { ImFacebook } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoGoogleplus } from "react-icons/io";


const Header = () => {
    const navLinks = <>
        <li className="text-white" ><NavLink to="/" >Home</NavLink></li>
        <li className="text-white"><NavLink to="/National" >National</NavLink> </li>
        <li className="text-white"><NavLink to="/InterNational" >International</NavLink> </li>
        <li className="text-white"><NavLink to="/Education" >Educationl</NavLink> </li>
        <li className="text-white"><NavLink to="/Sports" >Sports</NavLink> </li>
        <li className="text-white"><NavLink to="/Tech" >Tech</NavLink> </li>
        <li className="text-white"><NavLink to="/Agriculture" >Agriculture</NavLink> </li>
    </>
    return (
    <div className="container mx-auto">
        <div className="flex justify-between mt-5 mb-5">
            <img src="/src/assets/1.png" alt="" />
            <img src="/src/assets/2.png" alt="" />
        </div>

        <div className="bg-black py-2">
            <ul className="lg:flex space-x-6 font-bold text-3xl w-fit mx-auto">
                {navLinks}
            </ul>
        </div>
        <div className="bg-red-600 py-1 mt-8">
            <div className="flex items-center ">
                <h1 className="text-3xl font-semibold text-white mr-8 ml-8  w-[15%]">Top News: </h1>
                <p className="bg-white py-3 px-4 w-full text-2xl"><marquee> Under-construction building in Dhaka’s Banani catches fire</marquee></p>
                <div className="flex text-2xl gap-6 mr-20 ml-2 text-white">
                <ImFacebook />
                <IoLogoYoutube />
                <IoLogoGoogleplus />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;