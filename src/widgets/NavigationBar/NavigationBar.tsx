import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const links = [
  {
    id: crypto.randomUUID(),
    src: "/editor",
    name: "Go to Editor",
  },
];

export function NavigationBar() {
  return (
    <nav>
      <ul className={styles.navigation_bar_list}>
        {links.map((link) => (
          <Link
            to={link.src}
            key={link.id}
            className={styles.navigation_bar_list__item}
          >
            <span className={styles.navigation_bar_list__item_name}>
              {link.name}
            </span>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
