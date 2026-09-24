import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { KineticHero } from "./KineticHero";

describe("kinetic identity hero", () => {
  it("introduces the person and role before the decorative phrase", () => {
    render(<KineticHero />);

    const name = screen.getByRole("heading", {
      level: 1,
      name: "Venkateswara Sahu",
    });
    const role = screen.getByText("Applied AI & Machine Learning Engineer");
    const statement = screen.getByText(
      "I build evaluated AI systems—from concept-drift monitoring to Text-to-SQL agents—with evidence you can inspect.",
    );

    expect(name).toBeVisible();
    expect(role).toBeVisible();
    expect(statement).toBeVisible();
    expect(name.compareDocumentPosition(role) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(role.compareDocumentPosition(statement) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("offers direct resume and GitHub links in keyboard reading order", () => {
    render(<KineticHero />);

    const actions = screen.getAllByRole("link");
    expect(actions.map((link) => link.textContent?.trim())).toEqual(["Resume", "GitHub"]);
    expect(actions[0]).toHaveAttribute("href", "/resumes/Venkateswara_Sahu_Applied_AI_Resume.pdf");
    expect(actions[1]).toHaveAttribute("href", "https://github.com/Venkateswara-Sahu");
    expect(actions[1]).toHaveAttribute("rel", "noreferrer");
    for (const action of actions) {
      expect(action.tabIndex).toBe(0);
    }
  });

  it("keeps the illustrative signal out of the accessibility tree and tab order", () => {
    const { container } = render(<KineticHero />);
    const signal = container.querySelector("svg");

    expect(signal).not.toBeNull();
    expect(signal).toHaveAttribute("aria-hidden", "true");
    expect(signal).toHaveAttribute("focusable", "false");
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("ships settled identity, copy, actions, and display text in server markup", () => {
    const html = renderToStaticMarkup(<KineticHero />);
    const markup = document.createElement("div");
    markup.innerHTML = html;

    expect(markup.querySelector("h1")).toHaveTextContent("Venkateswara Sahu");
    expect(markup).toHaveTextContent("Applied AI & Machine Learning Engineer");
    expect(markup).toHaveTextContent("with evidence you can inspect.");
    expect(markup).toHaveTextContent("Make it measurable.");
    expect(markup.querySelectorAll("a")).toHaveLength(2);
    expect(markup.querySelector('[style*="opacity:0"], [style*="translateY"], [hidden]')).toBeNull();
  });
});
