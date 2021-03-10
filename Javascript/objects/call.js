let person1 = {
    name: 'Pepe',
    last_name: 'Campa',
    mail: 'pc@mail.com',
    age: 20,
    fullName: function(correo, edad){
        return this.name + ' ' + this.last_name + '\n' + correo + ' ' + edad;
    }
}

let person2 = {
    name: 'Luis',
    last_name: 'Lopez',
}

// console.log(person1.fullName.call(person2));

// in the previous line, we called the 'fullName' method inside person1 object with person2 parameters
// that is possible thanks to the '.call' method
// this will work only when there're similar structures in the objects

console.log(person1.fullName.call(person2, 'll@mail.com', 30));
