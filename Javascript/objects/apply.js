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

let array = ['ll@mail.com', 30] // the difference between call & apply is that '.apply' method expects an array
console.log(person1.fullName.apply(person2, array));
