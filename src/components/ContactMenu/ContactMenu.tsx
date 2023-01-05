import styles from './ContactMenu.module.css';

export default function ContactMenu() {
  const links = [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bogdan-mazur-aba74287',
    },
    {
      label: 'GitHub',
      link: 'https://github.com/bmazurme',
    },
  ];

  return (
    <ul className={styles.contact__links}>
      {links.map(({ label, link }) => 
        <li className={styles.contact__link} key={label}>
          <a href={link}>
            {label}
          </a>
        </li>
      )}
    </ul>
  )
}
