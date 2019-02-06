const cardinals = ["north", "south", "east", "west"];

class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {
    let changed = false;

    cardinals.forEach(cardinal => {
      if (direction === cardinal) {
        this.bearing = direction;
        changed = true;
      }
    });

    if (changed === false) {
      throw new Error("Invalid robot bearing.");
    }
  }

  place(location) {
    this.setCoordinates(location.x, location.y)
    this.setBearing(location.direction)
  }

  turnRight() {
    switch (this.bearing) {
      case "north":
        this.setBearing("east")
        break;
      case "east":
        this.setBearing("south")
        break;
      case "south":
        this.setBearing("west")
        break;
      case "west":
        this.setBearing("north")
        break;
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.setBearing("west");
        break;
      case "west":
        this.setBearing("south")
        break;
      case "south":
        this.setBearing("east")
        break;
      case "east":
        this.setBearing("north")
        break;
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
        ++this.coordinates[1];
        break;
      case "west":
        --this.coordinates[0];
        break;
      case "south":
        --this.coordinates[1];
        break;
      case "east":
        ++this.coordinates[0];
        break;
    }
  }

  translateInstructions(instructions) {
    const steps = instructions.split("")
    steps.forEach(step => {
      switch(step) {
        case "R":
          this.turnRight();
          break;
        case "L":
          this.turnLeft();
          break;
        case "A":
          this.advance();
          break;
      }
    })
  }

}
