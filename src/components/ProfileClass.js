import React from "react";

class Profile extends React.Component
{
    constructor(props)
    {
        super(props);  // why we use it...?
        // create state 
        this.state = {
                userInfo:{
                    // we're not defining variables so can be any much 
                    // like which are present in api - name , id , location 

                    // if we define those UI elements here then these will work before fetch (update state)
                }
        };
        //console.log("child-constructor "+ this.props.Name);
    }
    async componentDidMount(){
        //API calls 
        const data = await fetch("https://api.github.com/users/GulshanPareek1");
        const json = await data.json();
        this.setState({
            userInfo : json,
            // we only defined userinfo bcz json is an object 
        });
        //console.log(json);
        //console.log("child-componentDidMount");
    }
    
    componentDidUpdate(){
        //console.log("Component did update")
    }
    componentWillUnmount(){
        // clearInterval(this.timer);
        //console.log("componentWillUnMount-Called")
    }
    
    render()
    {
        //console.log("child-render"+this.props.Name);
        return (
            <div>
                <h2>Class Based Component</h2>
                {/* <img src={this.state.userInfo.avatar_url} alt="photo" />
                <h4>ID:-{this.state.userInfo.id}</h4>
                <h4>node_id:-{this.state.userInfo.node_id}</h4>
                <h4>Name:-{this.state.userInfo.login}</h4>
                <h4>Location:-{this.state.userInfo.location}</h4> */}
                {/* <h3>Name:-{this.props.Name}</h3> */}
                {/* <button onClick={()=>{
                    // we don't mutate state directly 
                    // never do this.state = something
                        this.setState(
                            {
                                count: 1,
                                count2:2,
                            }
                        );
                }
                } >
                    setState
                </button> */}
                {/* {console.log("class based component " ,this.state.count2)} */}
            </div>
        );
    }
}

export default Profile;