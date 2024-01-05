import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";
import {Component} from "react";

// not using as of now bcz of classbased component 
// functional component
const About2 = () =>{
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