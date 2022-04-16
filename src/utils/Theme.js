import { createTheme } from "@mui/material";

const Theme = createTheme({
    breakpoints: {
        values: {
          mobile: 0,
          tablet: 640,
          laptop: 1024,
          desktop: 1200,
        },
    },
    shape: {
      lowBorderRadius: 4,
      mediumBorderRadius : 6,
      highBorderRadius: 10
    }, 
})

export default Theme;