class Person {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    return "My name é " + this.name;
  }
}

module.exports = {
  Person,
};
