/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './DetailsTable.module.css';
import { ICON_RESOURCES } from '../../../resources/Resources';

const DetailsTable = ({ selectedItemDetails }) => {
  return (
    <div className={styles['details-module']}>
      <h2>{ICON_RESOURCES.DETAILS}</h2>
      <table>
        <tbody>
          {Object.entries(selectedItemDetails).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              {key === 'image' && typeof value === 'string' && value.match(/\.(jpeg|jpg|gif|png)$/) ? (
                <td><img src={value} alt="Image" className={styles['has-image']} /></td>
              ) : (
                <td>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
