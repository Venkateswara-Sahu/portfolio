import { render, screen, within } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import HomePage from "./page";
import { portfolioContent } from "@/data/portfolio";

describe("assembled portfolio", () => {
  it("renders one main landmark, the identity, all projects, and background in order", () => {
    render(<HomePage />);
    expect(screen.getAllByRole("main")).toHaveLength(1);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getAllByRole("article").map((article) => article.id)).toEqual(portfolioContent.projects.map(({ id }) => id));
    const headings = screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent);
    expect(headings).toEqual(["Systems, with evidence.", "A closer look.", "The work behind the work."]);
    for (const project of portfolioContent.projects) {
      const article = screen.getByRole("article", { name: project.title });
      expect(within(article).getByText(project.evaluation.summary)).toBeVisible();
      expect(within(article).getByText(project.limitations)).toBeInTheDocument();
      expect(within(article).getByRole("link", { name: "Repository" })).toBeVisible();
    }
  });
  it("preserves all full case-study text in server HTML and uses native disclosures", () => {
    const html = renderToStaticMarkup(<HomePage />);
    const root = document.createElement("div"); root.innerHTML = html;
    expect(root.querySelectorAll("details")).toHaveLength(4);
    for (const project of portfolioContent.projects) expect(root.querySelector(`#${project.id}`)).toHaveTextContent(project.limitations);
    expect(root.querySelector('[style*="opacity:0"]')).toBeNull();
    expect(root).not.toHaveTextContent("93.3%");
  });
});
