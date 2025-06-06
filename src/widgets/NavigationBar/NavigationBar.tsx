import { Link } from "react-router-dom";

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
      <ul>
        {links.map((link) => (
          <Link to={link.src} key={link.id}>
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
