import React, { useState, useEffect } from 'react';
import { StyledLoader } from '../App/mainPageComponents/loader.js';
import { Video } from './PhotoGallery/styledGallery';

function VideoCountry({ countryId }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://travel-srv.herokuapp.com/countries/id/${countryId}`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.country);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    console.log('ERROR', error.message);
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {
    return (
      <div>
        <Video
          src={item.video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Video>
      </div>
    );
  }
}

export default VideoCountry;
