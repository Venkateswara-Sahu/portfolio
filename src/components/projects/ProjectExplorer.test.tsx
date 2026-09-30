import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { portfolioContent } from "@/data/portfolio";
import { ProjectExplorer } from "./ProjectExplorer";

describe("selected systems explorer", () => {
  it("defaults to Vigil in one labelled stage with supporting evidence", () => {
    render(<ProjectExplorer />);
    const stage = screen.getByRole("region", { name: "Vigil project preview" });
    expect(within(stage).getByText("20")).toBeVisible();
    expect(within(stage).getByText(/Final trained, untrained and input-control attribution study/)).toBeVisible();
    expect(screen.getByRole("button", { name: "Preview Vigil" })).toHaveAttribute("aria-pressed", "true");
  });

  it.each(["click", "focus", "mouseEnter"] as const)("selects F1 through %s without hiding any case-study link", (interaction) => {
    render(<ProjectExplorer />);
    fireEvent[interaction](screen.getByRole("button", { name: "Preview F1InsightAI" }));
    expect(screen.getByRole("region", { name: "F1InsightAI project preview" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Preview F1InsightAI" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Preview Vigil" })).toHaveAttribute("aria-pressed", "false");
    for (const [name, href] of [["Vigil", "#vigil"], ["F1InsightAI", "#f1insightai"], ["P&ID Intelligence", "#pid-intelligence"], ["CTR Predictor", "#ctr-predictor"]]) {
      expect(screen.getByRole("link", { name: `Read ${name} case study` })).toHaveAttribute("href", href);
    }
  });

  it("moves focus and selection with arrows, wraps, and supports Home and End", () => {
    render(<ProjectExplorer />);
    const vigil = screen.getByRole("button", { name: "Preview Vigil" });
    act(() => vigil.focus());
    for (const [key, title] of [["ArrowDown", "F1InsightAI"], ["ArrowRight", "P&ID Intelligence"], ["End", "CTR Predictor"], ["ArrowDown", "Vigil"], ["ArrowUp", "CTR Predictor"], ["ArrowLeft", "P&ID Intelligence"], ["Home", "Vigil"]]) {
      fireEvent.keyDown(document.activeElement!, { key });
      expect(screen.getByRole("button", { name: `Preview ${title}` })).toHaveFocus();
      expect(screen.getByRole("region", { name: `${title} project preview` })).toBeVisible();
    }
  });

  it("selects each distinct visual without removing evaluation context", () => {
    render(<ProjectExplorer />);
    for (const title of ["Vigil", "F1InsightAI", "P&ID Intelligence", "CTR Predictor"]) {
      fireEvent.click(screen.getByRole("button", { name: `Preview ${title}` }));
      const stage = screen.getByRole("region", { name: `${title} project preview` });
      expect(within(stage).getByRole("img", { name: `${title} system schematic` })).toBeVisible();
      expect(within(stage).getAllByRole("link", { name: /evidence/i }).length).toBeGreaterThan(0);
    }
  });

  it("honors provided projects and handles an empty collection", () => {
    const { rerender } = render(<ProjectExplorer projects={portfolioContent.projects.slice(1, 2)} />);
    expect(screen.getByRole("region", { name: "F1InsightAI project preview" })).toBeVisible();
    rerender(<ProjectExplorer projects={[]} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("ships visible default content and every project link without JavaScript", () => {
    const markup = document.createElement("div");
    markup.innerHTML = renderToStaticMarkup(<ProjectExplorer />);
    expect(markup.querySelectorAll('a[href^="#"]')).toHaveLength(4);
    expect(markup.querySelector('[aria-label="Vigil project preview"]')).toHaveTextContent("Evaluation seeds");
    expect(markup.querySelector('[style*="opacity:0"]')).toBeNull();
  });
});
