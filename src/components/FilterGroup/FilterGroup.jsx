import FilterItem from '../FilterItem/FilterItem';
import scss from './FilterGroup.module.scss';

const FilterGroup = ({ title, filters, onFilterChange }) => {
  return (
    <div className={scss.component}>
      <h3 className={scss.title}>{title}</h3>
      <span className={scss.divider}></span>
      <div className={scss.items}>
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
