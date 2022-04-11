import React from "react";

export default function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
        <div className="card">
            <img src={require(`../images/${imageUrl}`)} alt={`${location} in 4K`} className="card--img" />
            <div className="card--infos">
                <div className="card-infos-head">
                    <img className="card--infos--img" src={require("../images/pinpoint.png")} alt="pinpoint location"/>
                    <p className="card--infos--location">{location}</p>
                    <a href={googleMapsUrl} className="card--infos--maps">View on Google Maps</a>
                </div>
                <h1 className="card--infos--name">{title}</h1>
                <h3 className="card--infos--date">{startDate} - {endDate}</h3>
                <p className="card--infos--description">{description}</p>
            </div>
        </div>
    )
}