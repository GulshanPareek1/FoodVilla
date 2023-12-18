//import React from "react";
import ReactDOM  from "react-dom/client";

import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


// const heading = React.createElement("h1",{
//     id:"title",
//     key: "h1", className:"mine",
//     style: {color: "red", backgroundColor: "blue"}
//     //style="color:red;"
// },"Namaste Everyone from react using parcel");
// console.log(heading);
// const heading2 = React.createElement("h2",{
//     id:"title",
//     key: "h2"
// },"Uses React CreateElement");

// const heading3 = () => (<h1 id="title" key="h2">JSX 
//     CODE</h1>);

// const container  = React.createElement("div",{
//     id:"container"
// },[heading , heading2]);
// //console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));


// const FunctionalComponent = () =>
//     (<div>
//         {container}
//         {heading3()}
//         {console.log("Any JS Code")}
//         <h1>This is functional Component </h1>
//         <h2>Part of React</h2>
//     </div>
//     );

// ///root.render(container);
// root.render(<FunctionalComponent/>);

// // here we are using javascript code 
// const element = document.createElement("h2");
// // here div1 is tag not like div 
// //element.id="myButton";
// element.innerHTML = "This is using javascript.";
// const para = document.createElement("p");
// para.id = "para";
// para.className="paraclass";
// // document.getElementById("myButton").onclick = function() {
// //     alert("Hello World!");
// //   };
// para.appendChild(element);

// // passing a react element inside the root 
// const footer = document.getElementById("footer");

// footer.appendChild(para);



const styleObj = {
    backgroundColor : "none",
};

{/* // destructure the parameter(props) */}


const AppLayout = () =>{
    return(
        <div className="whole">
        <HeaderComponent />
        <Body />
        <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);