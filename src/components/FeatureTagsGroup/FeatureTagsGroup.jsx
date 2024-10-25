import FeatureTag from '../FeatureTag/FeatureTag';
import styles from './FeatureTagsGroup.module.scss';

const FeatureTagsGroup = ({ item }) => {
  const tags = [
    {
      key: 'transmission',
      label: item.transmission === 'automatic' ? 'Automatic' : 'Manual',
      condition: ['automatic', 'manual'].includes(item.transmission),
    },
    {
      key: 'engine',
      label:
        item.engine === 'petrol'
          ? 'Petrol'
          : item.engine === 'diesel'
          ? 'Diesel'
          : 'Hybrid',
      condition: ['petrol', 'diesel', 'hybrid'].includes(item.engine),
    },
    { key: 'kitchen', label: 'Kitchen', condition: item.kitchen },
    { key: 'AC', label: 'AC', condition: item.AC },
    { key: 'radio', label: 'Radio', condition: item.radio },
    { key: 'bathroom', label: 'Bathroom', condition: item.bathroom },
    {
      key: 'refrigerator',
      label: 'Refrigerator',
      condition: item.refrigerator,
    },
    { key: 'TV', label: 'TV', condition: item.TV },
    // { key: 'water', label: 'Water' },
    // { key: 'gas', label: 'Gas' },
  ].filter((tag) => tag.condition);

  return (
    <div className={styles.tagsGroup}>
      {tags.map((tag) => (
        <FeatureTag key={tag.key} text={tag.label} />
      ))}
    </div>
  );
};

export default FeatureTagsGroup;
