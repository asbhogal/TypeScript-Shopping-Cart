import { Theme } from "@chakra-ui/react";

declare module "@chakra-ui/react" {
  interface Theme extends Record<string, unknown> {
    customTheme: Theme;
  }
}

declare const customTheme: Theme;

export default customTheme;
