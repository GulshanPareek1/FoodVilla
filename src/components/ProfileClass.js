import React from "react";

class Profile extends React.Component
{
    render()
    {
        return (
            <div>
                <h2>Class Based Component</h2>
                <h4>Name:-{this.props.Name}</h4>
            </div>
        );
    }
}

export default Profile;