import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Luminus</h1>
      <nav>
        <ul>
          <li>
            <Link to="/editor">Go to Editor</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
