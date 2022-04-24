//TWITTER
//  CLASE
// username
// description
// Birthday

const usernameTwit = {
    username: "@Jona0500",
    description: "Chico amante de los juegos clásicos al que le gusta divertirse , hacer tonterías y pasarsela con sus amigos.",
    Birthday: "04-05-1998",
    getUserInfo: function(){
        return `Nombre de usuario: ${this.username} | Descripción: ${this.description} | Cumpleaños: ${this.Birthday}`
    }
}

console.log("Información del usuario:")
console.log(usernameTwit.getUserInfo())

const trending_topic = {
    encabazado: "Qué está pasando",
    Noticia1: {
        Titulo: "COVID-19",
        Tendencia: "En Directo"
    },
    Noticia2: {
        Titulo: "XBOX",
        Tendencia: "Gaming"
    },
    getTrendingTopics: function(){
        return `${this.encabazado} | ${this.Noticia1.Titulo} / ${this.Noticia1.Tendencia} | ${this.Noticia2.Titulo} / ${this.Noticia2.Tendencia}`
    }
}

console.log("TRENDING TOPICS")
console.log(trending_topic.getTrendingTopics())


const hashtag = {
    etiqueta: "Hastags populares:",
    lista: ["Madona", "Nintendo", "Playstation", "XBOX", "P4AU"],
    getHashtags: function(){
        return this.lista
    }
}

console.log("HASHTAGS")
console.log(hashtag.etiqueta)
console.log(hashtag.getHashtags())