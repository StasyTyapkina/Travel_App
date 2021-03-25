import React, { useState, useEffect, useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardsForCarousel from './CardsForCarousel';
import { StyledLoader } from '../loader';
import { LocaleContext } from '../../../Locale';

export default function HandleCarousel({ setCountry, setCapital }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_APIURL + '/countries')
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.countries);
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
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots
        slidesToSlide={1}
        swipeable={false}
      >
        {items.map((item) => (
          <CardsForCarousel
            key={item._id}
            src={item.sliderimg}
            capital={item.capital[locale]}
            country={item.country[locale]}
            text={item.text[locale]}
            setCountry={setCountry}
            setCapital={setCapital}
            countryId={item._id}
          />
        ))}
      </Carousel>
    );
  }
}
