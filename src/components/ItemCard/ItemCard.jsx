import { useNavigate } from 'react-router-dom';
import ItemHeader from '../ItemHeader/ItemHeader';
import FeatureTagsGroup from '../FeatureTagsGroup/FeatureTagsGroup';
import Button from '../Button/Button';

import styles from './ItemCard.module.scss';

const ItemCard = ({ item }) => {
  const { name, rating, reviews, location, price, description, gallery, id } =
    item;
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    navigate(`/catalog/${id}`);
  };

  const handleReviewsClick = () => {
    navigate(`/catalog/${id}/reviews`);
  };

  return (
    <div className={styles.component}>
      <img
        src={gallery[0]?.thumb || ''}
        alt={name}
        className={styles.thumbnail}
      />
      <div className={styles.content}>
        <ItemHeader
          id={id}
          title={name}
          rating={rating}
          reviewsCount={reviews.length}
          location={location}
          price={price}
          pricePosition="right"
          onReviewsClick={handleReviewsClick}
        />
        <div className={styles.description}>{description}</div>
        <FeatureTagsGroup item={item} />
        <div className={styles.button}>
          <Button variant="primary" onClick={handleShowMoreClick}>
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
