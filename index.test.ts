import { describe, test, expect } from "bun:test";
import { turingTest } from ".";

describe("turingTest", () => {
  test.each([
    [["abc", "bcd", "cde"], ["c"]],
    [
      ["abcd", "bcd", "cde", "cdef"],
      ["c", "d"],
    ],
    [
      ["nillie", "illie", "bllie"],
      ["i", "l", "l", "e"],
    ],
    [
      [
        "abbcd",
        "bcptbhcodr",
        "yubfgbhjfgjcyuydoio",
        "dfgdbsdhgdghbestrscghjghjdtyjfhgjg",
      ],
      ["b", "b", "c", "d"],
    ],
    [
      ["23", "dfg672df387gh", "dfu2io3g"],
      ["2", "3"],
    ],
  ])("with %p should be %p", (input, expected) => {
    expect(turingTest(input)).toEqual(expected);
  });
});
