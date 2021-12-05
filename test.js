describe("Door creation methods", () => {
  it("Verify correct creation of a closed and unlocked door with a key 'key1'", () => {
    const door = Door.createClosedAndUnlockedDoor("key1");
    assert.equal(door.opened, false);
    assert.equal(door.locked, false);
    assert.equal(door.key, "key1");
  });
  it("Verify correct creation of a closed and locked door with a key 'key2'", () => {
    const door = Door.createClosedAndLockedDoor("key2");
    assert.equal(door.opened, false);
    assert.equal(door.locked, true);
    assert.equal(door.key, "key2");
  });
  it("Verify correct creation of an opened and unlocked door with a key 'key3'", () => {
    const door = Door.createOpenedAndUnlockedDoor("key3");
    assert.equal(door.opened, true);
    assert.equal(door.locked, false);
    assert.equal(door.key, "key3");
  });
  it("Verify correct creation of an opened and locked door with a key 'key4'", () => {
    const door = Door.createOpenedAndLockedDoor("key4");
    assert.equal(door.opened, true);
    assert.equal(door.locked, true);
    assert.equal(door.key, "key4");
  });
});
describe("Door state methods", () => {
  it("Validate that a closed and unlocked door must be closed, NOT opened, unlocked and NOT locked", () => {
    const door = Door.createClosedAndUnlockedDoor("key1");
    assert.equal(door.isClosed(), true);
    assert.equal(door.isOpened(), false);
    assert.equal(door.isUnlocked(), true);
    assert.equal(door.isLocked(), false);
  });
  it("Validate that a closed and locked door must be closed, NOT opened, locked and NOT unlocked", () => {
    const door = Door.createClosedAndLockedDoor("key2");
    assert.equal(door.isClosed(), true);
    assert.equal(door.isOpened(), false);
    assert.equal(door.isUnlocked(), false);
    assert.equal(door.isLocked(), true);
  });
  it("Validate that an opened and unlocked door must be opened, NOT closed, unlocked and NOT locked", () => {
    const door = Door.createOpenedAndUnlockedDoor("key3");
    assert.equal(door.isClosed(), false);
    assert.equal(door.isOpened(), true);
    assert.equal(door.isUnlocked(), true);
    assert.equal(door.isLocked(), false);
  });
  it("Validate that an opened and locked door must be opened, NOT closed, locked and NOT unlocked", () => {
    const door = Door.createOpenedAndLockedDoor("key4");
    assert.equal(door.isClosed(), false);
    assert.equal(door.isOpened(), true);
    assert.equal(door.isUnlocked(), false);
    assert.equal(door.isLocked(), true);
  });
});
describe("Door state changing methods", () => {
  it("Validate that a closed door, when trying to open, will open.", () => {
    const door = Door.createClosedAndUnlockedDoor("key1");
    door.open();
    assert.equal(door.isOpened(), true);
    assert.equal(door.isClosed(), false);
    assert.equal(door.isLocked(), false);
    assert.equal(door.isUnlocked(), true);
  });
  it("Validate that a closed door, when trying to close, will trigger an error.", () => {
    const door = Door.createClosedAndUnlockedDoor("key2");
    expect(() => door.close()).to.throw("Door already closed");
  });
  it("Validate that an opened door, when trying to close, will close.", () => {
    const door = Door.createOpenedAndUnlockedDoor("key3");
    door.close();
    assert.equal(door.isOpened(), false);
    assert.equal(door.isClosed(), true);
    assert.equal(door.isLocked(), false);
    assert.equal(door.isUnlocked(), true);
  });
  it("Validate that an opened door, when trying to open, will trigger an error", () => {
    const door = Door.createOpenedAndUnlockedDoor("key4");
    expect(() => door.open()).to.throw("Door already opened");
  });
  it("Validate that an unlocked door, when trying to lock, will lock.", () => {
    const door = Door.createClosedAndUnlockedDoor("key5");
    door.lock();
    assert.equal(door.isOpened(), false);
    assert.equal(door.isClosed(), true);
    assert.equal(door.isLocked(), true);
    assert.equal(door.isUnlocked(), false);
  });
  it("Validate that an unlocked door, when trying to unlock without a key, will throw a 'No key provided' error.", () => {
    const door = Door.createClosedAndUnlockedDoor("key6");
    expect(() => door.unlock("")).to.throw("No key provided");
  });
  it("Validate that an unlocked door, when trying to unlock with the incorrect key, will throw a 'Keys don't match' error.", () => {
    const door = Door.createClosedAndUnlockedDoor("key6");
    expect(() => door.unlock("key5")).to.throw("Keys don't match");
  });
  it("Validate that an unlocked door, when trying to unlock with the correct key, will throw a 'Door already unlocked' error.", () => {
    const door = Door.createClosedAndUnlockedDoor("key6");
    expect(() => door.unlock("key6")).to.throw("Door already unlocked");
  });
  it("Validate that a locked door, when trying to unlock with the correct key, will unlock.", () => {
    const door = Door.createOpenedAndLockedDoor("key7");
    door.unlock("key7");
    assert.equal(door.isOpened(), true);
    assert.equal(door.isClosed(), false);
    assert.equal(door.isLocked(), false);
    assert.equal(door.isUnlocked(), true);
  });
  it("Validate that a locked door, when trying to lock, will trigger an error", () => {
    const door = Door.createOpenedAndLockedDoor("key8");
    expect(() => door.lock()).to.throw("Door already locked");
  });
});
