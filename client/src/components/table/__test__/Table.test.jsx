import Table from "../Table";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";

afterEach(cleanup);

describe("Table test", () => {
  it("Should render without data", () => {
    render(
      <Table
        setCompletedFields={() => {}}
        dataTable={[]}
        setEditButtonClicked={() => {}}
        isDeletedUseState={{}}
        isCreatedUseState={{}}
        setUserMessage={() => {}}
      ></Table>
    );
    screen.getByText("There is no data in the table");
  });
  it("Should render data", () => {
    render(
      <Table
        setCompletedFields={() => {}}
        dataTable={[{ Key1: "Value1" }]}
        setEditButtonClicked={() => {}}
        isDeletedUseState={{}}
        isCreatedUseState={{}}
        setUserMessage={() => {}}
      ></Table>
    );
    screen.getByText("Key1");
    screen.getByText("Value1");
  });
});
