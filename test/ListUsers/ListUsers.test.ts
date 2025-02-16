describe("Testing api/ListUsers/:ID", () => {
  it("Testing ListUsers success", async () => {
    const response = await fetch(`http://localhost:3000/api/ListUsers/1`, {
      method: "GET",
    });
    return expect(response.ok).toBe(true);
  });
});
