import { Typography, Box, Stack } from "@mui/material";

import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "60px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "36px", xs: "28px" } }}
        fontWeight={700}
        color="#000"
        mb="50px"
        display="flex"
        alignItems="center"
      >
        Watch{" "}
        <span style={{ color: "#FB6F09", textTransform: "capitalize" }}>
          {name}{" "}
        </span>
        exercise videos on youtube.
      </Typography>

      {/* Videos */}
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "30px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "22px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
