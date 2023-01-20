import React, { useEffect, useState } from 'react';
import GifList from "./GifList";
import GifSearch from './GifSearch';

function GifListContainer() {
    // States
    const [gifs, setGifs] = useState([]);
    const [search ,setSearch] = useState("");

    // Fetch Requests
    useEffect(() =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=XWBNd1ksECRTja7rylogKwDat6SXW8Pi&limit=3&rating=g`)
        .then((response) => response.json())
        .then((fetchedGifs) => setGifs(fetchedGifs.data));
    }
        ,[]
    );

    // Event Handlers
    // Get the search term from GifSearch and encode it, then pass it to the fetch as a dependancy

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <GifList gifsData={gifs}/>
            <GifSearch searchTerm={search}/>
        </div>
    )
}

export default GifListContainer;