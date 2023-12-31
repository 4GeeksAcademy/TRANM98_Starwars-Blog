import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Heart } from 'react-bootstrap-icons';


export const Starships = ({ fav, setFav, handleRemove }) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	const handleFavorite = (starship) => {
		if (fav.includes(starship.name)) {
			handleRemove(starship.name);
		} else {
			setFav([...fav, starship.name]);
		}
	}; 

	return (
		<div className="category-title">
			<h1>Starships</h1>
			<div className="card-container">
				{store.starships && store.starships.map(starship => (
					<div className="card" key={starship.url}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{starship.name}</h5>
							<p className="card-text">
								Model: {starship.model}<br />
								Hyperdrive Rating: {starship.hyperdrive_rating}
							</p>
							<Link to={`/starship_info/${starship.url.match(/\/(\d+)\/$/)[1]}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
							<button
								className="btn btn-outline-warning me-md-2"
								onClick={() => handleFavorite(starship)}						
							>
								<Heart />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
