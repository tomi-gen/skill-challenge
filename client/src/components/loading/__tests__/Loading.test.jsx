import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import Loading from "../Loading.jsx";

afterEach(cleanup);

describe("Loading test:", () => {
  afterEach(cleanup);

  it("Should render component", () => {
    render(<Loading />);
  });

  it("Should render title", () => {
    render(<Loading />);
    screen.getByAltText("Loading Image");
  });
});
