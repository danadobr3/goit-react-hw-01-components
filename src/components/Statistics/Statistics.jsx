import styles from './Statistics.module.css'

const getBgColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stats__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.stats}
              key={id}
              style={{ backgroundColor: getBgColor() }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
</section>
    );
}