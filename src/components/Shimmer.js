const Shimmer = () =>
{
    return (
        <div className="restaurent-list">
            {Array(10).fill("").map((e,index)=>(
                <div key={index} className="shimmer-card"></div>
            ))}
        d
        </div>
    );
};

export default Shimmer;