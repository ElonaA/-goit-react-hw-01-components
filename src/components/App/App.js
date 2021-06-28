import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import { Container } from '../Container/Container.jsx';
import { Profile } from '../Profile/Profile.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';
import { FriendList } from '../FriendList/FriendList.jsx';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <Container>
      <Profile
        key={user.name}
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
