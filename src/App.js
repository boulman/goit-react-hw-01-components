import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import Transactions from './components/Transactions/Transactions';
import user from './datas/user.json';
import data from './datas/data.json';
import friends from './datas/friends.json';
import transactions from './datas/transactions.json';

function App() {
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
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
}

export default App;
