import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemHeader from '../ItemHeader/ItemHeader';
import TagsGroup from '../TagsGroup/TagsGroup';
import Button from '../Button/Button';
import scss from './ItemCard.module.scss';

const ItemCard = ({ item }) => {
  const { name, rating, reviews, location, price, description, gallery } = item;
  console.log(item);

  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  const handleToggleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  const handleShowMoreClick = () => {
    console.log('Show more');
    navigate(`/catalog/${item.id}`);
  };

  const handleReviewsClick = () => {
    console.log('Show reviews');
    navigate(`/catalog/${item.id}/reviews`);
  };

  const tags = [
    { key: 'automatic', label: 'Automatic' },
    { key: 'AC', label: 'AC' },
    { key: 'petrol', label: 'Petrol' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'radio', label: 'Radio' },
    { key: 'bathroom', label: 'Bathroom' },
    { key: '2 adults', label: '2 Adults' },
  ].filter((tag) => item[tag.key]);

  return (
    <div className={scss.component}>
      <img src={gallery[0]?.thumb || ''} alt={name} className={scss.image} />
      <div className={scss.content}>
        <ItemHeader
          title={name}
          rating={rating}
          reviewsCount={reviews.length}
          location={location}
          price={price}
          isFavorite={favorite}
          onToggleFavorite={handleToggleFavorite}
          pricePosition="right"
          onReviewsClick={handleReviewsClick}
        />
        <div className={scss.description}>{description}</div>
        <TagsGroup tags={tags} />
        <div className={scss.button}>
          <Button variant="primary" onClick={handleShowMoreClick}>
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
