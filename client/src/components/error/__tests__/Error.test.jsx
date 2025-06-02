import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import Error from "../error.jsx";

afterEach(cleanup);

describe("Error test:", () => {
  afterEach(cleanup);

  it("Should render component", () => {
    render(<Error />);
  });

  it("Should render title", () => {
    render(<Error />);
    screen.getByText("An error has occurred");
  });
});
