import React from "react";
import './Newletter.scss';

function Newletter() {
    return (
        <div className="app__newsletter flex-center">
            <input type="text"/>
            <button type="submit" className="p-text">Subscribe</button>
        </div>
    )
}

export default Newletter