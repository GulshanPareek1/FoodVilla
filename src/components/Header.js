import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import {Link} from "react-router-dom";
import Auth from "./Auth";
import useOnline from "../utils/useOnline";

const Title = () =>(
    <a href="/">
    <img 
    className="logo"
    src={Logo} alt="logo" />
    </a>
    );


const HeaderComponent = () =>{
    const [isLoggedin , setIsLoggedin] = useState(true);

    const isOnline = useOnline();
        return (
            <div className="header">
            <Title />
            <div className="nav-items" >
                <ul>
                    
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    
                    
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                    <Link to="/instamart">Instamart</Link>
                    </li>
                    <li>Cart</li>
                    <li>{isOnline? "✅" : "🔴"}</li>
                    <li>
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