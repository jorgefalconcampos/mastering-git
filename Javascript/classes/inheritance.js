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



class Employee extends Person{
    constructor(name, last_name, department){
        super(name, last_name, department); // calling parent class constructor
        this.department = department;
    }

    get department(){
        return this._department;
    }

    set department(department){
        this._department = department;
    }

    fullName(){
        return this._name + ' ' + this._last_name;
    }

}


let employee1 = new Employee('Ernesto', 'Hernández', 'IT');


console.log(employee1.fullName());