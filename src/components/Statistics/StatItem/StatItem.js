import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatItem.module.css'
import getRandomColor from '../../../utils/randomColor.js'

const StatItem = ({ label, percentage }) => {
    return (
        <li style={{ backgroundColor: getRandomColor() }} className={styles.item}>
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

