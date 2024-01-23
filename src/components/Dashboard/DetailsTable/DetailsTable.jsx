import React from 'react';
import styles from './DetailsTable.module.css';

const DetailsTable = ({ selectedItemDetails }) => {
  return (
    <div className={styles['details-module']}>
      <h2>Details</h2>
      <table>
        <tbody>
          {Object.entries(selectedItemDetails).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
