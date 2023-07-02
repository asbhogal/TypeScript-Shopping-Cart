import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="header">
      <Link to="/" as={NavLink}>
        Home
      </Link>
      <Link to="/about" as={NavLink}>
        About
      </Link>
      <Link to="/shop" as={NavLink}>
        Shop
      </Link>
    </header>
  );
}
