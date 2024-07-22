import { Link } from "react-router-dom";

import { pages } from "../constants";

const Nav = () => (
  <nav>
    <div>
      <Link to={"/"}>Meta Front-End Developer</Link>
      <div>
        {pages.map((page) => (
          <Link key={page.name} to={`/${page.path}`}>
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Nav;
