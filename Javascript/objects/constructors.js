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


// in order to add a new object attribute out of the constructor, we use prototype
Person.prototype.tel = '5512345678'
// previous line will add the '5512345678' number in any onistance of "Person"
