import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Poiret One', sans-serif`,
    body: `'Poiret One', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#F2F0EB",
        color: "#111111",
      },
    },
  },
});

export default theme;
