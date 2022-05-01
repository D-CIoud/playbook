class Twitter {
    constructor(User,Trending,Hashtag)
    {
        this.User = User;
        this.Trending = Trending;
        this.Hashtag = Hashtag;
    }
}

const userData = {
    username: "@Jona0500",
    description: "Chico amante de los juegos clásicos al que le gusta divertirse , hacer tonterías y pasarsela con sus amigos.",
    Birthday: "04-05-1998",
    getUserInfo: function(){
        return `Nombre de usuario: ${this.username} | Descripción: ${this.description} | Cumpleaños: ${this.Birthday}`
    }
}

const trending_topicsData = {
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

const hashtagData = {
    etiqueta: "Hastags populares:",
    lista: ["Madona", "Nintendo", "Playstation", "XBOX", "P4AU"],
    getHashtags: function(){
        return this.lista
    }
}

const twitterUserData = new Twitter(userData,trending_topicsData,hashtagData);

//Imprimos los datos de la clase
console.log(twitterUserData)