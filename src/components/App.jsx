import user from './Profile/user.json'
import React from 'react'
import Profile from './Profile/Profile'
import data from './Statistics/data.json'
import Statistics from './Statistics/Statistics'
import friends from './FriendList/friends.json'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions.json'

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  )
}

export default App