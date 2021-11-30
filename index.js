class Door {
  constructor(opened, locked) {
    this.opened = opened;
    this.locked = locked;
  }
  open() {
    if (this.opened) {
      return "door already opened.";
    } else {
      this.opened = true;
      return "door has been opened!";
    }
  }
  close() {
    if (this.opened) {
      this.opened = false;
      return "door has been closed!.";
    } else {
      return "door already closed.";
    }
  }
  lock() {
    if (this.locked) {
      return "door already locked.";
    } else {
      this.locked = true;
      return "door has been locked!";
    }
  }
  unlock() {
    if (this.locked) {
      this.locked = false;
      return "door has been unlocked!.";
    } else {
      return "door already unlocked.";
    }
  }

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

function closedAndUnlocked() {
  return new Door(false, false);
}
function closedAndLocked() {
  return new Door(false, true);
}
function openedAndUnlocked() {
  return new Door(true, false);
}
function openedAndLocked() {
  return new Door(true, true);
}

const door1 = openedAndUnlocked();

console.log();
