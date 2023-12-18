import { useState } from "react";
import { restrauntList } from "../constants.js";
import RestrauntCard from "./RestrauntCard";

//import * as obj from "src/"

function filterData(searchInput , restaurants){
    const filterData = restaurants.filter((restaurant)=>
    restaurant.info.name.includes(searchInput)
    );

    return filterData;
}


const Body = () =>{

    const [searchInput ,setSearchInput] = useState(""); 

    const [text ,setText] = useState("false");

    const [restaurants , setRestaurant] = useState(restrauntList);

    return (
        <>
        <div className="search-container">
            <input type="text" 
            className="search-input" 
            placeholder="Search" 
            value={searchInput}
            onChange={(e)=>{
                setSearchInput(e.target.value);
            }}
            />
            
            <button className="search-btn"
            onClick={()=>{
                //need to filter data
                const data = filterData(searchInput , restaurants);
                // updare the restaurants 
                setRestaurant(data);
            }}
            >Search</button>
        </div>
        <div className="restaurent-list">
            {
                restaurants.map((restaurant)=>{
                return <RestrauntCard {...restaurant.info}  key={restaurant.info.id} />;
                }
                )
            }
            
        </div>
        </>
    );
};

export default Body;