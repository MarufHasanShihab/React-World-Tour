import { useState } from 'react';
import './country.css'

const Country = ({country, handleMarkVisitedBtn, handleAddFlagBtn}) => {
    console.log(country)
    const {name,flags,population, area} = country
    const [visited, setVisited] = useState(false);
    const handleVisitedBtn = ()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name :{name?.common} </h2>
            <img src={flags?.png} alt="" />
            <h3>population : {population}</h3>
            <h3>area : {area}</h3>
            {visited ? <h3>I Have Visited This Country</h3> : <h3>I Want to visit</h3>}
            <button onClick={handleVisitedBtn} >{visited ? "Visited" : "Going"}</button><br/>
            <button onClick={()=> handleMarkVisitedBtn(country)}>Mark Visited</button><br/>
            <button onClick={()=>handleAddFlagBtn(country.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country;