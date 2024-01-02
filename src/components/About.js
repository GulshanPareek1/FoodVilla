import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";
const About = () =>{
    return (
        <>
        <div>
            <h1>About us</h1>
            <p>This is the first attempt to learn react-router from ...</p>
        </div>
        <ProfileFunctional name={"Gulshan Pareek"}/>
        <Profile Name={"Gulshan but class wala"}/>
        
        
        </>
    );
};

export default About;