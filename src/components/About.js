import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";
// not using as of now bcz of classbased component 
// functional component

// use class based component for about component 
class About extends Component{
    constructor(props){
        super(props);
        // console.log("parent-constructor");
    }
    componentDidMount(){
        // this.timer = setInterval(()=>{
        //     console.log("Namasate Interval");
        // },1000);
        // console.log("parent-componentDidMount");
    }
    componentWillUnmount(){
         clearInterval(this.timer);
        //console.log("componentWillUnmount-Called")
    }
render()
{
    // console.log("parent-render");
    return (
        <>
        <div>
            <h1>About us</h1>
            <UserContext.Consumer>
                {({user})=>(
                    <h4 className="font-bold text-lg p-7">{user.name}-{user.email}</h4>
                )}
            </UserContext.Consumer>
            <p>This is the first attempt to learn react-router from ...</p>
        </div>
        <ProfileFunctional name={"Gulshan Pareek"}/>
        <Profile Name={"Gulshan"}/>
        {/* <Profile Name={"Rohit bhai"}/>        */}
        
        </>
    );
}
}


export default About;

/*
    parent constructor 
    parent render 
        first child constructor 
        first child render 
        second child constructor 
        second child render 

        updates the DOM for childrens 
        
        first child componentDidMount
        second child componentDidMount
    
    parent componentDidMount




*/