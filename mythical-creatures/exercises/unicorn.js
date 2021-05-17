class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }

  isWhite() {
    if (this.color === "white") {
      return true
    } else {
      return false
    }
  }

  says(saying) {
    return `**;* ${saying} *;**`
  }
}

module.exports = Unicorn;
