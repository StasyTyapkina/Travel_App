import React, { useState, useEffect, useContext } from 'react';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import PropTypes from 'prop-types';

import { MapContent } from '../PhotoGallery/styledGallery';

import JapanFlag from './images/flagJP.png';
import AustraliaFlag from './images/flagAU.png';
import EgyptFlag from './images/flagEG.png';
import ItalyFlag from './images/flagIT.png';
import GermanyFlag from './images/flagDE.png';
import OAEFlag from './images/flagAE.png';
import SwitzerlandFlag from './images/flagCH.png';
import TurkeyFlag from './images/flagTR.png';
import { LocaleContext } from '../../Locale';

const isoLocale = {
  ru: 'en_RU',
  en: 'en_US',
  fallback: 'en_RU',
};

export default function WorldMap({ countryId }) {
  const [isLoaded, setLoadedStatus] = useState(false);
  const [countryData, setCountryData] = useState({});
  const { locale } = useContext(LocaleContext);
  const FLAGS = {
    JP: JapanFlag,
    AU: AustraliaFlag,
    EG: EgyptFlag,
    IT: ItalyFlag,
    DE: GermanyFlag,
    AE: OAEFlag,
    CH: SwitzerlandFlag,
    TR: TurkeyFlag,
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/countries/id/${countryId}`)
      .then((countryDataResponse) => {
        if (!countryDataResponse.ok)
          throw new Error(countryDataResponse.statusText);
        return countryDataResponse.json();
      })
      .then((countryDataExtracted) => {
        setCountryData(countryDataExtracted.country);
        setLoadedStatus(true);
      });
  }, [countryId]);
  if (!isLoaded) {
    return null;
  } else {
    if (!countryData) return null;
    const mapRef = React.createRef(null);
    const getRegions = (ymaps) => {
      if (mapRef && mapRef.current) {
        var objectManager = new ymaps.ObjectManager();
        ymaps.borders
          .load('001', {
            lang: locale,
            quality: 2,
          })
          .then(function (result) {
            const selectedRegion = result.features.find(
              (feature) => feature.properties.iso3166 === countryData['iso']
            );
            selectedRegion.id = selectedRegion.properties.iso3166;
            selectedRegion.options = {
              fillOpacity: 0.5,
              strokeColor: '#FFF',
              strokeOpacity: 0.5,
              fillColor: '#49C0B5',
            };
            result.features = [];
            result.features.push(selectedRegion);
            objectManager.add(result);
            mapRef.current.geoObjects.add(objectManager);
          });
      }
    };
    return (
      <>
        <MapContent>
          <YMaps query={{ lang: isoLocale[locale] || isoLocale.fallback }}>
            <Map
              width="inherit"
              height="inherit"
              instanceRef={mapRef}
              state={{
                zoom: countryData.zoom,
                center: countryData['geo'],
              }}
              onLoad={(ymaps) => getRegions(ymaps)}
              modules={['borders', 'ObjectManager']}
            >
              <Placemark
                geometry={countryData['capitalgeo']}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: FLAGS[countryData['iso']],
                  iconImageSize: [64, 48],
                  iconImageOffset: [-32, -40],
                }}
                properties={{ hintContent: countryData['capital'][locale] }}
                modules={['geoObject.addon.hint']}
              />
              <FullscreenControl />
              <ZoomControl
                options={{
                  size: 'small',
                  position: {
                    top: 5,
                    left: 5,
                  },
                }}
              />
            </Map>
          </YMaps>
        </MapContent>
      </>
    );
  }
}

WorldMap.propTypes = {
  countryId: PropTypes.string,
};
