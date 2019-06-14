var person = {
    id: 1, name: "mustaqim", print: function () {
        console.log(this.id + "" + this.name);
    }
};
console.log(person);
console.log(person.name);
console.log(person.id);
delete person.id;
console.log(person.id);
person.fees = 10000;
console.log(person);
person.print();


