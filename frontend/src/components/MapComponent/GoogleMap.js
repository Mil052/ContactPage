import React, { useState, useEffect } from "react";
import './GoogleMap.scss';

function GoogleMap () {

    const [isNarrowScreen, setIsNarrowScreen] = useState();

    // Please enter below your own google Maps API Key:
    const googleMapsKey = "...";

    function screenSizeHandler (e) {
        console.log('screen size change!');
        setIsNarrowScreen(e.matches);
    }

    useEffect(() => {
        const media_query = window.matchMedia("(max-width: 600px)");
        setIsNarrowScreen(media_query.matches);
        media_query.addEventListener('change', screenSizeHandler);
        return () => media_query.removeEventListener('change', screenSizeHandler);
    },[]);

    const zoom = "17";
    const size = isNarrowScreen ? "500x400" : "640x360";
    
    const map_url = `https://maps.googleapis.com/maps/api/staticmap?zoom=${zoom}&size=${size}&scale=2&map_id=b206cb808b2453bd&markers=color:purple%7C51.10835,17.02114&key=${googleMapsKey}`;

    return (
        <div id="map">
            <div className="map_link">
                <a href="https://www.google.pl/maps/@51.10835,17.02114,18z"><img src="/images/maps_icon.svg"/></a>
                <div>
                    <h4>FIND US</h4>
                    <p>on Google Maps</p>   
                </div>
            </div>
            <img src={map_url}/>
        </div>
    );
}
export default GoogleMap;

// https://maps.googleapis.com/maps/api/staticmap?zoom=18&size=640x640&scale=2
// &map_id=b206cb808b2453bd
// &markers=color:blue%7Clabel:M%7C51.10835,17.02114
// &style=feature:poi%7Celement:labels%7Cvisibility:off
// &key=........

// We can also use HTML to set different sources for image for different screen sizes (instead of using window.matchMedia() method):
// (<img> with srcset attribute or <picture> tags)
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images