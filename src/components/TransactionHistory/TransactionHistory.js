import React from 'react';
import Transaction from './Transaction/Transaction';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (<Transaction key={item.id} type={item.type} amount={item.amount} currency={item.currency} />))}
            </tbody>
        </table>
    );
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),

};
export default TransactionHistory;