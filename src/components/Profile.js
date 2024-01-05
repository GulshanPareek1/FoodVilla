import { useState , useEffect } from "react";

const Profile = (props)=>{
    const [count , setCount] = useState(0);
    const [count2 , setCount2] = useState(0);
    useEffect(()=>{
        //API call
        //console.log("useEffect");
        // const timer = setInterval(()=>{
        //     console.log("Timer is start");
        // },1000);

        return ()=>{
            //clearInterval(timer); 
            //console.log("return"); 
        };

    },[]);
    
    //console.log("Render")
    return (
        
        <div>
            
            <h2>Profile Page </h2>
            {/* <h4>Name:{props.name}</h4> */}
            {/* <h4>Count:{count}</h4> */}
            {/* <button onClick={
                ()=>{
                    setCount(1);
                    setCount2(2);   
                }
            }>count</button> */}
        </div>
        
    );
};

export default Profile;