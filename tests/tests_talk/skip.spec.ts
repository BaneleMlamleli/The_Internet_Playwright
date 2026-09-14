import { test } from "@playwright/test";

test("Test 0", () => {
  console.log("running test 0");
});

test("Test 1", () => {
  console.log("running test 1");
});

test.skip("Test 2", () => {
  console.log("running test 2 - skip");
});

test.fixme("Test 4", () => {
  console.log("running test 4 - fixme");
});

test.fail("Test 3", () => {
  console.log("running test 3 - fail");
});
