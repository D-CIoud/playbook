//FACEBOOK
// * user
// * post
// * biography

const userfb = {
    name: "Jon. Vidales",
    Apodo: "DCloud",
    Informacion: ["Estudios: Estudió en ... ", "Vive en: ... ", "De: .. "],
    Amigos: ["Joel Pérez", "Bruce Sanchez", "Cecilio Esparza"],
    getUserData: function(){
        return `Nombre de Usuario: ${this.name}\nApodo: ${this.Apodo}\nInformación: ${this.Informacion}`
    }
}

console.log("Datos del Usuario")
console.log(userfb.getUserData())

const post = {
    title: "Crear publicación",
    Description: "Qué estás pensando?",
    Feling: ["Feliz", "Triste", "Pensativo"],
    AddToPost: ["Foto","Archivo","Ubicación"],
    getPostData: function(){
        return `${this.title}\n${this.Description}\nMe Siento: ${this.Feling}\nAgregar: ${this.AddToPost}`
    }
}

console.log("\nNUEVO POST")
console.log(post.getPostData())

//BIOGRAFÍA 
const biography= {
    titleName: "Jonathan Vidales",
    nickName: "Jona",
    Description: "Hola Soy Jona y estoy realizando esta práctica....",
    friendsNum: 208,
    tabs: ["Post's","Information","Friend's","Pictures","Videos"],
    getBiography: function(){
        return `${this.titleName}\n${this.nickName}\nDescription: ${this.Description}\nFriends: ${this.friendsNum}\nOptions: ${this.tabs}`
    }
}

console.log("\nBIOGRAFIA")
console.log(biography.getBiography())

