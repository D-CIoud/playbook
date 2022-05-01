//Tenemos la clase FB la cual recibe como parametros 3 datos
class FB {
    constructor(userFB,Post,Biography){
        this.userFB = userFB;
        this.Post = Post;
        this.Biography = Biography;
    }
}

const userfbdata = {
    name: "Jon. Vidales",
    Apodo: "DCloud",
    Informacion: ["Estudios: Estudió en ... ", "Vive en: ... ", "De: .. "],
    Amigos: ["Joel Pérez", "Bruce Sanchez", "Cecilio Esparza"],
    getUserData: function(){
        return `Nombre de Usuario: ${this.name}\nApodo: ${this.Apodo}\nInformación: ${this.Informacion}`
    }
}

const PostData = {
    title: "Crear publicación",
    Description: "Qué estás pensando?",
    Feling: ["Feliz", "Triste", "Pensativo"],
    AddToPost: ["Foto","Archivo","Ubicación"],
    getPostData: function(){
        return `${this.title}\n${this.Description}\nMe Siento: ${this.Feling}\nAgregar: ${this.AddToPost}`
    }
}

const biographyData = {
    titleName: "Jonathan Vidales",
    nickName: "Jona",
    Description: "Hola Soy Jona y estoy realizando esta práctica....",
    friendsNum: 208,
    tabs: ["Post's","Information","Friend's","Pictures","Videos"],
    getBiography: function(){
        return `${this.titleName}\n${this.nickName}\nDescription: ${this.Description}\nFriends: ${this.friendsNum}\nOptions: ${this.tabs}`
    }
}

const fbclass = new FB(userfbdata,PostData,biographyData)

console.log(fbclass)