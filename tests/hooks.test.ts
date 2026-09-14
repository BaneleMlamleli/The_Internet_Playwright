import { test, expect } from "@playwright/test";

test.beforeAll("beforeAll hook", async () => {
  // await page.goto('https://www.google.com/');
  console.log("Running the beforeAll hook");
});

test("Test 1", async () => {
  console.log("Running Test 1");
});

test.afterAll("afterAll hook", async () => {
  console.log("Running  the afterAll hook");
});

test.beforeEach("beforeEach hook", async () => {
  console.log("Running the beforeEach hook");
});

test.afterEach("afterEach hook", async () => {
  console.log("Running the afterEach hook");
});

test("Test 2", async () => {
  console.log("Running Test 2");
});
