import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Heart } from 'react-bootstrap-icons';
import md5 from "md5";

export const People = ({ fav, setFav, handleRemove }) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	const handleFavorite = (person) => {
		if (fav.includes(person.name)) {
			handleRemove(person.name);
		} else {
			setFav([...fav, person.name]);
		}
	};  

	return (
	  <div className="category-title">
		<h1>Characters</h1>
		<div className="card-container">
				{store.people && store.people.map(person => (
					<div className="card" key={person.url}>
						<img
                            src={`https://www.gravatar.com/avatar/${md5(
                            person.name.toLowerCase()
                            )}?d=identicon`}
                            className="card-img-top"
                            alt={person.name}
                        />
						<div className="card-body">
							<h5 className="card-title">{person.name}</h5>
							<p className="card-text">
								Gender: {person.gender}<br />
								Hair Color: {person.hair_color}<br />
								Eye Color: {person.eye_color}
							</p>
							<Link to={`/info/${person.id}`} 
								className="btn btn-outline-primary"
							>
								Learn more!
							</Link>
							<button
								className="btn btn-outline-warning me-md-2"
								onClick={() => handleFavorite(person)}						
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
