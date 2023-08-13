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
                        Suspendisse potenti. Proin nisl orci, tincidunt sit amet efficitur non, mattis ut odio. 
                        Ut vitae placerat turpis, sit amet sodales est. Sed consectetur leo et eros dictum, eget mattis nisi pretium. 
                        Aenean condimentum arcu nisl, vitae ornare eros vehicula nec. Nunc lacinia luctus porta. 
                        Cras sit amet odio non lacus posuere feugiat sed id lorem.
                        Ut vitae placerat turpis, sit amet sodales est. Sed consectetur leo et eros dictum, eget mattis nisi pretium. 
                        Aenean condimentum arcu nisl, vitae ornare eros vehicula nec. Nunc lacinia luctus porta. 
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