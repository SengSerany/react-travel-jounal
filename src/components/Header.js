import React from "react";

export default function Headers() {
    return(
        <nav>
            <div className="nav--body">
                <img src={require(`../images/world.png`)} alt="logo travel journal" className="nav--img" />
                <p className="nav--text">My travel journal</p>
            </div>
        </nav>
    )
}