function Artist(props){

    const {artist} = props;

    return(

        <div className="artist">
            <div className="artist-image">
                <img src={artist.image} alt="" />
            </div>
            <div className="artist-bio">
                <p className="artist-info">
                <span className="artist-name">{artist.name}</span>
                </p>
                <p className="artist-info">
                Country: <span className="artist-detail">{artist.country}</span>
                </p>
                <p className="artist-info">
                Birthdate: <span className="artist-detail">{artist.birth}</span>
                </p>
                <p className="artist-info">
                Streams in 2024: <span className="artist-detail">{artist.streams}</span>
                </p>
            </div>
        </div>
    )
}

export default Artist;