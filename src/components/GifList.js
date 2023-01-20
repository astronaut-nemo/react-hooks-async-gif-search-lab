
function GifList({ gifsData }) {
    // console.log(gifsData)

    const gifsToRender = gifsData.map((gif) =>
        <li key={gif.id}>
            <img src={gif.images.original.url}/>
        </li>)

    console.log("Gifs to render ",gifsToRender)
    return (
        <ul>
            {gifsToRender}
        </ul>
    )
}

export default GifList;