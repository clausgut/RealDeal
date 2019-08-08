import React from "react";
import { Link } from 'react-router-dom'

function ResultList(props) {
    return (
        <li className="list-group">
            <div className="card-header">{props.title}</div>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <p className="card-text">Author: <strong>{props.author}</strong></p>
                <Link to={"/story/" + props.id} className="btn btn-primary" role="button">Add to this story</Link>
            </div>
        </li>
    );
}

export default ResultList;