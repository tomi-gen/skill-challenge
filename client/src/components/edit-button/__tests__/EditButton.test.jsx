import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, vi, expect } from "vitest";
import EditButton from "../EditButton";

afterEach(cleanup);

describe("EditButton tests", () => {
  it("Should render component with image", () => {
    render(
      <EditButton
        rowData={{}}
        setEditButtonClicked={() => {}}
        setCompletedFields={() => {}}
      />
    );

    screen.getByRole("button");
    screen.getByAltText("Edit image");
  });

  it("Should call setEditButtonClicked and setCompletedFields on click", () => {
    const mockSetEditButtonClicked = vi.fn();
    const mockSetCompletedFields = vi.fn();
    const mockRowData = { dni: 12345678, name: "Juan" };

    render(
      <EditButton
        rowData={mockRowData}
        setEditButtonClicked={mockSetEditButtonClicked}
        setCompletedFields={mockSetCompletedFields}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockSetEditButtonClicked).toHaveBeenCalledTimes(1);
    expect(mockSetEditButtonClicked).toHaveBeenCalledWith(true);
    expect(mockSetCompletedFields).toHaveBeenCalledTimes(1);
    expect(mockSetCompletedFields).toHaveBeenCalledWith(mockRowData);
  });
});
