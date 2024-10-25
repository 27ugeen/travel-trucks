import Review from '../Review/Review';
import styles from './ReviewGroup.module.scss';

const ReviewGroup = ({ reviews }) => {
  return (
    <div className={styles.reviewGroup}>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewGroup;
