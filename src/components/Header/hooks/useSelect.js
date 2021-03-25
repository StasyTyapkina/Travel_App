import { useState } from 'react';

const useSelect = () => {
  const [selectValue, setSelectValue] = useState('en');

  const handleSelect = (event) => {
    setSelectValue(event.target.value);
  };

  return [selectValue, handleSelect];
};

export default useSelect;
