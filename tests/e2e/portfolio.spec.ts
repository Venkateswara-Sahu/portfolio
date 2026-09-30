import { expect, test } from "@playwright/test";

test("project selection supports focus, arrows, click, and persistent case-study links", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Preview Vigil" }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("button", { name: "Preview F1InsightAI" })).toBeFocused();
  await expect(page.getByRole("region", { name: "F1InsightAI project preview" })).toBeVisible();
  await page.keyboard.press("End");
  await expect(page.getByRole("button", { name: "Preview CTR Predictor" })).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("button", { name: "Preview Vigil" })).toBeFocused();
  await page.getByRole("button", { name: "Preview P&ID Intelligence" }).click();
  await expect(page.getByRole("region", { name: "P&ID Intelligence project preview" })).toBeVisible();
  for (const title of ["Vigil", "F1InsightAI", "P&ID Intelligence", "CTR Predictor"]) {
    await expect(page.getByRole("link", { name: `Read ${title} case study` })).toBeVisible();
  }
});

test("pointer hover updates after a click but preserves keyboard-visible focus", async ({ page }) => {
  await page.goto("/");
  const vigil = page.getByRole("button", { name: "Preview Vigil" });
  const f1 = page.getByRole("button", { name: "Preview F1InsightAI" });
  await vigil.click();
  await expect(vigil).toBeFocused();
  expect(await vigil.evaluate(button => button.matches(":focus-visible"))).toBe(false);
  await f1.hover();
  await expect(page.getByRole("region", { name: "F1InsightAI project preview" })).toBeVisible();

  await page.keyboard.press("ArrowDown");
  await expect(f1).toBeFocused();
  expect(await f1.evaluate(button => button.matches(":focus-visible"))).toBe(true);
  await page.getByRole("button", { name: "Preview P&ID Intelligence" }).hover();
  await expect(f1).toBeFocused();
  await expect(page.getByRole("region", { name: "F1InsightAI project preview" })).toBeVisible();
});

for (const width of [390, 768, 1440, 1920]) {
  test(`content fits the ${width}px viewport with readable body copy`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    await expect(page.locator("article")).toHaveCount(4);
    const bodySizes = await page.locator(".case-study__narrative > div p, .case-study__evidence > p").evaluateAll(elements => elements.map(element => parseFloat(getComputedStyle(element).fontSize)));
    expect(Math.min(...bodySizes)).toBeGreaterThanOrEqual(16);
    if (width === 390) await expect(page.locator("#project-stage .system-visual__mobile")).toBeVisible();
    if (width === 1440) expect((await page.locator("#work").boundingBox())?.y).toBeLessThan(650);
  });
}

test("all case-study details and links work without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("http://localhost:3020");
  for (const id of ["vigil", "f1insightai", "pid-intelligence", "ctr-predictor"]) {
    await page.locator(`#${id} summary`).click();
    await expect(page.locator(`#${id} details`)).toHaveAttribute("open", "");
    await expect(page.locator(`#${id} .technical-details__body`)).toBeVisible();
  }
  await page.getByRole("link", { name: "Read F1InsightAI case study" }).click();
  await expect(page).toHaveURL(/#f1insightai$/);
  await context.close();
});

test("the single public resume downloads as a PDF", async ({ page, request }) => {
  await page.goto("/");
  const resumeLinks = await page.locator('a[href*="/resumes/"]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute("href")))]);
  expect(resumeLinks).toEqual(["/resumes/Venkateswara_Sahu_Applied_AI_Resume.pdf"]);
  const response = await request.get(resumeLinks[0]!);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
});
