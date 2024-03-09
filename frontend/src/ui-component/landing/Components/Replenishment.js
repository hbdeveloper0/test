import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { replenishment } from "../Data/Data";
import {
  replenishmentTitle,
  replenishmentNo,
  replenishmentTxt,
  replenishmentLink,
  replenishmentDivider,
} from "../constants/style";

const Replenishment = ({ title }) => {
  return (
    <>
      <Typography
        sx={{
          ...replenishmentTitle,
        }}
      >
        {title}
      </Typography>
      <Grid sx={{ pt: { sm: 2, xs: 1 } }}>
        {replenishment.map((data, index) => (
          <>
            <Grid key={index} sx={{ display: "flex" }}>
              <Grid>
                <Typography
                  sx={{
                    ...replenishmentNo,
                  }}
                >
                  {data.id}
                </Typography>
                {index + 1 === replenishment.length ? (
                  ""
                ) : (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      ...replenishmentDivider,
                    }}
                  />
                )}
              </Grid>
              <Grid
                sx={{ display: { sm: "flex", xs: "block" }, pt: 1.2, pl: 1.5 }}
              >
                <Typography
                  sx={{
                    ...replenishmentTxt,
                  }}
                >
                  {data.name}
                </Typography>
                <Box
                  sx={{
                    ...replenishmentLink,
                  }}
                >
                  &nbsp;
                  {data.link ? data.link : " "}
                </Box>
              </Grid>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default Replenishment;
