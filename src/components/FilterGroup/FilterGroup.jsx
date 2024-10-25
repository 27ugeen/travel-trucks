import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterGroup.module.scss';

const FilterGroup = ({ title, filters, onFilterChange }) => {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>{title}</h3>
      <span className="separator"></span>
      <div className={styles.items}>
        {filters.map((filter) => (
          <FilterItem
            key={filter.id}
            filter={filter}
            onFilterChange={onFilterChange}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
