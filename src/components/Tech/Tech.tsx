import styles from './Tech.module.css';
import { IProfile } from '../../interfaces';

export default function Tech({ info }: { info: IProfile}) {
  const techList = [
    'JavaScript', 'TypeScript', 'React.js', 'Vue.js', 'Next.js', 'Nest.js', 'Express.js', 'Redux', 'RTK', 'React-d3-tree',
    'React-dnd',
    'Jest', 'Webpack', 'Parcel', 'PostCSS', 'Eslint', 'MUI', 'Tailwind', 'BEM', 'Canvas', 'MongoDB', 'PostgreSQL',
    'Git', 'Docker', 'CSR', 'SSR', 'REST', 'GraphQL', 'Axios', 'Figma', 'GitHub Actions', 'Sequelize', 'Mongoose'
  ];

  return (
    <section className={styles.tech}>
    <h2 className={styles.title}>{info.tech}</h2>
    <ul className={styles.tech__list}>
      {techList.map((item) => <li key={item.replaceAll('.', '_')} className={styles.tag}>{item}</li>)}
    </ul>
  </section>
  )
}
