let calculator = {
  argA: 0,
  argB: 0,

  read: function (a, b) {
    this.argA = a;
    this.argB = b;
  },
  sum: function () {
    return this.argA + this.argB;
  },
  mul: function () {
    return this.argA * this.argB;
  }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
