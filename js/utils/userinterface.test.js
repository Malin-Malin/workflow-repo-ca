import { describe, it, expect } from "vitest";
import { isActivePath } from "./userinterface.js";

describe("isActivePath", () => {
  it("should return true for active paths", () => {
    expect(
      isActivePath(
        "/home/user/project/src",
        "/home/user/project/src/components",
      ),
    ).toBe(true);
  });

  it("should return false for inactive paths", () => {
    expect(
      isActivePath("/home/user/project/tests", "/home/user/project/src"),
    ).toBe(false);
  });

  it("should return true for exact match", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  it("should return false for non-matching paths", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });

  it("should return true for root path", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("should return false for root path when not root", () => {
    expect(isActivePath("/about", "/home")).toBe(false);
  });
});
