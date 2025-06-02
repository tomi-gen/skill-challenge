import UserMessage from "../UserMessage.jsx";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";

afterEach(cleanup);

describe("User Message test:", () => {
  afterEach(cleanup);

  it("Should render component", () => {
    render(
      <UserMessage
        userMessage={"message"}
        setUserMessage={() => {}}
      ></UserMessage>
    );
    screen.getByText("message");
  });
});
