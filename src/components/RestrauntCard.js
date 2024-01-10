import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestrauntCard =({name , cloudinaryImageId,cuisines , avgRating ,user})=>{
    //const {name , cloudinaryImageId,cuisines , avgRating} = restaurant.info;
    // console.log(name);
    // console.log(true);

    const {user} = useContext(UserContext);

    return (
        <>
        <div className="w-52 p-2 m-2 bg-gray-100 shadow-lg">
            <img src={IMG_CDN_URL
            +cloudinaryImageId
            } />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3 className="h3">{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{user.name}</h4>
        </div>
        </>
    );
};

export default RestrauntCard;