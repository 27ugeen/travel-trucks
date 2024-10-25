import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({ isFavorite, handleToggleFavorite }) => {
  return (
    <button
      className={`${styles.button} ${isFavorite ? styles.favorited : ''}`}
      onClick={handleToggleFavorite}
    >
      <span className="icon icon-heart" />
    </button>
  );
};

export default FavoriteButton;
