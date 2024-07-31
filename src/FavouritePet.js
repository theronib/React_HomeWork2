import React, { Component, useState } from "react";

class FavouritePet extends Component {
    render() {
        return <div id="favourite-pet">
            <h2>My Favourite pet:</h2>
            <ul>
                <p>Type of animal: {this.props.type}</p>
                <p>Breed: {this.props.breed}</p>
                <p>Origin: {this.props.origin}</p>
                <p>Lifespan: {this.props.lifespan}</p>
                <p>Average weight: {this.props.weight}</p>
                <p>Temperament: {this.props.temperament}</p>
                <img src={this.props.image} alt = "cat_pic"/>
            </ul>
        </div>
    }
}

export default FavouritePet;