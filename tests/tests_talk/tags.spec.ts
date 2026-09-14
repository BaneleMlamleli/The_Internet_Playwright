import { test } from "@playwright/test";

test.describe("smoke test", () => {
  test("Test 0", { tag: "@smoke" }, () => {
    console.log("running test 0 - smoke test");
  });

  test("Test 1", { tag: ["@regression", "@smoke"] }, () => {
    console.log("running test 1 - smoke test");
  });
});

test.describe("regression test", () => {
  test("Test 0 @smoke", () => {
    console.log("running test 0 - regression");
  });

  test("Test 1 @regression @smoke", () => {
    console.log("running test 1 - regression");
  });
});
