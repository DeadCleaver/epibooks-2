import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";
import Wellcome from "./Wellcome";

test("verifica che il componente Wellcome sia montato correttamente", () => {
  render(<Wellcome />);

  const wellEl = screen.getByTestId("el-wellcome");

  expect(wellEl).toBeInTheDocument();
});
