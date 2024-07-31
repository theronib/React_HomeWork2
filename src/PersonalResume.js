import React, { Component, useState } from "react";

class PersonalResume extends Component {
    render() {
        return <div id="personal-info">
            <h2>Personal resume:</h2>
            <ul>
                <p>Name: {this.props.name}</p>
                <p>Phone: {this.props.phone}</p>
                <p>Email: {this.props.email}</p>
                <p>Town: {this.props.town}</p>
                <p>Work experience: {this.props.work}</p>
                <p>Skills: {this.props.skills}</p>
                <p>Interests: {this.props.interests}</p>
            </ul>
        </div>
    }
}

export default PersonalResume;