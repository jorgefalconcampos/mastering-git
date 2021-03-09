// constructor function 

function Person(name, last_name, email){
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.fullName = function(){
        return this.name + ' ' + this.last_name;
    }
}

let p = new Person('Luis', 'Lopez', 'll@mail.com');
console.log(p.fullName());

let m = new Person('Maria', 'Magdalena', 'mm@gmail.com');
console.log(m.fullName());
