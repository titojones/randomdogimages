import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <header className={classes.container}>
      <Link to="/" className={classes.logo}>
        Doggo
      </Link>
      <nav className={classes.wrapper}>
        <ul>
          <li>
            <Link to="/getDoggo">Get Doggo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
