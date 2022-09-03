import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  //number of retries if test case fails
  retries: 1,

  // Limit the number of workers
  workers: 1,

  //Maximum timeOut
  //timeout: 120 * 1000,

  //Reporters
  reporter: [
    [`./src/reporter.ts`],
    [`html`, { outputFolder: "./src/report", open: "never" }],
  ],

  //testMatch: ["src/**/*.spec.ts"],
  testDir: "./src/specs",

  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    headless: false,
    video: "on-first-retry",
    launchOptions: {
      slowMo: 0,
    },
  },

  projects: [
    {
      name: "Chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    /* Test against mobile viewports. */
    {
      name: "Mobile_Chrome",
      use: {
        ...devices["Pixel 5"],
      },
    },
    /* Test against branded browsers. */
    {
      name: "Microsoft_Edge",
      use: {
        channel: "msedge",
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
      },
    },
    {
      name: "Chrome",
      use: {
        channel: "chrome",
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
      },
    },
    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
      },
    },
  ],
};
export default config;
