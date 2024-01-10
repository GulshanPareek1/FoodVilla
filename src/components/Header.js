import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import {Link} from "react-router-dom";
import Auth from "./Auth";
import useOnline from "../utils/useOnline";

const Title = () =>(
    <a href="/">
    <img 
    className="h-28 p-2"
    src={Logo} alt="logo" />
    </a>
    );


const HeaderComponent = () =>{
    const [isLoggedin , setIsLoggedin] = useState(true);

    const isOnline = useOnline();
        return (
            <div className="flex justify-between bg-gray-100 shadow-lg">
            <Title />
            <div className="nav-items" >
                <ul className="flex py-10">
                    <li className="px-2">
                    <Link to="/">Home</Link>
                    </li>
                    
                    
                    <li className="px-2">
                    <Link to="/about">About</Link>
                    </li>
                    
                    <li className="px-2">
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2">
                    <Link to="/instamart">Instamart</Link>
                    </li>
                    <li className="px-2">Cart</li>
                    <li className="px-2">{isOnline? "✅" : "🔴"}</li>
                    <li className="px-2">
                        <Link to="/login">
                                {  isLoggedin ? (
                                <button className="logout-btn"
                                onClick={()=>setIsLoggedin(false)}>
                                    logout
                                </button>
                                )
                                : (
                                    <button className="login-btn" onClick={()=> setIsLoggedin(true)}>
                                        login
                                    </button>
                                )
                                }
                        </Link>
                    </li>
                </ul>
            </div>

            </div>
        );
    };

export default HeaderComponent;