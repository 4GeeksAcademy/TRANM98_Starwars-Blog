import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Info = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
		actions.loadSomeData();
	}, []);

    const person = store.people.find(person => person.id === id);

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <img src="..." alt={person.name} />
                <div>
                    <h2>{person.name}</h2>
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
                    {`${person.name}`}
                </p>
                    <br />
                <p>
                    Birth Year
                    <br/>
                    {`${person.birth_year}`}
                </p>
                    <br />
                <p>
                    Gender
                    <br/>
                    {`${person.gender}`}
                </p>
                    <br />
                <p>
                    Height
                    <br/>
                    {`${person.height}`}
                </p>
                    <br />
                <p>
                    Skin Color
                    <br/>
                    {`${person.skin_color}`}
                </p>
                    <br />
                <p>
                    Eye Color
                    <br/>
                    {`${person.eye_color}`}
                </p>
            </div>
        </div>
    );    
};
