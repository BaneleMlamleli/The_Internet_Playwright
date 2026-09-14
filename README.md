# The_Internet_Playwright

Learning locators and manipulating different elements in a web application

## Run Allure report

- Install Allure Report from official website https://allurereport.org/docs/playwright/
  - `npm install --save-dev @playwright/test allure-playwright`
  - In the playwright.config.ts file, add Allure Playwright as a reporter.
    ```
    export default defineConfig({
    // ...
       reporter: [["line"], ["allure-playwright"]],
    });
    ```
  - Convert the test results into an HTML report. This can be done by one of two commands:
    1. `npx allure generate` processes the test results and saves an HTML report into the `allure-report` directory. To view the report, use the `npx allure open` command.
    2. `npx allure serve` creates the same report as `npx allure generate`, then automatically opens the main page of the report in a web browser.
