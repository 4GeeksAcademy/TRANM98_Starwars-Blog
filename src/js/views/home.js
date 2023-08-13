import React from "react";
import "../../styles/home.css";
import { People } from "/workspaces/TRANM98_Starwars-Blog/src/js/component/people.js";
import { Planets } from "/workspaces/TRANM98_Starwars-Blog/src/js/component/planet.js";
import { Starships } from "/workspaces/TRANM98_Starwars-Blog/src/js/component/starship.js";

export const Home = ({ fav, setFav, handleRemove }) => (
	<div className="mt-5">
		<People fav={fav} setFav={setFav} handleRemove={handleRemove} />
		<Planets fav={fav} setFav={setFav} handleRemove={handleRemove} />
		<Starships fav={fav} setFav={setFav} handleRemove={handleRemove} />
	</div>
);