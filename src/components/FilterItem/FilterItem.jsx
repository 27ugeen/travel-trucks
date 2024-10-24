import scss from './FilterItem.module.scss';

const FilterItem = ({ filter, onFilterChange }) => {
  const handleClick = () => {
    onFilterChange(filter.id);
  };

  return (
    <div
      className={`${scss.component} ${filter.isChecked ? scss.active : ''}`}
      onClick={handleClick}
    >
      <span className={`${scss.icon} icon ${filter.iconName}`}></span>
      <input
        className={scss.checkbox}
        type="checkbox"
        checked={filter.isChecked}
        onChange={handleClick}
      />
      <span className={scss.text}>{filter.name}</span>
    </div>
  );
};

export default FilterItem;
