describe("Testing api/ListUsers/:ID", () => {
  it("Testing ListUsers success", async () => {
    const response = await fetch(`http://localhost:3000/api/ListUsers/0`, {
      method: "GET",
    });
    return expect(response.ok).toBe(true);
  });
  it("Testing ListUsers failed", async () => {
    const response = await fetch(`http://localhost:3000/api/ListUsers/fail`, {
      method: "GET",
    });
    return expect(response.ok).toBe(false);
  })
});
