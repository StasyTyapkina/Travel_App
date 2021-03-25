import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect, SelectWrapper, Option } from './Select.styles';

function Select({ currentValue, data, onChange }) {
  const options = Object.keys(data).map((key) => (
    <Option key={key} value={key}>
      {data[key]}
    </Option>
  ));

  return (
    <SelectWrapper>
      <StyledSelect value={currentValue} onChange={onChange}>
        {options}
      </StyledSelect>
      <span className="focus" />
    </SelectWrapper>
  );
}

Select.defaultProps = {
  currentValue: null,
};

Select.propTypes = {
  currentValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Select;
