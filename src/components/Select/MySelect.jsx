import React from 'react';

//Style
import styles from './MySelect.module.css';

//Components
import { Select, MenuItem } from '@mui/material';

const MySelect = ({ options, value, handleChange }) => {
  return (
    <Select className={styles.select} value={value} onChange={handleChange}>
      <MenuItem value="" disabled>
        Choose an option
      </MenuItem>
      {options.map((item, index) => (
        <MenuItem value={item} key={index}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MySelect;
