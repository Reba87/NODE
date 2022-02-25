class profesional {

    // Declarando constructor y sus atributos //
    constructor (name, age, weight, height, hairColor, eyeColor, race, isRetired,
                 nationality, oscarNumber, profession)
                 { 
                     this.name = name;
                     this.age = age;
                     this.weight = weight;
                     this.height = height;
                     this.hairColor = hairColor;
                     this.eyeColor = eyeColor;
                     this.race = race;
                     this. isRetired = isRetired;
                     this.nationality = nationality;
                     this.oscarNumber = oscarNumber;
                     this.profession = profession;
                     
                 }

    // Declarando metodo de mostrar todo // //
    printAll(constructor)
    {
        for(let key1 in constructor)
        {  
           console.log(key1 + "-" + constructor[key1] )     
          
        }      
    }
}


module.exports = profesional