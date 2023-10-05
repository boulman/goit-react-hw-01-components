import React from 'react';
import style from './Statistics.module.css';

export default function Statistics({ title = '', stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>Upload stats</h2>}
      <ul className={style.list}>
        {stats.map(stat => (
          <li
            className={style.item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <p className={style.label}>{stat.label}</p>
            <p className={style.percent}>{stat.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function randomColor() {
  const num = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + num.toString();
}
