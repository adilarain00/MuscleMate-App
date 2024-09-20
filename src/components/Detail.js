import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="50px"
      marginTop="-30px"
      sx={{ flexDirection: { lg: "row" }, p: "0 50px", alignItems: "center" }}
    >
      {/* Image */}
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      {/* Text Detail */}
      <Stack sx={{ gap: { lg: "20px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "32px", xs: "24px" } }}
          fontWeight={700}
          textTransform="capitalize"
          color="#FB6F09"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "17px", xs: "14px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>

        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="20px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "22px", xs: "14px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
