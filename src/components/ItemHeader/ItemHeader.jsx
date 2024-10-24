import FavoriteButton from '../FavoriteButton/FavoriteButton';
import scss from './ItemHeader.module.scss';

const ItemHeader = ({
  title,
  rating,
  reviewsCount,
  location,
  price,
  isFavorite,
  onToggleFavorite,
  pricePosition = 'bottom', // 'right' or 'bottom'
  onReviewsClick,
}) => {
  const getReviewText = (count) => (count === 1 ? 'review' : 'reviews');

  return (
    <div
      className={`${scss.component} ${pricePosition === 'right' && scss.right}`}
    >
      <div className={scss.topRow}>
        <h2 className={`${scss.title} ${scss.main}`}>{title}</h2>
        <div className={scss.info}>
          <button
            className={`${scss.rating} ${scss.infoItem}`}
            onClick={onReviewsClick}
          >
            <span className={`${scss.star} icon icon-star`}></span>
            {rating} ({reviewsCount} {getReviewText(reviewsCount)})
          </button>
          <span className={scss.infoItem}>
            <span className={`${scss.map} icon icon-map`}></span> {location}
          </span>
        </div>
      </div>
      <div className={scss.priceFavorite}>
        <span className={scss.main}>€{price}</span>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </div>
  );
};

export default ItemHeader;
