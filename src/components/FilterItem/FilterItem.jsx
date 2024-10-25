import styles from './FilterItem.module.scss';

const FilterItem = ({ filter, onFilterChange }) => {
  const handleClick = () => {
    onFilterChange(filter.id, filter.type);
  };

  return (
    <div
      className={`${styles.component} ${filter.isChecked ? styles.active : ''}`}
      onClick={handleClick}
    >
      <span className={`${styles.icon} icon ${filter.iconName}`}></span>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={filter.name}
        checked={filter.isChecked}
        onChange={handleClick}
      />
      <span className={styles.text}>{filter.label}</span>
    </div>
  );
};

export default FilterItem;
