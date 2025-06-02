import SelectOptions from "../SelectOptions.jsx";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";

afterEach(cleanup);

describe("Select options test:", () => {
  afterEach(cleanup);

  it("Should render component", () => {
    fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
    render(
      <SelectOptions
        endpoint={""}
        setOptionSelected={() => {}}
        completedValue={[]}
      ></SelectOptions>
    );
    screen.getByRole("combobox");
  });

  it("Should have NA with no fetch results", () => {
    fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
    render(
      <SelectOptions
        endpoint={""}
        setOptionSelected={() => {}}
        completedValue={[]}
      ></SelectOptions>
    );
    screen.getByText("NA");
  });
  it("Should call setOptionSelected with first option when fetch has results", async () => {
    fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { name: "firstName", description: "firstName" },
            { name: "secondName", description: "secondName" },
          ]),
      })
    );
    const setOptionSelected = vi.fn();
    render(
      <SelectOptions
        endpoint={"/"}
        setOptionSelected={setOptionSelected}
        completedValue={[]}
      />
    );
    await waitFor(() => {
      screen.getByText("firstName");
    });
  });
});
