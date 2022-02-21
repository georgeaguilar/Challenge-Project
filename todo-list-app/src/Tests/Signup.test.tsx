import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Signup from "../Components/Signup";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer();

describe("<Signup />", () => {
  test("expect a success", async () => {
    server.listen();
    server.use(
      rest.post("http://localhost:5000/users", (req, res, ctx) => {
        return res();
      })
    );

    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <Routes>
          <Route path="/login" element={<div>Login Success</div>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    const success = await screen.findByText("Login Success");
    expect(success).toBeInTheDocument();
  });

  test("expect a error", async () => {
    server.listen();
    server.use(
      rest.post("http://localhost:5000/users", (req, res, ctx) => {
        return res(ctx.status(409), ctx.json({ message: "email is required" }));
      })
    );

    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <Routes>
          <Route path="/login" element={<div>Login Success</div>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    const error = await screen.findByText("email is required");
    expect(error).toBeInTheDocument();
  });

  test("write a email address and password", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <Routes>
          <Route path="/login" element={<div>Login Success</div>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </MemoryRouter>
    );

    const passwordInput = screen.getByPlaceholderText("Password");
    const emailInput = screen.getByPlaceholderText("Email address");

    userEvent.type(emailInput, "jorge@mail.com");
    expect(emailInput).toHaveValue("jorge@mail.com");

    userEvent.type(passwordInput, "testing");
    expect(passwordInput).toHaveValue("testing");
  });
});
