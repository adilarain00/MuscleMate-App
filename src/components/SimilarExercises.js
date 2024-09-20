import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "60px", xs: "50px" } }}>
    <Typography
      sx={{ fontSize: { lg: "36px", xs: "28px" }, ml: "20px" }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FB6F09", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises.
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>

    <Typography
      sx={{
        fontSize: { lg: "36px", xs: "28px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FB6F09", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises.
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
