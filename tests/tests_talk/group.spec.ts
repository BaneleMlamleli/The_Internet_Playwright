import { test } from "@playwright/test";

test.describe("smoke test", () => {
  test("Test 0", () => {
    console.log("running test 0 - smoke test");
  });

  test("Test 1", () => {
    console.log("running test 1 - smoke test");
  });
});

test.describe("regression test", () => {
  test("Test 0", () => {
    console.log("running test 0 - regression");
  });

  test("Test 1", () => {
    console.log("running test 1 - regression");
  });
});
