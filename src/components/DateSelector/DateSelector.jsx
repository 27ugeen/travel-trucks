import DatePicker from 'react-datepicker';
import { useField, useFormikContext } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default DateSelector;
