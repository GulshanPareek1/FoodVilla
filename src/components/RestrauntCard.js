import { IMG_CDN_URL } from "../constants";

const RestrauntCard =({name , cloudinaryImageId,cuisines , avgRating})=>{
    //const {name , cloudinaryImageId,cuisines , avgRating} = restaurant.info;
    // console.log(name);
    return (
        <>
        <div className="card">
            <img src={IMG_CDN_URL
            +cloudinaryImageId
            } />
            <h2>{name}</h2>
            <h3 className="h3">{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
        </>
    );
};

export default RestrauntCard;