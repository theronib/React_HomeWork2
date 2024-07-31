import React, { Component, useState } from "react";

class Film extends Component {
    render() {
        return <div id="movie-info">
            <h2>My favourite movie:</h2>
            <ul>
                <p>Name: {this.props.name}</p>
                <p>Year: {this.props.year}</p>
                <p>Rated: {this.props.rated}</p>
                <p>Runtime: {this.props.runtime}</p>
                <p>Director: {this.props.director}</p>
                <p>Actors: {this.props.actors}</p>
                <p>Plot: {this.props.plot}</p>
                <img src={this.props.image} alt = "poster"/>
            </ul>
        </div>
    }
}

export default Film;