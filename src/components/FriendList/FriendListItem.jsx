import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const classNames = require('classnames');

export const FriendListItem = ({ avatar, name, isOnline }) => {
    let statusClassName = classNames(s.status, isOnline ? s.online : s.offline );
    return (
      
       <li className={s.item}>
            <span className={statusClassName}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}
 

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired, 
}