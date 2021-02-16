import React from 'react';
import StatItem from './StatItem/StatItem';
import PropTypes from 'prop-types';
const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && (<h2 className="title">{title}</h2>)}

            <ul className="stat-list">
                {stats.map(stat => (<StatItem key={stat.id} label={stat.label} percentage={stat.percentage} />))}
            </ul>
        </section>
    );
};
Statistics.propTypes={
    title:PropTypes.string.isRequired,
    stats:PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Statistics;