import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Render halaman home dengan benar", () => {
  render(<App />);

  // Mencari text tertentu
  const title = screen.getByText(/why do we need test ?/i);
  expect(title).toBeInTheDocument();

  // Mencari button tertentu
  // pastikan button memiliki role= "button"
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("User List");

  // klik tombol Users List
  fireEvent.click(btn);
  // mencari tombol tertentu
  // pada halaman muncul karena klik tombol
  // pastikan button memiliki role= "button"
  const btn2 = screen.getByRole("button");
  expect(btn2).toBeInTheDocument();
  expect(btn2).toHaveTextContent("Back to Home");
});
