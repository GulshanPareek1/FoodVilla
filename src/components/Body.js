import { useEffect, useState ,useContext } from "react";
import { restrauntList } from "../constants.js";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnline from "../utils/useOnline.js";
import UserContext from "../utils/UserContext.js";
//import * as obj from "src/"


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
        setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredReaturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

     // here we're constructing logic for offline and online of page 
    // const isOnline = useOnline();
     // here we made a custom hook 
    
    // if(!isOnline){
    //     return <h1>🔴You're Offline , please turn on your internet !!</h1>;
    // }
    // removing this code bcz we used this logic in header to show online or offline 

    const {user , setUser} = useContext(UserContext);
    return allRestaurants?.length == 0 ? (
    <Shimmer />
    ) : (
        <>
        
        <div className="search-container p-3  bg-gray-100 my-3">
            <input type="text" 
            className=" focus:bg-slate-200 p-2  m-2" 
            placeholder="Search" 
            value={searchInput}
            onChange={(e)=>{
                setSearchInput(e.target.value);
            }}
            />
            {/* <h2>{count}</h2>  for proof of Reconciliation in React */}
            <button className="p-2 m-2 bg-green-800 hover:bg-sky-700 text-white rounded-lg"
            onClick={()=>{
                //need to filter data
                const data = filterData(searchInput , allRestaurants);
                // updare the restaurants 
                setFilteredReaturants(data);
                //setCount(count+1);   Reconciliation 
            }}
            >Search</button>
            <input type="text"  value={user.name}
            onChange={
                (e)=>setUser({
                    name:e.target.value
                })
            }
            />
        </div>
        
        <div className="flex flex-wrap">
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