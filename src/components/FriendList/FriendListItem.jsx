import cssitem from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={cssitem.item}>
            <span className={isOnline ? cssitem.true : cssitem.false}>{isOnline}</span>
  <img className={cssitem.avatar} src={avatar} alt={name} />
  <p className={cssitem.name}>{name}</p>
</li>
    );
}