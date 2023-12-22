import { useRouteError } from "react-router-dom";

const Error = () =>{
    const {status , statusText} = useRouteError();

    //console.log(err);
    return (
        <div>
            <h1>Ohhh!! Nooo</h1>
            <h2>I think🤔 something went wrong 🤷‍♂️.... Please check it out once again </h2>
            <h2>{status + "  : " + statusText}</h2>
        </div>
    );
};


export default Error;