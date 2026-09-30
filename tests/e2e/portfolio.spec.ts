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

test("footer hover underlines stay beside their labels, not the stretched row bottom", async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    for (const name of ["Resume", "LinkedIn", "GitHub", "Hugging Face"]) {
      const link = page.getByRole("contentinfo").getByRole("link", { name, exact: true });
      await link.hover();
      const geometry = await link.evaluate(element => {
        const label = element.querySelector("span") ?? element;
        const range = document.createRange();
        range.selectNodeContents(label);
        const text = range.getBoundingClientRect();
        const underline = getComputedStyle(label, "::after");
        return {
          underlineGap: label.getBoundingClientRect().bottom - parseFloat(underline.bottom) - text.bottom,
          targetHeight: element.getBoundingClientRect().height,
        };
      });
      expect(geometry.underlineGap, `${name} underline at ${width}px`).toBeLessThanOrEqual(10);
      expect(geometry.targetHeight, `${name} tap target at ${width}px`).toBeGreaterThanOrEqual(44);
    }
    const resume = page.getByRole("contentinfo").getByRole("link", { name: "Resume", exact: true });
    await resume.hover();
    await expect.poll(() => resume.locator("span").evaluate(element => getComputedStyle(element, "::after").transform)).toBe("matrix(1, 0, 0, 1, 0, 0)");
    await page.getByRole("contentinfo").screenshot({ path: `.superpowers/portfolio-screenshots/footer-polish-${width}.png` });
  }
});

for (const reducedMotion of ["reduce", "no-preference"] as const) {
  test(`back-to-top appears below the hero and returns keyboard focus with ${reducedMotion} motion`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const backToTop = page.getByRole("link", { name: "Back to top", exact: true });
    await expect(backToTop).toBeHidden();
    await page.getByRole("contentinfo").scrollIntoViewIfNeeded();
    await expect(backToTop).toBeVisible({ timeout: 1500 });
    const box = await backToTop.boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(48);
    expect(box?.height).toBeGreaterThanOrEqual(48);
    expect((box?.x ?? 390) + (box?.width ?? 0)).toBeLessThan(390);
    expect((box?.y ?? 844) + (box?.height ?? 0)).toBeLessThan(844);
    await backToTop.focus();
    await page.keyboard.press("Enter");
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThanOrEqual(1);
    await expect(page.getByRole("link", { name: "Venkateswara Sahu, home" })).toBeFocused();
    await expect(backToTop).toBeHidden();
    if (reducedMotion === "reduce") {
      expect(await page.locator("html").evaluate(element => getComputedStyle(element).scrollBehavior)).toBe("auto");
    }
  });
}

test("project previews crossfade briefly without duplicating accessible content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.getByRole("button", { name: "Preview F1InsightAI" }).click();
  const stage = page.getByRole("region", { name: "F1InsightAI project preview" });
  await expect.poll(() => stage.evaluate(element => element.getAnimations({ subtree: true })
    .filter(animation => animation.effect instanceof KeyframeEffect && animation.effect.getKeyframes().some(frame => frame.opacity !== undefined))
    .map(animation => {
      const duration = Number(animation.effect?.getTiming().duration);
      return duration > 0 && duration <= 250;
    }))).toEqual([true, true]);
  await expect(stage.getByRole("img")).toHaveCount(1);
  await expect(stage.getByRole("link", { name: "View evidence ↗" })).toHaveCount(1);
  for (const key of ["ArrowDown", "End", "Home", "ArrowRight"]) await page.keyboard.press(key);
  await expect(page.getByRole("button", { name: "Preview F1InsightAI" })).toBeFocused();
  await expect(stage.getByRole("img")).toHaveCount(1);
  await expect.poll(() => stage.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
});

test("reduced motion skips preview fades, including preference changes during the visit", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.getByRole("button", { name: "Preview F1InsightAI" }).click();
  const stage = page.getByRole("region", { name: "F1InsightAI project preview" });
  await expect(stage.getByRole("img")).toHaveCount(1);
  expect(await stage.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
  await expect(stage.getByRole("link", { name: "View evidence ↗" })).toBeVisible();
});
