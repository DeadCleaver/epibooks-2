import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";
import ThemeProvider from "../../contex/Theme/Theme";
import Wellcome from "./Wellcome";

test("verifica che il componente Wellcome sia montato correttamente", () => {
  render(<Home />);

  const wellEl = screen.getByTestId("el-wellcome");

  expect(wellEl).toBeInTheDocument();
});
