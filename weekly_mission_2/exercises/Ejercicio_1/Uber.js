//PERFIL
const profile = {
    name: "Jonathan Vidales",
    trips: 33,
    ranking: 4.5,
    years: 1,
    languages: ["Spanish","English"],
    from: "México",
    funFact: "I like hot cheetos",
    getProfile: function(){
        return `Name: ${this.name}\nTrips: ${this.trips}\nRating: ${this.ranking}\nYears: ${this.years}\nLanguages: ${this.languages}\nFrom: ${this.from}\nFun Fact: ${this.funFact}`
    }
}

console.log("UBER PROFILE")
console.log(profile.getProfile())


//Travel
const travel = {
    from: "Select the start point for the travel",
    to: "Select the point of destiny",
    savedplaces: ["Home", "Work"],
    type: ["UberX - $XXX", "Comfort - $XXX"],
    getTravel: function(){
        return `Travel from: ${this.from}\nTo: ${this.to}\nTo Saved Places: ${this.savedplaces}\nTravel Type: ${this.type}`
    }
}

console.log("\nTRAVEL")
console.log(travel.getTravel())