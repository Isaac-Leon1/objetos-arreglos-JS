const user = ["Isaac", 6462791,[1358423113925729,1358423113925730,1358423113925731]]
//Destructurar en linea
const [name, id, id_tweets] = user

console.log("Nombre de usuario:",name)
console.log("Id del usario",id)
console.log("Arreglo de tweets:",id_tweets)

console.log("\n")
//Saltar un valor
const [name2, , id_tweets2] = user

console.log("Nombre de usuario:",name2)
console.log("Arreglo de tweets:",id_tweets2)

console.log("\n")
//Arrays anidados
const id_tweets3 = user[2]
const tweet1 = id_tweets3[1]

console.log("El segundo tweet:",tweet1)