import React from 'react';
import styles from './StatItem.module.css'
import PropTypes from 'prop-types';
const StatItem = ({ label, percentage }) => {
    return (
        <li className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
        </li>
    );
};
StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
export default StatItem;