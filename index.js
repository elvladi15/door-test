class Door {
  constructor(opened, locked, key) {
    this.opened = opened;
    this.locked = locked;
    if (key == null) {
      return Error("No key specified");
    }
    this.key = key;
  }
  //create new door
  static createClosedAndUnlockedDoor(key) {
    return new Door(false, false, key);
  }
  static createClosedAndLockedDoor(key) {
    return new Door(false, true, key);
  }
  static createOpenedAndUnlockedDoor(key) {
    return new Door(true, false, key);
  }
  static createOpenedAndLockedDoor(key) {
    return new Door(true, true, key);
  }
  //change door state
  open() {
    if (!this.opened) {
      this.opened = true;
      return this;
    }
    throw new Error("Door already opened");
  }
  close() {
    if (this.opened) {
      this.opened = false;
      return this;
    }
    throw new Error("Door already closed");
  }
  lock() {
    if (!this.locked) {
      this.locked = true;
      return this;
    }
    throw new Error("Door already locked");
  }
  unlock(key) {
    if (key) {
      if (key === this.key) {
        if (this.locked) {
          this.locked = false;
          return this;
        }
        throw new Error("Door already unlocked");
      }
      throw new Error("Keys don't match");
    }
    throw new Error("No key provided");
  }
  //get door state
  isOpened() {
    return this.opened;
  }
  isClosed() {
    return !this.opened;
  }
  isLocked() {
    return this.locked;
  }
  isUnlocked() {
    return !this.locked;
  }
}
