import { describe, expect, it } from "vitest";

import { portfolioContent } from "./portfolio";

describe("portfolioContent", () => {
  it("positions the candidate and primary work with evidence-led language", () => {
    expect(portfolioContent.identity.role).toBe(
      "Applied AI & Machine Learning Engineer",
    );

    expect(
      portfolioContent.projects
        .filter((project) => project.presentation === "primary")
        .map((project) => project.title),
    ).toEqual(["Vigil", "F1InsightAI", "P&ID Intelligence"]);

    const vigil = portfolioContent.projects.find(
      (project) => project.id === "vigil",
    );

    expect(vigil?.evaluation.metrics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: "200 samples",
        }),
      ]),
    );

    const publicCopy = JSON.stringify(portfolioContent).toLowerCase();

    for (const bannedPhrase of [
      "enterprise",
      "production-grade",
      "advanced",
      "expert",
    ]) {
      expect(publicCopy).not.toContain(bannedPhrase);
    }
  });
});
