const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}, and the total price is £${totalPrice}`;
  },
};

menu.addDishToCourse('appetizers', 'salad', 4);
menu.addDishToCourse('appetizers', 'chips', 3);
menu.addDishToCourse('appetizers', 'soup', 4);

menu.addDishToCourse('mains', 'steak', 12);
menu.addDishToCourse('mains', 'chicken', 9.50);
menu.addDishToCourse('mains', 'ceasar salad', 8);

menu.addDishToCourse('desserts', 'ice cream', 4);
menu.addDishToCourse('desserts', 'brownie', 5);
menu.addDishToCourse('desserts', 'creme brulee', 5);

const meal = menu.generateRandomMeal();
console.log(meal);
