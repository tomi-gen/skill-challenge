import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, it, vi, expect } from "vitest";
import DeleteButton from "../DeleteButton.jsx";

afterEach(cleanup);

describe("EditButton test", () => {
  it("Should render component with image", () => {
    render(
      <DeleteButton
        dni={"1"}
        setIsDeleted={() => {}}
        isDeleted={false}
        setUserMessage={() => {}}
      />
    );

    screen.getByRole("button");
    screen.getByAltText("Delete image");
  });

  it("Should call confirm delete when is clicked", () => {
    render(
      <DeleteButton
        dni={"1"}
        setIsDeleted={() => {}}
        isDeleted={false}
        setUserMessage={() => {}}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    screen.getByText(
      `The employee with DNI: 1 will be deleted. Do you want to continue?`
    );
  });
  it("Should call confirm delete when is clicked", async () => {
    fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );

    const setIsDeleted = vi.fn();
    render(
      <DeleteButton
        dni={"1"}
        setIsDeleted={setIsDeleted}
        isDeleted={false}
        setUserMessage={() => {}}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const confirm = screen.getByText("Confirm");
    fireEvent.click(confirm);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining("/employees/"),
        expect.objectContaining({
          method: "DELETE",
        })
      );
    });
  });
});
