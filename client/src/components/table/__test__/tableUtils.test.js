import { describe, expect, it } from "vitest";
import {
  toDisplayFormat,
  getTableValues,
  getHeaderValues,
} from "../tableUtils.js";

describe("Function toDisplayFormat", () => {
  it("toDisplayFormat must be a function", () => {
    expect(typeof toDisplayFormat).toBe("function");
  });
  it("Should convert camelCase or PascalCase to display format", () => {
    expect(toDisplayFormat("firstName")).toBe("First Name");
    expect(toDisplayFormat("FirstName")).toBe("First Name");
    expect(toDisplayFormat("thisIsATest")).toBe("This Is A Test");
  });
  it("Should return capitalized first letter even without camel case", () => {
    expect(toDisplayFormat("hello")).toBe("Hello");
  });
  it("Should return empty string when input is empty", () => {
    expect(toDisplayFormat("")).toBe("");
  });
});

describe("Function getTableValues", () => {
  it("getTableValues must be a function", () => {
    expect(typeof getTableValues).toBe("function");
  });
  it("Should extract values from array of objects", () => {
    const data = [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
    ];
    expect(getTableValues(data)).toEqual([
      ["John", 30],
      ["Jane", 25],
    ]);
  });
  it("Should return empty array when is not an Array", () => {
    expect(getTableValues({ key: "value" })).toEqual([]);
    expect(getTableValues("")).toEqual([]);
    expect(getTableValues(undefined)).toEqual([]);
    expect(getTableValues(null)).toEqual([]);
  });
});

describe("Function getHeaderValues", () => {
  it("getHeaderValues must be a function", () => {
    expect(typeof getHeaderValues).toBe("function");
  });
  it("Should extract keys from first object in array", () => {
    const data = [
      { name: "firstName", age: 30 },
      { name: "secondName", age: 25 },
    ];
    expect(getHeaderValues(data)).toEqual(["name", "age"]);
  });

  it("Should return empty array when is not an Array", () => {
    expect(getHeaderValues({ key: "value" })).toEqual([]);
    expect(getHeaderValues("")).toEqual([]);
    expect(getHeaderValues(undefined)).toEqual([]);
    expect(getHeaderValues(null)).toEqual([]);
  });
});
