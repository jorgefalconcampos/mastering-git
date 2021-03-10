let person = {
    name: 'Pepe',
    last_name: 'Campa',
    mail: 'pc@mail.com',
    age: 20,
    fullname: function(){
        return this.name + ' ' + this.last_name;
    }
}


console.log(person.name);
console.log(person["last_name"]);


for(property in person){
    // console.log(property);
    // console.log(person[property]);
    console.log(`${property}: ${person[property]}`);
}

delete person.age; // deletes the object's property