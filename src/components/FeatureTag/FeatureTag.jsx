import styles from './FeatureTag.module.scss';

const iconClasses = {
  automatic: 'icon-tramsmission',
  manual: 'icon-tramsmission',
  petrol: 'icon-fuel-pump',
  diesel: 'icon-fuel-pump',
  hybrid: 'icon-fuel-pump',
  kitchen: 'icon-cup',
  ac: 'icon-ac',
  radio: 'icon-radio',
  bathroom: 'icon-shower',
  refrigerator: 'icon-fridge',
  tv: 'icon-tv',
};

const FeatureTag = ({ text }) => {
  const iconClass = iconClasses[text.toLowerCase()] || '';

  return (
    <div className={styles.tag}>
      <span className={`${styles.icon} icon ${iconClass}`} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default FeatureTag;
