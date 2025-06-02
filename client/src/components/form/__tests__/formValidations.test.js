import { describe, expect, it } from "vitest";
import {
  validateDate,
  validateDni,
  validateEmptyFields,
} from "../formValidations";

describe("Function ValidateDate", () => {
  it("ValidateDate must be a function", () => {
    expect(typeof validateDate).toBe("function");
  });
  it("Date must be a valid date", () => {
    expect(validateDate(12)).toBe(false);
    expect(validateDate(100000000)).toBe(false);
    expect(validateDate("1990-10-10")).toBe(true);
    expect(validateDate("10-10-1990")).toBe(true);
  });
  it("Date must not be empty", () => {
    expect(validateDate("")).toBe(false);
    expect(validateDate(undefined)).toBe(false);
    expect(validateDate()).toBe(false);
  });
});
describe("Function validateDni", () => {
  it("validateDni must be a function", () => {
    expect(typeof validateDni).toBe("function");
  });
  it("Dni must be higher than 9999999 and lower than 100000000", () => {
    expect(validateDni(9999999)).toBe(false);
    expect(validateDni(100000000)).toBe(false);
    expect(validateDni("30111222")).toBe(true);
  });
  it("Dni must be a valid number", () => {
    expect(validateDni("word")).toBe(false);
    expect(validateDni(true)).toBe(false);
    expect(validateDni(() => {})).toBe(false);
  });
  it("Dni must not be empty", () => {
    expect(validateDni("")).toBe(false);
    expect(validateDni(undefined)).toBe(false);
    expect(validateDni()).toBe(false);
  });
});
describe("Function validateEmptyFields", () => {
  it("validateDni must be a function", () => {
    expect(typeof validateEmptyFields).toBe("function");
  });
  it("Fields must be have an array with length", () => {
    expect(validateEmptyFields([])).toBe(false);
    expect(validateEmptyFields(undefined)).toBe(false);
    expect(validateEmptyFields()).toBe(false);
    expect(validateEmptyFields(123)).toBe(false);
    expect(validateEmptyFields("123")).toBe(false);
    expect(validateEmptyFields([1, 2])).toBe(true);
    expect(validateEmptyFields([1])).toBe(true);
    expect(validateEmptyFields(() => {})).toBe(false);
  });
});
