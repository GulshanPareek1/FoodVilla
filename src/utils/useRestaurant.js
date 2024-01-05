import { useEffect,useState } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (resId) =>{
    const [restaurant , setRestaurant] = useState(null);

    useEffect(() =>{
        getRestaurantInfo();
    } , []);

    async function getRestaurantInfo() {
        //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.170640289981698&lng=72.82882910209962&restaurantId=496583");
        const data = await fetch(  FETCH_MENU_URL + resId);
        const json = await data.json();
        //console.log(json.data);
        setRestaurant(json.data);
    }
    return restaurant;
}

export default useRestaurant;