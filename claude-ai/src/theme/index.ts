import {
  createTheme,
  defaultDarkModeOverride,
} from "@aws-amplify/ui-react/server";

export const theme = createTheme({
  name: "callrocket",
  overrides: [defaultDarkModeOverride],
});
