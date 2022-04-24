const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]



//Mostrar nombre y stack de cada explorer
explorers.forEach(explorer => console.log(`Nombre: ${explorer.name}\nStack: ${explorer.stack}\n`))

//3 - Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
var stacks = explorers.map(function(x) {
    return x.stack
})

console.log(stacks)
console.log(`\n`)

//4 - Filtrar explorers que tengan en su stack JS  por medio de la función filter y apoyandonos de includes
const explorersJS = explorers.filter(explorer => explorer.stack.includes("js"));
console.log(explorersJS)
console.log(`\n`)

//5 - Busca el primer explorer que sea de la CDMX, usa FIND
const usodeFind = explorers.find(explorer => explorer = 'CDMX');

console.log(usodeFind)
console.log(`\n`)

//6 - Obtén la suma de todos los exercises_completed, usa REDUCE

const usoReduce = explorers.reduce((x, explorer) => x + explorer.exercises_completed, 0)
console.log("USO DE REDUCE")
console.log(usoReduce)
console.log("\n")

//7 - Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const value = explorers.some(item => item.missions.frontend.exercisesFinished === true)
    
console.log("USO DE SOME");
console.log(value);
console.log("\n")

//8- Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const terminoOnboarding = (explorer) => explorer.missions.onboarding.isFinished === true;

console.log("USO DE EVERY")
console.log(explorers.every(terminoOnboarding));        