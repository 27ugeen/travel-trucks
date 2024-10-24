import scss from './FavoriteButton.module.scss';

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  return (
    <button
      className={`${scss.button} ${isFavorite && scss.favorited}`}
      onClick={onToggleFavorite}
    >
      <span className="icon icon-heart" />
    </button>
  );
};

export default FavoriteButton;
