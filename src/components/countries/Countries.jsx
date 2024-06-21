
import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'


const Countries = () => {
    const [contries, setContires] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [flags, setFlags] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setContires(data))
    },[])
    const handleMarkVisitedBtn = (country)=>{
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }
    const handleAddFlagBtn = (newflags)=>{
        setFlags([...flags, newflags ])
    }
    return (
        <div className="countries-container">
            <ul className="countries-list">
                <h3>Visited Countries Length : {visitedCountries.length}</h3>
                {
                    visitedCountries.map(country => <ol>{country.name.common}</ol>)
                }
            </ul>
            <div className="flags-container">
            {
                flags.map(flag => <img src={flag}/>)
            }
            </div>
            <div className="countries">
            {contries.map(country => <Country key={country.cca3} country={country} handleMarkVisitedBtn={handleMarkVisitedBtn} handleAddFlagBtn={handleAddFlagBtn} />)}
        </div>
        </div>
    );
};

export default Countries;