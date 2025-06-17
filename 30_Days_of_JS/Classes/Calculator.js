class Calculator {
  constructor(value) {
    this.Number = value;
  }

  add(value) {
    this.Number += value;
    return this;
  }

  subtract(value) {
    this.Number -= value;
    return this;
  }

  multiply(value) {
    this.Number *= value;
    return this;
  }

  divide(value) {
    if (value == 0) {
      this.Number = "Division by zero is not allowed";
      return this;
    }
    this.Number /= value;
    return this;
  }

  power(value) {
    this.Number = Math.pow(this.Number, value);
    return this;
  }

  getResult() {
    return this.Number;
  }
}

let b = new Calculator(10);
console.log(b.divide(10).getResult());
