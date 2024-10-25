import FeatureTagsGroup from '../FeatureTagsGroup/FeatureTagsGroup';
import styles from './VehicleSpecs.module.scss';

const VehicleSpecs = ({ item }) => {
  return (
    <div className={styles.container}>
      <FeatureTagsGroup item={item} />

      <section className={styles.details}>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>
        <div className="separator" />
        <div className={styles.detailsList}>
          <div className={styles.detailItem}>
            <span>Form</span>
            <span>{item.form}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Length</span>
            <span>{item.length}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Width</span>
            <span>{item.width}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Height</span>
            <span>{item.height}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Tank</span>
            <span>{item.tank}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Consumption</span>
            <span>{item.consumption}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleSpecs;
