import fs from "fs/promises"

const fileHandler = await fs.open("./testing.txt" , "r")

//* Asynchronous execution of code.
const data = await fileHandler.readFile("utf-8");
console.log(data);