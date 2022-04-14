
//GitHub
const repo = {
    name: "LaunchX",
    author: "DCIoud",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("GITHUB")
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

//Issue
const issue = {
    title: "No puedo cargar mis prácticas",
    repositoryNameAssociated: "playbook",
    status: "Open",
    numberOfComments: 10,
    labels: "Ayuda,Carga de Prácticas",
    author: "Jonathan",
    dateCreated: "12-04-22",
    lastUpdated: "13-04-22",
    getTitleAndAuthor: function () {
        return `Titulo del Issue: ${this.title}, creado por: ${this.author} `
    },
    getGeneralInfo: function () {
        return `Datos Generales: Fecha de Creación: ${this.dateCreated} , No. de Comentarios: ${this.numberOfComments} , Etiquetas: ${this.labels} , Ultima Actualización: ${this.lastUpdated}`
    }
}

console.log("ISSUE")
console.log("Nombre del Issue:" + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

//Pull Request
const pullrq = {
    title: "Actualización ...",
    branchName: "main",
    dateCreated: "13-04-22",
    status: "Pendiente de cargar",
    repositoryNameAssociated: "Playbook",
    author: "Jonathan Vidales",
    getStatus: function(){
        return 'Estatus actual del PRQ:' + this.status
    },
    getTitleAndAuthor: function(){
       return 'Titulo del PRQ: ' + this.title + ', Autor: ' + this.author
    }
}

console.log("PULL REQUEST")
console.log(pullrq.title)
console.log(pullrq.getStatus())
console.log(pullrq.getTitleAndAuthor())
