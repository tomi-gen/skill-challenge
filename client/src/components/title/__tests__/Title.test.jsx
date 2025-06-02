import Title from "../Title.jsx";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";

afterEach(cleanup);

describe("Title test:", () => {
  afterEach(cleanup);

  it("Should render component", () => {
    render(<Title>Title</Title>);
    screen.getByText("Title");
  });
});
