import React from 'react';
import styles from './StatItem.module.css'
import PropTypes from 'prop-types';
const StatItem = ({ label, percentage }) => {
    return (
        <li style={{ backgroundColor: randColor() }} className={styles.item}>
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

function randColor() {
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    const color = `rgb(${r},${g},${b})`;
    return color;
}