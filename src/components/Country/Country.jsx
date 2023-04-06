import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, continents, flags, maps } = props.country;
    return (
        <div className='country'>
            <h2> {name.common} </h2>
            <h4> Continent: {continents}</h4>
            <p>
                <a href={maps.googleMaps} target="_blank"
                >Check googlemap</a>
            </p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;