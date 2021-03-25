import React from 'react';
import VideoCountry from './VideoCountry';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import WorldMap from './WorldMap/WorldMap';
import {
  StyledContent,
  StyledContainer,
  StyledItems,
  StyledPhotoContent,
} from './styledCountry.js';
import PropTypes from 'prop-types';

export default function MediaContent({ countryId, userInfo, setUserInfo }) {
  return (
    <StyledContent>
      <StyledContainer>
        <StyledItems>
          <StyledPhotoContent>
            <PhotoGallery
              countryId={countryId}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          </StyledPhotoContent>
          <StyledPhotoContent>
            <VideoCountry countryId={countryId} />
          </StyledPhotoContent>
          <StyledPhotoContent>
            <WorldMap countryId={countryId} />
          </StyledPhotoContent>
        </StyledItems>
      </StyledContainer>
    </StyledContent>
  );
}

MediaContent.defaultProps = {
  countryId: '',
  userInfo: {},
  setUserInfo: () => {},
};
MediaContent.propTypes = {
  countryId: PropTypes.string,
  userInfo: PropTypes.object,
  setUserInfo: PropTypes.func,
};
