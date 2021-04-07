import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, region, area, capital, alpha3Code, flag} = props.country
    const handelAddCountry = props.handelAddCountry
    return (
        <>
            <div className="container">


            <div className="card-left">
            <h2>This is {name}</h2>
            <h3>Population: {population}</h3>
            <h4>Region: {region}</h4>
            <h5>Area: {area}</h5>
            <h4>Capital: {capital}</h4>
            <h3>Country Code: {alpha3Code}</h3>
            <button onClick={() => handelAddCountry(props.country)}>Add Country</button>
            </div>



            <div className="card-right">
            <img  src={flag} alt=''/>
            </div>


            </div>

        </>
    );
};

export default Country;