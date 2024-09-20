import { Box, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/image04.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "120px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography
      color="#FB6F09"
      fontWeight="700"
      fontSize="32px"
      fontFamily="cursive"
    >
      MuscleMate
    </Typography>
    <Typography
      fontFamily="sans-serif"
      fontWeight={700}
      sx={{ fontSize: { lg: "34px", xs: "30px" } }}
    >
      Train Smarter, Push Harder
    </Typography>
    <Typography fontSize="20px" color="#888">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "30px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FB6F09",
          padding: "11px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FB6F09"
      sx={{
        opacity: "0.1",
        pt: "20px",
        display: { lg: "block", xs: "none" },
        fontSize: "180px",
      }}
    >
      MuscleMate
    </Typography>

    {/* Hero-Banner Image */}
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
