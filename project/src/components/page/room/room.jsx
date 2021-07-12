import React from 'react';
import { useParams } from 'react-router';
import { places } from '../../../mock/offers';
import { reviews } from '../../../mock/reviews';
import { RatingSetting } from '../../../const';
import Header from '../../ui/header/header';
import Rating from '../../ui/rating/rating';
import Inside from  '../../property/inside/inside';
import Gallery from  '../../property/gallery/gallery';
import Reviews from  '../../reviews/reviews';
import ReviewForm  from '../../form/review/review';
import Host from  '../../property/host/host';
import NearPlacesList from '../../near-places-list/near-places-list';
import './room.css';

const MAX_COUNT = 3;
const FAVORITE_CLASS = 'property__bookmark-button--active';
const TEMPLATE_PREMIUM = <div className="property__mark"><span>Premium</span></div>;

function Room () {
  let { id } = useParams();
  id = parseInt(id, 10);

  const [ { title, price, type, rating, isPremium, isFavorite, images, bedrooms, maxAdults, goods, host, description } ] = places.filter((place) => place.id === id);
  const placeReviews = reviews.filter((review) => review.id === id );

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">

            {images.length > 0 && <Gallery images={images} />}
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {isPremium && TEMPLATE_PREMIUM}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`${isFavorite && FAVORITE_CLASS} property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <Rating modifier={RatingSetting.PROPERTY} rating={rating} />

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {`Bedroom${bedrooms === 1 ? '' : 's'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {`adult${maxAdults === 1 ? '' : 's'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              {goods.length > 0 && <Inside goods={goods} />}

              <Host host={host} description={description}/>

              <section className="property__reviews reviews">

                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{placeReviews ? placeReviews.length : 0}</span></h2>
                {placeReviews && <Reviews reviews={placeReviews} />}

                <ReviewForm />

              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <NearPlacesList nearbyPlaces={places.slice(0, MAX_COUNT)} />
        </div>
      </main>
    </div>
  );
}

export default Room;
