
function GifSearch({ searchTerm }){
    return(
        <div>
            <form>
                <div>
                    <label
                        className="form-label"
                        style={{display: "block"}}
                    >
                        Enter a Search Term:
                    </label>
                    <input
                        className="form-control"
                        style={{display: "block"}}
                        type="text"
                        name="search"
                        placeholder="Search..."
                    />
                </div>

                <div>
                    <input
                        className="btn btn-success"
                        style={{display: "block", marginTop: "5px"}}
                        type="submit"
                        value="Submit"
                    />
                </div>
                
            </form>
        </div>
    )
}

export default GifSearch;