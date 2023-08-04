import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Users from "./Pages/Users";

test("Render halaman User dengan benar", async () => {
  render(
    <MemoryRouter>
      <Users />
    </MemoryRouter>
  );

  // Mencari text tertentu
  const title = screen.getByText(/Username/i);
  expect(title).toBeInTheDocument();

  // mencari tombol tertentu
  // pada halaman muncul karena klik tombol
  // pastikan button memiliki role= "button"
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Back to Home");

  // menunggu proses fetch user dari API
  // kita kasih waktu sebanyak 5 detik
  // kemudian mencari sebuah nama dari API
  const user = await waitFor(() => screen.findByText("Leanne Graham"), {
    timeout: 5000,
  });
  expect(user).toBeInTheDocument();
});
