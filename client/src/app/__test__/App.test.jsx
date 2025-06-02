import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App.jsx";

describe("App test", () => {
  it("Should render the app and fetch employee data", async () => {
    const mockData = [{ id: 1, name: "full name" }];
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("full name"));
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("employees")
    );
  });

  it("Should show loading component while fetching", async () => {
    let resolveFetch;
    global.fetch = vi.fn(
      () =>
        new Promise((resolve) => {
          resolveFetch = () => resolve({ json: () => Promise.resolve([]) });
        })
    );

    render(<App />);
    expect(screen.getByAltText("Loading Image"));
    resolveFetch();

    await waitFor(() => {
      screen.getByText("There is no data in the table");
    });
  });

  it("Should show error component if fetch fails", async () => {
    global.fetch = vi.fn(() => Promise.reject("Fetch failed"));

    render(<App />);
    await waitFor(() => {
      screen.getByText("An error has occurred");
    });
  });
});
