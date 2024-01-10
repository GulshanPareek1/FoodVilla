import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer= () =>{

    const {user} = useContext(UserContext);
    return <div className="font-semibold p-10 m-10 "><h4> This website is developed by {user.name} - {user.email} </h4></div>;
};

export default Footer;