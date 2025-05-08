
function PhotoCard({photoData}) {
    
    function onHideClick() {
        alert("Hidden")
    }

    return <div className="photo-card">
        
        <div className="picture">
            <img src={photoData.picture} />
            <div className="img-overlay">
                <button className="hide-button" onClick={onHideClick}>+</button>
            </div>
        </div>
        
        <div className="photo-footer">
          <h2>{photoData.title}</h2>  
          <p>{photoData.date}</p>
        </div>
        
    </div>
}

export default PhotoCard