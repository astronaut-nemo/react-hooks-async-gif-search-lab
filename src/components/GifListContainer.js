import React, { useEffect, useState } from 'react';
import GifList from "./GifList";

function GifListContainer() {
    // States
    const [gifs, setGifs] = useState([]);

    // Get the search term and encode it, then pass it to the fetch as a dependancy

    // Fetch Requests
    useEffect(() =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=XWBNd1ksECRTja7rylogKwDat6SXW8Pi&limit=3&rating=g`)
        .then((response) => response.json())
        .then((fetchedGifs) => setGifs(fetchedGifs.data));
    }
        ,[]
    )
    // console.log("In GifListContainer ",gifs)
    return (
        <div>
            <GifList gifsData={gifs}/>
        </div>
    )
}

export default GifListContainer;