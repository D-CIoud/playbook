class Person {
    constructor(name, exercises_completed, rate, city, stack, missions) {
        this.name = name;
        this.exersices_completed = exercises_completed;
        this.rate = rate;
        this.city = city;
        this.stack = stack;
        this.missions = missions
    }
}

const person = new Person("Jonathan", 10, 11, "Reynosa", ["JS", "C#"], {onboarding:{isFinished: true,exercisesFinished: true},frontend:{isFinished:true,exercisesFinished:true}})

console.log(person)