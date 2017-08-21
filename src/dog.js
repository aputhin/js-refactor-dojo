class Dog {
  constructor(name) {
    this.name = name;
    this.state = 'up';
  }

  bark() {
    return 'Woof woof!';
  }

  is() {
    return this.state;
  }

  getUp() {
    this.state = 'up';
  }

  sit() {
    this.state = 'sat down';
  }

  talk() {
    return 'Ahorita no, joven';
  }
}

export default Dog
