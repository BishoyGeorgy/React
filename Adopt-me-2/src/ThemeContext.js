import { createContext } from "react";

const theme = createContext(["green", () => {}]);

export default theme;