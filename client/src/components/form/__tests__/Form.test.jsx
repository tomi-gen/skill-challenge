import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import EmployeeForm from "../Form.jsx";

afterEach(cleanup);

describe("Employee Form test:", () => {
  afterEach(cleanup);
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
  });

  it("Should render fields", () => {
    render(
      <EmployeeForm
        setEditButtonClicked={() => {}}
        setCreateButtonClicked={() => {}}
        editButtonClicked={false}
        completedFields={[]}
        setIsCreated={() => {}}
        setUserMessage={() => {}}
      />
    );
    screen.getByPlaceholderText("DNI");
    screen.getByPlaceholderText("Complete Name");
    screen.getByPlaceholderText("Description");
    screen.getByText("Birth Date");
    screen.getByText("Role");
    screen.getByText("Is Developer");
    screen.getByText("Send");
  });
  it("Should allow user to input DNI", () => {
    render(
      <EmployeeForm
        setEditButtonClicked={() => {}}
        setCreateButtonClicked={() => {}}
        editButtonClicked={false}
        completedFields={[]}
        setIsCreated={() => {}}
        setUserMessage={() => {}}
      />
    );
    const dniInput = screen.getByPlaceholderText("DNI");
    fireEvent.change(dniInput, { target: { value: "12345678" } });
    expect(dniInput.value).toBe("12345678");
  });
  it("Should show error if fields are empty", () => {
    const setUserMessage = vi.fn();
    render(
      <EmployeeForm
        setEditButtonClicked={() => {}}
        setCreateButtonClicked={() => {}}
        editButtonClicked={false}
        completedFields={[]}
        setIsCreated={() => {}}
        setUserMessage={setUserMessage}
      />
    );

    fireEvent.click(screen.getByText("Send"));

    expect(setUserMessage).toBeCalled();
    expect(setUserMessage).toBeCalledWith("Complete all fields");
  });
  it("Should show error if Dni is invalid", () => {
    const setUserMessage = vi.fn();

    render(
      <EmployeeForm
        setEditButtonClicked={() => {}}
        setCreateButtonClicked={() => {}}
        editButtonClicked={false}
        completedFields={[]}
        setIsCreated={() => {}}
        setUserMessage={setUserMessage}
      />
    );

    const dniInput = screen.getByPlaceholderText("DNI");
    const nameInput = screen.getByPlaceholderText("Complete Name");
    const birthInput = screen.getByRole("birth-date");

    fireEvent.change(dniInput, { target: { value: "1" } });
    fireEvent.change(nameInput, { target: { value: "full name" } });
    fireEvent.change(birthInput, { target: { value: "1990-01-01" } });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "NA" } });

    const button = screen.getByText("Send");
    fireEvent.click(button);
    expect(setUserMessage).toBeCalledWith("The DNI must be a valid number");
  });
  it("Should show error if birth date is invalid", () => {
    const setUserMessage = vi.fn();

    render(
      <EmployeeForm
        setEditButtonClicked={() => {}}
        setCreateButtonClicked={() => {}}
        editButtonClicked={false}
        completedFields={[]}
        setIsCreated={() => {}}
        setUserMessage={setUserMessage}
      />
    );

    const dniInput = screen.getByPlaceholderText("DNI");
    const nameInput = screen.getByPlaceholderText("Complete Name");
    const birthInput = screen.getByRole("birth-date");

    fireEvent.change(dniInput, { target: { value: "20111222" } });
    fireEvent.change(nameInput, { target: { value: "full name" } });
    fireEvent.change(birthInput, { target: { value: "1800-01-01" } });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "NA" } });

    const button = screen.getByText("Send");
    fireEvent.click(button);
    expect(setUserMessage).toBeCalledWith(
      "The birth date must be a valid date"
    );
  });
  it("Should do a fetch with PUT", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );

    render(
      <EmployeeForm
        setEditButtonClicked={() => {}}
        setCreateButtonClicked={() => {}}
        editButtonClicked={true}
        completedFields={[]}
        setIsCreated={() => {}}
        setUserMessage={() => {}}
      />
    );

    const dniInput = screen.getByPlaceholderText("DNI");
    const nameInput = screen.getByPlaceholderText("Complete Name");
    const birthInput = screen.getByRole("birth-date");

    fireEvent.change(dniInput, { target: { value: "20111222" } });
    fireEvent.change(nameInput, { target: { value: "full name" } });
    fireEvent.change(birthInput, { target: { value: "1990-01-01" } });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "NA" } });

    const button = screen.getByText("Send");
    fireEvent.click(button);

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining("/employees/"),
        expect.objectContaining({
          method: "PUT",
          headers: expect.any(Object),
          body: expect.any(String),
        })
      )
    );
  });
  it("Should do a fetch with PUT", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );

    render(
      <EmployeeForm
        setEditButtonClicked={() => {}}
        setCreateButtonClicked={() => {}}
        editButtonClicked={false}
        completedFields={[]}
        setIsCreated={() => {}}
        setUserMessage={() => {}}
      />
    );

    const dniInput = screen.getByPlaceholderText("DNI");
    const nameInput = screen.getByPlaceholderText("Complete Name");
    const birthInput = screen.getByRole("birth-date");

    fireEvent.change(dniInput, { target: { value: "20111222" } });
    fireEvent.change(nameInput, { target: { value: "full name" } });
    fireEvent.change(birthInput, { target: { value: "1990-01-01" } });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "NA" } });

    const button = screen.getByText("Send");
    fireEvent.click(button);

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining("/employees"),
        expect.objectContaining({
          method: "POST",
          headers: expect.any(Object),
          body: expect.any(String),
        })
      )
    );
  });
});
