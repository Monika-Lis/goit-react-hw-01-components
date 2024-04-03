import { Profile } from './Profile';
import { Statistics } from './Statisctics';
import { FriendList } from './FriendList';
import user from './user.json';
import data from './data.json';

export const App = () => {
  return (
    <div className="background">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList />
    </div>
  );
};
