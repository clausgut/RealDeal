import React from "react";
import "itemcard.css";

function itemCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                    <li>
                        <strong>{props.price}</strong>
                    </li>
                    <li>
                        <strong>{props.available}</strong>
                    </li>
                </ul>
            </div>
            <span onClick={() => props.addWishList(props.id)} className="wish list">
                +
</span>
        </div>
    );
}

export default itemCard;