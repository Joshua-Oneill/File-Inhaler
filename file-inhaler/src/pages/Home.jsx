import PhotoCard from "../components/photocard"
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const photos = [
        {id: 1, title: "Epic day", date: "1-2-24", },
        {id: 2, title: "BAD DAY", date: "2-2-24", },
        {id: 3, title: "penis", date: "3-2-24", },
        {id: 4, title: "car", date: "4-2-24", },
        {id: 5, title: "mmmmmm black", date: "5-2-24", },
    ]

    const searchHandler = (e) => {
        e.preventDefault()
        alert(searchQuery)
    };

    return <div className="home">

        <form onSubmit={searchHandler} className="search-form">
            <input
                type="text"
                placeholder="hello search Dork"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="photo-grid">
            {photos.map((photo) =>
            photo.title.toLowerCase().startsWith(searchQuery) && 
            (<PhotoCard photoData={photo} key={photo.id}/>
            ))}
        </div>
    </div>
}

export default Home