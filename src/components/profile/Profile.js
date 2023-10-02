import React from 'react';
import style from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.desc}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.txt}>@{tag}</p>
        <p className={style.txt}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.txt}>Followers</span>
          <span className={style.stat}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.txt}>Views</span>
          <span className={style.stat}>{stats.views}</span>
        </li>
        <li>
          <span className={style.txt}>Likes</span>
          <span className={style.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
