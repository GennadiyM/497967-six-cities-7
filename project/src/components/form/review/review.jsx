import React, { useState } from 'react';
import Star from '../star/star';

const STARS = [
  {
    title: 'perfect',
    id: '5',
  },
  {
    title: 'good',
    id: '4',
  },
  {
    title: 'not bad',
    id: '3',
  },
  {
    title: 'badly',
    id: '2',
  },
  {
    title: 'terribly',
    id: '1',
  },
];
const DEFAULT_VALUE_RATING = 0;
const MIN_COUNT_CHARACTERS = 50;

function Review () {
  const [rating, setRating] = useState(DEFAULT_VALUE_RATING);
  const [comment, setComment] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => handleSubmit(evt)}
    >

      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {STARS.map(({title, id}) => <Star title={title} key={`${title}-${id}`} id={id} changeHandler={setRating}/>)}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => setComment(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COUNT_CHARACTERS} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

export default Review;
