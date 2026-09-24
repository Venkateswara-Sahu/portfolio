import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContactFooter } from "./ContactFooter";
import { EditorialNav } from "./EditorialNav";

const expectVisibleFocusTreatment = (element: HTMLElement) => {
  expect(element.className).toMatch(/focus-visible:/);
};

const globalStyles = readFileSync(
  resolve(process.cwd(), "src/app/globals.css"),
  "utf8",
);

describe("editorial shell", () => {
  it("renders a labelled navigation landmark with the primary actions", () => {
    render(<EditorialNav />);

    const navigation = screen.getByRole("navigation", {
      name: /primary navigation/i,
    });
    const resume = within(navigation).getByRole("link", { name: "Resume" });
    const github = within(navigation).getByRole("link", { name: "GitHub" });

    expect(resume).toHaveAttribute(
      "href",
      "/resumes/Venkateswara_Sahu_Applied_AI_Resume.pdf",
    );
    expect(github).toHaveAttribute(
      "href",
      "https://github.com/Venkateswara-Sahu",
    );
    expect(github).toHaveAttribute("rel", "noreferrer");
    expectVisibleFocusTreatment(resume);
    expectVisibleFocusTreatment(github);
  });

  it("renders a contact landmark with direct email and social links", () => {
    render(<ContactFooter />);

    const footer = screen.getByRole("contentinfo");
    const email = within(footer).getByRole("link", {
      name: "venkateswarsahu000@gmail.com",
    });
    const linkedin = within(footer).getByRole("link", { name: "LinkedIn" });

    expect(email).toHaveAttribute(
      "href",
      "mailto:venkateswarsahu000@gmail.com",
    );
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/venkateswara-sahu/",
    );
    expectVisibleFocusTreatment(email);
    expectVisibleFocusTreatment(linkedin);
  });

  it("keeps the anchor color reset in Tailwind's base layer", () => {
    expect(globalStyles).toMatch(
      /@layer base\s*{\s*a\s*{[^}]*color:\s*inherit;[^}]*}\s*}/,
    );
  });

  it("uses the accessible footer-muted token for the small colophon", () => {
    expect(globalStyles).toContain(
      "--color-editorial-footer-muted: #938d82;",
    );
    expect(globalStyles).toMatch(
      /\.contact-footer__colophon\s*{[^}]*color:\s*var\(--color-editorial-footer-muted\);/,
    );
  });
});
