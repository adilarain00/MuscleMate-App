import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/image04.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    {/* Logo Image */}
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "80px", height: "80px", margin: "0px 20px" }}
      />
    </Link>

    {/* Navbar Links */}
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="26px"
      alignItems="center"
      justifyContent="center"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FB6F09",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
