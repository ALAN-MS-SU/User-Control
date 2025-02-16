import { Position, User } from "../../src/model";

describe("Testing api/EditPosition/:ID", () => {
  it("GET user", async () => {
    const response = await fetch("http://localhost:3000/api/EditPosition/0", {
      method: "GET",
    });
    expect(response.ok).toBe(true);
  });
  it("PUT position success", async () => {
    const body = new FormData();
    const user = new User(0, "Name", Position.USER, "Email", "Password");
    Object.keys(user).forEach((key) => {
      body.append(key, user[key]);
    });
    const response = await fetch("http://localhost:3000/api/EditPosition/0", {
      method: "PUT",
      body,
      headers: {
        Cookie: "next-auth.session-token=test",
      },
    });
    expect(response.ok).toBe(true);
  });
  it("PUT position failed (no cookie)", async () => {
    const body = new FormData();
    const user = new User(0, "Name", Position.USER, "Email", "Password");
    Object.keys(user).forEach((key) => {
      body.append(key, user[key]);
    });
    const response = await fetch("http://localhost:3000/api/EditPosition/0", {
      method: "PUT",
      body,
    });
    expect(response.ok).toBe(false);
  });
  it("PUT position failed (no cookie)", async () => {
    const body = new FormData();
    const user = new User(0, "Name", Position.USER, "Email", "Password");
    Object.keys(user).forEach((key) => {
      body.append(key, user[key]);
    });
    const response = await fetch("http://localhost:3000/api/EditPosition/0", {
      method: "PUT",
      body,
    });
    expect(response.ok).toBe(false);
  });
  it("PUT position success", async () => {
    const response = await fetch("http://localhost:3000/api/EditPosition/0", {
      method: "PUT",
      headers: {
        Cookie: "next-auth.session-token=test",
      },
    });
    expect(response.ok).toBe(false);
  });
});
