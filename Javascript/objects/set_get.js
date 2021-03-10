let person = {
    name: 'Pepe',
    last_name: 'Campa',
    mail: 'pc@mail.com',
    age: 20,
    language: 'ES_MX',
    get lang(){
        return this.language.toUpperCase();
    },

    set lang(lng){
        this.language = lng.toUpperCase();
    },

    // get fullname(){
    //     return this.name + ' ' + this.last_name;
    // }
}

console.log(person.lang);
person.lang = 'en';
console.log(person.lang);
