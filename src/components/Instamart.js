import { useState } from "react";

const Section = ({title , description , isVisible ,setIsVisible}) =>{
    //const [isVisible , setIsVisible] = useState(false);
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="text-xl font-bold">{title}</h3>          
            {isVisible ? (<div>
            <button 
            onClick={()=>{setIsVisible(false)}}
            className="underline cursor-pointer mx-1">
                Hide
            </button>
            <p>{description}</p>
            </div>
            )
            : (
            <button 
            onClick={()=>{setIsVisible(true)}}
            className="underline cursor-pointer">
                Show
            </button>)
            }

            {/* {isVisible && } */}
        </div>
    )
};

const Instamart = () =>{
    const [visibleSection , setVisibleSection] = useState();
    return (
        <div>
            <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
            <Section
             title={"About Instamart"} 
             description={
                "A few years ago typical pervoskite devices would degrade within minutes or hours to non functional states but now multiple groups have demonstrated lifetimes of several months of operation .but still for commercial , grid level production , lifetime should be atleast 20 years .Researchers are working for new cell designs , new encapsulatoin strategies to protect pervoskites from the environment , and to understand basic degradation pathways so they can use accelerated aging studies to predict how pervoskite solar cells will last on rooftops."
                }
                isVisible={visibleSection==="about"}
                setIsVisible={()=>setVisibleSection("about")}
                />

            <Section
             title={"Team Instamart"}
              description={
                "A few years ago typical pervoskite devices would degrade within minutes or hours to non functional states but now multiple groups have demonstrated lifetimes of several months of operation .but still for commercial , grid level production , lifetime should be atleast 20 years .Researchers are working for new cell designs , new encapsulatoin strategies to protect pervoskites from the environment , and to understand basic degradation pathways so they can use accelerated aging studies to predict how pervoskite solar cells will last on rooftops."
                }
                isVisible={visibleSection==="team"}
                setIsVisible={()=>setVisibleSection("team")}
                />

            <Section
             title={"Careers"}
              description={
                "A few years ago typical pervoskite devices would degrade within minutes or hours to non functional states but now multiple groups have demonstrated lifetimes of several months of operation .but still for commercial , grid level production , lifetime should be atleast 20 years .Researchers are working for new cell designs , new encapsulatoin strategies to protect pervoskites from the environment , and to understand basic degradation pathways so they can use accelerated aging studies to predict how pervoskite solar cells will last on rooftops."
                }
                isVisible={visibleSection==="career"}
                setIsVisible={()=>setVisibleSection("career")}
                />

        </div>
    );
};

export default Instamart;