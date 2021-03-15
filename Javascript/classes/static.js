class Person{

    static counter = 0; // class attribute

    email = "default_email@mail.com" // object attribute

    constructor(name, last_name){
        this._name = name;
        this._last_name = last_name;
        Person.counter++;
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

    static greeting(){
        console.log("Hey, hello!");
    }

    static greeting2(person){
        console.log(`Hey, hello ${person.name} ${person.last_name}!`)
    }


}

let new_person = new Person('Juan', 'Juarez'); // instanciando la clase

console.log(new_person)

// new_person.greeting(); // this isn't possible
Person.greeting(); // this is possible

Person.greeting2(new_person);

console.log(new_person.email); // object attribute
