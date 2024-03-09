import { Box, useMediaQuery } from "@mui/material";
import React from "react";

const DescriptionLength = ({ title }) => {
  const smallScreen = useMediaQuery("(max-width:600px)");
  const largeScreen = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      {smallScreen && title.length > 170
        ? title.substring(0, 170) + "..."
        : largeScreen && title.length > 250
        ? title.substring(0, 250) + "..."
        : title}
    </Box>
  );
};

export default DescriptionLength;
