import { useState } from 'react';
import scss from './Input.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Input = ({
  label,
  placeholder,
  icon,
  type = 'text',
  withCalendar = false,
  name,
  value,
  onChange,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (e) => {
    onChange(e);
  };

  const handleDateChange = (date) => {
    onChange({ target: { name, value: date } });
    setShowCalendar(false);
  };

  return (
    <div className={scss.inputWrapper}>
      {label && <label className={scss.label}>{label}</label>}
      <div className={scss.inputContainer}>
        {icon && (
          <span
            className={`${scss.icon} icon ${icon} ${value && scss.iconActive}`}
          />
        )}
        {!withCalendar ? (
          <input
            type={type}
            placeholder={placeholder}
            className={scss.input}
            name={name}
            value={value}
            onChange={handleInputChange}
          />
        ) : (
          <DatePicker
            selected={value}
            onChange={handleDateChange}
            placeholderText={placeholder}
            className={scss.input}
            onFocus={() => setShowCalendar(true)}
            onClickOutside={() => setShowCalendar(false)}
            open={showCalendar}
            dateFormat="MMMM d, yyyy"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
