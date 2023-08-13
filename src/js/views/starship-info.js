import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipInfo = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
		actions.loadSomeData();
	}, []);

    const starship = store.starships.find(starship => starship.id === id);

    if (!starship) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <img src="..." alt={starship.name} />
                <div>
                    <h2>{starship.name}</h2>
                    <p>
                        Nunc non urna at ipsum egestas ornare et eu turpis. Maecenas vitae venenatis sem, eu imperdiet odio. Sed vel scelerisque nunc. Cras accumsan eget velit sit amet accumsan. Cras bibendum ex sapien, at fermentum sapien tristique at. Nullam eget erat orci. Mauris bibendum sollicitudin sem, sit amet efficitur diam accumsan eget. Quisque egestas ipsum ligula, sit amet eleifend massa malesuada sit amet.
                        Donec mollis lectus id odio imperdiet, a faucibus sapien mollis. Pellentesque porta quam nec magna elementum, ut euismod neque sodales. 
                        Curabitur mattis commodo urna, a sagittis risus dignissim quis. Curabitur id accumsan quam. Cras et ipsum sem. 
                        Donec tempus tempor eros fermentum placerat.
                    </p>
                </div>
            </div>
            <div>
                <hr/>
                <p>
                    Name
                    <br/>
                    {`${starship.name}`}
                </p>
                    <br />
                <p>
                    Model
                    <br/>
                    {`${starship.model}`}
                </p>
                    <br />
                <p>
                    Hyperdrive Rating
                    <br/>
                    {`${starship.hyperdrive_rating}`}
                </p>
                    <br />
                <p>
                    Length
                    <br/>
                    {`${starship.length}`}
                </p>
                    <br />
                <p>
                    Crew
                    <br/>
                    {`${starship.crew}`}
                </p>
                    <br />
                <p>
                    Passengers
                    <br/>
                    {`${starship.passengers}`}
                </p>
            </div>
        </div>
    );    
};
