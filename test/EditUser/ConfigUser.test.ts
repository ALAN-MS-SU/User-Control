import { Position, User } from "../../src/model";

describe("Testing api/ConfigUser/:ID", () => {
  it("User config success", async () => {
    const body = new FormData();
    const user = new User(1, "Name", Position.USER, "Email", "Password");
    Object.keys(user).forEach((key) => {
      body.append(key, user[key]);
    });
    const response = await fetch(`http://localhost:3000/api/ConfigUser/0`, {
      method: "PUT",
      body,
      headers: {
        Cookie: "next-auth.session-token=test",
      },
    });
    expect(response.ok).toBe(true);
  });
  it("User config failed (no cookie)", async () => {
    const body = new FormData();
    const user = new User(1, "Name", Position.USER, "Email", "Password");
    Object.keys(user).forEach((key) => {
      body.append(key, user[key]);
    });
    const response = await fetch(`http://localhost:3000/api/ConfigUser/0`, {
      method: "PUT",
      body,
    });
    expect(response.ok).toBe(false);
  });
  it("User config failed (no user data)", async () => {
    const response = await fetch(`http://localhost:3000/api/ConfigUser/0`, {
      method: "PUT",
      headers: {
        Cookie: "next-auth.session-token=test",
      },
    });
    expect(response.ok).toBe(false);
  });
  it("Delete User success", async () => {
    const response = await fetch(`http://localhost:3000/api/ConfigUser/0`, {
      method: "DELETE",
      headers: {
        Cookie: "next-auth.session-token=test",
      },
    });
    expect(response.ok).toBe(true);
  })
  it("Delete User failed (no cookie)", async () => {
    const response = await fetch(`http://localhost:3000/api/ConfigUser/0`, {
      method: "DELETE",
    });
    expect(response.ok).toBe(false);
  })
});
