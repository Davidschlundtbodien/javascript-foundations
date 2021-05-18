var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = []
  }

  gazeAtVictim(victim) {
    if (this.statues.length < 3) {
      this.statues.push(new Statue(victim.name))
    } else {
      var released = this.statues.shift()
      this.statues.push(new Statue(victim.name))
       return new Person(released.name, "relieved")
    }
  }

}


module.exports = Medusa;
