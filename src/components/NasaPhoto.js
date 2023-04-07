import React from "react";


const dummyData = {
    date: "2023-04-07",
    explanation: "Brilliant, blue, supergiant star Rigel marks the foot of Orion the Hunter in planet Earth's night. Designated Beta Orionis, it's at the center of this remarkably deep and wide field of view.  Rigel's blue color indicates that it is much hotter than its rival supergiant in Orion the yellowish Betelgeuse (Alpha Orionis), though both stars are massive enough to eventually end their days as core collapse supernovae. Some 860 light-years away, Rigel is hotter than the Sun too and extends to about 74 times the solar radius. That's about the size of the orbit of Mercury. In the 10 degree wide frame toward the nebula rich constellation, the Orion Nebula is at the upper left. To the right of Rigel and illuminated by its brilliant blue starlight lies the dusty Witch Head Nebula. Rigel is part of a multiple star system, though its companion stars are much fainter.",
    hdurl: "https://apod.nasa.gov/apod/image/2304/Rigel_wide.jpg",
    title: "Rigel Wide"
}

const NasaPhoto = (props) => {
    return (
<div className="nasa-photo-wrapper">
    <h3>{props.photo.title}</h3>
    <p>{props.photo.date}</p>
    <img src={props.photo.hdurl} />
    <p>{props.photo.explanation}</p>
</div>

    )
}

export default NasaPhoto;