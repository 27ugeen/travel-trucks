import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  deleteFromFavorites,
  selectFavorites,
} from '../../redux/campersSlice';

import styles from './ItemHeader.module.scss';

const ItemHeader = ({
  id,
  title,
  rating,
  reviewsCount,
  location,
  price,
  pricePosition = 'bottom',
  onReviewsClick,
}) => {
  const getReviewText = (count) => (count === 1 ? 'review' : 'reviews');
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <div
      className={`${styles.component} ${
        pricePosition === 'right' && styles.right
      }`}
    >
      <div className={styles.topRow}>
        <h2 className={`${styles.title} ${styles.main}`}>{title}</h2>
        <div className={styles.info}>
          <button
            className={`${styles.rating} ${styles.infoItem}`}
            onClick={onReviewsClick}
          >
            <span className={`${styles.star} icon icon-star`}></span>
            {rating} ({reviewsCount} {getReviewText(reviewsCount)})
          </button>
          <span className={styles.infoItem}>
            <span className={`${styles.map} icon icon-map`}></span> {location}
          </span>
        </div>
      </div>
      <div className={styles.priceFavorite}>
        <span className={styles.main}>€{price}</span>
        <FavoriteButton
          isFavorite={isFavorite}
          handleToggleFavorite={handleToggleFavorite}
        />
      </div>
    </div>
  );
};

export default ItemHeader;
