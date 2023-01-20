
function GifList({ gifsData }) {

    const gifsToRender = gifsData.map((gif) =>
        <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.slug}/>
        </li>)

    return (
        <ul>
            {gifsToRender}
        </ul>
    )
}

export default GifList;