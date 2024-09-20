import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/image04.png";

const Footer = () => (
  <Box mt="80px">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      {/* Image Logo */}
      <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
    </Stack>

    {/* Footer Text */}
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "17px", xs: "15px" } }}
      mt="16px"
      textAlign="center"
      pb="20px"
      color="#FB6F09"
    >
      © 2024, copyrights @ GymPjoject
    </Typography>
  </Box>
);

export default Footer;
