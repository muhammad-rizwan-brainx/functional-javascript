const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
};

console.log(person.fullName.apply(person1, ['New York', 'USA']));
console.log(person.fullName.apply(person2, ['London', 'UK']));
