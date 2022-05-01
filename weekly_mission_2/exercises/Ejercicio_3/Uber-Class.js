class Uber{
    constructor(Profile,Travel,){
        this.Profile = Profile;
        this.Travel = Travel;
    }
}

const profileData = {
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

//Travel
const travelData = {
    from: "Select the start point for the travel",
    to: "Select the point of destiny",
    savedplaces: ["Home", "Work"],
    type: ["UberX - $XXX", "Comfort - $XXX"],
    getTravel: function(){
        return `Travel from: ${this.from}\nTo: ${this.to}\nTo Saved Places: ${this.savedplaces}\nTravel Type: ${this.type}`
    }
}

const uberUserData = new Uber(profileData,travelData);

console.log(uberUserData);