import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetInfo = () => {
    const { store } = useContext(Context);
    const { id } = useParams();

    const planet = store.planets.find(planet => planet.id === id.toString());

    if (!planet) {
        return <div>Planet not found.</div>;
    }

    return (
        <div>
            <div>
                <img src="..." alt={planet.name} />
                <div>
                    <h2>{planet.name}</h2>
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
                    {`${planet.name}`}
                </p>
                    <br />
                <p>
                    Climate
                    <br/>
                    {`${planet.climate}`}
                </p>
                    <br />
                <p>
                    Population
                    <br/>
                    {`${planet.population}`}
                </p>
                    <br />
                <p>
                    Orbital Period
                    <br/>
                    {`${planet.orbital_period}`}
                </p>
                    <br />
                <p>
                    Rotation Period
                    <br/>
                    {`${planet.rotation_period}`}
                </p>
                    <br />
                <p>
                    Diameter
                    <br/>
                    {`${planet.diameter}`}
                </p>
            </div>
        </div>
    );    
};
