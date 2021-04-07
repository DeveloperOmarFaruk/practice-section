import React, {useState, useEffect} from 'react'
import Cart from '../Cart/Cart'
import Country from './Country'

const Api = () => {

    const [countries, setCountries] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data=>setCountries(data))

    }, [])

    const handelAddCountry = (country) => {
        const newCart = [...cart, country]
        setCart(newCart)
    }

    return (
        <>
            <h1>Countries Loaded: {countries.length}</h1>
            <h1>Countries Added: {cart.length}</h1>
            <Cart cart={cart}/>
            <ul>
                {
                countries.map(country => <Country country={country} handelAddCountry={handelAddCountry} 
                    key={country.alpha3Code}></Country>)
                }
            </ul>
        </>
    )
}

export default Api
