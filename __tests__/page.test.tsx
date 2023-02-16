import React from "react";
import { render, screen } from "@testing-library/react";

import RootLayout from "../src/app/layout";
import Home from "@/app/page";

describe("RootLayout", () => {
  it("renders the nav bar text", () => {
    const { getByText } = render(<RootLayout>{}</RootLayout>);

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("Renders the footer", () => {
    const { getByText } = render(<RootLayout>{}</RootLayout>);
    expect(getByText("Katie Holliday")).toBeInTheDocument();
  });
});

describe("Home", () => {
  it("renders the Intro component", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /Hello my name is Katie Holliday/i,
    });

    const button1 = screen.getByRole("button", {
      name: /linkedin/i,
    });
    const button2 = screen.getByRole("button", {
      name: /projects/i,
    });

    expect(heading).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});
