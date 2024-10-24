import scss from './Tag.module.scss';

const iconClassesMap = {
  automatic: 'icon-tramsmission',
  ac: 'icon-ac',
  petrol: 'icon-fuel-pump',
  kitchen: 'icon-cup',
  radio: 'icon-radio',
  bathroom: 'icon-shower',
  refrigerator: 'icon-fridge',
};

const getIconClass = (text) => {
  return iconClassesMap[text.toLowerCase()] || '';
};

const Tag = ({ text }) => {
  if (!text) {
    return null;
  }

  const iconClass = getIconClass(text);

  return (
    <div className={scss.tag}>
      {iconClass && <span className={`${scss.icon} icon ${iconClass}`} />}
      <span className={scss.text}>{text}</span>
    </div>
  );
};

export default Tag;
