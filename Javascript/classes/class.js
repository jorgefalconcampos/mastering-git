class Person{
    constructor(name, last_name){
        this._name = name;
        this._last_name = last_name;
    }

    get name(){
        return this._name;
    }

    set name(nombre){
        this._name = nombre;
    }

    get last_name(){
        return this._last_name;
    }

    set last_name(apellido){
        this._last_name = apellido;
    }


}

let new_person = new Person('Juan', 'Juarez'); // instanciando la clase

console.log(new_person)

// GET method
console.log(new_person.name)

// SET
new_person.name = 'Pepe'

console.log(new_person)
console.log(new_person.name)
