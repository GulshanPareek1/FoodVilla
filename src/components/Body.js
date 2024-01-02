import { useEffect, useState } from "react";
import { restrauntList } from "../constants.js";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

//import * as obj from "src/"

function filterData(searchInput , restaurants){
    const filterData = restaurants?.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
}


const Body = () =>{

    const [searchInput ,setSearchInput] = useState(""); 

    const [filteredRestaurants , setFilteredReaturants] = useState([]);
    const [allRestaurants , setAllRestaurant] = useState([]);

    useEffect(()=>{
        getRestaurants();
    },[]);  
    const [count , setCount] = useState(0);

    //console.log("Render");
    async function getRestaurants()
    {
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.631233332220628&lng=77.37092480063438&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0224734&lng=72.5715931&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredReaturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return allRestaurants?.length == 0 ? (
    <Shimmer />
    ) : (
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
            {/* <h2>{count}</h2>  for proof of Reconciliation in React */}
            <button className="search-btn"
            onClick={()=>{
                //need to filter data
                const data = filterData(searchInput , allRestaurants);
                // updare the restaurants 
                setFilteredReaturants(data);
                //setCount(count+1);   Reconciliation 
            }}
            >Search</button>
        </div>
        <div className="restaurent-list">
            {
                filteredRestaurants?.map((restaurant)=>{
                return ( <Link 
                to={"/restaurant/"+restaurant?.info?.id}
                key={restaurant?.info?.id}
                >
                <RestrauntCard {...restaurant?.info}  key={restaurant?.info?.id} />
                </Link>);
                }
                )
            }
            
        </div>
        </>
    );
};

export default Body;