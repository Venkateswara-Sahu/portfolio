import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3020",
    channel: "msedge",
    contextOptions: { reducedMotion: "reduce" },
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run build && npm run start -- --port 3020",
    url: "http://localhost:3020",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
