import Tabulation from "../Tabulation";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";

describe("Tabulation test:", () => {
  afterEach(cleanup);

  it("Should render tabs", () => {
    render(
      <Tabulation
        editButtonClicked={false}
        setEditButtonClicked={() => {}}
        setCreateButtonClicked={() => {}}
        setCompletedFields={() => {}}
      />
    );

    expect(screen.getByText("Table"));
    expect(screen.getByText("Employee"));
  });

  it("Should call the correct setters when Table is clicked", () => {
    const setEditButtonClicked = vi.fn();
    const setCreateButtonClicked = vi.fn();

    render(
      <Tabulation
        editButtonClicked={false}
        setEditButtonClicked={setEditButtonClicked}
        setCreateButtonClicked={setCreateButtonClicked}
        setCompletedFields={() => {}}
      />
    );

    const tableTab = screen.getByText("Table");
    fireEvent.click(tableTab);

    expect(setEditButtonClicked).toHaveBeenCalledWith(false);
    expect(setCreateButtonClicked).toHaveBeenCalledWith(false);
  });

  it("Should call corrects setters when Employee is clicked", () => {
    const setEditButtonClicked = vi.fn();
    const setCreateButtonClicked = vi.fn();
    const setCompletedFields = vi.fn();

    render(
      <Tabulation
        editButtonClicked={false}
        setEditButtonClicked={setEditButtonClicked}
        setCreateButtonClicked={setCreateButtonClicked}
        setCompletedFields={setCompletedFields}
      />
    );

    const employeeTab = screen.getByText("Employee");
    fireEvent.click(employeeTab);

    expect(setCompletedFields).toHaveBeenCalledWith([]);
    expect(setCreateButtonClicked).toHaveBeenCalledWith(true);
    expect(setEditButtonClicked).toHaveBeenCalledWith(false);
  });
});
