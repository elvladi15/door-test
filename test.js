describe("Door tests", () => {
  it("Validate that a closed door, when trying to open, will open", () => {
    const door = closedAndUnlocked();
    assert.equal(door.open(), "door has been opened!");
  });
});
