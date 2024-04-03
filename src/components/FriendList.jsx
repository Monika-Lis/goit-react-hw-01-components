import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  <ul className="friend-list">
    {friends.map(friend => (
      <li className="item">
        <span className="status">{friend.status}</span>
        <img
          className="avatar"
          src="{ friend.avatar}"
          alt="{friend.name}"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>;
};
