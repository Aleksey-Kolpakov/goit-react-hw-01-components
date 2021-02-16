import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import user from './db/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './db/statisticalData.json';
import friends from './db/friends.json'
import FriendList from './components/FriendList/FriendList';
import transactions from './db/transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <Profile name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
