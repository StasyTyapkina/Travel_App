import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { langText } from '../App/mainPageComponents/lang';
import { LocaleContext } from '../Locale/Locale';
import {
  CommentContainer,
  CommentRow,
  CommentColSmall,
  CommentColLarge,
  Label,
  Textarea,
  Select,
  Submit,
} from './styledCommentTextAria';

const CommentsForUser = ({ userInfo }) => {
  const { locale } = useContext(LocaleContext);
  const apiurl = process.env.REACT_APP_APIURL;

  const postComments = (sight_id, rating, comment) => {
    if (!userInfo) return;
    const body = { sight_id, rating, comment };
    const atoken = userInfo.auth_token || '';
    fetch(apiurl + '/countries/comment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + atoken,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        response.json();
      })
      .then((result) => {
        console.log('postComments=', result);
      })
      .catch((error) => console.error('catch: ', error));
  };

  const [comments, setComments] = useState('');
  const [rating, setRating] = useState(1);

  return (
    <CommentContainer>
      <form>
        <CommentRow>
          <CommentColSmall>
            <Label>{langText[locale].labelComment}</Label>
          </CommentColSmall>
          <CommentColLarge>
            <Textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </CommentColLarge>
        </CommentRow>

        <CommentRow>
          <CommentColSmall>
            <Label>{langText[locale].labelRating}</Label>
          </CommentColSmall>
          <CommentColLarge>
            <Select
              defaultValue="5"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1 &#9734;</option>
              <option value="2">2 &#9734; &#9734;</option>
              <option value="3">3 &#9734; &#9734; &#9734;</option>
              <option value="4">4 &#9734; &#9734; &#9734; &#9734;</option>
              <option value="5">
                5 &#9734; &#9734; &#9734; &#9734; &#9734;
              </option>
            </Select>
          </CommentColLarge>
        </CommentRow>

        <CommentRow>
          <Submit
            type="submit"
            value={langText[locale].submit}
            onClick={() => postComments(sight_id, 5, 'comments')}
          />
        </CommentRow>
      </form>
    </CommentContainer>
  );
};

CommentsForUser.propTypes = {
  userInfo: PropTypes.object,
};

export default CommentsForUser;
