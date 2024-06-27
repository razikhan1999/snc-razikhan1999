import { Button } from "@/components/Button";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Button", () => {
  render(<Button active>Click me</Button>);
  const button = screen.getByRole("button");
  expect(button).toBeDefined();
});
