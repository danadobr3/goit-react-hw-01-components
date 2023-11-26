import csslist from './FriendList.module.css'
import FriendListItem from './FrienfListItem/FriendListItem'

export default function FriendList({ friends }) {
    return (
    <ul className={csslist.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};