import React, { useState, useEffect, useContext } from 'react';
import ImageGallery from 'react-image-gallery';
import './styles/PhotoGalleryStyles.css';
import PropTypes from 'prop-types';
import { StyledLoader } from '../../App/mainPageComponents/loader';
import { LocaleContext } from '../../Locale';
import {
  ImageGalleryWrapper,
  ImageGalleryText,
  ImageGalleryTitle,
  ImageGalleryContent,
  CommentBox,
  CommentItem,
} from './styledGallery';
import CommentsForUser from '../../Comments/CommentsForUser';

export default function PhotoGallery({ countryId, userInfo, setUserInfo }) {
  const { locale } = useContext(LocaleContext);
  const [isLoaded, setLoadedStatus] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [countrySightsComments, setCountrySightsComments] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/countries/id/${countryId}`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(
        (countryDataExtracted) => {
          setLoadedStatus(true);
          setCountryData(countryDataExtracted.country.sights);
        },
        (error) => {
          setLoadedStatus(true);
          setError(error);
        }
      );
  }, [countryId]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_APIURL}/countries/sights/${countryData[currentIndex]?._id}`
      //604a761d00926b20d4e58c84
    )
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(
        (result) => {
          setLoadedStatus(true);
          setCountrySightsComments(result.comments);
        },
        (error) => {
          setLoadedStatus(true);
          setError(error);
        }
      );
  }, [currentIndex]);

  countryData.map((item) => {
    images.push({
      original: item.image,
      thumbnail: item.image,
      description: item.name[locale],
      originalTitle: item.description[locale],
    });
  });

  const comments = countrySightsComments.map((item) => {
    return (
      <CommentItem key={item._id}>
        <p>{item.email}</p>
        <p>{item.text}</p>
        <p> &#9734; &#9734; {item.rating} &#9734; &#9734;</p>
      </CommentItem>
    );
  });

  if (error) {
    console.log('ERROR', error.message);
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {
    return (
      <ImageGalleryWrapper>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={true}
          showBullets={true}
          onSlide={(index) => setCurrentIndex(index)}
          startIndex={currentIndex}
        />
        <ImageGalleryContent>
          <ImageGalleryTitle>
            {images[currentIndex] && images[currentIndex].description}
          </ImageGalleryTitle>
          <ImageGalleryText>
            {images[currentIndex] && images[currentIndex].originalTitle}
          </ImageGalleryText>
        </ImageGalleryContent>
        <CommentBox>{comments}</CommentBox>
        {userInfo ? <CommentsForUser /> : <> </>}
      </ImageGalleryWrapper>
    );
  }
}

PhotoGallery.propTypes = {
  countryId: PropTypes.string,
  currentIndex: PropTypes.string,
};
