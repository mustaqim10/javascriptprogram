function Emp(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    var print = function () {
        Console.log(this.name + "" + this.id);
    }
}
mustaqim = new Emp(1, "mustaqim kaderia", 19);
faiz = new Emp(2, "faiz kaderia", 17);
console.log(mustaqim);
console.log(mustaqim.print());


